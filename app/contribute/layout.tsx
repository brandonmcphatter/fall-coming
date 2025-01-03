import type {Metadata} from "next";
import "../globals.css";
import {AlbumProvider} from "@/context/AlbumContext";
import RegularNav from "@/Sections/RegularNav";

export const metadata: Metadata = {
    title: "Contribute",
    description: "Music and Content from Brandon Jamall",
};

export default function ContributeLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AlbumProvider>
            <html lang="en">
            <body >
            <RegularNav />
            {children}

            </body>
            </html>
        </AlbumProvider>
    );
}