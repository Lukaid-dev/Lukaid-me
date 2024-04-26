'use client';

import useThemeStore from '@/app/store/theme';
import { Theme } from '@/app/types/theme';
import { useEffect } from 'react';

export default function ToggleThemeButton() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    const theme = document.body.getAttribute('data-theme');
    setTheme(theme as Theme);
  }, [setTheme]);

  return (
    <div className="flex items-center justify-between">
      <div>Toggle Theme</div>
      <button
        onClick={toggleTheme}
        className="rounded-xl bg-accent px-4 py-2 font-medium text-white outline-none transition-transform hover:cursor-pointer active:scale-90">
        {theme}
      </button>
    </div>
  );
}
