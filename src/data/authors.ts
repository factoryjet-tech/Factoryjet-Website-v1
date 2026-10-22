export interface AuthorProfile {
  name: string
  slug: string
  jobTitle: string
  bio: string
  shortBio: string
  /** Long-form founder story, one string per paragraph. Rendered on the author page only. */
  story?: string[]
  /** ISO date the profile text last changed; emitted as ProfilePage dateModified. */
  dateModified?: string
  yearsExperience: string
  image: string
  /** Small copy for 48-80 px bylines; `image` stays the schema and author-page photo. */
  avatar?: string
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
  bio: 'Bhavesh Barot is the Founder and CEO of FactoryJet. He started it as a B2B ecommerce marketplace and ran the operations, money, logistics, payments and tax of that marketplace by hand, years before AI tools could help. Today FactoryJet is an ecommerce and AI services company that has served 500+ businesses. It builds and supports online stores, B2B and wholesale portals, AI agents and AI search for brands that sell on their own sites and on marketplaces. He takes discovery calls himself.',
  shortBio: 'Founder & CEO of FactoryJet, which he started as a B2B ecommerce marketplace. FactoryJet has served 500+ businesses and builds online stores, B2B portals, AI agents and AI search.',
  story: [
    'Bhavesh Barot started FactoryJet as a B2B ecommerce marketplace. Business buyers placed orders with sellers through the platform, and FactoryJet had to see each of those orders through.',
    'FactoryJet was the first platform in its market to offer Buy Now, Pay Later to B2B buyers. Buyers got instant credit approvals, and the whole credit check workflow was built into its mobile apps, through partnerships with leading B2B BNPL companies.',
    'He set out to build marketplace technology that could stand next to the best platforms in the world. Building it meant meeting every problem a seller meets. Operations. Money. Logistics. Payments. Tax. And a long list of smaller problems that never show up in a pitch deck.',
    'This was before AI. No assistant drafted the paperwork, chased overdue payments, matched payments to orders, booked trucks, filed tax returns or reconciled the books. He did all of it manually, step by step, which is how he learned where each step breaks and what a break costs the business that has to absorb it.',
    'That history is why FactoryJet understands online sellers. A brand running its own DTC store, a B2B or wholesale portal, or a catalog on Amazon, Walmart, Faire or eBay deals with the same operational, financial, logistics, payment and tax problems FactoryJet worked through first-hand. The difference now is that much of that manual work can be built into software and AI agents. FactoryJet builds that software for sellers, starting from how their business runs day to day.',
  ],
  dateModified: '2026-10-22',
  // "10+", not "25+". PRODUCT.md fixes the experience framing at decade-plus and
  // rules out 25 years explicitly. This value renders on the author page AND on
  // every blog post byline, so it was the widest-reaching instance of the claim.
  yearsExperience: '10+',
  image: '/bhavesh_image.jpg',
  avatar: '/bhavesh_avatar-240.webp',
  linkedin: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
  credentials: [
    'Founded FactoryJet as a B2B ecommerce marketplace',
    'First platform in its market to offer B2B Buy Now, Pay Later with instant credit approvals',
    '500+ businesses served',
    'Lighthouse 95+ performance standard on all FactoryJet projects',
    '7-day delivery methodology, 97% on-time delivery rate',
    'A decade-plus in digital strategy and web development business leadership',
  ],
  expertiseAreas: [
    'AI Development and AI Agent Development',
    'AI SEO: AEO, GEO and AI Overviews',
    'B2B Ecommerce and Marketplaces',
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
    'B2B Ecommerce Marketplaces',
    'Ecommerce Operations, Payments, Logistics and Sales Tax',
    'Selling on Amazon, Walmart, Faire and eBay',
    'AI Development',
    'AI Agent Development',
    'Agentic AI Development',
    'AI SEO',
    'Answer Engine Optimization (AEO)',
    'Generative Engine Optimization (GEO)',
    'AI Overviews Optimization (AIO)',
    'B2B Buy Now, Pay Later and Trade Credit',
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
