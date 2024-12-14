import AlbumItem from "@/Sections/MusicSection/AlbumItem";

export default function MusicSection() {
    return (
        <section id={'music'} className={'px-4 md:px0 py-8 min-h-fit'}>

            {/*Section Title*/}
            <div className={'text-5xl mb-8'}>Music</div>

            {/*Featured Section*/}

            {/*Grid of Albums*/}
            <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6'}>
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />

            </div>
        </section>
    )
}

