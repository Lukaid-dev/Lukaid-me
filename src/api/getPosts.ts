import { PostPreviewType } from '@/types/postPreview';
import { baseUrl, revalidate } from '@/lib/constants';

export async function getPosts(): Promise<PostPreviewType[]> {
  const res = await fetch(`${baseUrl}/api/v1/posts/`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
