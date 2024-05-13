// 초기 테마를 설정하는 함수
export function setInitTheme() {
  function getInitTheme() {
    const currentTheme = window.localStorage.getItem('data-theme');
    const hasTheme = typeof currentTheme === 'string';

    if (hasTheme) {
      return currentTheme;
    }

    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof preference.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return preference.matches ? 'one-dark' : 'one-light';
    }

    return 'one-light';
  }

  //현재 테마 모드
  const currentTheme = getInitTheme();
  if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    window.localStorage.setItem('data-theme', currentTheme);
  }
}
