'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Server, Database, Cloud, GitBranch, Monitor, Shield } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'End-to-End CI/CD Pipeline Implementation',
      description: 'Comprehensive CI/CD solution with multi-branch support, automated testing, and deployment strategies for microservices architecture.',
      longDescription: 'Designed and implemented multi-branch Jenkins pipelines supporting feature development, testing, and production deployments. Integrated SonarQube for static code analysis and Trivy for container vulnerability scanning, improving code quality and security posture.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'SonarQube', 'Trivy'],
      icon: GitBranch,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Reduced manual deployment efforts by 60%',
        'Increased deployment frequency from weekly to daily',
        'Implemented blue-green deployment strategy',
        'Achieved zero-downtime releases with seamless rollback capabilities'
      ],
      metrics: {
        'Deployment Time': '40% faster',
        'Error Rate': '75% reduction',
        'Team Productivity': '60% increase'
      }
    },
    {
      title: 'Kubernetes Cluster Management & Monitoring',
      description: 'Production-grade Kubernetes infrastructure with comprehensive monitoring, auto-scaling, and security policies.',
      longDescription: 'Deployed and managed production-grade Kubernetes clusters on AWS EKS with 99.9% availability SLA. Implemented comprehensive monitoring stack with Prometheus metrics collection and Grafana visualization.',
      technologies: ['AWS EKS', 'Prometheus', 'Grafana', 'Helm', 'Kubernetes'],
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Achieved 99.9% availability SLA',
        'Configured HPA and Cluster Autoscaler for optimal resource utilization',
        'Established resource quotas and network policies',
        'Implemented comprehensive monitoring dashboards'
      ],
      metrics: {
        'Uptime': '99.9%',
        'Resource Efficiency': '35% improvement',
        'Incident Response': '50% faster'
      }
    },
    {
      title: 'Infrastructure Automation with Terraform & Ansible',
      description: 'Complete infrastructure automation solution with reusable modules and configuration management.',
      longDescription: 'Developed reusable Terraform modules for provisioning AWS infrastructure including VPC, EC2, RDS, and S3. Created Ansible roles for consistent application deployment and configuration management across environments.',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Python', 'Bash'],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Reduced infrastructure setup time from 3 days to 2 hours',
        'Created reusable Terraform modules for team collaboration',
        'Implemented state management and collaboration workflows',
        'Automated complete infrastructure provisioning lifecycle'
      ],
      metrics: {
        'Setup Time': '95% reduction',
        'Consistency': '100% across environments',
        'Team Efficiency': '70% improvement'
      }
    },
    {
      title: 'Data Pipeline Automation on AWS',
      description: 'Automated ETL data pipeline with real-time analytics capabilities using AWS services.',
      longDescription: 'Designed and automated an ETL data pipeline using AWS Glue and S3 for structured data ingestion and transformation. Implemented Terraform scripts to provision Glue jobs, S3 buckets, and IAM roles.',
      technologies: ['AWS Glue', 'S3', 'Terraform', 'Python', 'Athena'],
      icon: Database,
      color: 'from-orange-500 to-red-500',
      achievements: [
        'Enabled near real-time analytics capabilities',
        'Automated data transformation workflows',
        'Integrated S3 data lake with AWS Athena',
        'Implemented reproducible data infrastructure'
      ],
      metrics: {
        'Processing Speed': '80% faster',
        'Data Accuracy': '99.5%',
        'Cost Efficiency': '40% improvement'
      }
    }
  ]

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

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcase of key DevOps projects demonstrating infrastructure automation, CI/CD implementation, and cloud optimization
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mr-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 text-white rounded-full text-sm border border-white/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements:</h4>
                <div className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-400 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                  <div key={key} className="text-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <div className="text-sm text-gray-400 mb-1">{key}</div>
                    <div className="text-lg font-semibold text-primary-300">{value}</div>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Project Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-gray-300">Microservices Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">System Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Deployment Speed Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25%</div>
                <div className="text-gray-300">Infrastructure Cost Savings</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
