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
  bio: 'Bhavesh Barot is the Founder and CEO of FactoryJet, an ecommerce and AI services company that has served 500+ businesses across the US, UK, UAE, and India. He started FactoryJet in 2014 as a B2B marketplace for construction materials in India, and today leads the team that designs, builds, implements, and supports online stores, B2B portals, AI agents, AI search and SEO, and websites for DTC and B2B brands. He takes discovery calls himself and writes about ecommerce architecture, AI agents, and how buyers find vendors through Google and AI assistants.',
  shortBio: 'Founder & CEO of FactoryJet, an ecommerce and AI services company that has served 500+ businesses across the US, UK, UAE, and India. Writes about ecommerce builds, AI agents, and AI search.',
  // "10+", not "25+". PRODUCT.md fixes the experience framing at decade-plus and
  // rules out 25 years explicitly. This value renders on the author page AND on
  // every blog post byline, so it was the widest-reaching instance of the claim.
  yearsExperience: '10+',
  image: '/bhavesh_image.jpg',
  linkedin: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
  credentials: [
    '500+ websites delivered to US, UK, and UAE clients',
    'Lighthouse 95+ performance standard on all FactoryJet projects',
    '7-day delivery methodology, 97% on-time delivery rate',
    'Direct experience with web design agency pricing across US, UK, and offshore markets',
    'A decade-plus in digital strategy and web development business leadership',
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
  // NOTE: Rajesh Kumar, Vikram Malhotra, Priya Singh and Anjali Gupta were removed
  // on 2026-08-04. They were not real people: generated ui-avatars.com initials in
  // place of a photograph, linkedin pointing at the company page rather than a
  // personal profile, invented credentials, and zero articles published. Person
  // schema ships on every page, so an invented expert is the worst possible E-E-A-T
  // signal. Bhavesh Barot is the only real author. Do not re-add persona authors.
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
