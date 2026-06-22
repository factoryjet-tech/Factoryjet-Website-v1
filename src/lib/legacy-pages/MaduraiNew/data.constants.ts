import {
  Trophy, TrendingUp, Clock, AlertTriangle, UserX,
  Shirt, Factory, ShoppingBag, Utensils, Stethoscope,
  GraduationCap, Building2, Briefcase, Zap, Search,
  Globe, Smartphone, ShieldCheck, Phone, CheckCircle2
} from 'lucide-react';
import {
  Stat, ServiceCard, ProblemCard, ComparisonRow,
  PricingTab, IndustryCard, CaseStudy, Testimonial, FAQCategory
} from './data.types';

export const COLORS = {
  primary: '#0052CC',
  secondary: '#FF6B35',
  accent: '#10B981',
  navy: '#0F172A',
  slate: '#64748B',
  bg: '#F8FAFC'
};

export const CONTACT = {
  phone: "+91 96999 77699",
  whatsapp: "+91 96999 77699",
  email: "connect@factoryjet.com",
  address: "2nd Floor, KK Nagar Commercial Complex, Madurai, Tamil Nadu 625020"
};

export const STATS: Stat[] = [
  { metric: "Projects", value: "500+", label: "WEBSITES DELIVERED" },
  { metric: "Revenue", value: "₹50 Cr+", label: "BUSINESS GENERATED" },
  { metric: "Satisfaction", value: "98%", label: "CLIENT SATISFACTION" },
  { metric: "Delivery", value: "7 Days", label: "AVG DELIVERY TIME" },
  { metric: "Rating", value: "4.9★", label: "GOOGLE RATING" },
];

export const TRUST_INDICATORS = [
  "500+ Websites Delivered in Tamil Nadu",
  "4.9★ Google Rating (150+ Reviews)",
  "7-Day Delivery Guarantee",
  "Madurai-Based Expert Team",
  "₹50 Cr+ Business Generated for Clients",
  "Mobile Responsive Sites Standard"
];

export const PROBLEMS: ProblemCard[] = [
  {
    title: "Your Business Is Invisible Online",
    icon: UserX,
    badge: "Losing ₹2-5 Lakhs/Year",
    description: "When potential customers in Madurai search for 'textile shop near me' or 'automobile parts Madurai' on Google, they find your competitors — not you. Without a professional website, your business simply doesn't exist for the 70% of customers who search online before buying. Every month, you're losing hundreds of potential customers to competitors who invested in website development in Madurai. A top website design company in Madurai like FactoryJet can make you visible within 7 days."
  },
  {
    title: "Customers Question Your Credibility",
    icon: Trophy,
    badge: "Losing Customer Trust",
    description: "In 2024-2026, customers expect even local businesses to have professional websites. When you hand out a business card without a website URL, customers wonder: 'Is this business legitimate? Are they outdated? Can I trust them?' A professional website from the best website design company in Madurai establishes instant credibility. It shows customers you're serious, professional, and ready to serve them. Without it, you're fighting an uphill battle against doubt and skepticism."
  },
  {
    title: "You Can't Expand Beyond Madurai",
    icon: TrendingUp,
    badge: "Stuck at Local Level",
    description: "Your products and services could sell in Chennai, Coimbatore, Bangalore, and even internationally. But without a website, you're limited to walk-in customers and local referrals. E-commerce development company in Madurai services from FactoryJet have helped local businesses reach customers across India and export markets. A textile business that was purely local now ships nationwide. A jasmine exporter now serves the Gulf market. Your growth is limited only by your digital presence — or lack of it."
  },
  {
    title: "You Answer the Same Questions Repeatedly",
    icon: Clock,
    badge: "Wasting 10+ Hours/Week",
    description: "How many hours do you spend every week answering the same questions — your address, product prices, working hours, payment options? A professional website with clear information answers these questions 24/7, freeing your time for actual business. Customers can browse products, check prices, and contact you through WhatsApp integration without phone calls. Website designer in Madurai experts at FactoryJet build websites that work as your 24/7 salesperson."
  },
  {
    title: "Your Competitors Are Winning Online",
    icon: AlertTriangle,
    badge: "Competitors Winning Your Customers",
    description: "Check Google right now — search for your products or services in Madurai. See those competitors ranking on the first page? They're getting the customers who could be yours. Every week you delay getting a website, your competitors strengthen their online presence and capture more market share. The best website development company in Madurai can level the playing field. FactoryJet has helped 500+ businesses compete and win against established competitors with strong digital presence."
  }
];

