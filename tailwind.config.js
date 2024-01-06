/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,astro,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ['var(--font-mplus)', 'Verdana', 'sans-serif'],
      },
      colors: {
        'dark-void': '#151419',
        'liquid-lava': '#f56e0f',
        'gluon-gray': '#1b1b1e',
        'slate-gray': '#262626',
        'dusty-gray': '#878787',
        'snow': '#fbfbfb',
      }
    },
  },
  plugins: [],
};
