import React from 'react';
import Container from './Container';
import SecHead from './SecHead';
import { FiLayout, FiPenTool, FiEdit3 } from 'react-icons/fi'; 
import Button from './Button';

const servicesData = [
    {
        id: 1,
        icon: <FiLayout />,
        title: 'Web Development',
        description: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.',
        features: ['UI/UX Design', 'Research', 'Mobile & Web App']
    },
    {
        id: 2,
        icon: <FiPenTool />,
        title: 'UI/UX Design',
        description: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.',
        features: ['UI/UX Design', 'Research', 'Mobile & Web App']
    },
    {
        id: 3,
        icon: <FiEdit3 />,
        title: 'Content Writing',
        description: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.',
        features: ['UI/UX Design', 'Research', 'Mobile & Web App']
    }
];

const Services = () => {
    return (
        <section className="bg-[#050709] py-24 text-white ">
            <Container>
                
                {/* SecHead is now perfectly centered */}
                <SecHead 
                    center={true}
                    subtitle="My Services"
                    title="Here's How I Can Help!"
                />

                {/* Cards Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {servicesData.map((service) => (
                        <div 
                            key={service.id}
                            className="bg-[#0b0c10] border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-[#120d1c] transition-colors duration-300"
                        >
                            {/* Icon */}
                            <div className="w-15 h-15 rounded-full bg-[#1a1128] flex items-center justify-center text-[#8750F7] text-2xl mb-8 border border-white/5">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-[22px] font-semibold mb-4 text-white">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#9ca3af] text-[14px] leading-[1.7] mb-8 grow">
                                {service.description}
                            </p>

                            {/* Feature List */}
                            <ul className="flex flex-col gap-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[13px] text-gray-300">
                                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Full Width Bottom Button */}
                <Button className="w-full justify-center py-4 rounded-[16px]">
                    Let's Contact With Me
                </Button>

            </Container>
        </section>
    );
};

export default Services;