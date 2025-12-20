'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full p-1 glow-blue"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full flex items-center justify-center"
        layout
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-neon-purple" />
          ) : (
            <Sun className="w-3 h-3 text-neon-blue" />
          )}
        </motion.div>
      </motion.div>
      
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, #00d4ff, #8338ec)' 
            : 'linear-gradient(135deg, #ffd166, #ff6b6b)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

export default ThemeToggle