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
'Bhavesh Barot': {
  name: 'Bhavesh Barot',
  slug: 'bhavesh-barot',
  jobTitle: 'Founder at FactoryJet | Global Enterprise Sales Leader (VP/CRO)',
  bio: 'Bhavesh Barot is a global enterprise sales leader and revenue strategist with 18+ years of experience building scalable revenue engines and high-performance sales teams across SaaS, AI, and B2B commerce platforms. He is the Founder of FactoryJet, a B2B marketplace connecting building material manufacturers directly with retailers across India. Bhavesh has successfully closed enterprise deals with more than 20 Fortune 500 companies including Nestlé, Cargill, Swiss Re, Munich Re, Fairfax Insurance, HDFC ERGO, and ICICI Lombard. Throughout his career, he has built multiple go-to-market (GTM) organizations from scratch, expanded businesses across North America, LATAM, EMEA, APAC, and India, and consistently exceeded sales targets by 120–150%. At FactoryJet, he has onboarded over 5,000 retailers and partnered with 300+ leading brands such as Philips, Havells, Crompton, Legrand, and Grohe. Bhavesh combines strategic GTM planning with hands-on enterprise sales execution, helping startups and growth-stage companies scale revenue, build strong sales cultures, and expand globally.',
  shortBio: 'Enterprise sales leader and Founder of FactoryJet with 18+ years of experience scaling SaaS and B2B marketplaces globally.',
  yearsExperience: '18+',
  image: '/bhavesh_image.jpg',
  linkedin: 'https://www.linkedin.com/in/barotbhavesh/',
  credentials: [
    '18+ years in enterprise sales and revenue leadership',
    'Closed deals with 20+ Fortune 500 companies',
    'Generated $10M+ enterprise SaaS revenue globally',
    'Built 5 GTM organizations with 90%+ quota attainment',
    'Scaled sales teams from 0 → 25+ members',
  ],
  expertiseAreas: [
    'Enterprise Sales',
    'Go-to-Market (GTM) Strategy',
    'Revenue Growth & Sales Leadership',
    'Global Market Expansion',
    'B2B Marketplace Development',
  ],
  toolsAndPlatforms: [
    'Salesforce',
    'HubSpot CRM',
    'Razorpay',
    'Rupifi API',
    'Delhivery Logistics Integration',
    'Sales Forecasting & RevOps Tools',
  ],
  industries: [
    'SaaS',
    'B2B Commerce',
    'AgriTech',
    'BFSI',
    'Supply Chain',
    'Retail & Distribution',
  ],
  knowsAbout: [
    'Enterprise SaaS Sales',
    'Revenue Operations',
    'B2B Marketplace Scaling',
    'International GTM Strategy',
    'Sales Automation & AI in Sales',
  ],
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
