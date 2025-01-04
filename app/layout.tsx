
import type {Metadata} from "next";
import "./globals.css";
import {AlbumProvider} from "@/context/AlbumContext";
import NavBar from "@/Sections/HeroSection/NavBar";

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
        <body>
        <div className={'mx-auto md:max-w-[85%] xl:max-w-[60%]'}>
            <NavBar/>
        </div>
            {children}

        </body>
        </html>
        </AlbumProvider>
);
}