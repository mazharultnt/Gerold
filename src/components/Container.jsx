import React from 'react'

const container = ({children, className}) => {
  return (
    <div className={` container ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default container
