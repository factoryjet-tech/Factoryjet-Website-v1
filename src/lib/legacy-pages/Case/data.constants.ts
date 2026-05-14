
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
    challenge: 'As a creative agency, Fliying Pixel needed a website that walked the talk. Their existing portfolio was visually appealing but functionally weak—it wasn't converting visitors into inquiries. They needed a balance of stunning aesthetics and rigorous conversion rate optimization (CRO).',
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
    challenge: 'In the competitive logistics sector, trust is currency. Rukman Transport had a minimal digital presence that didn't reflect their fleet size or reliability. They were losing local B2B contracts to competitors who simply looked more professional online.',
    solution: 'We overhauled their digital brand identity and executed a hyper-local SEO strategy. We optimized their Google My Business (GMB) profile and built a professional, fast-loading website that highlighted their fleet capabilities and safety records. The result was a 300% increase in organic search visibility for high-intent keywords like "industrial transport India".',
    techStack: ['WordPress', 'Yoast SEO', 'Google Maps API', 'Schema Markup'],
    metrics: [
      { label: 'Organic Traffic', value: '+300%', trend: 'up' },
      { label: 'GMB Calls', value: '+150%', trend: 'up' },
      { label: 'B2B Contracts', value: 'Secure', trend: 'up' }
    ],
    tags: ['Local SEO', 'Logistics', 'B2B Branding']
  },

  // --- PART 2: MOCK INTERNATIONAL CASES ---
  {
    id: '8',
    slug: 'apex-fintech-london',
    client: 'Apex FinTech',
    location: 'London, UK',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    title: 'Bank-Grade Security & 40% Lower Bounce Rate',
    snippet: 'Moving from legacy HTML to Next.js for security and speed.',
    challenge: 'Apex FinTech's legacy platform was failing security audits and suffering from slow load times, causing a high bounce rate among tech-savvy users. They needed a modernization partner who understood both performance and strict financial compliance regulations.',
    solution: 'FactoryJet re-architected their frontend using Next.js with strict Content Security Policies (CSP). We implemented server-side rendering (SSR) for blazing fast initial loads and integrated Auth0 for bank-grade identity management. The new interface is not only secure but fluid, reducing bounce rates by 40%.',
    techStack: ['Next.js', 'TypeScript', 'Auth0', 'AWS Lambda'],
    metrics: [
      { label: 'Bounce Rate', value: '-40%', trend: 'down' },
      { label: 'Security Score', value: 'A+', trend: 'up' },
      { label: 'Load Time', value: '0.5s', trend: 'down' }
    ],
    tags: ['FinTech Security', 'Next.js Migration', 'Performance']
  },
  {
    id: '9',
    slug: 'solaris-energy-sydney',
    client: 'Solaris Energy',
    location: 'Sydney, Australia',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
    title: '200% Increase in Qualified Solar Leads',
    snippet: 'CRM Implementation (HubSpot) + Lead Scoring for solar installations.',
    challenge: 'Solaris was generating leads but failing to convert them due to slow follow-up times. Their sales team was overwhelmed with low-quality inquiries, missing out on high-value commercial installation opportunities.',
    solution: 'We implemented a sophisticated HubSpot CRM workflow with automated lead scoring. Leads are now qualified instantly based on location, energy usage, and budget. High-priority leads are routed immediately to top sales agents. This automation increased qualified lead conversion by 200%.',
    techStack: ['HubSpot CRM', 'Zapier', 'React', 'Google Ads API'],
    metrics: [
      { label: 'Qualified Leads', value: '+200%', trend: 'up' },
      { label: 'Response Time', value: '<5 Mins', trend: 'down' },
      { label: 'Sales Velocity', value: '2x', trend: 'up' }
    ],
    tags: ['CRM Automation', 'Lead Scoring', 'Renewable Tech']
  },
  {
    id: '10',
    slug: 'velvet-oak-dubai',
    client: 'Velvet & Oak',
    location: 'Dubai, UAE',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    title: '$50M in Property Sales via 3D Web Experience',
    snippet: 'High-end, 3D interactive website (Three.js) for selling off-plan properties.',
    challenge: 'Selling off-plan luxury villas requires immersion. Static images were not enough to convince international investors to commit millions to unbuilt properties in Dubai's competitive market.',
    solution: 'We built a cinematic, WebGL-powered experience using Three.js and React Fiber. Users can take hyper-realistic 3D walkthroughs of the villas directly in the browser, changing finishes and lighting in real-time. This immersive confidence-builder led to the complete sell-out of two major projects online.',
    techStack: ['Three.js', 'React Three Fiber', 'WebGL', 'Blender'],
    metrics: [
      { label: 'Project Value', value: '$50M+', trend: 'up' },
      { label: 'Dwell Time', value: '12m', trend: 'up' },
      { label: 'Units Sold', value: '100%', trend: 'up' }
    ],
    tags: ['3D Web', 'Luxury Real Estate', 'WebGL']
  },
  {
    id: '11',
    slug: 'medicore-health-nyc',
    client: 'MediCore Health',
    location: 'New York, USA',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    title: 'Secure Telehealth: 10,000+ Consultations Handled',
    snippet: 'Custom React Dashboard for patient management. HIPAA Compliant.',
    challenge: 'MediCore needed to scale their telehealth operations rapidly but faced strict HIPAA data privacy constraints. Their off-the-shelf software was clunky and insecure.',
    solution: 'We developed a custom, HIPAA-compliant patient management dashboard. It features encrypted video consultations, secure document storage, and seamless scheduling. The platform has successfully handled over 10,000 patient consultations with zero downtime or security breaches.',
    techStack: ['React', 'WebRTC', 'Node.js', 'PostgreSQL (Encrypted)'],
    metrics: [
      { label: 'Consultations', value: '10k+', trend: 'up' },
      { label: 'Uptime', value: '99.99%', trend: 'up' },
      { label: 'Compliance', value: 'HIPAA', trend: 'up' }
    ],
    tags: ['HealthTech', 'HIPAA', 'Custom Dashboard']
  },
  {
    id: '12',
    slug: 'nordic-auto-berlin',
    client: 'Nordic Auto Parts',
    location: 'Berlin, Germany',
    category: 'E-Comm',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop',
    title: '2x Speed & 35% Conversion Lift: Shopify Plus Migration',
    snippet: 'Handling 50,000 SKUs and complex European tax rules.',
    challenge: 'Nordic Auto Parts was struggling with Magento's maintenance costs and slow performance. They needed to manage 50,000 SKUs across multiple European countries, each with complex VAT rules.',
    solution: 'We executed a massive migration to Shopify Plus. We used Shopify Scripts to automate complex EU VAT calculations at checkout. We also implemented a headless frontend for the product catalog to ensure instant search and filtering across their massive inventory. Load times dropped by half, boosting conversions by 35%.',
    techStack: ['Shopify Plus', 'Algolia', 'Vue.js', 'Liquid'],
    metrics: [
      { label: 'Load Speed', value: '2x Faster', trend: 'up' },
      { label: 'Conversion', value: '+35%', trend: 'up' },
      { label: 'SKUs', value: '50k', trend: 'up' }
    ],
    tags: ['E-Commerce Migration', 'Shopify Plus', 'EU Tax Logic']
  },
  {
    id: '13',
    slug: 'eduverse-singapore',
    client: 'Eduverse',
    location: 'Singapore',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
    title: 'Gamifying Education: 50,000 Monthly Active Users',
    snippet: 'Building a gamified learning platform for K-12 students using MERN stack.',
    challenge: 'Student engagement was low on Eduverse's legacy platform. Students found the content boring and retention rates were plummeting.',
    solution: 'We completely rebuilt the LMS using the MERN stack, introducing "Gamification" mechanics. Students now earn XP, badges, and unlock levels as they learn. We used WebSockets for real-time multiplayer quizzes. The platform now hosts 50,000 active monthly users who spend 3x more time learning.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    metrics: [
      { label: 'MAU', value: '50k', trend: 'up' },
      { label: 'Retention', value: '3x', trend: 'up' },
      { label: 'Uptime', value: '99.9%', trend: 'up' }
    ],
    tags: ['EdTech', 'Gamification', 'MERN Stack']
  },
  {
    id: '14',
    slug: 'pacific-logistics-california',
    client: 'Pacific Logistics',
    location: 'California, USA',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop',
    title: 'Saving $2M Annually with Custom ERPNext Logic',
    snippet: 'Custom ERPNext implementation for a shipping giant.',
    challenge: 'Pacific Logistics was losing money due to inefficient route planning and container tracking. Off-the-shelf software was too rigid for their complex multi-modal shipping operations.',
    solution: 'We customized ERPNext to handle their specific logistical workflows. We built a custom module for container tracking that integrates with port APIs. This visibility allowed them to optimize routes and reduce demurrage charges, saving the company over $2M annually in operational inefficiencies.',
    techStack: ['ERPNext', 'Frappe Framework', 'Python', 'Google Maps API'],
    metrics: [
      { label: 'Annual Savings', value: '$2M', trend: 'up' },
      { label: 'Efficiency', value: '+40%', trend: 'up' },
      { label: 'Tracking', value: '100%', trend: 'up' }
    ],
    tags: ['ERP Customization', 'Logistics Tech', 'Cost Reduction']
  },
  {
    id: '15',
    slug: 'pure-organics-toronto',
    client: 'Pure Organics',
    location: 'Toronto, Canada',
    category: 'E-Comm',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    title: 'Scaling Subscription Revenue to $100k MRR',
    snippet: 'WooCommerce Subscriptions setup with custom churn-reduction logic.',
    challenge: 'Pure Organics had a great product but high churn. Customers were cancelling because they couldn't easily pause or skip deliveries.',
    solution: 'We built a highly flexible subscription portal on WooCommerce. We added custom "Save the Sale" logic that offers discounts or "Skip Month" options when a user tries to cancel. This friction-reducing UI helped stabilize their revenue, pushing them to $100k Monthly Recurring Revenue.',
    techStack: ['WooCommerce', 'React', 'Stripe', 'PHP'],
    metrics: [
      { label: 'MRR', value: '$100k', trend: 'up' },
      { label: 'Churn Rate', value: '-15%', trend: 'down' },
      { label: 'LTV', value: '+25%', trend: 'up' }
    ],
    tags: ['Subscription Model', 'WooCommerce', 'Retention']
  },
  {
    id: '16',
    slug: 'zenith-law-london',
    client: 'Zenith Law',
    location: 'London, UK',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
    title: 'Dominating "Corporate Litigation" Search in UK',
    snippet: 'AIO/AEO Strategy to rank for 500+ legal keywords.',
    challenge: 'Zenith Law was invisible in a saturated legal market. They needed to generate high-value corporate leads without spending a fortune on PPC.',
    solution: 'We executed a "Topic Cluster" content strategy optimized for AIO. We created authoritative guides on UK Corporate Law that directly answered complex questions. This signaled expertise to Google and AI engines, earning them Featured Snippets for over 500 competitive keywords.',
    techStack: ['WordPress', 'Yoast', 'Semrush', 'Schema Pro'],
    metrics: [
      { label: 'Keywords', value: '500+', trend: 'up' },
      { label: 'Featured Snippets', value: 'Dominant', trend: 'up' },
      { label: 'Lead Quality', value: 'High', trend: 'up' }
    ],
    tags: ['Legal SEO', 'AIO Strategy', 'Content Marketing']
  },
  {
    id: '17',
    slug: 'buildsmart-texas',
    client: 'BuildSmart',
    location: 'Texas, USA',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    title: 'Saving 15 Hours/Week with Custom Field App',
    snippet: 'Mobile App (React Native) for field workers to upload site photos/reports.',
    challenge: 'Project managers at BuildSmart were spending half their week driving between sites to collect physical reports and photos. Information flow was slow and error-prone.',
    solution: 'We developed a React Native mobile app for field workers. They can now snap photos, tag issues, and submit daily reports directly from the job site, even offline. The data syncs automatically when they regain connectivity. This saved managers an average of 15 hours per week.',
    techStack: ['React Native', 'Firebase', 'Google Cloud', 'Maps API'],
    metrics: [
      { label: 'Time Saved', value: '15hr/wk', trend: 'up' },
      { label: 'Reporting', value: 'Instant', trend: 'up' },
      { label: 'Adoption', value: '100%', trend: 'up' }
    ],
    tags: ['Mobile App', 'Construction Tech', 'Field Ops']
  },
  {
    id: '18',
    slug: 'aura-cosmetics-paris',
    client: 'Aura Cosmetics',
    location: 'Paris, France',
    category: 'E-Comm',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop',
    title: 'Award-Winning Headless Commerce Experience',
    snippet: 'Using Sanity CMS + Next.js for a highly visual, editorial shopping experience.',
    challenge: 'Aura needed a site that felt like a fashion magazine but converted like Amazon. Standard Shopify templates were too rigid for their editorial-heavy brand storytelling.',
    solution: 'We built a "Headless" commerce solution using Sanity CMS for rich content management and Next.js for the frontend, connected to Shopify specifically for checkout. This allowed for fluid animations, video backgrounds, and unique layouts that captivated users, driving a high 4.8% conversion rate.',
    techStack: ['Sanity CMS', 'Next.js', 'Shopify Storefront API', 'Framer Motion'],
    metrics: [
      { label: 'Conversion Rate', value: '4.8%', trend: 'up' },
      { label: 'Design Award', value: 'Winner', trend: 'up' },
      { label: 'Avg Order Value', value: '+20%', trend: 'up' }
    ],
    tags: ['Headless Commerce', 'Beauty Tech', 'Brand Storytelling']
  },
  {
    id: '19',
    slug: 'gulf-oil-riyadh',
    client: 'Gulf Oil Traders',
    location: 'Riyadh, Saudi Arabia',
    category: 'Logistics',
    image: 'https://images.jdmagicbox.com/comp/def_content/ncat_id/oil-hsrupcl.jpg',
    title: 'Digitizing B2B Orders: 90% Shift to Online',
    snippet: 'Secure portal for bulk ordering and invoice management for B2B partners.',
    challenge: 'Gulf Oil Traders relied on phone calls and fax machines for massive bulk orders. This led to errors, lost invoices, and frustration for their B2B partners.',
    solution: 'We developed a secure, multi-language B2B customer portal. Partners can now log in, view their specific negotiated rates, place bulk orders, and download tax invoices instantly. The convenience was so high that 90% of their order volume shifted to the digital platform within 6 months.',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'SAP Integration'],
    metrics: [
      { label: 'Digital Adoption', value: '90%', trend: 'up' },
      { label: 'Order Errors', value: '~0%', trend: 'down' },
      { label: 'Admin Time', value: '-60%', trend: 'down' }
    ],
    tags: ['B2B Portal', 'Digital Transformation', 'Oil & Gas']
  },
  {
    id: '20',
    slug: 'techstream-ai-sf',
    client: 'TechStream AI',
    location: 'San Francisco, USA',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    title: 'Securing $5M Seed Round with Crystal Clear Messaging',
    snippet: 'Motion-heavy (Framer Motion) landing page explaining complex LLM tech.',
    challenge: 'TechStream had groundbreaking technology but a confusing story. Investors couldn't grasp the complexity of their LLM infrastructure from their static slide deck.',
    solution: 'We built a scroll-triggered, interactive storytelling site using Framer Motion. As users scroll, complex diagrams animate and simplify, visually explaining the "how" behind the tech. The clarity and polish of the site were cited by lead investors as a key factor in closing their $5M seed round.',
    techStack: ['React', 'Framer Motion', 'Lottie', 'Next.js'],
    metrics: [
      { label: 'Funding Secured', value: '$5M', trend: 'up' },
      { label: 'Investor Interest', value: 'High', trend: 'up' },
      { label: 'Time on Site', value: '4m 30s', trend: 'up' }
    ],
    tags: ['Startup Fundraising', 'Interactive Web', 'Visual Storytelling']
  }
];