import { PostType } from '@/types/post';

export default function genMeta(post: PostType, previousImages: any[]) {
  return {
    title: post.title,
    description: post.content
      .replace(/<[^>]*>?/gm, '')
      .replace(/\n/g, '')
      .slice(0, 100),
    openGraph: {
      title: post.title,
      publishedTime: post.written_at,
      images: [
        {
          url: post.thumbnail ?? '',
          width: 800,
          height: 600,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    keywords: post.tag_list.map((tag) => tag.name).join(', '),
    authors: [
      {
        name: post.author,
        url: 'https://github.com/Lukaid-dev',
      },
    ],
  };
}
