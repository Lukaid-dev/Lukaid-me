import { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image, { ImageProps } from 'next/image';
import { BiClipboard } from 'react-icons/bi';
import { ReactElement } from 'react';
import { getCurrentLanguage, getIcon } from '@/lib/utils/mdCodeLangName';

type Components = Partial<{
  [TagName in keyof JSX.IntrinsicElements]:  // Class component:
    | (new (
        props: JSX.IntrinsicElements[TagName] & ExtraProps,
      ) => JSX.ElementClass)
    // Function component:
    | ((
        props: JSX.IntrinsicElements[TagName] & ExtraProps,
      ) => JSX.Element | string | null | undefined)
    // Tag name:
    | keyof JSX.IntrinsicElements;
}>;

const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1 className="my-4 text-4xl text-text lg:text-4xl" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="my-4 text-3xl text-text lg:text-2xl" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="my-4 text-2xl text-text lg:text-xl" {...props} />
  ),
  img: ({ node, ...props }) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className="rounded-xl p-2"
      layout="responsive"
      width={500}
      height={500}
      {...(props as ImageProps)}
    />
  ),
  pre: ({ node, ...props }) => {
    const language = (
      props?.children as ReactElement
    )?.props?.className?.replace('language-', '');
    const Icon = getIcon(language!);
    if (!language) return <pre className="m-2" {...props} />;
    return (
      <div className="m-2 flex flex-col rounded-lg bg-back_layout">
        <div className=" flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4 text-text">
            <span className="text-lg">{Icon}</span>
            <span className="text-xs">{language}</span>
          </div>
          <button
            data-clipboard=""
            className="active:text-green-500 text-lg text-text">
            <BiClipboard />
          </button>
        </div>
        {props.children}
      </div>
    );
  },
  code: ({ node, ...props }) => {
    const currentLanguage = getCurrentLanguage(
      props.className?.replace('language-', ''),
    );
    if (!currentLanguage) return <code className="text-white" {...props} />;
    return (
      <div className="bg-back_layout p-2">
        <SyntaxHighlighter
          language={currentLanguage}
          showLineNumbers={true}
          style={oneDark}
          lineNumberStyle={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.8rem',
            marginRight: '1rem',
          }}>
          {String(props.children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    );
  },
  a: ({ node, ...props }) => {
    return <a className="text-text" target="_blank" {...props} />;
  },
  table: ({ node, ...props }) => (
    <table className="my-4 table-auto border-collapse" {...props} />
  ),
  thead: ({ node, ...props }) => (
    <thead className="rounded-t-lg bg-guide text-text" {...props} />
  ),
  tbody: ({ node, ...props }) => (
    <tbody className="rounded-b-lg bg-back_layout" {...props} />
  ),
  th: (props) => (
    <th
      scope="col"
      className="px-6 py-1.5 font-semibold text-gray-900 first:rounded-tl-lg last:rounded-tr-lg"
      {...props}>
      {props.children}
    </th>
  ),
  tr: (props) => (
    <tr className="border-b last:border-none" {...props}>
      {props.children}
    </tr>
  ),
  td: (props) => (
    <td className="px-6 py-3" {...props}>
      {props.children}
    </td>
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote className="text-text" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-accent" {...props} />
  ),
};

export default markdownComponents;
