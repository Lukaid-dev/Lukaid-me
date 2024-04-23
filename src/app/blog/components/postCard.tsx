import { PostPreviewType } from '@/app/types/postPreview';
import Thumbnail from './thumbnail';
import { formatToTimeAgo } from '@/lib/utils';
import Link from 'next/link';

export default function PostCard(preview: PostPreviewType) {
  return (
    <Link
      href={`/blog/${preview.id}`}
      className="flex flex-col items-center justify-start gap-2 rounded-xl bg-primary/5 px-4 py-2 shadow transition hover:scale-105">
      <div className="mr-auto text-xl font-semibold">{preview.title}</div>
      <Thumbnail thumbnail={preview.thumbnail} />
      <div className="flex rounded-xl p-2">
        <span>{preview.content_summary}</span>
      </div>
      <div className="flex w-full justify-between px-2">
        {/* TODO: Tag */}
        <div className="flex">🔥</div>
        <div>{formatToTimeAgo(preview.written_at)}</div>
      </div>
    </Link>
  );
}
