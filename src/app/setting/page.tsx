'use client';

import useThemeStore from '@/app/store/theme';
import { Theme } from '@/app/types/theme';
import Divider from '@/components/divider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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

  return (
    <div className="flex w-full flex-col rounded-xl bg-back py-4 shadow-xl">
      <div className="mx-2 flex flex-col gap-4 rounded-lg p-4 text-text">
        <div className="text-2xl font-bold text-text">Settings</div>
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
