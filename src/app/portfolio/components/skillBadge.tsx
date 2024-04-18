import React from 'react';
import Image from 'next/image';

export default function SkillBadge({
  skill,
  isOpen,
}: {
  skill: string;
  isOpen: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative size-8 gap-2 overflow-hidden rounded-xl">
        <Image fill src={`/${skill}.svg`} alt={skill} />
      </div>
      <p className={`${isOpen || 'hidden'}`}>{skill}</p>
    </div>
  );
}
