import { 
  Palette, Code, Zap, Shield, 
  Layout, ShoppingCart, Activity, Search,
  Globe, CheckCircle, Compass, PenTool, Code2, 
  FileText, Rocket, PiggyBank, Heart
} from 'lucide-react';

export const NAVIGATION = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact-form' },
];

export const HERO_CONTENT = {
  headline: "Build Faster. Rank Higher. Scale Without Limits.",
  subheadline: "Elite Webflow Development for Growth-Focused US Businesses",
  description: "Your website is your primary growth engine in the digital economy. But traditional web development is broken—WordPress is slow and plugin-dependent, custom code costs $50k+ and locks you in, DIY builders lack enterprise SEO power.\n\nEnter Webflow—and the FactoryJet AI-Native approach.\n\nWe combine Webflow's visual power with AI-accelerated workflows to deliver enterprise-grade websites 60-75% faster and 40-50% more affordably than traditional agencies.",
  ctas: {
    primary: "Start Your Project ($1,999)",
    secondary: "View Our Work",
    tertiary: "Book Strategy Call (Free)"
  },
  stats: [
    "500+ websites launched",
    "60-75% faster delivery",
    "40-50% cost savings",
    "Zero maintenance required",
    "Enterprise AWS hosting included"
  ]
};

export const PROBLEMS = [
  {
    title: "WordPress is Broken",
    icon: Activity,
    points: ["Slow loading (plugin bloat)", "Security vulnerabilities", "Constant updates required", "Developer dependency", "Hidden maintenance costs"]
  },
  {
    title: "Custom Code is Expensive",
    icon: Code,
    points: ["$50,000+ average cost", "3-6 month timelines", "Complete developer dependency", "Difficult to update", "Vendor lock-in risks"]
  },
  {
    title: "DIY Builders are Limited",
    icon: Layout,
    points: ["Template restrictions", "Poor SEO performance", "Amateur appearance", "Limited customization", "Can't compete at elite level"]
  }
];

export const SOLUTIONS = [
  {
    title: "Total Design Freedom",
    description: "Unlike rigid templates, Webflow offers a complete visual canvas. Build anything you imagine—complex animations, 3D interactions, unconventional layouts. If it can be designed in Figma, we build it in Webflow.",
    icon: Palette,
    size: "large"
  },
  {
    title: "Clean Code = Superior SEO",
    description: "Google loves clean code. Webflow generates W3C-compliant, semantic HTML/CSS/JavaScript. Combined with our AI SEO strategies, Webflow sites consistently outrank WordPress competitors.",
    icon: Code,
    size: "medium"
  },
  {
    title: "Marketing Agility",
    description: "Your team updates content as easily as editing Google Docs—no developer required. Test landing pages, publish content, run campaigns at the speed of business with the Webflow Editor.",
    icon: Zap,
    size: "medium"
  },
  {
    title: "Enterprise-Grade Infrastructure",
    description: "AWS Hosting with Fastly CDN, Free SSL certificates included, Zero maintenance required, 99.9% uptime guaranteed, No security vulnerabilities.",
    icon: Shield,
    size: "large"
  }
];

