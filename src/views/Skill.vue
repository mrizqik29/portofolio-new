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

const webSkillsList = ref([
  { name: 'Laravel', logo: logo4 },
  { name: 'Vue.js', logo: logo5 },
  { name: 'HTML', logo: logo6 },
  { name: 'CSS', logo: logo7 },
])

const creativeSkillsList = ref([
  { name: 'After Effect', logo: logo1 },
  { name: 'Adobe Illustrator', logo: logo2 },
  { name: 'Premiere Pro', logo: logo3 },
])

function rotateArray(arr) {
  return [...arr.slice(1), arr[0]]
}

// Flip dengan GSAP rotateY + pause 5 detik
function flipRight(containerRef, listRef) {
  const items = containerRef.value.querySelectorAll('.skill-item')

  gsap.to(items, {
    rotateY: 90,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power1.in',
    onComplete: () => {
      listRef.value = rotateArray(listRef.value)
      nextTick(() => {
        const updatedItems = containerRef.value.querySelectorAll('.skill-item')
        gsap.fromTo(updatedItems,
          { rotateY: -90, opacity: 0 },
          { rotateY: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power1.out' }
        )
      })
    }
  })
}

function startFlipWithPause(containerRef, listRef, pause = 8000) {
  const loop = () => {
    flipRight(containerRef, listRef)
    setTimeout(loop, pause)
  }
  setTimeout(loop, pause) // start first flip after pause
}

onMounted(() => {
  nextTick(() => {
    const setupSkillAnimation = (containerRef) => {
      const items = containerRef.value.querySelectorAll('.skill-item')
      gsap.from(containerRef.value.querySelector('h1'), {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: { trigger: containerRef.value, start: 'top 85%', toggleActions: 'play none none none' }
      })
      gsap.from(items, {
        y: 10,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.1)',
        scrollTrigger: { trigger: containerRef.value, start: 'top 85%', toggleActions: 'play none none none' }
      })
    }

    if (webSkills.value) setupSkillAnimation(webSkills)
    if (creativeSkills.value) setupSkillAnimation(creativeSkills)

    // Start flip with 5s pause
    if (webSkills.value) startFlipWithPause(webSkills, webSkillsList, 5000)
    if (creativeSkills.value) startFlipWithPause(creativeSkills, creativeSkillsList, 5000)
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
