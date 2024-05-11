'use client';

export default function FormatToTimeAgo({ date }: { date: string }) {
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diffInMs = now - time;

  const secInMs = 1000;
  const minInMs = secInMs * 60;
  const hourInMs = minInMs * 60;
  const dayInMs = hourInMs * 24;
  const weekInMs = dayInMs * 7;

  const formatter = new Intl.RelativeTimeFormat('ko');

  if (diffInMs >= weekInMs) {
    const year = new Date(time).getFullYear();
    const month = new Date(time).getMonth() + 1;
    const day = new Date(time).getDate();
    return (
      <span>
        {`${year % 100}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`}
      </span>
    );
  } else if (diffInMs >= dayInMs) {
    const diff = Math.round(diffInMs / dayInMs);
    return <span>{formatter.format(-diff, 'days')}</span>;
  } else if (diffInMs >= hourInMs) {
    const diff = Math.round(diffInMs / hourInMs);
    return <span>{formatter.format(-diff, 'hours')}</span>;
  } else if (diffInMs >= minInMs) {
    const diff = Math.round(diffInMs / minInMs);
    return <span>{formatter.format(-diff, 'minutes')}</span>;
  } else {
    return <span>방금 전</span>;
  }
}
