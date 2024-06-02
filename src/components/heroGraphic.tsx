import DynamicSkills from './dynamicSkills';

export default function HeroGraphic() {
  return (
    <div className="h-32 w-full gap-4 rounded px-4 md:h-40 lg:h-48 xl:h-64">
      <div className="flex h-full w-full flex-col items-center rounded-lg bg-back">
        <div className="flex w-full gap-1 px-2 py-2 *:size-3 *:rounded-full">
          <div className="bg-red" />
          <div className="bg-gold" />
          <div className="bg-green" />
        </div>
        <div className="flex h-full w-full items-center gap-1 px-10 text-2xl font-semibold text-text">
          <div>Lukaid.me(</div>
          <DynamicSkills />
          <div>)</div>
        </div>
      </div>
    </div>
  );
}