export const COMPARISON: ComparisonRow[] = [
  { aspect: "Online Visibility", without: "Invisible on Google", with: "First page rankings within 60 days" },
  { aspect: "Customer Reach", without: "Limited to walk-ins", with: "24/7 visibility across India & globally" },
  { aspect: "Credibility", without: "Questioned by customers", with: "Instant professional trust" },
  { aspect: "Lead Generation", without: "Word-of-mouth only", with: "Automated leads via WhatsApp & forms" },
  { aspect: "Product Showcase", without: "Physical catalog only", with: "Interactive online catalog with photos" },
  { aspect: "Customer Service", without: "Phone calls during hours", with: "Self-service 24/7 on website" },
  { aspect: "Sales Capability", without: "In-person only", with: "E-commerce selling nationwide" }
];

export const SERVICES: ServiceCard[] = [
  {
    title: "Starter Business Website",
    originalPrice: "₹35,000",
    price: "₹29,999",
    delivery: "5-7 Days",
    description: "Perfect for small businesses and startups in Madurai. This plan includes a 5-page responsive website, mobile-optimized design, basic SEO, WhatsApp button, Google Maps, and SSL certificate.",
    features: ["5 Page Website", "Mobile Responsive", "Basic SEO", "WhatsApp Button", "SSL Certificate"],
    cta: "Get This Package →"
  },
  {
    title: "Professional Business Website",
    originalPrice: "₹75,000",
    price: "₹59,999",
    delivery: "7-10 Days",
    description: "Our most popular package for growing Madurai businesses. This plan includes up to 12 pages, and templates based website with advanced SEO, blog functionality, image gallery, and social media integration.",
    features: ["Up to 12 Pages", "Template Based", "Advanced SEO", "Blog", "Gallery", "Social Integration"],
    cta: "Get This Package →",
    highlight: true
  },
  {
    title: "WordPress Website Development",
    originalPrice: "₹45,000",
    price: "₹29,999",
    delivery: "7-10 Days",
    description: "WordPress powers 40% of all websites globally. Our WordPress development services deliver a customizable website with easy content management. Perfect for businesses needing up to 5 pages and self-management capabilities.",
    features: ["WordPress CMS", "Up to 5 Pages", "Premium Theme", "Security Setup", "Training"],
    cta: "Get This Package →"
  },
  {
    title: "E-Commerce Online Store",
    price: "₹59,999",
    delivery: "10-15 Days",
    description: "Sell online with a professional e-commerce store. This package includes a complete online store with product catalog (up to 20 products), shopping cart, secure payment gateway (Razorpay, PayU), shipping integration, and inventory tracking.",
    features: ["Up to 20 Products", "Payment Gateway", "Shipping Integration", "Order Management", "Inventory"],
    cta: "Get This Package →"
  },
  {
    title: "Shopify Store Development",
    price: "₹59,999",
    delivery: "7-10 Days",
    description: "We build beautiful, conversion-optimized Shopify stores for retail businesses. Services include custom Shopify theme setup, product upload (up to 50 products), payment configuration, and shipping setup.",
    features: ["Shopify Theme Setup", "Up to 50 Products", "Payment & Shipping", "App Integration", "Training"],
    cta: "Get This Package →"
  },
  {
    title: "Product Catalog Website",
    originalPrice: "₹75,000",
    price: "₹59,999",
    delivery: "10-14 Days",
    description: "Showcase your product range with a professional catalog website. Perfect for manufacturers and wholesalers. Includes listing for up to 500 products with specifications and inquiry options.",
    features: ["Up to 500 Products", "Categories & Filters", "PDF Catalog", "Per-Product Inquiry", "Bulk Upload"],
    cta: "Get This Package →"
  },
  {
    title: "B2B Portal Website",
    price: "₹1,49,999",
    delivery: "15-21 Days",
    description: "Enterprise-grade B2B web portal for manufacturers. Features dealer login, custom pricing tiers, bulk ordering system, and invoice generation. Supports up to 200 dealers.",
    features: ["Dealer Login", "Custom Pricing", "Bulk Orders", "Invoice System", "Up to 200 Dealers"],
    cta: "Get This Package →"
  },
  {
    title: "Restaurant & Hotel Website",
    originalPrice: "₹45,000",
    price: "₹29,999",
    delivery: "7-10 Days",
    description: "Specialized website solutions for Madurai's hospitality sector. Includes online menu (up to 50 items), table reservation form, photo gallery, and Google Maps integration.",
    features: ["Online Menu", "Reservation Form", "Photo Gallery", "Google Maps", "Social Media"],
    cta: "Get This Package →"
  },
  {
    title: "Healthcare & Clinic Website",
    originalPrice: "₹50,000",
    price: "₹39,999",
    delivery: "7-10 Days",
    description: "Professional healthcare websites for clinics. Includes doctor profiles (up to 5), appointment request form, service pages, and clinic information.",
    features: ["Up to 5 Doctor Profiles", "Appointment Form", "Service Pages", "Clinic Info", "Basic SEO"],
    cta: "Get This Package →"
  },
  {
    title: "Website Redesign",
    price: "₹25,000",
    delivery: "7-14 Days",
    description: "Transform your existing site into a modern, mobile-responsive website. We preserve your content while upgrading the design. Includes redesign of up to 5 pages.",
    features: ["Modern Redesign", "Up to 5 Pages", "Mobile Responsive", "Speed Optimization", "Content Preserved"],
    cta: "Get This Package →"
  }
];

