import React from 'react';

const SecHead = ({ subtitle, title, children, center = false }) => {
    return (
        <div className={`flex w-full mb-16 gap-6 
            ${center 
                ? 'flex-col items-center justify-center text-center' 
                : 'flex-col md:flex-row justify-between items-start md:items-center'
            }`}>
            
            {/* Text Content Container */}
            <div className={center ? 'flex flex-col items-center' : ''}>
                {subtitle && (
                    <span className='text-[#8750F7] font-semibold uppercase tracking-wider text-sm block mb-4'>
                        {subtitle}
                    </span>
                )}
                
                <h2 className='text-4xl md:text-5xl lg:text-[56px] font-bold uppercase leading-[1.1] max-w-4xl 
                               bg-linear-to-r from-white to-white/10 
                               bg-clip-text text-transparent'>
                    {title}
                </h2>
            </div>

            {/* Optional Button or Action */}
            {children && (
                <div className={`shrink-0 ${center ? 'mt-4' : 'mt-6 md:mt-0'}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default SecHead;