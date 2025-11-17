'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experience = {
    title: 'DevOps Engineer',
    company: 'Mechlin Software Technologies',
    location: 'Kota, Rajasthan (Hybrid Model)',
    period: 'January 2025 – Present',
    description: 'Leading DevOps initiatives and infrastructure automation for a growing technology company.',
    achievements: [
      'Engineered and maintained end-to-end CI/CD pipelines using Jenkins and GitHub Actions, automating software delivery for 15+ microservices and reducing deployment time by 40%',
      'Containerized applications using Docker and orchestrated deployments on Kubernetes clusters, improving application scalability and resource utilization',
      'Implemented Infrastructure as Code (IaC) using Terraform to provision and manage AWS cloud resources, ensuring consistent environments across development, staging, and production',
      'Developed comprehensive Ansible playbooks for automated configuration management, reducing server provisioning time from 4 hours to 30 minutes',
      'Designed and deployed monitoring solutions using Prometheus and Grafana, creating 20+ custom dashboards that improved system visibility and reduced mean time to detection (MTTD) by 50%',
      'Managed Kubernetes applications using Helm charts, standardizing deployment processes across multiple environments and teams',
      'Implemented centralized logging infrastructure with Loki and Fluent Bit, enabling efficient log aggregation and troubleshooting across distributed systems',
      'Collaborated with development teams to optimize Docker images, reducing image sizes by 35% and improving container security',
      'Integrated automated security scanning using Trivy in CI/CD pipelines, identifying and remediating vulnerabilities early in the development lifecycle',
      'Optimized AWS cloud infrastructure costs through right-sizing instances, implementing auto-scaling policies, and leveraging reserved instances, achieving 25% cost savings',
      'Participated in 24/7 on-call rotation, responding to production incidents and implementing preventive measures to reduce incident frequency',
      'Documented infrastructure architecture, deployment procedures, and operational runbooks, improving team knowledge sharing and onboarding efficiency'
    ],
    technologies: [
      'Kubernetes', 'Docker', 'Helm', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible', 'AWS',
      'Prometheus', 'Grafana', 'Loki', 'Python', 'Bash', 'Linux', 'PostgreSQL', 'Git', 'CI/CD',
      'Microservices', 'Kafka', 'Spark', 'Glue', 'BigQuery', 'Data Lake'
    ],
    metrics: [
      { label: 'Deployment Time Reduction', value: '40%', icon: TrendingUp },
      { label: 'Cost Savings', value: '25%', icon: Award },
      { label: 'System Availability', value: '99.9%', icon: TrendingUp },
      { label: 'MTTD Improvement', value: '50%', icon: Award }
    ]
  }

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional journey in DevOps engineering and cloud infrastructure management
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 mb-8 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl" />
            
            {/* Header */}
            <div className="relative z-10 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{experience.title}</h3>
                  <div className="flex items-center space-x-2 text-primary-400 text-lg font-semibold mb-2">
                    <ExternalLink size={20} />
                    <span>{experience.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-lg">{experience.description}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {experience.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-lg border border-primary-500/20"
                >
                  <metric.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 text-primary-400 mr-2" />
                Key Achievements
              </h4>
              <div className="grid gap-4">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-primary-500/30 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30 hover:border-primary-400/50 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-4 px-6 py-3 glass rounded-full">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 font-medium">Currently Active</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
