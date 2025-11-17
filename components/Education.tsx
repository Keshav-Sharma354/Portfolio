'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, Star, Trophy, BookOpen, Shield } from 'lucide-react'

const Education = () => {
  const education = {
    degree: 'Integrated B.Tech + M.Tech in Computer Science and Engineering',
    university: 'Career Point University',
    location: 'Kota, Rajasthan',
    period: 'August 2020 - May 2025',
    gpa: '9.4/10.0',
    rank: 'Top 1% of Program',
    coursework: [
      'Cloud Computing Architecture',
      'DevOps Engineering Practices',
      'Container Orchestration',
      'Distributed Systems',
      'Network Security',
      'Database Management Systems',
      'Software Engineering',
      'Microservices Architecture'
    ]
  }

  const certifications = [
    {
      title: 'DevOps and Cloud Computing Professional Certification',
      issuer: 'Grras IT Solutions',
      year: '2024',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'System SELinux Administration Certification',
      issuer: 'Infosys Springboard',
      year: '2024',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const achievements = [
    'Organized and delivered technical workshops on DevOps methodologies, Cloud infrastructure, Ethical Hacking principles, and Data Engineering concepts to 100+ participants',
    'Automated manual deployment and operational processes, boosting team productivity and reducing human error by 60%',
    'Implemented comprehensive monitoring solutions that reduced incident detection and resolution time by 50%',
    'Recognized by senior management for maintaining 99.9% system availability during critical production releases',
    'Helped lower cloud infrastructure costs by 25% through optimization and right-sizing efforts',
    'Demonstrated familiarity with data engineering workflows, Big Data tools (Kafka, Spark), and MLOps integration within DevOps pipelines'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <section id="education" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic background and professional certifications in computer science and DevOps engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center mr-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{education.degree}</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                    <div className="flex items-center space-x-2 text-primary-400 font-semibold">
                      <BookOpen size={16} />
                      <span>{education.university}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar size={16} />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Performance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-lg border border-primary-500/20">
                  <Star className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{education.gpa}</div>
                  <div className="text-gray-400">Cumulative GPA</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-xl font-bold text-white mb-2">{education.rank}</div>
                  <div className="text-gray-400">Class Ranking</div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 text-primary-400 mr-2" />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-2 bg-slate-800/50 text-gray-300 rounded-lg text-sm text-center border border-slate-700/50 hover:border-primary-500/30 transition-colors duration-300"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 text-primary-400 mr-3" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary-300">{cert.year}</div>
                      <div className="text-sm text-gray-400">{cert.issuer}</div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {cert.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards and Achievements */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-primary-400 mr-3" />
              Awards & Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-primary-500/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
