<script setup>
import { ref } from 'vue';
const base =
  import.meta.env.MODE === 'development'
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/+$/, '');



// --- DATA PENGHARGAAN ---
const awards = ref([
    {
        date: '09 Oktober 2024',
        title: 'UI UX DESIGN',
        description: 'Juara 1 UI UX Design di Event RAFATECH yang diselenggarakan UIN Raden Fatah Palembang.',
        images: [
            `${base}images/awards/ui1.jpeg`,
            `${base}images/awards/ui2.jpeg`,
            `${base}images/awards/ui3.jpeg`,
        ],
        projectLink: '#'
    },
    {
        date: '09 Oktober 2025',
        title: 'Finalis Lomba Web Development',
        description: 'Masuk Finalis Website Development dalam event tahunan RAFATECH yang diselenggarakan UIN Raden Fatah Palembang.',
        images: [
            `${base}images/awards/finalis.png`,
            `${base}images/awards/jasa.png`,
        ],
        projectLink: '#'
    },
    {
        date: 'Lorem ipsum dolor',
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images: [
            '/images/awards/noimage.jpg',
            '/images/awards/noimage.jpg',
            '/images/awards/noimage.jpg',
        ],
        projectLink: '#'
    },
]);

// --- Fungsi fallback ---
const handleImageError = (event) => {
    event.target.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'w-full h-72 flex flex-col items-center justify-center bg-gray-200 text-gray-500 text-sm';
    fallback.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16l-5-4H5a2 2 0 01-2-2V4z" />
        </svg>
        <p>No Image Available</p>
    `;
    event.target.parentNode.appendChild(fallback);
};
</script>

<template>
    <section class="bg-white py-16 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-12" data-aos="fade-down">
                <h2 class="text-black text-4xl sm:text-5xl font-extrabold mb-2">
                    Awards
                </h2>
                <div class="w-20 h-1 bg-yellow-500 rounded mb-4"></div>
                <p class="text-gray-400 max-w-2xl text-base">
                    Dive deep into the core concepts of modern web development. Our YouTube library serves as an extension of our professional practice, offering structured tutorials on vital technologies.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="zoom-in">
                
                <div 
                    v-for="(award, index) in awards" 
                    :key="index"
                    class="bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300"
                >
                    <div class="relative w-full overflow-x-auto snap-x snap-mandatory flex scrollbar-hide">
                        <div 
                            v-for="(image, imgIndex) in award.images" 
                            :key="imgIndex"
                            class="w-full flex-shrink-0 snap-center relative"
                        >
                            <img 
                                :src="image" 
                                :alt="`${award.title} image ${imgIndex + 1}`" 
                                class="w-full h-72 object-cover"
                                @error="handleImageError"
                            >
                        </div>
                    </div>

                    <div class="p-6 flex flex-col flex-grow">
                        <p class="text-sm font-medium text-gray-500 mb-2">{{ award.date }}</p>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">{{ award.title }}</h3>
                        <p class="text-gray-700 mb-4 flex-grow">{{ award.description }}</p>
                        <a 
                            :href="award.projectLink" 
                            class="font-semibold text-indigo-600 transition-colors duration-200 self-start"
                        >
                            Lihat Proyek &rarr;
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
