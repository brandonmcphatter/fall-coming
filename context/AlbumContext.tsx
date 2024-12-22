'use client'

import { createContext, useState, ReactNode } from 'react';
import { albums } from '@/music';

type AlbumContextType = {
    albumChoice: number;
    setAlbumChoice: (choice: number) => void;
    currentAlbum: typeof albums[0];
    allAlbums: typeof albums;
    showMusicPlayer: boolean;
    setShowMusicPlayer: (show: boolean) => void;
    getTrackLength: (duration: number) => string;
};

export const AlbumContext = createContext<AlbumContextType>({} as AlbumContextType);

export function AlbumProvider({ children }: { children: ReactNode }) {
    const [albumChoice, setAlbumChoice] = useState<number>(-1);
    const currentAlbum = albums[albumChoice] || albums[0];
    const allAlbums = albums;
    const [showMusicPlayer, setShowMusicPlayer] = useState<boolean>(false);
    const getTrackLength = (duration: number) => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }

    return (
        <AlbumContext.Provider value={{ albumChoice,
            setAlbumChoice,
            currentAlbum,
            allAlbums,
            getTrackLength,
            showMusicPlayer,
            setShowMusicPlayer}}>
            {children}
        </AlbumContext.Provider>
    );
}