'use client';

import {useContext, useRef, useState} from "react";
import Image from "next/image";
import {AlbumContext} from "@/context/AlbumContext";


export default function MusicPlayerBar() {

    const [playing, setPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(20);
    const audioRef = useRef<HTMLAudioElement>(null);

    const {currentSong, formatTime} = useContext(AlbumContext);

    // Pause Play Function
    const togglePlay = () => {
        // if (playing) {
        //     audioRef.current.pause();
        // } else {
        //     audioRef.current.play();
        // }

        setPlaying(!playing);
    }

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (currentSong?.songDuration) {
            const newTime = (Number(e.target.value) / 100) * currentSong.songDuration;
            setCurrentTime(newTime)
        }
    }

    return (
        <div className={'musicPlayerBar animate__animated animate__slideInUp '}>
            <div className={' flex justify-between items-center '}>
                {/*Cover Art & Title*/}
                <div className={'flex items-center gap-3'}>
                    <Image src={currentSong?.coverArt || ''} alt={'mini player album cover'}
                           width={50} height={50}/>
                    <div>{currentSong?.title}</div>
                </div>

                {/*Music Controls*/}
                <div className={'flex justify-center gap-2.5 md:gap-3 lg:gap-4'}>
                    <div>
                        {/*Previous Button*/}
                        <PrevButton/>
                    </div>

                    <div onClick={togglePlay}>
                        {playing ?
                            <PlayButton/>
                            :
                            <PauseButton/>
                        }
                    </div>

                    <div>
                        {/*Next Button*/}
                        <NextButton/>
                    </div>
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

const PrevButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"/>
        </svg>
    )
}
const PlayButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
        </svg>
    )
}
const PauseButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
        </svg>
    )
}
const NextButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"/>
        </svg>
    )
}