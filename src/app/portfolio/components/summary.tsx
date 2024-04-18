import { summary } from '@/app/types/summary';
import Image from 'next/image';

export default function Summary({ summary }: { summary: summary }) {
  return (
    <div className="text-text">
      {summary.isUrl ? (
        <div className="flex items-center gap-2 overflow-auto text-nowrap">
          <span className="shrink-0 font-semibold">{summary.key}</span>
          <div className="relative size-4 shrink-0">
            <Image fill src="/vertical-divider.svg" alt="vertical-divider" />
          </div>
          <div className="flex shrink-0 gap-2">
            {summary.urls?.map((url, index) => (
              <div key={url.title} className="flex shrink-0 gap-2">
                <a
                  href={url.link}
                  target="_blank"
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
        <div className="flex items-center gap-2 overflow-auto text-nowrap">
          <span className="shrink-0 font-semibold">{summary.key}</span>
          <div className="relative size-4 shrink-0">
            <Image fill src="/vertical-divider.svg" alt="vertical-divider" />
          </div>
          <span className="flex gap-2">{summary.value}</span>
        </div>
      )}
    </div>
  );
}
