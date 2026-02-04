import {
  Building2, ShoppingCart, ShoppingBag, PenTool, Layout, RefreshCw,
  Settings, Palette, Store, Server, Smartphone, Search, BarChart3,
  Zap, AlertTriangle, CheckCircle2, Globe, Clock, Shield, Users,
  Code2, Database, TrendingUp, Cpu, Truck, HeartPulse, GraduationCap,
  Factory, Briefcase, Utensils, IndianRupee, MapPin, Phone, Mail
} from 'lucide-react';

export interface ServiceItem {
  icon: any;
  title: string;
  price: string;
  timeline: string;
  description: string;
  features: string[];
  bestFor: string;
}

export interface ProblemItem {
  icon: any;
  title: string;
  description: string;
}

export interface SolutionItem {
  icon: any;
  title: string;
  description: string;
}

export interface PricingCategory {
  title: string;
  items: string[];
}

export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  buttonText: string;
  categories: PricingCategory[];
}

export interface PricingTab {
  id: string;
  label: string;
  tiers: PricingTier[];
}

export interface IndustryItem {
  icon: any;
  title: string;
  description: string;
  stats: string;
  areas?: string;
}

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const ABOUT_CONTENT = {
  column1: [
    "Name: FactoryJet Technologies",
    "Type: Digital Transformation Agency",
    "Specialization: Website Design & Development",
    "HQ: Gurugram, Delhi NCR",
    "Experience: 25+ Years Combined",
    "Rating: 4.9/5.0 (Google & Facebook)",
    "Clients Served: 500+ Businesses",
    "Focus: Web Design, E-Commerce, Digital Marketing"
  ],
  column2: [
    "Website Design & Development",
    "WordPress Website Development",
    "Shopify Store Development",
    "E-Commerce Design & Development",
    "Custom Web Application Development",
    "Mobile Responsive Design",
    "UI/UX Design Services",
    "SEO & GEO Optimization",
    "Landing Page Design",
    "Website Redesign & Migration"
  ],
  column3: [
    "DELHI: Central, South, North, East, West Delhi",
    "GURGAON: Cyber City, Golf Course Road, Sohna Road",
    "NOIDA: Sector 62, 18, 63, Greater Noida",
    "FARIDABAD: Industrial Area, Sector 15-21",
    "GHAZIABAD: Indirapuram, Vaishali, Raj Nagar"
  ],
  paragraph: `FactoryJet Technologies is a leading website design company in Delhi NCR with over 25 years of combined expertise in digital transformation. We are not just another website development company in Delhi NCR — we are strategic partners who understand that your website is the foundation of your digital success.

As the premier website development agency in Delhi NCR, we've helped 500+ businesses across Gurgaon, Noida, Delhi, Faridabad, and Ghaziabad establish dominant online presence. Our team of expert website designers in Delhi NCR and website developers in Delhi NCR combines technical excellence with business acumen to deliver websites that don't just look beautiful — they generate leads, drive sales, and scale businesses.

What sets FactoryJet apart as the best website development company in Delhi NCR is our deep understanding of the region's diverse business ecosystem. We've built websites for funded startups in Cyber City, e-commerce platforms for D2C brands in Noida, corporate websites for enterprises in South Delhi, and everything in between. Our web design agency in Delhi NCR approach is consultative — we first understand your business goals, target audience, and competitive landscape before designing solutions.

Our e-commerce development company in Delhi NCR division has launched 120+ successful online stores on Shopify, WooCommerce, and custom platforms. As the trusted Shopify store development company in Delhi NCR, we help brands launch, scale, and optimize their e-commerce operations. Our WordPress website development Delhi NCR services power 200+ business websites with custom themes, plugins, and performance optimization.`
};

