'use client';

import useThemeStore from '@/app/store/theme';
import SkillBadge from './skillBadge';

export default function SkillCardOpened({ isOpen }: { isOpen: boolean }) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-4`}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="react" />
          {theme === 'one-dark' || theme === 'github-dark' ? (
            <SkillBadge isOpen={isOpen} skill="nextjs_white" />
          ) : (
            <SkillBadge isOpen={isOpen} skill="nextjs" />
          )}
        </div>
        <div className="pl-6">
          현재 가장 집중하고 있는 스택입니다. boostcamp에서 react를 처음 배웠고,
          boostcamp를 수료하고 추가로 nextjs를 학습했습니다. react의 사용법만
          아니라, 동작 원리를 이해하기 위해 많은 시간 학습했고, 여러 프로젝트를
          진행했습니다. 또한, react를 직접 사용하며 장단점을 느끼고, 이를
          보완하기 위해 nextjs를 학습했습니다. 이를 통해, 제대로 된 프로젝트를
          만들고 싶어 현재의 블로그를 개발하게 되었습니다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          {theme === 'one-dark' || theme === 'github-dark' ? (
            <SkillBadge isOpen={isOpen} skill="django_white" />
          ) : (
            <SkillBadge isOpen={isOpen} skill="django" />
          )}
        </div>
        <div className="pl-6">
          직전 커리어는 백엔드 개발자로서, django를 사용했습니다. django를
          사용하여 API와 DB 설계 및 개발, log 수집을 통한 데이터 통계 작성, 서버
          관리 등을 담당했고, 이를 통해 서버의 전반적인 구조와 운영에 대한
          이해를 가지게 되었습니다. 프레임워크로서의 django를 선호하는데,
          아키텍처, ORM, Admin, 보안 그리고 여러 라이브러리들을 활용한 확장성
          등, 프레임워크가 주는 편리함과 안정성을 좋아합니다.
          <br />
          실무에서 배운 것을 바탕으로, 개인프로젝트에서도 django를 사용하고
          있습니다. 이를 통해, 개인프로젝트를 빠르게 구현할 수 있었고, admin
          기능을 통해 데이터를 관리하는 데 큰 도움이 되었습니다. 현재의
          프로젝트도 django로 개발 중이며, 이를 통해 django의 장점을 더 깊게
          배워가고 있습니다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="javascript" />
          <SkillBadge isOpen={isOpen} skill="typescript" />
        </div>
        <div className="pl-6">
          현재 가장 많이 사용 중인, js/ts입니다. boostcamp에서 js를 주 언어로
          학습했고, 이를 통해 언어의 특성에 대해 깊게 공부했습니다. 추가로{' '}
          <a
            className="text-accent"
            href="https://m.yes24.com/Goods/Detail/43219481"
            target="_blank">
            You Don’t Know JS
          </a>
          를 읽으며 언어의 동작 원리와 특성에 대해 더 깊게 이해하고, 이를 코드에
          적용하며, 이전에는 느끼지 못했던, 언어의 장점을 느꼈습니다.
          <br />
          또한, ts를 추가로 학습하면서, 타입에 대한 이해를 높였고, 이를 통해
          코드의 안정성을 높일 수 있음을 느꼈습니다. 앞으로도 js/ts를 주 언어로
          사용할 예정이며, 더 깊게 공부하여, 더 나은 코드를 작성하고 싶습니다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="python" />
        </div>
        <div className="pl-6">
          개발자로서 처음 사용한 언어인 python입니다. 데이터 분석으로 시작했고,
          백엔드 개발자로 전향하면서도 계속 사용해 왔습니다. 알고리즘 문제를 풀
          때도 사용하고, 개인프로젝트에서도 사용하며, 현재까지도 가장 익숙한
          언어입니다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="flutter" />
          <SkillBadge isOpen={isOpen} skill="dart" />
        </div>
        <div className="pl-6">
          이전 커리어에서 앱 개발 인력이 필요했고, 이를 자원하여 flutter를
          학습하고, 프로젝트를 진행했습니다. flutter의 장점을 느끼며, 유망한
          프레임워크라고 생각하며, 개인적으로 flutter에 미래를 기대하고
          있습니다.
          <br />
          추가로 flutter와 dart를 사용하며, 클라이언트 개발에 대한 재미를
          느꼈고, 이를 통해 react와 typescript에 대한 강한 흥미를 가지게 되었고,
          학습하게 된 계기가 되었습니다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="ubuntu" />
          <SkillBadge isOpen={isOpen} skill="docker" />
        </div>
        <div className="pl-6">
          개발자로서 커리어를 시작할 때만 하더라도, 잘 모르는 분야였으나, 현재는
          많은 학습을 통해 능숙하게 다룰 수 있습니다. 모든 프로젝트의 서버로
          ubuntu를 사용하고 있고, 파일 시스템과 ssh를 이용한 서버 관리를 할 수
          있으며, 도커를 사용하여 여러 서버 컨테이너를 관리하고 있습니다.
          <br />
          또한, ubuntu machine에도 관심이 많아서, 2대의 ubuntu pc를 서버 및
          개발용으로 사용하고 있습니다.
        </div>
      </div>
    </div>
  );
}
