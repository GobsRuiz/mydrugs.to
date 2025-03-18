import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],

  theme: {
    extend: {
      colors: {
        customBunker: {
          50: '#f2f7f9',
          100: '#deebef',
          200: '#c1dae0',
          300: '#96bfca',
          400: '#649bac',
          500: '#498091',
          600: '#3f697b',
          700: '#385766',
          800: '#344b56',
          900: '#2f404a',
          950: '#11191e',
        },

        customBlue: {
          50: '#f1f8fa',
          100: '#dcedf1',
          200: '#bedbe3',
          300: '#79b4c5',
          400: '#5c9fb4',
          500: '#418399',
          600: '#396b81',
          700: '#33596b',
          800: '#304b5a',
          900: '#2c404d',
          950: '#192933',
        },

        customWhite: {
          50: '#f9f7f7',
          100: '#f3efee',
          200: '#ced1d3',
          300: '#abb0b5',
          400: '#7e848c',
          500: '#666c74',
          600: '#575b63',
          700: '#424448',
          800: '#3a3c3f',
          950: '#242528',
        },

        customBorderColor: {
          default: '#18272c',
        },
      },
    },
  },

  plugins: [],
}
