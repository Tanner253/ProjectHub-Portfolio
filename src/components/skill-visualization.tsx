'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Code, Server, Database, Cloud, Smartphone, Gamepad2, Palette, Shield, ChevronDown, ChevronUp } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  icon: string
  color: string
  description: string
  yearsExperience: number
  projects: number
}

const skills: Skill[] = [
  // Core Backend - Most Experience (8+ years)
  { name: 'C#', level: 95, category: 'Backend', icon: '🔷', color: 'from-purple-500 to-indigo-600', description: 'C# 11, SOLID principles, 8+ years enterprise development', yearsExperience: 8, projects: 25 },
  { name: 'ASP.NET Core', level: 95, category: 'Backend', icon: '🔧', color: 'from-green-400 to-blue-400', description: 'ASP.NET Core 7.0/8.0, 180+ production tickets', yearsExperience: 8, projects: 20 },
  { name: 'SQL/MySQL', level: 92, category: 'Database', icon: '🛢️', color: 'from-orange-400 to-yellow-500', description: 'Advanced queries, database design, 8+ years', yearsExperience: 8, projects: 22 },
  
  // Frontend Technologies
  { name: 'JavaScript', level: 90, category: 'Frontend', icon: '🟨', color: 'from-yellow-400 to-orange-500', description: 'ES6+, frontend/backend integration, 8+ years', yearsExperience: 8, projects: 20 },
  { name: 'HTML/CSS', level: 88, category: 'Frontend', icon: '🎨', color: 'from-blue-400 to-purple-500', description: 'Semantic markup, responsive design, 8+ years', yearsExperience: 8, projects: 25 },
  { name: 'Blazor', level: 85, category: 'Frontend', icon: '⚡', color: 'from-purple-600 to-pink-600', description: 'Server-side Blazor, .NET 7.0, component architecture', yearsExperience: 3, projects: 8 },
  { name: 'React/Next.js', level: 82, category: 'Frontend', icon: '⚛️', color: 'from-blue-400 to-cyan-400', description: 'React patterns, hooks, SSR', yearsExperience: 3, projects: 8 },
  
  // Cloud & DevOps - Professional Experience
  { name: 'AWS', level: 88, category: 'Cloud', icon: '☁️', color: 'from-orange-400 to-yellow-500', description: 'RDS, SES, CodeCommit, Cognito, Route53, CloudWatch', yearsExperience: 3, projects: 12 },
  { name: 'Docker', level: 85, category: 'Cloud', icon: '🐳', color: 'from-blue-500 to-purple-500', description: 'ECS/Fargate, containerization in production', yearsExperience: 3, projects: 10 },
  { name: 'Azure', level: 75, category: 'Cloud', icon: '🌐', color: 'from-blue-400 to-cyan-500', description: 'App Service, Functions, Storage', yearsExperience: 2, projects: 6 },
  
  // Databases
  { name: 'PostgreSQL', level: 80, category: 'Database', icon: '🐘', color: 'from-blue-500 to-indigo-500', description: 'Advanced queries, optimization', yearsExperience: 3, projects: 8 },
  { name: 'MongoDB', level: 75, category: 'Database', icon: '🍃', color: 'from-green-600 to-teal-600', description: 'NoSQL document design', yearsExperience: 2, projects: 6 },
  
  // Specialized Tools & Libraries
  { name: 'Enterprise Tools', level: 82, category: 'Backend', icon: '🔨', color: 'from-indigo-500 to-purple-500', description: 'Serilog, EPPlus, iText, Factory patterns, DI', yearsExperience: 3, projects: 15 },
  
  // Game Development
  { name: 'Unity', level: 88, category: 'Game Dev', icon: '🎯', color: 'from-purple-400 to-pink-400', description: 'Cross-platform games, published titles', yearsExperience: 2, projects: 3 },
  { name: 'Mobile Dev', level: 78, category: 'Mobile', icon: '📱', color: 'from-pink-400 to-rose-500', description: 'React Native, PWAs', yearsExperience: 2, projects: 4 },
  
  // Security & Architecture
  { name: 'Security', level: 80, category: 'Security', icon: '🔒', color: 'from-red-500 to-rose-600', description: 'Multi-tenant systems, JWT, enterprise security', yearsExperience: 3, projects: 12 }
]

const categories = [
  { name: 'All', icon: Code, color: 'text-gray-600' },
  { name: 'Frontend', icon: Palette, color: 'text-blue-600' },
  { name: 'Backend', icon: Server, color: 'text-green-600' },
  { name: 'Database', icon: Database, color: 'text-purple-600' },
  { name: 'Cloud', icon: Cloud, color: 'text-cyan-600' },
  { name: 'Mobile', icon: Smartphone, color: 'text-pink-600' },
  { name: 'Game Dev', icon: Gamepad2, color: 'text-orange-600' },
  { name: 'Security', icon: Shield, color: 'text-red-600' }
]

export default function SkillVisualization() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-pink p-8 rounded-2xl anodized-border"
        >
      <motion.div 
        className="flex items-center justify-between mb-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ x: 2 }}
      >
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-full bg-anodized">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Technical Skills
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Interactive skill proficiency visualization
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-anodized text-white shadow-lg'
                        : 'glass hover:glass-pink'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                    {category.name === 'All' && (
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        {skills.length}
                      </span>
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="glass p-4 rounded-xl hover:glass-pink transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {skill.yearsExperience} years • {skill.projects} projects
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {skill.level}%
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        Proficiency
                      </div>
                    </div>
                  </div>

                  {/* Skill Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Skill Description */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      height: hoveredSkill === skill.name ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                      {skill.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Avg Proficiency
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {skills.reduce((acc, skill) => acc + skill.projects, 0)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Total Projects
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {Math.max(...skills.map(skill => skill.yearsExperience))}+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
      </div>
    </section>
  )
} 