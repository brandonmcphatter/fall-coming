import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import exp from "node:constants";



export const metadata: Metadata = {
  title: "Fall Coming",
  description: "Music and Content from Brandon Jamall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-blue-200 md:bg-yellow-200 lg:bg-green-200'}>
      <NavBar />
        {children}
      </body>
    </html>
  );
}

export function NavBar() {
    return (
        <nav className={'flex justify-center animate__animated animate__slideInDown animate__slower animate__delay-4s'}>Navigation</nav>
    )
}
