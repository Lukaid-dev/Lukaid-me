import { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image, { ImageProps } from 'next/image';
import { BiClipboard } from 'react-icons/bi';
import { ReactElement } from 'react';
import { getCurrentLanguage, getIcon } from '@/utils/mdCodeLangName';

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
      <div className="bg-code-bg m-2 flex flex-col rounded-lg">
        <div className=" flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-lg">{Icon}</span>
            <span className="text-xs">{language}</span>
          </div>
          <button
            data-clipboard=""
            className="text-lg text-gray-400 active:text-green-500">
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
    );
  },
  // p: ({ node, ...props }) => {
  //   console.log(props.children);
  //   if (typeof props.children === 'object' && props.children?.props?.tagName === 'code') {
  //     return <code className="bg-code-bg" {props.children.props.children} />;
  //   }
  //   return <p {...props} />;
  // },
};

export default markdownComponents;
