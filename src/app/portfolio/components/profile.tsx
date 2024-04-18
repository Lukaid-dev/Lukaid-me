import Image from 'next/image';

export default function Profile() {
  return (
    <div className="ring-second mx-4 mt-4 flex flex-col gap-4 rounded-xl p-4 outline-none ring sm:flex-row">
      <div className="relative h-60 w-40 overflow-hidden rounded-xl">
        <Image
          fill
          objectFit="cover"
          src="/lukaid_profile.jpeg"
          alt={'public/lukaid_profile.jpeg'}
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-2">
            <span className="text-primary text-3xl font-bold">이성우</span>
            <span className="text-primary text-2xl font-semibold">/</span>
            <span className="text-primary text-1xl font-semibold">Lukaid</span>
          </div>
          <h2 className="text-primary text-xl font-semibold">
            full stack web developer
          </h2>
        </div>
        <div className="text-second">
          <span className="text-primary font-bold">
            제너럴리스트(Generalist)
          </span>
          를 추구하며,
          <span className="text-primary font-bold">함께 가치</span>를 만들어
          나가는 개발자 이성우입니다.
        </div>
        <div className="text-text">
          <div className="flex gap-2">
            <Image
              src="/icon-calendar.svg"
              alt="icon-calendar"
              width={16}
              height={16}
            />
            <p> ·· 1994년 01월 15일</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icon-mail.svg"
              alt="icon-mail"
              width={16}
              height={16}
            />
            <p> ·· crescent3859@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icon-phone.svg"
              alt="icon-phone"
              width={16}
              height={16}
            />
            <p> ·· 010 5511 3288</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icon-github.svg"
              alt="icon-github"
              width={16}
              height={16}
            />
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
