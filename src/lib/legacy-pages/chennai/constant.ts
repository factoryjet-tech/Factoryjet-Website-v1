import { FAQItem, ServiceItem, CaseStudy, Testimonial } from './data.types';
import {
  Layout,
  Globe,
  ShoppingCart,
  Building,
  Car,
  Server,
  HeartPulse,
  GraduationCap,
  Factory,
  RefreshCw,
  Cpu,
  Landmark,
  ShoppingBag,
  Clapperboard,
  Monitor,
  PenTool,
  Database,
  Cloud,
  Zap,
  Shield,
} from "lucide-react";

export const TRUST_BADGES = [
  "500+ Websites Delivered",
  "100+ Chennai Clients",
  "4.9★ Google Rating",
  "7-Day Delivery",
  "ISO Certified",
];

export const SOCIAL_PROOF_METRICS = [
  { val: "500+", label: "Projects Delivered" },
  { val: "100+", label: "Chennai Clients" },
  { val: "25+", label: "Years Experience" },
  { val: "98%", label: "Client Satisfaction" },
  { val: "7 Days", label: "Average Delivery" },
];

export const SERVICES: (ServiceItem & { icon: any; colSpan?: number })[] = [
  {
    title: "Starter Website Package",
    price: "₹29,999",
    description:
      "Perfect for: New businesses, freelancers, personal brands. Launch your Chennai business online with a professional 5-page website that makes the right first impression.",
    features: [
      "5 Custom-designed pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form with WhatsApp",
      "Google Maps integration",
      "Social media links",
      "1-year free hosting",
      "SSL certificate",
      "7-day delivery",
    ],
    ctaText: "Get Started →",
    icon: Layout,
  },
  {
    title: "Business Website Package",
    price: "₹59,999",
    description:
      "Perfect for: Growing SMBs, professional services, agencies. Establish authority with a comprehensive business website designed for lead generation and credibility.",
    features: [
      "10 Custom pages",
      "Advanced SEO + GEO optimization",
      "Blog setup (5 starter articles)",
      "Lead capture with CRM",
      "Live chat widget",
      "Google Analytics + Search Console",
      "Speed optimization (90+)",
      "2-year hosting included",
    ],
    ctaText: "Get Started →",
    icon: Globe,
  },
  {
    title: "E-Commerce Website Package",
    price: "₹99,999",
    description:
      "Perfect for: Retail brands, D2C businesses, online stores. Launch a complete online store with everything you need to sell across Chennai and beyond.",
    features: [
      "WooCommerce/Shopify setup",
      "Up to 100 product listings",
      "Payment gateway integration",
      "Shipping integration",
      "Inventory management",
      "Order tracking",
      "Abandoned cart recovery",
      "14-day delivery",
    ],
    ctaText: "Get Started →",
    icon: ShoppingCart,
  },
  {
    title: "Corporate Website Package",
    price: "₹1,49,999",
    description:
      "Perfect for: Large enterprises, corporations. Enterprise-grade website with advanced functionality for established Chennai corporations.",
    features: [
      "Unlimited custom pages",
      "Multi-language support",
      "Advanced UI/UX design",
      "Investor relations section",
      "Career portal with job board",
      "News/Media center",
      "Advanced security",
      "21-day delivery",
    ],
    ctaText: "Get Started →",
    icon: Building,
    colSpan: 1,
  },
  {
    title: "Automobile Industry Website",
    price: "₹79,999",
    description:
      "Specialized for Chennai's automobile sector – India's Detroit. Perfect for Dealers, manufacturers, auto parts, service centers.",
    features: [
      "Vehicle inventory showcase",
      "Model comparison tools",
      "EMI calculator",
      "Service booking system",
      "Spare parts catalog",
      "Dealer locator",
      "Test drive scheduling",
      "Lead management",
    ],
    ctaText: "Get Started →",
    icon: Car,
  },
  {
    title: "IT Services Company Website",
    price: "₹69,999",
    description:
      "Professional presence for Chennai's thriving IT sector with lead generation focus. Perfect for Software companies, IT services, SaaS.",
    features: [
      "Service showcase pages",
      "Technology stack display",
      "Case study/portfolio",
      "Client testimonials system",
      "Blog with thought leadership",
      "Meeting scheduler",
      "B2B SEO optimization",
    ],
    ctaText: "Get Started →",
    icon: Server,
  },
  {
    title: "Healthcare Website Package",
    price: "₹89,999",
    description:
      "HIPAA-aware healthcare website with patient engagement features. Perfect for Hospitals, clinics, diagnostic centers.",
    features: [
      "Doctor profiles",
      "Online appointment booking",
      "Patient portal readiness",
      "Health blog",
      "Insurance partner listing",
      "Lab report download",
      "Emergency contact features",
    ],
    ctaText: "Get Started →",
    icon: HeartPulse,
  },
  {
    title: "Education Institution Website",
    price: "₹69,999",
    description:
      "Comprehensive education website with admission and engagement features. Perfect for Schools, colleges, coaching centers.",
    features: [
      "Course/program catalog",
      "Online admission form",
      "Fee structure display",
      "Faculty profiles",
      "Event calendar",
      "Gallery/virtual tour",
      "Placement records",
    ],
    ctaText: "Get Started →",
    icon: GraduationCap,
  },
  {
    title: "B2B Industrial Portal",
    price: "₹2,50,000",
    description:
      "Complete B2B digital platform for Chennai's manufacturing and industrial sector. Perfect for Manufacturers, distributors, exporters.",
    features: [
      "Product catalog with specs",
      "Bulk inquiry system",
      "Dealer portal",
      "Quote request functionality",
      "Technical docs library",
      "Order management integration",
      "Multi-currency display",
    ],
    ctaText: "Get Started →",
    icon: Factory,
    colSpan: 2,
  },
  {
    title: "Website Redesign Package",
    price: "₹39,999",
    description:
      "Transform your existing website with modern design and improved performance. Perfect for businesses with outdated websites.",
    features: [
      "Complete design overhaul",
      "Content migration",
      "SEO preservation (301s)",
      "Speed optimization",
      "Mobile responsiveness fix",
      "New CMS implementation",
      "Security updates",
      "14-day delivery",
    ],
    ctaText: "Get Started →",
    icon: RefreshCw,
  },
];

