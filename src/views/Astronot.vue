<template>
  <DotLottieVue ref="astronautRef" :src="spaceLottie" autoplay loop class="astronaut" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { gsap } from "gsap";
import spaceLottie from "../assets/2.lottie";

const astronautRef = ref(null);
let timeline = null;

function getResponsivePositions() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  return {
    startX: -0.2 * w,
    startY: 0.8 * h,
    endX: 0.6 * w,
    endY: 0.2 * h,
    finalX: 0.1 * w,
    finalY: 0.7 * h
  };
}

function setupAnimation() {
  const el = astronautRef.value?.$el;
  if (!el) return;

  const pos = getResponsivePositions();

  // Kill previous timeline jika ada
  if (timeline) timeline.kill();

  // Reset posisi awal
  gsap.set(el, { x: pos.startX, y: pos.startY, scale: 2, opacity: 1, willChange: "transform, opacity" });

  // Timeline animasi satu kali
  timeline = gsap.timeline();

  timeline
    .to(el, { x: pos.endX, y: pos.endY, scale: 0.5, opacity: 0, duration: 5 })
    .to(el, { x: pos.finalX, y: pos.finalY, scale: 0.7, opacity: 1, duration: 1 });
}

onMounted(() => {
  setupAnimation();
  window.addEventListener("resize", setupAnimation);
});

onBeforeUnmount(() => {
  if (timeline) timeline.kill();
  window.removeEventListener("resize", setupAnimation);
});
</script>

<style scoped>
.astronaut {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99;
  will-change: transform, opacity;
}
</style>
