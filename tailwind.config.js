/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#9c0450",
      },
      backgroundPosition: {
        'initial': 'initial',
      }
    },
  },
  plugins: [],
}
