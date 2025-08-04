'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Trophy, Heart, Fish, GamepadIcon, TrendingUp, DollarSign, MapPin, Calendar, Users, Briefcase } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-anodized opacity-10 blur-xl"
            style={{
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            About Me
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Full-Stack Developer & Entrepreneur with a passion for creating
            <span className="text-gradient-anodized font-semibold"> revenue-generating solutions</span>
          </motion.p>
        </motion.div>

        {/* Main Content - Single Column for Better Readability */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-pink p-8 rounded-2xl anodized-border"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-anodized">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Professional Journey
              </h3>
            </div>
            
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                I'm an <strong>extremely ambitious</strong> full-stack developer who thrives under pressure and has proven success in creating revenue-generating applications. With <strong>$5K+ in self-generated revenue in just 3 months since being laid off</strong>, I've demonstrated the ability to rapidly build and monetize products that people actually want and pay for.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border-l-4 border-anodized mb-6">
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  💡 <strong>Fun fact:</strong> I got addicted to coding during my very first 101 course - sometimes the best career paths choose you!
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border-l-4 border-purple-400 mb-6">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">🚀 <strong>Epic Achievement Unlocked:</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Did a <strong>32-day livestream 24/7</strong> developing Gold Clicker Mining and pumped the project's development chart to <strong>150k market cap in less than 1 week</strong>! Sometimes you gotta commit to the grind. 📈💎
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                My coding journey started at 17 in a community college course where I was surrounded by 35-year-olds. When I built my first HTML/CSS website, <strong>everything just clicked</strong>. Not only was I keeping up, I was helping classmates to my left and right catch up. That natural teaching ability has stuck with me - I've mentored students at Code Fellows and genuinely love sharing knowledge.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg mb-6">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">🚀 <strong>Pressure-Tested Delivery:</strong></p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I once had to learn new technologies and build a robust PDF export system with zero #REF errors in under 3 weeks. My response? <em>"No problem, let me strap in and send it!"</em> ⛷️
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                My expertise spans the entire development lifecycle - from Unity game development with real-time multiplayer features, to enterprise ASP.NET Core APIs handling thousands of users, to React SPAs deployed at scale. I <strong>excel at any task thrown my way</strong> and have 3+ years of remote work experience with a track record of consistent delivery.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  🧠 <strong>My Superpower:</strong> Common sense engineering. While teams architect complex microservices solutions, I'm the one asking <em>"Can we just add this to the existing API?"</em> - turning 3-week projects into 3-day wins.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                I love coding because it allows me to <strong>create things with my hands without hurting my body</strong>. Having played strategy games my whole life, the problem-solving aspect feels natural. Plus, there's something incredibly satisfying about seeing clean, efficient code come together to solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Personal Interests - Compact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-anodized">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Beyond the Code
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mt-1">
                    <Fish className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Outdoor Adventures</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Whether I'm casting a line at 5am waiting for that perfect catch, bombing down mountain trails at dangerous speeds, or setting up camp under the stars - I find my best solutions often come when I'm disconnected from screens. 
                      <span className="italic text-blue-600 dark:text-blue-400 block mt-1">🎣 Fun fact: I've solved more complex algorithms while fishing than at my desk!</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 mt-1">
                    <Trophy className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Competitive Spirit</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      13 years of soccer and wrestling taught me that showing up is half the battle - the other half is refusing to quit when things get tough. That wrestler's mentality kicks in when I'm debugging at 3am.
                      <span className="italic text-orange-600 dark:text-orange-400 block mt-1">🏆 I still get that championship rush when my tests finally pass!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 mt-1">
                    <GamepadIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Strategic Mind</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      I'm that guy who plays Civilization until 4am because "just one more turn" becomes a philosophy. Strategy games and stock trading aren't just hobbies - they're pattern recognition training. 
                      <span className="italic text-purple-600 dark:text-purple-400 block mt-1">🎮 Yes, I absolutely optimize my gaming setups like production deployments!</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 mt-1">
                    <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Nocturnal Code Wizard</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      My reptiles and I are both creatures of habit - they bask under heat lamps while I bask in the glow of multiple monitors. 2am is when the magic happens and the house is quiet.
                      <span className="italic text-green-600 dark:text-green-400 block mt-1">🌙 My best commits happen when most people are dreaming!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Projects - Horizontal Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reptile Business */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-pink p-6 rounded-xl anodized-border"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Reptile Breeding Business
                </h4>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg text-center">
                <div>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">20</div>
                  <div className="text-xs text-gray-500">Lizards</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">1</div>
                  <div className="text-xs text-gray-500">Snake</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400">1</div>
                  <div className="text-xs text-gray-500">Dog</div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                I breed monitor lizards and sustainably farm cockroaches to feed them. The systematic thinking required for managing breeding cycles, nutrition, and health monitoring translates directly to software architecture.
              </p>
              
              <div className="text-xs text-green-600 dark:text-green-400 italic bg-green-50 dark:bg-green-900/10 p-2 rounded">
                🔬 It's like running a full-stack biological system!
              </div>
            </motion.div>

            {/* Family & Learning */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30">
                    <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Family First</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Weekly family dinners keep me grounded and remind me what's truly important in life.
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                    <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Always Learning</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I believe in keeping things simple and effective, teaching others, and staying curious about new technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Available for Hire - Full Width Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-pink p-8 rounded-2xl anodized-border border-green-200 dark:border-green-800"
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                  <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Available for Hire
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    $80/hour
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    or flat rate to deliver solution
                  </p>
                  <div className="text-sm space-y-1">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-green-600 dark:text-green-400">$1K</span> - Simple web apps
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">$5K+</span> - With API/Backend
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Full-Time Opportunity
                  </p>
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                    $120-160k annually
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Remote preferred, open to hybrid/on-site for the right opportunity
                  </p>
                </div>
              </div>
              
              <motion.button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}
                className="btn-anodized text-lg px-8 py-4 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>



        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-pink p-8 rounded-2xl anodized-border">
            <h3 className="text-2xl font-bold text-gradient-anodized mb-4">
              What Sets Me Apart
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-4 rounded-xl hover:glass transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 rounded-full bg-anodized w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Proven Results</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  $5K+ in self-generated revenue in just 3 months since being laid off
                </p>
                <div className="text-xs text-green-600 dark:text-green-400 italic">
                  I don't just build - I build things that make money
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-4 rounded-xl hover:glass transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 rounded-full bg-anodized w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Common Sense Problem Solver</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  I cut through complexity with simple questions that save weeks of development time
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400 italic">
                  "Can we just add this to the existing API?" - Me, saving 3 weeks
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-4 rounded-xl hover:glass transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 rounded-full bg-anodized w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Easy to Work With</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  I'm flexible, easy-going, and constructively challenge ideas to enhance solutions
                </p>
                <div className="text-xs text-purple-600 dark:text-purple-400 italic">
                  Professional yet personable approach to every project
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "Working with me is a breeze - I adapt to any timezone, love teaching others, and believe in keeping things simple and effective."
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  💼 Professional yet personable • 🌍 Global availability • 🎯 Results-focused
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 