import Image from "next/image";
import {useContext} from "react";
import {AlbumContext} from "@/context/AlbumContext";
import {Play} from "@/components/Icons";

export default function AlbumView() {

    const {currentAlbum, setAlbumChoice} = useContext(AlbumContext);
    const {title, cover, tracks, songLengths, artist} = currentAlbum;

    return (
        <section id={'album'} className={'px-4 md:px0 py-4 min-h-screen animate__animated animate__fadeIn mb-32'}>
            <div className={'pt-2 pb-12 flex justify-between'}>
                <button className={'border-2 py-1 rounded px-4  hover:border-orange-300 hover:text-orange-200 coming tracking-tight'} onClick={() => setAlbumChoice(-1)}>
                    &#60; All Music
                </button>
                    <button className={'border-2 py-1 rounded px-4  hover:border-orange-200 hover:text-orange-200 coming tracking-tight'}>
                        Download
                    </button>
            </div>
            <div className={'mx-auto text-gray-300 flex flex-col gap-6 '}>

                <div className={'flex flex-col gap-6'}>
                    <div className={'albumViewCover rounded overflow-hidden md:w-1/2 mx-auto '}>
                        <Image src={cover || ''} alt={'album cover'} fill={true}/>
                    </div>

                    <div className={'grid gap-4'}>
                        <AlbumTitle title={title}/>
                        <div className={'italic mx-auto fall tracking-wide text-xl'}>{artist}</div>
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
    const {showMusicPlayer, setShowMusicPlayer, formatTime, currentAlbum, setCurrentSong, changeUrl, currentSong, setPlaying} = useContext(AlbumContext);
    const song = {title: track, coverArt: currentAlbum.cover, songDuration: duration};
    const playSong = () => {
        setCurrentSong(song);
        if (!showMusicPlayer) {
            setShowMusicPlayer(true)
        }
        changeUrl(track);
        setPlaying(true);
    }
    return (
        <li className={'hover:bg-gray-400 cursor-pointer py-1 px-2 rounded coming'} onClick={playSong}>
            <div className={'flex justify-between'}>
                <div className={'flex gap-2 items-center'}>{num}. {track} {track == currentSong?.title && <Play/>}</div>
                <div>{formatTime(duration)}</div>
            </div>
        </li>
    )
}

function AlbumDescription() {
    return (
        <div className={'fall tracking-wide h-full flex justify-center'}>
            <p className={'px-3 lg:px-0  xl:w-3/5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut cum dolor,
                eligendi excepturi
                facilis iusto maiores maxime minima, minus modi natus nobis praesentium provident quia quod
                reprehenderit rerum sit.</p>
        </div>
    )
}

function AlbumTitle({title}: { title: string }) {
    return (
        <div className={'flex justify-center w-full'}>
            <span className={'coming text-4xl md:text-6xl '}>{title}</span>
        </div>
    )
}