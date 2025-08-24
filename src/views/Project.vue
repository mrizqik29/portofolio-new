<template>
  <section class="experience gallery-section" id="gallery" ref="gallerySection">
    <div class="task-group-wrapper">
      <!-- Judul di tengah -->
      <h2 class="gallery-title">Gallery</h2>

      <!-- Baris atas -->
      <div class="task-group-container row row-top">
        <div class="task-card" v-for="task in tasks.slice(0,4)" :key="task.title">
          <div class="desain" v-if="task.image">
            <img :src="task.image" :alt="task.title" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- Baris bawah -->
      <div class="task-group-container row row-bottom">
        <div class="task-card" v-for="task in tasks.slice(4)" :key="task.title">
          <div class="desain" v-if="task.image">
            <img :src="task.image" :alt="task.title" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/project.css'
gsap.registerPlugin(ScrollTrigger);

import desain2 from '../assets/2.jpg';
import desain3 from '../assets/3.png';
import desain4 from '../assets/4.png';
import desain5 from '../assets/5.jpg';
import desain6 from '../assets/6.png';
import desain7 from '../assets/7.png';
import desain8 from '../assets/8.jpg';

const tasks = [
  { title: "Desain Poster", image: desain6 },
  { title: "Desain Vector", image: desain2 },
  { title: "Desain WPAP", image: desain3 },
  { title: "Desain Vector", image: desain4 },
  { title: "Desain Logo", image: desain5 },
  { title: "Desain Logo", image: desain7 },
  { title: "Desain Logo", image: desain8 },
];

const gallerySection = ref(null);

onMounted(() => {
  nextTick(() => {
    const topCards = gallerySection.value.querySelectorAll(".row-top .task-card");
    const bottomCards = gallerySection.value.querySelectorAll(".row-bottom .task-card");

    // --- SET awal ---
    gsap.set(topCards, {
      opacity: 0,
      y: 150,
      rotationX: -60,
      transformOrigin: "center bottom",
    });
    gsap.set(bottomCards, {
      opacity: 0,
      y: 150,
      rotationX: 60,
      transformOrigin: "center top",
    });
    gsap.set(".gallery-title", { opacity: 0, y: -50, scale: 0.8 });

    // --- TIMELINE animasi ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gallerySection.value,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.to(topCards, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.15,
    })
    .to(bottomCards, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.15,
    }, "-=0.5")
    .to(".gallery-title", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");
  });
});
</script>
