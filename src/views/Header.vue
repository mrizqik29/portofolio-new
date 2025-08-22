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

// Gmail Compose Link
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

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.header-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  backdrop-filter: blur(10px);
  border-radius: 80px;
  box-shadow: 0 0 30px rgb(0, 0, 0);
}

.header-container::after {
  content: '';
  position: absolute;
  inset: 0; /* menempel ke semua sisi */
  border-radius: 80px; /* ikuti border utama */
  padding: 2px; /* tebal neon */
  background: linear-gradient(90deg, transparent, #04d9ff, transparent);
  background-size: 200% 100%;
  animation: neon-run 10s linear infinite;
  pointer-events: none;
  z-index: 1;

  /* Buat hanya border yang terlihat */
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.header-container .judul{
    color: #04d9ff;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
}


@keyframes neon-run {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Logo kiri */
.logo-image {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}
.logo-image img {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.nav-desktop a.active-nav {
  position: relative;
  color: #04d9ff;
  font-weight: 700;
}

.nav-desktop a.active-nav::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #04d9ff, #00fff0);
  animation: neon-slide 2s linear infinite;
}

.nav-mobile a.active-nav {
  position: relative;
  color: #04d9ff;
  font-weight: 700;
}

.nav-mobile a.active-nav::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #04d9ff, #00fff0);
  animation: neon-slide 2s linear infinite;
}


@keyframes neon-slide {
  0% { background-position: 0 0; }
  100% { background-position: 200% 0; }
}

/* Navbar tengah */
.nav-desktop {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 24px;
}
.nav-desktop a {
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
}
.nav-desktop a:hover {
  color: #2563eb;
}

/* Sosmed kanan */
.social-desktop {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 14px;
}
.social-desktop a {
  color: #fff;
  font-size: 1.2rem;
  transition: color 0.3s;
}
.social-desktop a:hover {
  color: #2563eb;
}

/* Hamburger Mobile */
.menu-btn {
  display: none;
  font-size: 1.6rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}

/* Nav Mobile */
.nav-mobile {
    backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
  padding: 18px;
}
.nav-mobile nav {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.nav-mobile nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
    font-family: "Montserrat", sans-serif;

}

.nav-mobile nav a :hover {
  color: #1390c2;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
    font-family: "Montserrat", sans-serif;

}
.social-mobile {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 14px;
}
.social-mobile a {
  font-size: 1.3rem;
  color: #fff;
}

/* === Responsive === */

/* Tablet */
@media (max-width: 1024px) {
  .nav-desktop {
    gap: 20px;
  }
    .header-container{
    max-width: 700px;
  }
  .nav-desktop a {
    font-size: 0.9rem;
  }
  .logo-image img {
    height: 45px;
  }
}

@media (max-width: 768px) {
  .nav-desktop,
  .social-desktop {
    display: none;
  }

  .header-container{
    max-width: 400px;
  }

  .menu-btn {
    display: block;
    position: relative; /* biar ikut flex container, bukan absolute */
    margin-left: auto;  /* dorong ke kanan */
    font-size: 1.8rem;
    padding: 6px;
  }

  .logo-image img {
    height: 40px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .header-container {
    padding: 12px 16px; /* lebih tinggi biar tombol gak mepet */
      max-width: 200px;
  }
  .logo-image img {
    height: 35px;
  }
  .menu-btn {
    font-size: 1.6rem;
    padding: 14px;
  }
  .nav-mobile nav a {
    font-size: 0.9rem;
  }
}
</style>
