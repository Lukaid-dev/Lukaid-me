import React from 'react';
import Image from 'next/image';

export default function SkillBadge({
  skill,
  isOpen,
}: {
  skill: string;
  isOpen: boolean;
}) {
  const display_text = skill.includes('_') ? skill.split('_')[0] : skill;

  return (
    <div className="flex items-end gap-2">
      <div className="relative size-8 gap-2 overflow-hidden rounded-xl">
        <Image fill src={`/${skill}.svg`} alt={skill} />
      </div>
      <p className={`${isOpen || 'hidden'}`}>{display_text}</p>
    </div>
  );
}
