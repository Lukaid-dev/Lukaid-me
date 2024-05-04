import Image from 'next/image';
import PinnedPosts from './pinnedPosts';

export default function LandingProfile() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 text-text md:flex-row">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-back px-16 py-8">
        <div className="relative size-28 overflow-hidden rounded-full md:size-40">
          <a href="https://github.com/Lukaid-dev">
            <Image
              fill
              className="object-cover"
              src="/lukaid_profile.jpeg"
              alt="lukaid_profile"
            />
          </a>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-accent">이성우</span>
          <span className="text-2xl font-semibold text-accent">/</span>
          <span className="text-1xl font-semibold text-accent">Lukaid</span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-4 rounded-lg bg-back p-8">
        <PinnedPosts />
      </div>
    </div>
  );
}
