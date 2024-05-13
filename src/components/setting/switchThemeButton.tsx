'use client';

import { dataTheme } from '@/lib/constants';
import useThemeStore from '@/stores/theme';
import { Theme } from '@/types/theme';
import { useEffect } from 'react';

export default function SwitchThemeButton() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const switchTheme = useThemeStore((state) => state.switchTheme);

  useEffect(() => {
    const theme = document.body.getAttribute(dataTheme);
    setTheme(theme as Theme);
  }, [setTheme]);

  return (
    <div className="flex items-center justify-between">
      <div>Switch Theme</div>
      <button
        onClick={switchTheme}
        className="rounded-xl bg-accent px-4 py-2 font-medium text-white outline-none transition-transform hover:cursor-pointer active:scale-90">
        {theme}
      </button>
    </div>
  );
}