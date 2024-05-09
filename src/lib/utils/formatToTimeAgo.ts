export function formatToTimeAgo(date: string): string {
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diffInMs = now - time;

  const secInMs = 1000;
  const minInMs = secInMs * 60;
  const hourInMs = minInMs * 60;
  const dayInMs = hourInMs * 24;
  const weekInMs = dayInMs * 7;

  const formatter = new Intl.RelativeTimeFormat('ko');
  // TODO: 배포서버에서, formatter에 오류가 발생하는 것 같은데, 추후 원인 파악 및 해결 필요

  if (diffInMs >= weekInMs) {
    const year = new Date(time).getFullYear();
    const month = new Date(time).getMonth() + 1;
    const day = new Date(time).getDate();
    return `${year % 100}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
  } else if (diffInMs >= dayInMs) {
    const diff = Math.round(diffInMs / dayInMs);
    return formatter.format(-diff, 'days');
  } else if (diffInMs >= hourInMs) {
    const diff = Math.round(diffInMs / hourInMs);
    return formatter.format(-diff, 'hours');
  } else if (diffInMs >= minInMs) {
    const diff = Math.round(diffInMs / minInMs);
    return formatter.format(-diff, 'minutes');
  } else {
    return '방금 전';
  }
}
