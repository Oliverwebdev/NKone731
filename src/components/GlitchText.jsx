import React from 'react'
import './GlitchText.css'

const GlitchText = ({ children, className = '' }) => {
  return (
    <span className={`glitch ${className}`} data-text={children}>
      {children}
    </span>
  )
}

export default GlitchText