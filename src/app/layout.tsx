import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { setInitTheme } from '@/lib/utils/setInitTheme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Lukaid',
    default: 'Lukaid',
  },
  description: "Lukaid's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initTheme = `(function() {
    ${setInitTheme.toString()}
    setInitTheme();
  })()
  `;

  return (
    <html lang="ko">
      <body
        className={`${inter.className} mx-auto shadow-xl md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2`}>
        <script
          dangerouslySetInnerHTML={{
            __html: initTheme,
          }}></script>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
