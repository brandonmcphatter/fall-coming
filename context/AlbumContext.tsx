'use client'

import {createContext, useState, ReactNode} from 'react';
import {albums} from '@/music';

type AlbumContextType = {
    albumChoice: number;
    setAlbumChoice: (choice: number) => void;
    currentAlbum: typeof albums[0];
    allAlbums: typeof albums;
    showMusicPlayer: boolean;
    setShowMusicPlayer: (show: boolean) => void;
    formatTime: (duration: number | undefined) => string;
    currentSong: { title: string, coverArt: string | undefined, songDuration: number } | null;
    setCurrentSong: (song: { title: string; coverArt: string | undefined; songDuration: number }) => void;
    getAudioDuration: (audioUrl: string) => Promise<number>;
    playing: boolean;
    setPlaying: (playing: boolean) => void;
};

export const AlbumContext = createContext<AlbumContextType>({} as AlbumContextType);

export function AlbumProvider({children}: { children: ReactNode }) {
    const [albumChoice, setAlbumChoice] = useState<number>(-1);
    const currentAlbum = albums[albumChoice] || albums[0];
    const allAlbums = albums;
    const [showMusicPlayer, setShowMusicPlayer] = useState<boolean>(false);
    const [playing, setPlaying] = useState<boolean>(true);
    const formatTime = (duration: number | undefined) => {
        if (duration === undefined) return '0:00';
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }
    const [currentSong, setCurrentSong] = useState<{
        title: string,
        coverArt: string | undefined,
        songDuration: number
    } | null>(null);

    // Gets duration of selected audio
    const getAudioDuration = async (audioUrl: string): Promise<number> => {
        return new Promise((resolve, reject) => {
            const audio = new Audio(audioUrl);

            // Event triggered when the metadata is loaded
            audio.addEventListener('loadedmetadata', () => {
                resolve(audio.duration); // Returns the duration in seconds
            });

            // Handle errors
            audio.addEventListener('error', () => {
                reject(new Error('Failed to load audio metadata'));
            });
        });
    };



    return (
        <AlbumContext.Provider value={{
            albumChoice,
            setAlbumChoice,
            currentAlbum,
            allAlbums,
            formatTime,
            showMusicPlayer,
            setShowMusicPlayer,
            currentSong,
            setCurrentSong,
            getAudioDuration,
            playing,
            setPlaying,
        }}>
            {children}
        </AlbumContext.Provider>
    );
}