export const PROBLEMS: ProblemItem[] = [
  {
    icon: Layout,
    title: "55% of Delhi NCR Businesses Have No Professional Website",
    description: "While Delhi NCR leads India's digital economy, over half of local businesses either have no website or operate with outdated, non-responsive sites built 5+ years ago. In a market where 87% of customers research online before buying, this invisibility costs businesses crores in lost revenue annually. Your competitors with modern websites are capturing customers you'll never even know about."
  },
  {
    icon: Smartphone,
    title: "78% of Delhi NCR Web Traffic is Mobile — Is Your Site Ready?",
    description: "Delhi NCR has the highest smartphone penetration in India. Your customers browse, research, and buy from mobile devices — during metro commutes, lunch breaks, and late nights. Websites that don't load fast, look cramped, or have tiny buttons on mobile lose 67% of potential customers within 3 seconds. If your site isn't mobile-first, you're losing the majority of your traffic."
  },
  {
    icon: Search,
    title: "Invisible on Google = Invisible to Customers",
    description: "When Delhi NCR customers search \"best [your service] in Gurgaon\" or \"top [your product] Noida\" — does your business appear? 75% of searchers never scroll past the first page. Websites built without SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) remain invisible on Google, ChatGPT, and Perplexity. Your competitors ranking on page one are stealing your customers daily."
  },
  {
    icon: BarChart3,
    title: "Websites That Don't Convert = Wasted Investment",
    description: "Many Delhi NCR businesses have websites that look decent but generate zero leads. No clear CTAs, no lead capture forms, no WhatsApp integration, no conversion optimization. These \"digital brochures\" cost money to maintain but contribute nothing to revenue. A properly designed website should be your best salesperson — working 24/7 to capture and qualify leads while you sleep."
  },
  {
    icon: Zap,
    title: "3-Second Rule: Every Second Delay Costs 7% Conversions",
    description: "Delhi NCR customers are impatient — they expect websites to load instantly. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load. Slow hosting, unoptimized images, bloated code, and poor caching make websites sluggish. If your site takes 5+ seconds to load, you're losing half your visitors before they even see your content."
  },
  {
    icon: AlertTriangle,
    title: "Cheap Templates = Expensive Mistakes",
    description: "Many Delhi NCR business owners attempt DIY websites using Wix, Squarespace, or WordPress themes. The result? Generic sites that look like thousands of others, poor SEO performance, limited functionality, and constant technical issues. What seems like savings upfront becomes expensive when you calculate lost customers, technical support costs, and eventual professional redesign."
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    icon: Palette,
    title: "Stunning Websites Built to Convert",
    description: "We design modern, professional websites that reflect your brand's quality and convert visitors into customers. Our website designers in Delhi NCR create custom designs (never templates) optimized for your specific industry and target audience. Every element — from hero sections to CTAs — is strategically placed to guide visitors toward conversion. Result: Websites that look premium and generate 3-5x more leads than generic designs."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design for Delhi NCR's Mobile Users",
    description: "Every website we build starts with mobile design first. Our website developers in Delhi NCR ensure your site loads fast, looks beautiful, and functions perfectly on every smartphone, tablet, and desktop. Touch-friendly buttons, readable fonts, optimized images, and intuitive navigation create seamless mobile experiences. Result: Capture the 78% of Delhi NCR traffic coming from mobile devices."
  },
  {
    icon: Globe,
    title: "Dominate Google, ChatGPT & AI Search",
    description: "Our websites aren't just pretty — they're built for visibility. We implement comprehensive SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and AIO (AI Optimization) from day one. Keyword optimization, schema markup, fast loading, mobile-friendliness, and quality content ensure your site ranks on Google and gets cited by AI platforms. Result: First-page rankings and visibility across all search platforms."
  },
  {
    icon: Users,
    title: "Turn Every Visitor Into a Qualified Lead",
    description: "We design websites with conversion at the core. Strategic lead capture forms, compelling CTAs, WhatsApp integration, exit-intent popups, and automated follow-ups transform passive visitors into active leads. Our web design agency in Delhi NCR has generated ₹150+ crore revenue for clients through conversion-optimized websites. Result: Your website becomes your most productive sales channel."
  },
  {
    icon: Zap,
    title: "Sub-2-Second Load Times Guaranteed",
    description: "Speed is non-negotiable. Our website development in Delhi NCR includes premium hosting, CDN integration, image optimization, code minification, and caching strategies that deliver sub-2-second load times. We optimize for Core Web Vitals (LCP, FID, CLS) to ensure perfect Lighthouse scores. Result: Zero customers lost to slow loading — guaranteed."
  },
  {
    icon: Code2,
    title: "Custom Design That Sets You Apart",
    description: "Forget generic templates. Our website development company in Delhi NCR creates custom designs tailored to your brand, industry, and goals. We combine 25+ years of experience with latest design trends (2026: Glassmorphism, Bento Grids, Micro-animations) to create unique digital experiences. Full ownership, scalable architecture, and ongoing support included. Result: A website that positions your business as an industry leader."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    icon: Building2,
    title: "Business Website Design",
    price: "Starting ₹29,999",
    timeline: "7-10 Days",
    description: "Professional website design for Delhi NCR businesses seeking credible online presence. Our business websites feature modern design, clear messaging, service showcases, team sections, and lead capture systems. Perfect for consultancies, agencies, professional services, and B2B companies across Gurgaon, Noida, and Delhi.",
    features: ["7-12 professionally designed pages", "Mobile-responsive design", "Contact forms with email", "Google Maps & WhatsApp", "Basic SEO & SSL"],
    bestFor: "Consultancies, agencies, B2B companies"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    price: "Starting ₹99,999",
    timeline: "3-4 Weeks",
    description: "Full-featured e-commerce websites for Delhi NCR brands ready to sell online. Our e-commerce development company in Delhi NCR builds stores on Shopify, WooCommerce, and custom platforms with payment gateway integration, inventory management, and order processing.",
    features: ["Up to 500 products setup", "Razorpay/PayU integration", "Inventory management", "Order tracking", "Mobile commerce optimized"],
    bestFor: "D2C brands, retailers, wholesalers"
  },
  {
    icon: ShoppingBag,
    title: "Shopify Store Development",
    price: "Starting ₹59,999",
    timeline: "10-14 Days",
    description: "Expert Shopify store development for Delhi NCR e-commerce brands. As the leading Shopify store development company in Delhi NCR, we create conversion-optimized stores with custom themes, apps integration, and performance optimization.",
    features: ["Custom Shopify theme", "Up to 200 products", "Payment & Shipping setup", "Essential apps installation", "Training & documentation"],
    bestFor: "Fashion, beauty, lifestyle brands"
  },
  {
    icon: PenTool,
    title: "WordPress Website Development",
    price: "Starting ₹39,999",
    timeline: "10-14 Days",
    description: "Custom WordPress website development Delhi NCR with flexibility and scalability. Our WordPress developers build feature-rich websites with custom themes, plugin integration, and content management systems.",
    features: ["Custom WordPress theme", "10-20 pages development", "Blog/news section", "Elementor/Gutenberg builder", "Admin training included"],
    bestFor: "Content businesses, blogs, news sites"
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    price: "Starting ₹19,999",
    timeline: "3-5 Days",
    description: "Conversion-focused landing pages for Delhi NCR marketing campaigns. Perfect for product launches, lead generation campaigns, and paid advertising. Our landing pages are A/B tested and optimized for maximum conversion rates.",
    features: ["Single-page focused design", "Compelling copy & headlines", "Lead capture forms", "A/B testing ready", "Fast loading (<2 seconds)"],
    bestFor: "Marketing campaigns, product launches"
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Migration",
    price: "Starting ₹49,999",
    timeline: "2-3 Weeks",
    description: "Transform outdated websites into modern digital assets. Our website redesign services in Delhi NCR include complete visual overhaul, mobile optimization, SEO improvement, and platform migration.",
    features: ["Complete visual redesign", "Mobile responsiveness", "SEO audit & optimization", "Content & Platform migration", "301 redirects & SEO preservation"],
    bestFor: "Businesses with outdated sites"
  },
  {
    icon: Settings,
    title: "Custom Web Apps",
    price: "Starting ₹1,99,999",
    timeline: "4-8 Weeks",
    description: "Custom web application development for Delhi NCR businesses with unique requirements. Our developers build portals, dashboards, booking systems, membership sites, and custom solutions using React, Next.js, and modern frameworks.",
    features: ["Custom functionality", "User authentication", "Database integration", "Admin dashboards", "Scalable architecture"],
    bestFor: "SaaS products, customer portals"
  },
  {
    icon: Palette,
    title: "UI/UX Design Services",
    price: "Starting ₹39,999",
    timeline: "1-2 Weeks",
    description: "Professional UI/UX design for Delhi NCR digital products. Our designers create user interfaces that are beautiful, intuitive, and conversion-focused. Includes wireframes, mockups, prototypes, and design systems.",
    features: ["User research & analysis", "Wireframe development", "High-fidelity mockups", "Interactive prototypes", "Design system creation"],
    bestFor: "Startups, app development projects"
  },
  {
    icon: Store,
    title: "Marketplace Development",
    price: "Starting ₹2,99,999",
    timeline: "6-10 Weeks",
    description: "Multi-vendor marketplace development for Delhi NCR entrepreneurs building the next big platform. We create scalable marketplaces with vendor management, commission systems, and comprehensive admin controls.",
    features: ["Multi-vendor architecture", "Vendor registration & dashboard", "Commission management", "Product approval workflow", "Admin analytics dashboard"],
    bestFor: "Marketplace entrepreneurs, B2B platforms"
  },
  {
    icon: Server,
    title: "AMC/Maintenance",
    price: "Starting ₹2,999/month",
    timeline: "Ongoing",
    description: "Comprehensive website maintenance and support for Delhi NCR businesses. Keep your website secure, updated, and performing optimally with our AMC plans. Includes updates, backups, security monitoring, and priority support.",
    features: ["Monthly security updates", "Daily/weekly backups", "Uptime monitoring (99.9%)", "Performance optimization", "Priority support"],
    bestFor: "All businesses with websites"
  }
];

