import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(), // Pastikan plugin Vue terdaftar
        tailwindcss(), // Plugin Tailwind CSS
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: process.env.NODE_ENV === 'production' ? '/septiawan-labs/' : '/',
});
