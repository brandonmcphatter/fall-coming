'use client';

import 'animate.css'
import React, {useContext} from "react";
import AlbumView from "@/components/MusicPage/AlbumView";
import AlbumItem from "@/components/MusicSection/AlbumItem";
import {AlbumContext} from "@/context/AlbumContext";
import MusicPlayerBar from "@/components/MusicSection/MusicPlayerBar";

export default function MusicPage() {

    const {albumChoice, showMusicPlayer} = useContext(AlbumContext);

    return (
        <>
            <div className={'mx-auto md:max-w-[85%] xl:max-w-[60%] min-h-screen'}>

                <main className={'px-4 md:px-0 mb-20'}>


                    {/*All Music*/}
                    {albumChoice === -1 &&
                        <AllMusicView/>
                    }

                    {/*Album Details*/}
                    {albumChoice > -1 && <AlbumView/>}

                </main>

            </div>
                {showMusicPlayer && <MusicPlayerBar/>}
        </>
    )
}

function AllMusicView() {

    const {allAlbums} = useContext(AlbumContext);

    return (
        <section className={'mt-8 px-4 md:px0 py-4 min-h-fit animate__animated animate__fadeIn'}>


            <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6'}>

                {allAlbums.map((album , index: number) => {
                    return <AlbumItem key={index} title={album.title} cover={album.cover} albumId={index}/>
                })}

            </div>

        </section>
    )
}