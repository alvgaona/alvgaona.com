import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
    site: 'https://alvgaona.com',
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        react(),
        mdx({
            rehypePlugins: [rehypeKatex],
            remarkPlugins: [remarkMath],
        }),
    ],
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'nord',
        },
    },
});
