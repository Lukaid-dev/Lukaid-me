export interface PostType {
  id: number;
  title: string;
  thumbnail?: string;
  content: string;
  written_at: string;
  is_public: boolean;
  is_pinned: boolean;
}
