import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../types/theme';
import { dataTheme } from '@/lib/constants';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const changeAttAndStorage = (theme: Theme) => {
  window.localStorage.setItem(dataTheme, theme);
  document.body.setAttribute(dataTheme, theme);
};

const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: Theme.oneLight,
      setTheme: (theme: Theme) => {
        set({ theme });
      },
      toggleTheme: () => {
        set((state) => {
          switch (state.theme) {
            case Theme.oneDark:
              changeAttAndStorage(Theme.oneLight);
              return { theme: Theme.oneLight };
            case Theme.oneLight:
              changeAttAndStorage(Theme.githubDark);
              return { theme: Theme.githubDark };
            case Theme.githubDark:
              changeAttAndStorage(Theme.githubLight);
              return { theme: Theme.githubLight };
            case Theme.githubLight:
              changeAttAndStorage(Theme.oneDark);
              return { theme: Theme.oneDark };
            default:
              changeAttAndStorage(Theme.oneDark);
              return { theme: Theme.oneDark };
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
