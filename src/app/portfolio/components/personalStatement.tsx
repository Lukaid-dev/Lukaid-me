import Divider from '@/components/divider';
import Naming from './naming';

export default function PersonalStatement() {
  return (
    <div className="mx-4 flex flex-col gap-4 rounded-xl p-4 text-text outline-none ring ring-guide">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold text-text">자기소개</span>
      </div>
      <Divider />
      <Naming name="언제든 필요한 곳에" />
      <div className="pl-4 text-text">
        <ul className="list-inside list-disc [&_ul]:pl-8">
          <li>2년차 개발자로, 스타트업에서 웹과 앱 서비스를 개발했습니다.</li>
          <li>
            api, ui, 어드민, 데이터분석 등 서비스에 필요한{' '}
            <span className="font-bold text-accent">
              기술적 지원은 요청이 없어도 먼저 나서서 기여
            </span>
            하였습니다.
          </li>
          <li>
            어떤 프로젝트를 진행하더라도{' '}
            <span className="font-bold text-accent">먼저 나서서 소통</span>
            하고, 문제를 해결하기 위해 노력하고, 팀원들의 의견을 존중하며,
            팀원들 간의 소통을 돕고, 팀원들을 이끌어 나갈 수 있는 개발자가 되기
            위해 노력하고 있습니다.
          </li>
        </ul>
      </div>
      <Naming name="지속가능한 개발자" />
      <div className="pl-4 text-text">
        <ul className="list-inside list-disc [&_ul]:pl-8">
          <li>
            <span className="font-bold text-accent">
              개발과 커뮤니케이션 능력 향상
            </span>
            에 관심이 많아, 네이버 부스트캠프에 참여하여 더 좋은 개발자에 대해
            고민하였습니다.
          </li>
          <li>
            파이썬을 사용하면서{' '}
            <span className="font-bold text-accent">개발의 즐거움</span>을
            느꼈고, 업무 수행에 필요한 스킬로 플러터, 리액트 등을 학습했습니다.
          </li>
          <li>
            앞으로도 계속해서 새로운 것들을 배우고 다양한 사람들과 소통하며
            성장하여, 언제나{' '}
            <span className="font-bold text-accent">도움이 되는 개발자</span>가
            되고자 합니다.
          </li>
        </ul>
      </div>
      <p>
        제 포트폴리오의 가장 마지막까지 읽어주신 모든 분들께 진심으로 감사의
        말씀을 전합니다 😊
      </p>
    </div>
  );
}
