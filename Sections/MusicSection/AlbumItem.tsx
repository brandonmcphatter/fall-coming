'use client'

import Image from "next/image";
import Link from "next/link";
import {AlbumContext} from "@/context/AlbumContext";
import {useContext} from "react";

type AlbumItemProps = {
    cover?: string;
    title?: string;
    albumId: number;
}

export default function AlbumItem({cover, title, albumId}: AlbumItemProps ) {

    const {setAlbumChoice} = useContext(AlbumContext);

    return (
        <Link href={'/music'}>
            <div>
                {/*Album Cover*/}
                <div className={'albumCover rounded  overflow-hidden'} onClick={()=>setAlbumChoice(albumId)}>
                    <Image className={' hover:cursor-pointer'}
                           src={cover ? cover : 'https://hpynsipfvbfvrjfldzjc.supabase.co/storage/v1/object/sign/Album%20Covers/FallComing2.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBbGJ1bSBDb3ZlcnMvRmFsbENvbWluZzIuSlBHIiwiaWF0IjoxNzM0NTc3MTY4LCJleHAiOjE3NjYxMTMxNjh9.YjTQJ2m4WhDPvYnhfDxC4__s0xdQu_OKPjStYCQOsyU&t=2024-12-19T02%3A59%3A28.653Z'}
                           alt={'Album Cover'} fill={true}/>
                </div>
                {/*Album Info*/}
                <div className={'flex justify-between ps-1 mt-1 w-fit'}>
                    <span className={'hover:cursor-pointer text-sm text-gray-300'}>{title}</span>
                </div>
            </div>
        </Link>
    )
}