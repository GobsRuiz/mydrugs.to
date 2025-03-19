// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  head: {
    title: 'MyDrugs',
    meta: [
      { name: 'description', content: "Discover MyDrugs, the website inspired by the famous series 'How to Sell Drugs Online (Fast)" },
      { name: 'keywords', content: 'mydrugs, mydrugs 2.0, como vender drogas online, how to sell drugs online, série mydrugs, como vender drogas online série, netflix como vender drogas online' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'gobs.ruiz' },

      { property: 'og:title', content: 'MyDrygs' },
      { property: 'og:description', content: "Discover MyDrugs, the website inspired by the famous series 'How to Sell Drugs Online (Fast)" },
      { property: 'og:image', content: '/images/logos/MyDrugs-2.webp' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://mydrugs-to.vercel.app/' },
      { property: 'og:image:alt', content: 'MyDrugs - How to Sell Drugs Online (Fast)' },

      { name: 'theme-color', content: '#11191e' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
    ],
  },

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
    '@nuxtjs/seo',
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