<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'

import '../css/skill.css'

gsap.registerPlugin(ScrollTrigger)

const webSkills = ref(null)
const creativeSkills = ref(null)
const sectionTitle = ref(null)

const webSkillsList = [
  { name: 'Laravel', logo: logo4 },
  { name: 'Vue.js', logo: logo5 },
  { name: 'HTML', logo: logo6 },
  { name: 'CSS', logo: logo7 },
]

const creativeSkillsList = [
  { name: 'After Effect', logo: logo1 },
  { name: 'Adobe Illustrator', logo: logo2 },
  { name: 'Premiere Pro', logo: logo3 },
]

onMounted(() => {
  nextTick(() => {
    // Animasi judul utama (opsional)
    if (sectionTitle.value) {
      gsap.from(sectionTitle.value, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionTitle.value,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        }
      })
    }

    // Animasi Web Developer
    const webItems = webSkills.value.querySelectorAll('.skill-item')
    gsap.fromTo(
      webSkills.value.querySelector('h1'),
      { y: -30, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: {
          trigger: webSkills.value,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        }
      }
    )
    gsap.fromTo(
      webItems,
      { y: 40, opacity: 0, scale: 0.85 },
      { 
        y: 0, opacity: 1, scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: webSkills.value,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        }
      }
    )

    // Animasi Creative
    const creativeItems = creativeSkills.value.querySelectorAll('.skill-item')
    gsap.fromTo(
      creativeSkills.value.querySelector('h1'),
      { y: -30, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: {
          trigger: creativeSkills.value,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        }
      }
    )
    gsap.fromTo(
      creativeItems,
      { y: 40, opacity: 0, scale: 0.85 },
      { 
        y: 0, opacity: 1, scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: creativeSkills.value,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        }
      }
    )
  })
})
</script>

<template>
  <section class="skill" id="skill">

    <div class="skill-wrapper" ref="webSkills">
      <h1>Web Developer</h1>
      <div class="skill-content">            
        <div class="skill-item" v-for="(skill, index) in webSkillsList" :key="index">
          <img :src="skill.logo" :alt="skill.name" loading="lazy" />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>  
    
    <div class="skill-wrapper" ref="creativeSkills">
      <h1>Design & Creative Tools</h1>
      <div class="skill-content">            
        <div class="skill-item" v-for="(skill, index) in creativeSkillsList" :key="index">
          <img :src="skill.logo" :alt="skill.name" loading="lazy" />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>   
  </section>
</template>
