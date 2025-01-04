import AlbumGrid from "@/components/MusicSection/AlbumGrid";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function MusicSection() {

    return (
        <section id={'music'} className={'px-4 md:px0 py-8 min-h-fit'}>

            <Link href={'/music'}>
                <SectionTitle title={'Music'}/>
            </Link>
            {/*Featured Section*/}

            {/*Grid of Albums*/}
            <AlbumGrid />
        </section>
    )
}