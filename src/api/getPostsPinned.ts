import { baseUrl, revalidate } from '@/lib/constants';

export async function getPostsPinned() {
  const res = await fetch(`${baseUrl}/api/v1/posts/pinned/`, {
    next: { revalidate },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
