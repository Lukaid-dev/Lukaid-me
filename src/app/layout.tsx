import { Metadata } from 'next/types';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { setInitTheme } from '@/lib/utils/setInitTheme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const initTheme = `(
    ${setInitTheme.toString()}
  )()
  `;

  return (
    <html lang="ko">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} mx-auto bg-back_layout shadow-xl md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2`}>
        <script
          dangerouslySetInnerHTML={{
            __html: initTheme,
          }}></script>
        <Header />
        {children}
        {modal}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
