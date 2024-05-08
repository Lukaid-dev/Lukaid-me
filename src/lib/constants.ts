import { Metadata } from 'next/types';
import { Roboto } from 'next/font/google';

export const baseUrl = process.env.BASE_URL;
export const revalidate = Number(process.env.REVALIDATE);

export const font = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://www.lukaid.me'),
  title: {
    template: '%s | Lukaid',
    default: 'Lukaid',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: '개발자 이성우의 개발 블로그입니다.',
  openGraph: {
    title: 'Lukaid.me',
    description: '개발자 이성우의 개발 블로그입니다.',
    images: [
      {
        url: 'https://www.lukaid.me/_next/image?url=%2Flukaid_profile.jpeg&w=2048&q=75',
        alt: 'lukaid.me',
      },
    ],
  },
};

export const skills = [
  'React',
  'Nextjs',
  'JavaScript',
  'TypeScript',
  'TailwindCSS',
  'Flutter',
  'Dart',
  'Django',
  'Python',
  'Express',
  'Nodejs',
  'Ubuntu',
  'Docker',
];
export const colors = [
  'text-accent',
  'text-purple',
  'text-green',
  'text-cyan',
  'text-rose',
  'text-orange',
  'text-red',
  'text-blue',
  'text-gold',
];
