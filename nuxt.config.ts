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
  ],

  css: [
    '@/assets/css/tailwind.css',
  ],

  googleFonts: {
    families: {
      Inter: [200, 300, 400, 500, 600, 700, 800, 900],
    },

    display: 'swap',
    preconnect: true,
  },
})