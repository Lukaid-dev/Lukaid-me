import { PostType } from '@/types/post';
import { baseUrl, revalidate } from '@/lib/constants';

export async function getPostId(id: string): Promise<PostType | undefined> {
  const res = await fetch(`${baseUrl}/api/v1/posts/${id}`, {
    next: { revalidate },
  });

  if (!res.ok) return undefined;

  return res.json();
}
