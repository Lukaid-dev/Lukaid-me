import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import mdComponents from '@/components/mdComponents';
import { getPostId } from '@/api/getPostId';

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await getPostId(params.id);
  const markdown = res.content;
  const { content } = matter(markdown);
  return (
    <article className="mx-auto rounded-lg bg-back p-4 sm:p-6">
      <Markdown
        className="prose mx-auto max-w-screen-xl text-text"
        remarkPlugins={[remarkGfm]}
        components={mdComponents}>
        {content
          .replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n')
          .replace(/\*\*/gi, '@$_%!^')
          .replace(/@\$_%!\^/gi, '**')
          .replace(/<\/?u>/gi, '*')}
      </Markdown>
    </article>
  );
}
