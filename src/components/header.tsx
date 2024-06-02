'use client';

import Link from 'next/link';

import { Cog6ToothIcon as CogSolid } from '@heroicons/react/24/solid';

import { usePathname } from 'next/navigation';
import ProgressBar from './progressBar';
import useThemeStore from '@/stores/theme';

const navigationItem = [
  { name: '블로그', path: '/blog' },
  // { name: '포트폴리오', path: '/portfolio' },
];

const Header = () => {
  const pathname = usePathname();
  const theme = useThemeStore((state) => state.theme);

  return (
    <nav className="sticky top-0 z-10 mx-auto mb-2">
      <div className="flex items-center justify-between bg-back px-4 py-2 shadow-[rgba(0,0,15,0.1)_0px_3px_2px_0px]">
        <Link
          className="rounded-xl px-4 py-2 text-2xl font-bold text-accent hover:bg-accent/15"
          href="/">
          Lukaid
        </Link>
        <div className="flex">
          {navigationItem.map(({ name, path }) => (
            <Link
              key={path}
              className={`rounded-xl px-4 py-2 text-text hover:bg-accent/15  ${pathname === path ? 'font-semibold text-text' : 'font-normal'}`}
              href={path}>
              {name}
            </Link>
          ))}
          <Link
            href="/setting"
            className="flex items-center justify-center pl-4">
            {theme === 'one-dark' || theme === 'github-dark' ? (
              <CogSolid className="size-6 text-text" />
            ) : (
              <CogSolid className="size-6" />
            )}
          </Link>
        </div>
      </div>
      <ProgressBar />
    </nav>
  );
};

export default Header;
