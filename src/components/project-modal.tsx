'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, DollarSign, Users, Code, TrendingUp, Award, Zap } from 'lucide-react'
import { Project } from '@/lib/projects'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  const hasRevenue = project.metrics.revenue && project.metrics.revenue !== '$0'
  const liveLink = project.links.find(link => link.type === 'live')
  const githubLink = project.links.find(link => link.type === 'github')

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:glass-pink transition-all duration-300"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="relative p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-b border-gray-200 dark:border-gray-700">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-6xl">
                      {project.category === 'Game Development' && '🎮'}
                      {project.category === 'Web Development' && '🌐'}
                      {project.category === 'Backend API' && '⚙️'}
                      {project.category === 'E-commerce' && '🛒'}
                      {project.category === 'Developer Tools' && '🔧'}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {project.title}
                      </h2>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-6">
                        {project.subtitle}
                      </p>
                      
                      {/* Large Visit Site Button */}
                      <div className="flex items-center justify-center space-x-4">
                        {liveLink && (
                          <motion.a
                            href={liveLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-anodized flex items-center justify-center space-x-3 px-8 py-4 text-xl font-bold group"
                          >
                            <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Visit Live Site</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                              className="text-2xl"
                            >
                              🚀
                            </motion.div>
                          </motion.a>
                        )}
                        
                        {githubLink && (
                          <motion.a
                            href={githubLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-glass flex items-center justify-center space-x-3 px-6 py-4 text-lg font-semibold"
                          >
                            <Github className="w-5 h-5" />
                            <span>View Code</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary-800 dark:text-primary-300 mb-2">
                        Executive Summary
                      </h3>
                      <p className="text-primary-700 dark:text-primary-400">
                        {project.executiveSummary}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {hasRevenue && (
                        <div className="glass-pink p-4 rounded-lg text-center">
                          <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" />
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">
                            {project.metrics.revenue}
                          </div>
                          <div className="text-xs text-gray-500">Revenue</div>
                        </div>
                      )}
                      
                      {project.metrics.linesOfCode && (
                        <div className="glass p-4 rounded-lg text-center">
                          <Code className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                            {(project.metrics.linesOfCode / 1000).toFixed(0)}K+
                          </div>
                          <div className="text-xs text-gray-500">Lines</div>
                        </div>
                      )}
                      
                      {project.metrics.users && (
                        <div className="glass p-4 rounded-lg text-center">
                          <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {project.metrics.users}
                          </div>
                          <div className="text-xs text-gray-500">Users</div>
                        </div>
                      )}
                      
                      {project.metrics.commits && (
                        <div className="glass p-4 rounded-lg text-center">
                          <TrendingUp className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {project.metrics.commits}
                          </div>
                          <div className="text-xs text-gray-500">Commits</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Long Description */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </section>

                  {/* Technical Highlights */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Technical Highlights
                    </h3>
                    <ul className="space-y-2">
                      {project.technicalHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Zap className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Business Impact */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Business Impact
                    </h3>
                    <ul className="space-y-2">
                      {project.businessImpact.map((impact, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Architecture Overview */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Architecture Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.architectureOverview}
                    </p>
                  </section>

                  {/* Key Features */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 glass rounded-lg">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tech Stack */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-700"
                        >
                          <span className="font-medium">{tech.name}</span>
                          {tech.version && (
                            <span className="text-sm text-primary-500 ml-1">({tech.version})</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Project Timeline */}
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Project Timeline
                    </h3>
                    <div className="flex items-center space-x-4 p-4 glass rounded-lg">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Started</div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">{project.startDate}</div>
                      </div>
                      {project.completionDate && (
                        <>
                          <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                          <div>
                            <div className="text-sm text-gray-500">Completed</div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">{project.completionDate}</div>
                          </div>
                        </>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
} 