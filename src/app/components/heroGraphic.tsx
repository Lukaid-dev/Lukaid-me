import Image from 'next/image';
import DynamicSkills from './dynamicSkills';

export default function HeroGraphic() {
  return (
    <div className="flex h-48 w-full flex-col justify-center gap-4 rounded-xl py-4 pl-10 sm:h-32 md:h-40 lg:h-48 xl:h-64">
      <div className="flex items-center text-2xl font-semibold">
        <div>Lukaid.Dev(</div>
        <DynamicSkills />
        <div className="relative h-6 w-4 animate-pulse">
          <Image fill src="cursor.svg" alt="cursor" />
        </div>
        <div>)</div>
      </div>
    </div>
  );
}
