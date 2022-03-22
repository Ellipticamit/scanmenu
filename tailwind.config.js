module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffd66f',
          200: '#ffcf55',
          300: '#ffc83c',
          400: '#ffc122',
          500: '#ffd500',
          600: '#eeab00',
        },
        placeholder: '#ababab',
        gray: {
          10: '#949494',
        },
      },
    },
  },
  plugins: [],
};
