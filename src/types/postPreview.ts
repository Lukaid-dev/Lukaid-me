import { Tag } from './tag';

export interface PostPreviewType {
  id: number;
  title: string;
  thumbnail?: string;
  content_summary: string;
  written_at: string;
  is_pinned: boolean;
  tag_list: Tag[] | [];
}

export interface PostPreviewPagination {
  start: number;
  offset: number;
  next: number | null;
  posts: PostPreviewType[];
}
