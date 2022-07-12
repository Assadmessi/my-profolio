/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 3px 3px rgba(0, 0, 50, 0.5)'
      },
      backgroundImage: {
        'web' : "url('./img/background-image.jpg')"
      },
      colors: {
        'royal-blue' : '#525303',
        'royal-brown' : '#530403',
        'brown' : '#964B00'
      },
      spacing: {
        '128': '32rem',
      }
    }
  },
  plugins: [],
}
