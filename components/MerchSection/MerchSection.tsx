import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function MerchSection() {
    return (
        <section id={'music'} className={'px-4 md:px0 py-8 min-h-[300px]'}>

            {/*Section Title*/}
            <Link href={'/merch'}>
                <SectionTitle title={'Merch'}/>
            </Link>
            <div className={'flex justify-center items-center h-40'}>
                <p className={'coming '}>Coming Soon</p>
            </div>

        </section>
    )
}