import Divider from '@/components/divider';
import Naming from './naming';
import Period from './period';
import SummaryCard from './summaryCard';
import { Summary } from '@/app/types/summary';

export default function ProjectLukaidMe() {
  const summaries: Summary[] = [
    { key: '포지션', value: '풀스택 개발자 (개인 프로젝트)' },
    {
      key: '주요 사용 기술',
      value:
        'Nextjs, Django, TypeScript, Python, Tailwindcss, React-Markdown, Zustand, Vercel',
    },
    {
      key: 'GitHub URL',
      isUrl: true,
      urls: [
        {
          title: 'github',
          link: 'https://github.com/Lukaid-dev/Lukaid-me',
        },
      ],
    },
    {
      key: '배포 URL',
      isUrl: true,
      urls: [
        {
          title: 'lukaid.me',
          link: 'https://www.lukaid.me/',
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
        name="Lukaid.me"
        description="개인 포트폴리오 및 블로그 사이트로, Nextjs와 Django를 사용하여 제작한 SSR 블로그 사이트"
      />
      <Period duration="2024.04.19 ~ (진행중)" />
      <SummaryCard summaries={summaries} />
      <div className="pl-4 text-text">
        <ul className="leading-7 [&_ul]:pl-6">
          <li>Nextjs를 활용하여, SSR 포트폴리오 및 블로그 화면 제작</li>
          <li>
            Django를 활용하여, api 서버 제작
            <ul>
              <li>Django Admin을 활용하여, 블로그 포스트 관리</li>
            </ul>
          </li>
          <li>
            Tailwindcss를 활용하여, 반응형 웹 디자인 적용
            <ul>
              <li>Tailwindcss와 zustand를 활용하여 서비스 전체 Theme 적용</li>
            </ul>
          </li>
          <li>
            React-Markdown을 활용하여, 마크다운 포스트 렌더링
            <ul>
              <li>마크다운 포스트를 Django Admin에서 작성 및 수정 가능</li>
            </ul>
          </li>
          <li>vercel 서비스를 활용하여, 서비스 배포</li>
        </ul>
      </div>
    </div>
  );
}
