<template>
  <div class="  bg-white text-black p-4 sm:p-8 lg:p-16 font-sans">
    <div class="mt-40 max-w-7xl mx-auto" data-aos="fade-right">

      <header class="mb-16">
        <p class="text-xs font-semibold uppercase tracking-widest  mb-2">
          EXPLORE THE BENEFITS OF SPATIAL AUDIO
        </p>

        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end">
          <div class="max-w-2xl">
            <h1 class=" text-4xl sm:text-5xl font-bold mb-4">Case studies</h1>
            <p class="text-white max-w-lg">
              See how top brands use Spatial's audio technology to craft immersive, unforgettable guest experiences.
            </p>
          </div>

          <div class="flex space-x-3 mt-6 sm:mt-0">
            <button
              @click="scrollCards('left')"
              class="w-10 h-10 rounded-full border border-gray-600 text-gray-600 flex items-center justify-center transition duration-300 hover:border-gray-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!canScrollLeft"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </button>
            <button
              @click="scrollCards('right')"
              class="w-10 h-10 rounded-full border border-black text-black flex items-center justify-center hover:border-gray-300 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!canScrollRight"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </header>
      
      <div class="relative mt-8">
        
     <section 
  ref="galleryContainer" 
  class=" flex overflow-x-hidden snap-x snap-mandatory scroll-smooth pb-4 space-x-8 lg:space-x-10 pr-10"
  @scroll="checkScrollPosition"
>
          
        <div
  v-for="(project, index) in projects"
  :key="index"
  class="flex-shrink-0 w-full sm:w-11/12 md:w-5/6 lg:w-2/5 xl:w-[400px] snap-center"
  data-aos="fade-up"
  :data-aos-delay="index * 100"
>
            <div class="bg-[#F3F4F6] rounded-xl overflow-hidden ">
              <div 
             
                class="h-64 flex items-center justify-center relative p-4"
              >
                <div class="w-full h-full bg  border border-gray-100 overflow-hidden flex items-center justify-center text-sm text-gray-700">
                    <img :src="project.image" :alt="project.title + ' Preview'" class="object-cover w-full h-full">
                </div>
              </div>

              <div class="p-6 flex justify-between items-center">
                <div>
                  <h2 class="text-xl font-semibold mb-1">{{ project.title }}</h2>
                  <p class="text-sm ">{{ project.subtitle }}</p>
                </div>
                <a :href="project.link" target="_blank" class="text-yellow-400 font-semibold flex items-center hover:text-yellow-300 transition">
                  View
                  <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, ref } from 'vue';
// 1. Vue Refs dan State
// Catatan: Nama ref diubah dari cardsContainer menjadi galleryContainer agar sesuai dengan script baru.
const galleryContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);

// Karena kita menggunakan scrollBy(clientWidth), SCROLL_AMOUNT tidak lagi diperlukan,
// tetapi kita biarkan untuk jaga-jaga jika perlu scroll per item.
// const SCROLL_AMOUNT = 324; 

// 2. Data Proyek (Menggunakan data portofolio baru)
const projects = ref([
  {
    title: 'E-commerceCall',
    subtitle: 'Web solusi layanan lokal untuk para freelancer, orang bisa pesan jasa seperti custom rom, service ac bahkan jasa coding',
    previewClass: 'bg-yellow-600',
    image: "/images/jasa.png",
    link: '#',
  },
  {
    title: 'Blog',
    subtitle: 'Dikembangkan dengan teknologi react, intertia dan laravel',
    previewClass: 'bg-blue-600',
    image: "/images/pemenangkarir.png",

    link: '#',
  },
  {
    title: 'Sistem Insentif Promotor',
    subtitle: 'Dikembangkan khusus promotor changhong sebagai study kasus kerja praktik',
    image: "/images/insentif.png",
    previewClass: 'bg-orange-600',
    link: '#',
  },
  {
    title: 'Fintech Landing Page',
    subtitle: 'Payment Solutions',
    previewClass: 'bg-green-600',
    image: 'https://qodeinteractive.com/magazine/wp-content/uploads/2022/05/Examples-of-Online-Case-Studies-Done-Right-1240x623.jpg',
    link: '#',
  },
  {
    title: 'E-commerce Redesign',
    subtitle: 'Fashion Store',
    previewClass: 'bg-red-600',
     image: 'https://qodeinteractive.com/magazine/wp-content/uploads/2022/05/Examples-of-Online-Case-Studies-Done-Right-1240x623.jpg',
    link: '#',
  },
]);


// 3. Fungsi Scroll (Menggunakan logika scrollBy clientWidth)
const scrollCards = (direction) => {
  if (galleryContainer.value) {
    // Tentukan lebar geser (lebar container yang terlihat)
    const scrollAmount = galleryContainer.value.clientWidth;
    const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;

    galleryContainer.value.scrollBy({
      left: scrollValue,
      behavior: 'smooth'
    });
    
    // Beri sedikit jeda untuk mengupdate status tombol setelah scroll dimulai
    setTimeout(checkScrollPosition, 400); 
  }
};

// 4. Cek Posisi Scroll (untuk menonaktifkan tombol)
const checkScrollPosition = () => {
    if (!galleryContainer.value) return;

    const { scrollLeft, scrollWidth, clientWidth } = galleryContainer.value;

    // Tombol Kiri dinonaktifkan jika berada di awal (scrollLeft sangat kecil)
    canScrollLeft.value = scrollLeft > 10; 

    // Tombol Kanan dinonaktifkan jika berada di akhir (scrollWidth - clientWidth - scrollLeft sangat kecil)
    canScrollRight.value = (scrollWidth - clientWidth - scrollLeft) > 10; 
};

// 5. Lifecycle Hooks
onMounted(() => {
      AOS.init({
    duration: 900, // durasi animasi (ms)
    once: true, // animasi hanya sekali
    easing: 'ease-out-cubic'
  })
    // Cek posisi saat dimuat
    checkScrollPosition();
    // Tambahkan event listener untuk memantau scroll jika pengguna menggeser dengan mouse/sentuhan
    galleryContainer.value.addEventListener('scroll', checkScrollPosition);
});

// onUnmounted tidak diperlukan dalam setup sederhana ini, tetapi jika Anda menambahkannya,
// pastikan menggunakan galleryContainer.value.removeEventListener.
</script>