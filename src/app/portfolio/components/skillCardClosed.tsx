'use client';

import useThemeStore from '@/app/store/theme';
import SkillBadge from './skillBadge';

export default function SkillCardClosed({ isOpen }: { isOpen: boolean }) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`${isOpen ? 'hidden' : 'flex'} flex-col gap-4`}>
      <div className="flex gap-4">
        <SkillBadge isOpen={false} skill="react" />
        {theme === 'one-dark' || theme === 'github-dark' ? (
          <SkillBadge isOpen={false} skill="nextjs_white" />
        ) : (
          <SkillBadge isOpen={false} skill="nextjs" />
        )}
        {theme === 'one-dark' || theme === 'github-dark' ? (
          <SkillBadge isOpen={false} skill="django_white" />
        ) : (
          <SkillBadge isOpen={false} skill="django" />
        )}
      </div>

      <div className="flex gap-4">
        <SkillBadge isOpen={false} skill="javascript" />
        <SkillBadge isOpen={false} skill="typescript" />
        <SkillBadge isOpen={false} skill="python" />
      </div>

      <div className="flex gap-4">
        <SkillBadge isOpen={false} skill="flutter" />
        <SkillBadge isOpen={false} skill="dart" />
      </div>

      <div className="flex gap-4">
        <SkillBadge isOpen={false} skill="ubuntu" />
        <SkillBadge isOpen={false} skill="docker" />
      </div>
    </div>
  );
}
