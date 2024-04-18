import SkillBadge from './skillBadge';

export default function SkillCardClosed({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'hidden' : 'flex'} mt-4 flex-col gap-4`}>
      <div className="flex gap-2">
        <SkillBadge isOpen={false} skill="react" />
        <SkillBadge isOpen={false} skill="nextjs" />
        <SkillBadge isOpen={false} skill="javascript" />
        <SkillBadge isOpen={false} skill="typescript" />
        <SkillBadge isOpen={false} skill="tailwindcss" />
      </div>

      <div className="flex gap-2">
        <SkillBadge isOpen={false} skill="dart" />
        <SkillBadge isOpen={false} skill="flutter" />
      </div>

      <div className="flex gap-2">
        <SkillBadge isOpen={false} skill="python" />
        <SkillBadge isOpen={false} skill="django" />
      </div>

      <div className="flex gap-2">
        <SkillBadge isOpen={false} skill="nodejs" />
        <SkillBadge isOpen={false} skill="express" />
      </div>

      <div className="flex gap-2">
        <SkillBadge isOpen={false} skill="ubuntu" />
        <SkillBadge isOpen={false} skill="docker" />
      </div>
    </div>
  );
}
