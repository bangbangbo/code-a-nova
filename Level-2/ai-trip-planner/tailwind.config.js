/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary2o: {
          50: '#ffe5f0',
          100: '#fbb6ce',
          200: '#f38ab3',
          300: '#eb5fa0',
          400: '#e3388d',
          500: '#da1478',
          600: '#c30f68',
          700: '#a20b53',
          800: '#81073e',
          900: '#62042c',
        }, primary: {
          50: '#e0f7f4',   // very light teal
          100: '#b3ebe1',
          200: '#80ded0',
          300: '#4dd0bf',
          400: '#26c6b0',
          500: '#00bca3',   // main primary color
          600: '#00a894',   // bg-primary-600
          700: '#008f80',
          800: '#007666',
          900: '#005e50',
        },

        secondary: {
          500: '#00bcd4',
        },
        accent: {
          500: '#ff9800',
        },
      },
    },
  },
  plugins: [],
};
