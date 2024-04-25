import Divider from '@/components/divider';
import Naming from './naming';
import Period from './period';
import SummaryCard from './summaryCard';
import { summary } from '@/app/types/summary';

export default function Project_1() {
  const summaries: summary[] = [
    { key: '포지션', value: '풀스택 개발자 (개인 프로젝트)' },
    {
      key: '주요 사용 기술',
      value:
        'React, TypeScript, tailwindcss, React-Router-dom, TanStack Query, Firebase, Vite',
    },
    {
      key: 'GitHub URL',
      isUrl: true,
      urls: [
        {
          title: 'github',
          link: 'https://github.com/Lukaid-dev/mobile-wedding-invitation-240203',
        },
      ],
    },
    {
      key: '배포 URL',
      isUrl: true,
      urls: [
        {
          title: 'wedding-invitation',
          link: 'https://wedding-invitation-240203.web.app/Home',
        },
      ],
    },
  ];

  return (
    <div className="mx-4 flex flex-col gap-4 rounded-xl p-4 text-text outline-none ring ring-guide">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold text-text">Project</span>
      </div>
      <Divider />
      <Naming
        name="모바일 청첩장"
        description="기존의 따분한 모바일 청첩장이 마음에 들지 않아 직접 만든 다이나믹한 모바일 청첩장"
      />
      <Period duration="2023.12.17 ~ 2023.12.24 (일주일)" />
      <SummaryCard summaries={summaries} />
      <div className="pl-4 text-text">
        <ul className="leading-7 leading-7 [&_ul]:pl-6">
          <li>
            초기 기능 정의 및 화면 기획 (넓은 연령대를 커버하기 위해 직관적인
            라우팅 기획)
          </li>
          <li>
            동적인 라우팅을 위해 현재 위치를 즉시 시각적으로 알려주는 Nav-Tab
            개발
          </li>
          <li>
            카카오톡 공유기능 및 안정적인 CSS 적용을 위한
            KakaoInAppBrowserDetector 도입
          </li>
          <li>
            메인사진 로드 시 먼저 불러온 사진을 미리 보여주고, 나머지 로딩 중
            토스트 적용 (UX개선)
          </li>
          <li>
            Tanstack Query를 사용하여 Data Fetching 로직 단순화 및 Side Effect
            제거
          </li>
          <li>
            Firebase Firestore 및 Storage 서비스를 이용하여 방명록 기능 개발 및
            정적 이미지 서빙{' '}
            <a
              href="https://velog.io/@lukaid/r68u67rl"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-3 underline">
              [포스팅]
            </a>
          </li>
          <li>Firebase Hosting 서비스를 이용하여 배포</li>
        </ul>
      </div>
    </div>
  );
}
