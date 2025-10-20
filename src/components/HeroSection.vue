<script setup>
import instagram from '@/assets/instagram-svgrepo-com.svg';
import linkedin from '@/assets/linkedin.svg';
import youtube from '@/assets/youtube-svgrepo-com.svg';
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";

import projectImage1 from '@/assets/foto.png';
import OurExpertise from './OurExpertise.vue';


const socialLinks = {
    linkedin: "https://linkedin.com/in/mseptiawan/",
    youtube: "https://youtube.com/@mseptiawan017/",
    instagram: "https://www.instagram.com/mseptiawannn/",
};
onMounted(() => {
  AOS.init({
    duration: 800, // durasi animasi (ms)
    offset: 100,   // jarak muncul dari bawah (px)
    easing: "ease-in-out", 
    once: true,    // animasi hanya sekali saat muncul pertama
  });
});
</script>

<template>
  <section class="max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row items-start lg:space-x-12">
       <div class="lg:w-1/2 pt-12" data-aos="fade-right">
        <div 
          class="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-100 px-3 py-1 rounded-full mb-6" 
          v-if="false"
        >
          <span class="w-2 h-2 bg-green-700 rounded-full animate-pulse"></span>
          <span>Available for work</span>
        </div>

        <h1 class="text-7xl font-light mb-8 max-w-lg leading-none lg:leading-tight">
          Hi, I'm a <span class="font-normal">AI Engineer</span>
        </h1>

        <p class="text-lg text-gray-600 mb-10 max-w-md">
          I have 11 years of experience working on useful and mindful products
          together with startups and known brands
        </p>

       <a
          href="mailto:mseptiawan017@gmail.com"
          class="bg-black !text-white px-7 py-3 rounded-xl text-md font-medium hover:bg-gray-800 transition duration-300"
        >
          Let's Talk
        </a>

      </div>

     <div class="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0" data-aos="fade-left"> 
  <div class="flex flex-col space-y-8 w-full max-w-sm"> 
    
    <div class="flex justify-center">
      <div class="bg-gray-200 h-96 mt-10 w-full rounded-xl shadow-lg overflow-hidden">
        <img :src="projectImage1" alt="Project 1" class="w-full h-full object-cover"/>
      </div>
    </div>

    <div class="flex justify-between items-center w-full px-8 sm:px-12">
      
      <div class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
        <a :href="socialLinks.linkedin" target="_blank" class="text-gray-500 hover:text-blue-600">
          <img :src="linkedin" alt="LinkedIn" class="w-5 h-5"/>
        </a>
      </div>
      
      <div class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
        <a :href="socialLinks.youtube" target="_blank" class="text-gray-500 hover:text-red-600">
          <img :src="youtube" alt="Youtube" class="w-5 h-5"/>
        </a>
      </div>
      
      <div class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
        <a :href="socialLinks.instagram" target="_blank" class="text-gray-500 hover:text-pink-500">
          <img :src="instagram" alt="Instagram" class="w-5 h-5"/>
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
  </section>
    <OurExpertise />

</template>