import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Professional Logo */}
        <motion.div 
          className="nav-brand"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a href="#home" className="nav-logo-link">
            <motion.img 
              src="/Logo-nav.jpeg" 
              alt="NKone Logo" 
              className="nav-logo-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.1)"
              }}
              whileTap={{ scale: 0.95 }}
            />
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { href: '#music', label: 'Music' },
            { href: '#crew', label: 'Artists' },
            { href: '#manifesto', label: 'Manifesto' },
            { href: '#contact', label: 'Contact' }
          ].map((item, index) => (
            <motion.li 
              key={item.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              <motion.a 
                href={item.href} 
                onClick={handleLinkClick}
                className="nav-link"
                whileHover={{ 
                  y: -1
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="nav-link-text">{item.label}</span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {[
                { href: '#music', label: 'Music' },
                { href: '#crew', label: 'Artists' },
                { href: '#manifesto', label: 'Manifesto' },
                { href: '#contact', label: 'Contact' }
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="mobile-nav-link"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mobile-link-text">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar