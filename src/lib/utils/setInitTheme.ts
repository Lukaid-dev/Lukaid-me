// 초기 테마를 설정하는 함수
export function setInitTheme() {
  function getInitTheme() {
    const themeStorage = window.localStorage.getItem('theme-storage');

    if (themeStorage) {
      const currentTheme = JSON.parse(themeStorage).state.theme;
      return currentTheme;
    } else {
      const preference = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof preference.matches === 'boolean';

      if (hasMediaQueryPreference) {
        return preference.matches ? 'one-dark' : 'one-light';
      }

      return 'one-light';
    }
  }

  //현재 테마 모드
  const currentTheme = getInitTheme();
  if (currentTheme) document.body.setAttribute('data-theme', currentTheme);
}
