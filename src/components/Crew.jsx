import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Crew.css'

const Crew = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [hoveredMember, setHoveredMember] = useState(null)

  const members = [
    { 
      id: 1,
      name: 'Filla23',
      stage: 'F.A.K.T',
      role: 'MC & Producer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      instagram: 'filla23',
      tiktok: 'filla23',
      youtube: 'nkone731',
      specialty: 'Lyricism & Production',
      years: '2019',
      gradient: 'from-red-500 via-purple-500 to-blue-500'
    },
    { 
      id: 2,
      name: 'PillaOne',
      stage: 'PillaOne7.3.1.',
      role: 'Rapper & Songwriter',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      instagram: 'pillaone731',
      tiktok: 'pillaone731',
      youtube: 'nkone731',
      specialty: 'Flow & Storytelling',
      years: '2020',
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    { 
      id: 3,
      name: 'Zkittlez',
      stage: 'Zkittlez7.3.1.',
      role: 'Battle Rapper & Performer',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
      instagram: 'zkittlez731',
      tiktok: 'zkittlez731',
      youtube: 'nkone731',
      specialty: 'Battle Rap & Performance',
      years: '2021',
      gradient: 'from-green-500 via-teal-500 to-cyan-500'
    }
  ]

  return (
    <section className="crew-section" id="crew" ref={ref}>
      {/* Background Effects */}
      <div className="crew-background">
        <motion.div 
          className="crew-gradient"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <div className="crew-pattern" />
        <div className="crew-particles" />
      </div>

      <div className="crew-container">
        {/* Header */}
        <motion.div 
          className="crew-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="crew-title">
            <span className="title-main">THE</span>
            <span className="title-accent">CREW</span>
          </h2>
          <div className="crew-title-line" />
          <p className="crew-subtitle">Meet the artists behind NKone7.3.1</p>
        </motion.div>

        {/* Members Grid */}
        <motion.div 
          className="crew-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              className={`member-card ${hoveredMember === member.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -12, 
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              {/* Card Glow */}
              <motion.div 
                className="member-glow"
                animate={hoveredMember === member.id ? { 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Member Number */}
              <div className="member-number">
                <span className="number-main">{String(member.id).padStart(2, '0')}</span>
                <span className="number-accent">.</span>
              </div>

              {/* Member Image Placeholder */}
              <div className="member-image">
                <div className={`image-placeholder gradient-${member.id}`}>
                  <div className="image-overlay">
                    <span className="member-initial">{member.name.charAt(0)}</span>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="member-info">
                <motion.h3 
                  className="member-name"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {member.stage}
                </motion.h3>
                
                <p className="member-role">{member.role}</p>
                
                <motion.div 
                  className="member-stats"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="stat">
                    <span className="stat-label">Specialty</span>
                    <span className="stat-value">{member.specialty}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Since</span>
                    <span className="stat-value">{member.years}</span>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {hoveredMember === member.id && (
                    <motion.p 
                      className="member-description"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {member.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Social Links */}
                <motion.div 
                  className="member-social"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link instagram"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <InstagramIcon />
                  </motion.a>
                  <motion.a
                    href={`https://tiktok.com/@${member.tiktok}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link tiktok"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TikTokIcon />
                  </motion.a>
                  <motion.a
                    href={`https://youtube.com/@${member.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link youtube"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <YouTubeIcon />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Crew Stats */}
        <motion.div 
          className="crew-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="crew-stat-item">
            <span className="crew-stat-number">3</span>
            <span className="crew-stat-label">Artists</span>
          </div>
          <div className="crew-stat-item">
            <span className="crew-stat-number">50+</span>
            <span className="crew-stat-label">Tracks</span>
          </div>
          <div className="crew-stat-item">
            <span className="crew-stat-number">100K+</span>
            <span className="crew-stat-label">Streams</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43Z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default Crew