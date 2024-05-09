'use client';

import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  const [time, setTime] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        router.push('/');
      } else {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [router, time]);

  return (
    <div className="my-auto flex h-96 flex-col items-center justify-center">
      <h1>404 - Page Not Found</h1>
      <p>
        Redirecting to the
        <Link href="/">home page</Link>
        in {time} seconds...
      </p>
    </div>
  );
}
