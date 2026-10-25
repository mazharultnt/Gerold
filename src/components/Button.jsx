import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Button = ({children, className}) => {
  return (
    <>
      <div className={` flex items-center w-fit gap-2 rounded-full bg-linear-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 ${className}`}>
        {children}
        <FiArrowUpRight className="text-base" />
      </div>
    </>
  )
}

export default Button
