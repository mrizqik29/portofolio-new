<template>
  <section class="website" ref="websiteSection" id="website">
    <div class="website-wrapper" v-for="(category, cIndex) in skillCategories" :key="cIndex">
      <div class="website-content">
        <div class="website-item" v-for="(item, index) in category.items" :key="index">
          <img
            :src="item.image"
            :alt="item.title"
            class="website-image"
            :class="item.size"
            loading="lazy"
          />
          <div class="website-text"> 
            <h2 class="title">{{ item.title }}</h2>         
            <p class="equipment">{{ item.equipment }}</p>
            <p class="description">{{ item.description }}</p>            
            <a v-if="item.website" :href="item.website" target="_blank" class="btn">
              Kunjungi Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Web1 from '../assets/web.png'
import Web2 from '../assets/web2.jpeg'
import Web3 from '../assets/web3.jpeg'
import Web4 from '../assets/web4.jpeg'
import Web5 from '../assets/web5.jpeg'
import Web6 from '../assets/web6.jpeg'
import Web7 from '../assets/web7.jpeg'
import Web8 from '../assets/web8.jpeg'
import Web9 from '../assets/web9.jpeg'
import Web10 from '../assets/web10.jpeg'
import Web11 from '../assets/web11.jpeg'
import Web12 from '../assets/web12.jpeg'

import '../css/website.css'

gsap.registerPlugin(ScrollTrigger)

const websiteSection = ref(null)
const sectionTitle = ref(null)

