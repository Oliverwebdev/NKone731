import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Music.css';

const Music = () => {
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const [loadedThumbnails, setLoadedThumbnails] = useState({});
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tracks = [
    { 
      id: 1, 
      title: 'PillaOne, Mr.Nick & Zkittlez - Kein Mitleid DKM', 
      url: 'https://www.youtube.com/watch?v=_oYKXY61sCM&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/_oYKXY61sCM?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 2, 
      title: 'ZKTTLZ - DESIRE (BVA TRIBUT)', 
      url: 'https://www.youtube.com/watch?v=YNuT1klylBU&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/YNuT1klylBU?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 3, 
      title: 'PillaOne & Bad Santa - Jingle Bells', 
      url: 'https://www.youtube.com/watch?v=29FXFS8EMYY&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/29FXFS8EMYY?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 4, 
      title: 'NKone7.3.1. - Stimmen im Kopf', 
      url: 'https://www.youtube.com/watch?v=kQ0eWcoxILA&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/kQ0eWcoxILA?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 5, 
      title: 'NKone7.3.1 - Payday - Filla23 aka F.A.K.T X Zkittlez X PillaOne', 
      url: 'https://www.youtube.com/watch?v=EVB1s60kDa8&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/EVB1s60kDa8?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 6, 
      title: 'Pillaone X Zkittlez X Lil Bandit - Eisige Zeiten', 
      url: 'https://www.youtube.com/watch?v=rUOgA3QIF5c&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/rUOgA3QIF5c?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 7, 
      title: 'Zkittlez - Strain Hunter', 
      url: 'https://www.youtube.com/watch?v=krfRtIsMRXQ&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/krfRtIsMRXQ?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 8, 
      title: 'Zkittlez Vs. Passwort Battleround/ Battlerapbunker', 
      url: 'https://www.youtube.com/watch?v=yLGtMjBDaJg',
      audioUrl: 'https://www.youtube.com/embed/yLGtMjBDaJg?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 9, 
      title: 'Zkittlez VS Niconasenspray / Battlerapbunker HR', 
      url: 'https://www.youtube.com/watch?v=exl7rwqJQVI&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/exl7rwqJQVI?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 10, 
      title: 'NKone7.3.1. TodesTag (DKM-Moncheri DissTrack)', 
      url: 'https://www.youtube.com/watch?v=rDJ10zalYh0&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/rDJ10zalYh0?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 11, 
      title: 'Zkittlez & PillaOne - Kontrollzwang und Gefühle', 
      url: 'https://www.youtube.com/watch?v=XlYR4UjjaVo&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/XlYR4UjjaVo?enablejsapi=1&start=30&end=60'
    },
    { 
      id: 12, 
      title: 'PillaOne & Zkittlez - Schnauze voll', 
      url: 'https://www.youtube.com/watch?v=5sy1hBHeQfE&ab_channel=Nkone7.3.1.',
      audioUrl: 'https://www.youtube.com/embed/5sy1hBHeQfE?enablejsapi=1&start=30&end=60'
    },
  ];

  const handleVideoClick = (url) => {
    // Direkt zu YouTube weiterleiten statt embedding
    window.open(url, '_blank');
  };


  const handleThumbnailLoad = (url) => {
    setLoadedThumbnails(prev => ({ ...prev, [url]: true }));
  };

  const handlePlayPreview = (track) => {
    if (currentPlaying === track.id) {
      setCurrentPlaying(null);
      setIsPlaying(false);
    } else {
      setCurrentPlaying(track.id);
      setIsPlaying(true);
    }
  };

  const getThumbnailUrl = (videoUrl) => {
    const videoId = getVideoId(videoUrl);
    if (!videoId) return null;
    
    // Try different thumbnail qualities
    return {
      maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      hq: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      mq: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      default: `https://img.youtube.com/vi/${videoId}/default.jpg`
    };
  };

  const handleThumbnailError = (e, videoUrl) => {
    const thumbnails = getThumbnailUrl(videoUrl);
    if (!thumbnails) return;
    
    const currentSrc = e.target.src;
    
    if (currentSrc === thumbnails.maxres) {
      e.target.src = thumbnails.hq;
    } else if (currentSrc === thumbnails.hq) {
      e.target.src = thumbnails.mq;
    } else if (currentSrc === thumbnails.mq) {
      e.target.src = thumbnails.default;
    }
  };

  return (
    <section className="music-section" ref={ref}>
      {/* Animated background */}
      <div className="music-background">
        <motion.div 
          className="music-gradient"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        ></motion.div>
        <div className="music-pattern"></div>
        <div className="music-particles"></div>
      </div>

      <div className="music-container">
        {/* Animated Title */}
        <motion.div 
          className="music-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="music-title">
            <span className="title-text">MUSIC</span>
            <span className="title-accent">COLLECTION</span>
          </h2>
          <div className="music-title-line"></div>
          <p className="music-subtitle">Discover our latest tracks and collaborations</p>
        </motion.div>

        {/* Tracks Grid */}
        <motion.div 
          className="tracks-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence>
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                className={`track-card ${hoveredTrack === track.id ? 'hovered' : ''} ${isMobile ? 'mobile' : ''}`}
                onMouseEnter={() => !isMobile && setHoveredTrack(track.id)}
                onMouseLeave={() => !isMobile && setHoveredTrack(null)}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                whileHover={{ 
                  y: -8, 
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                {/* Glow effect */}
                <motion.div 
                  className="track-glow"
                  animate={hoveredTrack === track.id ? { 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                

                <div className="track-content">
                  <motion.h3 
                    className="track-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {track.title}
                  </motion.h3>

                  <div className="video-container">
                    <motion.div 
                      className="thumbnail-wrapper"
                      onClick={() => handleVideoClick(track.url)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                        {/* Loading skeleton */}
                        <AnimatePresence>
                          {!loadedThumbnails[track.url] && (
                            <motion.div 
                              className="thumbnail-skeleton"
                              initial={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            ></motion.div>
                          )}
                        </AnimatePresence>
                        
                        <img
                          src={getThumbnailUrl(track.url)?.maxres || `https://img.youtube.com/vi/${getVideoId(track.url)}/hqdefault.jpg`}
                          alt={track.title}
                          className="video-thumbnail"
                          onLoad={() => handleThumbnailLoad(track.url)}
                          onError={(e) => handleThumbnailError(e, track.url)}
                        />
                        
                        {/* Play button overlay */}
                        <motion.div 
                          className="play-overlay"
                          whileHover={{ 
                            background: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(10px)"
                          }}
                        >
                          <motion.div 
                            className="play-button"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="play-icon" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </motion.div>
                        </motion.div>

                        {/* YouTube badge */}
                        <div className="youtube-badge">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                      </motion.div>
                  </div>

                {/* Preview Player */}
                {currentPlaying === track.id && (
                  <div className="preview-player">
                    <iframe
                      src={track.audioUrl}
                      className="preview-iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Preview: ${track.title}`}
                    ></iframe>
                  </div>
                )}

                  {/* Action buttons */}
                  <motion.div 
                    className={`track-actions ${isMobile ? 'visible' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button
                      onClick={() => handlePlayPreview(track)}
                      className={`action-button preview-button ${currentPlaying === track.id ? 'active' : ''}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                        {currentPlaying === track.id ? (
                          <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                        ) : (
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        )}
                      </svg>
                      <span className="button-text-full">{currentPlaying === track.id ? 'Stop' : 'Preview'}</span>
                      <span className="button-text-short">{currentPlaying === track.id ? 'Stop' : 'Play'}</span>
                    </motion.button>
                    <motion.button
                      onClick={() => window.open(track.url, '_blank')}
                      className="action-button youtube-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="button-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="button-text-full">YouTube</span>
                      <span className="button-text-short">YT</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        
        {/* Stats section */}
        <motion.div 
          className="music-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">{tracks.length}</span>
            <span className="stat-label">Tracks</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Plays</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Fans</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;