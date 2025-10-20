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
    duration: 800, 
    offset: 100,   
    easing: "ease-in-out", 
    once: true,    
  });
});
</script>

<template>
  <section class="max-w-7xl mx-auto py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-16">
       
       <div class="lg:w-1/2 w-full text-center lg:text-left" data-aos="fade-right">
        
        <div 
          class="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-100 px-3 py-1 rounded-full mb-6" 
          v-if="false"
        >
          <span class="w-2 h-2 bg-green-700 rounded-full animate-pulse"></span>
          <span>Available for work</span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Hi, I'm a <span class="font-normal">AI Engineer</span>
        </h1>

        <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
          I have 11 years of experience working on useful and mindful products
          together with startups and known brands.
        </p>

       <a
          href="mailto:mseptiawan017@gmail.com"
          class="bg-black !text-white px-7 py-3 rounded-xl text-md font-medium hover:bg-gray-800 transition duration-300"
        >
          Let's Talk
        </a>
      </div>

     <div class="lg:w-1/2 w-full flex justify-center lg:justify-end" data-aos="fade-left"> 
      <div class="flex flex-col space-y-8 w-full max-w-xs sm:max-w-sm"> 
        
        <div class="flex justify-center">
          <div class="bg-gray-200 h-80 sm:h-96 w-full rounded-2xl shadow-lg overflow-hidden">
            <img :src="projectImage1" alt="Project 1" class="w-full h-full object-cover"/>
          </div>
        </div>

        <div class="flex justify-center items-center w-full gap-8">
          
          <div class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
            <a :href="socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="block">
              <img :src="linkedin" alt="LinkedIn" class="w-5 h-5"/>
            </a>
          </div>
          
          <div class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
            <a :href="socialLinks.youtube" target="_blank" rel="noopener noreferrer" class="block">
              <img :src="youtube" alt="Youtube" class="w-5 h-5"/>
            </a>
          </div>
          
          <div class="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
            <a :href="socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="block">
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