import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: {
    template: '%s | Devlog',
    default: 'Devlog',
  },
  description: 'Devlog of Lukaid',
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto">{children}</div>;
}
