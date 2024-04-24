import Image from 'next/image';

export default function LandingProfile() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 text-text md:flex-row">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-back px-16 py-8">
        <div className="relative size-28 overflow-hidden rounded-full md:size-40">
          <a href="https://github.com/Lukaid-dev" target="_blank">
            <Image
              fill
              className="object-cover"
              src="/lukaid_profile.jpeg"
              alt={'public/lukaid_profile.jpeg'}
            />
          </a>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-primary">이성우</span>
          <span className="text-2xl font-semibold text-primary">/</span>
          <span className="text-1xl font-semibold text-primary">Lukaid</span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-back px-16 py-8">
        featured post
      </div>
    </div>
  );
}
