'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
  
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
        <div className="w-full h-full bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl flex items-center justify-center relative overflow-hidden">
          {/* DevOps-inspired design with K and tech elements */}
          <svg
            viewBox="0 0 100 100"
            className="w-8 h-8"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#8338ec" />
                <stop offset="100%" stopColor="#ff006e" />
              </linearGradient>
              
              {/* Grid pattern for tech background */}
              <pattern id="gridPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 20 L20 0 M-20 20 L20 -20 M0 40 L40 0" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            
            {/* Background grid */}
            <rect width="100" height="100" fill="url(#gridPattern)" opacity="0.3" />
            
            {/* Main K shape with gradient - enhanced design */}
            <path
              d="M25 15 L25 65 L45 40 L65 65 L65 15 Z"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-lg"
            />
            
            {/* Inner highlight for 3D effect */}
            <path
              d="M28 18 L28 62 L43 40 L62 62 L62 18"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            
            {/* Tech elements - enhanced server racks */}
            <g className="transform scale-110" transform="translate(68, 22)">
              <rect x="0" y="0" width="6" height="10" fill="#00d4ff" rx="1.5" className="drop-shadow-sm" />
              <rect x="8" y="0" width="6" height="10" fill="#8338ec" rx="1.5" className="drop-shadow-sm" />
              <rect x="0" y="12" width="6" height="10" fill="#00d4ff" rx="1.5" className="drop-shadow-sm" />
              <rect x="8" y="12" width="6" height="10" fill="#8338ec" rx="1.5" className="drop-shadow-sm" />
              
              {/* Server status lights */}
              <circle cx="3" cy="8" r="1" fill="#00ff00" className="pulse" />
              <circle cx="11" cy="8" r="1" fill="#00ff00" className="pulse" />
              <circle cx="3" cy="20" r="1" fill="#ff4444" className="pulse" />
              <circle cx="11" cy="20" r="1" fill="#00ff00" className="pulse" />
            </g>
            
            {/* Enhanced code brackets */}
            <g className="transform scale-110" transform="translate(63, 58)">
              <path d="M0 0 L-5 0 L-5 10 L0 10" stroke="#00f5d4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M22 0 L27 0 L27 10 L22 10" stroke="#ff006e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
            
            {/* Connection lines with glow */}
            <path d="M75 45 L80 50" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3" className="glow-blue" />
            <path d="M75 55 L80 50" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3" className="glow-purple" />
            
            {/* Glow effects */}
            <path d="M25 20 L25 80" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="8" />
            <path d="M25 50 L65 20" stroke="rgba(131, 56, 236, 0.2)" strokeWidth="8" />
            <path d="M25 50 L65 80" stroke="rgba(255, 0, 110, 0.2)" strokeWidth="8" />
          </svg>
          
          {/* Animated tech particles - only on client */}
          {isClient && (
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              {[...Array(5)].map((_, i) => (
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
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
              
              {/* Binary code animation */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`binary-${i}`}
                  className="absolute text-[6px] font-mono text-neon-green opacity-70"
                  initial={{
                    x: Math.random() * 30 + 5,
                    y: Math.random() * 30 + 5,
                    opacity: 0
                  }}
                  animate={{
                    y: [
                      Math.random() * 30 + 5,
                      Math.random() * 30 + 35,
                      Math.random() * 30 + 5
                    ],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 1.5
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Outer tech glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-3xl blur-md"></div>
      
      {/* Circuit board lines */}
      <div className="absolute -inset-1 border border-neon-cyan/20 rounded-2xl"></div>
    </motion.div>
  )
}

export default Logo