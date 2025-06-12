import React, { useState, useEffect } from 'react';
import './Music.css';

const Music = () => {
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const [loadedThumbnails, setLoadedThumbnails] = useState({});

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
    { id: 1, title: 'PillaOne, Mr.Nick & Zkittlez - Kein Mitleid DKM', url: 'https://www.youtube.com/watch?v=_oYKXY61sCM&ab_channel=Nkone7.3.1.' },
    { id: 2, title: 'ZKTTLZ - DESIRE (BVA TRIBUT)', url: 'https://www.youtube.com/watch?v=YNuT1klylBU&ab_channel=Nkone7.3.1.' },
    { id: 3, title: 'PillaOne & Bad Santa - Jingle Bells', url: 'https://www.youtube.com/watch?v=29FXFS8EMYY&ab_channel=Nkone7.3.1.' },
    { id: 4, title: 'NKone7.3.1. - Stimmen im Kopf', url: 'https://www.youtube.com/watch?v=kQ0eWcoxILA&ab_channel=Nkone7.3.1.' },
    { id: 5, title: 'NKone7.3.1 - Payday - Filla23 aka F.A.K.T X Zkittlez X PillaOne', url: 'https://www.youtube.com/watch?v=EVB1s60kDa8&ab_channel=Nkone7.3.1.' },
    { id: 6, title: 'Pillaone X Zkittlez X Lil Bandit - Eisige Zeiten', url: 'https://www.youtube.com/watch?v=rUOgA3QIF5c&ab_channel=Nkone7.3.1.' },
    { id: 7, title: 'Zkittlez - Strain Hunter', url: 'https://www.youtube.com/watch?v=krfRtIsMRXQ&ab_channel=Nkone7.3.1.' },
    { id: 8, title: 'Zkittlez Vs. Passwort Battleround/ Battlerapbunker', url: 'https://www.youtube.com/watch?v=yLGtMjBDaJg' },
    { id: 9, title: 'Zkittlez VS Niconasenspray / Battlerapbunker HR', url: 'https://www.youtube.com/watch?v=exl7rwqJQVI&ab_channel=Nkone7.3.1.' },
    { id: 10, title: 'NKone7.3.1. TodesTag (DKM-Moncheri DissTrack)', url: 'https://www.youtube.com/watch?v=rDJ10zalYh0&ab_channel=Nkone7.3.1.' },
    { id: 11, title: 'Zkittlez & PillaOne - Kontrollzwang und Gefühle', url: 'https://www.youtube.com/watch?v=XlYR4UjjaVo&ab_channel=Nkone7.3.1.' },
    { id: 12, title: 'PillaOne & Zkittlez - Schnauze voll', url: 'https://www.youtube.com/watch?v=5sy1hBHeQfE&ab_channel=Nkone7.3.1.' },
  ];

  const handleVideoClick = (url) => {
    // Direkt zu YouTube weiterleiten statt embedding
    window.open(url, '_blank');
  };


  const handleThumbnailLoad = (url) => {
    setLoadedThumbnails(prev => ({ ...prev, [url]: true }));
  };

  return (
    <section className="music-section">
      {/* Animated background */}
      <div className="music-background">
        <div className="music-gradient"></div>
        <div className="music-pattern"></div>
      </div>

      <div className="music-container">
        {/* Animated Title */}
        <div className="music-header">
          <h2 className="music-title">MUSIC</h2>
          <div className="music-title-line"></div>
        </div>

        {/* Tracks Grid */}
        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`track-card ${hoveredTrack === track.id ? 'hovered' : ''} ${isMobile ? 'mobile' : ''}`}
              onMouseEnter={() => !isMobile && setHoveredTrack(track.id)}
              onMouseLeave={() => !isMobile && setHoveredTrack(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Glow effect */}
              <div className="track-glow"></div>
              
              {/* Track number */}
              <div className="track-number">{track.id}</div>

              <div className="track-content">
                <h3 className="track-title">{track.title}</h3>

                <div className="video-container">
                  <div 
                    className="thumbnail-wrapper"
                    onClick={() => handleVideoClick(track.url)}
                  >
                      {/* Loading skeleton */}
                      {!loadedThumbnails[track.url] && (
                        <div className="thumbnail-skeleton"></div>
                      )}
                      
                      <img
                        src={`https://img.youtube.com/vi/${getVideoId(track.url)}/hqdefault.jpg`}
                        alt={track.title}
                        className="video-thumbnail"
                        onLoad={() => handleThumbnailLoad(track.url)}
                        onError={(e) => {
                          // Fallback zu default thumbnail wenn hqdefault nicht verfügbar
                          if (e.target.src.includes('hqdefault')) {
                            e.target.src = `https://img.youtube.com/vi/${getVideoId(track.url)}/default.jpg`;
                          }
                        }}
                      />
                      
                      {/* Play button overlay */}
                      <div className="play-overlay">
                        <div className="play-button">
                          <svg className="play-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="duration-badge">Click to play</div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className={`track-actions ${isMobile ? 'visible' : ''}`}>
                  <button
                    onClick={() => window.open(track.url, '_blank')}
                    className="action-button youtube-button"
                  >
                    <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    <span className="button-text-full">YouTube</span>
                    <span className="button-text-short">YT</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Music;