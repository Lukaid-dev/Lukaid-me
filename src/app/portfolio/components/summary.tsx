import { summary } from '@/summary';
import Image from 'next/image';

export default function Summary({ summary }: { summary: summary }) {
  return (
    <div className="text-text">
      {summary.isUrl ? (
        <div className="flex items-center gap-2">
          <span className="font-semibold">{summary.key}</span>
          <div className="relative size-4">
            <Image fill src="/vertical-divider.svg" alt="vertical-divider" />
          </div>
          <div className="flex gap-2">
            {summary.urls?.map((url, index) => (
              <>
                <a
                  key={url.title}
                  href={url.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-3 underline">
                  {url.title}
                </a>
                {index !== summary.urls!.length - 1 && <div> / </div>}
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="font-semibold">{summary.key}</span>
          <div className="relative size-4">
            <Image fill src="/vertical-divider.svg" alt="vertical-divider" />
          </div>
          <div className="flex gap-2">{summary.value}</div>
        </div>
      )}
    </div>
  );
}
