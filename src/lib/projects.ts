export interface TechStack {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Mobile' | 'Blockchain' | 'DevOps' | 'Testing' | 'Game Development';
  version?: string;
}

export interface ProjectMetrics {
  linesOfCode?: number;
  revenue?: string;
  users?: number;
  deployments?: number;
  commits?: number;
  uptime?: string;
  performance?: string;
}

export interface ProjectLink {
  type: 'github' | 'live' | 'demo' | 'documentation';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Game Development' | 'Web Development' | 'Blockchain' | 'E-commerce' | 'Backend API' | 'Developer Tools';
  description: string;
  longDescription: string;
  executiveSummary: string;
  technicalHighlights: string[];
  businessImpact: string[];
  architectureOverview: string;
  keyFeatures: string[];
  techStack: TechStack[];
  metrics: ProjectMetrics;
  links: ProjectLink[];
  image: string;
  tags: string[];
  status: 'Production' | 'Development' | 'Archived';
  startDate: string;
  completionDate?: string;
}

export const projects: Project[] = [
  {
    id: 'max-iterations-experience',
    title: 'Max Iterations Professional Experience',
    subtitle: '3 Years of Enterprise Software Development',
    category: 'Web Development',
    description: '3 years of professional software development at Max Iterations, completing 180+ production tickets with Blazor, ASP.NET Core, and enterprise systems.',
    longDescription: 'Comprehensive professional experience spanning 3 years at Max Iterations, a forward-thinking technology company. Joined as a junior developer and evolved into a seasoned full-stack developer, completing over 180 production tickets and contributing to enterprise-level applications serving multiple clients.',
    executiveSummary: '3 years of professional growth from junior to seasoned developer, completing 180+ production tickets in enterprise software development with cutting-edge technologies and best practices.',
    technicalHighlights: [
      'Blazor Server-side development using component-based architecture with .NET 7.0/8.0',
      'ASP.NET Core 7.0/8.0 backend services with C# 11 and modern development patterns',
      'MySQL database design, optimization, and complex query development',
      'SOLID principles implementation with Factory patterns and Dependency Injection',
      'Advanced logging and monitoring with Serilog for enterprise applications',
      'Document generation and processing using EPPlus and iText libraries',
      'Multi-tenant system architecture with custom branding and dynamic UI components',
      'Docker containerization and deployment using ECS/Fargate orchestration',
      'AWS services integration: RDS, SES, CodeCommit, Cognito, Route53, CloudWatch',
      'Enterprise security implementation and compliance with industry standards'
    ],
    businessImpact: [
      '180+ production tickets completed demonstrating consistent delivery',
      'Enterprise-level application development serving multiple business clients',
      'Professional growth from junior to seasoned developer in 3 years',
      'Contribution to scalable, multi-tenant SaaS platform architecture',
      'Implementation of security and compliance standards for enterprise clients'
    ],
    architectureOverview: 'Enterprise multi-tenant architecture with Blazor Server front-end, ASP.NET Core API layer, MySQL data persistence, and AWS cloud infrastructure. Microservices approach with Docker containerization and automated deployment pipelines.',
    keyFeatures: [
      'Multi-tenant SaaS platform with custom branding per client',
      'Component-based Blazor Server UI with real-time updates',
      'Enterprise security and authentication systems',
      'Advanced document generation and reporting capabilities', 
      'Scalable cloud infrastructure with monitoring and logging',
      'Custom business logic implementation for diverse client needs',
      'Performance optimization and database query tuning',
      'Automated deployment and CI/CD pipeline integration'
    ],
    techStack: [
      { name: 'Blazor Server', category: 'Frontend', version: '.NET 7.0/8.0' },
      { name: 'ASP.NET Core', category: 'Backend', version: '7.0/8.0' },
      { name: 'C#', category: 'Backend', version: '11' },
      { name: 'MySQL', category: 'Database', version: 'Latest' },
      { name: 'Serilog', category: 'DevOps', version: 'Latest' },
      { name: 'EPPlus', category: 'Backend', version: 'Latest' },
      { name: 'iText', category: 'Backend', version: 'Latest' },
      { name: 'Docker', category: 'DevOps', version: 'Latest' },
      { name: 'AWS ECS/Fargate', category: 'Cloud', version: 'Latest' },
      { name: 'AWS RDS', category: 'Cloud', version: 'Latest' },
      { name: 'AWS SES', category: 'Cloud', version: 'Latest' },
      { name: 'AWS CodeCommit', category: 'Cloud', version: 'Latest' },
      { name: 'AWS Cognito', category: 'Cloud', version: 'Latest' },
      { name: 'AWS Route53', category: 'Cloud', version: 'Latest' },
      { name: 'AWS CloudWatch', category: 'Cloud', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 50000,
      commits: 180,
      deployments: 25,
      uptime: '99.8%',
      revenue: 'Remote (3yr) 100k'
    },
    links: [
      { type: 'live', url: 'https://maxiterations.com/', label: 'Max Iterations Company' }
    ],
    image: '/projects/max-iterations.jpg',
    tags: ['Professional', 'Blazor', 'ASP.NET Core', 'C#', 'MySQL', 'AWS', 'Enterprise', 'Multi-tenant'],
    status: 'Production',
    startDate: 'Jan 2021',
    completionDate: 'Dec 2024'
  },
  {
    id: 'gcm-marketing-spa',
    title: 'Gold Clicker Mining SPA',
    subtitle: 'React Marketing Website with Real-Time Features',
    category: 'Web Development',
    description: 'React 18 marketing website with SignalR integration, professional animations, and comprehensive project documentation.',
    longDescription: 'A sophisticated single-page application built with React 18, featuring real-time activity feeds via SignalR, Chart.js data visualizations, and comprehensive tokenomics documentation. The site demonstrates modern web development practices with responsive design and performance optimization.',
    executiveSummary: 'Professional marketing website deployed via GitHub Pages with custom domain, showcasing front-end development expertise and real-time web communication skills.',
    technicalHighlights: [
      'React 18 with hooks and functional components for modern development',
      'SignalR client integration for real-time activity feed updates',
      'Chart.js integration for tokenomics and game metrics visualization',
      'TypeScript Particles for interactive background animations',
      'Framer Motion for sophisticated UI animations and transitions',
      'Responsive design with mobile-first CSS techniques',
      'Component memoization and efficient re-rendering strategies',
      'WebSocket management with automatic reconnection handling',
      'GitHub Pages deployment with custom domain configuration',
      'Performance optimization with lazy loading and code splitting'
    ],
    businessImpact: [
      'Professional brand presence with custom domain (goldclickermining.com)',
      'User engagement through interactive visualizations and animations',
      'Marketing funnel optimization for user acquisition',
      'Technical documentation demonstrating transparency',
      'SEO optimization for improved search visibility'
    ],
    architectureOverview: 'Component-based architecture with React hooks for state management. SignalR hub connection for real-time updates. Chart.js integration for data visualization. Responsive CSS with mobile-first approach.',
    keyFeatures: [
      'Real-time activity feed from production game',
      'Interactive tokenomics charts and projections',
      'Responsive design across all device sizes',
      'Professional animations and micro-interactions',
      'Comprehensive project documentation',
      'Performance-optimized loading and rendering',
      'Cross-browser compatibility testing',
      'Accessibility features and semantic HTML'
    ],
    techStack: [
      { name: 'React', category: 'Frontend', version: '18' },
      { name: 'TypeScript', category: 'Frontend', version: 'Latest' },
      { name: 'SignalR', category: 'Frontend', version: 'Latest' },
      { name: 'Chart.js', category: 'Frontend', version: 'Latest' },
      { name: 'Framer Motion', category: 'Frontend', version: 'Latest' },
      { name: 'GitHub Pages', category: 'DevOps', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 8000,
      commits: 85,
      deployments: 15
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/SPA-GoldClicker', label: 'SPA Repository' },
      { type: 'live', url: 'https://goldclickermining.com', label: 'Live Marketing Website' }
    ],
    image: '/projects/gcm-spa.jpg',
    tags: ['React', 'TypeScript', 'SignalR', 'Chart.js', 'Real-time', 'Marketing'],
    status: 'Production',
    startDate: 'Jan 2024',
    completionDate: 'Present'
  },
  {
    id: 'gcm-unity-game',
    title: 'Gold Clicker Mining Unity Game',
    subtitle: 'Cross-Platform Mobile Game with Real-Time Features',
    category: 'Game Development',
    description: 'Unity 6 mobile game with offline progression, real-time multiplayer, and AdMob monetization deployed to production.',
    longDescription: 'A comprehensive idle clicker game built with Unity 6, featuring sophisticated offline progression mathematics, real-time multiplayer chat via Firebase, and enterprise-grade monetization through AdMob with server-side verification. The game demonstrates advanced mobile game development patterns including object pooling, memory optimization, and cross-platform deployment.',
    executiveSummary: 'Production-ready mobile game generating revenue through advertising and in-app purchases, showcasing expertise in Unity development, mobile monetization, and real-time systems integration.',
    technicalHighlights: [
      'Unity 6 with Universal Render Pipeline (URP) 17.0.4 for modern graphics rendering',
      'Custom MCP Unity package integration for advanced tooling workflows',
      'Singleton pattern architecture for centralized game systems management',
      'Complex exponential progression mathematics for balanced long-term gameplay',
      'Firebase Realtime Database integration for live multiplayer chat system',
      'AdMob Server-Side Verification (SSV) for secure reward validation',
      'Cross-platform IAP system supporting Google Play and App Store',
      'Advanced save system with server-authoritative state management',
      'Object pooling and memory optimization for 60fps performance',
      'Offline progression calculations using logarithmic scaling formulas'
    ],
    businessImpact: [
      'Revenue generation through AdMob advertising integration',
      'Scalable monetization model supporting future cryptocurrency integration',
      'Production deployment demonstrating ability to ship complete products',
      'User engagement metrics tracking and optimization systems',
      'Cross-platform reach maximizing market penetration'
    ],
    architectureOverview: 'Event-driven architecture using C# delegates for decoupled system communication. Manager pattern implementation for GameManager, ScoreManager, and ProductionManager. Firebase integration for authentication and real-time data synchronization. Unity Services Core foundation for backend integration.',
    keyFeatures: [
      'Offline progression with complex mathematical modeling',
      'Real-time multiplayer chat with content moderation',
      'AdMob rewarded video ads with anti-cheat validation',
      'Cross-platform in-app purchase system',
      'Achievement system with milestone tracking',
      'Prestige mechanics with multiple progression layers',
      'Professional UI/UX with responsive design',
      'Performance monitoring and analytics integration'
    ],
    techStack: [
      { name: 'Unity 6', category: 'Game Development', version: '6.0' },
      { name: 'C#', category: 'Game Development', version: '9.0+' },
      { name: 'Universal Render Pipeline', category: 'Game Development', version: '17.0.4' },
      { name: 'Firebase', category: 'Backend', version: 'Latest' },
      { name: 'Google AdMob', category: 'Mobile', version: 'Latest' },
      { name: 'Unity IAP', category: 'Mobile', version: 'Latest' },
      { name: 'Newtonsoft JSON', category: 'Backend', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 15000,
      commits: 150,
      deployments: 12
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/GCMUnity', label: 'Unity Game Repository' },
      { type: 'live', url: 'https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker', label: 'Google Play Store' }
    ],
    image: '/projects/gcm-unity.jpg',
    tags: ['Unity', 'C#', 'Mobile', 'Firebase', 'AdMob', 'Real-time', 'Monetization'],
    status: 'Production',
    startDate: 'Jan 2024',
    completionDate: 'Present'
  },
  {
    id: 'gcm-backend-api',
    title: 'Gold Clicker Mining Backend API',
    subtitle: 'Enterprise ASP.NET Core API with PostgreSQL',
    category: 'Backend API',
    description: 'ASP.NET Core 9.0 RESTful API with PostgreSQL database, JWT authentication, and comprehensive game state management.',
    longDescription: 'A robust backend API built with ASP.NET Core 9.0, featuring Entity Framework Core 9.0 with complex relationship mapping, JWT authentication with Firebase integration, and comprehensive API documentation via Swagger/OpenAPI. The system handles game state synchronization, player management, and secure data validation.',
    executiveSummary: 'Production API deployed on Azure App Service, demonstrating enterprise-level backend development skills with modern .NET practices, database design, and cloud deployment expertise.',
    technicalHighlights: [
      'ASP.NET Core 9.0 with dependency injection and middleware pipeline',
      'Entity Framework Core 9.0 with code-first database approach',
      'PostgreSQL with optimized indexing and complex entity relationships',
      'JWT authentication system with configurable expiration and refresh tokens',
      'RESTful API design with comprehensive CRUD operations',
      'Swagger/OpenAPI documentation and testing interface',
      'Server-side validation with sanitization and anti-cheat measures',
      'CORS configuration for multiple client origins',
      'Version check middleware for client update enforcement',
      'Data Transfer Objects (DTOs) for clean API contracts'
    ],
    businessImpact: [
      'Scalable architecture supporting thousands of concurrent users',
      'Secure data management protecting user information and game progress',
      'API-first design enabling multiple client applications',
      'Professional documentation facilitating team collaboration',
      'Cloud deployment demonstrating production readiness'
    ],
    architectureOverview: 'Clean architecture with separation of concerns. Repository pattern for data access. Dependency injection for loose coupling. Middleware pipeline for cross-cutting concerns. Entity Framework for ORM with database migrations.',
    keyFeatures: [
      'Comprehensive game state management',
      'Player authentication and authorization',
      'Achievement tracking and validation',
      'Leaderboard systems with real-time updates',
      'Data validation and integrity checks',
      'Error handling and logging systems',
      'Rate limiting and abuse prevention',
      'API versioning and backward compatibility'
    ],
    techStack: [
      { name: 'ASP.NET Core', category: 'Backend', version: '9.0' },
      { name: 'C#', category: 'Backend', version: '9.0+' },
      { name: 'Entity Framework Core', category: 'Backend', version: '9.0' },
      { name: 'PostgreSQL', category: 'Database', version: '13+' },
      { name: 'JWT', category: 'Backend', version: 'Latest' },
      { name: 'Swagger/OpenAPI', category: 'Backend', version: 'Latest' },
      { name: 'Azure App Service', category: 'Cloud', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 12000,
      commits: 120,
      uptime: '99.9%',
      performance: '<200ms avg response'
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/api-cookie', label: 'Backend API Repository' },
      { type: 'live', url: 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net', label: 'Live API Endpoint' }
    ],
    image: '/projects/gcm-api.jpg',
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'JWT', 'Azure', 'RESTful API'],
    status: 'Production',
    startDate: 'Jan 2024',
    completionDate: 'Present'
  },
  {
    id: 'bigsackies-ecommerce',
    title: 'BigSackies E-commerce Platform',
    subtitle: 'Full-Stack E-commerce with $2K+ Revenue Generation',
    category: 'E-commerce',
    description: 'Complete e-commerce platform for reptile breeding business with Stripe integration, inventory management, and $2K+ in verified sales.',
    longDescription: 'A comprehensive e-commerce solution built for a specialized reptile breeding business, featuring secure payment processing via Stripe, advanced inventory management, customer relationship tools, and SEO optimization. The platform has generated over $2,000 in verified revenue, demonstrating real-world commercial success.',
    executiveSummary: '$2K+ revenue-generating e-commerce platform proving ability to build profitable business applications with secure payment processing and customer management systems.',
    technicalHighlights: [
      'Stripe payment integration with secure checkout and webhook handling',
      'Advanced inventory management with real-time stock tracking',
      'Customer relationship management (CRM) system',
      'SEO optimization with meta tags and structured data',
      'Responsive design optimized for mobile commerce',
      'Image optimization and lazy loading for fast page speeds',
      'Order management system with automated email notifications',
      'Admin dashboard for business operations management',
      'Security measures including SSL, input validation, and PCI compliance',
      'Analytics integration for business intelligence and conversion tracking'
    ],
    businessImpact: [
      '$2,000+ in verified revenue generation through online sales',
      'Automated business processes reducing manual workload',
      'Professional online presence expanding market reach',
      'Customer data insights enabling targeted marketing',
      'Scalable platform supporting business growth'
    ],
    architectureOverview: 'Full-stack architecture with secure payment processing, database-driven inventory management, and responsive front-end design. Stripe webhook integration for reliable payment handling.',
    keyFeatures: [
      'Secure Stripe payment processing with webhooks',
      'Dynamic inventory management with low-stock alerts',
      'Customer account creation and order history',
      'Advanced product search and filtering',
      'Mobile-optimized shopping experience',
      'Automated order confirmation and shipping notifications',
      'Admin dashboard for order and inventory management',
      'SEO-optimized product pages and site structure'
    ],
    techStack: [
      { name: 'React', category: 'Frontend', version: '18' },
      { name: 'Node.js', category: 'Backend', version: '18+' },
      { name: 'Stripe API', category: 'Backend', version: 'Latest' },
      { name: 'MongoDB', category: 'Database', version: '6+' },
      { name: 'Express.js', category: 'Backend', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 10000,
      revenue: '$2,000+',
      users: 150,
      commits: 95
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/BigsAckies', label: 'E-commerce Repository' },
      { type: 'live', url: 'https://biggsackies.xyz', label: 'Live E-commerce Site' }
    ],
    image: '/projects/bigsackies.jpg',
    tags: ['E-commerce', 'Stripe', 'Revenue', 'React', 'MongoDB', 'Business'],
    status: 'Production',
    startDate: 'Mar 2023',
    completionDate: 'Present'
  },
  {
    id: 'comedy-mcp-server',
    title: 'Comedy MCP Server',
    subtitle: 'Model Context Protocol Implementation',
    category: 'Developer Tools',
    description: 'Custom MCP server implementation demonstrating understanding of advanced AI integration protocols and JSON-RPC communication.',
    longDescription: 'A specialized Model Context Protocol (MCP) server built to understand and implement cutting-edge AI integration patterns. This project demonstrates deep understanding of JSON-RPC protocols, AI model context management, and the emerging standards for AI tool integration.',
    executiveSummary: 'Innovation-focused project showcasing expertise in emerging AI technologies and protocol implementation, demonstrating ability to work with cutting-edge development standards.',
    technicalHighlights: [
      'Complete MCP (Model Context Protocol) server implementation',
      'JSON-RPC 2.0 protocol handling and message routing',
      'Context management for AI model interactions',
      'Custom tool definitions and capability exposure',
      'Async/await patterns for non-blocking operations',
      'Error handling and protocol compliance validation',
      'Documentation and examples for developer adoption',
      'Type-safe implementations with proper interfaces'
    ],
    businessImpact: [
      'Demonstrates expertise in emerging AI integration standards',
      'Showcases ability to learn and implement new technologies quickly',
      'Positions for opportunities in AI tooling and integration projects',
      'Contributes to open-source ecosystem and developer community'
    ],
    architectureOverview: 'Server architecture implementing MCP specification with JSON-RPC message handling, context state management, and tool registry system.',
    keyFeatures: [
      'Full MCP protocol compliance',
      'Custom tool registration and execution',
      'Context state management across sessions',
      'Comprehensive error handling and validation',
      'Developer-friendly documentation and examples',
      'Extensible architecture for additional capabilities'
    ],
    techStack: [
      { name: 'Node.js', category: 'Backend', version: '18+' },
      { name: 'TypeScript', category: 'Backend', version: 'Latest' },
      { name: 'JSON-RPC', category: 'Backend', version: '2.0' }
    ],
    metrics: {
      linesOfCode: 3000,
      commits: 45
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/ComedyMcpServer', label: 'MCP Server Repository' }
    ],
    image: '/projects/mcp-server.jpg',
    tags: ['MCP', 'AI Integration', 'JSON-RPC', 'TypeScript', 'Innovation'],
    status: 'Development',
    startDate: 'Nov 2024',
    completionDate: 'Present'
  },
  {
    id: 'clanker-token-app',
    title: 'CLANKER Token Application',
    subtitle: 'Web3 Token Interaction Platform',
    category: 'Web Development',
    description: 'React SPA for cryptocurrency token interactions with modern UI/UX design and responsive functionality.',
    longDescription: 'A sophisticated single-page application built with React for cryptocurrency token interactions, featuring modern UI/UX design, responsive layouts, and real-time data integration. The project demonstrates expertise in frontend development and API integration.',
    executiveSummary: 'React SPA demonstrating modern frontend development skills with cryptocurrency API integration and professional user interface design.',
    technicalHighlights: [
      'React 18 with modern hooks and functional components',
      'Responsive design with mobile-first approach',
      'Real-time API integration for token price feeds',
      'Modern UI/UX with smooth animations and transitions',
      'Error handling and loading states for better UX',
      'Component-based architecture for scalability',
      'Performance optimization with lazy loading',
      'Cross-browser compatibility and testing'
    ],
    businessImpact: [
      'Demonstrates expertise in modern React development',
      'Showcases API integration and real-time data handling',
      'Professional UI/UX design increasing user engagement',
      'Scalable frontend architecture supporting business growth'
    ],
    architectureOverview: 'React-based Web3 application with ethers.js for blockchain interactions, responsive design for mobile Web3 browsers, and comprehensive error handling.',
    keyFeatures: [
      'Clean and intuitive user interface',
      'Real-time market data and price tracking', 
      'Responsive design for all device sizes',
      'Smooth animations and micro-interactions',
      'Error handling with user-friendly messaging',
      'Performance-optimized loading and rendering'
    ],
    techStack: [
      { name: 'React', category: 'Frontend', version: '18' },
      { name: 'JavaScript', category: 'Frontend', version: 'ES6+' },
      { name: 'CSS3', category: 'Frontend', version: 'Latest' },
      { name: 'HTML5', category: 'Frontend', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 5000,
      commits: 60
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/CLANKER', label: 'Token App Repository' },
      { type: 'live', url: 'https://ihateclankers.xyz', label: 'Live Web3 Application' }
    ],
    image: '/projects/clanker.jpg',
    tags: ['React', 'SPA', 'JavaScript', 'Frontend', 'UI/UX'],
    status: 'Production',
    startDate: 'Sep 2024',
    completionDate: 'Present'
  },
  {
    id: 'bap-web-app',
    title: 'BAP Web Application',
    subtitle: 'Modern React SPA with Interactive Features',
    category: 'Web Development',
    description: 'Professional React single-page application with modern UI/UX design and interactive user experience.',
    longDescription: 'A comprehensive React application showcasing modern frontend development practices, including component-based architecture, responsive design, and interactive user interfaces. The project demonstrates expertise in contemporary web development and user experience design.',
    executiveSummary: 'Professional React application demonstrating modern frontend development skills with emphasis on user experience and interactive design.',
    technicalHighlights: [
      'React 18 with modern hooks and component patterns',
      'Responsive design with mobile-first approach',
      'Interactive UI components with smooth animations',
      'State management using React hooks and context',
      'Performance optimization techniques',
      'Modern JavaScript ES6+ features',
      'CSS3 animations and transitions',
      'Cross-browser compatibility testing'
    ],
    businessImpact: [
      'Demonstrates professional frontend development capabilities',
      'Showcases modern UI/UX design principles',
      'Interactive features drive user engagement',
      'Scalable architecture supports future enhancements'
    ],
    architectureOverview: 'Component-based React architecture with modern state management, responsive styling, and optimized performance patterns.',
    keyFeatures: [
      'Interactive user interface with animations',
      'Responsive design for all screen sizes',
      'Modern component architecture',
      'Smooth user experience flows',
      'Performance-optimized rendering',
      'Professional visual design'
    ],
    techStack: [
      { name: 'React', category: 'Frontend', version: '18' },
      { name: 'JavaScript', category: 'Frontend', version: 'ES6+' },
      { name: 'CSS3', category: 'Frontend', version: 'Latest' },
      { name: 'HTML5', category: 'Frontend', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 7000,
      commits: 75
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/BAP_Web_App', label: 'BAP Web App Repository' },
      { type: 'live', url: 'https://bapcat.lol', label: 'Live Web Application' }
    ],
    image: '/projects/bap.jpg',
    tags: ['React', 'SPA', 'JavaScript', 'Frontend', 'UI/UX'],
    status: 'Production',
    startDate: 'Oct 2024',
    completionDate: 'Present'
  },
  {
    id: 'clicker-demo-legacy',
    title: 'Clicker Demo (Legacy)',
    subtitle: 'Original Game Prototype and Foundation',
    category: 'Game Development',
    description: 'Original clicker game prototype that evolved into the comprehensive Gold Clicker Mining ecosystem, demonstrating iterative development.',
    longDescription: 'The foundational prototype that sparked the entire Gold Clicker Mining ecosystem. This legacy project showcases the iterative development process and how a simple concept evolved into a comprehensive multi-platform gaming ecosystem with real revenue generation.',
    executiveSummary: 'Legacy project demonstrating iterative development methodology and the evolution from prototype to production-ready ecosystem.',
    technicalHighlights: [
      'Original game mechanics and core loop design',
      'Foundation for mathematical progression systems',
      'Early UI/UX prototyping and user testing',
      'Basic save system and state management',
      'Performance testing and optimization groundwork'
    ],
    businessImpact: [
      'Proof of concept that validated the business model',
      'Foundation for $2K+ revenue-generating ecosystem',
      'Demonstrates ability to iterate and scale projects',
      'Shows progression from prototype to production'
    ],
    architectureOverview: 'Simple prototype architecture that established the foundation for the comprehensive gaming ecosystem.',
    keyFeatures: [
      'Core clicker game mechanics',
      'Basic progression system',
      'Simple save/load functionality',
      'Foundational UI components'
    ],
    techStack: [
      { name: 'JavaScript', category: 'Frontend', version: 'ES6+' },
      { name: 'HTML5', category: 'Frontend', version: 'Latest' },
      { name: 'CSS3', category: 'Frontend', version: 'Latest' }
    ],
    metrics: {
      linesOfCode: 2000,
      commits: 25
    },
    links: [
      { type: 'github', url: 'https://github.com/Tanner253/ClickerDemo', label: 'Legacy Demo Repository' }
    ],
    image: '/projects/clicker-demo.jpg',
    tags: ['Prototype', 'Game Development', 'Legacy', 'Foundation'],
    status: 'Archived',
    startDate: 'Dec 2023',
    completionDate: 'Jan 2024'
  }
];

// Helper functions
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.status === 'Production').slice(0, 6);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(projects.map(project => project.category)));
}

export function getTotalRevenue(): number {
  // $2K from BigSackies + $1K+ from Android game + other sales = $5K+
  return 5000;
}

export function getTotalLinesOfCode(): number {
  return projects.reduce((sum, p) => sum + (p.metrics.linesOfCode || 0), 0);
}

export function getProductionProjects(): Project[] {
  return projects.filter(project => project.status === 'Production');
} 