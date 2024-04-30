import { PostPreviewType } from '@/app/types/postPreview';
import Thumbnail from './thumbnail';
import { formatToTimeAgo } from '@/lib/utils/formatToTimeAgo';
import Link from 'next/link';
import TagChip from './tagChip';

export default function PostCard(preview: PostPreviewType) {
  const tagList = preview.tag_list.sort((a, b) => b.order - a.order);
  return (
    <Link
      href={`/blog/${preview.id}`}
      className="flex flex-col items-center justify-between gap-2 rounded-xl bg-back px-4 pb-4 pt-2 text-text shadow transition hover:scale-105">
      <div className="flex flex-col items-center justify-start gap-2">
        <div className="mr-auto text-xl font-semibold">{preview.title}</div>
        <Thumbnail thumbnail={preview.thumbnail} />
        <div className="flex rounded-xl p-2">
          <span>{preview.content_summary}</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2 pr-2">
        <div className="flex gap-2 overflow-scroll">
          {tagList.map((tag) => (
            <TagChip key={tag.name} {...tag} />
          ))}
        </div>
        <div className="shrink-0">{formatToTimeAgo(preview.written_at)}</div>
      </div>
    </Link>
  );
}
