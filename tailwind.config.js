const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#6F23D9',
        'secondary-color': '#1B2130',
        'secondary-text-color': '#525764',
        'grayish-color': 'rgba(23, 26, 33, 0.25)'
      },

    },
  },
  plugins: [],
});