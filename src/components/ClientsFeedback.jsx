import React, { useState } from 'react';
import Container from './Container';
import SecHead from './SecHead';
import Button from './Button';
import { FaStar, FaRegStar } from 'react-icons/fa';
import BgImg from '../assets/Section3.png'; // Make sure to import your actual background image

// --- Data for the Testimonials ---
const testimonialsData = [
    {
        id: 1,
        name: 'Tim Bailey',
        role: 'SEO Specialist, Theme Junction',
        rating: 4, // 4 filled stars, 1 empty
        text: '"Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional. Helps business providing value to my business, professional Designer he really helps my business.',
        avatar: 'https://i.pravatar.cc/150?u=tim',
    },
    {
        id: 2,
        name: 'Brandon Fraser',
        role: 'Senior Software Dev, Cosmic Sport',
        rating: 3, // 3 filled stars, 2 empty
        text: '"Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business."',
        avatar: 'https://i.pravatar.cc/150?u=brandon',
    },
    {
        id: 3,
        name: 'Sarah Jenkins',
        role: 'Marketing Director, Nexus',
        rating: 5, // 5 filled stars
        text: '"Absolutely brilliant work. The attention to detail and the level of professionalism shown throughout the project was outstanding. I would highly recommend to anyone."',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
        id: 4,
        name: 'Michael Chen',
        role: 'Product Manager, TechFlow',
        rating: 5,
        text: '"Working with Taylor was a game-changer for our product. The design thinking and execution were top-notch. We saw a significant increase in user engagement."',
        avatar: 'https://i.pravatar.cc/150?u=michael',
    },
];

// --- Helper Component to Render Stars ---
const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {i < rating ? (
                        <FaStar className="text-[#8750F7] text-sm" />
                    ) : (
                        <FaRegStar className="text-gray-600 text-sm" />
                    )}
                </span>
            ))}
        </div>
    );
};

// --- Testimonial Card Component ---
const TestimonialCard = ({ item, isActive }) => {
    return (
        <div
            className={`p-6 rounded-[24px] border transition-all duration-300 ${
                isActive
                    ? 'bg-[#120d1c] border-[#8750F7] shadow-[0_0_15px_rgba(135,80,247,0.15)]'
                    : 'bg-[#0b0c10] border-white/5 hover:border-white/10'
            }`}
        >
            {/* Header: Avatar, Info, Rating */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                    <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                        <h4 className="text-white font-semibold">{item.name}</h4>
                        <p className="text-gray-500 text-xs">{item.role}</p>
                    </div>
                </div>
                <StarRating rating={item.rating} />
            </div>

            {/* Body: Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
            </p>
        </div>
    );
};


const ClientsFeedback = () => {
    // We use state to track which card is "active" (for the purple border effect)
    const [activeCardId, setActiveCardId] = useState(1);

    return (
        <section
            className="relative min-h-screen bg-cover bg-center py-24 text-white overflow-hidden"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 z-0"></div>

            <Container>
                <div className="relative z-10 flex flex-col lg:flex-row gap-16">

                    {/* --- Left Side: Header & Button --- */}
                    <div className="w-full lg:w-1/3 shrink-0">
                        <SecHead
                            subtitle="Clients Feedback"
                            title={<>Let's Hear From <br /> Dear Clients.</>}
                        />
                        <div className="mt-8">
                            <Button>Contact Me</Button>
                        </div>
                    </div>

                    {/* --- Right Side: Scrollable Testimonials --- */}
                    {/* 
                        This container has a fixed height and overflow-y-auto to create the scroll effect. 
                        I added custom scrollbar hiding classes for a cleaner look.
                    */}
                    <div className="w-full lg:w-2/3 h-[600px] overflow-y-auto pr-4 
                                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <div className="flex flex-col gap-4">
                            {testimonialsData.map((item) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => setActiveCardId(item.id)}
                                    className="cursor-pointer"
                                >
                                    <TestimonialCard 
                                        item={item} 
                                        isActive={activeCardId === item.id} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default ClientsFeedback;