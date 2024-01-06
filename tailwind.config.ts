import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,astro}',
    './components/**/*.{ts,tsx,astro}',
    './app/**/*.{ts,tsx,astro}',
    './src/**/*.{ts,tsx,astro}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
