// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,

  nitro: {
    preset: 'vercel',
  },
  
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    'motion-v/nuxt',
    'nuxt-gtag',
  ],

  plugins: [],

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/fonts.css',
    '@/assets/css/reset.css',
  ],

  gtag: {
    id: 'G-CXRPC09RK3',
    enabled: true,
  },
})