'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, GitBranch, Star, Users, Calendar, TrendingUp, Code, Activity, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  totalCommits: number
  contributionsLastYear: number
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 45,
    followers: 8,
    following: 12,
    totalStars: 32,
    totalCommits: 1200,
    contributionsLastYear: 484
  })
  const [mounted, setMounted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Using accurate static data based on actual GitHub activity
    // 484 contributions in 2025, active developer patterns
  }, [])

  if (!mounted) return null

  const githubCards = [
    {
      icon: Github,
      label: 'Public Repos',
      value: stats.publicRepos,
      color: 'text-gray-600 dark:text-gray-400',
      bgColor: 'bg-gray-100 dark:bg-gray-800',
      description: 'Open source projects'
    },
    {
      icon: Users,
      label: 'Followers',
      value: stats.followers,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      description: 'GitHub community'
    },
    {
      icon: Star,
      label: 'Total Stars',
      value: stats.totalStars,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      description: 'Project appreciation'
    },
    {
      icon: GitBranch,
      label: 'Commits',
      value: `${stats.totalCommits}+`,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      description: 'Lines of progress'
    },
    {
      icon: Activity,
      label: 'Contributions',
      value: `${stats.contributionsLastYear}`,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      description: '2025 so far'
    },
    {
      icon: TrendingUp,
      label: 'Active Days',
      value: '280+',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      description: 'This year'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
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
          <div className="p-3 rounded-full bg-gray-900 dark:bg-gray-100">
            <Github className="w-6 h-6 text-white dark:text-gray-900" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              GitHub Activity
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Activity overview from{' '}
              <a 
                href="https://github.com/Tanner253" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                @Tanner253
              </a>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {githubCards.map((card, index) => {
                const IconComponent = card.icon
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    viewport={{ once: true }}
                    className="glass p-4 rounded-xl hover:glass-pink transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg ${card.bgColor}`}>
                        <IconComponent className={`w-4 h-4 ${card.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-lg font-bold ${card.color}`}>
                          {card.value}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {card.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {card.description}
                    </div>
                  </motion.div>
                )
              })}
            </div>



            {/* Call to action */}
            <div className="mt-6 text-center">
              <motion.a
                href="https://github.com/Tanner253"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass inline-flex items-center space-x-2 px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
      </div>
    </section>
  )
} 