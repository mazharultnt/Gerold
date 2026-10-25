import React, { useState } from 'react';
import Container from './Container';
import { FiCalendar } from 'react-icons/fi';
import { FaHtml5, FaReact, FaFigma } from 'react-icons/fa';
import BgImg from '../assets/Section3.png'; // Imported background image

// --- Data for the Experience List ---
const experienceData = [
    {
        id: 1,
        icon: <FaHtml5 className="text-[#e34f26] text-2xl" />,
        title: 'SENIOR PRODUCT DESIGNER',
        company: 'VIRTUSLAB',
        date: '2022 - 2023',
        description: "I'm winner of the world's most prestigious web design that has more-or-less normal awards in the fields.",
    },
    {
        id: 2,
        icon: <FaReact className="text-[#61dafb] text-2xl" />,
        title: 'SENIOR PRODUCT DESIGNER',
        company: 'SEMPLAT STUDIO',
        date: '2020 - 2023',
        description: "I'm winner of the world's most prestigious web design that has more-or-less normal awards in the fields.",
    },
    {
        id: 3,
        icon: <FaFigma className="text-[#f24e1e] text-2xl" />,
        title: 'SENIOR USER INTERFACE DESIGNER',
        company: 'AUTENTIKA',
        date: '2018 - 2020',
        description: "I'm winner of the world's most prestigious web design that has more-or-less normal awards in the fields.",
    },
];

const ExperienceItem = ({ item }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-white/5 last:border-b-0">
            {/* Icon Column */}
            <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                {item.icon}
            </div>

            {/* Content Column */}
            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                        {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FiCalendar className="text-[#8750F7]" />
                        <span>{item.date}</span>
                    </div>
                </div>

                <p className="text-[#8750F7] text-sm font-semibold uppercase tracking-wider mb-4">
                    {item.company}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const BackgroundAchievements = () => {
    const [activeTab, setActiveTab] = useState('Experiences');

    const tabs = ['Experiences', 'Education', 'Awards'];

    return (
        <section
            className="relative min-h-screen bg-cover bg-center py-24 text-white overflow-hidden"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
            {/* Dark overlay to keep text readable against the background image */}
            <div className="absolute inset-0 z-0"></div>

            {/* Main Content sits above the overlay */}
            <Container>
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col items-center justify-center text-center mb-12">
                        <span className="text-[#8750F7] font-semibold uppercase tracking-wider text-sm mb-4">
                            Behind The Pixels
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold uppercase leading-[1.1] 
                                       bg-linear-to-r from-white to-white/10 bg-clip-text text-transparent">
                            My Background and <br /> Achievements
                        </h2>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex justify-center mb-16">
                        <div className="flex items-center p-1 rounded-full border border-white/5">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeTab === tab
                                            ? 'bg-[#8750F7] text-white shadow-lg'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Experience List Container */}
                    <div className="max-w-4xl mx-auto backdrop-blur-sm border border-white/5 rounded-[24px] p-6 md:p-10">
                        <div className="flex flex-col">
                            {experienceData.map((item) => (
                                <ExperienceItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BackgroundAchievements;