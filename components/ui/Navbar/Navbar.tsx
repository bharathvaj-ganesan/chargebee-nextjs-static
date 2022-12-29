import Link from 'next/link';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link
              className="flex flex-row items-center text-xl font-light text-gray-400 transition hover:text-gray-100 active:opacity-80"
              href="/"
            >
              <span className="font-bold text-gray-200">Chargebee</span>&nbsp;Stack<div className="mx-1"></div>
            </Link>
          </div>
          <div className="flex flex-1 justify-end space-x-8">
            <Link href="/pricing">Pricing</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
