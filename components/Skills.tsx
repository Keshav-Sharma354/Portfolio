'use client'

import { motion } from 'framer-motion'
import { Cloud, Server, Code, Database, Shield, GitBranch, Monitor, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 100, items: ['EC2', 'S3', 'EKS', 'IAM', 'CloudWatch', 'VPC', 'RDS', 'Lambda'] },
        { name: 'Microsoft Azure', level: 100, items: ['Virtual Machines', 'Storage', 'AKS', 'Active Directory'] },
        { name: 'Google Cloud Platform (GCP)', level: 100, items: ['Compute Engine', 'Cloud Storage', 'GKE', 'IAM'] }
      ]
    },
    {
      title: 'Containerization & Orchestration',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 100, items: ['Docker Compose', 'Multi-stage builds', 'Security scanning'] },
        { name: 'Kubernetes', level: 100, items: ['Helm', 'HPA', 'Network Policies', 'RBAC'] },
        { name: 'Container Runtime', level: 100, items: ['Podman', 'CRI-O', 'containerd'] }
      ]
    },
    {
      title: 'CI/CD & DevOps Tools',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Jenkins', level: 100, items: ['Pipeline as Code', 'Blue Ocean', 'Plugins'] },
        { name: 'GitHub Actions', level: 100, items: ['Workflows', 'Self-hosted runners', 'Secrets'] },
        { name: 'GitLab CI/CD', level: 100, items: ['Runners', 'Auto DevOps', 'Container Registry'] },
        { name: 'ArgoCD', level: 100, items: ['GitOps', 'Application deployment', 'Sync policies'] }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Terraform', level: 100, items: ['Modules', 'State management', 'Providers'] },
        { name: 'Ansible', level: 100, items: ['Playbooks', 'Roles', 'Vault', 'Tower'] },
        { name: 'AWS CloudFormation', level: 100, items: ['Templates', 'Stack sets', 'Drift detection'] },
        { name: 'Packer', level: 100, items: ['Image building', 'Multi-cloud', 'Provisioners'] }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Monitor,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Prometheus', level: 100, items: ['Metrics collection', 'PromQL', 'Alerting rules'] },
        { name: 'Grafana', level: 100, items: ['Dashboards', 'Data sources', 'Alerting'] },
        { name: 'ELK Stack', level: 100, items: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats'] },
        { name: 'Loki & Fluent Bit', level: 100, items: ['Log aggregation', 'Log parsing', 'Retention'] }
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Python', level: 100, items: ['Automation scripts', 'APIs', 'Data processing'] },
        { name: 'Bash Shell Scripting', level: 100, items: ['System administration', 'Process automation'] },
        { name: 'YAML & JSON', level: 100, items: ['Configuration management', 'Data serialization'] },
        { name: 'Groovy', level: 100, items: ['Jenkins pipelines', 'Build automation'] }
      ]
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'PostgreSQL', level: 100, items: ['Performance tuning', 'Backup & recovery'] },
        { name: 'MySQL', level: 100, items: ['Replication', 'Clustering'] },
        { name: 'Redis', level: 100, items: ['Caching', 'Session storage'] },
        { name: 'MongoDB', level: 100, items: ['Document storage', 'Aggregation'] }
      ]
    },
    {
      title: 'Security & DevSecOps',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Container Security', level: 100, items: ['Image scanning', 'Runtime security'] },
        { name: 'AWS IAM', level: 100, items: ['Policies', 'Roles', 'MFA'] },
        { name: 'Vulnerability Scanning', level: 100, items: ['Trivy', 'Aqua Security', 'OWASP'] },
        { name: 'Network Security', level: 100, items: ['VPC', 'Security Groups', 'NACLs'] }
      ]
    }
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
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise in modern DevOps practices, cloud technologies, and infrastructure automation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Additional Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">99.9%</div>
                <div className="text-gray-300">System Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-gray-300">Cost Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Deployment Speed Increase</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
