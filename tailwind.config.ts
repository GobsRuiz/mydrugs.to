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
          50: '#ebffff',
          100: '#ccfbff',
          200: '#a0f5ff',
          300: '#5eecff',
          400: '#05d3f8',
          500: '#00bbe0',
          600: '#0093bc',
          700: '#067598',
          800: '#0f5f7b',
          900: '#114e68',
          950: '#043448',
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
