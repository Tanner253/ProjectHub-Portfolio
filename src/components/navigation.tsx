'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code, User, Briefcase, Mail, Download, AtSign } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { name: 'Home', href: '#home', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'About', href: '#about', icon: User },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Scroll to contact form and focus on name field
    if (typeof window !== 'undefined') {
      const contactForm = document.querySelector('#contact form')
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setIsMenuOpen(false) // Close mobile menu if open
        
        // Focus on the name field after scrolling
        setTimeout(() => {
          const nameField = document.querySelector('#name') as HTMLInputElement
          if (nameField) nameField.focus()
        }, 800)
      }
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 50)
      }
    }

    handleScroll() // Set initial state
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  const scrollToSection = (href: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    }
  }

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">
                Tanner Percival
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="text-gray-300 px-3 py-2 text-sm font-medium cursor-pointer">
                  {item.name}
                </div>
              ))}
              <div className="w-10 h-10" />
            </div>
            <div className="md:hidden">
              <div className="w-10 h-10" />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-pink shadow-2xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with anodized styling */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              className="w-10 h-10 bg-anodized rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-gradient-anodized text-xl font-bold">
              Tanner Percival
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-anodized rounded-full"
                    whileHover={{ width: '80%', x: '-50%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              )
            })}
            
            {/* Email Address */}
            <motion.button
              onClick={handleEmailClick}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 group"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <AtSign className="w-4 h-4" />
              <span className="text-sm">percivaltanner@gmail.com</span>
            </motion.button>

            {/* Download Resume Button */}
            <motion.a
              href="/Tanner_Percival_Resume_2025.pdf"
              download="Tanner_Percival_Resume_2025.pdf"
              className="btn-anodized flex items-center space-x-2"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="ml-4"
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg glass hover:glass-pink text-gray-700 dark:text-gray-300 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-pink border-t anodized-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:glass hover:anodized-border font-medium transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.button>
                )
              })}
              
              {/* Mobile Email */}
              <motion.button
                onClick={handleEmailClick}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:glass hover:anodized-border font-medium transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <AtSign className="w-5 h-5" />
                <span>percivaltanner@gmail.com</span>
              </motion.button>

              {/* Mobile Resume Download */}
              <motion.a
                href="/Tanner_Percival_Resume_2025.pdf"
                download="Tanner_Percival_Resume_2025.pdf"
                className="btn-anodized flex items-center space-x-3 w-full justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 