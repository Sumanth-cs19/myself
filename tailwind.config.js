/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      borderColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
    },
    fontFamily: {
      'hero-font': ['Sriracha', 'cursive'],
    },
  },
  plugins: [],
};
