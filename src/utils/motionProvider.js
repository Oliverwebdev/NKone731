// Conditional motion provider for performance optimization

import { motion } from 'framer-motion'

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Lightweight motion alternative for reduced motion users
const StaticMotion = ({ children, className, style, ...props }) => {
  // Strip out all motion-specific props and render as static div
  const staticProps = {
    className,
    style,
    onClick: props.onClick,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
  }
  
  return <div {...staticProps}>{children}</div>
}

// Create motion components that respect reduced motion preference
export const createOptimizedMotion = () => {
  if (prefersReducedMotion()) {
    return {
      div: StaticMotion,
      h1: (props) => <h1 {...props} />,
      img: (props) => <img {...props} />,
      a: (props) => <a {...props} />,
      section: (props) => <section {...props} />,
    }
  }
  
  return {
    div: motion.div,
    h1: motion.h1,
    img: motion.img,
    a: motion.a,
    section: motion.section,
  }
}

// Export optimized motion
export const OptimizedMotion = createOptimizedMotion()

// Performance-focused animation variants
export const performanceVariants = {
  // Only use opacity for fastest animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2 }
  },
  
  // Minimal transform animations
  slideUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: "easeOut" }
  },
  
  // Scale for interactions only
  scaleOnHover: {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.1 }
  }
}

// Batch animations to reduce reflows
export const batchAnimations = (elements) => {
  if (typeof window === 'undefined') return
  
  requestAnimationFrame(() => {
    elements.forEach(({ element, styles }) => {
      Object.assign(element.style, styles)
    })
  })
}