export const INDUSTRIES = [
  {
    name: "IT & Software Services",
    description:
      "Chennai's IT Corridor Expertise. OMR hosts 800+ software companies. We understand SaaS, B2B lead gen, and corporate sites.",
    icon: Cpu,
  },
  {
    name: "Automobile & Auto Components",
    description:
      "India's Detroit Digital Partner. From dealer websites to parts catalogs to service booking systems.",
    icon: Car,
  },
  {
    name: "Manufacturing & Industrial",
    description:
      "B2B Digital for Chennai's Manufacturing Hub. Guindy and Ambattur house thousands of manufacturers. We build B2B portals.",
    icon: Factory,
  },
  {
    name: "Healthcare & Hospitals",
    description:
      "Digital Health Solutions. Apollo, MIOT, and hundreds of providers trust digital for patient engagement.",
    icon: HeartPulse,
  },
  {
    name: "Banking, Finance & Insurance",
    description:
      "Secure Financial Platforms. We build secure, compliant websites for NBFCs and fintech startups on OMR.",
    icon: Landmark,
  },
  {
    name: "Education & EdTech",
    description:
      "Academic Digital Excellence. From Anna University to coaching centers, effective digital presence for admissions.",
    icon: GraduationCap,
  },
  {
    name: "Retail & E-Commerce",
    description:
      "Tamil Nadu's Retail Digital. T. Nagar to Phoenix Mall – we build stores that compete with marketplaces.",
    icon: ShoppingBag,
  },
  {
    name: "Media & Entertainment",
    description:
      "Kollywood Digital. We serve production houses, music labels, OTT platforms, and celebrity brands.",
    icon: Clapperboard,
  },
];

