import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx({
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath],
    }),
  ],
});
