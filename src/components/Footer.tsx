import React from 'react';
import Link from 'next/link';

const icons = {
  x: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
    <footer className="sticky bottom-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 flex flex-col items-center space-y-4 py-6 text-sm text-secondary">
      <div className="flex space-x-4">
        <Link 
          href="https://x.com/cerverse" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary" 
          aria-label="X (Twitter)"
        >
          {icons.x}
        </Link>
        <div className="relative group">
          <div className="hover:text-primary cursor-pointer" aria-label="Discord">
            {icons.discord}
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            soon
          </div>
        </div>
        <div className="relative group">
          <div className="hover:text-primary cursor-pointer" aria-label="Telegram">
            {icons.telegram}
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            soon
          </div>
        </div>
      </div>
      <div>&copy; {new Date().getFullYear()} Cerverse</div>
    </footer>
  );
}
