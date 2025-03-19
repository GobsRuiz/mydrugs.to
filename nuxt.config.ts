// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    'motion-v/nuxt',
  ],

  plugins: [],

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/fonts.css',
    '@/assets/css/reset.css',
  ],
})