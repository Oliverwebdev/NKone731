import React, { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (!loading) return null

  return (
    <div className="loading-screen">
      <h1 className="loading-text">NUR KRANKE</h1>
    </div>
  )
}

export default LoadingScreen