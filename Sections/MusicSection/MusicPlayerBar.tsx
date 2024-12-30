'use client';

import {useContext, useRef, useState} from "react";
import Image from "next/image";
import {AlbumContext} from "@/context/AlbumContext";
import {NextButton, PauseButton, PlayButton, PrevButton} from "@/Sections/MusicSection/MusicPlayerIcons";


export default function MusicPlayerBar() {

    // context
    const {
        currentSong,
        setCurrentSong,
        formatTime,
        playing,
        setPlaying,
        trackUrl,
        changeUrl,
        currentAlbum
    } = useContext(AlbumContext);

    const audioRef = useRef<HTMLAudioElement | null>(trackUrl ? new Audio(trackUrl) : null);
    const [currentTime, setCurrentTime] = useState<number>(audioRef.current?.currentTime || 0);


    // Pause + Play Functionality
    const togglePlay = () => {
        if (audioRef.current) {
            if (playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }

        }
        setPlaying(!playing);
    }

    const prevSong = () => {
        const previousSong = currentAlbum.tracks[currentAlbum.tracks.indexOf(currentSong?.title as string) - 1];
        if (previousSong && currentSong && currentTime < 3) {
            changeUrl(previousSong);
            setPlaying(true);
            setCurrentSong({
                title: previousSong,
                coverArt: currentAlbum.cover,
                songDuration: currentAlbum.songLengths[currentAlbum.tracks.indexOf(previousSong)]
            });
        }
        if (audioRef.current && currentSong && currentTime > 3) {
            audioRef.current.currentTime = 0;
        }
    }

    const nextSong = () => {
        const next = currentAlbum.tracks[currentAlbum.tracks.indexOf(currentSong?.title as string) + 1];
        if (next && currentSong) {
            changeUrl(next);
            setPlaying(true);
            setCurrentSong({
                title: next,
                coverArt: currentAlbum.cover,
                songDuration: currentAlbum.songLengths[currentAlbum.tracks.indexOf(next)]
            });
        }
    }


    const updateCurrentTime = () => {
        if (audioRef.current) {
            setCurrentTime(Math.floor(audioRef.current.currentTime));
        }
    }
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (currentSong?.songDuration) {
            const newTime = Math.floor((Number(e.target.value)));
            setCurrentTime(newTime)
            if (audioRef.current) audioRef.current.currentTime = newTime;
        }
    }


    if (audioRef.current && audioRef.current.ended) {
        setPlaying(false);
    }

    return (
        <div className={'musicPlayerBar animate__animated animate__slideInUp '}>
            <audio ref={audioRef} src={trackUrl} autoPlay={true} onTimeUpdate={updateCurrentTime}>Not Supported</audio>
            <div className={' flex justify-between items-center '}>
                {/*Cover Art & Title*/}
                <div className={'flex items-center gap-3'}>
                    <Image src={currentSong?.coverArt || ''} alt={'mini player album cover'}
                           width={50} height={50}/>
                    <div>{currentSong?.title}</div>
                </div>

                {/*Music Controls*/}
                <div className={'flex justify-center gap-2.5 md:gap-3 lg:gap-4'}>
                    <div onClick={prevSong}><PrevButton/></div>
                    <div onClick={togglePlay}>{playing ? <PauseButton/> : <PlayButton/>}</div>
                    <div onClick={nextSong}><NextButton/></div>
                </div>
            </div>

            {/*Time Bar*/}
            <div className={'flex gap-3 text-center'}>
                <div>{formatTime(currentTime) || 0}</div>
                <input type="range" step={1} value={currentTime} min={0} max={currentSong?.songDuration}
                       className={'w-full cursor-pointer'} onChange={handleSeek}/>
                <div>{currentSong?.songDuration && formatTime(currentSong?.songDuration - currentTime)}</div>
            </div>

        </div>
    )
}

