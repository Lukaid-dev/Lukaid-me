// 초기 테마를 설정하는 함수
export function setInitTheme() {
  function getInitTheme() {
    const storage = window.localStorage.getItem('theme-storage');

    if (storage) {
      const theme = JSON.parse(storage).state.theme;
      return theme;
    }

    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof preference.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return preference.matches ? 'one-dark' : 'one-light';
    }

    return 'one-light';
  }

  //현재 테마 모드
  const initTheme = getInitTheme();
  if (initTheme) document.body.setAttribute('data-theme', initTheme);
}
