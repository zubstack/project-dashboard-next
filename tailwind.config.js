/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'], // purge es reemplazado por content **
  theme: {
    extend: {
      color: {
        ...colors,
        darkblue: '#010221',
      },
      colors: {
        darkblue: {
          500: '##103778',
          600: '#010221',
        },
        galleta: {
          500: '#f2ead3',
          600: '#dfd7bf',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
