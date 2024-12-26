import 'animate.css';

export default function HeroSection() {
    return (
        <section id={'hero'} className={'h-screen flex-col justify-center  content-center '}>

            {/*Main Text*/}
            <div className={' flex flex-col lg:flex-row justify-center text-7xl md:text-8xl px-4 mb-6 '}>

                <div className={'text-center lg:pe-6 md:pe-72 animate__animated animate__fadeInDownBig animate__slower'}>
                    <span className={'coming'}>Fall</span>
                </div>
                <div className={' text-center md:ps-20 lg:ps-0 animate__animated animate__fadeIn animate__slower animate__delay-3s'} >
                   <span className={'coming'}>Coming</span>
                </div>

            </div>

            {/*Sub Text*/}
            <p className={'text-center italic tracking-wide animate__animated animate__zoomInUp animate__slower animate__delay-3s mb-40 fall'}>The Latest Content & Creations From Brandon Jamall</p>

        </section>
    );
}