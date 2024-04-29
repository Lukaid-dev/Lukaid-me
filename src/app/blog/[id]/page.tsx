import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import mdComponents from '@/components/mdComponents';
import { getPostId } from '@/api/getPostId';

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
  return (
    <article id="content" className="mx-auto rounded-lg bg-back p-4 sm:p-6">
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
