import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cerverse - Coming Soon',
  description: 'Create. Engage. Reward. A new era of storytelling on-chain.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ height: '100%', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
