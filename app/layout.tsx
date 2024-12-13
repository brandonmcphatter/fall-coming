import type {Metadata} from "next";
import "./globals.css";
import React from "react";


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
        {children}
        </body>
        </html>
    );
}