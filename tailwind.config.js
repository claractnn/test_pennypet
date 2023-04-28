/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Overpass : ['Overpass'],
    },
    colors: {
      transparent : 'transparent',
      orange : '#DE5A10',
      greendark : '#407A4D',
      greenlight : '#68B278',
      white : '#fff',
    },
    screens: {
      'tablet': '640px',
    },
    extend: {
      fontFamily: {
        Overpass : ['Overpass']
    },
  },
  plugins: [],
  }
}
