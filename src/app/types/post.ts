export interface PostType {
  id: number;
  title: string;
  thumbnail?: string;
  content: string;
  created_at: string;
  updated_at: string;
  is_public: boolean;
  is_pinned: boolean;
}
