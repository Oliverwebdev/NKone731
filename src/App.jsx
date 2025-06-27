import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Music from './components/Music'
import Crew from './components/Crew'
import Manifesto from './components/Manifesto'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
// import './globals/globals.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove #
      if (hash === 'impressum' || hash === 'datenschutz') {
        setCurrentPage(hash)
      } else {
        setCurrentPage('home')
      }
    }

    // Check initial hash
    handleHashChange()
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Legal pages
  if (currentPage === 'impressum') {
    return (
      <>
        <Navbar />
        <Impressum />
        <Footer />
      </>
    )
  }

  if (currentPage === 'datenschutz') {
    return (
      <>
        <Navbar />
        <Datenschutz />
        <Footer />
      </>
    )
  }

  // Home page
  return (
    <>
      <Navbar />
      <Hero />
      <Music />
      <Crew />
      <Manifesto />
      <Contact />
      <Footer />
    </>
  )
}

export default App