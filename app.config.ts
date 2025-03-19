export default defineAppConfig({
  ui: {
    button: {
      color: {
        primary: {
          solid: 'bg-customBlue-500 hover:bg-customBunker-950 border-2 border-customBlue-500 hover:border-customBlue-500 text-customWhite-100 rounded-full text-sm font-bold py-1 px-5'
        },

        transparent: {
          solid: 'bg-transparent hover:bg-customBunker-950 text-customWhite-100 border-2 border-customBorderColor-default hover:border-customBlue-500 rounded-full text-sm font-bold py-1 px-5'
        },

        link: {
          solid: 'bg-transparent hover:bg-transparent text-customBlue-500 hover:text-customBlue-500 border-0 text-md font-black py-1 px-5'
        },
      },
    },
  },
});