import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    published: z.boolean().default(false),
    tags: z.string().array(),
  }),
});

export const collections = {
  posts: postsCollection,
};
