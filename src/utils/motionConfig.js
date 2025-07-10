// Optimized Framer Motion configuration for better performance

// Reduced motion variants for performance
export const optimizedMotionVariants = {
  // Fast fade-in (no transform animations)
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2, ease: "easeOut" }
  },
  
  // Minimal slide-up for critical content
  slideUpFast: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: "easeOut" }
  },
  
  // Scale for hover effects only
  scaleHover: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.1 }
  },
  
  // Stagger children with minimal delay
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0
      }
    }
  }
}

// Performance-optimized animation settings
export const performanceSettings = {
  // Reduce motion for users who prefer it
  respectsReducedMotion: true,
  
  // Use transform3d for GPU acceleration
  transform3d: true,
  
  // Minimal animation duration
  fastDuration: 0.2,
  standardDuration: 0.3,
  
  // Optimized easing
  fastEase: "easeOut",
  
  // Minimal delays
  minimalDelay: 0.05,
  standardDelay: 0.1
}

// Critical content animations (for LCP)
export const criticalAnimations = {
  title: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.1, delay: 0 }
  },
  
  logo: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.15, delay: 0 }
  }
}

// Non-critical animations (can be slower)
export const nonCriticalAnimations = {
  sections: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  },
  
  cards: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

// Viewport settings for intersection observer
export const viewportSettings = {
  once: true,
  margin: "0px 0px -10% 0px",
  amount: 0.1
}