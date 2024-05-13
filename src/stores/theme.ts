import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../types/theme';
import { dataTheme, themeStorage } from '@/lib/constants';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  switchTheme: () => void;
};

const changeAttribute = (theme: Theme) => {
  document.body.setAttribute(dataTheme, theme);
};

const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: Theme.oneLight,
      setTheme: (theme: Theme) => {
        set({ theme });
      },
      switchTheme: () => {
        set((state) => {
          switch (state.theme) {
            case Theme.oneDark:
              changeAttribute(Theme.oneLight);
              return { theme: Theme.oneLight };
            case Theme.oneLight:
              changeAttribute(Theme.githubDark);
              return { theme: Theme.githubDark };
            case Theme.githubDark:
              changeAttribute(Theme.githubLight);
              return { theme: Theme.githubLight };
            case Theme.githubLight:
              changeAttribute(Theme.oneDark);
              return { theme: Theme.oneDark };
            default:
              changeAttribute(Theme.oneDark);
              return { theme: Theme.oneDark };
          }
        });
      },
    }),
    {
      name: themeStorage,
    },
  ),
);

export default useThemeStore;
