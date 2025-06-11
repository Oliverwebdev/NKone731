import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Music.css'

const Music = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const tracks = [
    { id: 1, title: 'TRACK 01', videoId: 'VIDEO_ID_1' },
    { id: 2, title: 'TRACK 02', videoId: 'VIDEO_ID_2' },
    { id: 3, title: 'TRACK 03', videoId: 'VIDEO_ID_3' },
  ]

  return (
    <section className="section music" id="music" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          7.3.1.
        </motion.h2>
        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <motion.div 
              key={track.id}
              className="track-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="track-title">{track.title}</h3>
              <div className="video-container">
                {/* Replace with actual YouTube embeds */}
                <div className="video-placeholder">
                  YouTube Video
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Music