/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'], // purge es reemplazado por content **
  theme: {
    extend: {
      color: {
        ...colors,
        whity: '#010221',
      },
      colors: {
        whity: {
          500: '#FFFFFF',
          600: '#FFFFFF',
        },
        blacky: {
          500: '#000000',
          600: '#000000',
          700: '#353935',
          900: '#1B1212',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
