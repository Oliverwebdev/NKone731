import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'
import { useParallax } from '../hooks/useParallax'

const Hero = () => {
  const scrollY = useParallax()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  // Typing animation texts
  const typingTexts = [
    'PREMIUM RAP COLLECTIVE',
    'NUR KRANKE MUSIC',
    'AUTHENTIC HIP-HOP',
    'RAW TALENT UNLEASHED'
  ]
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (!inView) return

    const currentText = typingTexts[currentTextIndex]
    
    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 120)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 3000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next text
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
          setIsTyping(true)
        }, 800)
        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, isTyping, currentTextIndex, inView, typingTexts])

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Subtle Premium Background */}
      <div className="hero-background">
        <motion.div 
          className="hero-gradient"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div className="hero-grid" />
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo Section */}
        <motion.div 
          className="hero-logo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img 
            src={`${import.meta.env.BASE_URL}Logo1.jpeg`}
            alt="NKone Logo" 
            className="hero-logo-image"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.1) drop-shadow(0 0 20px rgba(255, 0, 0, 0.3))",
              y: -15
            }}
          />
        </motion.div>

        {/* Clean Professional Title */}
        <motion.div className="hero-title-container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            NUR KRANKE
          </motion.h1>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {/* Professional Subtitle */}
        <motion.div 
          className="hero-subtitle-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
            <motion.span 
              className="cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Premium CTA Button */}
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a 
            href="#crew" 
            className="cta-button"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(255, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="cta-text">Discover The Collective</span>
            <svg className="cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Minimal Stats */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div 
          className="scroll-line"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero