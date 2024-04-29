import Divider from '@/components/divider';
import Naming from './naming';
import Period from './period';
import SummaryCard from './summaryCard';
import { summary } from '@/app/types/summary';

export default function ProjectBaekjoonRooms() {
  const summaries: summary[] = [
    { key: '포지션', value: '프론트엔드 개발자' },
    {
      key: '주요 사용 기술',
      value:
        'React, TypeScript, Tailwindcss, React-Router-dom, React-Query, Socket.IO, Vite',
    },
    {
      key: 'GitHub URL',
      isUrl: true,
      urls: [
        {
          title: 'github',
          link: 'https://github.com/boostcampwm2023/web15-BaekjoonRooms',
        },
      ],
    },
    {
      key: '배포 URL',
      isUrl: true,
      urls: [
        {
          title: 'baekjoonrooms',
          link: 'https://baekjoonrooms.com/intro',
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
        name="BaekjoonRooms"
        description="함께푸는 코딩경쟁 플랫폼 BaekjoonRooms | 네이버 부스트캠프 팀 프로젝트"
      />
      <Period duration="2023.11.06 ~ 2023.12.15 (6주) / 2024.03.08 ~ (현재 다음 버전으로 리팩토링 및 기능 추가 진행 중)" />
      <SummaryCard summaries={summaries} />
      <div className="pl-4 text-text">
        <ul className="leading-7 [&_ul]:pl-6">
          <li>
            <a
              href="https://www.acmicpc.net/"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-3 underline">
              BOJ
            </a>
            의 서드파티로써의 서비스 기획 및 UI 기획
          </li>
          <li>
            사용자의 BOJ 트래픽을 트래킹하여 제출 여부를 파악하기 위해{' '}
            <a
              href="https://chromewebstore.google.com/detail/baekjoonrooms/fndogmcoaeenjcihljbahpdlfinkepeh"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-3 underline">
              Chrome Extension
            </a>
            도입
          </li>
          <li>
            함께푸는 코딩경쟁을 위한 실시간 채팅 기능 및 랭킹 기능을 위해
            Socket.IO 도입
          </li>
          <li>
            상태관리 구조 설계
            <ul>
              <li>
                Context API : Context API의 Provider와 Consumer를 이용하여,
                컴포넌트 단위로 필요한 상태를 주입
              </li>
              <li>
                Tanstack Query : 같은 응답이 예상되는 반복 쿼리에 사용하기 위해
                tanstack query를 도입
              </li>
            </ul>
          </li>
          <li>
            상태관리 구조 한계 및 개선점
            <ul>
              <li>
                한계 1 : Context API 사용 시 원치않는 리렌더링의 방지가 매우
                어려움
              </li>
              <li>
                한계 2 : 서비스의 특성상 유저 정보(AuthContext)에서 라우팅
                정보도 관리해야 하므로, 상태가 무거워지고 불필요한 라우팅이
                발생함
              </li>
              <li>
                개선 1 : 상태관리 도구로써, Context API는 부적절 하다는 것을
                파악하고 Zustand 도입 중 (ver.1)
              </li>
              <li>
                개선 2 : 클라이언트와 서버 상태를 기획부터 명확하게 분리하여,
                Tanstack Query의 setQueryData를 이용해 서버에서 관리되어야 하는
                상태들 분리 (ver.1)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