export const SERVICES = [
  {
    title: "Figma to Webflow Conversion",
    category: "Build",
    price: "Starting at: $1,999",
    description: "Transform your designs into production-ready websites. Pixel-perfect responsive adaptation across all devices. We respect design intent while optimizing for performance.",
    icon: Layout,
    keywords: "Figma to Webflow, pixel-perfect development",
    features: ["Responsive adaptation (Desktop/Tablet/Mobile)", "Interaction fidelity (Webflow 2.0)", "Client-First class naming", "Performance optimization"]
  },
  {
    title: "Custom Website Design & Build",
    category: "Design",
    price: "Starting at: $4,999",
    description: "World-class UI/UX from our AI-native design team. Rapid prototyping using AI tools. Brand-aligned, conversion-focused designs built for growth.",
    icon: Palette,
    keywords: "Webflow design agency, custom sites",
    features: ["AI-assisted rapid prototyping", "Brand identity development", "Conversion-optimized layouts", "Strategic CTA placement"]
  },
  {
    title: "Webflow CMS Development",
    category: "Build",
    price: "Starting at: $2,999",
    description: "Architect complex CMS collections for blogs, case studies, team directories, and programmatic SEO pages. Generate thousands of landing pages from single templates.",
    icon: Globe,
    keywords: "Webflow CMS, dynamic content, content management",
    features: ["Blog and magazine systems", "Team/portfolio directories", "Case study showcases", "Programmatic SEO capabilities"]
  },
  {
    title: "Webflow E-Commerce",
    category: "Build",
    price: "Starting at: $7,999",
    description: "Boutique brand shopping experiences with complete design control. Custom product pages, branded checkout, seamless payment integration.",
    icon: ShoppingCart,
    keywords: "Webflow ecommerce, custom checkout",
    features: ["Custom product layouts", "Branded checkout design", "Stripe/PayPal integration", "Digital & physical products"]
  },
  {
    title: "Webflow Interactions & Animations",
    category: "Design",
    price: "Add-on: $999-$4,999",
    description: "Make your site unforgettable with motion design. Scroll interactions, parallax effects, Lottie integrations, and GSAP timeline animations.",
    icon: Activity,
    keywords: "Webflow interactions, Lottie animations, GSAP",
    features: ["Scroll-triggered animations", "Parallax depth effects", "Lottie file integration", "GSAP custom animations"]
  },
  {
    title: "Webflow SEO & AI Visibility",
    category: "SEO",
    price: "Add-on: $399/month",
    description: "Dominate search engines and AI platforms. Technical SEO, schema markup, 301 redirects, GEO optimization for ChatGPT/Perplexity/Gemini citations.",
    icon: Search,
    keywords: "Webflow SEO, GEO, AEO optimization",
    features: ["Technical SEO implementation", "Schema markup (JSON-LD)", "301 redirect management", "AI engine optimization"]
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery & Strategy",
    duration: "Days 1-3",
    description: "We deep-dive into your brand, audience, and competitors. Our AI tools analyze market gaps to build a data-backed site architecture.",
    deliverables: ["Brand & Competitor Audit", "Sitemap Architecture", "Project Roadmap"],
    icon: Compass,
    color: "blue"
  },
  {
    id: 2,
    title: "Design & Prototyping",
    duration: "Days 4-10",
    description: "Visualizing the user journey. We move from wireframes to high-fidelity designs, focusing on conversion pathways and brand alignment.",
    deliverables: ["UX Wireframes", "High-Fidelity UI Mockups", "Interactive Prototype"],
    icon: PenTool,
    color: "indigo"
  },
  {
    id: 3,
    title: "Development",
    duration: "Days 11-21",
    description: "Turning designs into pixel-perfect code. We build using Client-First methodology for clean, scalable, and maintainable structures.",
    deliverables: ["Responsive Webflow Build", "CMS Configuration", "Third-party Integrations"],
    icon: Code2,
    color: "violet"
  },
  {
    id: 4,
    title: "Content & SEO",
    duration: "Days 18-25",
    description: "Optimizing for visibility. We migrate content, implement technical SEO schemas, and ensure your site speaks to both humans and search engines.",
    deliverables: ["Content Migration", "On-page SEO Setup", "Schema Markup Implementation"],
    icon: FileText,
    color: "teal"
  },
  {
    id: 5,
    title: "Testing & Launch",
    duration: "Days 26-30",
    description: "The final countdown. Rigorous QA testing across devices, DNS configuration, and a smooth go-live process.",
    deliverables: ["Cross-browser QA Testing", "Performance Optimization", "DNS Setup & Launch"],
    icon: Rocket,
    color: "emerald"
  }
];

