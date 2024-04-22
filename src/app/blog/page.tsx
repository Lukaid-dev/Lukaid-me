import { getPost } from '@/api/getPost';

export default async function PostListPage() {
  const res = await getPost();
  return <div className="mx-auto bg-slate-300 p-2"></div>;
}
