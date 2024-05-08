import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { defaultMetadata, font } from '@/lib/constants';
import { setInitTheme } from '@/lib/utils/setInitTheme';

export const metadata = defaultMetadata;

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
        className={`${font.className} mx-auto justify-between bg-back_layout md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2`}>
        <script
          dangerouslySetInnerHTML={{
            __html: initTheme,
          }}></script>
        <div className="mx-auto rounded-b-2xl shadow-xl">
          <Header />
          {children}
          {modal}
          <Analytics />
          <SpeedInsights />
        </div>
        <Footer />
      </body>
    </html>
  );
}
