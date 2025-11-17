import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
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
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
        },
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'hover',
    },
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        plugins: [tailwindcss()],
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'react-vendor': ['react', 'react-dom'],
                    },
                },
            },
        },
    },
    integrations: [
        react(),
        sitemap(),
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
