'use client';

import useThemeStore from '@/app/store/theme';
import { Theme } from '@/app/types/theme';
import Divider from '@/components/divider';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ModalSettingPage() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const router = useRouter();
  const onCloseClick = () => {
    router.back();
  };

  useEffect(() => {
    const theme = document.body.getAttribute('data-theme');
    setTheme(theme as Theme);
  }, [setTheme]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
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
