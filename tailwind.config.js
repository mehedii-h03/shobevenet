const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'display': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'banner': "url('https://i.ibb.co/tLWpMW9/banner-bg-2.jpg')",
      },
      colors: {
        'primary-color': '#6F23D9',
        'secondary-color': '#1B2130',
        'secondary-text-color': '#525764',
        'grayish-color': 'rgba(23, 26, 33, 0.25)'
      },
      screens: {
        's': { 'max': '539px' }
      }
    },
  },
  plugins: [],
});