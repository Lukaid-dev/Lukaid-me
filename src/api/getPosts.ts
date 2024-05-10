import { PostPreviewPagination } from '@/types/postPreview';
import { baseUrl, revalidate } from '@/lib/constants';

export async function getPosts({
  start,
}: {
  start: number;
}): Promise<PostPreviewPagination> {
  const res = await fetch(`${baseUrl}/api/v1/posts/?start=${start}&offset=2`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
