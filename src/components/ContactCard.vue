<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-out-cubic',
  });
});
</script>

<template>
  <section class="bg-white p-4 sm:p-8 flex items-center justify-center">
    <div
      class="relative w-full max-w-5xl bg-[#BADEFA] rounded-3xl shadow-lg overflow-hidden"
      data-aos="zoom-in"
    >
      <div
        class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16"
      >
        <!-- KIRI -->
        <div
          class="flex flex-col justify-center text-center md:text-left"
          data-aos="zoom-in-up"
        >
          <h2
            class="text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Let's Get In Touch.
          </h2>
          <p
            class="mt-4 text-lg text-white/90 max-w-md mx-auto md:mx-0"
          >
            Your laboratory instruments should serve you, not the other way around.
            We're happy to help you.
          </p>

        <div
  class="mt-8 flex flex-col sm:flex-row items-center sm:items-stretch justify-center md:justify-start gap-4 px-4 sm:px-0"
  data-aos="zoom-in"
>
  <!-- TOMBOL WHATSAPP -->
  <a
    href="https://wa.me/6281234567890"
    target="_blank"
    class="bg-[#6EB3FC] text-white font-semibold rounded-full py-3 px-6 flex items-center justify-center sm:justify-between w-full sm:w-auto gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <img
      src="/images/whatsapp.png"
      alt="WhatsApp"
      class="w-6 h-6 flex-shrink-0"
    />
    <span class="text-center">WhatsApp</span>
  </a>

  <!-- TOMBOL EMAIL -->
  <a
    href="mailto:mseptiawan017@gmail.com"
    class="bg-[#6EB3FC] text-white font-semibold rounded-full py-3 px-6 flex items-center justify-center sm:justify-between w-full sm:w-auto gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <img
      src="/images/communication.png"
      alt="Email"
      class="w-6 h-6 flex-shrink-0"
    />
    <span class="text-center">Email</span>
  </a>
</div>

        </div>

        <!-- KANAN (Bisa ditambah ilustrasi atau dibiarkan kosong) -->
        <div class="hidden md:block"></div>
      </div>

      <!-- LINGKARAN DEKORATIF -->
      <div class="absolute inset-0 z-0">
        <div
          class="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-white/5"
        ></div>
        <div
          class="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 transform translate-x-[50px] translate-y-[50px]"
        ></div>
        <div
          class="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] rounded-full bg-white/5 transform translate-x-[100px] translate-y-[100px]"
        ></div>
        <div
          class="absolute -top-1/4 -right-1/4 w-[200px] h-[200px] rounded-full bg-white/10 transform translate-x-[150px] translate-y-[150px]"
        ></div>
        <div
          class="absolute -top-1/4 -right-1/4 w-[100px] h-[100px] rounded-full bg-white/20 transform translate-x-[200px] translate-y-[200px]"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Semua sudah dikontrol pakai Tailwind, jadi style tambahan tidak wajib */
</style>
