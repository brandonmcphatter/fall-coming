
import type {Metadata} from "next";
import "./globals.css";
import React, {useContext} from "react";
import {AlbumContext, AlbumProvider} from "@/context/AlbumContext";

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
        <AlbumProvider>
        <html lang="en">
        <body >
        {children}

        </body>
        </html>
        </AlbumProvider>
    );
}