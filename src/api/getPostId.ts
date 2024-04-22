import { PostType } from '@/app/types/post';
import { baseUrl, revalidate } from '@/lib/constants';

export async function getPostId(id: string): Promise<PostType> {
  const res = await fetch(`${baseUrl}/api/v1/posts/${id}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
