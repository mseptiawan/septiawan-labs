<script setup>
import { ref, onMounted } from 'vue'; // Import onMounted
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// --- DATA PENGALAMAN (3 KOLOM) ---
const experiences = ref([
    {
        // Kolom 1: Waktu & Lokasi
        year: '2025',
        location: 'Palembang, Indonesia', // Tambahan: Lokasi Kerja
        
        // Kolom 2: Jabatan & Jenis Pekerjaan
        company: 'PT CHANGHONG ELECTRIC INDONESIA',
        role: 'FULL-STACK DEVELOPER',
        type: 'Intership', // Tambahan: Jenis Pekerjaan (Full-time/Freelance/Kontrak)
        
        // Kolom 3: Deskripsi
        description: 'Membangun Sistem Informasi perhitungan insentif otomatis untuk promotor PT Changhong.',
        
        // Visual
        color: 'text-sky-600',
        dotColor: 'bg-sky-600',
    }
]);

// Inisialisasi AOS saat komponen dipasang
onMounted(() => {
    AOS.init({
        // Opsional: Konfigurasi global AOS
        duration: 1000, // durasi default untuk semua animasi (dalam ms)
        easing: 'ease-out-cubic', // kurva easing default
        once: true, // animasi hanya dimainkan sekali per elemen
    });
});
</script>

<template>
    <section class="max-w-7xl px-8 py-12 md:px-20 lg:py-20 mx-auto">
        <div class="mb-12"
             data-aos="fade-down"  
             data-aos-duration="800"
             data-aos-once="true">
            <h2 class="text-5xl md:text-6xl font-black text-gray-800 uppercase tracking-tight border-b-4 border-sky-500 pb-2 inline-block">
                Experience
            </h2>
        </div>

        <div class="relative pl-8 md:pl-16">
            
            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block"></div>

            <div v-for="(exp, index) in experiences" :key="index" class="mb-16 relative"
                 data-aos="zoom-in" 
                 data-aos-delay="100" 
                 data-aos-duration="1000" 
                 data-aos-once="true"
                 :data-aos-delay="100 + (index * 150)"> <div class="absolute -left-8 sm:-left-[4.25rem] top-1 mt-1 w-4 h-4 rounded-full border-4 border-white shadow-md hidden sm:block" :class="exp.dotColor"></div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    
                    <div class="md:col-span-1 space-y-1 pr-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
                        <p class="text-sm font-bold text-gray-900">{{ exp.year }}</p>
                        <p class="text-sm font-medium text-gray-500">{{ exp.location }}</p>
                    </div>
                    
                    <div class="md:col-span-1 pt-1 pr-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
                        <h3 class="text-lg font-bold uppercase" :class="exp.color">{{ exp.company }}</h3>
                        <h4 class="text-xl font-semibold mb-1 text-gray-900">{{ exp.role }}</h4>
                        <span class="text-xs font-medium text-white px-2 py-0.5 rounded-full bg-gray-400">
                            {{ exp.type }}
                        </span>
                    </div>

                    <div class="md:col-span-1 pt-1">
                        <p class="text-gray-600 leading-relaxed">{{ exp.description }}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>