'use client';

import {useRef, useState} from "react";
import Image from "next/image";

type MusicPlayerBarProps = {
    songTitle?: string;
    coverArt?: string;
    songDuration?: number;
}

export default function MusicPlayerBar({songTitle, coverArt, songDuration}: MusicPlayerBarProps) {

    const [playing, setPlaying] = useState<boolean>(false);
    const [currrentTime, setCurrrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Pause Play Function
    const togglePlay = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlaying(!playing);
    }

    const handleSeek = (e: MouseEvent) => {
        const newTime = ((e.target as HTMLInputElement).value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrrentTime(newTime);
    }

    function formatTime(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return (
        <div className={'musicPlayerBar'}>
            <div className={' flex justify-between items-center mx-8 md:mx-20 lg:mx-24'}>
                {/*Cover Art & Title*/}
                <div className={'flex items-center gap-3'}>
                    <Image src={coverArt ? coverArt : 'https://picsum.photos/200'} alt={'mini player album cover'}
                           width={50} height={50}/>
                    <div>{songTitle ? songTitle : 'Song Title'}</div>
                </div>

                {/*Time Bar*/}
                <div className={'flex gap-3 text-center'}>
                    <div>{formatTime(currrentTime)}</div>
                    <input type="range" value={(currrentTime / duration) * 100 || 0} onChange={handleSeek} className={'w-full cursor-pointer'}/>
                    <div>{formatTime(duration)}</div>
                </div>

                {/*Music Controls*/}
                <div className={'flex justify-center gap-2.5 md:gap-3 lg:gap-4'}>
                    <div>
                        {/*Previous Button*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"/>
                        </svg>
                    </div>

                    <div onClick={() => setPlaying(!playing)}>
                        {playing ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                            </svg>
                        }
                    </div>

                    <div>
                        {/*Next Button*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}