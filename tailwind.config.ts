import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,astro}',
    './components/**/*.{ts,tsx,astro}',
    './app/**/*.{ts,tsx,astro}',
    './src/**/*.{ts,tsx,astro}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '0.875rem',
            h1: {
              margin: 0,
            },
            blockquote: {
              padding: '1rem 1rem',
              borderRadius: '0.875rem',
              background: '#121212',
              borderColor: '#92f3d9',
              '&>p': {
                color: 'rgba(255,255,255,0.9)',
                opacity: '60',
                fontStyle: 'normal',
                fontWeight: '300',
                margin: 0,
                '&::before': {
                  content: 'none',
                },
              },
            },
          },
        },
      },
      fontFamily: {
        cmono: ['var(--font-commit-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'vesper-dark': '#101010',
        'vesper-gold': '#FFC799',
        'vesper-sky': '#92f3d9',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: 'calc(var(--radius) - 6px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    daisyui,
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
} satisfies Config;

export default config;
