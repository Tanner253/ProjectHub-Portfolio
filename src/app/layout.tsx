import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'osknyo - Tanner Percival | Freelance Full-Stack Developer for Hire',
  description: 'Professional freelance developer for hire with $5K+ proven revenue generation. osknyo specializes in React, Next.js, Unity, ASP.NET Core, and Web3 development. Available for remote work and project collaborations.',
  keywords: [
    'osknyo',
    'freelance developer for hire',
    'freelance full-stack developer',
    'remote developer for hire',
    'React developer for hire',
    'Next.js developer',
    'Unity developer freelance',
    'ASP.NET Core developer',
    'TypeScript developer',
    'Mobile app developer',
    'Blockchain developer',
    'Web3 developer for hire',
    'Revenue generating developer',
    'E-commerce developer',
    'Freelance software engineer',
    'Remote software developer',
    'Full-Stack Developer',
    'React Developer', 
    'Next.js',
    'Unity Developer',
    'ASP.NET Core',
    'TypeScript',
    'Mobile Development',
    'Blockchain',
    'Web3',
    'Revenue Generation',
    'E-commerce',
    'Portfolio',
    'Tanner Percival',
    'Software Engineer',
    'Game Development',
    'PostgreSQL',
    'Azure',
    'Firebase',
    'osknyo developer',
    'hire osknyo',
    'osknyo freelance',
    'osknyo portfolio'
  ],
  authors: [{ name: 'Tanner Percival (osknyo)', url: 'https://osknyo.com' }],
  creator: 'Tanner Percival (osknyo)',
  openGraph: {
    title: 'osknyo - Freelance Full-Stack Developer for Hire | Tanner Percival',
    description: 'Professional freelance developer with $5K+ proven revenue generation. Available for remote work and project collaborations. React, Unity, ASP.NET Core, Web3 expert.',
    url: 'https://osknyo.com',
    siteName: 'osknyo - Tanner Percival Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'osknyo - Tanner Percival Freelance Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@oSKNYo_dev',
    creator: '@oSKNYo_dev',
    title: 'osknyo - Freelance Full-Stack Developer for Hire',
    description: 'Professional freelance developer with $5K+ proven revenue generation. Available for remote work and collaborations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favico.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    shortcut: '/favico.png',
    apple: [
      { url: '/favico.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  other: {
    'application-name': 'osknyo Portfolio',
    'apple-mobile-web-app-title': 'osknyo',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#ec4899',
    'theme-color': '#ec4899',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
        {/* Additional SEO and structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tanner Percival",
              "alternateName": "osknyo",
              "url": "https://osknyo.com",
              "image": "https://osknyo.com/og-image.jpg",
              "jobTitle": "Freelance Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": "Code Fellows",
              "knowsAbout": [
                "React", "Next.js", "Unity", "ASP.NET Core", "TypeScript", 
                "Mobile Development", "Blockchain", "Web3", "Game Development",
                "PostgreSQL", "Azure", "Firebase", "Revenue Generation"
              ],
              "sameAs": [
                "https://github.com/Tanner253",
                "https://www.linkedin.com/in/tannerperc",
                "https://x.com/oSKNYo_dev",
                "https://www.youtube.com/@osknyo"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "percivaltanner@gmail.com",
                "contactType": "professional"
              },
              "offers": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Stack Development Services",
                  "description": "Professional web development, mobile app development, and software engineering services"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "80",
                  "priceCurrency": "USD",
                  "unitText": "hour"
                }
              }
            })
          }}
        />
        
        {/* Additional meta tags for freelancer discovery */}
        <meta name="freelance-developer" content="available" />
        <meta name="remote-work" content="available" />
        <meta name="developer-type" content="full-stack" />
        <meta name="years-experience" content="8+" />
        <meta name="revenue-generated" content="5000+" />
        <meta name="hourly-rate" content="80" />
        <meta name="portfolio-site-price" content="1000" />
        <meta name="api-backend-price" content="5000+" />
        <meta name="code-ownership" content="full-delivery" />
        <meta name="fast-delivery" content="less-than-24-hours" />
        <meta name="availability" content="open-to-opportunities" />
        
        {/* Local business markup for freelance services */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Remote" />
        <meta name="ICBM" content="39.8283, -98.5795" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