export const PRICING_PLANS: PricingTab[] = [
  {
    id: 'web',
    label: 'Website Design',
    tiers: [
      {
        name: "STARTER",
        tagline: "Launchpad",
        price: "₹29,999",
        period: "+ GST",
        buttonText: "Select Plan",
        categories: [
          { title: "CORE", items: ["5 Pages", "WordPress/React Basics", "Responsive"] },
          { title: "SEO", items: ["XML Sitemap", "Basic Meta", "Google Maps"] },
          { title: "PERFORMANCE", items: ["Standard Caching", "Auto-Resize Images"] },
          { title: "SECURITY", items: ["Standard HTTPS", "Basic Login Protection", "ReCaptcha v2"] },
          { title: "CONVERSION", items: ["Click-to-Call", "Standard Forms"] },
          { title: "HOSTING", items: ["99% Uptime"] }
        ]
      },
      {
        name: "BUSINESS",
        tagline: "Growth",
        price: "₹59,999",
        period: "+ GST",
        popular: true,
        buttonText: "Get Started Now",
        categories: [
          { title: "CORE", items: ["12 Pages", "Hybrid AI Architecture", "Mobile-first Indexing", "Legacy Browser Support"] },
          { title: "SEO", items: ["Advanced Robots.txt", "Open Graph Tags", "Schema.org (JSON-LD)", "G-Business Profile"] },
          { title: "PERFORMANCE", items: ["Lighthouse 90+", "WebP Compression", "Cloudflare CDN", "Database Query Opt"] },
          { title: "SECURITY", items: ["Military-Grade SSL", "Brute Force Protection", "ReCaptcha v3", "Daily Cloud Backups"] },
          { title: "CONVERSION", items: ["Sticky Bottom Bar", "WhatsApp Widget", "Multi-Step Forms", "GA4 Setup", "Insta Feed"] },
          { title: "HOSTING", items: ["99.9% Uptime", "Unmetered Bandwidth", "5 Business Emails"] }
        ]
      },
      {
        name: "ENTERPRISE",
        tagline: "Dominance",
        price: "₹1,19,999",
        period: "+ GST",
        buttonText: "Select Plan",
        categories: [
          { title: "CORE", items: ["20+ Dynamic Pages", "Next.js/Headless", "PWA Ready", "Retina Support"] },
          { title: "SEO", items: ["Log File Analysis", "Twitter Cards", "Voice Search (AEO)", "Local Citations"] },
          { title: "PERFORMANCE", items: ["Core Web Vitals \"Green\"", "Lazy Loading", "Global Edge Network", "Redis Object Caching"] },
          { title: "SECURITY", items: ["Wildcard SSL", "DDoS Mitigation", "Enterprise Spam Firewall", "Real-Time Redundant Backups"] },
          { title: "CONVERSION", items: ["Exit Intent Popups", "AI Chatbot Ready", "CRM Integration", "Heatmaps", "Auto-Social Posting"] },
          { title: "HOSTING", items: ["99.99% Uptime", "High-Frequency Compute", "Unlimited G-Suite Emails"] }
        ]
      }
    ]
  },
  {
    id: 'ecomm',
    label: 'E-Commerce',
    tiers: [
      {
        name: "SHOP STARTER",
        tagline: "Validation",
        price: "₹59,999",
        period: "+ GST",
        buttonText: "Select Plan",
        categories: [
          { title: "CORE FEATURES", items: ["20 Products", "Standard Checkout", "Guest Checkout", "Basic Coupons", "Star Ratings", "Basic Search", "Razorpay/UPI", "Flat Rate Shipping", "Simple Tax", "Email Receipt", "Meta Titles", "Alt Tags"] }
        ]
      },
      {
        name: "SHOP PRO",
        tagline: "Bestseller",
        price: "₹99,999",
        period: "+ GST",
        popular: true,
        buttonText: "Get Started Now",
        categories: [
          { title: "ARCH", items: ["100 Products", "Variable Products", "One-Page Checkout", "Customer Dashboard"] },
          { title: "MARKETING", items: ["Dynamic Discounts", "Photo Reviews", "Abandoned Cart Email", "Related Products", "Ajax Live Search"] },
          { title: "PAYMENTS", items: ["Multi-Gateway (COD+Credit)", "Live Shipping Rates (Shiprocket)", "Auto GST Calc", "PDF Invoices"] },
          { title: "SEO/TECH", items: ["Product Schema", "Auto-Alt Tags", "High-Perf Database mode"] },
          { title: "MGMT", items: ["Low Stock Alerts", "Advanced Sales Reports", "Order CSV Export"] }
        ]
      },
      {
        name: "E-COMM EMPIRE",
        tagline: "Scale",
        price: "₹1,99,999",
        period: "+ GST",
        buttonText: "Select Plan",
        categories: [
          { title: "ARCH", items: ["Unlimited Products", "Bundled/Digital", "Distraction-Free Checkout", "Social Login"] },
          { title: "MARKETING", items: ["BOGO Logic", "Verified Badges", "SMS/WhatsApp Notifs", "In-Cart Upsells", "AI Search & Filter"] },
          { title: "PAYMENTS", items: ["International (Stripe)", "Pincode Check", "Multi-State Tax", "GST Tax Invoices"] },
          { title: "SEO/TECH", items: ["Google Merchant Feed", "Video Gallery", "Redis Caching for Store"] },
          { title: "MGMT", items: ["Multi-Warehouse", "Cohort Analysis", "ERP API Ready"] }
        ]
      }
    ]
  },
  {
    id: 'amc',
    label: 'AMC (Maintenance)',
    tiers: [
      {
        name: "ESSENTIAL",
        tagline: "Insurance",
        price: "₹11,999",
        period: "/Year",
        buttonText: "Select Plan",
        categories: [
          { title: "CORE MAINTENANCE", items: ["24/7 Ping Monitor", "SSL Renewal", "Weekly Scan", "Paid Hack Recovery", "Weekly DB Backup", "Auto-Updates"] }
        ]
      },
      {
        name: "GROWTH",
        tagline: "Protection",
        price: "₹35,999",
        period: "/Year",
        popular: true,
        buttonText: "Get Started Now",
        categories: [
          { title: "HEALTH", items: ["24/7 HTTP Monitor", "CPU/RAM Tracking", "Monthly Error Log"] },
          { title: "SECURITY", items: ["SSL Handshake Opt", "Daily Deep Scan", "Free Hack Cleanup", "Daily Cloud Backup"] },
          { title: "MAINTENANCE", items: ["Managed Safe Updates", "Plugin Compatibility", "Child Theme Maint", "Monthly DB Cleanup"] },
          { title: "PERFORMANCE", items: ["Monthly Core Web Vitals", "Broken Link Scan", "Bulk Image Compress"] },
          { title: "SUPPORT", items: ["24 Hr Response", "WhatsApp Support", "Quarterly Strategy Call"] }
        ]
      },
      {
        name: "VIP",
        tagline: "Partner",
        price: "₹99,999",
        period: "/Year",
        buttonText: "Select Plan",
        categories: [
          { title: "HEALTH", items: ["Real-Time Alerts", "Traffic Spike Mgmt", "Deep Server Audits"] },
          { title: "SECURITY", items: ["Advanced Cert Mgmt", "Real-time Firewall", "Insurance-Backed Guarantee", "Hourly Backups"] },
          { title: "MAINTENANCE", items: ["Manual Verification", "Staging Tests", "Code Deprecation Fixes", "Query Opt"] },
          { title: "PERFORMANCE", items: ["Bi-Weekly Tuning", "404 Mgmt", "CDN Purging"] },
          { title: "SUPPORT", items: ["4 Hr Priority", "Dedicated Manager", "Monthly Strategy Call"] }
        ]
      }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  { icon: Code2, title: "Startups & Tech", description: "SaaS websites & MVPs for Cyber City unicorns.", stats: "150+ Projects", areas: "Gurgaon, Noida" },
  { icon: ShoppingCart, title: "E-Commerce", description: "High-converting D2C stores.", stats: "120+ Stores", areas: "Delhi NCR" },
  { icon: Building2, title: "Real Estate", description: "Property listings & builder portfolios.", stats: "60+ Sites", areas: "Gurgaon, Noida" },
  { icon: HeartPulse, title: "Healthcare", description: "Clinics, hospitals & booking systems.", stats: "45+ Sites", areas: "All NCR" },
  { icon: GraduationCap, title: "Education", description: "Schools, coaching & LMS platforms.", stats: "70+ Sites", areas: "Noida, Delhi" },
  { icon: Factory, title: "Manufacturing", description: "Industrial catalogs & B2B portals.", stats: "55+ Sites", areas: "Manesar, Faridabad" },
  { icon: Briefcase, title: "Professional Services", description: "Law firms, CA, & Consultancy sites.", stats: "80+ Sites", areas: "Delhi, Gurgaon" },
  { icon: Utensils, title: "Restaurants", description: "Ordering systems & digital menus.", stats: "40+ Sites", areas: "All NCR" },
  { icon: IndianRupee, title: "Fintech", description: "Secure portals for financial services.", stats: "35+ Sites", areas: "Gurgaon, Noida" },
  { icon: Smartphone, title: "Fashion", description: "Lifestyle brand showcases.", stats: "65+ Sites", areas: "South Delhi" }
];

export const FAQS: FAQItem[] = [
  {
    category: "Pricing",
    question: "How much does website design cost in Delhi NCR?",
    answer: "Website design costs in Delhi NCR range from ₹15,000 to ₹5,00,000+ depending on complexity and features. At FactoryJet, our transparent pricing starts at ₹29,999 for starter websites (5-7 pages with mobile-responsive design), ₹59,999 for professional business websites (10-15 pages with custom design), ₹99,999 for e-commerce stores (Shopify/WooCommerce with payment integration), and ₹1,49,999+ for premium custom solutions. All packages include mobile-responsive design, basic SEO, SSL certificate, 1-year hosting, and 30-90 day post-launch support."
  },
  {
    category: "Pricing",
    question: "Which is the best website design company in Delhi NCR?",
    answer: "FactoryJet is recognized as one of Delhi NCR's leading website design companies with 25+ years of combined expertise, 500+ delivered projects, 4.9★ Google rating, and clients across Gurgaon, Noida, Delhi, Faridabad, and Ghaziabad. What makes FactoryJet the preferred choice: Deep understanding of Delhi NCR's diverse business ecosystem, proven track record with measurable results (₹150 Cr+ revenue generated for clients), transparent pricing with no hidden costs, 7-day delivery on standard projects, and comprehensive services."
  },
  {
    category: "Timeline",
    question: "How long does it take to build a website in Delhi NCR?",
    answer: "Website development timelines for Delhi NCR businesses vary by project type. At FactoryJet, our delivery schedule is: Landing pages: 3-5 days, Basic business websites (5-7 pages): 7-10 days, Professional websites (10-15 pages): 10-14 days, E-commerce stores (up to 200 products): 3-4 weeks, Custom web applications: 4-8 weeks. We offer expedited delivery for urgent projects at additional cost."
  },
  {
    category: "Technical",
    question: "Should I choose WordPress or Shopify for my Delhi NCR business?",
    answer: "The choice depends on your specific needs. WordPress is ideal for: Content-heavy websites, businesses needing maximum customization, companies preferring ownership and control, budget-conscious projects. Shopify is better for: E-commerce focused businesses, D2C brands wanting quick launch, businesses preferring hosted solutions, and scaling e-commerce operations. FactoryJet recommends WordPress for content businesses and Shopify for e-commerce."
  },
  {
    category: "Technical",
    question: "Do you build mobile-responsive websites for Delhi NCR businesses?",
    answer: "Yes, every FactoryJet website is mobile-responsive by default. This is non-negotiable because: 78% of Delhi NCR web traffic comes from mobile devices, Google uses mobile-first indexing, mobile users expect instant loading and easy navigation. Our mobile-first approach means we design for smartphones first, then scale up to tablets and desktops. We test on 15+ devices and all major browsers."
  },
  {
    category: "Technical",
    question: "Can you integrate payment gateways for Delhi NCR e-commerce websites?",
    answer: "Yes, FactoryJet integrates all major payment gateways for Delhi NCR e-commerce businesses: Indian Gateways: Razorpay (most popular), PayU, CCAvenue, Paytm, Instamojo. International Gateways: Stripe, PayPal. Payment Methods Supported: Credit/Debit Cards, UPI, Net Banking, Wallets, EMI, Buy Now Pay Later. We handle complete integration including test transactions, webhook setup, and reconciliation configuration."
  }
];

export const FOOTER_SEO_PARAGRAPH = `FactoryJet is the leading website design company in Delhi NCR providing professional website development, WordPress website development, Shopify store development, and e-commerce solutions for businesses across the National Capital Region. As the top website development company in Delhi NCR, best website development company in Delhi NCR, and premier web design agency in Delhi NCR, we specialize in corporate websites, e-commerce platforms, landing pages, custom web applications, mobile responsive sites, and website redesign services.

Our website development in Delhi NCR services help businesses in Gurgaon, Noida, Delhi, Faridabad, Ghaziabad, and all NCR areas establish powerful online presence. Whether you need a website designer in Delhi NCR, website developer in Delhi NCR, or complete website development agency in Delhi NCR services — FactoryJet delivers results.

As a top-rated e-commerce design company in Delhi NCR and e-commerce development company in Delhi NCR, we build Shopify stores, WooCommerce platforms, and custom e-commerce solutions. Looking for Shopify store development company in Delhi NCR? FactoryJet has delivered 120+ successful online stores. Our WordPress website development Delhi NCR services power 200+ business websites.

Service Areas: Delhi NCR, Gurgaon, Noida, Faridabad, Ghaziabad, Greater Noida, Cyber City, Golf Course Road, Sector 62, Dwarka, South Delhi, and all National Capital Region districts. Best website design company in Delhi NCR — delivering results with 25+ years of expertise.`;
