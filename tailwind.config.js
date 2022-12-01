/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/*.{js,ts,jsx,tsx}',
    './fetch/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}'

  ],
  theme: {
    extend: {
      screens: {
        xsm: '680px',

        '1xl': '1282px',

        '2xl': '1536px'
      }
    }
  },
  plugins: []
}
