<template>
  <!-- Header -->
  <header class="header">
    <div class="header-container">
      <!-- Judul -->
      <p class="judul" ref="judulRef">Ryizanova</p>

      <!-- Navigasi Desktop -->
      <nav class="nav-desktop">
        <a href="#home">Home</a>
        <a href="#skill">Skill</a>
        <a href="#website">Website</a>
        <a href="#gallery">Gallery</a>
      </nav>

      <!-- Sosial Media -->
      <div class="social-desktop">
        <a 
            :href="gmailLink" 
            target="_blank"
        >
            <i class="fab fa-google"></i>
        </a>
        <a href="https://www.instagram.com/mrizqik29/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/muhammadrizky.kurniawan.3" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://github.com/mrizqik29" target="_blank"><i class="fab fa-github"></i></a>
        <a href="www.linkedin.com/in/muhammad-rizqi-kurniawan-328195254" target="_blank"><i class="fab fa-linkedin"></i></a>
      </div>

      <!-- Hamburger Mobile -->
      <button class="menu-btn" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Dropdown Mobile -->
<div class="nav-mobile" ref="navMobile" v-show="menuOpen">
  <nav>
    <a href="#home" @click="closeMenu">Home</a>
    <a href="#skill" @click="closeMenu">Skill</a>
    <a href="#website" @click="closeMenu">Website</a>
    <a href="#gallery" @click="closeMenu">Gallery</a>
  </nav>
  <div class="social-mobile">
        <a 
            :href="gmailLink" 
            target="_blank"
        >
            <i class="fab fa-google"></i>
        </a>
        <a href="https://www.instagram.com/mrizqik29/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/muhammadrizky.kurniawan.3" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://github.com/mrizqik29" target="_blank"><i class="fab fa-github"></i></a>
        <a href="www.linkedin.com/in/muhammad-rizqi-kurniawan-328195254" target="_blank"><i class="fab fa-linkedin"></i></a>
  </div>
</div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import '../css/header.css';

const email = "rizqikurni29@gmail.com"
const subject = "Mas, Ganteng banget mas"
const body = ""
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`


const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;

  // Animasi masuk/keluar mobile nav
  if (menuOpen.value) {
    gsap.fromTo(
      navMobile.value,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  } else {
    gsap.to(navMobile.value, { y: -50, opacity: 0, duration: 0.4, ease: "power2.in" });
  }
};
const closeMenu = () => (menuOpen.value = false);
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const navMobile = ref(null);

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
// === Animasi Judul ===
const judulRef = ref(null);
const words = ["Ryizanova", "MRizqiK", "MrK"];

onMounted(() => {
  // Flip judul
  let current = 0;
  const el = judulRef.value;
  const tl = gsap.timeline({ repeat: -1 });
  words.forEach(() => {
    tl.to(el, {
      duration: 0.6,
      rotateX: 90,
      opacity: 0,
      ease: "power2.in",
      onComplete: () => {
        current = (current + 1) % words.length;
        el.textContent = words[current];
      },
    })
      .to(el, { duration: 0.6, rotateX: 0, opacity: 1, ease: "power2.out" })
      .to({}, { duration: 1.4 });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetId, offsetY: 80 },
          ease: "power2.inOut",
        });
        closeMenu();
      }
    });
  });

  // Navbar highlight aktif
  const sections = document.querySelectorAll("section[id]");
  const navLinksDesktop = document.querySelectorAll(".nav-desktop a");
  const navLinksMobile = document.querySelectorAll(".nav-mobile a");

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 100", // start saat section mendekati top viewport
      end: "bottom 100",
      onEnter: () => updateActive(section.id),
      onEnterBack: () => updateActive(section.id),
    });
  });


function updateActive(id) {
  // desktop
  navLinksDesktop.forEach((link) => {
    link.classList.toggle("active-nav", link.getAttribute("href") === `#${id}`);
  });
  // mobile
  navLinksMobile.forEach((link) => {
    link.classList.toggle("active-nav", link.getAttribute("href") === `#${id}`);
  });
}

  const socialLinks = document.querySelectorAll(".social-desktop a i");

const neonColors = [
        "#0A66C2",
    "#E1306C", // Instagram
    "#1877F2", // Facebook
    "#000000", // GitHub
    "#0A66C2", // LinkedIn
  ];

  const tlSocial = gsap.timeline({ repeat: -1, yoyo: true });

  socialLinks.forEach((icon, index) => {
    tlSocial.to(icon, {
      color: neonColors[index],
      duration: 0.5,
      ease: "power1.inOut",
    }, index * 0.2); // stagger sedikit biar tidak serentak
  });
});
</script>

