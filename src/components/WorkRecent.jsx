import React, { useRef } from 'react';
import SliderModule from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import SliderImg1 from '../assets/SliderImg/Background.png';
import SliderImg2 from '../assets/SliderImg/Background (1).png';
import SliderImg3 from '../assets/SliderImg/Background (2).png';
import BgImg from '../assets/Section3.png';
import Container from "./Container";
import ScrollVelocity from './ScrollVelocity/ScrollVelocity';

const worksData = [
    { id: 1, image: SliderImg1, title: 'Deloitte', description: 'Project was about precision and information...' },
    { id: 2, image: SliderImg2, title: 'New Age', description: 'Project was about precision and information...' },
    { id: 3, image: SliderImg3, title: 'Sebastian', description: 'Project was about precision and information...' },
    { id: 4, image: SliderImg1, title: 'Deloitte', description: 'Project was about precision and information...' },
    { id: 5, image: SliderImg2, title: 'New Age', description: 'Project was about precision and information...' },
    { id: 6, image: SliderImg3, title: 'Sebastian', description: 'Project was about precision and information...' },
];

const Slider = SliderModule;

// The items for the marquee
const marqueeItems = ['GRAPHIC', 'DESIGN', 'MOTION', 'DEVELOPMENT', 'DESIGN', 'DEVELOPMENT', 'WEBFLOW', 'GRAPHIC'];

// A reusable component to render the text strip cleanly
const TextStrip = () => (
    <div className="flex items-center gap-10 px-5">
        {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
                <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white whitespace-nowrap">
                    {item}
                </span>
                {index !== marqueeItems.length - 1 && (
                    <span className="text-xl md:text-2xl text-white/80">
                        ✦
                    </span>
                )}
            </React.Fragment>
        ))}
    </div>
);

const WorkRecent = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <section
            className="relative min-h-screen bg-cover bg-center pt-24 pb-32 text-white overflow-hidden"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
            <div className="absolute inset-0 bg-[#0b0410]/80 z-0"></div>

            <Container>
                <div className="relative z-10">
                    <div className="relative z-10 mx-auto">
                        {/* Header Section */}
                        <div className="mb-16 flex items-end justify-between">
                            <div>
                                <span className="text-[#8750F7] font-semibold uppercase tracking-wider text-sm block mb-4">
                                    My Recent Work
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold uppercase leading-[1.1] 
                                   bg-linear-to-r from-white to-white/10 bg-clip-text text-transparent">
                                    Recent Work For <br /> My Clients!
                                </h2>
                            </div>

                            <div className="flex gap-4 mb-2">
                                <button onClick={() => sliderRef.current?.slickPrev()} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10">
                                    <FiArrowLeft className="text-xl" />
                                </button>
                                <button onClick={() => sliderRef.current?.slickNext()} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10">
                                    <FiArrowRight className="text-xl" />
                                </button>
                            </div>
                        </div>

                        {/* Slider Section */}
                        <div className="relative -mx-4">
                            <Slider ref={sliderRef} {...settings} className="work-slider">
                                {worksData.map((work) => (
                                    <div key={work.id} className="px-4 outline-none">
                                        <div className="flex flex-col gap-6">
                                            <div className="relative w-full overflow-hidden rounded-3xl bg-[#110b1a]">
                                                <img src={work.image} alt={work.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </Container>

            {/* --- TILTED PURPLE MARQUEE SECTION --- */}
            {/* Only this outer wrapper rotates. Both strips inside will stay parallel. */}
            <div className="relative z-10 mt-24">

                {/* First Strip: Lighter Purple - explicitly no rotation */}
                <div className="w-full bg-[#8750F7] rotate-2">
                    <ScrollVelocity
                        texts={[<TextStrip key="strip-1" />]}
                        velocity={100}
                        numCopies={6}
                        damping={50}
                        stiffness={400}
                        className='flex items-center'
                    />
                </div>

                {/* Gap between strips */}
                <div className="h-4 w-full bg-transparent rotate-2"></div>

                {/* Second Strip: Darker Purple - explicitly no rotation */}
                <div className="w-full bg-[#1D1129] -rotate-2">
                    <ScrollVelocity
                        texts={[<TextStrip key="strip-2" />]}
                        velocity={-100}
                        numCopies={6}
                        damping={50}
                        stiffness={400}
                        className='flex items-center'
                    />
                </div>

            </div>

            {/* Custom Styles for Slick Dots */}
            <style jsx global>{`
                .work-slider .slick-dots {
                    bottom: -60px;
                }
                .work-slider .slick-dots li button:before {
                    color: #8750F7;
                    font-size: 10px;
                }
                .work-slider .slick-dots li.slick-active button:before {
                    color: #8750F7;
                    opacity: 1;
                }
                .work-slider .slick-dots li button:before {
                    opacity: 0.3;
                }
            `}</style>
        </section>
    );
};

export default WorkRecent;