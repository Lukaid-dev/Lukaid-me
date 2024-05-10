import { getPostsAll } from '@/api/getPostsAll';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getPostsAll();

  const posts = allPosts.map((post) => ({
    url: `https://www.lukaid.me/blog/${post.id}`,
    lastModified: post.written_at.split('T')[0],
  }));

  const routes = ['', '/blog', '/portfolio'].map((route) => ({
    url: `https://www.lukaid.me${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
