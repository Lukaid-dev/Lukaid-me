import Image from 'next/image';

import { CalendarIcon } from '@heroicons/react/16/solid';
import { EnvelopeIcon } from '@heroicons/react/16/solid';
import { PhoneIcon } from '@heroicons/react/16/solid';
import { LinkIcon } from '@heroicons/react/16/solid';

export default function Profile() {
  return (
    <div className="mx-4 flex flex-col gap-4 rounded-xl p-4 outline-none ring ring-accent/80 md:flex-row">
      <div className="relative h-60 w-40 overflow-hidden rounded-xl">
        <Image
          fill
          className="object-cover"
          src="/lukaid_profile.jpeg"
          alt={'public/lukaid_profile.jpeg'}
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-accent">이성우</span>
            <span className="text-2xl font-semibold text-accent">/</span>
            <span className="text-1xl font-semibold text-accent">Lukaid</span>
          </div>
          <h2 className="text-xl font-semibold text-accent">
            Full Stack Web Developer
          </h2>
        </div>
        <div className="text-accent/80">
          <span className="font-bold text-accent">
            제너럴리스트(Generalist)
          </span>
          를 추구하며,
          <span className="font-bold text-accent"> 함께 가치</span>를 만들어
          나가는 개발자 이성우입니다.
        </div>
        <div className="text-text">
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-4" />
            <p> ·· 1994년 01월 15일</p>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="size-4" />
            <p> ·· crescent3859@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="size-4" />
            <p> ·· 010 5511 3288</p>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="size-4" />
            <p>
              {' '}
              ··{' '}
              <a href="https://github.com/Lukaid-dev">
                https://github.com/Lukaid-dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
