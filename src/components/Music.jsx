import React, { useState, useEffect } from 'react';
import './Music.css';

const Music = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const [loadedThumbnails, setLoadedThumbnails] = useState({});
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
    { id: 1, title: 'PillaOne, Mr.Nick & Zkittlez - Kein Mitleid DKM', videoId: 'CgYf3n8Yy8g' },
    { id: 2, title: 'ZKTTLZ - DESIRE (BVA TRIBUT)', videoId: '89G_j5i4bPo' },
    { id: 3, title: 'PillaOne & Bad Santa - Jingle Bells', videoId: 'd9uFhY3pY5w' },
    { id: 4, title: 'NKone7.3.1. - Stimmen im Kopf', videoId: 'eX8oH1kSE3A' },
    { id: 5, title: 'NKone7.3.1 - Payday - Filla23 aka F.A.K.T X Zkittlez X PillaOne', videoId: 'o803j3U2i8g' },
    { id: 6, title: 'Pillaone X Zkittlez X Lil Bandit - Eisige Zeiten', videoId: '5-3t_W7cwwU' },
    { id: 7, title: 'Zkittlez - Strain Hunter', videoId: '3tLgEw51FEI' },
    { id: 8, title: 'Zkittlez Vs. Passwort Battleround/ Battlerapbunker', videoId: '5370jTzF_pY' },
    { id: 9, title: 'Zkittlez VS Niconasenspray / Battlerapbunker HR', videoId: 'f0mJbjpFw1s' },
    { id: 10, title: 'NKone7.3.1. TodesTag (DKM-Moncheri DissTrack)', videoId: 'K285d8RCF1E' },
    { id: 11, title: 'Zkittlez & PillaOne - Kontrollzwang und Gefühle', videoId: 'zNylR6KeU9M' },
    { id: 12, title: 'PillaOne & Zkittlez - Schnauze voll', videoId: 't9eiea6fL5A' },
  ];

  const handleVideoClick = (videoId) => {
    setActiveVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setActiveVideoId(null);
  };

  const handleThumbnailLoad = (videoId) => {
    setLoadedThumbnails(prev => ({ ...prev, [videoId]: true }));
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
                  {activeVideoId === track.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${track.videoId}?autoplay=1&rel=0&modestbranding=1`}
                      title={track.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="video-iframe"
                    />
                  ) : (
                    <div 
                      className="thumbnail-wrapper"
                      onClick={() => handleVideoClick(track.videoId)}
                    >
                      {/* Loading skeleton */}
                      {!loadedThumbnails[track.videoId] && (
                        <div className="thumbnail-skeleton"></div>
                      )}
                      
                      <img
                        src={`https://img.youtube.com/vi/${track.videoId}/maxresdefault.jpg`}
                        alt={track.title}
                        className="video-thumbnail"
                        onLoad={() => handleThumbnailLoad(track.videoId)}
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${track.videoId}/hqdefault.jpg`;
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
                  )}
                </div>

                {/* Action buttons */}
                <div className={`track-actions ${isMobile ? 'visible' : ''}`}>
                  <button
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${track.videoId}`, '_blank')}
                    className="action-button youtube-button"
                  >
                    <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    <span className="button-text-full">YouTube</span>
                    <span className="button-text-short">YT</span>
                  </button>
                  {activeVideoId === track.videoId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseVideo();
                      }}
                      className="action-button close-button"
                    >
                      Close
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active video modal */}
        {activeVideoId && (
          <div 
            className="video-modal"
            onClick={handleCloseVideo}
          >
            <div 
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="modal-iframe"
              />
              <button
                onClick={handleCloseVideo}
                className="modal-close"
              >
                <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Music;