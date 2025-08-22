<template>
  <DotLottieVue ref="astronautRef" :src="spaceLottie" autoplay loop class="astronaut" />
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { gsap } from "gsap";
import spaceLottie from "../assets/2.lottie";

const astronautRef = ref(null);

function getResponsivePositions() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  return {
    startX: -0.2 * w, // kiri bawah
    startY: 0.8 * h,  // lebih ke bawah
    endX: 0.6 * w,    // kanan atas
    endY: 0.2 * h,    // agak atas
    returnX: -0.2 * w,
    returnY: 0.8 * h,
    finalX: 0.1 * w,
    finalY: 0.7 * h
  };
}

onMounted(async () => {
  await nextTick();
  const el = astronautRef.value.$el;
  const pos = getResponsivePositions();

  // Animasi pertama: bergerak dari kiri bawah ke kanan atas
  gsap.fromTo(
    el,
    { x: pos.startX, y: pos.startY, scale: 2, opacity: 1 },
    {
      x: pos.endX,
      y: pos.endY,
      scale: 0.5,
      opacity: 0,
      duration: 5,
      ease: "power1.inOut",
      onComplete: () => {
        // Animasi muncul kembali dari kiri bawah
        gsap.fromTo(
          el,
          { x: pos.returnX, y: pos.returnY, scale: 0.7, opacity: 0 },
          { x: pos.finalX, y: pos.finalY, scale: 0.7, opacity: 1, duration: 1, ease: "power1.out" }
        );
      }
    }
  );
});
</script>

<style scoped>
.astronaut {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99;
}
</style>
