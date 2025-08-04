import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import GitHubStats from '@/components/github-stats'
import SkillVisualization from '@/components/skill-visualization'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ProjectsSection />
        <GitHubStats />
        <SkillVisualization />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-primary-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Tanner Percival. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-sm text-gray-500">
              Deployed on Vercel • <span className="text-gradient-anodized">Open to new opportunities</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