export const PRICING_TABS: PricingTab[] = [
  {
    id: "website-design",
    label: "Website Design",
    plans: [
      {
        name: "STARTER",
        subtitle: "Launchpad",
        price: "₹29,999",
        suffix: "+ GST",
        cta: "Select Plan",
        highlight: false,
        features: [
          { category: "CORE", features: ["5 Pages", "WordPress/React Basics", "Responsive"] },
          { category: "SEO", features: ["XML Sitemap", "Basic Meta", "Google Maps"] },
          { category: "PERFORMANCE", features: ["Standard Caching", "Auto-Resize Images"] },
          { category: "SECURITY", features: ["Standard HTTPS", "Basic Login Protection", "ReCaptcha v2"] },
          { category: "CONVERSION", features: ["Click-to-Call", "Standard Forms"] },
          { category: "HOSTING", features: ["99% Uptime"] }
        ]
      },
      {
        name: "BUSINESS",
        subtitle: "Growth",
        price: "₹59,999",
        suffix: "+ GST",
        cta: "Get Started Now",
        highlight: true,
        features: [
          { category: "CORE", features: ["12 Pages", "Hybrid AI Architecture", "Mobile-First Indexing", "Legacy Browser Support"] },
          { category: "SEO", features: ["Advanced Robots.txt", "Open Graph Tags", "Schema.org (JSON-LD)", "G-Business Profile"] },
          { category: "PERFORMANCE", features: ["Lighthouse 90+", "WebP Compression", "Cloudflare CDN", "Database Query Opt"] },
          { category: "SECURITY", features: ["Military-Grade SSL", "Brute Force Protection", "ReCaptcha v3", "Daily Cloud Backups"] },
          { category: "CONVERSION", features: ["Sticky Bottom Bar", "WhatsApp Widget", "Multi-Step Forms", "GA4 Setup", "Insta Feed"] },
          { category: "HOSTING", features: ["99.9% Uptime", "High Bandwidth"] }
        ]
      },
      {
        name: "ENTERPRISE",
        subtitle: "Dominance",
        price: "₹1,19,999",
        suffix: "+ GST",
        cta: "Select Plan",
        highlight: false,
        features: [
          { category: "CORE", features: ["20+ Dynamic Pages", "Next.js/Headless", "PWA Ready", "Retina Support"] },
          { category: "SEO", features: ["Log File Analysis", "Twitter Cards", "Voice Search (AEO)", "Local Citations"] },
          { category: "PERFORMANCE", features: ["Core Web Vitals \"Green\"", "Lazy Loading", "Global Edge Network", "Redis Object Caching"] },
          { category: "SECURITY", features: ["Wildcard SSL", "DDoS Mitigation", "Enterprise Spam Firewall", "Real-Time Redundant Backups"] },
          { category: "CONVERSION", features: ["Exit Intent Popups", "AI Chatbot Ready", "CRM Integration", "Heatmaps", "Auto-Social Posting"] },
          { category: "HOSTING", features: ["99.99% Uptime", "High-Frequency Compute", "50 G-Suite Emails"] }
        ]
      }
    ]
  },
  {
    id: "e-commerce",
    label: "E-Commerce",
    plans: [
      {
        name: "SHOP STARTER",
        subtitle: "Validation",
        price: "₹59,999",
        suffix: "+ GST",
        cta: "Select Plan",
        highlight: false,
        features: [
          { category: "CORE FEATURES", features: ["20 Products", "Standard Checkout", "Guest Checkout", "Basic Coupons", "Star Ratings", "Basic Search"] },
          { category: "PAYMENTS", features: ["Razorpay/UPI", "Flat Rate Shipping", "Simple Tax", "Email Receipt"] },
          { category: "SEO/TECH", features: ["Meta Titles", "Alt Tags"] }
        ]
      },
      {
        name: "SHOP PRO",
        subtitle: "Bestseller",
        price: "₹99,999",
        suffix: "+ GST",
        cta: "Get Started Now",
        highlight: true,
        features: [
          { category: "ARCH", features: ["100 Products", "Variable Products", "One-Page Checkout", "Customer Dashboard"] },
          { category: "MARKETING", features: ["Dynamic Discounts", "Photo Reviews", "Abandoned Cart Email", "Related Products", "Ajax Live Search"] },
          { category: "PAYMENTS", features: ["Multi-Gateway (COD+Credit)", "Live Shipping Rates (Shiprocket)", "Auto GST Calc", "PDF Invoices"] },
          { category: "SEO/TECH", features: ["Product Schema", "Auto-Alt Tags", "High-Perf Database mode"] },
          { category: "MGMT", features: ["Low Stock Alerts", "Advanced Sales Reports", "Order CSV Export"] }
        ]
      },
      {
        name: "E-COMM EMPIRE",
        subtitle: "Scale",
        price: "₹1,99,999",
        suffix: "+ GST",
        cta: "Select Plan",
        highlight: false,
        features: [
          { category: "ARCH", features: ["Up to 5000 Products", "Bundled/Digital", "Distraction-Free Checkout", "Social Login"] },
          { category: "MARKETING", features: ["BOGO Logic", "Verified Badges", "SMS/WhatsApp Notifs", "In-Cart Upsells", "AI Search & Filter"] },
          { category: "PAYMENTS", features: ["International (Stripe)", "Pincode Check", "Multi-State Tax", "GST Tax Invoices"] },
          { category: "SEO/TECH", features: ["Google Merchant Feed", "Video Gallery", "Redis Caching for Store"] },
          { category: "MGMT", features: ["Multi-Warehouse", "Cohort Analysis"] }
        ]
      }
    ]
  },
  {
    id: "amc",
    label: "AMC (Maintenance)",
    plans: [
      {
        name: "ESSENTIAL",
        subtitle: "Insurance",
        price: "₹11,999",
        suffix: "/Year",
        cta: "Select Plan",
        highlight: false,
        features: [
          { category: "CORE MAINTENANCE", features: ["24/7 Ping Monitor", "SSL Renewal", "Weekly Scan", "Paid Hack Recovery", "Weekly DB Backup", "Auto-Updates"] }
        ]
      },
      {
        name: "GROWTH",
        subtitle: "Protection",
        price: "₹35,999",
        suffix: "/Year",
        cta: "Get Started Now",
        highlight: true,
        features: [
          { category: "HEALTH", features: ["24/7 HTTP Monitor", "CPU/RAM Tracking", "Monthly Error Log"] },
          { category: "SECURITY", features: ["SSL Handshake Opt", "Daily Deep Scan", "Free Hack Cleanup", "Daily Cloud Backup"] },
          { category: "MAINTENANCE", features: ["Managed Safe Updates", "Plugin Compatibility", "Child Theme Maint", "Monthly DB Cleanup"] },
          { category: "PERFORMANCE", features: ["Monthly Core Web Vitals", "Broken Link Scan", "Bulk Image Compress"] },
          { category: "SUPPORT", features: ["24 Hr Response", "WhatsApp Support", "Quarterly Strategy Call"] }
        ]
      },
      {
        name: "VIP",
        subtitle: "Partner",
        price: "₹99,999",
        suffix: "/Year",
        cta: "Select Plan",
        highlight: false,
        features: [
          { category: "HEALTH", features: ["Real-Time Alerts", "Traffic Spike Mgmt", "Deep Server Audits"] },
          { category: "SECURITY", features: ["Advanced Cert Mgmt", "Real-time Firewall", "Insurance-Backed Guarantee", "Hourly Backups"] },
          { category: "MAINTENANCE", features: ["Manual Verification", "Staging Tests", "Code Deprecation Fixes", "Query Opt"] },
          { category: "PERFORMANCE", features: ["Bi-Weekly Tuning", "404 Mgmt", "CDN Purging"] },
          { category: "SUPPORT", features: ["4 Hr Priority", "Dedicated Manager", "Monthly Strategy Call"] }
        ]
      }
    ]
  }
];

