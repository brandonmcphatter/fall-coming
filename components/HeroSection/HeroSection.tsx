import 'animate.css';

export default function HeroSection() {
    return (
        <section id={'hero'} className={'h-screen flex-col justify-center  content-center pb-24'}>

            {/*Main Text*/}
            <div className={' flex flex-col lg:flex-row justify-center text-7xl md:text-8xl px-4  mb-6'}>

                <div className={'text-center lg:pe-6 md:pe-72 animate__animated animate__fadeInDownBig animate__slower'}>
                    <span className={'coming'}>Fall</span>
                </div>
                <div className={' text-center md:ps-20 lg:ps-0 animate__animated animate__fadeIn animate__slower animate__delay-3s'} >
                   <span className={'coming'}>Coming</span>
                </div>

            </div>

            {/*Sub Text*/}
            <p className={'text-center italic tracking-wide animate__animated animate__zoomInUp animate__slower animate__delay-3s mb-40 fall'}>The Latest Content & Creations From Brandon Jamall</p>

            <div className={'flex justify-center animate__animated animate__pulse animate__fadeIn animate__slower animate__delay-5s'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                    <path fillRule="evenodd"
                          d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"/>
                    <path fillRule="evenodd"
                          d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"/>
                </svg>

            </div>

        </section>
    );
}