import 'animate.css';

export default function HeroSection() {
    return (
        <section className={'h-svh flex-col justify-center items-center content-center '}>

            {/*Main Text*/}
            <div className={' flex flex-col lg:flex-row justify-center text-8xl mx-4 mb-3'}>

                <div className={'text-center lg:pe-6 md:pe-72 animate__animated animate__fadeInDownBig animate__slower'}>
                    Fall
                </div>
                <div className={'text-center tracking-wider md:ps-20 lg:ps-0 animate__animated animate__fadeIn animate__slower animate__delay-3s'} >
                    Coming
                </div>

            </div>

            {/*Sub Text*/}
            <p className={'text-center italic tracking-wide animate__animated animate__zoomInUp animate__slower animate__delay-3s'}>The Latest Content & Creations From Brandon Jamall</p>

        </section>
    );
}