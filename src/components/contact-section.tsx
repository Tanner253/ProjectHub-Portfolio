'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, DollarSign, MapPin, Calendar, Clock, Github, Linkedin, Phone, MessageSquare, User, FileText, Twitter } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const openEmailClient = () => {
    // Validate required fields
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address before submitting.')
      return
    }

    // Create email content
    const emailSubject = formData.subject || 'Portfolio Inquiry - Opportunity Discussion'
    const emailBody = `Hi Tanner,

${formData.message || 'I viewed your impressive portfolio and would like to discuss potential opportunities. Your expertise in full-stack development and proven revenue generation caught my attention.'}

---
Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'Not provided'}

Please let me know when you're available for a conversation.

Best regards,
${formData.name}`

    // Extract domain from user's email
    const emailDomain = formData.email.toLowerCase().split('@')[1]
    
    // Map domains to their web email clients
    const emailProviders: Record<string, { name: string; url: string }> = {
      'gmail.com': {
        name: 'Gmail',
        url: `https://mail.google.com/mail/?view=cm&fs=1&to=percivaltanner@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'googlemail.com': {
        name: 'Gmail',
        url: `https://mail.google.com/mail/?view=cm&fs=1&to=percivaltanner@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'outlook.com': {
        name: 'Outlook',
        url: `https://outlook.live.com/owa/?path=/mail/action/compose&to=percivaltanner@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'hotmail.com': {
        name: 'Outlook',
        url: `https://outlook.live.com/owa/?path=/mail/action/compose&to=percivaltanner@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'live.com': {
        name: 'Outlook',
        url: `https://outlook.live.com/owa/?path=/mail/action/compose&to=percivaltanner@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'msn.com': {
        name: 'Outlook',
        url: `https://outlook.live.com/owa/?path=/mail/action/compose&to=percivaltanner@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'yahoo.com': {
        name: 'Yahoo Mail',
        url: `https://compose.mail.yahoo.com/?to=percivaltanner@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'ymail.com': {
        name: 'Yahoo Mail',
        url: `https://compose.mail.yahoo.com/?to=percivaltanner@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'rocketmail.com': {
        name: 'Yahoo Mail',
        url: `https://compose.mail.yahoo.com/?to=percivaltanner@gmail.com&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      'icloud.com': {
        name: 'iCloud Mail',
        url: `https://www.icloud.com/mail/`
      },
      'me.com': {
        name: 'iCloud Mail',
        url: `https://www.icloud.com/mail/`
      },
      'mac.com': {
        name: 'iCloud Mail',
        url: `https://www.icloud.com/mail/`
      }
    }

    const provider = emailProviders[emailDomain]
    
    if (provider) {
      // Show loading message
      const loadingMessage = `Opening ${provider.name} in a new tab with your message...`
      
      // Create temporary notification
      const notification = document.createElement('div')
      notification.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: #10B981; color: white; padding: 16px 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 10000; font-family: system-ui; font-size: 14px; max-width: 300px;">
          <div style="display: flex; items-center; gap: 8px;">
            <div style="width: 16px; height: 16px; border: 2px solid white; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            ${loadingMessage}
          </div>
        </div>
        <style>
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        </style>
      `
      
      document.body.appendChild(notification)
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 3000)
      
      // Open the email provider
      const emailWindow = window.open(provider.url, '_blank', 'noopener,noreferrer')
      
      if (!emailWindow) {
        alert(`Popup blocked! Please allow popups for this site and try again, or manually visit ${provider.name} to compose your email.`)
      }
      
      // Special handling for iCloud (doesn't support URL parameters)
      if (emailDomain.includes('icloud') || emailDomain.includes('me.com') || emailDomain.includes('mac.com')) {
        setTimeout(() => {
          alert(`iCloud Mail opened in a new tab. Please manually compose your email to percivaltanner@gmail.com with your message.`)
        }, 1000)
      }
      
    } else {
      // Unsupported domain - offer alternatives
      const supportedDomains = Object.keys(emailProviders).join(', ')
      const fallbackMessage = `We don't directly support "${emailDomain}" yet, but we can help you in other ways:

SUPPORTED DOMAINS: ${supportedDomains}

OPTIONS:
1. Use your default email client (recommended)
2. Copy the email content to clipboard
3. Manually create an email

What would you like to do?`

      const choice = confirm(fallbackMessage + '\n\nClick "OK" to open your default email client, or "Cancel" to copy to clipboard.')
      
      if (choice) {
        // Open default email client with mailto
        const mailtoLink = `mailto:percivaltanner@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        const tempLink = document.createElement('a')
        tempLink.href = mailtoLink
        tempLink.target = '_blank'
        tempLink.rel = 'noopener noreferrer'
        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
      } else {
        // Copy to clipboard
        const copyText = `TO: percivaltanner@gmail.com
SUBJECT: ${emailSubject}

${emailBody}`
        
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(copyText).then(() => {
            alert('✅ Email content copied to clipboard! You can now paste it into any email client.')
          }).catch(() => {
            alert('Unable to copy to clipboard. Please manually copy the email details.')
          })
        } else {
          alert('Email details:\n\n' + copyText)
        }
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    openEmailClient()
  }



  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'percivaltanner@gmail.com',
      link: 'mailto:percivaltanner@gmail.com',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Tanner253',
      link: 'https://github.com/Tanner253',
      color: 'text-gray-600 dark:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/tannerperc',
      link: 'https://www.linkedin.com/in/tannerperc',
      color: 'text-blue-700 dark:text-blue-300'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      value: 'x.com/oSKNYo_dev',
      link: 'https://x.com/oSKNYo_dev',
      color: 'text-gray-900 dark:text-gray-100'
    },
    {
      icon: MessageSquare,
      label: 'YouTube',
      value: 'youtube.com/@osknyo',
      link: 'https://www.youtube.com/@osknyo',
      color: 'text-red-600 dark:text-red-400'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
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
              left: `${15 + i * 15}%`,
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
          initial={{ opacity: 0, y: 20 }}
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
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to build something amazing? I'm available for freelance projects and full-time opportunities.
            <span className="text-gradient-anodized font-semibold"> Let's discuss your next big idea!</span>
          </motion.p>
          
          {/* Fun availability callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="glass-pink px-6 py-3 rounded-full inline-block anodized-border">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                🌙 <span className="font-medium">Night owl friendly</span> • ⚡ <span className="font-medium">Always ready to ship</span> • 💼 <span className="font-medium">Adapts to any timezone</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="glass-pink p-8 rounded-2xl anodized-border h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-full bg-anodized">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Send Me a Message
                </h3>
              </div>

              <form 
                onSubmit={handleSubmit} 
                className="space-y-6 flex-1 flex flex-col"
              >
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Your Name</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass rounded-lg border anodized-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Your Email</span>
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass rounded-lg border anodized-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Subject</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass rounded-lg border anodized-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Discussion / Job Opportunity"
                  />
                </div>

                {/* Message Field */}
                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Message</span>
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass rounded-lg border anodized-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-vertical flex-1"
                    placeholder="Tell me about your project, timeline, and what you're looking for..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-auto pt-4 space-y-3">
                  <motion.button
                    type="submit"
                    className="w-full btn-anodized flex items-center justify-center space-x-3 py-4 text-lg font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>



                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    This will open your email provider (Gmail, Outlook, etc.) with your message pre-filled.{' '}
                    <br className="hidden sm:block" />
                    Having trouble? Email me directly at{' '}
                    <span className="font-mono text-blue-600 dark:text-blue-400">percivaltanner@gmail.com</span>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col h-full space-y-6"
          >
            {/* Contact Details */}
            <div className="glass p-8 rounded-2xl flex-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-full bg-anodized">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 glass rounded-lg hover:glass-pink transition-all duration-300"
                    >
                      <div className={`p-2 rounded-lg ${item.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : 
                                      item.color.includes('green') ? 'bg-green-100 dark:bg-green-900/30' : 
                                      item.color.includes('red') ? 'bg-red-100 dark:bg-red-900/30' :
                                      'bg-gray-100 dark:bg-gray-800'}`}>
                        <IconComponent className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${item.color} hover:underline font-medium`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={`${item.color} font-medium`}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Availability & Rates */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-pink p-6 rounded-xl anodized-border"
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="p-2 rounded-full bg-green-100 dark:bg-green-900/30"
                >
                  <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Availability & Rates 💼
                </h4>
              </div>
              
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-2 rounded hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                  <span className="text-gray-600 dark:text-gray-400">Hourly Rate:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">$80/hour</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-2 rounded hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                  <span className="text-gray-600 dark:text-gray-400">Project Rate:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">Flat fee available</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-2 rounded hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                  <span className="text-gray-600 dark:text-gray-400">Response Time:</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">Within 24 hours</span>
                </motion.div>

                {/* Project Examples & Pricing */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Project Examples & Pricing</h5>
                  <div className="space-y-2 mb-4">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-2 rounded hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <span className="text-sm text-gray-600 dark:text-gray-400">Simple websites like this one:</span>
                      <span className="font-bold text-green-600 dark:text-green-400">$1,000</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-2 rounded hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <span className="text-sm text-gray-600 dark:text-gray-400">With API/Backend Services:</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">$5,000+ minimum</span>
                    </motion.div>
                  </div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 italic bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded mb-3">
                    ⚡ <strong>Fast Delivery:</strong> I can build a complete portfolio website like this one in less than a day!
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 italic bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded mb-4">
                    📦 <strong>Code Ownership:</strong> You get all source code delivered - you own everything, no strings attached!
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Available for:</strong> Freelance projects, contract work, and full-time remote opportunities
                  </p>
                  <div className="text-xs text-green-600 dark:text-green-400 italic bg-green-50 dark:bg-green-900/10 p-2 rounded">
                    🚀 Pro tip: I adapt to any timezone - whether you're in Tokyo or New York!
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Work With Me - Full Width Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-pink p-8 rounded-2xl anodized-border">
            <h3 className="text-2xl font-bold text-gradient-anodized mb-6 text-center">
              Why Work With Me?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  $5K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Salary Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  100k
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Remote Salary
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  8
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Production Apps
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  106
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  GitHub Repos
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400 italic">
                "I bring proven results, common-sense problem solving, and a collaborative approach that makes working together a breeze."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-pink p-8 rounded-2xl anodized-border">
            <h3 className="text-2xl font-bold text-gradient-anodized mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging projects that push boundaries and create real value. 
              Whether you need a complete application built from scratch or help scaling an existing system, 
              let's discuss how I can help bring your vision to life.
            </p>
            <motion.button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const contactForm = document.querySelector('#contact form')
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    // Focus on the name field after scrolling
                    setTimeout(() => {
                      const nameField = document.querySelector('#name') as HTMLInputElement
                      if (nameField) nameField.focus()
                    }, 500)
                  }
                }
              }}
              className="btn-anodized text-lg px-8 py-4 flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start the Conversation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 