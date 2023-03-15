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
          500: '#2C3B45',
        },
        kabul: {
          500: '#564A42',
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
