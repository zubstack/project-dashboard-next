/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'], // purge es reemplazado por content **
  theme: {
    extend: {
      color: {
        ...colors,
        cafe: '#884a39',
      },
      colors: {
        cafe: {
          500: '#884a39',
          600: '#862b0d',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
