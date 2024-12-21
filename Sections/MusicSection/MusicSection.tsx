import AlbumGrid from "@/Sections/MusicSection/AlbumGrid";
import SectionTitle from "@/Sections/SectionTitle";

export default function MusicSection() {

    return (
        <section id={'music'} className={'px-4 md:px0 py-8 min-h-fit'}>

            {/*Section Title*/}
            <SectionTitle title={'Music'}/>

            {/*Featured Section*/}

            {/*Grid of Albums*/}
            <AlbumGrid />
        </section>
    )
}