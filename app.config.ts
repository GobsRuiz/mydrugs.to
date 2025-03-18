export default defineAppConfig({
  ui: {
    button: {
      color: {
        primary: {
          solid: 'bg-customBlue-300 hover:bg-customBlue-300 hover:border-customBlue-300 text-customWhite-100 border-2 border-customBlue-300 rounded-full text-sm font-bold py-1 px-5'
        },

        transparent: {
          solid: 'bg-transparent hover:bg-customBlue-300 hover:border-customBlue-300 text-customWhite-100 border-2 rounded-full text-sm font-bold py-1 px-5'
        },

        link: {
          solid: 'bg-transparent hover:bg-transparent text-customBlue-400 hover:text-customBlue-500 border-0 text-sm font-bold py-1 px-5'
        },
      },
    },
  },
});