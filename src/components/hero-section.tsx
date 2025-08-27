'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Mail, TrendingUp, Award, DollarSign, Code2, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getTotalRevenue, getTotalLinesOfCode, getProductionProjects } from '@/lib/projects'

const activityFeed = [
  { text: "Available for remote opportunities - let's build something amazing!", emoji: "🌟", color: "from-blue-400 to-purple-400" },
  { text: "Recently completed 180+ production tickets in enterprise environment", emoji: "✅", color: "from-green-400 to-blue-400" },
  { text: "Currently exploring AI/MCP tools for next-gen development", emoji: "🤖", color: "from-purple-400 to-pink-400" },
  { text: "Ready to bring 8+ years of experience to your team", emoji: "💼", color: "from-indigo-400 to-blue-400" },
  { text: "Looking for forward-thinking teams who value innovation", emoji: "🚀", color: "from-red-400 to-orange-400" },
  { text: "Seeking full-time opportunities $120-160k (remote preferred)", emoji: "💰", color: "from-emerald-400 to-green-400" },
  { text: "Open to any tech stack - adaptability is my superpower", emoji: "🔧", color: "from-orange-400 to-yellow-400" },
  { text: "Currently coding at 2am while my reptiles supervise", emoji: "🦎", color: "from-green-400 to-blue-400" },
  { text: "Teaching my monitor lizard advanced JavaScript concepts", emoji: "🐉", color: "from-purple-400 to-pink-400" },
  { text: "Optimizing database queries at 3am (as usual)", emoji: "⚡", color: "from-blue-400 to-cyan-400" },
  { text: "Free-range reptiles are reviewing my latest portfolio updates", emoji: "🔍", color: "from-green-500 to-teal-500" },
  { text: "Planning a fishing trip to solve today's coding challenge", emoji: "🎣", color: "from-blue-500 to-teal-400" },
]

