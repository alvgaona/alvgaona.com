import type { Config } from 'tailwindcss';

const config = {
    content: [
        './src/**/*.{ts,tsx,astro}',
    ],
    prefix: '',
    plugins: [require('tailwindcss-animate'), require('daisyui')],
} satisfies Config;

export default config;
