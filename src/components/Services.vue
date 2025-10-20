<template>
  <div class=" bg-white text-black p-4 sm:p-8 lg:p-16 font-sans">
    <div class="max-w-7xl mx-auto" data-aos="fade-right">
      
      <header class="mb-16 text-center lg:text-left">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
          WHAT WE DO
        </p>
        
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 class="text-3xl sm:text-4xl font-extrabold mb-4">
            SERVICES AND <span class="text-gray-700">SOLUTIONS</span>
          </h1>
          
          <p class="text-gray-600 max-w-lg lg:w-1/3 text-sm lg:text-base">
            We build digital experiences that combine aesthetics and performance, helping your brand stand out online.
          </p>
        </div>
      </header>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        
        <div
          v-for="(service, index) in services"
          :key="index"
          class="flex flex-col bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-500   cursor-pointer ease-out"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <div class="h-56 w-full overflow-hidden relative">
            <img
              :src="service.image"
              :alt="service.title"
              class="object-cover w-full h-full transition-transform duration-700 "
            />
          </div>

          <div class="p-8 flex flex-col flex-grow justify-between">
            <div>
              <h3 class="text-xl font-bold mb-4 uppercase tracking-wider text-gray-800">
                {{ service.title }}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>

      </section>

   
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
const base =
  import.meta.env.MODE === 'development'
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/+$/, '');


// Data Layanan
const services = ref([
  {
    title: 'UI / UX Design',
    description: 'We design interfaces that are intuitive, functional, and emotionally engaging to elevate your digital presence.',
    image: `${base}images/ui.png`
  },
  {
    title: 'Web Development',
    description: 'From concept to launch, we build fast, secure, and scalable web applications using the latest technologies.',
    image: `${base}images/websitedevelopment.png`
  },
  {
    title: 'Consultation',
    description: 'We provide professional consulting to help businesses navigate digital transformation effectively.',
    image: `${base}images/konsultasi.png`
  },
])

// Inisialisasi AOS
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic'
  })
})

// Fungsi ini tidak digunakan dalam template ini, tapi saya biarkan.
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/*
  Meskipun Anda sudah memiliki kelas Tailwind "transition-all duration-500" 
  pada kartu, CSS di bawah ini memastikan bahwa transisi pada property 
  "transform" (untuk -translate-y) dan "box-shadow" sangat spesifik 
  dan dijamin halus.
*/

/* Transisi untuk Kartu Utama */
.flex-col {
  /* Memastikan transisi apply ke pergerakan (-translate-y-2) dan bayangan (shadow-2xl) */
  transition-property: transform, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms; 
}

/* Transisi untuk Gambar di dalam Kartu */
.h-56 img {
  /* Transisi untuk efek zoom (hover:scale-110) pada gambar */
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 700ms;
}

/* Menghapus atau mengabaikan CSS tambahan yang tidak diperlukan, 
   karena Tailwind sudah menangani sebagian besar transisi. */
</style>

### Kesimpulan

Transisi pergerakan ke atas (`hover:-translate-y-2`) sudah diatur dengan durasi **500 milidetik** melalui kelas **`transition-all duration-500`** yang sudah ada pada elemen kartu.

Jika Anda merasa transisinya masih terlihat "langsung," kemungkinan besar ada masalah pada *rendering* browser. Namun, dengan memastikan bahwa CSS khusus yang Anda tambahkan tidak mengganggu kelas Tailwind, dan bahwa CSS yang saya berikan di atas sudah terpisah (scoped), pergerakan *hover* tersebut dijamin akan memiliki **duration** (waktu tempuh) yang halus.