import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        <div className="container">
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
