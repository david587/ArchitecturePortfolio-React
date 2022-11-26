/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'yellow': '#fcb73d',
      "beige": "#cfb194",
      'green': '#1b9b5e',
      'black': '#021009',
      'gray': '#6d6d6d',
      'stone': {
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
      }
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
