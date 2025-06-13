import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Footer.css'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/nkone731',
      icon: <InstagramIcon />,
      color: '#E1306C'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@nkone731',
      icon: <TikTokIcon />,
      color: '#FF0050'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@nkone731',
      icon: <YouTubeIcon />,
      color: '#FF0000'
    }
  ]

  return (
    <footer className="footer-section" ref={ref}>
      {/* Background Effects */}
      <div className="footer-background">
        <motion.div 
          className="footer-gradient"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <div className="footer-pattern" />
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Brand Section */}
          <div className="footer-brand">
            <motion.h3 
              className="footer-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              NKone<span className="logo-accent">7.3.1</span>
            </motion.h3>
            <p className="footer-tagline">
              Premium Rap Music & Entertainment
            </p>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h4 className="social-title">Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: `0 8px 25px ${link.color}40`
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--social-color': link.color }}
                >
                  {link.icon}
                  <span className="social-label">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4 className="links-title">Quick Links</h4>
            <div className="link-list">
              <motion.a 
                href="#music" 
                className="footer-link"
                whileHover={{ x: 5 }}
              >
                Music
              </motion.a>
              <motion.a 
                href="#crew" 
                className="footer-link"
                whileHover={{ x: 5 }}
              >
                Crew
              </motion.a>
              <motion.a 
                href="#contact" 
                className="footer-link"
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="footer-divider"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Bottom Section */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="footer-legal">
            <p className="copyright">© 2024 NKone7.3.1. All rights reserved.</p>
            <div className="legal-links">
              <a href="#impressum" className="legal-link">Impressum</a>
              <a href="#datenschutz" className="legal-link">Datenschutz</a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <motion.div 
            className="developer-credit"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="credit-content">
              <span className="credit-text">Crafted with</span>
              <motion.span 
                className="credit-heart"
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ff0000', '#ff6b6b', '#ff0000']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ♥
              </motion.span>
              <span className="credit-text">by</span>
              <motion.a 
                href="mailto:developer@example.com" 
                className="developer-link"
                whileHover={{ 
                  background: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
                  scale: 1.05
                }}
              >
                <span className="dev-icon">⚡</span>
                <span className="dev-name">Premium Web Developer</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43Z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default Footer