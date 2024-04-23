'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItem = [
  { name: '블로그', path: '/blog' },
  { name: '포트폴리오', path: '/portfolio' },
];
const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 mx-auto flex items-center justify-between bg-white px-4 py-2 shadow-[rgba(0,0,15,0.1)_0px_3px_2px_0px]">
      <Link
        className="rounded-xl px-4 py-2 text-2xl font-bold text-primary hover:bg-gradient-to-br hover:from-third hover:via-primary/15 hover:to-third"
        href="/">
        Lukaid
      </Link>
      <div className="flex">
        {navigationItem.map(({ name, path }) => (
          <Link
            key={path}
            className={`rounded-xl px-4 py-2 text-text hover:bg-gradient-to-br hover:from-third hover:via-primary/15 hover:to-third ${pathname === path ? 'font-semibold text-gray-950' : 'font-normal'}`}
            href={path}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
