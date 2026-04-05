import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string().optional(),
        ogImage: z.string(),
        published: z.boolean().default(false),
        tags: z.string().array(),
    }),
});

export const collections = { posts };
