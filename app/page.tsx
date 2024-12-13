import HeroSection from "@/Sections/HeroSection";
import MusicSection from "@/Sections/MusicSection";

export default function Home() {
  return (
   <div className={''}>
    <main className={' '}>

      {/*Fall Coming Hero Section*/}
      <HeroSection />

      {/*Music Section*/}
      <MusicSection />


    </main>
     <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

     </footer>

    </div>
  );
}



