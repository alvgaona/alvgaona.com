import type { Config } from 'tailwindcss';

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
            blockquote: {
              border: 0,
              padding: '0.125rem 1rem',
              borderRadius: '0.875rem',
              background: '#24292F',
              '&>p': {
                color: 'rgba(255,255,255,0.9)',
                opacity: '60',
                fontStyle: 'normal',
                fontWeight: '300',
                '&::before': {
                  content: 'none',
                },
              },
            },
          },
        },
      },
      fontFamily: {
        mplus: ['var(--font-dm-sans)', 'Verdana', 'sans-serif'],
      },
      colors: {
        'strafe-dark': '#161618',
        'strafe-light': '#EFE7DD',
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
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
