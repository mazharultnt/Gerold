import React from 'react'
import Container from './Container'
import PixelImg from '../assets/PixelImg.png'
import SecHead from './SecHead'
import Button from './Button'

const BehindPixels = () => {
    const stats = [
        { number: '30+', label: 'Years of Experience' },
        { number: '100+', label: 'Project Completed' },
        { number: '300+', label: 'Successful Project' },
    ]

    return (
        <section className="bg-[#050709] py-20 lg:py-32 text-white overflow-hidden">
            <Container>
                {/* 
                  Using a custom grid ratio to match the image precisely. 
                  The text column is slightly wider than the image column.
                */}
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                    
                    {/* Left Side: Image */}
                    <div className="w-full h-full">
                        <img 
                            src={PixelImg} 
                            alt="Behind the pixels" 
                            /* Added fixed height and object-cover to ensure it matches the layout perfectly */
                            className="w-full h-full min-h-[500px] rounded-[32px] object-cover" 
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col justify-center">
                        
                        {/* 
                          SecHead Component 
                          We added a wrapper div with a custom class to ensure the title 
                          takes the full width and doesn't get squeezed by a flex layout.
                        */}
                        <div className="[&>div]:flex-col [&>div]:items-start [&>div]:gap-0 [&_h2]:max-w-none [&_h2]:text-[48px] lg:[&_h2]:text-[64px] [&_h2]:leading-[1.1]">
                            <SecHead
                                subtitle="BEHIND THE PIXELS"
                                title="PASSIONATE ON DIGITAL MARKETER FOCUSED ON DRIVING RESULTS."
                            />
                        </div>

                        {/* Paragraph with Decorative Bar and Play Button */}
                        <div className="relative mb-12 mt-2 flex items-center gap-6">
                            
                            {/* The vertical pink bar on the left */}
                            <div className="w-[3px] h-12 bg-gradient-to-b from-[#c026d3] to-[#8750F7] rounded-full shrink-0"></div>
                            
                            {/* The text container */}
                            <div className="flex-1">
                                <p className="text-[14px] leading-[1.7] text-[#9ca3af]">
                                    This encompasses a variety of strategies, including search engine optimization (SEO), content marketing, social media marketing, email marketing.
                                </p>
                            </div>

                            {/* The Small Play Button - now a flex item instead of absolute */}
                            <div className="shrink-0 flex items-center justify-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-500/60 bg-[#050709]">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-pink-500">
                                        <div className="ml-0.5 h-0 w-0 border-b-[3px] border-l-[5px] border-t-[3px] border-b-transparent border-l-pink-500 border-t-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Box */}
                        <div className="mb-12 flex flex-col overflow-hidden rounded-[20px] bg-[#120d1c] md:flex-row">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`flex-1 px-6 py-8 ${index !== stats.length - 1 ? 'border-b border-white/[0.06] md:border-b-0 md:border-r' : ''}`}
                                >
                                    <h3 className="mb-2 text-[44px] font-bold leading-none text-[#8750F7]">
                                        {stat.number}
                                    </h3>
                                    <p className="text-[13px] leading-snug text-[#9ca3af]">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Button */}
                        <div>
                            <Button>Learn More</Button>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BehindPixels