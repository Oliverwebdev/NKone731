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
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/nkone731',
      icon: <FacebookIcon />,
      color: '#1877F2'
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
            <motion.div
              className="footer-logo-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.img 
                src={`${import.meta.env.BASE_URL}logo-footer.webp`}
                alt="NKone Logo" 
                className="footer-logo-image"
                whileHover={{ 
                  scale: 1.05,
                  filter: "brightness(1.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>
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
                    scale: 1.15, 
                    y: -3,
                    boxShadow: `0 8px 25px ${link.color}40`
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--social-color': link.color }}
                >
                  {link.icon}
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
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M16.5 7.5 16.51 7.49"/>
  </svg>
)

const TikTokIcon = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="currentColor"/>
  </svg>
)

const FacebookIcon = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

export default Footer