export const INDUSTRIES: IndustryCard[] = [
  { title: "Textiles & Handlooms", icon: Shirt, description: "Madurai's textile industry is legendary. We help textile businesses establish online presence with catalogs and E-commerce." },
  { title: "Manufacturing & Engineering", icon: Factory, description: "Serving manufacturers in Kappalur SIDCO and Industrial corridors with industrial websites and B2B portals." },
  { title: "Retail & Shopping", icon: ShoppingBag, description: "From jewelry shops to electronics, we help retail businesses sell online with Shopify and custom E-commerce." },
  { title: "Hospitality & Tourism", icon: Utensils, description: "Attract Meenakshi Temple visitors with beautiful websites for hotels, restaurants, and tour operators." },
  { title: "Healthcare & Medical", icon: Stethoscope, description: "Professional websites for hospitals and clinics with appointment booking and doctor profiles." },
  { title: "Education & Training", icon: GraduationCap, description: "Schools, colleges, and coaching centers trust us for student portals and online learning integrations." },
  { title: "Real Estate & Construction", icon: Building2, description: "Showcase properties and projects effectively with virtual tour integrations and listing sites." },
  { title: "Professional Services", icon: Briefcase, description: "Lawyers, accountants, and consultants get credibility-building websites that convert visitors to clients." }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Grofresh Agro",
    industry: "Agritech",
    location: "Tamil Nadu",
    challenge: "Operating entirely offline with manual processes. Zero online presence.",
    solution: "Complete digital transformation: corporate website, E-commerce for B2B/B2C, ERP & CRM integration.",
    results: [
      { metric: "Digital Transformation", result: "100% Complete" },
      { metric: "Online Sales", result: "Fully Operational" },
      { metric: "Lead Generation", result: "300+ Inquiries/Month" }
    ]
  },
  {
    name: "Belle Maison",
    industry: "E-Commerce / Home Decor",
    location: "Pan-India",
    challenge: "Needed a sophisticated luxury online store. Previous freelancers failed to capture brand essence.",
    solution: "Stunning Shopify-based platform with custom design, razorpay integration, and marketing automation.",
    results: [
      { metric: "Revenue", result: "₹1.5 Crore in 120 Days" },
      { metric: "Conversion Rate", result: "3.5%" },
      { metric: "Repeat Rate", result: "35%" }
    ]
  },
  {
    name: "Impulse Branding",
    industry: "Marketing Agency",
    location: "Madurai",
    challenge: "Outdated, slow, non-mobile friendly website that failed to showcase creative capabilities.",
    solution: "Portfolio-focused website with advanced animations, fast loading speeds, and lead capture forms.",
    results: [
      { metric: "Lead Gen", result: "200% Increase" },
      { metric: "Portfolio Views", result: "500+ Monthly" },
      { metric: "Load Speed", result: "1.8 Seconds" }
    ]
  },
  {
    name: "Formative Concepts",
    industry: "Education",
    location: "Tamil Nadu",
    challenge: "Needed comprehensive site for course registrations and student management.",
    solution: "Complete educational platform with course catalog, payment integration, and student portal.",
    results: [
      { metric: "Registrations", result: "150+ Monthly" },
      { metric: "Lead Gen", result: "400% Increase" },
      { metric: "Efficiency", result: "70% Manual Work Reduced" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "FactoryJet is simply the best website design company in Madurai. They understood our textile business needs perfectly and created a website that has transformed how we connect with customers.",
    author: "Rajesh K.",
    role: "Textile Exporter, Madurai",
    rating: 5
  },
  {
    text: "Their 7-day delivery promise was real — our e-commerce store was live in exactly one week. Professional team, great communication, and excellent results.",
    author: "Priya S.",
    role: "Boutique Owner, KK Nagar",
    rating: 5
  },
  {
    text: "As a doctor running a clinic, I needed a website patients could trust. FactoryJet created exactly what I envisioned — professional, informative, and with easy appointment booking.",
    author: "Dr. Senthil M.",
    role: "Healthcare Professional",
    rating: 5
  },
  {
    text: "We compared multiple options before choosing FactoryJet. Best decision we made. Our Shopify store now generates 40% of our total revenue.",
    author: "Murugan P.",
    role: "Handicrafts Business",
    rating: 5
  }
];

export const FAQS: FAQCategory[] = [
  {
    category: "Pricing & Packages",
    items: [
      { question: "How much does website design cost in Madurai?", answer: "Website design costs in Madurai range from ₹15,000 to ₹1,50,000+ depending on requirements. FactoryJet offers packages starting at ₹15,000 for starter sites." },
      { question: "What's included in the ₹15,000 starter package?", answer: "Includes 1-page responsive website, mobile-optimized design, basic SEO, WhatsApp button, Google Maps, and SSL certificate." },
      { question: "Are there any hidden costs?", answer: "No hidden costs. Domain registration (₹500-1500/year) is separate unless specified. All other costs are transparent." },
      { question: "Do you offer payment plans?", answer: "We offer 50% advance and 50% on delivery. For larger projects (₹1L+), milestone-based payments are available." },
      { question: "Difference between ₹15,000 and ₹35,000 packages?", answer: "₹15k is a 1-page template-based starter website. ₹35k is a 5 page comprehensive website with advanced SEO, blog, and more features." }
    ]
  },
  {
    category: "Timeline & Delivery",
    items: [
      { question: "How long does it take to build a website?", answer: "Starter: 5-7 days. Professional: 7-10 days. E-commerce: 10-15 days. Custom B2B: 15-21 days." },
      { question: "What if I need it faster than 7 days?", answer: "Rush delivery (3-5 days) is available with a priority fee for urgent projects." },
      { question: "What do you need from me to start?", answer: "Business name, logo, content (we provide templates), images, and 50% advance payment." },
      { question: "Can you write content for my website?", answer: "Yes, content writing is available as an add-on or included in premium packages. We also do Tamil content." },
      { question: "What happens after I pay the advance?", answer: "Project manager assigned -> Content collection -> Design within 48 hours -> Development -> Review -> Launch." }
    ]
  },
  {
    category: "Technical",
    items: [
      { question: "Will my website work on mobile phones?", answer: "Absolutely. All our websites are Mobile-First and responsive by default (75% of users are on mobile)." },
      { question: "What about hosting and domain?", answer: "1 year hosting is included. We guide you to buy the domain in your name for full ownership." },
      { question: "Will my website be SEO-friendly?", answer: "Yes, basic SEO (meta tags, sitemap, speed, schema) is included. Advanced SEO packages available." },
      { question: "Can you integrate WhatsApp?", answer: "Yes, WhatsApp integration is FREE in all packages." },
      { question: "What platform do you use?", answer: "WordPress (most popular), Shopify (e-commerce), or Custom Code (React/Node) based on needs." },
      { question: "Can I update the website myself?", answer: "Yes, we provide an easy admin panel and training videos so you can update text/images." }
    ]
  }
];
