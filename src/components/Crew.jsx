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
      stage: 'Filla23',
      role: 'Gründer & MC',
      description: 'Filla23 ist der Gründer und das Herzstück von Nkone731. Als visionärer Künstler und Leader der Crew prägt er den Sound und die Richtung des Kollektivs.',
      instagram: 'nkone731',
      facebook: 'https://www.facebook.com/share/1CAD5hXhy6/?mibextid=wwXIfr',
      spotify: null,
      tiktok: null,
      specialty: 'Leadership & Vision',
      years: '2012',
      gradient: 'from-red-500 via-purple-500 to-blue-500',
      photo: 'Filla.jpeg'
    },
    { 
      id: 2,
      name: 'PillaOne',
      stage: 'PillaOne',
      role: 'Rapper & Producer',
      description: 'PillaOne ist ein deutscher Rapper, Songwriter und Producer – seit 2012 ein fester Bestandteil der Rap-Crew Nkone 731. Geboren 1993 in Duisburg, wuchs er in Bayern auf. Seine ersten Schritte im Rap machte PillaOne 2010 unter einem anderen Künstlernamen. Musikalisch bewegt sich PillaOne zwischen Storytelling, Battle-Rap und Straßenrap. Seine Texte zeichnen sich durch Ehrlichkeit, Technik und persönliche Tiefe aus. Neben dem Rap ist er auch maßgeblich für das Vocal-Mixing und Mastering der Tracks von Nkone731 verantwortlich.',
      instagram: 'https://www.instagram.com/pillaone7.3.1?igsh=dGl1bHNxNHg5aTBv',
      spotify: 'https://open.spotify.com/intl-de/artist/7aAvDf3UFPXzKTydjmRS7T',
      tiktok: 'https://www.tiktok.com/@pillaone7.3.1?_t=ZN-8xuR4XHmcZK&_r=1',
      facebook: null,
      specialty: 'Storytelling & Production',
      years: '2012',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      photo: 'Pilla.jpeg'
    },
    { 
      id: 3,
      name: 'Zkittlez',
      stage: 'Zkittlez',
      role: 'Battle Rapper & Producer',
      description: 'Zkittlez ist ein deutscher Rapper aus dem Umfeld der Crew Nkone 731, aktiv seit 2023. Stilistisch bewegt er sich hauptsächlich im Bereich Battle-Rap und Psycho-Hardcore-Rap – direkt, kompromisslos und mit messerscharfen Reimen. Seine Texte sind hart, authentisch und spiegeln eine rohe Energie wider. Sein musikalisches Debüt feierte Zkittlez mit dem Track „Schnauze voll", einem Feature mit PillaOne. Neben seinen Rap-Skills ist Zkittlez auch für die Produktion der Beats innerhalb der Crew verantwortlich.',
      instagram: null,
      spotify: null,
      tiktok: null,
      facebook: null,
      specialty: 'Battle Rap & Beat Production',
      years: '2023',
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      photo: 'Zkittlez.jpeg'
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
              

              {/* Member Image */}
              <div className="member-image">
                <motion.img 
                  src={`${import.meta.env.BASE_URL}${member.photo}`}
                  alt={`${member.stage} - ${member.role}`}
                  className="member-photo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.1)"
                  }}
                />
                <div className="member-image-overlay">
                  <div className="member-image-gradient" />
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
                  {member.instagram && (
                    <motion.a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link instagram"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <InstagramIcon />
                    </motion.a>
                  )}
                  {member.tiktok && (
                    <motion.a
                      href={member.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link tiktok"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TikTokIcon />
                    </motion.a>
                  )}
                  {member.spotify && (
                    <motion.a
                      href={member.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link spotify"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SpotifyIcon />
                    </motion.a>
                  )}
                  {member.facebook && (
                    <motion.a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link facebook"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FacebookIcon />
                    </motion.a>
                  )}
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
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
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
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
)


const FacebookIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const SpotifyIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14.5c1.5-1 4-1 5.5 0"/>
    <path d="M8 10.5c2.5-1.5 6.5-1.5 9 0"/>
    <path d="M8 6.5c3.5-2 8.5-2 12 0"/>
  </svg>
)

export default Crew