import type { Config } from 'tailwindcss';

const config = {
    content: [
        './pages/**/*.{ts,tsx,astro}',
        './components/**/*.{ts,tsx,astro}',
        './app/**/*.{ts,tsx,astro}',
        './src/**/*.{ts,tsx,astro}',
    ],
    prefix: '',
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
