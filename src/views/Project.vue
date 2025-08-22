<template>
  <section class="experience" id="gallery">
    <div class="minitask">
      <div class="task-group-wrapper" ref="container">
        <div class="task-slide" v-for="(pair, idx) in slides" :key="idx">
          <div class="task-card" v-for="task in pair" :key="task.title">
            <div class="desain" v-if="task.image">
              <img :src="task.image" alt="Gambar Project" loading="lazy" style="will-change: transform, opacity;" />
            </div>
            <div class="text-content" style="will-change: transform, opacity;">
              <h3>{{ task.title }}</h3>
              <ul>
                <li v-for="(item, i) in task.items" :key="i">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/project.css';

gsap.registerPlugin(ScrollTrigger);

import desain2 from '../assets/2.jpg'
import desain3 from '../assets/3.png'
import desain4 from '../assets/4.png'
import desain5 from '../assets/5.jpg'
import desain6 from '../assets/6.png'
import desain7 from '../assets/7.png'
import desain8 from '../assets/8.jpg'

const tasks = [
  { title: "Desain Poster", image: desain6, items: ["Desain untuk Sosialisasi Vaksin Lansia"] },
  { title: "Desain Vector", image: desain2, items: ["Desain pribadi dengan Adobe Illustrator"] },
  { title: "Desain WPAP", image: desain3, items: ["Desain pribadi dengan Adobe Illustrator"] },
  { title: "Desain Vector", image: desain4, items: ["Desain pribadi dengan Adobe Illustrator"] },
  { title: "Desain Logo", image: desain5, items: ["Desain pribadi dengan Adobe Illustrator"] },
  { title: "Desain Logo", image: desain7, items: ["Desain pribadi dengan Adobe Illustrator"] },
  { title: "Desain Logo", image: desain8, items: ["Desain pribadi dengan Adobe Illustrator"] },
];

const container = ref(null);
const cardsPerSlide = ref(window.innerWidth > 768 ? 2 : 1);

const slides = computed(() => {
  const result = [];
  for (let i = 0; i < tasks.length; i += cardsPerSlide.value) {
    result.push(tasks.slice(i, i + cardsPerSlide.value));
  }
  return result;
});

let scrollTriggerInstance = null;

const setupGSAP = () => {
  if (!container.value) return;
  const sections = container.value.querySelectorAll(".task-slide");
  const totalSections = sections.length;

  gsap.set(container.value, { display: "flex", width: `${totalSections * 100}vw` });
  gsap.set(sections, { flex: `0 0 100vw` });

  if (scrollTriggerInstance) scrollTriggerInstance.kill();

  scrollTriggerInstance = gsap.to(sections, {
    xPercent: -100 * (totalSections - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container.value,
      start: "top top",
      end: () => `+=${totalSections * window.innerWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      snap: 1 / (totalSections - 1),
    }
  });
};

onMounted(() => {
  setupGSAP();
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  const prevCards = cardsPerSlide.value;
  cardsPerSlide.value = window.innerWidth > 768 ? 2 : 1;
  if (prevCards !== cardsPerSlide.value) setupGSAP();
};

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (scrollTriggerInstance) scrollTriggerInstance.kill();
});
</script>
