import Divider from '@/components/divider';
import Naming from './naming';
import Period from './period';
import SummaryCard from './summaryCard';
import { summary } from '@/summary';

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
          title: 'https://jjaann.com/',
          link: 'https://jjaann.com/',
        },
      ],
    },
  ];

  return (
    <div className="ring-border text-text mx-4 flex flex-col gap-4 rounded-xl p-4 outline-none ring">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold text-gray-950">Career</span>
      </div>
      <Divider />
      <Naming
        name="짠컴퍼니"
        description="다양한 물리적, 심리적 제약에서 비롯된 사람간의 거리를 좁히는 것을 미션으로 하는 가상 술자리 플랫폼"
      />
      <Period duration="2022.01 ~ 2023.05 (1년 5개월)" />
      <SummaryCard summaries={summaries} />
    </div>
  );
}
