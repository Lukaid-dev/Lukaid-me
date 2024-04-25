import Divider from '@/components/divider';
import Naming from './naming';
import Period from './period';
import SummaryCard from './summaryCard';
import { summary } from '@/app/types/summary';

export default function Career() {
  const summaries: summary[] = [
    { key: '포지션', value: '풀스택 개발자' },
    {
      key: '주요 사용 기술',
      value: 'Python, Django, Dart, Flutter, Firebase, Pandas, Matplotlib',
    },
    {
      key: '배포 URL',
      isUrl: true,
      urls: [
        {
          title: '플레이스토어',
          link: 'https://play.google.com/store/search?q=jjaann&c=apps',
        },
        {
          title: '앱스토어',
          link: 'https://apps.apple.com/kr/app/%EC%A7%A0-jjaann-%EC%8A%A4%ED%83%80%EC%99%80-%ED%8C%AC-%ED%8C%AC%EA%B3%BC-%ED%8C%AC%EC%9D%B4-%ED%95%A8%EA%BB%98/id1617588410',
        },
        {
          title: 'https://jjaann.com',
          link: 'https://jjaann.com/',
        },
      ],
    },
  ];

  return (
    <div className="mx-4 flex flex-col gap-4 rounded-xl p-4 text-text outline-none ring ring-guide">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold text-text">Career</span>
      </div>
      <Divider />
      <Naming
        name="짠컴퍼니"
        description="다양한 물리적, 심리적 제약에서 비롯된 사람간의 거리를 좁히는 것을 미션으로 하는 가상 술자리 플랫폼"
      />
      <Period duration="2022.01 ~ 2023.05 (1년 5개월)" />
      <SummaryCard summaries={summaries} />
      <div className="pl-4 text-text">
        <ul className="list-inside list-disc *:my-2 [&_ul]:pl-8">
          <li>프로젝트 기획 참여 (API, DB 설계 및 UI 의견 반영)</li>
          <li>
            어드민 기능 개발
            <ul>
              <li>이미지 및 비디오 업로더 개발 (Python, FFmpeg, S3)</li>
              <li>방송용 스케줄러 개발 (Python)</li>
            </ul>
          </li>
          <li>
            노래방 리스트 검색 개발 (Python, Elasticsearch, Nori tokenizer)
          </li>
          <li>
            커뮤니티 기능 개발
            <ul>
              <li>
                친구 DB 설계, 친구 추가 및 삭제 API 및 UI 개발(Django, Flutter)
              </li>
              <li>유저 프로필 이미지 업로드 API 및 UI개발 (Django,Flutter)</li>
            </ul>
          </li>
          <li>
            푸시 알림 기능 개발 및 고도화
            <ul>
              <li>
                기획, DB 설계, API 개발 (Django, ORM, Firebase Cloud Messaging)
              </li>
              <li>
                어플리케이션에 푸시알림 도입 (Firebase Messaging Plugin for
                Flutter)
              </li>
              <li>Dynamic Link(App Link) 모듈 개발 (Flutter, Firebase)</li>
            </ul>
          </li>
          <li>
            Google Analytics 연동
            <ul>
              <li>로그 수집을 위한 UI Component 리팩토링 (Flutter)</li>
              <li>데이터 분석 및 마케팅 지원 (Python, Pandas, Matplotlib)</li>
            </ul>
          </li>
          <li>
            파티 상세 페이지 개발
            <ul>
              <li>
                파티 설정, 이미지 및 비디오 업로더, 참여자 제한 등 (Django,
                Flutter)
              </li>
            </ul>
          </li>
          <li>
            앱 시작 로직 개발
            <ul>
              <li>
                팝업, 알림 및 트래킹 권한 동의 개발, sharedPreference service
                공용화 등 (Flutter)
              </li>
            </ul>
          </li>
          <li>
            스토어, 크레딧, 리워드 개발
            <ul>
              <li>
                티켓 발행, 티켓 구매, 티켓 취소, 티켓 환불 로직 및 UI 개발
                (Django, Flutter)
              </li>
            </ul>
          </li>
          <li>
            회원가입 절차, 홈팝업, 국제화, 앱 초대 코드 및 인앱 리뷰 개발 참여
            (Flutter)
          </li>
          <li>
            Figma 기반 UI 작업
            <ul>
              <li>공용 컴포넌트, DefaultWrapper 등 (Flutter)</li>
            </ul>
          </li>
          <li>버그 리포트 대응 (Firebase Crashlytics, Flutter)</li>
          <li>
            주로 IR용 데이터 분석 및 시각화 작업 진행 (Python, Pandas,
            Matplotlib)
          </li>
          <li>
            로그 수집 로직 개선 개발 참여{' '}
            <ul>
              <li>
                python logger를 이용하여 session 유지 시간 등 유의미한 데이터
                수집 (Python, Django Logger)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
