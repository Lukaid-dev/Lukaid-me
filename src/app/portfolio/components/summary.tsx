'use client';

import useThemeStore from '@/app/store/theme';
import { summary } from '@/app/types/summary';
import Image from 'next/image';

export default function Summary({ summary }: { summary: summary }) {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="text-text">
      {summary.isUrl ? (
        <div className="flex items-center gap-2 text-nowrap">
          <span className="shrink-0 font-semibold">{summary.key}</span>
          <div className="relative size-4 shrink-0">
            {theme === 'one-dark' || theme === 'github-dark' ? (
              <Image
                fill
                src="/vertical_divider_white.svg"
                alt="vertical_divider"
              />
            ) : (
              <Image fill src="/vertical_divider.svg" alt="vertical_divider" />
            )}
          </div>
          <div className="flex gap-2 overflow-auto">
            {summary.urls?.map((url, index) => (
              <div key={url.title} className="flex shrink-0 gap-2">
                <a
                  href={url.link}
                  rel="noreferrer"
                  className="underline-offset-3 underline">
                  {url.title}
                </a>
                {index !== summary.urls!.length - 1 && <div> / </div>}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-nowrap">
          <span className="shrink-0 font-semibold">{summary.key}</span>
          <div className="relative size-4 shrink-0">
            {theme === 'one-dark' || theme === 'github-dark' ? (
              <Image
                fill
                src="/vertical_divider_white.svg"
                alt="vertical_divider_white"
              />
            ) : (
              <Image fill src="/vertical_divider.svg" alt="vertical_divider" />
            )}
          </div>
          <span className="flex overflow-auto">{summary.value}</span>
        </div>
      )}
    </div>
  );
}
