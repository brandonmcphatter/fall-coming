import HeroSection from "@/Sections/HeroSection";
import MusicSection from "@/Sections/MusicSection";
import NavBar from "@/Sections/NavBar";

export default function Home() {
    return (
        <div className={'mx-auto md:max-w-[75%] xl:max-w-[50%]'}>

            <NavBar/>

            <main className={'px-4 md:px-0'}>

                {/*Fall Coming Hero Section*/}
                <HeroSection/>

                {/*Music Section*/}
                <MusicSection/>

            </main>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pb-6">
                <p className={'text-sm'}>Footer 2025</p>
            </footer>

        </div>
    );
}



