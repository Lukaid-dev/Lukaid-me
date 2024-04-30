import { Tag } from '@/app/types/tag';

export default function TagChip(tag: Tag) {
  return (
    <div className="flex shrink-0 rounded bg-back_layout/50 p-2">
      <div className="text-xs text-accent"># {tag.name}</div>
    </div>
  );
}
