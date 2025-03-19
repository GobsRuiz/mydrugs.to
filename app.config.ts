export default defineAppConfig({
  ui: {
    dropdown: {
      background: 'bg-customBunker-950',
      ring: 'ring-1 ring-customBorderColor-default',
      divide: 'divide-y divide-customBorderColor-default',
      padding: 'p-2',
      item: {
        base: 'mb-1',
        rounded: 'rounded-md',
        padding: 'px-1.5 py-1',
        size: 'text-sm',
        active: 'bg-customBlue-500 text-customBunker-950',
        inactive: 'text-customWhite-400',
        icon: {
            active: 'text-customBlue-500',
            inactive: 'text-red-500'
        },
      },
    },

    button: {
      color: {
        primary: {
          solid: 'bg-customBlue-500 hover:bg-customBunker-950 border-2 border-customBlue-500 hover:border-customBlue-500 text-customWhite-100 rounded-full text-sm font-bold py-1 px-5'
        },

        transparent: {
          solid: 'bg-transparent hover:bg-customBunker-950 text-customWhite-100 border-2 border-customBorderColor-default hover:border-customBlue-500 rounded-full text-sm font-bold py-1 px-5',
          outline: 'bg-transparent hover:bg-customBunker-950 text-customWhite-100 border-2 border-customBorderColor-default hover:border-customBlue-500 rounded-md text-sm font-bold py-1 px-1',
        },

        link: {
          solid: 'bg-transparent hover:bg-transparent text-customBlue-500 hover:text-customBunker-950 hover:bg-customBlue-500 border-0 text-md font-black py-1 px-5'
        },
      },
    },
  },
});