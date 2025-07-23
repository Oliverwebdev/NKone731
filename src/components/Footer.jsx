import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Music } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nkone731?igsh=ZmVzYnNwdDBkazBx',
      icon: <InstagramIcon />,
      color: '#E1306C'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/de/album/f-k-das-system/1640000781?i=1640000785',
      icon: <AppleMusicIcon />,
      color: '#000000'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/16sruNq88S/?mibextid=wwXIfr',
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
                href="mailto:karl78850@gmail.com" 
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
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
  </svg>
)


const FacebookIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const AppleMusicIcon = () => <Music size={28} />

export default Footer