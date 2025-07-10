// Optimized image loading utilities for better performance

/**
 * Generate optimized thumbnail URLs for YouTube videos
 * Tries WebP format first, falls back to JPEG
 */
export const getOptimizedThumbnail = (videoUrl, quality = 'hq') => {
  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  const videoId = getVideoId(videoUrl)
  if (!videoId) return null

  // Quality mappings for different sizes
  const qualityMap = {
    'maxres': 'maxresdefault',
    'hq': 'hqdefault', 
    'mq': 'mqdefault',
    'default': 'default'
  }

  const qualityString = qualityMap[quality] || qualityMap.hq

  return {
    // Try WebP first (better compression)
    webp: `https://i.ytimg.com/vi_webp/${videoId}/${qualityString}.webp`,
    // Fallback to original JPEG
    jpeg: `https://img.youtube.com/vi/${videoId}/${qualityString}.jpg`,
    // Additional fallbacks
    fallbacks: [
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/default.jpg`
    ]
  }
}

/**
 * Smart image component that tries multiple formats
 */
export const createSmartImageProps = (videoUrl, alt, quality = 'hq') => {
  const thumbnails = getOptimizedThumbnail(videoUrl, quality)
  
  if (!thumbnails) return { src: '', alt }

  return {
    src: thumbnails.webp, // Try WebP first
    alt,
    onError: (e) => {
      // Progressive fallback system
      const currentSrc = e.target.src
      
      if (currentSrc.includes('.webp')) {
        e.target.src = thumbnails.jpeg
      } else if (currentSrc === thumbnails.jpeg) {
        e.target.src = thumbnails.fallbacks[0]
      } else if (currentSrc === thumbnails.fallbacks[0]) {
        e.target.src = thumbnails.fallbacks[1]
      } else if (currentSrc === thumbnails.fallbacks[1]) {
        e.target.src = thumbnails.fallbacks[2]
      }
    },
    loading: 'lazy',
    decoding: 'async'
  }
}

/**
 * Preload critical images for better LCP
 */
export const preloadCriticalImages = (imageUrls) => {
  if (typeof window === 'undefined') return

  imageUrls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = url
    
    // Check if WebP is supported
    if (supportsWebP()) {
      link.type = 'image/webp'
    }
    
    document.head.appendChild(link)
  })
}

/**
 * Check WebP support
 */
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * Lazy load images with intersection observer
 */
export const createLazyImageObserver = (callback) => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return null

  return new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target)
        }
      })
    },
    {
      rootMargin: '50px',
      threshold: 0.1
    }
  )
}

/**
 * Optimize image for different screen sizes
 */
export const getResponsiveImageSrc = (baseUrl, width = 320) => {
  if (width <= 480) return baseUrl.replace('hqdefault', 'mqdefault')
  if (width <= 768) return baseUrl.replace('maxresdefault', 'hqdefault')
  return baseUrl
}