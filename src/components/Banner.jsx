import React from 'react'
import BannerBG from '../assets/BannerBG.png'
import CircularText from '../components/CircularText/CircularText';
import CircularImg from '../assets/CircularIMG.png'
import BannerImg from '../assets/BannerIMG.png'
import { FiArrowUpRight } from 'react-icons/fi';
import ScrollVelocity from './ScrollVelocity/ScrollVelocity';
import ScrollImg1 from '../assets/ScrollImg/Background.png'
import ScrollImg2 from '../assets/ScrollImg/Background (1).png'
import ScrollImg3 from '../assets/ScrollImg/Background (2).png'
import ScrollImg4 from '../assets/ScrollImg/Background (3).png'
import ScrollImg5 from '../assets/ScrollImg/Background (4).png'
import ScrollImg6 from '../assets/ScrollImg/Background (5).png'
import ScrollImg7 from '../assets/ScrollImg/Background (6).png'
import Container from "./Container";


const Banner = () => {
    // DRY: Extracted scroll images into an array to avoid repeating <img> markup 7 times
    const scrollImages = [
        ScrollImg1, ScrollImg2, ScrollImg3, ScrollImg4, ScrollImg5, ScrollImg6, ScrollImg7
    ];

    return (
        <div>
            <div>
                <section
                    className="relative min-h-205 bg-cover bg-center"
                    style={{ backgroundImage: `url(${BannerBG})` }}
                >
                    <Container className="px-4 md:px-8">

                    {/* Responsive: Stacked Hello/Motion with CircularText centered on mobile */}
                    <div className="relative flex flex-col lg:flex-row justify-between items-center z-10 text-white px-3 pb-20 gap-8">
                        <h2 className='text-5xl sm:text-7xl md:text-9xl lg:text-[134px] font-semibold uppercase'>Hello</h2>
                        
                        {/* Responsive: Made the container a flex center so the image stays perfectly centered */}
                        <div className="relative flex items-center justify-center h-40 w-40 md:h-50 md:w-50 shrink-0">
                            <CircularText
                                text="EXPERT*VIDEO*EDITOR*"
                                onHover="speedUp"
                                spinDuration={20}
                                className="custom-class uppercase"
                            />
                            {/* Responsive: Using inset-0 + m-auto centers the image regardless of screen size */}
                            <img
                                src={CircularImg}
                                alt=""
                                className="absolute inset-0 m-auto z-10 w-24 h-24 md:w-40 md:h-40 rounded-full object-cover"
                            />
                        </div>
                        
                        <h2 className='text-5xl sm:text-7xl md:text-9xl lg:text-[134px] font-semibold uppercase'>Motion</h2>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-50'>
                        <img src={BannerImg} alt="" className="max-w-full h-auto" />
                        <div className='w-full max-w-[310px] px-4 lg:px-0'>
                            <p className='text-[#747779] border-b border-[#747779] pb-7'>My role as a amplify tha story through
                                my careful [Video Editor] selection of
                                footages, pacing, and visual style. My
                                keen attention to detail allows me to
                                enhance the mood.</p>
                            <div className='border-b border-[#747779] pb-7'>
                                <span className=' text-white text-7xl md:text-9xl font-bold block'>12+</span>
                                <span className='text-[#747779]'>Years of Experience</span>
                            </div>
                            <FiArrowUpRight className="p-8 my-7.5 text-8xl text-white border border-[#747779] rounded-full" />
                        </div>
                    </div>

                    {/* --- ONLY THIS SECTION WAS MODIFIED --- */}
                    <div className="flex justify-center items-center mt-10 pb-15">
                        <h3 className='relative flex items-center text-white text-sm md:text-base font-semibold uppercase tracking-wider whitespace-nowrap
                            before:content-[""] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:w-16 md:before:w-134 before:h-px before:mr-4 before:bg-linear-to-l before:from-transparent before:to-[#747779]
                            after:content-[""] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:w-16 md:after:w-134 after:h-px after:ml-4 after:bg-linear-to-r after:from-transparent after:to-[#747779]'>
                            <span className='text-[#8750F7] mr-1'>100+</span> Trusted Clients Over the world
                        </h3>
                    </div>
                    {/* -------------------------------------- */}

                    <ScrollVelocity
                        texts={[
                            <div className="flex items-center gap-7 py-4" key="image-strip">
                                {/* DRY: Mapped over scrollImages array instead of repeating <img> tags */}
                                {scrollImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt=""
                                        className=""
                                    />
                                ))}
                            </div>
                        ]}
                        velocity={100}
                        className="custom-scroll-text"
                        numCopies={7}
                        damping={50}
                        stiffness={400}
                    />
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default Banner