/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'min':'400px', 'max':'460px'},
      'xxs': { 'min':'360px', 'max': '399px'},
    },
  },
  plugins: [],
}

