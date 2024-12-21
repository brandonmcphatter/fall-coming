'use client';

import RegularNav from "@/Sections/RegularNav";
import MusicSection from "@/Sections/MusicSection/MusicSection";
import Image from "next/image";
import {albums} from "@/music";
import 'animate.css'
import {useState} from "react";

export default function MusicPage(){

    const [albumChoice, setAlbumChoice] = useState<number | null>(0);

    return (
        <>
            <div className={'mx-auto md:max-w-[85%] xl:max-w-[50%] min-h-screen'}>

                <main className={'px-4 md:px-0 mb-20'}>
                    <RegularNav />

                    {/*All Music*/}
                    {albumChoice === null && <MusicSection/>}

                    {/*Album Details*/}
                    {albumChoice !== null && <section>
                        <div>
                            <button onClick={() => setAlbumChoice(null)}>back</button>
                        </div>
                        <div
                            className={'px-4 w-3/4 md:w-full mx-auto text-gray-300 flex flex-col gap-6 animate__animated animate__fadeIn animate__slow'}>

                            <div className={'flex flex-col md:flex-row gap-2'}>
                                <div className={'albumCover rounded overflow-hidden '}>
                                    <Image src={albums[0].cover} alt={'album cover'} fill={true}/>
                                </div>

                                <div>
                                    <AlbumTitle/>

                                    <AlbumDescription/>
                                </div>
                            </div>

                            <TrackList/>

                        </div>
                    </section>}

                </main>


            </div>
        </>
    )
}

function TrackList() {
    return (
        <div>
            <ol className={'flex flex-col gap-2'}>
                {albums[0].tracks.map((track, index) => {
                    return <TrackListItem key={index} track={track} num={index + 1}/>
                })}
            </ol>
        </div>
    )
}

type TrackListItemProps = {
    track: string
    num: number
}

function TrackListItem({track, num}: TrackListItemProps) {
    return (
        <li className={'hover:bg-gray-400'}>
            <div className={'flex justify-between'}>
                <div>{num}. {track}</div>
                <div>0:00</div>
            </div>
        </li>
    )
}

function AlbumDescription() {
    return (
        <div className={'h-full md:mt-14'}>
            <p className={'px-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut cum dolor,
                eligendi excepturi
                facilis iusto maiores maxime minima, minus modi natus nobis praesentium provident quia quod
                reprehenderit rerum sit.</p>
        </div>
    )
}

function AlbumTitle() {
    return (
        <div className={'flex justify-center w-full'}>
            <span className={'hover:cursor-pointer text-lg md:text-6xl '}>{albums[0].title}</span>
        </div>
    )
}