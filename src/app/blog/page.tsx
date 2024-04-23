import { getPost } from '@/api/getPost';
import PostCard from './components/postCard';

export default async function PostListPage() {
  const res = await getPost();
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {res.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
