

import './globals.css';

import
 React from 'react';
export const metadata = {
  title: 'Mohamed Market Analyst Platform',
  description: 'Crypto Trading Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );

}
