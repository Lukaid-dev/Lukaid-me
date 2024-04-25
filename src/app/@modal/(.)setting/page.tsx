'use client';

import Divider from '@/components/divider';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Theme = 'one-dark' | 'one-light' | 'github-dark' | 'github-light';

const changeAttAndStorage = (theme: Theme) => {
  window.localStorage.setItem('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
};

export default function ModalSettingPage() {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const router = useRouter();
  const onCloseClick = () => {
    router.back();
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case 'one-dark':
          changeAttAndStorage('one-light');
          return 'one-light';
        case 'one-light':
          changeAttAndStorage('github-dark');
          return 'github-dark';
        case 'github-dark':
          changeAttAndStorage('github-light');
          return 'github-light';
        case 'github-light':
          changeAttAndStorage('one-dark');
          return 'one-dark';
        default:
          changeAttAndStorage('one-dark');
          return 'one-dark';
      }
    });
  };

  useEffect(() => {
    if (theme !== undefined) {
      changeAttAndStorage(theme);
    }
  }, [theme]);

  useEffect(() => {
    const theme = document.body.getAttribute('data-theme');
    setTheme(theme as Theme);
  }, []);
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-2 flex max-w-screen-md flex-1 flex-col gap-4 rounded-lg bg-back p-4 text-text">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-text">Settings</div>
          <button onClick={onCloseClick} className="text-text">
            <XMarkIcon className="size-8" />
          </button>
        </div>
        <Divider />
        <div className="flex items-center justify-between">
          <div className="hover:cursor-pointer">Toggle Theme</div>
          <button
            onClick={toggleTheme}
            className="rounded-xl bg-accent px-4 py-2 font-medium text-white outline-none transition-transform hover:cursor-pointer active:scale-90">
            {theme}
          </button>
        </div>
      </div>
    </div>
  );
}
