import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Navbar />
        </div>
        <div className="container mt-auto">
          <div className="content">{children}</div>
        </div>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      </body>
    </html>
  );
}
