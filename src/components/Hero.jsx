import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import { useParallax } from '../hooks/useParallax'


const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'HASS MUSIC'
  const scrollY = useParallax()

  useEffect(() => {
    let i = 0
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i))
        i++
        setTimeout(typeWriter, 100)
      }
    }
    setTimeout(typeWriter, 1000)
  }, [])

  return (
    <section className="hero" id="home" style={{ backgroundPositionY: `${scrollY * 0.5}px` }}>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">NUR KRANKE</h1>
        <p className="hero-subtitle">{typedText}</p>
        <a href="#music" className="cta-button">Zum Bunker</a>
      </motion.div>
    </section>
  )
}

export default Hero