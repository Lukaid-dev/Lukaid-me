'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigationItem = [
  { name: '블로그', path: '/blog' },
  { name: '포트폴리오', path: '/portfolio' },
];

type Theme = 'one-dark' | 'one-light' | 'github-dark' | 'github-light';

const changeAttAndStorage = (theme: Theme) => {
  window.localStorage.setItem('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
};

const Header = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [isMount, setMount] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case 'one-dark':
          changeAttAndStorage('one-light');
          return 'one-light';
        case 'one-light':
          changeAttAndStorage('github-dark');
          return 'github-dark';
        case 'github-dark':
          changeAttAndStorage('github-light');
          return 'github-light';
        case 'github-light':
          changeAttAndStorage('one-dark');
          return 'one-dark';
        default:
          changeAttAndStorage('one-dark');
          return 'one-dark';
      }
    });
  };

  useEffect(() => {
    if (theme !== undefined) {
      changeAttAndStorage(theme);
    }
  }, [theme]);

  useEffect(() => {
    const theme = document.body.getAttribute('data-theme');
    setTheme(theme as Theme);
  }, []);

  return (
    <nav className="bg-back sticky top-0 z-10 mx-auto flex items-center justify-between px-4 py-2 shadow-[rgba(0,0,15,0.1)_0px_3px_2px_0px]">
      <Link
        className="text-accent hover:from-guide hover:via-accent/15 hover:to-guide rounded-xl px-4 py-2 text-2xl font-bold hover:bg-gradient-to-br"
        href="/">
        Lukaid
      </Link>
      <div className="flex">
        <button onClick={toggleTheme} className="text-text">
          {theme}
        </button>
        {navigationItem.map(({ name, path }) => (
          <Link
            key={path}
            className={`hover:from-guide hover:via-accent/15 hover:to-guide rounded-xl px-4 py-2 text-text hover:bg-gradient-to-br  ${pathname === path ? 'font-semibold text-gray-950' : 'font-normal'}`}
            href={path}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
