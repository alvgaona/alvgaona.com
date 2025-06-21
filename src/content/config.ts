import { defineCollection, z } from 'astro:content';

const PostSchema = z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    ogImage: z.string(),
    published: z.boolean().default(false),
    tags: z.string().array(),
});

const postsCollection = defineCollection({
    type: 'content',
    schema: PostSchema,
});

export const collections = {
    posts: postsCollection,
};
