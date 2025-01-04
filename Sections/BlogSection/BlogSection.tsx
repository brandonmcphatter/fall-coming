import SectionTitle from "@/Sections/SectionTitle";
import Link from "next/link";

export default function BlogSection() {
    return (
        <section id={'blog'} className={'px-4 md:px0 py-8 min-h-[300px]'}>

            {/*Section Title*/}
            <Link href={'/blog'}>
                <SectionTitle title={'Blog'} />
            </Link>
            <div className={'flex justify-center items-center h-40'}>
                <p className={'coming '}>Coming Soon</p>
            </div>

            {/*Blog Cards*/}
            {/*<div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>*/}

            {/*</div>*/}

        </section>
    )
}