import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Manifesto.css'

const Manifesto = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section className="section manifesto" id="manifesto" ref={ref}>
      <div className="container">
        <motion.p 
          className="manifesto-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          !!! Deutsch Rap ist und bleibt eine Bitch !!!
        </motion.p>
      </div>
    </section>
  )
}

export default Manifesto