const ActivityFeed = () => {
  const [currentActivity, setCurrentActivity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activityFeed.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const activity = activityFeed[currentActivity]

  return (
    <motion.div
      key={currentActivity}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-4"
    >
      <div className={`glass-pink px-6 py-3 rounded-full inline-block anodized-border bg-gradient-to-r ${activity.color} bg-opacity-10`}>
        <motion.p 
          className="text-sm text-gray-600 dark:text-gray-400"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-lg mr-2"
          >
            {activity.emoji}
          </motion.span>
          <span className="font-medium">{activity.text}</span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="ml-2"
          >
            ✨
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  )
}

const techStack = [
  { name: 'C# & .NET', icon: '🔷', color: 'from-purple-400 to-indigo-500' },
  { name: 'ASP.NET Core', icon: '🔧', color: 'from-green-400 to-blue-400' },
  { name: 'React & Next.js', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
  { name: 'JavaScript ES6+', icon: '🟨', color: 'from-yellow-400 to-orange-500' },
  { name: 'Unity & Game Dev', icon: '🎯', color: 'from-purple-400 to-pink-400' },
  { name: 'Blazor Server-Side', icon: '⚡', color: 'from-purple-600 to-pink-600' },
  { name: 'MySQL & SQL', icon: '🛢️', color: 'from-orange-400 to-yellow-500' },
  { name: 'AWS Cloud Services', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
  { name: 'Docker & ECS/Fargate', icon: '🐳', color: 'from-blue-500 to-purple-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-500 to-indigo-500' },
  { name: 'Node.js & Express', icon: '🚀', color: 'from-green-500 to-emerald-500' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-teal-600' },
  { name: 'Azure Cloud', icon: '🌐', color: 'from-blue-400 to-cyan-500' },  
  { name: 'Enterprise Security', icon: '🔒', color: 'from-red-500 to-rose-600' },
  { name: 'Mobile Development', icon: '📱', color: 'from-pink-400 to-rose-500' },
  { name: 'REST APIs & Microservices', icon: '🔌', color: 'from-teal-400 to-blue-500' },
  { name: 'AI/MCP Integration', icon: '🤖', color: 'from-indigo-400 to-purple-500' },
  { name: 'Multi-tenant Architecture', icon: '🏢', color: 'from-gray-500 to-slate-600' },
  { name: 'DevOps & CI/CD', icon: '🔄', color: 'from-green-600 to-emerald-700' },
  { name: 'Document Generation', icon: '📄', color: 'from-blue-400 to-indigo-500' },
  { name: 'CSS Frameworks', icon: '🎨', color: 'from-pink-500 to-purple-600' }
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [achievements, setAchievements] = useState([
    { label: 'Revenue Generated since lay-off', value: '$5,000+', icon: DollarSign, color: 'text-green-500' },
    { label: 'Production Projects', value: '8', icon: Award, color: 'text-blue-500' },
    { label: 'GitHub Repositories', value: '106', icon: TrendingUp, color: 'text-purple-500' },
  ])

  useEffect(() => {
    setMounted(true)
    
    // Update achievements with real data
    const totalRevenue = getTotalRevenue()
    const productionProjects = getProductionProjects()
    
    setAchievements([
      { 
        label: 'Revenue Generated since lay-off', 
        value: `$${totalRevenue.toLocaleString()}+`, 
        icon: DollarSign, 
        color: 'text-green-500' 
      },
      { 
        label: 'Production Projects', 
        value: productionProjects.length.toString(), 
        icon: Award, 
        color: 'text-blue-500' 
      },
      { 
        label: 'GitHub Repositories', 
        value: '106', 
        icon: TrendingUp, 
        color: 'text-purple-500' 
      },
    ])
  }, [])

  const scrollToProjects = () => {
    if (typeof window !== 'undefined') {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-slate-900">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Tanner Percival</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Full-Stack Developer & Entrepreneur specializing in revenue-generating applications
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32">
      {/* Animated Background with floating orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Floating anodized orbs */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-anodized opacity-20 blur-xl"
              style={{
                width: `${60 + i * 15}px`,
                height: `${60 + i * 15}px`,
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 3) * 30}%`,
              }}
              animate={{
                x: [0, 30 + i * 5, 0],
                y: [0, -20 - i * 3, 0],
                scale: [1, 1.1 + i * 0.05, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Particle field */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Main heading with anodized gradient */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-gradient-anodized">Tanner Percival</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-center space-x-3"
            >
              <Code2 className="w-6 h-6 text-primary-500" />
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl">
                <span className="text-gradient-anodized font-semibold">Seasoned Full-Stack Developer • Available for New Opportunities</span>
              </p>
              <Zap className="w-6 h-6 text-primary-500" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              With <span className="text-gradient-anodized font-semibold">8 years total development experience</span> including <span className="text-gradient-anodized font-semibold">3 professional years</span> completing <span className="text-gradient-anodized font-semibold">180+ production tickets</span>, I'm excited to bring my expertise in enterprise development to a new team. Specializing in .NET ecosystems, cloud architecture, and AI-powered development workflows.
            </motion.p>
            
            {/* Fun personality tagline */}
            <ActivityFeed />
          </motion.div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                    // Focus on the contact form after scrolling
                    setTimeout(() => {
                      const nameField = document.querySelector('#name') as HTMLInputElement
                      if (nameField) nameField.focus()
                    }, 500)
                  }
                }
              }}
              className="btn-anodized group flex items-center justify-center space-x-3 px-8 py-4 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Start a Project</span>
            </motion.button>
            
            <motion.button
              onClick={scrollToProjects}
              className="btn-glass group flex items-center justify-center space-x-3 px-8 py-4 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Award className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View Projects</span>
            </motion.button>
          </motion.div>

          {/* Achievement Stats with enhanced cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.05, rotateY: 5 }}
                  className="glass-pink p-8 rounded-2xl anodized-border shimmer-effect group cursor-pointer"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-full bg-anodized relative"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                      {/* Fun floating emoji - REMOVED */}
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 + index * 0.2, type: "spring", bounce: 0.4 }}
                      className={`text-4xl font-bold ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {achievement.value}
                    </motion.div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider text-center">
                      {achievement.label}
                    </div>
                    {/* Fun achievement descriptions */}
                    <div className="text-xs text-gray-500 dark:text-gray-500 italic text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {index === 0 && "Built products that actually make money!"}
                      {index === 1 && "From MVPs to enterprise scale"}
                      {index === 2 && "Constantly learning and building"}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Tech Stack with enhanced badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Technology Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  className={`glass px-6 py-4 rounded-2xl border-2 border-transparent hover:anodized-border transition-all duration-300 group cursor-pointer ${
                    tech.name === 'CSS Frameworks' ? 'relative overflow-visible' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className={`font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 ${
                      tech.name === 'CSS Frameworks' ? 'transform -translate-x-2.5 -translate-y-2.5' : ''
                    }`}>
                      {tech.name}
                    </span>
                  </div>
                  {/* CSS meme - show tooltip on slightly broken CSS badge */}
                  {tech.name === 'CSS Frameworks' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 italic whitespace-nowrap bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded shadow-lg z-20"
                    >
                      😅 Oops, positioning is hard
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator - positioned after technology expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex justify-center mt-16"
          >
            <motion.button
              onClick={scrollToProjects}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="glass-pink p-4 rounded-full anodized-border hover:scale-110 transition-all duration-300 group"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronDown className="w-6 h-6 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}