import Image from "next/image";
import {useContext} from "react";
import {AlbumContext} from "@/context/AlbumContext";
import {Play} from "@/Sections/MusicSection/MusicPlayerIcons";

export default function AlbumView() {

    const {currentAlbum, setAlbumChoice} = useContext(AlbumContext);
    const {title, cover, tracks, songLengths, artist} = currentAlbum;

    const target = document.getElementById('album');
    if (target) {
        target.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <section id={'album'} className={'px-4 md:px0 py-4 min-h-screen animate__animated animate__fadeIn'}>
            <div className={'pt-2 pb-12 flex justify-between'}>
                <button className={'border py-1 rounded px-4 hover:bg-gray-500 hover:border-none'}
                        onClick={() => setAlbumChoice(-1)}>&#60; All Music
                </button>
                <button className={'border py-1 rounded px-4 hover:bg-gray-500 hover:border-none'}>Download</button>
            </div>
            <div className={'mx-auto text-gray-300 flex flex-col gap-6 '}>

                <div className={'flex flex-col gap-6'}>
                    <div className={'albumViewCover rounded overflow-hidden md:w-1/2 mx-auto '}>
                        <Image src={cover || ''} alt={'album cover'} fill={true}/>
                    </div>

                    <div className={'grid gap-4'}>
                        <AlbumTitle title={title}/>
                        <div className={'italic mx-auto'}>{artist}</div>
                        <AlbumDescription/>
                    </div>
                </div>

                <TrackList tracks={tracks} duration={songLengths}/>

            </div>
        </section>
    )
}


function TrackList({tracks, duration}: { tracks: string[], duration: number[] }) {
    return (
        <div className={''}>
            <ol className={'flex flex-col gap-2'}>
                {tracks.map((track, index) => {
                    return <TrackListItem key={index} track={track} num={index + 1} duration={duration[index]}/>
                })}
            </ol>
        </div>
    )
}

function TrackListItem({track, num, duration}: { track: string, num: number, duration: number }) {
    const {showMusicPlayer, setShowMusicPlayer, formatTime, currentAlbum, setCurrentSong, changeUrl, currentSong} = useContext(AlbumContext);
    const song = {title: track, coverArt: currentAlbum.cover, songDuration: duration};
    const playSong = () => {
        setCurrentSong(song);
        if (!showMusicPlayer) {
            setShowMusicPlayer(true)
        }
        changeUrl(track);
    }
    return (
        <li className={'hover:bg-gray-400 cursor-pointer py-1 px-2 rounded'} onDoubleClick={playSong}>
            <div className={'flex justify-between'}>
                <div className={'flex'}>{num}. {track} {track == currentSong?.title && <Play/>}</div>
                <div>{formatTime(duration)}</div>
            </div>
        </li>
    )
}

function AlbumDescription() {
    return (
        <div className={'h-full'}>
            <p className={'px-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut cum dolor,
                eligendi excepturi
                facilis iusto maiores maxime minima, minus modi natus nobis praesentium provident quia quod
                reprehenderit rerum sit.</p>
        </div>
    )
}

function AlbumTitle({title}: { title: string }) {
    return (
        <div className={'flex justify-center w-full'}>
            <span className={'hover:cursor-pointer text-lg md:text-6xl '}>{title}</span>
        </div>
    )
}