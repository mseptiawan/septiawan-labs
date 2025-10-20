<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const base =
  import.meta.env.MODE === 'development'
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/+$/, '');


onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-out-cubic',
  });
});

// --- DATA KEAHLIAN ---
const expertise = ref([
  { name: 'Vue.js', iconSrc: `${base}images/vue.png` },
  { name: 'Python', iconSrc: `${base}images/python.png` },
  { name: 'Flask', iconSrc: `${base}images/Flask.png` },
]);
</script>

<template>
  <section
    class="our-expertise-box bg-white shadow-xl border-t border-gray-200 relative z-10 mx-4 sm:mx-6 md:mx-10 lg:mx-auto"
    data-aos="zoom-in"
  >
    <div class="py-8 px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center mb-6">
        <h2 class="text-xl font-bold text-gray-800 tracking-wider">
          Tools & Expertise
        </h2>
      </div>

      <div class="flex flex-wrap justify-center gap-x-3 gap-y-4">
        <div
          v-for="(skill, index) in expertise"
          :key="index"
          class="flex items-center space-x-3 py-2 px-5 rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
        >
          <img
            :src="skill.iconSrc"
            :alt="skill.name + ' icon'"
            class="w-6 h-6 object-contain"
          />

          <span class="text-sm text-gray-700 font-medium whitespace-nowrap">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.our-expertise-box {
  width: 100%;
  max-width: 90%;
  border-radius: 1.5rem;
}

/* Untuk desktop, baru diposisikan absolute */
@media (min-width: 1024px) {
  .our-expertise-box {
    position: absolute;
    top: 700px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
  }
}

/* Untuk tablet dan mobile: posisi normal + margin */
@media (max-width: 1023px) {
  .our-expertise-box {
    position: static; /* biar ngikut flow normal */
    margin-top: 1rem;
    margin-bottom: -5rem;
    max-width: 90%;
  }
}
</style>
