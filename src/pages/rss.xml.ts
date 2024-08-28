import siteMeta from '@/site-meta';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const get = async () => {
  const posts = (await getCollection('posts')).filter(
    (post) => post.data.published,
  );

  return rss({
    title: siteMeta.title,
    description: siteMeta.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: post.slug,
    })),
  });
};
