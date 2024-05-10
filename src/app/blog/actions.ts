'use server';

import { getPosts } from '@/api/getPosts';
import { PostPreviewPagination } from '@/types/postPreview';

export async function getMoreProducts(
  start: number,
): Promise<PostPreviewPagination> {
  const res = await getPosts({ start });
  return res;
}