export const PRICING_TABS = {
  website: [
    {
      name: "STARTER",
      tagline: "Launchpad",
      price: "₹29,999",
      suffix: "+ GST",
      isPopular: false,
      sections: {
        CORE: ["5 Pages", "WordPress/React Basics", "Responsive"],
        SEO: ["XML Sitemap", "Basic Meta", "Google Maps"],
        PERFORMANCE: ["Standard Caching", "Auto-Resize Images"],
        SECURITY: ["Standard HTTPS", "Basic Login Protection", "ReCaptcha v2"],
        CONVERSION: ["Click-to-Call", "Standard Forms"],
        HOSTING: ["99% Uptime"],
      },
    },
    {
      name: "BUSINESS",
      tagline: "Growth",
      price: "₹59,999",
      suffix: "+ GST",
      isPopular: true,
      popularTag: "MOST POPULAR CHOICE",
      sections: {
        CORE: [
          "12 Pages",
          "Hybrid AI Architecture",
          "Mobile-first Indexing",
          "Legacy Browser Support",
        ],
        SEO: [
          "Advanced Robots.txt",
          "Open Graph Tags",
          "Schema.org (JSON-LD)",
          "G-Business Profile",
        ],
        PERFORMANCE: [
          "Lighthouse 90+",
          "WebP Compression",
          "Cloudflare CDN",
          "Database Query Opt",
        ],
        SECURITY: [
          "Military-Grade SSL",
          "Brute Force Protection",
          "ReCaptcha v3",
          "Daily Cloud Backups",
        ],
        CONVERSION: [
          "Sticky Bottom Bar",
          "WhatsApp Widget",
          "Multi-Step Forms",
          "GA4 Setup",
          "Insta Feed",
        ],
        HOSTING: ["99.9% Uptime", "Unmetered Bandwidth"],
      },
    },
    {
      name: "ENTERPRISE",
      tagline: "Dominance",
      price: "₹1,19,999",
      suffix: "+ GST",
      isPopular: false,
      sections: {
        CORE: [
          "20+ Dynamic Pages",
          "Next.js/Headless",
          "PWA Ready",
          "Retina Support",
        ],
        SEO: [
          "Log File Analysis",
          "Twitter Cards",
          "Voice Search (AEO)",
          "Local Citations",
        ],
        PERFORMANCE: [
          'Core Web Vitals "Green"',
          "Lazy Loading",
          "Global Edge Network",
          "Redis Object Caching",
        ],
        SECURITY: [
          "Wildcard SSL",
          "DDoS Mitigation",
          "Enterprise Spam Firewall",
          "Real-Time Redundant Backups",
        ],
        CONVERSION: [
          "Exit Intent Popups",
          "AI Chatbot Ready",
          "CRM Integration",
          "Heatmaps",
          "Auto-Social Posting",
        ],
        HOSTING: ["99.99% Uptime", "High-Frequency Compute"],
      },
    },
  ],
  ecommerce: [
    {
      name: "SHOP STARTER",
      tagline: "Validation",
      price: "₹59,999",
      suffix: "+ GST",
      isPopular: false,
      sections: {
        "CORE FEATURES": [
          "20 Products",
          "Standard Checkout",
          "Guest Checkout",
          "Basic Coupons",
          "Star Ratings",
          "Basic Search",
          "Razorpay/UPI",
          "Flat Rate Shipping",
          "Simple Tax",
          "Email Receipt",
          "Meta Titles",
          "Alt Tags",
        ],
      },
    },
    {
      name: "SHOP PRO",
      tagline: "Bestseller",
      price: "₹99,999",
      suffix: "+ GST",
      isPopular: true,
      popularTag: "MOST POPULAR CHOICE",
      sections: {
        ARCH: [
          "100 Products",
          "Variable Products",
          "One-Page Checkout",
          "Customer Dashboard",
        ],
        MARKETING: [
          "Dynamic Discounts",
          "Photo Reviews",
          "Abandoned Cart Email",
          "Related Products",
          "Ajax Live Search",
        ],
        PAYMENTS: [
          "Multi-Gateway (COD+Credit)",
          "Live Shipping Rates",
          "Auto GST Calc",
          "PDF Invoices",
        ],
        "SEO/TECH": [
          "Product Schema",
          "Auto-Alt Tags",
          "High-Perf Database mode",
        ],
        MGMT: [
          "Low Stock Alerts",
          "Advanced Sales Reports",
          "Order CSV Export",
        ],
      },
    },
    {
      name: "E-COMM EMPIRE",
      tagline: "Scale",
      price: "₹1,99,999",
      suffix: "+ GST",
      isPopular: false,
      sections: {
        ARCH: [
          "Unlimited Products",
          "Bundled/Digital",
          "Distraction-Free Checkout",
          "Social Login",
        ],
        MARKETING: [
          "BOGO Logic",
          "Verified Badges",
          "SMS/WhatsApp Notifs",
          "In-Cart Upsells",
          "AI Search & Filter",
        ],
        PAYMENTS: [
          "International (Stripe)",
          "Pincode Check",
          "Multi-State Tax",
          "GST Tax Invoices",
        ],
        "SEO/TECH": [
          "Google Merchant Feed",
          "Video Gallery",
          "Redis Caching for Store",
        ],
        MGMT: ["Multi-Warehouse", "Cohort Analysis", ""],
      },
    },
  ],
  amc: [
    {
      name: "ESSENTIAL",
      tagline: "Insurance",
      price: "₹11,999",
      suffix: "/Year",
      isPopular: false,
      sections: {
        "CORE MAINTENANCE": [
          "24/7 Ping Monitor",
          "SSL Renewal",
          "Weekly Scan",
          "Paid Hack Recovery",
          "Weekly DB Backup",
          "Auto-Updates",
        ],
      },
    },
    {
      name: "GROWTH",
      tagline: "Protection",
      price: "₹35,999",
      suffix: "/Year",
      isPopular: true,
      popularTag: "MOST POPULAR CHOICE",
      sections: {
        HEALTH: ["24/7 HTTP Monitor", "CPU/RAM Tracking", "Monthly Error Log"],
        SECURITY: [
          "SSL Handshake Opt",
          "Daily Deep Scan",
          "Free Hack Cleanup",
          "Daily Cloud Backup",
        ],
        MAINTENANCE: [
          "Managed Safe Updates",
          "Plugin Compatibility",
          "Child Theme Maint",
          "Monthly DB Cleanup",
        ],
        PERFORMANCE: [
          "Monthly Core Web Vitals",
          "Broken Link Scan",
          "Bulk Image Compress",
        ],
        SUPPORT: [
          "24 Hr Response",
          "WhatsApp Support",
          "Quarterly Strategy Call",
        ],
      },
    },
    {
      name: "VIP",
      tagline: "Partner",
      price: "₹99,999",
      suffix: "/Year",
      isPopular: false,
      sections: {
        HEALTH: [
          "Real-Time Alerts",
          "Traffic Spike Mgmt",
          "Deep Server Audits",
        ],
        SECURITY: [
          "Advanced Cert Mgmt",
          "Real-time Firewall",
          "Insurance-Backed Guarantee",
          "Hourly Backups",
        ],
        MAINTENANCE: [
          "Manual Verification",
          "Staging Tests",
          "Code Deprecation Fixes",
          "Query Opt",
        ],
        PERFORMANCE: ["Bi-Weekly Tuning", "404 Mgmt", "CDN Purging"],
        SUPPORT: [
          "4 Hr Priority",
          "Dedicated Manager",
          "Monthly Strategy Call",
        ],
      },
    },
  ],
};

