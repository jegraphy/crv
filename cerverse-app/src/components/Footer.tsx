import React from 'react';
import Link from 'next/link';

const icons = {
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.555A4.897 4.897 0 01.96 9.1v.062a4.915 4.915 0 003.946 4.814 4.93 4.93 0 01-2.212.084 4.919 4.919 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.514 14.01-14.02 0-.214-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
    </svg>
  ),
  discord: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 55" fill="currentColor" className="w-5 h-5">
      <path d="M60.104 4.552A58.826 58.826 0 0046.852.8a42.16 42.16 0 00-1.99 4.21 55.523 55.523 0 00-16.724 0 42.468 42.468 0 00-1.99-4.21A58.772 58.772 0 007.2 4.552C1.56 14.29-.32 24.754.1 35.155a59.526 59.526 0 0017.944 11.263 43.528 43.528 0 003.796-6.155 35.513 35.513 0 01-5.714-2.744c.48-.352.952-.712 1.4-1.088a41.276 41.276 0 0035.948 0c.448.376.92.736 1.4 1.088a35.478 35.478 0 01-5.714 2.744 43.478 43.478 0 003.796 6.155 59.46 59.46 0 0017.96-11.263c.522-10.49-1.358-20.954-7-30.603zM23.54 37.765c-3.41 0-6.207-3.126-6.207-6.983 0-3.858 2.76-6.984 6.207-6.984 3.462 0 6.223 3.142 6.207 6.984 0 3.857-2.76 6.983-6.207 6.983zm23.92 0c-3.41 0-6.207-3.126-6.207-6.983 0-3.858 2.76-6.984 6.207-6.984 3.462 0 6.223 3.142 6.207 6.984 0 3.857-2.76 6.983-6.207 6.983z" />
    </svg>
  ),
  telegram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.5 2.03L1.833 10.404c-.688.272-.657.653-.12.813l5.137 1.6 2.005 6.296c.235.65.397.9.809.9.417 0 .597-.191.83-.418l3.988-3.885 4.653 3.428c.85.472 1.459.227 1.672-.787l3.037-14.138c.309-1.235-.474-1.79-1.345-1.303z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center space-y-4 py-6 text-sm text-secondary">
      <div className="flex space-x-4">
        <Link href="#" className="hover:text-primary" aria-label="Twitter">
          {icons.twitter}
        </Link>
        <Link href="#" className="hover:text-primary" aria-label="Discord">
          {icons.discord}
        </Link>
        <Link href="#" className="hover:text-primary" aria-label="Telegram">
          {icons.telegram}
        </Link>
      </div>
      <div>&copy; {new Date().getFullYear()} Cerverse</div>
    </footer>
  );
}
