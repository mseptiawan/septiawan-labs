<template>
  <div class="bg-[#F3F4F6] dark:bg-gray-900 text-gray-800 dark:text-white">
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <Services />
    <Experience />
    <Youtube />
    <Awards />
    <ContactCard />

    <Footer />





  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import Services from './components/Services.vue';
import Experience from './components/Experience.vue';
import Youtube from './components/YoutubeSection.vue';
import Awards from './components/AwardsSection.vue';
import Contact from './components/ContactCard.vue';

import Footer from './components/Footer.vue';
import ContactCard from './components/ContactCard.vue';

</script>

<style>
html, body {
  scroll-behavior: smooth;
}
</style>
