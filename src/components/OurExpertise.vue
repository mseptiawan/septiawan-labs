<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ref } from 'vue';
const base = import.meta.env.BASE_URL || '/';
onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-out-cubic',
  });
});


// --- DATA KEAHLIAN ---
// Data disederhanakan dan diubah untuk menggunakan path gambar
const expertise = ref([
    {
        name: 'Vue.js',
        // Path gambar ini mengasumsikan file ada di folder public/images/
        iconSrc: `${base}images/vue.png`
    },
    {
        name: 'Python',
        iconSrc: `${base}images/python.png`
    },
    {
        name: 'Flask',
        iconSrc: `${base}images/Flask.png`
    },
]);
</script>

<template>
    <section class="our-expertise-box w-[800px] mx-auto py-12 bg-white shadow-xl border-t border-gray-200 -mt-24 relative z-10 " >
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
            
            <div class="text-center mb-10">
                <h2 class="text-xl font-bold text-gray-800 tracking-wider">
                    Tools & Expertise
                </h2>
            </div>

            <div class="flex flex-wrap justify-center gap-4">
        
                <div 
                    v-for="(skill, index) in expertise" 
                    :key="index"
                    class="flex items-center space-x-3 py-2 px-5 rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
                >
                    <img 
                        :src="skill.iconSrc" 
                        :alt="skill.name + ' icon'"
                        class="w-6 h-6 object-contain"
                    >

                    <span class="text-sm text-gray-700 font-medium whitespace-nowrap">
                        {{ skill.name }}
                    </span>
                </div>

            </div>
            
        </div>
    </section>
</template>

<style scoped>
/* Styling ini akan memposisikan box secara absolut. 
  Pastikan parent container dari komponen ini memiliki `position: relative;` 
  agar `top`, `left`, dan `transform` bekerja sesuai harapan.
*/
.our-expertise-box {
  position: absolute;
  top: 900px; /* Jarak dari atas parent container */
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>