export const FAQS: FAQItem[] = [
  // General Questions
  {
    question:
      "Why should I choose FactoryJet over other website design companies in Chennai?",
    answer:
      "FactoryJet stands out as the premier website design company in Chennai for several reasons: 1. Local Presence: Our Tidel Park office on OMR means face-to-face consultations and local market understanding. 2. Speed: 7-day delivery while competitors take months. 3. Complete Package: SEO + GEO + AEO + AIO optimization included – not upsold. 4. Industry Expertise: Specialized solutions for Chennai's key sectors (IT, automobile, healthcare). 5. Transparent Pricing: ₹29,999 starting price with no hidden fees. 6. Proven Results: 100+ Chennai clients, 4.9★ Google rating. 7. Ongoing Support: AMC options from ₹2,999/month. Unlike generic national agencies, we understand Chennai's business culture, local competition, and what it takes to succeed in Tamil Nadu's market.",
  },
  {
    question: "What is your website design process?",
    answer:
      "Our 7-day web design Chennai process includes: Day 1: Discovery call, requirements gathering, competitor analysis. Days 2-3: Custom design creation, mobile layouts, client review. Days 4-5: Development, CMS setup, integrations. Day 6: Testing, optimization, client preview. Day 7: Launch, training, handover. Post-launch, you receive 30 days of free support plus optional ongoing maintenance.",
  },
  {
    question: "How much does a website cost in Chennai?",
    answer:
      "FactoryJet offers transparent web development Chennai pricing: Starter Website (5 pages): ₹29,999. Business Website (10 pages): ₹59,999. E-Commerce Store: ₹99,999. Corporate Website: ₹1,49,999. Industry-Specific: ₹69,999-₹89,999. B2B Portal: ₹2,50,000+. All prices include design, development, SEO, hosting, and support. No hidden charges.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, our Annual Maintenance Contracts (AMC) ensure your website stays updated and secure: Basic (₹2,999/month): Hosting, security, backups, 2-hour support. Standard (₹5,999/month): + Content updates, monitoring. Premium (₹9,999/month): + SEO maintenance, priority support. Enterprise (₹14,999/month): + Dedicated manager, unlimited updates.",
  },
  {
    question: "Can I visit your Chennai office?",
    answer:
      "Absolutely! Our Chennai office is located at Tidel Park on OMR, one of Chennai's premier IT parks. We welcome clients for initial consultations, project kickoff meetings, design review sessions, training sessions, and ongoing discussions. Contact us to schedule a visit.",
  },
  // SEO & Marketing
  {
    question: "Will my website rank on Google?",
    answer:
      "Every FactoryJet website is built with SEO fundamentals: Technical SEO (speed, mobile, structure), On-page SEO (titles, descriptions, headers), Local SEO (Chennai, Tamil Nadu schema), and Content optimization. For competitive rankings, we recommend our ongoing SEO services or Premium AMC. Most clients see ranking improvements within 3-6 months.",
  },
  {
    question: "What is GEO, AEO, and AIO optimization?",
    answer:
      "Beyond traditional SEO, we optimize for emerging search technologies: GEO (Generative Engine Optimization): Optimization for AI search engines like Perplexity and Google AI Overview. AEO (Answer Engine Optimization): Getting featured in Google's answer boxes and featured snippets. AIO (AI Optimization): Ensuring your business is cited accurately by ChatGPT, Claude, and other AI assistants. This multi-channel optimization ensures you're visible wherever Chennai customers search.",
  },
  {
    question: "Do you provide digital marketing services?",
    answer:
      "Yes, FactoryJet offers complete digital marketing: Search Engine Optimization (SEO), Google Ads (PPC) Management, Social Media Marketing, Content Marketing, Email Marketing, WhatsApp Marketing, and Video Marketing. Our packages start from ₹15,000/month. Website clients receive preferential rates.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "100%. Every FactoryJet website is mobile-first responsive, meaning: Designs optimized for smartphones first, Perfect display on all screen sizes, Touch-friendly navigation, Fast mobile loading speeds, and Google mobile-friendly certified. With 70%+ of Chennai web traffic from mobile, this is non-negotiable.",
  },
  {
    question: "Do you help with Google My Business?",
    answer:
      "Yes, we set up and optimize your Google Business Profile for Chennai-area searches. This includes: Profile creation/claiming, Category optimization, Photo uploads, Review management guidance, Posts and updates strategy, and Local SEO integration with your website.",
  },
  // E-Commerce
  {
    question: "Can you build an online store?",
    answer:
      "Yes, e-commerce is our specialty. We build stores on WooCommerce (Most flexible, great for customization), Shopify (Easiest to manage, excellent for scaling), Magento (Enterprise-grade for large catalogs), and Custom (For unique requirements). Our e-commerce packages start at ₹99,999 with up to 100 products.",
  },
  {
    question: "Which payment gateways do you integrate?",
    answer:
      "All major Indian payment gateways: Razorpay (Most popular, UPI, cards, wallets), PayU (Good for EMI options), CCAvenue (Maximum payment methods), PayTM (Consumer preference in some segments), PhonePe/Google Pay (UPI direct integration), and International (Stripe, PayPal for export businesses).",
  },
  {
    question: "Can you connect to shipping providers?",
    answer:
      "Yes, we integrate with Shiprocket (Multi-carrier aggregator), Delhivery (Pan-India coverage), BlueDart (Premium shipping), DTDC (Budget option), Local Chennai couriers (For same-day delivery), and Custom logistics APIs.",
  },
  {
    question: "Do you help with product photography?",
    answer:
      "While we don't provide photography directly, we: Recommend trusted Chennai product photographers, Optimize provided images for web, Create product mockups when needed, Set up AI-enhanced product displays, and Advise on image requirements for e-commerce success.",
  },
  {
    question: "Can my store sell across India and internationally?",
    answer:
      "Absolutely. We configure: Pan-India shipping zones and rates, International shipping integration, Multi-currency display, Tax calculation by region, GST compliance, and Export documentation features (for B2B).",
  },
  // Technical
  {
    question: "What CMS platforms do you use?",
    answer:
      "Based on your needs: WordPress (Most projects, maximum flexibility), Shopify (E-commerce focused), Webflow (Design-forward projects), Custom CMS (Specific requirements), and Payload CMS (Modern headless solutions). We recommend based on your technical comfort, growth plans, and budget.",
  },
  {
    question: "Will I be able to update my website myself?",
    answer:
      "Yes! Every website includes: User-friendly CMS interface, Training session (video call or in-person), Documented guides for common updates, Video tutorials for your site, and 30-day support for questions. Most clients handle basic updates (text, images) themselves within a week of training.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Yes, included free: Starter/Business (1-year hosting), E-Commerce (1-year managed hosting), Corporate/B2B (2-year premium hosting). Hosting includes SSL, CDN, daily backups, and 99.9% uptime guarantee. After the free period, hosting is ₹3,000-10,000/year depending on your plan.",
  },
  {
    question: "How fast will my website load?",
    answer:
      "We guarantee: PageSpeed Score: 90+ (mobile and desktop), Load Time: Under 3 seconds, Core Web Vitals: All passing. Speed optimization includes image compression, code minification, CDN integration, and caching. Slow websites hurt rankings and conversions – we take this seriously.",
  },
  {
    question: "Is my website secure?",
    answer:
      "Security is built in: SSL certificate (HTTPS) – free, Regular security updates, Malware scanning, DDoS protection (hosting level), Secure forms (spam protection), Backup and recovery, and Security plugin configuration. For e-commerce, additional PCI compliance considerations are implemented.",
  },
  // Business
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! Chennai's startup ecosystem is a key focus. We offer: Starter packages from ₹29,999, Flexible payment terms for early-stage, Growth-focused design, Scalable architecture, and Startup-friendly timelines. Many OMR and Taramani startups have launched with FactoryJet.",
  },
  {
    question: "Do you serve large enterprises?",
    answer:
      "Yes, our corporate packages serve Chennai's largest companies: Enterprise-grade security, Multi-site architecture, Custom integrations, SLA-based support, Dedicated account management, and On-premise deployment options. Contact us for enterprise consultations.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, website redesign is a popular service: Modern design overhaul, Content migration, SEO preservation (redirects), Performance improvement, Mobile optimization, Starting at ₹39,999. We preserve your existing rankings while dramatically improving user experience.",
  },
  {
    question: "Do you provide content writing?",
    answer:
      "Yes, content services include: Website copy (included in packages), Blog content (additional), SEO content optimization, Product descriptions (e-commerce), and Tamil/English bilingual content. Our team includes Tamil-speaking content writers for authentic local content.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Post-launch support includes: 30 days free (Bug fixes, minor adjustments), AMC plans (Ongoing updates and changes), and Ad-hoc (Hourly rates for specific projects). We remain your long-term digital partner, not just a project vendor.",
  },
  // Chennai Specific
  {
    question: "Do you understand Chennai's business culture?",
    answer:
      "Yes! Our Chennai team understands: Local business practices and relationships, Tamil Nadu market dynamics, Chennai consumer behavior, Regional competition, Local festivals and seasonal trends, and B2B relationship-driven sales cycles. This local knowledge informs every project.",
  },
  {
    question: "Can you create websites in Tamil?",
    answer:
      "Absolutely. We offer: Tamil-only websites, English + Tamil bilingual, Language switcher functionality, Tamil SEO optimization, and Tamil content writing. Serving Chennai's diverse linguistic audience effectively.",
  },
  {
    question: "Do you serve businesses outside Chennai?",
    answer:
      "Yes, while our office is in Chennai, we serve: All of Tamil Nadu (Coimbatore, Madurai, Trichy, etc.), Pan-India through virtual collaboration, and International clients (NRI businesses). Our proven remote delivery model ensures quality regardless of location.",
  },
  {
    question: "What industries do you specialize in for Chennai?",
    answer:
      "Chennai-specific expertise: IT & Software (OMR corridor specialists), Automobile (India's Detroit digital partner), Manufacturing (B2B industrial portals), Healthcare (Hospital and clinic websites), Education (College and coaching sites), BFSI (Secure financial platforms), Media (Kollywood and entertainment), and Retail (T. Nagar and e-commerce).",
  },
  {
    question: "How do I get started with FactoryJet?",
    answer:
      "Simple 3-step process: 1. Contact Us (Call, WhatsApp, or fill the form). 2. Consultation (Free 30-minute discussion - office, video, or phone). 3. Proposal (Receive detailed quote within 24 hours). From first contact to project start is typically 2-3 days. Launch in 7 days from kickoff. Ready to start? Phone: +91 96999 77699, WhatsApp: [Click to Chat], Email: connect@factoryjet.com, Office: Tidel Park, OMR, Chennai.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "As an automobile dealer in Anna Nagar, we needed a website that could showcase our inventory effectively. FactoryJet delivered beyond expectations – our online inquiries have tripled.",
    name: "Rajesh Kumar",
    role: "Managing Director, Leading Automobile Dealership, Anna Nagar",
    rating: 5,
  },
  {
    text: "FactoryJet understood our IT services business and built a website that positions us as industry leaders. Their OMR office made collaboration seamless.",
    name: "Priya Venkatesh",
    role: "CEO, Software Services Company, Sholinganallur",
    rating: 5,
  },
  {
    text: "Our hospital website now generates 200+ appointment bookings monthly. FactoryJet's healthcare expertise and quick delivery impressed our entire management team.",
    name: "Dr. Suresh Babu",
    role: "Director, Multi-Specialty Hospital, Adyar",
    rating: 5,
  },
  {
    text: "From our initial meeting at their Tidel Park office to website launch in 7 days – FactoryJet delivered exactly what they promised. Highly recommended for Chennai businesses.",
    name: "Lakshmi Narayanan",
    role: "Founder, EdTech Startup, Taramani",
    rating: 5,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Grofresh Agro",
    category: "AgriTech Startup | Chennai-Relevant",
    challenge: "Complex tech needed simple explanation",
    solution: "Custom WordPress + bilingual content",
    metrics: [
      { value: "+300%", label: "Inquiries" },
      { value: "50+", label: "Partners" },
      { value: "Page 1", label: "Rankings" },
      { value: "2000+", label: "Farmers" },
    ],
    quote: "More leads than our sales team generated previously.",
  },
  {
    title: "Belle Maison Interiors",
    category: "Interior Design & Home Décor",
    challenge: "Portfolio needed to drive high-ticket leads",
    solution: "Luxury portfolio with virtual booking",
    metrics: [
      { value: "400%", label: "Inquiries" },
      { value: "₹2.5Cr", label: "Value" },
      { value: "#1", label: "Rank" },
      { value: "65%", label: "Lead Quality" },
    ],
    quote: "Brings us clients who value quality.",
  },
  {
    title: "Impulse Branding Agency",
    category: "Creative Agency | Chennai-Relevant",
    challenge: "Outdated site losing pitches",
    solution: "Award-style portfolio & case studies",
    metrics: [
      { value: "5 New", label: "Big Clients" },
      { value: "200%", label: "Inbound" },
      { value: "45%", label: "Win Rate" },
      { value: "Awarded", label: "Design" },
    ],
    quote: "Wins clients before we even present.",
  },
  {
    title: "Formative Concepts",
    category: "Education Services | Chennai-Relevant",
    challenge: "Low visibility for consulting services",
    solution: "Authority-building resource hub",
    metrics: [
      { value: "500%", label: "Inquiries" },
      { value: "3x", label: "Consults" },
      { value: "15+", label: "Partners" },
      { value: "-40%", label: "CPL" },
    ],
    quote: "Changed our entire business model.",
  },
];
