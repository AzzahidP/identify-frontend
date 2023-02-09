/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'light-green': '#CAD2C5',
        'med-light-green': '#84A98C',
        'main-green': '#52796F',
        'dark-green': '#354F52',
        'head-green': '#2F3E46',
        'body-color': '#728196'
      },
    },
  },
  plugins: [],
}
