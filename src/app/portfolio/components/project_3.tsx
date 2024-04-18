import Divider from '@/components/divider';
import Naming from './naming';
import Period from './period';
import SummaryCard from './summaryCard';
import { summary } from '@/summary';

export default function Project_3() {
  const summaries: summary[] = [
    { key: '포지션', value: '백엔드 개발자' },
    {
      key: '주요 사용 기술',
      value:
        'Python, Django, Gunicorn, nginx, DRF, PostgreSQL, Docker, Firebase, OpenAI',
    },
    {
      key: 'GitHub URL',
      isUrl: true,
      urls: [
        {
          title: 'github',
          link: 'https://github.com/Billionaire-Project/four_hours_service',
        },
      ],
    },
    {
      key: '배포 URL',
      isUrl: true,
      urls: [
        {
          title: '플레이스토어',
          link: 'https://play.google.com/store/apps/details?id=com.bilp.fourHours&hl=ko&gl=US',
        },
        {
          title: '앱스토어',
          link: 'https://apps.apple.com/kr/app/4-hours/id6449733324',
        },
      ],
    },
  ];

  return (
    <div className="mx-4 flex flex-col gap-4 rounded-xl p-4 text-text outline-none ring ring-border">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold text-gray-950">Project</span>
      </div>
      <Divider />
      <Naming
        name="4Hours"
        description="4시간에 한번 기분을 공유하는 일기 앱 | 사이드 팀 프로젝트"
      />
      <Period duration="2023.02 ~ 2023.08 (7개월)" />
      <SummaryCard summaries={summaries} />
      <div className="pl-4 text-text">
        <ul className="list-inside list-disc [&_ul]:pl-8">
          <li>초기 기능 정의 및 기획</li>
          <li>
            한대의 로컬 pc에서 서비스 배포 및 개발 서버 구동을 위해 port 분리,
            Dockerizing 및 서비스 분할
          </li>
          <li>
            효율적인 배포 및 개발 환경 구성을 위해 자주 쓰이는 명령어 집합을
            sh파일로 분리
          </li>
          <li>
            핵심 서비스인 포스팅 및 post 블러 처리를 위해, post CRUD 개발 및
            OpenAI 서비스 도입
          </li>
          <li>Firebase Auth를 이용하여, Google과 Apple 소셜로그인 도입</li>
          <li>
            Django와 DRF의 Authentication middleware를 이용하여 효율적인
            세션관리
          </li>
          <li>스케줄러를 이용하여 fake post 생성 및 post 블러 작업 처리</li>
        </ul>
      </div>
    </div>
  );
}
