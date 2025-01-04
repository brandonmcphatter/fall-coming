import HeroSection from "@/components/HeroSection/HeroSection";
import MusicSection from "@/components/MusicSection/MusicSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import MerchSection from "@/components/MerchSection/MerchSection";

export default function Home() {

    return (
        <>
            <div className={'mx-auto md:max-w-[85%] xl:max-w-[50%]'}>
                <main className={'px-4 md:px-0 mb-20'}>
                    <HeroSection/>
                    <MusicSection/>
                    <BlogSection/>
                    <MerchSection/>
                </main>
            </div>

            <footer>
                <div className={''}>
                    <main className={'px-4 md:px-0 mb-10  flex justify-center items-center'}>
                        <div className={'text-xs fall'}>Fall Coming &copy; 2025</div>
                    </main>
                </div>
            </footer>
        </>
);
}



