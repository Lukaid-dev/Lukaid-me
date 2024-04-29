import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import mdComponents from '@/components/mdComponents';
import { getPostId } from '@/api/getPostId';
import { formatToTimeAgo } from '@/lib/utils/formatToTimeAgo';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await getPostId(params.id);
  return {
    title: res.title,
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await getPostId(params.id);
  const markdown = res.content;
  const { content } = matter(markdown);
  const date = res.written_at;
  const title = res.title;
  const author = res.author;

  return (
    <article id="content" className="mx-auto rounded-lg bg-back p-4 sm:p-6">
      <div className="mb-12 flex flex-col">
        <h1 className="text-4xl font-bold text-text">{title}</h1>
        <div className="flex justify-end text-text">
          {author} · {formatToTimeAgo(date)}
        </div>
      </div>
      <Markdown
        className="prose mx-auto max-w-screen-xl text-text"
        remarkPlugins={[remarkGfm]}
        components={mdComponents}>
        {content
          .replace(/<br>/gi, '\n\n&nbsp;\n\n')
          .replace(/<br \/>/gi, '\n\n&nbsp;\n\n')}
      </Markdown>
    </article>
  );
}
