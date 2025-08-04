'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, DollarSign, TrendingUp, Users, Award, Zap, Code } from 'lucide-react'
import { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  index: number
}

const statusColors = {
  'Production': 'bg-green-500 text-white',
  'Development': 'bg-blue-500 text-white', 
  'Archived': 'bg-gray-500 text-white'
}

const categoryIcons = {
  'Game Development': '🎮',
  'Web Development': '🌐',
  'Blockchain': '⛓️',
  'E-commerce': '🛒',
  'Backend API': '⚙️',
  'Developer Tools': '🔧'
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const hasRevenue = project.metrics.revenue && project.metrics.revenue !== '$0'
  const liveLink = project.links.find(link => link.type === 'live')
  const githubLink = project.links.find(link => link.type === 'github')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        bounce: 0.4
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
      className="card-anodized p-6 cursor-pointer group relative overflow-hidden flex flex-col h-full"
      onClick={onClick}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-anodized opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Content container that grows to fill space */}
      <div className="flex-grow flex flex-col">
        {/* Header with status and category */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{categoryIcons[project.category]}</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {project.category}
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}
          >
            {project.status}
          </motion.div>
        </div>

        {/* Title and subtitle */}
        <div className="mb-4 space-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gradient-anodized transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {hasRevenue && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 glass-pink p-3 rounded-lg"
            >
              <DollarSign className="w-4 h-4 text-green-500" />
              <div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  {project.metrics.revenue}
                </div>
                <div className="text-xs text-gray-500">Revenue</div>
              </div>
            </motion.div>
          )}
          
          {project.metrics.linesOfCode && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 glass p-3 rounded-lg"
            >
              <Code className="w-4 h-4 text-purple-500" />
              <div>
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  {(project.metrics.linesOfCode / 1000).toFixed(0)}K+
                </div>
                <div className="text-xs text-gray-500">Lines</div>
              </div>
            </motion.div>
          )}
          
          {project.metrics.users && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 glass p-3 rounded-lg"
            >
              <Users className="w-4 h-4 text-blue-500" />
              <div>
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {project.metrics.users}
                </div>
                <div className="text-xs text-gray-500">Users</div>
              </div>
            </motion.div>
          )}
          
          {project.metrics.commits && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 glass p-3 rounded-lg"
            >
              <TrendingUp className="w-4 h-4 text-indigo-500" />
              <div>
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {project.metrics.commits}
                </div>
                <div className="text-xs text-gray-500">Commits</div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Tech stack preview - grows to fill remaining space */}
        <div className="flex-grow mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full border border-primary-200 dark:border-primary-700"
              >
                {tech.name}
              </motion.span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer - always at bottom */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{project.startDate}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {githubLink && (
            <motion.a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full glass hover:glass-pink transition-all duration-300"
              title="View Source Code"
            >
              <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </motion.a>
          )}
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full bg-anodized"
            title="Click to view details"
          >
            <Zap className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="shimmer-effect absolute inset-0 pointer-events-none" />
    </motion.div>
  )
} 