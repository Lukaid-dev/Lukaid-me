'use client';

import { useEffect, useState } from 'react';

export default function DynamicSkills() {
  const skills = [
    'Nextjs',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Flutter',
    'Dart',
    'Django',
    'Python',
    'Express',
    'Nodejs',
    'Ubuntu',
    'Docker',
    'React',
  ];
  const [text, setText] = useState('React');
  const [displayText, setDisplayText] = useState('');
  const [isWriting, setIsWriting] = useState(true);

  useEffect(() => {
    // 작성하다가 글자가 완성되면 1초 대기 후 한글자 삭제
    if (text === displayText && isWriting) {
      const time = 2000;
      const interval = setInterval(() => {
        setIsWriting(false);
        setDisplayText((prev) => prev.slice(0, prev.length - 1));
      }, time);
      return () => clearInterval(interval);
    } else if (text !== displayText && isWriting) {
      // 글자가 완성되지 않았다면 한글자 추가
      const time = 100;
      const interval = setInterval(() => {
        setDisplayText((prev) => text.slice(0, prev.length + 1));
      }, time);
      return () => clearInterval(interval);
    } else if (displayText !== '' && !isWriting) {
      // 글자가 완전히 지워지지 않았다면 한글자 삭제
      const time = 100;
      const interval = setInterval(() => {
        setDisplayText((prev) => prev.slice(0, prev.length - 1));
      }, time);
      return () => clearInterval(interval);
    } else if (displayText === '' && !isWriting) {
      // 글자가 완전히 지워지면 다음 글자로 넘어감
      const time = 100;
      const interval = setInterval(() => {
        setIsWriting(true);
        setDisplayText('');
        setText(skills[skills.indexOf(text) + 1] || skills[0]);
      }, time);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, text]);

  return <div>{displayText}</div>;
}
