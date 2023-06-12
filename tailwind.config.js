/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,astro,md,mdx}'],
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
