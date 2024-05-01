import React from 'react';

export default function Navbar() {
  return (
    <>
      <header className="top-0 left-0 right-0 bg-[#013f88]">
        <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4">
          <div className="flex mr-4">
            <a href="/">
              <img src="https://www.svgrepo.com/show/499831/target.svg" loading="lazy" style={{ color: 'transparent' }} width="32" height="32" alt="Logo" />
            </a>
          </div>
          <ul className="hidden items-center justify-center gap-6 md:flex">
            <li className="pt-1.5 text-sm text-white">
              <a href="#">New Car</a>
            </li>
            <li className="pt-1.5 text-sm text-white">
              <a href="#">Used Car</a>
            </li>
            <li className="pt-1.5 text-sm text-white">
              <a href="#">Sell Your Car</a>
            </li>
            <li className="pt-1.5 text-sm text-white">
              <a href="#">Buy Car</a>
            </li>
          </ul>
          <div className="flex-grow"></div>
          <div className="hidden items-center justify-center gap-6 md:flex">
            <a href="#" className="text-sm text-white">Sign in</a>
            <a href="#" className="text-sm text-white">Sign up</a>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
