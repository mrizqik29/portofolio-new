<template>
  <StarBackground />
  <Header/>
  <!-- <DotLottieVue ref="astronautRef" :src="spaceLottie" autoplay loop class="astronaut" /> -->
  <!-- <Astronot /> -->
  <Home />
  <Skill />
  <Website/>
 <Project />
</template>


<script setup>
import { ref, onMounted, nextTick } from "vue";
import Home from './views/Home.vue';
import Skill from './views/Skill.vue';
import Project from './views/Project.vue';
import StarBackground from './views/Background.vue';
import Header from "./views/Header.vue";
import Website from "./views/Website.vue";
// import Astronot from "./views/Astronot.vue";

</script>



<style scoped>
</style>
