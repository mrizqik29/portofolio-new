<template>
  <section class="hero" id="home">
    <div class="hero-wrapper">
      <div class="hero-content">
        <!-- Gambar di kiri -->
        <div class="hero-image" ref="heroImage">
          <img :src="Profile" alt="Profile" />
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
import Profile from '../assets/profile.jpg'
import '../css/home.css'

const heroImage = ref(null)
const title = ref(null)
const role = ref(null)
const description = ref(null)

onMounted(async () => {
  await nextTick()

  // Timeline animasi smooth
  gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } })
    .from(heroImage.value, { x: -100, opacity: 0 }) // image dari kiri
    .from([title.value, role.value, description.value], 
          { x: 50, opacity: 0, stagger: 0.2 }, "-=0.5") // teks dari kanan
})
</script>
