import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import FooterBG from '../assets/Footer/FooterBackground.png';
import FooterLogo from '../assets/Footer/Footer Logo.png';

// --- Data for the columns ---
const legalLinks = ['Policy Privacy', 'Term & Conditions', 'Refund And Cancellation', 'Disclaimer'];
const contactInfo = ['Hello-Designer@Gerold.Com', '+01 123 654 8096', '+01 123 654 8096'];
const bottomLinks = ['WORK.', 'SERVICES.', 'ABOUT.', 'CONTACT.'];

// DRY: Extracted social icons into an array to avoid repeating the <a> tag markup
const socialIcons = [
    { icon: <FiFacebook className="text-white text-sm" />, href: '#' },
    { icon: <FiInstagram className="text-white text-sm" />, href: '#' },
    { icon: <FiLinkedin className="text-white text-sm" />, href: '#' },
];

const Footer = () => {
    return (
        <footer className="w-full h-full bg-[#140C1C]">
            {/* 
                The main container has the background image, 
                a large rounded border, and padding.
            */}
            <div
                className="relative w-full bg-cover bg-center px-6 py-16 md:px-12 md:py-20 lg:px-20 text-white"
                style={{ backgroundImage: `url(${FooterBG})` }}
            >
                {/* Dark overlay to ensure text is readable against the bright background */}
                <div className="absolute inset-0 z-0"></div>

                {/* Main Content */}
                <div className="relative z-10">
                    
                    {/* Top Section: Logo, Legal, Contact, Newsletter */}
                    {/* DRY: Using grid-cols-1 for mobile, md:grid-cols-2 for tablets, lg:grid-cols-4 for desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                        
                        {/* Column 1: Logo & Description & Socials */}
                        <div className="flex flex-col gap-6">
                            <div>
                                <img src={FooterLogo} alt="Gerold Logo" className="h-10 object-contain" />
                            </div>
                            <p className="text-white/80 text-[15px] leading-relaxed max-w-xs">
                                I break down complex user the experience problems the create integrity focused to solutions that's connect.
                            </p>
                            {/* Social Icons - DRY mapped array */}
                            <div className="flex items-center gap-3 mt-2">
                                {socialIcons.map((social, index) => (
                                    <a 
                                        key={index} 
                                        href={social.href} 
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Legal Details */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-lg font-semibold tracking-wide mb-2">LEGAL DETAILS</h4>
                            <ul className="flex flex-col gap-3.5">
                                {legalLinks.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white/80 hover:text-white text-[15px] transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-lg font-semibold tracking-wide mb-2">CONTACT</h4>
                            <ul className="flex flex-col gap-3.5">
                                {contactInfo.map((info, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="text-white/80 hover:text-white text-[15px] transition-colors">
                                            {info}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Newsletter */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-lg font-semibold tracking-wide leading-snug">
                                SUBSCRIBE TO MY <br /> NEWSLETTER!
                            </h4>
                            {/* Input and Button - DRY: Added min-w-0 to input wrapper to prevent overflow on mobile */}
                            <div className="flex items-center gap-3 mt-1">
                                <div className="relative flex-grow min-w-0">
                                    <input
                                        type="email"
                                        placeholder=""
                                        className="w-full h-12 rounded-full bg-white px-5 text-black outline-none placeholder-gray-500"
                                    />
                                </div>
                                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#050709] text-white hover:bg-gray-800 transition-colors">
                                    <FiArrowUpRight className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-white/20 mb-8"></div>

                    {/* Bottom Section: Availability, Nav Links, Copyright */}
                    {/* DRY: Stacks vertically on mobile (flex-col), centers text, then goes horizontal on md screens */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        
                        {/* Left: Availability */}
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
                            <span className="text-sm font-semibold uppercase tracking-wider text-white">
                                Available for Freelance
                            </span>
                        </div>

                        {/* Middle: Bottom Nav Links - DRY: Mapped array, wraps on small screens */}
                        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                            {bottomLinks.map((link) => (
                                <a key={link} href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase">
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* Right: Copyright */}
                        <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                            © All Rights Reserved by The Mejunction
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;