export const STATS_DATA = [
  {
    id: 1,
    value: 500,
    prefix: "",
    suffix: "+",
    label: "Websites Launched",
    desc: "Across 12+ industries",
    icon: Globe,
    gradient: "bg-gradient-to-br from-[#0052CC] to-[#003380]", // Jet Blue
    shadow: "shadow-blue-500/40"
  },
  {
    id: 2,
    value: 75,
    prefix: "60-",
    suffix: "%",
    label: "Faster Delivery",
    desc: "Compared to traditional agencies",
    icon: Zap,
    gradient: "bg-gradient-to-br from-[#FF6B35] to-[#CC4410]", // Jet Orange
    shadow: "shadow-orange-500/40"
  },
  {
    id: 3,
    value: 50,
    prefix: "40-",
    suffix: "%",
    label: "Cost Savings",
    desc: "On development & maintenance",
    icon: PiggyBank,
    gradient: "bg-gradient-to-br from-[#10B981] to-[#059669]", // Jet Green
    shadow: "shadow-emerald-500/40"
  },
  {
    id: 4,
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Based on post-launch surveys",
    icon: Heart,
    gradient: "bg-gradient-to-br from-violet-600 to-indigo-600", // Purple/Blue
    shadow: "shadow-violet-500/40"
  }
];

export const TRUSTED_BRANDS = [
  { name: "TechFlow", color: "#3B82F6" }, 
  { name: "Nexus", color: "#10B981" }, 
  { name: "Gravitas", color: "#8B5CF6" }, 
  { name: "Velocity", color: "#F59E0B" }, 
  { name: "Apex", color: "#EF4444" }, 
  { name: "Zenith", color: "#EC4899" }
];

export const PRICING_TIERS = [
  {
    name: "LAUNCH",
    price: 1999,
    priceLabel: "One-time fixed price",
    idealFor: "Startups, landing pages",
    features: ["Up to 5 pages", "Mobile-responsive design", "Basic CMS setup", "Contact forms", "SEO foundations", "30-day support", "Webflow hosting setup"],
    timeline: "2 weeks",
    cta: "Start Launch Package",
    popular: false
  },
  {
    name: "GROW",
    price: 4999,
    priceLabel: "One-time fixed price",
    idealFor: "SMBs, content-rich sites",
    features: ["Up to 15 pages", "Advanced CMS (blog, case studies)", "Custom animations", "Figma to Webflow conversion", "Enhanced SEO", "Form integrations", "60-day support"],
    timeline: "3-4 weeks",
    cta: "Start Grow Package",
    popular: true
  },
  {
    name: "SCALE",
    price: 7999,
    priceLabel: "Custom quoted",
    idealFor: "Enterprises, complex sites",
    features: ["Pages scoped per project", "E-commerce capabilities", "Complex CMS architecture", "Advanced interactions (GSAP)", "Programmatic SEO", "Third-party integrations", "Priority support (90 days)", "Dedicated project manager"],
    timeline: "4-5 weeks",
    cta: "Request Custom Quote",
    popular: false
  },
];

export const ADD_ONS = [
  { name: "Maintenance & Growth", price: "Annual Maintenance: $99/month" },
  { name: "AI SEO Growth", price: "$399/month" },
  { name: "Content Updates", price: "$149/hour" }
];

