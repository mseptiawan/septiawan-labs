<script setup>
import { PlayIcon as PlayIconSolid } from '@heroicons/vue/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, ref } from 'vue';

const videos = ref([
  {
    title: 'Lulusan IT itu banyak mindset pegawai',
    category: 'Teknologi / Insight',
    description: 'Pentingnya punya pikiran yang revolusioner untuk hidup di dunia ini.',
    thumbnail: '/images/video1.jpg',
    link: 'https://www.youtube.com/embed/R9jX82BZwv0',
    tag: 'Insight',
  },
  {
    title: 'Pentingnya Pake Sistem untuk bisnismu',
    category: 'Teknologi / System Analyst',
    description: 'Jika ga ada seorang system analyst maka perusahaan akan sulit untuk berinovasi.',
    thumbnail: '/images/video2.jpg',
    link: 'https://www.youtube.com/embed/T97jeFfqc5g',
    tag: 'SystemInformation',
  },
  {
    title: 'Perbedaan Tugas dan Faktor Kepribadian dalam Karir IT',
    category: 'Teknologi / Insight',
    description: 'Setiap manusia itu punya jalan karir yang beda, peluang hanya akan datang jika kamu menyadarinya.',
      thumbnail: '/images/video3.jpg',

    link: 'https://www.youtube.com/embed/qaHQPATxn_w',
    tag: 'Insight',
  },
]);

const showModal = ref(false);
const activeVideo = ref(null);

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic',
  });
});

const openVideo = (url) => {
  activeVideo.value = url;
  showModal.value = true;
};

const closeModal = () => {
  activeVideo.value = null;
  showModal.value = false;
};
</script>

<template>
    <div class="text-white py-16 px-4 sm:px-8 lg:px-16 font-sans">
        <div class="max-w-7xl mx-auto">
            <div class="mb-12" data-aos="fade-down">
                <h2 class="text-black text-4xl sm:text-5xl font-extrabold mb-2">
                    Developer's Toolkit: Video Library
                </h2>
                <div class="w-20 h-1 bg-yellow-500 rounded mb-4"></div>
                <p class="text-gray-400 max-w-2xl text-base">
                    Dive deep into the core concepts of modern web development. Our YouTube library serves as an extension of our professional practice, offering structured tutorials on vital technologies.
                </p>
            </div>

            <div class="relative">
                <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div
                        v-for="(video, index) in videos"
                        :key="index"
                        class="rounded-lg shadow-xl overflow-hidden cursor-pointer group  transition-transform duration-500"
                        data-aos="fade-up"
                        :data-aos-delay="index * 150"
                        @click="openVideo(video.link)"
                    >
                       <div class="relative h-48 sm:h-40 w-full overflow-hidden">
                    
                    <img
                        :src="video.thumbnail"
                        :alt="video.title"
                        class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    
                    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-10">
                        <div class="p-4 bg-red-600 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                            <PlayIconSolid class="w-8 h-8 text-white" /> 
                        </div>
                    </div>
                </div>
                        <div class="p-5">
                            <p class="text-xs font-medium text-yellow-500 uppercase mb-1">{{ video.category }}</p>
                            <h3 class="text-black text-lg font-bold mb-2 leading-tight">
                                {{ video.title }}
                            </h3>
                            <p class="text-sm text-gray-400 mb-4 line-clamp-2">
                                {{ video.description }}
                            </p>
                            <span class="inline-block text-xs font-semibold !text-white bg-black px-3 py-1 rounded-full">
                                #{{ video.tag }}
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!-- MODAL VIDEO -->
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            @click.self="closeModal"
        >
            <div class="relative w-[90%] max-w-3xl aspect-video bg-black">
                <iframe
                    v-if="activeVideo"
                    :src="activeVideo + '?autoplay=1'"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="w-full h-full rounded-lg"
                ></iframe>
                <button
                    @click="closeModal"
                    class="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-500 transition"
                >
                    ×
                </button>
            </div>
        </div>
    </div>
</template>
