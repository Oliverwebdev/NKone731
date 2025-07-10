// Optimized Service Worker with aggressive caching strategies
const CACHE_NAME = 'nkone731-v2-optimized'
const STATIC_CACHE = 'static-v2'
const DYNAMIC_CACHE = 'dynamic-v2'
const IMAGE_CACHE = 'images-v2'

// Critical resources to cache immediately
const CRITICAL_CACHE = [
  '/NKone731/',
  '/NKone731/index.html',
  '/NKone731/manifest.json',
  '/NKone731/Logo1.jpeg',
  '/NKone731/logo-nav.jpeg',
  '/NKone731/logo-footer.webp',
  '/NKone731/Filla23.jpeg',
  '/NKone731/PillaOne7.3.1.webp',
  '/NKone731/Zkittlez7.3.1.webp'
]

// Static assets patterns
const STATIC_PATTERNS = [
  /\/assets\/.*\.(js|css)$/,
  /\.(woff2|woff|ttf)$/
]

// Image patterns for optimized caching
const IMAGE_PATTERNS = [
  /\.(png|jpg|jpeg|svg|webp|gif)$/,
  /ytimg\.com/,
  /youtube\.com.*\.(jpg|webp)$/,
  /i\.ytimg\.com/
]

// Install event - cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(CRITICAL_CACHE)
      }),
      caches.open(STATIC_CACHE),
      caches.open(DYNAMIC_CACHE),
      caches.open(IMAGE_CACHE)
    ])
  )
  self.skipWaiting()
})

// Activate event - clean old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE]
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!currentCaches.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - optimized caching strategies
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)
  
  if (request.method !== 'GET') return
  
  event.respondWith(
    // 1. Critical resources - Cache First
    CRITICAL_CACHE.some(path => url.pathname === path || url.href.endsWith(path)) ?
      cacheFirst(request, CACHE_NAME) :
    
    // 2. Static assets - Cache First with long TTL
    STATIC_PATTERNS.some(pattern => pattern.test(url.pathname)) ?
      cacheFirst(request, STATIC_CACHE) :
    
    // 3. Images - Cache First with background update
    IMAGE_PATTERNS.some(pattern => pattern.test(url.href)) ?
      cacheFirstWithBackgroundUpdate(request, IMAGE_CACHE) :
    
    // 4. Default - Network First with cache fallback
    networkFirst(request, DYNAMIC_CACHE)
  )
})

// Cache-first strategy for static resources
function cacheFirst(request, cacheName) {
  return caches.open(cacheName).then(cache => {
    return cache.match(request).then(response => {
      if (response) {
        return response
      }
      return fetch(request).then(fetchResponse => {
        if (fetchResponse.ok) {
          const responseClone = fetchResponse.clone()
          cache.put(request, responseClone)
        }
        return fetchResponse
      }).catch(() => {
        // Return fallback for critical resources
        if (request.url.includes('.html')) {
          return cache.match('/NKone731/index.html')
        }
        throw new Error('Network error and no cache available')
      })
    })
  })
}

// Network-first strategy for dynamic content
function networkFirst(request, cacheName) {
  return fetch(request).then(response => {
    if (response.ok) {
      // Clone before using the response
      const responseClone = response.clone()
      caches.open(cacheName).then(cache => {
        cache.put(request, responseClone)
      })
    }
    return response
  }).catch(() => {
    return caches.match(request)
  })
}

// Cache-first with background update for images
function cacheFirstWithBackgroundUpdate(request, cacheName) {
  return caches.open(cacheName).then(cache => {
    return cache.match(request).then(response => {
      // Start background update
      const fetchPromise = fetch(request).then(fetchResponse => {
        if (fetchResponse.ok) {
          const responseClone = fetchResponse.clone()
          cache.put(request, responseClone)
        }
        return fetchResponse
      }).catch(() => response) // Ignore fetch errors for background updates
      
      // Return cached version immediately, or wait for network
      return response || fetchPromise
    })
  })
}

// Background sync for performance optimization
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

function doBackgroundSync() {
  // Prefetch frequently accessed resources
  return caches.open(IMAGE_CACHE).then(cache => {
    const prefetchUrls = [
      '/NKone731/favicon_io/android-chrome-192x192.png',
      '/NKone731/favicon_io/android-chrome-512x512.png'
    ]
    return Promise.all(
      prefetchUrls.map(url => 
        fetch(url).then(response => {
          if (response.ok) {
            return cache.put(url, response)
          }
        }).catch(() => {}) // Ignore prefetch errors
      )
    )
  })
}

// Performance monitoring and cache management
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    getCacheSize().then(size => {
      event.ports[0].postMessage({ cacheSize: size })
    })
  }
})

function getCacheSize() {
  return caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        return caches.open(cacheName).then(cache => {
          return cache.keys().then(keys => keys.length)
        })
      })
    ).then(sizes => sizes.reduce((total, size) => total + size, 0))
  })
}