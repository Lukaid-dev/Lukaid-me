import Divider from '@/components/divider';
import Naming from './naming';
import SummaryCard from './summaryCard';
import { summary } from '@/app/types/summary';

export default function Research() {
  const summaries: summary[] = [
    {
      key: '사용 기술',
      value:
        'R, Python, Pandas, Matplotlib, Seaborn, PyTorch, Scikit-Learn, Flask, Dash',
    },
  ];

  return (
    <div className="mx-4 flex flex-col gap-4 rounded-xl p-4 text-text outline-none ring ring-guide">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold text-text">Research</span>
      </div>
      <Divider />
      <SummaryCard summaries={summaries} />
      <Naming name="한국항공대 일반대학원" description="2021.03 ~ 2021.08" />
      <div className="pl-4 text-text">
        <ul className="leading-7 [&_ul]:pl-4">
          <li>
            텍스트마이닝을 활용한 COVID-19 기간 동안의 항공산업 관련 키워드를
            통한 트렌드 분석
            <a
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11057848"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-3 underline">
              (링크)
            </a>
          </li>
          <li>
            딥러닝 기반 텍스트 분류 모델을 활용한 국내 이커머스 사용자 리뷰 분석
            <a
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10576923"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-3 underline">
              (링크)
            </a>
          </li>
        </ul>
      </div>
      <Naming name="한진물류연구원 (인턴)" description="2020.12 ~ 2021.02" />
      <div className="pl-4 text-text">
        <ul className="leading-7 [&_ul]:pl-4">
          <li>OR-tools를 이용한 물류 노선 최적화</li>
          <li>Pandas등을 이용한 물류 데이터 분석</li>
        </ul>
      </div>
      <Naming name="한국항공대 학부연구원" description="2020.03 ~ 2021.02" />
      <div className="pl-4 text-text">
        <ul className="leading-7 [&_ul]:pl-4">
          <li>데이터 분석 담당</li>
          <li>데이터 시각화 담당</li>
        </ul>
      </div>
    </div>
  );
}
