/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ['var(--font-mplus)', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
