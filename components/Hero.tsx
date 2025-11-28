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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-6 md:mb-8"
          >
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary-500 to-cyan-600 p-1 glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <Image 
                    src="/profile.jpg" 
                    alt="Keshav Sharma" 
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-0 right-2 w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse shadow-lg"></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4"
          >
            <span className="gradient-text">Keshav Sharma</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-subtitle mb-5 md:mb-6 font-light"
          >
            DevOps Engineer & Cloud Architect
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-enhanced max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-4"
          >
            Passionate about automating infrastructure, optimizing cloud architectures, and building scalable systems. 
            Specialized in AWS, Kubernetes, CI/CD pipelines, and Infrastructure as Code with 1+ years of hands-on experience.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 md:gap-6 mb-6 md:mb-8 text-sm md:text-base"
          >
            <div className="flex items-center space-x-2 text-enhanced">
              <MapPin size={18} className="text-primary-400 flex-shrink-0" />
              <span>Kota, Rajasthan, India</span>
            </div>
            <div className="flex items-center space-x-2 text-enhanced">
              <Phone size={18} className="text-primary-400 flex-shrink-0" />
              <span>+91 6350386223</span>
            </div>
            <div className="flex items-center space-x-2 text-enhanced">
              <Mail size={18} className="text-primary-400 flex-shrink-0" />
              <span className="break-all">sanadhyakeshav82@gmail.com</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 md:mb-12 w-full max-w-md mx-auto px-4"
          >
            <motion.a
              href="mailto:sanadhyakeshav82@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 btn-text px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 glow w-full sm:w-auto"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.a>

            <motion.a
              href="/Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-10 md:mb-12"
          >
            <motion.a
              href="https://github.com/Keshav-Sharma354"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/keshav-sharma-6551711b8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:sanadhyakeshav82@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-primary-400 transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail size={32} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-enhanced text-sm mb-2">Scroll to explore</p>
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white hover:text-primary-400 transition-colors duration-300"
              aria-label="Scroll to next section"
            >
              <ChevronDown size={32} />
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
