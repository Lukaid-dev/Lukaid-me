import { getPostsPinned } from '@/api/getPostsPinned';
import { PostPinned } from '../types/postPinned';
import Link from 'next/link';
import Divider from '@/components/divider';
import { formatToTimeAgo } from '@/lib/utils/formatToTimeAgo';

export default async function PinnedPosts() {
  const res = await getPostsPinned();

  return (
    <div className="flex w-full flex-col gap-2">
      <h2 className="text-2xl font-bold">Pinned Posts</h2>
      <Divider />
      <div className="flex flex-col">
        {res.map((post: PostPinned) => (
          <Link
            className="flex items-center justify-between gap-1 p-2 odd:bg-back_layout"
            href={`/blog/${post.id}`}
            key={post.id}>
            <div>{post.title}</div>
            <div className="shrink-0">{formatToTimeAgo(post.written_at)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