export const TECHNOLOGIES = [
  {
    title: "Client-First Methodology",
    icon: Layout,
    description: "We build using Finsweet's Client-First class naming convention—organized, human-readable code that any developer can understand and maintain.",
    benefits: ["Scalable architecture", "Easy maintenance", "Clear documentation", "Future-proof structure"]
  },
  {
    title: "Performance Optimized",
    icon: Zap,
    description: "Every site is optimized for Core Web Vitals. WebP images, lazy loading, efficient code ensure sub-2-second load times.",
    benefits: ["<2s page load time", "90+ PageSpeed score", "Optimized asset delivery", "Minimal JavaScript"]
  },
  {
    title: "SEO Architecture",
    icon: Search,
    description: "Built-in technical SEO foundations including semantic HTML, schema markup, clean URL structures, and optimized meta tags.",
    benefits: ["Auto-generated sitemaps", "Clean slug structures", "Open graph tags", "Schema markup (JSON-LD)"]
  },
  {
    title: "Security & Hosting",
    icon: Shield,
    description: "AWS infrastructure with Fastly CDN, free SSL certificates, DDoS protection, and 99.9% uptime guarantee. Zero maintenance required.",
    benefits: ["SOC 2 Type II compliance", "Free SSL certificates", "DDoS protection", "Automatic backups"]
  }
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: "SaaS Startup Launch",
    industry: "B2B SaaS",
    timeline: "3 weeks",
    challenge: "Needed professional web presence before Series A fundraising. Required modern design, fast turnaround, and conversion optimization.",
    solution: "FactoryJet built a 10-page Webflow site with CMS blog, custom animations, and Figma-perfect design implementation.",
    results: ["Launched in 3 weeks (vs. 8-week quote from competitors)", "4.8% visitor-to-demo conversion rate", "Successfully raised $2M Series A", "Zero maintenance issues in 12 months"],
    testimonial: {
      quote: "FactoryJet delivered in 3 weeks what our previous agency couldn't do in 3 months. The site is beautiful, fast, and converts like crazy.",
      author: "Sarah Chen",
      role: "CEO, CloudMetrics"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "E-Commerce Brand Migration",
    industry: "Fashion DTC",
    timeline: "5 weeks",
    challenge: "Slow Shopify site hurting conversions. Needed custom product page layouts and branded checkout experience.",
    solution: "Migrated to Webflow E-Commerce with custom product templates, animations, and optimized checkout flow.",
    results: ["62% improvement in page load speed", "38% increase in conversion rate", "$180K additional monthly revenue", "Reduced bounce rate from 68% to 41%"],
    testimonial: {
      quote: "The custom product pages are stunning. Our conversion rate jumped 38% in the first month. Best investment we made.",
      author: "Marcus Rodriguez",
      role: "Founder, Urban Thread Co."
    },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Professional Services Rebrand",
    industry: "Legal Services",
    timeline: "4 weeks",
    challenge: "Outdated WordPress site with poor mobile experience. Needed modern, trustworthy design with attorney profiles and case results.",
    solution: "Complete Webflow redesign with advanced CMS for attorney bios, case studies, and blog. Mobile-first responsive design.",
    results: ["214% increase in mobile traffic", "89% improvement in Core Web Vitals", "#1 ranking for 15+ local keywords", "45% increase in consultation requests"],
    testimonial: {
      quote: "Our old site was embarrassing. FactoryJet built us a site that looks like we belong in the big leagues.",
      author: "Jennifer Park",
      role: "Managing Partner, Park Legal Group"
    },
    image: "https://images.unsplash.com/photo-1454165804606-c3d65ef47da1?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQ_DATA = [
  {
    category: "General Webflow Questions",
    items: [
      { q: "Is Webflow good for SEO compared to WordPress?", a: "Absolutely. Webflow is often superior for SEO out of the box. It generates cleaner, semantic code without plugin bloat, offers native control over meta tags and schema markup, and loads incredibly fast—a key Google ranking factor." },
      { q: "Do I own my Webflow website?", a: "Yes. The design, content, and code belong to you. On paid plans, you can export HTML/CSS/JavaScript if you ever leave (though CMS functionality doesn't export)." },
      { q: "Can Webflow handle high traffic?", a: "Yes. Webflow uses AWS and Fastly CDN infrastructure—the same technology used by major tech companies. It handles massive traffic spikes without issues." },
      { q: "How secure is Webflow?", a: "Extremely secure. Free SSL certificates, SOC 2 Type II compliance, DDoS protection, and no plugin vulnerabilities make it more secure than WordPress." },
      { q: "Is Webflow hard to maintain?", a: "No. Webflow is zero-maintenance. Unlike WordPress, you never update plugins, themes, or PHP versions. Webflow handles all updates automatically." }
    ]
  },
  {
    category: "Pricing & Costs",
    items: [
      { q: "How much does Webflow hosting cost?", a: "For most businesses, the CMS Plan ($23/month billed yearly) is ideal. Business Plan ($39/month) for more bandwidth. E-commerce starts at $29/month." },
      { q: "Why is FactoryJet pricing lower than other agencies?", a: "Our AI-native workflow reduces development hours by 60%. We pass efficiency savings to you—offering enterprise quality starting at $1,999." },
      { q: "Are there hidden fees?", a: "No. You pay for site hosting (directly to Webflow) and our development fee. No surprise charges for plugins or security services." }
    ]
  },
  {
    category: "Features & Capabilities",
    items: [
      { q: "Can I migrate my WordPress blog to Webflow?", a: "Yes. We export WordPress posts and import them into Webflow CMS, including 301 redirects to preserve SEO rankings." },
      { q: "Can Webflow integrate with HubSpot/Salesforce?", a: "Yes. We integrate with major CRMs using native connections, Zapier, or Make.com. Forms send leads directly to your CRM." },
      { q: "Is Webflow good for e-commerce?", a: "Excellent for boutique brands with <1,000 products. Complete design control over checkout and product pages. For 10k+ SKUs, consider Shopify." },
      { q: "Can you add member areas or client portals?", a: "Yes. Webflow's native Memberships feature gates content. For advanced needs, we integrate Memberstack, Wized, or Xano." },
      { q: "What is \"Client-First\" and why use it?", a: "Client-First is Finsweet's class naming convention. It ensures organized, human-readable code that's easy for any developer to maintain." },
      { q: "Does Webflow support multi-language sites?", a: "Yes. Webflow's native Localization features allow content customization for different languages and regions." }
    ]
  },
  {
    category: "Design & Customization",
    items: [
      { q: "Can you convert Figma designs to Webflow?", a: "Yes, this is our specialty. Pixel-perfect Figma to Webflow conversion ensuring the live site matches your design exactly." },
      { q: "Are Webflow sites mobile-friendly?", a: "All sites are mobile-responsive by default. We manually optimize for Desktop, Tablet, Mobile Landscape, and Mobile Portrait breakpoints." },
      { q: "Can I use custom fonts?", a: "Yes. Upload custom font files (WOFF, TTF, OTF) or connect Google Fonts and Adobe Fonts directly." },
      { q: "What animations can Webflow do?", a: "Webflow's Interactions 2.0 engine handles parallax scrolling, mouse-movement interactions, reveal animations, and Lottie integration." }
    ]
  },
  {
    category: "Support & Process",
    items: [
      { q: "How long does Webflow development take?", a: "With AI acceleration: 2-5 weeks typically. Launch Package (~2 weeks), Scale Package (4-5 weeks)." },
      { q: "Can I edit the website myself?", a: "Yes. Webflow Editor allows text and image updates right on the page—like editing Word documents. We provide training." },
      { q: "Do you provide post-launch support?", a: "Yes. All packages include 30 days post-launch support. Annual Maintenance Contracts available starting at $99/month." },
      { q: "What if Webflow doesn't have a feature I need?", a: "Webflow allows custom code embeds. We can code custom functionality or integrate third-party tools (Finsweet Attributes, etc.)." },
      { q: "Can I export code from Webflow?", a: "Yes. On paid workspace plans, export HTML/CSS/JavaScript to host on your own server (CMS functionality won't export)." },
      { q: "Does Webflow work for programmatic SEO?", a: "Yes. Using Webflow CMS with tools like Whalesync or Parabola, generate thousands of SEO landing pages from spreadsheet data." },
      { q: "Why choose FactoryJet over a freelancer?", a: "Agency guarantee: full expert team, fixed pricing, guaranteed timeline, ongoing support—often comparable to senior freelancer rates." }
    ]
  }
];