'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillCardOpened from './skillCardOpened';
import SkillCardClosed from './skillCardClosed';

export default function SkillCard() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: { delay: 0, duration: 0, easing: 'ease-in-out' },
    },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 1, easing: 'ease-in-out' },
    },
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex gap-4">
        <span className="text-3xl font-semibold">Skills</span>
        <div onClick={onClick} className="flex items-end">
          <span>{isOpen ? '닫기' : '자세히보기'}</span>
        </div>
      </div>

      <>
        <motion.div
          variants={containerVariants}
          animate={isOpen ? 'visible' : 'hidden'}>
          <SkillCardOpened isOpen={isOpen} />
        </motion.div>
        <motion.div
          variants={containerVariants}
          animate={isOpen ? 'hidden' : 'visible'}>
          <SkillCardClosed isOpen={isOpen} />
        </motion.div>
      </>
    </div>
  );
}
