<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";

const props = defineProps({
  color: { type: String, default: "#FDB813" }, // warna utama matahari
  scale: { type: Number, default: 2 },         // ukuran matahari
  pos:   { type: Object, default: () => ({ x: 0, y: 0, z: 0 }) }, // posisi
  speed: { type: Number, default: 0.15 },      // kecepatan animasi permukaan
  glow:  { type: Number, default: 1.0 },       // intensitas corona/halo
  lightIntensity: { type: Number, default: 2 } // intensitas PointLight utk scene lain
});

const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // ===== Matahari (permukaan emissive, procedural) =====
  const sunGeo = new THREE.SphereGeometry(1, 128, 128);

  const sunUniforms = {
    u_time: { value: 0 },
    u_speed: { value: props.speed },
    u_colorCore: { value: new THREE.Color(props.color) },      // oranye/kuning inti
    u_colorRim:  { value: new THREE.Color("#FFF6A0") },        // pinggiran lebih terang
    u_noiseScale: { value: 2.0 },   // skala noise (besar-kecil granulasi)
    u_brightness: { value: 1.2 },   // kecerahan keseluruhan
    u_contrast:   { value: 1.1 }    // kontras pola
  };

  // GLSL Noise (value noise + fbm)
  const NOISE_GLSL = `
  float hash(vec3 p){
    p = fract(p*0.3183099 + vec3(0.1,0.2,0.3));
    p *= 17.0;
    return fract(p.x*p.y*p.z*(p.x+p.y+p.z));
  }
  float noise(vec3 x){
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = mix(
      mix( mix(hash(i+vec3(0,0,0)), hash(i+vec3(1,0,0)), f.x),
           mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
      mix( mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x),
           mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y), f.z);
    return n;
  }
  float fbm(vec3 p){
    float v = 0.0;
    float a = 0.5;
    for (int i=0; i<5; i++){
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }`;

  const sunVert = `
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  void main(){
    vec4 wpos = modelMatrix * vec4(position,1.0);
    vWorldPos = wpos.xyz;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * viewMatrix * wpos;
  }`;

  const sunFrag = `
  uniform float u_time;
  uniform float u_speed;
  uniform vec3  u_colorCore;
  uniform vec3  u_colorRim;
  uniform float u_noiseScale;
  uniform float u_brightness;
  uniform float u_contrast;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  ${NOISE_GLSL}
  void main(){
    // koordinat noise di world space (agar pola stabil saat kamera bergerak)
    vec3 p = vWorldPos * u_noiseScale + vec3(0.0, 0.0, u_time * u_speed);

    // campur noise besar & kecil
    float nLarge = fbm(p * 0.5);
    float nSmall = fbm(p * 2.0);
    float n = mix(nLarge, nSmall, 0.5);

    // sorotan pinggir (sedikit fresnel buat rim highlight)
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float fresnel = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 2.0);

    // warna dasar dari core -> rim
    vec3 baseCol = mix(u_colorCore, u_colorRim, clamp(n * u_contrast, 0.0, 1.0));
    baseCol += fresnel * 0.25; // sedikit boost di pinggir

    // tingkatkan brightness
    baseCol *= u_brightness;

    gl_FragColor = vec4(baseCol, 1.0); // emissive (unlit)
  }`;

  const sunMat = new THREE.ShaderMaterial({
    uniforms: sunUniforms,
    vertexShader: sunVert,
    fragmentShader: sunFrag
  });

  const sun = new THREE.Mesh(sunGeo, sunMat);
  sun.position.set(props.pos.x, props.pos.y, props.pos.z);
  sun.scale.set(props.scale, props.scale, props.scale);
  scene.add(sun);

  // ===== Corona / Halo (additive, view-dependent) =====
  const coronaGeo = new THREE.SphereGeometry(1.15, 64, 64);
  const coronaUniforms = {
    u_time: { value: 0 },
    u_speed: { value: props.speed * 0.6 },
    u_color: { value: new THREE.Color(props.color) },
    u_intensity: { value: props.glow }, // atur tebal halo
    u_scale: { value: 1.5 }
  };

  const coronaFrag = `
  uniform float u_time;
  uniform float u_speed;
  uniform vec3  u_color;
  uniform float u_intensity;
  uniform float u_scale;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  ${NOISE_GLSL}
  void main(){
    vec3 N = normalize(vNormal);
    vec3 V = normalize(cameraPosition - vWorldPos);
    float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0); // tebal di tepi

    // modulasikan dengan noise supaya hidup
    float n = fbm(vWorldPos * u_scale + vec3(0.0, 0.0, u_time * u_speed));
    float a = fres * (0.5 + 0.5*n) * u_intensity;

    vec3 col = u_color * 1.5;
    gl_FragColor = vec4(col * a, a);
  }`;

  const coronaMat = new THREE.ShaderMaterial({
    uniforms: coronaUniforms,
    vertexShader: sunVert,
    fragmentShader: coronaFrag,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const corona = new THREE.Mesh(coronaGeo, coronaMat);
  corona.position.copy(sun.position);
  corona.scale.copy(sun.scale);
  scene.add(corona);

  // ===== Point light dari matahari (untuk objek lain di scene kamu) =====
  const sunLight = new THREE.PointLight(props.color, props.lightIntensity, 0); // jarak tak terbatas
  sunLight.position.copy(sun.position);
  scene.add(sunLight);

  // ===== Animasi =====
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    sunUniforms.u_time.value = t;
    coronaUniforms.u_time.value = t;

    // rotasi pelan
    sun.rotation.y += 0.0015;
    renderer.render(scene, camera);
  }
  animate();

  // Resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<template>
  <div ref="container" class="sun-container"></div>
</template>

<style scoped>
.sun-container {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: transparent;
  overflow: hidden;
}
</style>
