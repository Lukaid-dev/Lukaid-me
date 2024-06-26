import { Tag } from './tag';

export interface PostType {
  id: number;
  title: string;
  thumbnail?: string;
  author: string;
  content: string;
  written_at: string;
  is_public: boolean;
  is_pinned: boolean;
  tag_list: Tag[] | [];
}
