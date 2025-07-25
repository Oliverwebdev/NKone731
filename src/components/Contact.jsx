import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Music, Send, Check, X } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    requestType: 'booking',
    message: '',
    phone: ''
  })
  
  const [showModal, setShowModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const requestTypes = [
    { value: 'booking', label: 'Booking Anfrage', icon: '🎤' },
    { value: 'collaboration', label: 'Kollaboration', icon: '🤝' },
    { value: 'interview', label: 'Interview', icon: '📺' },
    { value: 'remix', label: 'Remix Anfrage', icon: '🎵' },
    { value: 'general', label: 'Allgemeine Anfrage', icon: '💬' }
  ]
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xblkgybd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          requestType: formData.requestType,
          message: formData.message,
          subject: `${requestTypes.find(type => type.value === formData.requestType)?.label} - ${formData.name}`
        })
      })
      
      if (response.ok) {
        setShowModal(true)
        setFormData({ email: '', name: '', requestType: 'booking', message: '', phone: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-content">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Kontakt
          </motion.h2>
          
          <div className="contact-grid">
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Dein Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="requestType">Art der Anfrage *</label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleInputChange}
                      required
                    >
                      {requestTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.icon} {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Beschreibe deine Anfrage..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Nachricht senden
                    </>
                  )}
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="contact-card">
                <h3>Direkter Kontakt</h3>
                <a href="mailto:kontakt@nkone731.de" className="email-link">
                  Nkone731@gmail.com
                </a>
                <p className="contact-description">
                  Für schnelle Anfragen oder wenn du direkt in Kontakt treten möchtest.
                </p>
              </div>
              
              <div className="social-section">
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="https://youtube.com/@nkone731" className="social-icon" target="_blank" rel="noopener noreferrer" title="NKone731 YouTube">
                    <YouTubeIcon />
                  </a>
                  <a href="https://www.instagram.com/nkone731?igsh=ZmVzYnNwdDBkazBx" className="social-icon" target="_blank" rel="noopener noreferrer" title="NKone731 Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.facebook.com/share/16sruNq88S/?mibextid=wwXIfr" className="social-icon" target="_blank" rel="noopener noreferrer" title="NKone731 Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://music.apple.com/de/album/f-k-das-system/1640000781?i=1640000785" className="social-icon" target="_blank" rel="noopener noreferrer" title="NKone731 Apple Music">
                    <AppleMusicIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Success Modal */}
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
              
              <div className="modal-icon">
                <Check size={48} />
              </div>
              
              <h3>Nachricht erfolgreich gesendet!</h3>
              <p>
                Vielen Dank für deine Anfrage. Wir melden uns so schnell wie möglich bei dir zurück.
              </p>
              
              <button 
                className="modal-btn"
                onClick={() => setShowModal(false)}
              >
                Verstanden
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

const YouTubeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
  </svg>
)


const FacebookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const AppleMusicIcon = () => <Music size={30} />

export default Contact