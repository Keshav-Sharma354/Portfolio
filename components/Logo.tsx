'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main logo container */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-2xl p-1 glow-blue">
        {/* Inner container */}
        <div className="w-full h-full bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl flex items-center justify-center">
          {/* K letter design */}
          <svg
            viewBox="0 0 100 100"
            className="w-8 h-8"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="4"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#8338ec" />
                <stop offset="100%" stopColor="#ff006e" />
              </linearGradient>
            </defs>
            
            {/* K shape - modern design */}
            <path
              d="M30 20 L30 80"
              className="stroke-current"
            />
            <path
              d="M30 50 L70 20"
              className="stroke-current"
            />
            <path
              d="M30 50 L70 80"
              className="stroke-current"
            />
            
            {/* Decorative elements */}
            <circle
              cx="50"
              cy="50"
              r="15"
              className="stroke-current opacity-30"
              strokeWidth="2"
            />
            
            {/* Glow effect */}
            <path
              d="M30 20 L30 80"
              className="stroke-current opacity-20"
              strokeWidth="8"
            />
            <path
              d="M30 50 L70 20"
              className="stroke-current opacity-20"
              strokeWidth="8"
            />
            <path
              d="M30 50 L70 80"
              className="stroke-current opacity-20"
              strokeWidth="8"
            />
          </svg>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                initial={{
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 40 - 20,
                  opacity: 0
                }}
                animate={{
                  x: [
                    Math.random() * 40 - 20,
                    Math.random() * 40 - 20,
                    Math.random() * 40 - 20
                  ],
                  y: [
                    Math.random() * 40 - 20,
                    Math.random() * 40 - 20,
                    Math.random() * 40 - 20
                  ],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Outer glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-3xl blur-md"></div>
    </motion.div>
  )
}

export default Logo