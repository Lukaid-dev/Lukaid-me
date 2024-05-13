import { create } from 'zustand';
import { Theme } from '../types/theme';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  switchTheme: () => void;
};

const changeAttribute = (theme: Theme) => {
  window.localStorage.setItem('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
};

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'one-light',
  setTheme: (theme: Theme) => {
    set({ theme });
  },
  switchTheme: () => {
    set((state: ThemeState) => {
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
}));

export default useThemeStore;
