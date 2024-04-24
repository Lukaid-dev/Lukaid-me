import Divider from '@/components/divider';
import Naming from './naming';

export default function Education() {
  return (
    <div className="mx-4 flex flex-col gap-4 rounded-xl p-4 text-text outline-none ring ring-guide">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold text-gray-950">Education</span>
      </div>
      <Divider />
      <Naming
        name="네이버 부스트캠프 8기"
        description="네이버 커넥트 재단 주관 웹 풀스택 개발자 양성 커리큘럼"
      />
      <div className="pl-4 text-text">
        <ul className="list-inside list-disc [&_ul]:pl-8">
          <li>기간: 2023.07 ~ 2023.12 (5개월)</li>
          <li>네이버 커넥트 재단 주관 웹 풀스택 개발자 양성 커리큘럼</li>
        </ul>
      </div>
      <Naming name="한국항공대 일반대학원" />
      <div className="pl-4 text-text">
        <ul className="list-inside list-disc [&_ul]:pl-8">
          <li>기간: 2021.03 ~ 2021.08 (6개월)</li>
          <li>물류학 중퇴</li>
        </ul>
      </div>
      <Naming name="한국항공대" />
      <div className="pl-4 text-text">
        <ul className="list-inside list-disc [&_ul]:pl-8">
          <li>기간: 2014.03 ~ 2021.02</li>
          <li>항공물류전공 졸업</li>
        </ul>
      </div>
    </div>
  );
}
