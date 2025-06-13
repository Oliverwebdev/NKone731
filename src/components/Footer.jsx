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
                <span className="dev-name">WebDevOli</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

const InstagramIcon = () => (
  <div style={{
    width: '24px',
    height: '24px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'currentColor'
  }}>
    📷
  </div>
)

const TikTokIcon = () => (
  <div style={{
    width: '24px',
    height: '24px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'currentColor'
  }}>
    🎵
  </div>
)

const YouTubeIcon = () => (
  <div style={{
    width: '24px',
    height: '24px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'currentColor'
  }}>
    ▶️
  </div>
)

export default Footer