'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Briefcase, TrendingUp, DollarSign, Code, Users, Award, Zap, ChevronDown, Calendar, Github, ExternalLink } from 'lucide-react'
import ProjectCard from './project-card'
import ProjectModal from './project-modal'
import { projects, getAllCategories, Project, getTotalRevenue, getProductionProjects } from '@/lib/projects'

// GitHub repository data (you would typically fetch this from GitHub API)
const githubRepos = [
  { 
    name: 'ProjectHub-Portfolio', 
    description: 'A repository of all of the projects i am working on/have worked on',
    language: 'TypeScript',
    updated: 'Aug 3, 2025',
    url: 'https://github.com/Tanner253/ProjectHub-Portfolio'
  },
  { 
    name: 'CLANKER', 
    description: 'JavaScript SPA for cryptocurrency interactions',
    language: 'JavaScript',
    updated: 'Aug 3, 2025',
    url: 'https://github.com/Tanner253/CLANKER'
  },
  { 
    name: 'Unity6-Clicker', 
    description: 'Deployed Unity game',
    language: 'C#',
    updated: 'May 21, 2025',
    url: 'https://github.com/Tanner253/Unity6-Clicker'
  },
  { 
    name: 'MemeCoinClicker---LEGACY', 
    description: 'DEPLOYED: Unity6 Game I Deployed on google app store',
    language: 'C#',
    updated: 'May 3, 2025',
    url: 'https://github.com/Tanner253/MemeCoinClicker---LEGACY'
  },
  { 
    name: 'My-portfolio-JS', 
    description: 'My portfolio in JS - Mobile friendly',
    language: 'CSS',
    updated: 'Apr 27, 2025',
    url: 'https://github.com/Tanner253/My-portfolio-JS'
  },
  { 
    name: 'mcp-unity', 
    description: 'MCP Server to integrate Unity Editor game engine with different AI Model clients',
    language: 'C#',
    updated: 'Apr 4, 2025',
    url: 'https://github.com/Tanner253/mcp-unity'
  },
  { 
    name: 'DinoCMS2.2', 
    description: 'We are now deployed!! Gaming server CMS',
    language: 'C#',
    updated: 'Feb 13, 2024',
    url: 'https://github.com/Tanner253/DinoCMS2.2'
  },
  { 
    name: 'React-Hair-Salon', 
    description: 'Hair Salon for friend',
    language: 'JavaScript',
    updated: 'Jun 10, 2022',
    url: 'https://github.com/Tanner253/React-Hair-Salon'
  },
  { 
    name: 'mySQL-EF-Core-FULL-CRUD', 
    description: 'Full CRUD with mySQL integrations using entity framework core',
    language: 'HTML',
    updated: 'May 31, 2022',
    url: 'https://github.com/Tanner253/mySQL-EF-Core-FULL-CRUD'
  },
  { 
    name: 'react-native', 
    description: 'Testrun of react native for android iOS development',
    language: 'JavaScript',
    updated: 'May 18, 2022',
    url: 'https://github.com/Tanner253/react-native'
  },
  { 
    name: 'Virtual-store-REDUX', 
    description: 'Ecommerce with Redux',
    language: 'JavaScript',
    updated: 'May 13, 2022',
    url: 'https://github.com/Tanner253/Virtual-store-REDUX'
  },
  { 
    name: 'data-structures-and-algorithms', 
    description: 'Practice with Data Structures and Algorithms',
    language: 'JavaScript',
    updated: 'May 9, 2022',
    url: 'https://github.com/Tanner253/data-structures-and-algorithms'
  },
  { 
    name: 'react-todo-app', 
    description: 'To-Do application with context state',
    language: 'JavaScript',
    updated: 'May 5, 2022',
    url: 'https://github.com/Tanner253/react-todo-app'
  },
  { 
    name: 'Component-Based-UI-RESTy', 
    description: 'RESTy application for working with componentized UI',
    language: 'JavaScript',
    updated: 'Apr 29, 2022',
    url: 'https://github.com/Tanner253/Component-Based-UI-RESTy'
  },
  { 
    name: 'CAPS', 
    description: 'The Code Academy Parcel Service',
    language: 'JavaScript',
    updated: 'Apr 7, 2022',
    url: 'https://github.com/Tanner253/CAPS'
  },
  { 
    name: 'api-server', 
    description: 'api server with sequelize node.js and express',
    language: 'JavaScript',
    updated: 'Mar 31, 2022',
    url: 'https://github.com/Tanner253/api-server'
  },
  { 
    name: 'auth-api', 
    description: 'Api with Authentication JWT built in with Roles',
    language: 'JavaScript',
    updated: 'Mar 31, 2022',
    url: 'https://github.com/Tanner253/auth-api'
  },
  { 
    name: 'bearer-auth', 
    description: 'Authentication back end with JWT bearer tokens',
    language: 'JavaScript',
    updated: 'Mar 30, 2022',
    url: 'https://github.com/Tanner253/bearer-auth'
  }
]

const languageColors: { [key: string]: string } = {
  'TypeScript': 'bg-blue-500',
  'JavaScript': 'bg-yellow-500',
  'C#': 'bg-purple-500',
  'CSS': 'bg-pink-500',
  'HTML': 'bg-orange-500',
  'Java': 'bg-red-500'
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAllRepos, setShowAllRepos] = useState(false)

  const categories = ['All', ...getAllCategories()]
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const totalRevenue = getTotalRevenue()
  const productionProjects = getProductionProjects()

  const stats = [
    { 
      label: 'Featured Projects', 
      value: projects.length.toString(), 
      icon: Briefcase,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    { 
      label: 'Production Apps', 
      value: productionProjects.length.toString(), 
      icon: Award,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    { 
              label: 'Salary Generated', 
      value: `$${totalRevenue.toLocaleString()}+`, 
      icon: DollarSign,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/20'
    },
    { 
      label: 'GitHub Repositories', 
      value: '106', 
      icon: Code,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
  ]

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-anodized opacity-10 blur-xl"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gradient-anodized mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My most impressive and revenue-generating applications showcasing expertise across 
            <span className="text-gradient-anodized font-semibold"> full-stack development, mobile games, and enterprise solutions</span>
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className={`${stat.bgColor} p-6 rounded-2xl text-center border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-4"
                >
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                  className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <div className="flex items-center space-x-2 mr-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter by:</span>
          </div>
          
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-anodized text-white shadow-lg'
                  : 'glass hover:glass-pink text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try selecting a different category or check back later for new projects.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* GitHub Repositories Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient-anodized mb-4">
              Additional GitHub Repositories
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Beyond my featured projects, I have 100+ repositories showcasing learning, experimentation, and various development work
            </p>
            
            <motion.button
              onClick={() => setShowAllRepos(!showAllRepos)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 mx-auto glass hover:glass-pink px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">
                {showAllRepos ? 'Hide' : 'Show'} All Repositories ({githubRepos.length}+)
              </span>
              <motion.div
                animate={{ rotate: showAllRepos ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>

          <AnimatePresence>
            {showAllRepos && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {githubRepos.map((repo, index) => (
                    <motion.a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass p-4 rounded-lg hover:glass-pink transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Github className="w-4 h-4 text-gray-500 group-hover:text-primary-500" />
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm truncate">
                            {repo.name}
                          </h4>
                        </div>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-primary-500 flex-shrink-0" />
                      </div>
                      
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {repo.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`} />
                          <span className="text-xs text-gray-500">{repo.language}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{repo.updated}</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <motion.a
                    href="https://github.com/Tanner253?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-glass inline-flex items-center space-x-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>View All 106 Repositories on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
} 