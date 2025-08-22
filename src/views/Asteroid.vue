<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

const props = defineProps({
  color: { type: String, default: "#666666" },
  scale: { type: Number, default: 1 },
  pos: { type: Object, default: () => ({ x: 0, y: 0, z: 0 }) }
});

const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // Geometry dengan segment lebih sedikit (lebih ringan)
  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const noise3D = createNoise3D();

  // Akses langsung Float32Array untuk posisi
  const posAttr = geometry.attributes.position;
  const positions = posAttr.array;
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];

    const nx = x * 0.6, ny = y * 0.6, nz = z * 0.6;

    const n1 = noise3D(nx * 0.5, ny * 0.5, nz * 0.5) * 0.3;
    const n2 = noise3D(nx * 2.0, ny * 2.0, nz * 2.0) * 0.1;

    const scale = 1 + n1 + n2;

    positions[i]     = x * scale;
    positions[i + 1] = y * scale * 1.1; // sedikit lonjong
    positions[i + 2] = z * scale;
  }
  posAttr.needsUpdate = true;
  geometry.computeVertexNormals();

  // Material lebih ringan
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(props.color),
    flatShading: true
  });

  const asteroid = new THREE.Mesh(geometry, material);
  asteroid.position.set(props.pos.x, props.pos.y, props.pos.z);
  asteroid.scale.set(props.scale, props.scale, props.scale);
  scene.add(asteroid);

  // Cahaya sederhana
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(5, 3, 5);
  scene.add(dirLight);

  scene.add(new THREE.AmbientLight(0x404040, 0.4)); // tambahan cahaya lembut

  // Animasi
  function animate() {
    requestAnimationFrame(animate);
    asteroid.rotation.y += 0.004;
    asteroid.rotation.x += 0.002;
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
  <div ref="container" class="asteroid-container"></div>
</template>

<style scoped>
.asteroid-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: transparent;
  overflow: hidden;
}
</style>
