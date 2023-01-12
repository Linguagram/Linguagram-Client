/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/10': '10%',
      },
      width: {
        '9/10': '90%'
      },
      colors: {
        'light-gray': '#36404a',
        'darker-gray': '#303841',
        'black-blue': '#262d36',
        'main-color': '#005792',
        'light-blue': '#047dcf',
        'main-color-blur': 'rgba(0, 87, 146, 0.5)',
        'red-900-blur': 'rgba(240, 50, 50, 0.15)'
      }
    },
  },
  plugins: [],
}
