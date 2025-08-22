<template>
  <section class="hero" id="home">
    <div class="hero-wrapper">
      <div class="hero-content">
        <!-- Gambar di kiri -->
        <div class="hero-image" ref="heroImage">
          <img :src="Profile" alt="Profile" loading="lazy" />
        </div>

        <!-- Teks di kanan -->
        <div class="text-content">
          <h1 ref="title">Halo, Saya <span>Muhammad Rizqi Kurniawan</span></h1>
          <p ref="role">Seorang Website Developer</p>
          <p ref="description">
            Saya membangun antarmuka web modern, responsif, dan interaktif menggunakan teknologi seperti 
            <strong>Vue.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>, dan <strong>JavaScript</strong> untuk <strong>Front-end</strong>. 
            Selain itu, saya menggunakan <strong>PHP Laravel</strong> untuk <strong>Back-end</strong> dan database menggunakan <strong>MySQL</strong> dan <strong>PostgreSQL</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Profile from '../assets/profile.jpg'
import '../css/home.css'

gsap.registerPlugin(ScrollTrigger)

const heroImage = ref(null)
const title = ref(null)
const role = ref(null)
const description = ref(null)

onMounted(() => {
  nextTick(() => {
    const elements = [heroImage.value, title.value, role.value, description.value]

    gsap.from(elements, {
      x: i => i === 0 ? -100 : 50, // heroImage dari kiri, teks dari kanan
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hero-wrapper',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      }
    })
  })
})
</script>
