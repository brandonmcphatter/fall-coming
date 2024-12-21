import AlbumItem from "@/Sections/MusicSection/AlbumItem";
import {albums} from "@/music";

export default function AlbumGrid() {
    return (
        <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6'}>

            {albums.map((album, index) => {
                    return <AlbumItem key={index} title={album.title} cover={album.cover}/>
                })
            }


        </div>
    )
}