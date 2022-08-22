/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 5px 8px #050F2BBA'
      },
      backgroundImage: {
        'web' : "url('./img/background-image.jpg')"
      },
      colors: {
        'royal-green' : '#005600',
        'royal-brown' : '#530403',
        'brown' : '#964B00',
        'tran-white' : 'rgba(230,242,221,0.2)'
      },
      spacing: {
        '128': '32rem',
        '100': '6.25rem',
        '105': '6.57rem'
      },
      gridAutoRows: {
        '300px': 'minmax(0, 500px)'
      }
    }
  },
  plugins: [],
}
