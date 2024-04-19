'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillCardOpened from './skillCardOpened';
import SkillCardClosed from './skillCardClosed';
import Divider from '@/components/divider';

export default function Skills() {
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
    <div className="mx-4 flex flex-col rounded-xl p-4 text-text outline-none ring ring-border">
      <div className="mb-4 flex justify-between gap-4">
        <span className="text-3xl font-semibold text-gray-950">Skills</span>
        <div
          onClick={onClick}
          className="flex text-text/80 hover:cursor-pointer">
          <span>{isOpen ? '닫기' : '자세히보기'}</span>
        </div>
      </div>
      <Divider />
      <motion.div
        className="mt-4"
        variants={containerVariants}
        animate={isOpen ? 'hidden' : 'visible'}>
        <SkillCardClosed isOpen={isOpen} />
      </motion.div>
      <motion.div
        variants={containerVariants}
        animate={isOpen ? 'visible' : 'hidden'}>
        <SkillCardOpened isOpen={isOpen} />
      </motion.div>
    </div>
  );
}
