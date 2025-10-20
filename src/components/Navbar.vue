<script setup>
import logo from '@/assets/logo.png'
import { ArrowDownOnSquareIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <header class="m-8 mt-5 bg-white rounded-2xl">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex-shrink-0 flex items-center gap-3">
          <img :src="logo" alt="icon" class="h-10 w-10" />
          <span class="text-2xl font-serif text-gray-800 tracking-wider -ml-2">
            E P T I A W A N
          </span>
        </div>

       <div class="flex items-center">
        <a
            href="/cv-septiawan.pdf"
            class="bg-black  !text-white px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition duration-300 inline-flex items-center space-x-2"
            download
        >
            <ArrowDownOnSquareIcon class="w-5 h-5" />
            
            <span class="!text-white !font-bold">Unduh Resume</span>
        </a>

       
    </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Styling tambahan (opsional) */
</style>
