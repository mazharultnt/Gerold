import React from 'react';
import Container from './Container';
import SecHead from './SecHead';
import BlogImg1 from '../assets/BlogImg/BlogImg1.png';
import BlogImg2 from '../assets/BlogImg/BlogImg2.png';
import BlogImg3 from '../assets/BlogImg/BlogImg3.png';
import BgImg from '../assets/Section3.png'; // Import your background image here

// Reusable Image Card with Hover Effect
// DRY: Extracted into a reusable component to avoid repeating the image + overlay markup 3 times
const HoverImage = ({ src, alt }) => (
    <div className="group relative w-full max-w-[350px] overflow-hidden rounded-2xl cursor-pointer">
        <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {/* Dark overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
    </div>
);

const RecentBlog = () => {
    // DRY: Extracted image data into an array to avoid repeating <HoverImage /> markup 3 times
    const blogImages = [
        { src: BlogImg1, alt: 'Blog 1' },
        { src: BlogImg2, alt: 'Blog 2' },
        { src: BlogImg3, alt: 'Blog 3' },
    ];

    return (
        <section
            className="relative min-h-screen bg-cover bg-center py-16 md:py-24 text-white overflow-hidden"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
            {/* Dark overlay to keep text readable against the background image */}
            <div className="absolute inset-0 z-0"></div>

            {/* Main Content sits above the overlay */}
            <div className="relative z-10">
                <Container>
                    {/* Centered Header */}
                    <SecHead
                        center={true}
                        subtitle="Behind The Pixels"
                        title="READ MY RECENT BLOG"
                    />

                    {/* 3 Images Flex - DRY: Mapped array, wraps on smaller screens */}
                    {/* Responsive: Added flex-wrap so images stack on mobile, and px-6 for edge padding */}
                    <div className="flex flex-wrap justify-center items-center gap-6 px-6">
                        {blogImages.map((image, index) => (
                            <HoverImage key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default RecentBlog;