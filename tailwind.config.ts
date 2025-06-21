import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config = {
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
                        color: '#f0f0f0',
                        fontSize: '0.875rem',
                        h1: {
                            margin: 0,
                        },
                        video: {
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
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography'), daisyui],
} satisfies Config;

export default config;
