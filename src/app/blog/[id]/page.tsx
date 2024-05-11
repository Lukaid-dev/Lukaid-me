import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import mdComponents from '@/components/blog/mdComponents';
import { getPostId } from '@/api/getPostId';
import TagChip from '@/components/blog/tagChip';
import { notFound } from 'next/navigation';
import FormatToTimeAgo from '@/components/formatToTimeAgo';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await getPostId(params.id);
  if (!res) {
    return {
      title: 'Not Found',
    };
  }
  return {
    title: res.title,
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await getPostId(params.id);
  if (!res) {
    notFound();
  }
  const markdown = res.content;
  const { content } = matter(markdown);
  const date = res.written_at;
  const title = res.title;
  const author = res.author;
  const tagList = res.tag_list.sort((a, b) => b.order - a.order);

  return (
    <article id="content" className="mx-auto rounded-lg bg-back p-4 sm:p-6">
      <div className="mb-12 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-text">{title}</h1>
        <div className="flex justify-between gap-2 text-text">
          <div className="flex gap-2 overflow-scroll">
            {tagList.map((tag) => (
              <TagChip key={tag.name} {...tag} />
            ))}
          </div>
          <div className="shrink-0">
            {author} · <FormatToTimeAgo date={date} />
          </div>
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
