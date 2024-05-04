import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../types/theme';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const changeAttAndStorage = (theme: Theme) => {
  window.localStorage.setItem('data-theme', theme);
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
              changeAttAndStorage('one-light');
              return { theme: 'one-light' };
            case 'one-light':
              changeAttAndStorage('github-dark');
              return { theme: 'github-dark' };
            case 'github-dark':
              changeAttAndStorage('github-light');
              return { theme: 'github-light' };
            case 'github-light':
              changeAttAndStorage('one-dark');
              return { theme: 'one-dark' };
            default:
              changeAttAndStorage('one-dark');
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
