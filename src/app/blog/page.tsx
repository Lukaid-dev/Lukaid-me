import remarkGfm from 'remark-gfm';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import mdComponents from '@/components/mdComponents';

export default async function RemoteMdxPage() {
  const markdown = fs.readFileSync('src/markdown_test.txt', 'utf-8');
  const { data, content } = matter(markdown);
  return (
    <div className="mx-auto bg-slate-300 p-2">
      <Markdown
        className="prose mx-auto max-w-screen-xl bg-pink-100 text-xl text-text"
        remarkPlugins={[remarkGfm]}
        components={mdComponents}>
        {content
          .replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n')
          .replace(/\*\*/gi, '@$_%!^')
          .replace(/@\$_%!\^/gi, '**')
          .replace(/<\/?u>/gi, '*')}
      </Markdown>
    </div>
  );
}
