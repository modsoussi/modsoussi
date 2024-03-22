/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        oxford: {
          200: '#4a6374',
          300: '#405664',
          400: '#364855',
          500: '#2C3B45',
        },
        kabul: {
          200: '#816f63',
          300: '#736358',
          400: '#64564d',
          500: '#564A42',
          600: '#483e37',
        },
        hemlock: {
          500: '#625941',
        },
        dawn: {
          500: '#ADAAA2',
        },
      }
    },
  },
  plugins: [],
};
