'use client';

import {useContext, useRef, useState} from "react";
import Image from "next/image";
import {AlbumContext} from "@/context/AlbumContext";
import {NextButton, PauseButton, PlayButton, PrevButton} from "@/Sections/MusicSection/MusicPlayerIcons";


export default function MusicPlayerBar() {


    const [currentTime, setCurrentTime] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const trackUrl = 'https://hpynsipfvbfvrjfldzjc.supabase.co/storage/v1/object/sign/Album%20Covers/reminisce.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBbGJ1bSBDb3ZlcnMvcmVtaW5pc2NlLm1wMyIsImlhdCI6MTczNTE4MTk3OCwiZXhwIjoxNzY2NzE3OTc4fQ.zX82e2QnLtYjCXmRFYdN7SxUILxpJ3v6xi4v2MWwu_g&t=2024-12-26T02%3A59%3A38.416Z'
    const {currentSong, formatTime, playing, setPlaying} = useContext(AlbumContext);


    // Pause + Play Function
    const togglePlay = () => {
        if (audioRef.current){
            if (playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setPlaying(!playing);
    }

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (currentSong?.songDuration) {
            const newTime = Math.floor((Number(e.target.value)));
            setCurrentTime(newTime)
        }
    }

    return (
        <div className={'musicPlayerBar animate__animated animate__slideInUp '}>
            <audio ref={audioRef} src={trackUrl} autoPlay={true}>Not Supported</audio>
            <div className={' flex justify-between items-center '}>
                {/*Cover Art & Title*/}
                <div className={'flex items-center gap-3'}>
                    <Image src={currentSong?.coverArt || ''} alt={'mini player album cover'}
                           width={50} height={50}/>
                    <div>{currentSong?.title}</div>
                </div>

                {/*Music Controls*/}
                <div className={'flex justify-center gap-2.5 md:gap-3 lg:gap-4'}>
                    <div><PrevButton/></div>
                    <div onClick={togglePlay}>{playing ? <PlayButton/> : <PauseButton/>}</div>
                    <div><NextButton/></div>
                </div>
            </div>

            {/*Time Bar*/}
            <div className={'flex gap-3 text-center'}>
                <div>{formatTime(currentTime)}</div>
                <input type="range" step={1} defaultValue={currentTime} min={0} max={currentSong?.songDuration}
                       className={'w-full cursor-pointer'} onChange={handleSeek}/>
                <div>{formatTime(currentSong?.songDuration)}</div>
            </div>

        </div>
    )
}

