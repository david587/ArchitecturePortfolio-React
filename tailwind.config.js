/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'yellow': '#fcb73d',
      'green': '#135234',
      'black': '#021009',
      'gray': '#234344'
    },
    screens:{
      "sm": "480px",
      "md":"768px",
      "lg":"976px",
      "xl": "1440px"
    },
    extend: {},
  },
  plugins: [],
}
