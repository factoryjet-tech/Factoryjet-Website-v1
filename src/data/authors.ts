export interface AuthorProfile {
  name: string
  slug: string
  jobTitle: string
  bio: string
  shortBio: string
  yearsExperience: string
  image: string
  linkedin?: string
  twitter?: string
  credentials: string[]
  expertiseAreas: string[]
  toolsAndPlatforms: string[]
  industries: string[]
  knowsAbout: string[]
}

export const AUTHORS: Record<string, AuthorProfile> = {
  'Amit Verma': {
    name: 'Amit Verma',
    slug: 'amit-verma',
    jobTitle: 'Senior Tech Journalist & Web Strategy Analyst',
    bio: 'Amit Verma is a seasoned technology journalist and web strategy analyst with over 8+ years of experience covering digital transformation, web development trends, and e-commerce innovation. He has contributed in-depth analysis for enterprise brands, SaaS startups, and manufacturing companies transitioning to digital-first operations. Amit specializes in breaking down complex web technologies into actionable business insights, with a focus on performance optimization, conversion architecture, and AI-driven development workflows.',
    shortBio: 'Senior Tech Journalist with 8+ years of experience in web strategy and digital transformation.',
    yearsExperience: '8+',
    image: `https://ui-avatars.com/api/?name=Amit+Verma&background=0052CC&color=fff&size=256`,
    linkedin: 'https://www.linkedin.com/company/factoryjet',
    credentials: [
      '8+ years in technology journalism',
      'Covered 200+ web development case studies',
      'Google Analytics & Search Console certified',
      'Specialized in SaaS, D2C & Manufacturing sectors',
    ],
    expertiseAreas: [
      'Web Performance Optimization',
      'Digital Transformation Strategy',
      'E-Commerce Architecture',
      'AI-Driven Development Workflows',
      'Conversion Rate Optimization',
    ],
    toolsAndPlatforms: ['Next.js', 'React', 'Shopify', 'WordPress', 'Google Analytics', 'GA4', 'Search Console'],
    industries: ['SaaS', 'Manufacturing', 'D2C', 'Enterprise', 'E-Commerce'],
    knowsAbout: ['Web Development Trends', 'Digital Strategy', 'E-Commerce Innovation', 'Performance Optimization', 'AI in Web Development'],
  },
  'Sarah Jenkins': {
    name: 'Sarah Jenkins',
    slug: 'sarah-jenkins',
    jobTitle: 'SEO Strategist & Technical Content Lead',
    bio: 'Sarah Jenkins is a technical content lead and SEO strategist with 6+ years of experience in search engine optimization, content strategy, and technical writing. She has helped businesses across multiple industries improve organic visibility through data-driven content frameworks, structured data implementation, and Core Web Vitals optimization. Sarah combines deep technical SEO knowledge with compelling storytelling to create content that ranks and converts.',
    shortBio: 'SEO Strategist with 6+ years of experience in technical content and search optimization.',
    yearsExperience: '6+',
    image: `https://ui-avatars.com/api/?name=Sarah+Jenkins&background=7C3AED&color=fff&size=256`,
    linkedin: 'https://www.linkedin.com/company/factoryjet',
    credentials: [
      '6+ years in SEO & technical content',
      'Managed SEO for 80+ websites',
      'Google Search Console & Ahrefs expert',
      'Specialized in Technical SEO & Content Strategy',
    ],
    expertiseAreas: [
      'Technical SEO Audits',
      'Content Strategy & Planning',
      'Core Web Vitals Optimization',
      'Structured Data Implementation',
      'Search Intent Analysis',
    ],
    toolsAndPlatforms: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'WordPress', 'Webflow'],
    industries: ['Technology', 'SaaS', 'E-Commerce', 'Local Businesses', 'Agencies'],
    knowsAbout: ['SEO Strategy', 'Technical SEO', 'Content Marketing', 'Search Intent Optimization', 'AI-Optimized Content'],
  },
  'Rajesh Kumar': {
    name: 'Rajesh Kumar',
    slug: 'rajesh-kumar',
    jobTitle: 'Full-Stack Developer & Enterprise Solutions Architect',
    bio: 'Rajesh Kumar is a full-stack developer and enterprise solutions architect with 10+ years of hands-on experience building scalable web applications, ERP integrations, and e-commerce platforms. He has worked with Fortune 500 companies and high-growth startups alike, specializing in Next.js, React, and cloud-native architectures. Rajesh brings deep technical expertise in API design, database optimization, and frontend performance to every piece he writes.',
    shortBio: 'Full-Stack Developer with 10+ years of experience in enterprise web solutions.',
    yearsExperience: '10+',
    image: `https://ui-avatars.com/api/?name=Rajesh+Kumar&background=059669&color=fff&size=256`,
    linkedin: 'https://www.linkedin.com/company/factoryjet',
    credentials: [
      '10+ years in full-stack development',
      'Built 50+ enterprise web applications',
      'AWS & Azure certified architect',
      'Specialized in ERP integrations & API design',
    ],
    expertiseAreas: [
      'Enterprise Web Architecture',
      'ERP & CRM Integration',
      'API Design & Development',
      'Database Optimization',
      'Cloud-Native Applications',
    ],
    toolsAndPlatforms: ['Next.js', 'React', 'Node.js', 'AWS', 'Azure', 'PostgreSQL', 'MongoDB'],
    industries: ['Enterprise', 'Manufacturing', 'Fintech', 'Healthcare', 'SaaS'],
    knowsAbout: ['Full-Stack Development', 'Enterprise Architecture', 'ERP Integration', 'Cloud Infrastructure', 'Performance Engineering'],
  },
  'Vikram Malhotra': {
    name: 'Vikram Malhotra',
    slug: 'vikram-malhotra',
    jobTitle: 'UX Designer & Conversion Optimization Specialist',
    bio: 'Vikram Malhotra is a UX designer and conversion optimization specialist with 7+ years of experience crafting high-converting digital experiences for B2B and B2C brands. His work spans user research, design systems, A/B testing, and data-driven UX strategy. Vikram has helped businesses increase conversion rates by up to 300% through evidence-based design decisions, trust signal architecture, and behavioral psychology principles applied to web interfaces.',
    shortBio: 'UX Designer with 7+ years of experience in conversion optimization and design strategy.',
    yearsExperience: '7+',
    image: `https://ui-avatars.com/api/?name=Vikram+Malhotra&background=DC2626&color=fff&size=256`,
    linkedin: 'https://www.linkedin.com/company/factoryjet',
    credentials: [
      '7+ years in UX design & CRO',
      'Increased conversion rates by 300% for clients',
      'Google Optimize & VWO expert',
      'Specialized in B2B & High-Ticket Sales UX',
    ],
    expertiseAreas: [
      'User Experience Design',
      'Conversion Rate Optimization',
      'A/B Testing & Experimentation',
      'Trust Signal Architecture',
      'Design Systems',
    ],
    toolsAndPlatforms: ['Figma', 'Adobe XD', 'Google Optimize', 'VWO', 'Hotjar', 'Mixpanel'],
    industries: ['B2B', 'D2C', 'SaaS', 'E-Commerce', 'Real Estate'],
    knowsAbout: ['UX Design', 'Conversion Optimization', 'Color Psychology', 'Trust Signals', 'Behavioral Design'],
  },
  'Priya Singh': {
    name: 'Priya Singh',
    slug: 'priya-singh',
    jobTitle: 'Mobile-First Strategist & Digital Marketing Expert',
    bio: 'Priya Singh is a mobile-first strategist and digital marketing expert with 5+ years of experience in mobile UX, voice search optimization, and omnichannel marketing. She specializes in helping Indian businesses leverage WhatsApp Business, mobile commerce, and vernacular content strategies to reach wider audiences. Priya combines marketing automation expertise with deep understanding of mobile user behavior to create strategies that drive measurable engagement and revenue growth.',
    shortBio: 'Mobile-First Strategist with 5+ years of experience in digital marketing and mobile UX.',
    yearsExperience: '5+',
    image: `https://ui-avatars.com/api/?name=Priya+Singh&background=D97706&color=fff&size=256`,
    linkedin: 'https://www.linkedin.com/company/factoryjet',
    credentials: [
      '5+ years in mobile strategy & digital marketing',
      'Managed mobile campaigns for 60+ brands',
      'WhatsApp Business API specialist',
      'Specialized in Voice Search & Mobile Commerce',
    ],
    expertiseAreas: [
      'Mobile-First Design Strategy',
      'Voice Search Optimization',
      'WhatsApp Business Integration',
      'Marketing Automation',
      'Omnichannel User Experience',
    ],
    toolsAndPlatforms: ['WhatsApp Business', 'Google Ads', 'Facebook Ads', 'Mailchimp', 'Shopify', 'Firebase'],
    industries: ['Retail', 'D2C', 'Local Businesses', 'Manufacturing', 'FMCG'],
    knowsAbout: ['Mobile Marketing', 'Voice Search', 'WhatsApp Commerce', 'Marketing Automation', 'Vernacular Content'],
  },
  'Anjali Gupta': {
    name: 'Anjali Gupta',
    slug: 'anjali-gupta',
    jobTitle: 'Web Performance Engineer & Core Web Vitals Specialist',
    bio: 'Anjali Gupta is a web performance engineer with 6+ years of experience optimizing website speed, Core Web Vitals, and image delivery pipelines for high-traffic websites. She has worked with e-commerce platforms processing millions of monthly visitors, specializing in lazy loading strategies, CDN architecture, and next-gen image formats. Anjali is passionate about making the web faster and more accessible for users on all devices and connection speeds.',
    shortBio: 'Web Performance Engineer with 6+ years of experience in Core Web Vitals and speed optimization.',
    yearsExperience: '6+',
    image: `https://ui-avatars.com/api/?name=Anjali+Gupta&background=0891B2&color=fff&size=256`,
    linkedin: 'https://www.linkedin.com/company/factoryjet',
    credentials: [
      '6+ years in web performance engineering',
      'Optimized 100+ high-traffic websites',
      'Google Lighthouse & WebPageTest expert',
      'Specialized in Image Optimization & CDN Architecture',
    ],
    expertiseAreas: [
      'Core Web Vitals Optimization',
      'Image Performance & Lazy Loading',
      'CDN Architecture & Configuration',
      'Server-Side Rendering Performance',
      'Accessibility & Progressive Enhancement',
    ],
    toolsAndPlatforms: ['Lighthouse', 'WebPageTest', 'Cloudflare', 'AWS CloudFront', 'Next.js', 'Vercel'],
    industries: ['E-Commerce', 'Media', 'SaaS', 'Publishing', 'Enterprise'],
    knowsAbout: ['Web Performance', 'Core Web Vitals', 'Image Optimization', 'CDN Strategy', 'Accessibility'],
  },
}

export function getAuthorByName(name: string): AuthorProfile | undefined {
  return AUTHORS[name]
}

export function getAuthorBySlug(slug: string): AuthorProfile | undefined {
  return Object.values(AUTHORS).find((author) => author.slug === slug)
}

export function getAllAuthors(): AuthorProfile[] {
  return Object.values(AUTHORS)
}