const skillCategories = ref([
  {
    items: [
      {
        image: Web1,
        title: 'Website Undangan',
        equipment: 'Equipment : Vue.js (Vite), CSS',
        description: 'Website ini digunakan untuk menyampaikan informasi undangan secara online dengan tampilan yang menarik dan mudah diakses. Menggunakan Vue.js (Vite) untuk interaktivitas dan CSS untuk desain responsif, website ini memudahkan pengguna melihat detail acara, lokasi, dan informasi penting lainnya dengan nyaman di berbagai perangkat.',
        website: 'https://mrizqik29.github.io/undanganv2/',
        size: 'large' 
      }
    ]
  },
    {
    items: [
      {
        image: Web12,
       title: 'Website Landing Page',
    equipment: 'Equipment: VS Code, GitHub, Vue.js, GSAP, HTML, SCSS',
    description: 'Website ini adalah landing page interaktif yang dirancang untuk memberikan pengalaman pengguna yang menarik dan responsif. Animasi GSAP, termasuk ScrollTrigger, digunakan untuk efek gerakan yang halus saat pengguna menggulir halaman. SCSS diterapkan dengan animasi neon bergerak untuk tampilan yang modern dan dinamis. Ikon-ikon menggunakan Lucide untuk kesan visual yang konsisten. Seluruh desain dioptimalkan agar tampil dengan baik di berbagai perangkat, membuat website ini menarik dan mudah digunakan.',
        website: 'https://mrizqik29.github.io/landingpage/'
      }
    ]
  },
    {
    items: [
      {
        image: Web2,
    title: 'Login (Website Inventori)',
    equipment: 'Equipment: Vue.js (Vite), Laravel, MySQL, CSS, JWT, Hash, XAMPP, VS Code, GSAP, Adobe Illustrator',
    description: 'Fitur login pada website inventori ini dirancang dengan keamanan tinggi menggunakan token JWT dan hash untuk melindungi data pengguna. Menggunakan Vue.js (Vite) untuk interaktivitas frontend, Laravel dan MySQL untuk backend dan database, serta GSAP untuk animasi UI yang halus. Desain dibuat responsif dan mudah digunakan, memastikan pengalaman pengguna yang aman dan nyaman.'
      }
    ]
  },
    {
    items: [
      {
        image: Web3,
title: 'Dashboard (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), Laravel, MySQL, CSS, XAMPP, VS Code',
description: 'Dashboard ini menampilkan ringkasan data inventori secara interaktif, termasuk barang terlaris serta laporan pembelian dan penjualan selama setahun terakhir. Menggunakan Vue.js (Vite) untuk frontend, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna memantau performa inventori dan membuat keputusan bisnis lebih mudah dan cepat.'

      }
    ]
  },
    {
    items: [
      {
        image: Web4,
title: 'Add Data (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), Laravel, MySQL, CSS, XAMPP, VS Code',
description: 'Fitur ini memungkinkan pengguna menambahkan data inventori baru, termasuk barang, jenis, satuan, ruangan, dan departemen. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk desain responsif. Fitur ini membantu pengelolaan inventori menjadi lebih terstruktur dan efisien.'
      }
    ]
  },
    {
    items: [
      {
        image: Web5,
title: 'Laporan Penjualan (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code',
description: 'Fitur laporan penjualan ini menampilkan data secara detail berdasarkan transaksi, barang, dan kasir. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna menganalisis penjualan dengan cepat dan akurat, mendukung pengambilan keputusan bisnis.'

      }
    ]
  },
    {
    items: [
      {
        image: Web6,
title: 'Laporan Stock (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code',
description: 'Fitur Laporan Stock ini menampilkan data inventori lengkap dari semua ruangan dan barang, termasuk laporan stock rendah. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna memantau ketersediaan barang secara real-time dan mengambil keputusan pengelolaan inventori dengan lebih cepat dan akurat.'
      }
    ]
  },
    {
    items: [
      {
        image: Web7,
title: 'Log Data (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code',
description: 'Fitur Log Data ini mencatat semua pergerakan barang, termasuk penerimaan, penjualan, dan pemesanan antar ruangan. Pengguna juga dapat mengekspor data ke format Excel untuk analisis lebih lanjut. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini memudahkan pemantauan inventori secara lengkap dan efisien.'

      }
    ]
  },
    {
    items: [
      {
        image: Web8,
title: 'Kirim Barang (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code',
description: 'Fitur Kirim Barang memungkinkan pengguna memindahkan barang dari satu ruangan ke ruangan lain dengan mudah. Backend menggunakan metode FIFO (First In, First Out) sehingga barang yang masuk lebih dulu akan keluar terlebih dahulu dari tabel stok. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini membantu pengelolaan inventori lebih terstruktur dan efisien.'

      }
    ]
  },
    {
    items: [
      {
        image: Web9,
title: 'Penerimaan Barang (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code',
description: 'Fitur Penerimaan Barang digunakan untuk mencatat barang yang diterima dari distributor dan menambahkan stok ke gudang. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini memastikan pencatatan stok gudang akurat dan memudahkan pengelolaan inventori secara efisien.'

      }
    ]
  },
    {
    items: [
      {
        image: Web10,
title: 'Penjualan (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code',
description: 'Fitur Penjualan digunakan untuk menjual barang kepada pelanggan dengan pengelolaan stok yang efisien. Backend menggunakan metode FIFO (First In, First Out) sehingga barang yang masuk lebih dulu akan dijual terlebih dahulu, dan harga tertinggi dari barang yang dijual diambil secara otomatis. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini memudahkan proses penjualan dan memastikan pengelolaan inventori tetap akurat.'

      }
    ]
  },
    {
    items: [
      {
        image: Web11,
title: 'Order (Website Inventori)',
equipment: 'Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code',
description: 'Fitur Order Barang memungkinkan perpindahan barang antar ruangan dengan efisien. Terdapat dua tab: "List" untuk menampilkan ruangan yang mengajukan permintaan, dan "Request" untuk melihat ruangan tujuan pengiriman. Backend menggunakan metode FIFO (First In, First Out) untuk memastikan barang yang masuk lebih dulu akan dipindahkan terlebih dahulu. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend, serta CSS untuk tampilan responsif, fitur ini memudahkan pengelolaan inventori antar ruangan secara terstruktur dan akurat.'

      }
    ]
  }
])

onMounted(() => {
  nextTick(() => {
    // Animasi semua item dalam satu group
    const allItems = websiteSection.value.querySelectorAll('.website-item')
    gsap.fromTo(
      allItems,
      { y: 60, opacity: 0, scale: 0.9 },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: websiteSection.value,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  })
})
</script>
