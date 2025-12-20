'use client'

import { useEffect } from 'react'

const Favicon = () => {
  useEffect(() => {
    // Create canvas for favicon
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    
    if (ctx) {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 32, 32)
      gradient.addColorStop(0, '#00d4ff')
      gradient.addColorStop(0.5, '#8338ec')
      gradient.addColorStop(1, '#ff006e')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 32, 32)
      
      // K letter design
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2
      ctx.lineCap = 'round'
      
      // Draw K shape
      ctx.beginPath()
      ctx.moveTo(8, 8)
      ctx.lineTo(8, 24)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(8, 16)
      ctx.lineTo(20, 8)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(8, 16)
      ctx.lineTo(20, 24)
      ctx.stroke()
      
      // Tech dot
      ctx.fillStyle = '#00f5d4'
      ctx.beginPath()
      ctx.arc(26, 10, 2, 0, Math.PI * 2)
      ctx.fill()
      
      // Update favicon
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
      link.type = 'image/x-icon'
      link.rel = 'icon'
      link.href = canvas.toDataURL('image/png')
      document.head.appendChild(link)
    }
  }, [])

  return null
}

export default Favicon