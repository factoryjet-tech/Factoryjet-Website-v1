
import { CaseStudy } from './data.types';

export const CATEGORIES = [
  'All', 
  'E-Comm', 
  'SaaS', 
  'Manufacturing', 
  'FinTech', 
  'Real Estate',
  'Healthcare',
  'Logistics',
  'Corporate'
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  // --- PART 1: REAL CASES ---
  {
    id: '1',
    slug: 'belle-maison-ecommerce-success',
    client: 'Belle Maison',
    location: 'India',
    category: 'E-Comm',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    title: 'Scaling DTC Luxury Retail to ₹1.5 Cr in 120 Days',
    metaTitle: 'Belle Maison: ₹1.5 Cr in 120 Days — Case Study | FactoryJet',
    snippet: 'Launched wholesale & retail store with 800+ products. AI-enhanced imagery and powerful product SEO.',
    challenge: 'Belle Maison faced a classic scaling bottleneck. Managing inventory for 800+ SKUs across both wholesale (B2B) and retail (DTC) channels manually was causing stock discrepancies. Their existing digital presence was fragmented, with slow load times and no automated marketing, resulting in a high cart abandonment rate and low repeat purchase frequency.',
    solution: 'FactoryJet engineered a unified Shopify Plus architecture that synced inventory in real-time. We implemented an AI-driven product photography workflow to enhance visuals without costly shoots. Crucially, we integrated Klaviyo for automated abandoned cart recovery and personalized B2B sequencing. The frontend was optimized for Core Web Vitals, ensuring sub-second load times even with high-res imagery.',
    techStack: ['Shopify Plus', 'Klaviyo', 'React', 'Node.js', 'Redis'],
    metrics: [
      { label: 'Revenue (120 Days)', value: '₹1.5 Cr', trend: 'up' },
      { label: 'SKUs Managed', value: '800+', trend: 'up' },
      { label: 'Conversion Rate', value: '3.8%', trend: 'up' }
    ],
    testimonial: {
      quote: "They transformed our digital presence. We went from manual spreadsheets to a fully automated revenue engine.",
      author: "Ricky B.",
      role: "Founder"
    },
    tags: ['DTC Strategy', 'B2B Automation', 'AI Visuals']
  },
  {
    id: '3',
    slug: 'impulse-branding-migration',
    client: 'Impulse Branding',
    location: 'India',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    title: 'Rapid Migration to Modern Stack Driving ₹3 Cr Revenue',
    metaTitle: 'Impulse Branding: ₹3 Cr Revenue Migration | FactoryJet',
    snippet: 'Migrated to modern stack (WordPress + Breakdance) in just 2 weeks. 15+ pages fully optimized.',
    challenge: 'Impulse Branding was stuck on a legacy HTML site that was impossible to update without a developer. This rigidity meant their portfolio was always outdated, costing them bids on major contracts. They needed a rapid transformation to showcase their new architectural projects before a major industry summit.',
    solution: 'FactoryJet executed a lightning-fast migration to a modern WordPress + Breakdance setup in just 14 days. We built a dynamic portfolio system that allows their non-technical team to upload projects instantly. The site was optimized for GEO (Generative Engine Optimization), resulting in a 125% increase in organic traffic and ₹3 Cr in influenced pipeline revenue within 6 months.',
    techStack: ['WordPress', 'Breakdance', 'PHP', 'MySQL', 'Cloudflare'],
    metrics: [
      { label: 'Revenue (6 Mo)', value: '₹3 Cr', trend: 'up' },
      { label: 'Dev Time', value: '2 Weeks', trend: 'down' },
      { label: 'Organic Traffic', value: '+125%', trend: 'up' }
    ],
    tags: ['Rapid Dev', 'GEO SEO', 'Migration']
  },
  {
    id: '4',
    slug: 'formative-concepts-bim',
    client: 'Formative Concepts',
    location: 'India',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
    title: 'From Zero to 5,000 Global Visitors: BIM Consulting Scale-Up',
    metaTitle: 'Formative Concepts: 5K Global Visitors — Case Study | FactoryJet',
    snippet: 'Brand new 20+ page site. Went from ZERO to 5000 global visitors. Optimized for AIO/GEO.',
    challenge: 'Formative Concepts, a specialized MEP & BIM consultancy, had zero digital footprint. They relied entirely on word-of-mouth, limiting their ability to attract international clients. They needed a digital presence that demonstrated technical expertise and established trust immediately.',
    solution: 'We launched a comprehensive 20+ page digital ecosystem. The content strategy was engineered for "Consultative SEO," targeting specific technical queries used by decision-makers. By optimizing for AIO, the brand began appearing in AI-generated answers for niche BIM queries. This strategy generated 30+ high-value international leads in the first 4 months.',
    techStack: ['React', 'Gatsby', 'Contentful', 'Netlify'],
    metrics: [
      { label: 'Revenue (4 Mo)', value: '₹90 Lakh', trend: 'up' },
      { label: 'Monthly Visitors', value: '5,000+', trend: 'up' },
      { label: 'Global Leads', value: '30+', trend: 'up' }
    ],
    tags: ['BIM Consulting', 'Global SEO', 'Lead Gen']
  },
  {
    id: '5',
    slug: 'grofresh-manufacturing-erp',
    client: 'GroFresh Agro',
    location: 'India',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    title: '70% Efficiency Gain: Digitizing Manufacturing Operations',
    metaTitle: '70% Efficiency Gain: Manufacturing ERP — Case Study | FactoryJet',
    snippet: 'Implemented a robust ERP that digitized entire operation—from sourcing to finance.',
    challenge: 'GroFresh was running a multi-crore manufacturing operation using Tally and disjointed spreadsheets. This created data silos, inventory leakage, and delayed financial reporting. They needed a unified ERP solution to bring transparency to their supply chain and production lines.',
    solution: 'We replaced their legacy systems with a custom ERP implementation tailored to food processing workflows. The new system digitized everything from raw material sourcing to final dispatch. Real-time dashboards now provide the leadership team with instant insights into production yields and wastage, improving overall operational efficiency by 70%.',
    techStack: ['ERPNext', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: [
      { label: 'Efficiency', value: '+70%', trend: 'up' },
      { label: 'Paperwork', value: '-90%', trend: 'down' },
      { label: 'Data Latency', value: 'Real-time', trend: 'down' }
    ],
    tags: ['ERP Implementation', 'Digital Transformation', 'Supply Chain']
  },
  {
    id: '6',
    slug: 'fliying-pixel-agency',
    client: 'Fliying Pixel',
    location: 'India',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    title: 'Generating 500+ Organic Leads via High-Performance Design',
    snippet: 'Designed website with powerful lead gen forms. Generated over 500 leads purely from organic traffic.',
    challenge: 'As a creative agency, Fliying Pixel needed a website that walked the talk. Their existing portfolio was visually appealing but functionally weak—it wasn\'t converting visitors into inquiries. They needed a balance of stunning aesthetics and rigorous conversion rate optimization (CRO).',
    solution: 'We deployed a visually rich website with highly optimized conversion funnels. We utilized WIX Studio for its design flexibility but superimposed a custom SEO and AIO strategy layer. By creating high-value content pillars around their services, we drove a massive influx of organic traffic, resulting in over 500 qualified leads without paid ads.',
    techStack: ['Wix Studio', 'Velo API', 'Google Analytics 4', 'Zapier'],
    metrics: [
      { label: 'Organic Leads', value: '500+', trend: 'up' },
      { label: 'Traffic Growth', value: '300%', trend: 'up' },
      { label: 'Client Retention', value: '95%', trend: 'up' }
    ],
    tags: ['Agency Growth', 'Organic SEO', 'CRO']
  },
  {
    id: '7',
    slug: 'rukman-transport-logistics',
    client: 'Rukman Transport',
    location: 'India',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    title: '300% Organic Traffic Surge for Logistics Leader',
    snippet: 'Transformed digital presence. Google rankings and GMB profile improved drastically.',
    challenge: 'In the competitive logistics sector, trust is currency. Rukman Transport had a minimal digital presence that didn\'t reflect their fleet size or reliability. They were losing local B2B contracts to competitors who simply looked more professional online.',
    solution: 'We overhauled their digital brand identity and executed a hyper-local SEO strategy. We optimized their Google My Business (GMB) profile and built a professional, fast-loading website that highlighted their fleet capabilities and safety records. The result was a 300% increase in organic search visibility for high-intent keywords like "industrial transport India".',
    techStack: ['WordPress', 'Yoast SEO', 'Google Maps API', 'Schema Markup'],
    metrics: [
      { label: 'Organic Traffic', value: '+300%', trend: 'up' },
      { label: 'GMB Calls', value: '+150%', trend: 'up' },
      { label: 'B2B Contracts', value: 'Secure', trend: 'up' }
    ],
    tags: ['Local SEO', 'Logistics', 'B2B Branding']
  }

  // PART 2 (mock international cases) removed 2026-05-27 evening.
  // 13 fabricated case studies (Apex FinTech London, Solaris Energy Sydney,
  // Velvet & Oak Dubai, MediCore Health NYC, Nordic Auto Parts Berlin,
  // Eduverse Singapore, Pacific Logistics California, Pure Organics Toronto,
  // Zenith Law London, BuildSmart Texas, Aura Cosmetics Paris,
  // Gulf Oil Traders Riyadh, TechStream AI SF) were deleted to remove
  // credibility / AEO / GEO liability. See Report 22 for full context.
  // 301 redirects for the 13 deleted slugs live in public/_redirects.
];