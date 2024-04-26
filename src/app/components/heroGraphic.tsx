import DynamicSkills from './dynamicSkills';

export default function HeroGraphic() {
  return (
    <div className="h-32 w-full gap-4 rounded px-4 md:h-40 lg:h-48 xl:h-64">
      <div className="flex h-full w-full items-center rounded-lg bg-back px-10">
        <div className="flex items-center gap-1 text-2xl font-semibold text-text">
          <div>Lukaid.me(</div>
          <DynamicSkills />
          <div>)</div>
        </div>
      </div>
    </div>
  );
}
