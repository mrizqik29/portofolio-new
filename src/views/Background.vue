<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

const container = ref(null);

function generateCircleTexture() {
  const size = 64; // lebih kecil
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, size, size);
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.3)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // --- Nebula ---
  const particles = 2500; // dikurangi
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particles * 3);
  const colors = new Float32Array(particles * 3);

  const noise3D = createNoise3D();
  const colorChoices = [
    new THREE.Color(0x9933ff),
    new THREE.Color(0x00aaff),
    new THREE.Color(0xff66cc),
  ];

  let ptr = 0;
  for (let i=0; i<particles; i++) {
    const x = (Math.random()-0.5)*20;
    const y = (Math.random()-0.5)*20;
    const z = (Math.random()-0.5)*20;
    const density = noise3D(x*0.15, y*0.15, z*0.15);

    if (density > 0) {
      positions.set([x, y, z], ptr*3);
      const t = (density+1)/2;
      const baseColor = colorChoices[Math.floor(t*colorChoices.length)];
      colors.set([baseColor.r, baseColor.g, baseColor.b], ptr*3);
      ptr++;
    }
  }

  // Resize Float32Array supaya sesuai jumlah valid partikel
  geometry.setAttribute("position", new THREE.BufferAttribute(positions.slice(0, ptr*3), 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors.slice(0, ptr*3), 3));

  const material = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    map: generateCircleTexture(),
    alphaTest: 0.01,
  });

  const nebula = new THREE.Points(geometry, material);
  scene.add(nebula);
  scene.add(new THREE.AmbientLight(0xffffff, 0.2));

  let prevTime = performance.now();
  function animate() {
    const curTime = performance.now();
    const delta = (curTime - prevTime) * 0.001; // detik
    prevTime = curTime;

    nebula.rotation.y += 0.07 * delta;
    nebula.rotation.x += 0.02 * delta;
    material.size = 0.2 + Math.sin(curTime*0.002)*0.03;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<template>
  <div ref="container" class="nebula-canvas"></div>
</template>

<style scoped>
.nebula-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -9;
  pointer-events: none;
  background: radial-gradient(circle at center, #022561 5%, #0a2149 45%, #020414 100%);
}
</style>
