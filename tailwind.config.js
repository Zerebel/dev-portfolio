/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        heebo: ['Heebo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        minionYellow: '#FFE347',
        liberty: '#6457A6',
        middleBluePurple: '#7D7ABC',
        lightCoral: '#EF767A',
        seaGreenCrayola: '#23F0C7',
        honeydew: '#DFF3E3',
        khakiWeb: '#C6B89E',
        rust: '#BC3908',
        brightYellowCrayola: '#F6AA1C',
        passionBlue: '#232ED1',
        seashell: '#FFF4EC',
        lightCyan: '#E0FBFC',
        gray_3: '#828282',
        gray_1: '#4F4F4F',
      },
    },
  },
  plugins: [],
};
