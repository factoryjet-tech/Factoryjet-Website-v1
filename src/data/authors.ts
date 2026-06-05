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
  jobTitle: 'Founder & CEO',
  bio: 'Bhavesh Barot is the Founder and CEO of FactoryJet, a web design and e-commerce development agency that has served 500+ businesses across the US, UK, and UAE since 1999. Under his leadership, FactoryJet has delivered professional websites, Shopify stores, and custom web applications for small businesses, DTC brands, law firms, real estate agencies, and professional service providers — consistently achieving Lighthouse 100/100 performance scores and Core Web Vitals compliance. Bhavesh brings 25+ years of digital strategy and business development experience to his writing, with direct exposure to how website quality affects lead generation, conversion rates, and organic search visibility for small businesses. He has evaluated hundreds of web design agency proposals, developed FactoryJet\'s 7-day delivery methodology, and built the pricing frameworks that allow US small businesses to access enterprise-grade web development at a fixed, published price. His work has been informed by direct client relationships across Austin TX, Miami FL, Denver CO, Nashville TN, and other US markets.',
  shortBio: 'Founder & CEO of FactoryJet — web design and e-commerce agency serving 500+ US, UK, and UAE businesses since 1999. Expert in small business website strategy, Shopify development, and Core Web Vitals optimization.',
  yearsExperience: '25+',
  image: '/bhavesh_image.jpg',
  linkedin: 'https://www.linkedin.com/in/barotbhavesh/',
  credentials: [
    '500+ websites delivered to US, UK, and UAE clients since 1999',
    'Lighthouse 100/100 performance standard on all FactoryJet projects',
    '7-day delivery guarantee methodology — 97% on-time delivery rate',
    'Direct experience with web design agency pricing across US, UK, and offshore markets',
    '25+ years in digital strategy and web development business leadership',
  ],
  expertiseAreas: [
    'Web Design & Development Strategy',
    'Shopify and E-Commerce Development',
    'Small Business Website Optimization',
    'Core Web Vitals & Technical SEO',
    'Agency Selection and Vendor Evaluation',
  ],
  toolsAndPlatforms: [
    'Next.js',
    'WordPress & WooCommerce',
    'Shopify',
    'Google PageSpeed Insights / Lighthouse',
    'Google Search Console',
    'Cloudflare',
  ],
  industries: [
    'Small Business Web Design',
    'E-Commerce & DTC Brands',
    'Law Firm & Legal Services',
    'Real Estate',
    'Professional Services',
    'SaaS & Tech Startups',
  ],
  knowsAbout: [
    'Web Design Agency Selection for Small Businesses',
    'Website Cost Benchmarks for US Small Businesses',
    'Shopify vs Custom Website Trade-offs',
    'Core Web Vitals and Google Search Ranking',
    'Offshore vs US Web Agency Comparison',
    'WCAG Accessibility Compliance',
    'Technical SEO for Small Business Websites',
    'E-Commerce Development and Shopify',
  ],
},
  'Rajesh Kumar': {
    name: 'Rajesh Kumar',
    slug: 'rajesh-kumar',
    jobTitle: 'Full-Stack Developer',
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
    jobTitle: 'UX Designer',
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
    jobTitle: 'Mobile-First Strategist',
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
    jobTitle: 'Web Performance Engineer',
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
