import React from 'react'
import BgImg from '../assets/Section3.png'
import Button from './Button'
import SecHead from './SecHead' 
import Container from "./Container";

// Fixed the duplicate import names and created an array for the cards
import CardImg1 from '../assets/Sec3Cards/Background.png'
import CardImg2 from '../assets/Sec3Cards/Background (1).png'
import CardImg3 from '../assets/Sec3Cards/Background (2).png'
import CardImg4 from '../assets/Sec3Cards/Background (7).png'

// Data for the cards based on the image
const skillsData = [
    {
        id: 1,
        image: CardImg4,
        title: 'Adobe After Effect',
        description: 'Adobe After Effects is a powerful software application used motion graphics.',
        percentage: '92%',
    },
    {
        id: 2,
        image: CardImg1,
        title: 'Final Cut Pro',
        description: 'Professional video editing software developed by Apple Inc, designed.',
        percentage: '80%',
    },
    {
        id: 3,
        image: CardImg2,
        title: 'iMovie Film',
        description: 'iMovie offers a range of powerful editing tools that allow users.',
        percentage: '85%',
    },
    {
        id: 4,
        image: CardImg3,
        title: 'Hit Films Express',
        description: 'HitFilm Express is a free video editing and visual effects software developed.',
        percentage: '99%',
    },
]

// --- DRY Component: SkillCard ---
const SkillCard = ({ image, title, description, percentage }) => {
    return (
        <>
        
        <div className='bg-[#050709] backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:bg-[#1a1128] transition-all duration-300 w-full max-w-85 min-h-81.5'>
            {/* Top Section: Icon & Title */}
            <div className='flex items-center gap-4 mb-5'>
                <div className='w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl overflow-hidden'>
                    <img 
                        src={image} 
                        alt={title} 
                        className='w-full h-full object-contain'
                    />
                </div>
                <h5 className='text-[17px] font-medium leading-[1.3] text-gray-100'>
                    {title}
                </h5>
            </div>

            {/* Middle Section: Description */}
            <p className='text-[#9ca3af] text-[13px] leading-[1.6] mb-8 grow'>
                {description}
            </p>

            {/* Bottom Section: Percentage & Progress Bar */}
            <div className='pt-4 mt-auto'>
                <div className='flex justify-end mb-3'>
                    <span className='text-[13px] font-medium text-gray-300'>
                        {percentage}
                    </span>
                </div>
                {/* Progress Bar Track */}
                <div className='w-full h-0.75 bg-gray-700/40 rounded-full overflow-hidden'>
                    {/* Progress Bar Fill */}
                    <div 
                        className='h-full bg-white rounded-full transition-all duration-500'
                        style={{ width: percentage }}
                    ></div>
                </div>
            </div>
        </div>
        </>
    )
}

const RecentWork = () => {
    return (
        <>
            <section
                className="relative min-h-205 bg-cover bg-center py-20 px-6 md:px-12 lg:px-24 text-white"
                style={{ backgroundImage: `url(${BgImg})` }}
            >
                <Container>

                <div>
                <SecHead 
                    subtitle="My Recent Work"
                    title={<>My Mastering Video <br /> Editing Skills</>}
                >
                    <Button>
                        Learn More
                    </Button>
                </SecHead>

                {/* Cards Grid Section */}
                {/* Changed to a responsive flex-wrap layout to match the exact sizing while remaining responsive */}
                <div className='flex flex-wrap justify-center gap-6'>
                    {skillsData.map((skill) => (
                        <SkillCard 
                            key={skill.id}
                            image={skill.image}
                            title={skill.title}
                            description={skill.description}
                            percentage={skill.percentage}
                        />
                    ))}
                </div>
                </div>
                </Container>
            </section >
        </>
    )
}

export default RecentWork