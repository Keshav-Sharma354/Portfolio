'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-primary-800/20 to-cyan-900/30"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 md:mb-10"
          >
            <div className="relative inline-block group">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary-500 via-cyan-500 to-blue-500 p-2 glow transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-800/50 backdrop-blur-sm">
                  <Image 
                    src="/profile.jpg" 
                    alt="Keshav Sharma" 
                    width={256}
                    height={256}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
              {/* Online status indicator */}
              <div className="absolute top-3 right-2 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-slate-900 animate-pulse shadow-xl ring-2 ring-green-400/50"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary-400/50 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* Enhanced Name and Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-4 md:mb-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-cyan-400 to-blue-400"
            >
              Keshav Sharma
            </motion.h1>
            
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-subtitle font-light mb-6 md:mb-8"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                DevOps Engineer
              </span>
            </motion.h2>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-8 md:mb-12 px-4"
          >
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-enhanced leading-relaxed md:leading-loose font-light"
            >
              <span className="bg-gradient-to-r from-primary-300 to-cyan-300 bg-clip-text text-transparent font-medium">
                DevOps Engineer
              </span>{' '}
              with 7+ years of experience designing, automating, and operating scalable cloud infrastructure 
              and CI/CD platforms. Strong expertise in{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-medium">
                AWS, Kubernetes, Terraform, and DevSecOps
              </span>{' '}
              practices. Proven track record of improving deployment velocity, reliability, security, and cloud cost optimization.
            </motion.p>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 md:mb-12 text-sm md:text-base"
          >
            <motion.div 
              className="flex items-center space-x-3 text-enhanced bg-slate-800/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700/50 hover:border-primary-400/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <MapPin size={20} className="text-primary-400 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
              <span className="font-medium">Kota, Rajasthan, India</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3 text-enhanced bg-slate-800/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700/50 hover:border-primary-400/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Phone size={20} className="text-primary-400 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
              <span className="font-medium">+91 6350386223</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3 text-enhanced bg-slate-800/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700/50 hover:border-primary-400/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Mail size={20} className="text-primary-400 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
              <span className="font-medium break-all">sanadhyakeshav82@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-10 md:mb-16 w-full max-w-lg mx-auto px-4"
          >
            <motion.a
              href="mailto:sanadhyakeshav82@gmail.com"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 btn-text px-8 md:px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 glow border-2 border-primary-500/30 hover:border-primary-400/50 w-full sm:w-auto transform hover:shadow-2xl"
            >
              <Mail size={22} className="flex-shrink-0" />
              <span className="text-lg">Get In Touch</span>
            </motion.a>

            <motion.a
              href="/Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-slate-400 text-white hover:bg-white/10 hover:border-white px-8 md:px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm hover:glow w-full sm:w-auto transform hover:shadow-2xl"
            >
              <Download size={22} className="flex-shrink-0" />
              <span className="text-lg">Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-10 mb-12 md:mb-16"
          >
            <motion.a
              href="https://github.com/Keshav-Sharma354"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-primary-300 transition-all duration-300 p-3 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-primary-400/50 hover:bg-slate-800/50"
              aria-label="GitHub Profile"
            >
              <Github size={36} className="transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/keshav-sharma-6551711b8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -5, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-cyan-300 transition-all duration-300 p-3 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={36} className="transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="mailto:sanadhyakeshav82@gmail.com"
              whileHover={{ scale: 1.3, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-300 transition-all duration-300 p-3 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/50"
              aria-label="Email Contact"
            >
              <Mail size={36} className="transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.p
              className="text-enhanced text-sm mb-4 font-medium tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Scroll to explore
            </motion.p>
            
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-white hover:text-primary-300 transition-all duration-300 p-3 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-primary-400/50"
              aria-label="Scroll to next section"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(15, 23, 42, 0.5)" }}
            >
              <ChevronDown size={36} className="transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-2 border-primary-500/30 rounded-lg"
        />
      </div>
      <div className="absolute bottom-1/4 right-10 hidden lg:block">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-purple-500/30 rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero

