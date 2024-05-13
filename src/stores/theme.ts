import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../types/theme';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const changeAttribute = (theme: Theme) => {
  document.body.setAttribute('data-theme', theme);
};

const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: 'one-light',
      setTheme: (theme: Theme) => {
        set({ theme });
      },
      toggleTheme: () => {
        set((state) => {
          switch (state.theme) {
            case 'one-dark':
              changeAttribute('one-light');
              return { theme: 'one-light' };
            case 'one-light':
              changeAttribute('github-dark');
              return { theme: 'github-dark' };
            case 'github-dark':
              changeAttribute('github-light');
              return { theme: 'github-light' };
            case 'github-light':
              changeAttribute('one-dark');
              return { theme: 'one-dark' };
            default:
              changeAttribute('one-dark');
              return { theme: 'one-dark' };
          }
        });
      },
    }),
    {
      name: 'theme-storage',
    },
  ),
);

export default useThemeStore;
