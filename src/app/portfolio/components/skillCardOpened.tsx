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
            <SkillBadge isOpen={false} skill="nextjs_white" />
          ) : (
            <SkillBadge isOpen={false} skill="nextjs" />
          )}
        </div>
        <div className="flex pl-6">
          차힝기싣언옹횿을 홈오팊 트긴누도에, 제아둰처럼 준보디며어 에푸넌노다
          어딩은 시나물이가 없더는 힜연아허다 놈입시다. 어언 사치킈숀
          니헐에익힛소가에 즜문은 그윰해아는 란판믕으면 라빈단굥믄 그어앙을.
          어누가 포로 체인소다대런의 저으것아아야 애대싰대고 아차우의.
          사팜이진다 주독키를, 시숴둥티노를 멜메군오다 암년핑까지 간까는 제고를
          바니설바엘났이. 락오사취아쟐아서 크스처는 뎜더는 즜무의 우만이종
          좌고이하가 앤셀 저츠은이요 져본이다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="javascript" />
          <SkillBadge isOpen={isOpen} skill="typescript" />
        </div>
        <div className="flex pl-6">
          차힝기싣언옹횿을 홈오팊 트긴누도에, 제아둰처럼 준보디며어 에푸넌노다
          어딩은 시나물이가 없더는 힜연아허다 놈입시다. 어언 사치킈숀
          니헐에익힛소가에 즜문은 그윰해아는 란판믕으면 라빈단굥믄 그어앙을.
          어누가 포로 체인소다대런의 저으것아아야 애대싰대고 아차우의.
          사팜이진다 주독키를, 시숴둥티노를 멜메군오다 암년핑까지 간까는 제고를
          바니설바엘났이. 락오사취아쟐아서 크스처는 뎜더는 즜무의 우만이종
          좌고이하가 앤셀 저츠은이요 져본이다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="flutter" />
          <SkillBadge isOpen={isOpen} skill="dart" />
        </div>
        <div className="flex pl-6">
          차힝기싣언옹횿을 홈오팊 트긴누도에, 제아둰처럼 준보디며어 에푸넌노다
          어딩은 시나물이가 없더는 힜연아허다 놈입시다. 어언 사치킈숀
          니헐에익힛소가에 즜문은 그윰해아는 란판믕으면 라빈단굥믄 그어앙을.
          어누가 포로 체인소다대런의 저으것아아야 애대싰대고 아차우의.
          사팜이진다 주독키를, 시숴둥티노를 멜메군오다 암년핑까지 간까는 제고를
          바니설바엘났이. 락오사취아쟐아서 크스처는 뎜더는 즜무의 우만이종
          좌고이하가 앤셀 저츠은이요 져본이다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          {theme === 'one-dark' || theme === 'github-dark' ? (
            <SkillBadge isOpen={false} skill="django_white" />
          ) : (
            <SkillBadge isOpen={false} skill="django" />
          )}
          <SkillBadge isOpen={isOpen} skill="python" />
        </div>
        <div className="flex pl-6">
          차힝기싣언옹횿을 홈오팊 트긴누도에, 제아둰처럼 준보디며어 에푸넌노다
          어딩은 시나물이가 없더는 힜연아허다 놈입시다. 어언 사치킈숀
          니헐에익힛소가에 즜문은 그윰해아는 란판믕으면 라빈단굥믄 그어앙을.
          어누가 포로 체인소다대런의 저으것아아야 애대싰대고 아차우의.
          사팜이진다 주독키를, 시숴둥티노를 멜메군오다 암년핑까지 간까는 제고를
          바니설바엘났이. 락오사취아쟐아서 크스처는 뎜더는 즜무의 우만이종
          좌고이하가 앤셀 저츠은이요 져본이다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          {theme === 'one-dark' || theme === 'github-dark' ? (
            <SkillBadge isOpen={false} skill="express_white" />
          ) : (
            <SkillBadge isOpen={false} skill="express" />
          )}
          <SkillBadge isOpen={isOpen} skill="nodejs" />
        </div>
        <div className="flex pl-6">
          차힝기싣언옹횿을 홈오팊 트긴누도에, 제아둰처럼 준보디며어 에푸넌노다
          어딩은 시나물이가 없더는 힜연아허다 놈입시다. 어언 사치킈숀
          니헐에익힛소가에 즜문은 그윰해아는 란판믕으면 라빈단굥믄 그어앙을.
          어누가 포로 체인소다대런의 저으것아아야 애대싰대고 아차우의.
          사팜이진다 주독키를, 시숴둥티노를 멜메군오다 암년핑까지 간까는 제고를
          바니설바엘났이. 락오사취아쟐아서 크스처는 뎜더는 즜무의 우만이종
          좌고이하가 앤셀 저츠은이요 져본이다.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-6">
          <SkillBadge isOpen={isOpen} skill="ubuntu" />
          <SkillBadge isOpen={isOpen} skill="docker" />
        </div>
        <div className="flex pl-6">
          차힝기싣언옹횿을 홈오팊 트긴누도에, 제아둰처럼 준보디며어 에푸넌노다
          어딩은 시나물이가 없더는 힜연아허다 놈입시다. 어언 사치킈숀
          니헐에익힛소가에 즜문은 그윰해아는 란판믕으면 라빈단굥믄 그어앙을.
          어누가 포로 체인소다대런의 저으것아아야 애대싰대고 아차우의.
          사팜이진다 주독키를, 시숴둥티노를 멜메군오다 암년핑까지 간까는 제고를
          바니설바엘났이. 락오사취아쟐아서 크스처는 뎜더는 즜무의 우만이종
          좌고이하가 앤셀 저츠은이요 져본이다.
        </div>
      </div>
    </div>
  );
}
