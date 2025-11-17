import type { Config } from 'tailwindcss';

const config = {
    content: [
        './src/**/*.{ts,tsx,astro}',
    ],
    prefix: '',
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
