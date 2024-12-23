import HeroSection from "@/Sections/HeroSection/HeroSection";
import MusicSection from "@/Sections/MusicSection/MusicSection";
import NavBar from "@/Sections/HeroSection/NavBar";

export default function Home() {

    return (
        <>
            <div className={'mx-auto md:max-w-[85%] xl:max-w-[50%]'}>

                <main className={'px-4 md:px-0 mb-20'}>
                    <NavBar/>
                    <HeroSection/>
                    <MusicSection/>
                    {/*<BlogSection/>*/}

                </main>


            </div>

            {/*<MusicPlayerBar/>*/}

            {/*<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pb-6">*/}
            {/*    <p className={'text-sm'}>Footer 2025</p>*/}
            {/*</footer>*/}
        </>
    );
}



