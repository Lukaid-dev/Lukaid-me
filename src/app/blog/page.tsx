import { getPosts } from '@/api/getPosts';
import PostList from '@/components/blog/postList';

export default async function PostListPage() {
  const res = await getPosts({ start: 0 });
  return <PostList initialPosts={res} />;
}
