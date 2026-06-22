
import { BusinessModel, Platform, FeatureSet, ProcessStep, CaseStudy, FAQItem } from './data.types';

export const HERO_CONTENT = {
  headline: "Professional E-Commerce Platform Development - Shopify, WooCommerce, Commerceflo.ai for SMB Online Stores",
  subheadline: "FactoryJet builds high-converting e-commerce stores that sell. With 25+ years of e-commerce expertise, we specialize in DTC, B2C, B2B, multi-vendor marketplaces, and quick-commerce apps across Shopify, WooCommerce, Magento, Commerceflo.ai, and custom platforms. Average client sees 150%+ sales increase within 12 months.",
  ctas: [
    { text: "Launch Your E-Commerce Store", primary: true },
    { text: "View E-Commerce Portfolio", primary: false },
    { text: "Get Free Store Audit", primary: false }
  ]
};

export const MARKET_REALITY = {
  stats: [
    { label: "Consumers research online", value: "71%" },
    { label: "Annual Online Retail Growth", value: "23%" },
    { label: "SMBs with No Online Sales", value: "45%" },
    { label: "Growth vs Non-Ecom", value: "3-5x" }
  ],
  problems: [
    "Manual order processing (time-consuming, error-prone)",
    "Inventory disconnected from sales channels",
    "Poor customer experience (slow checkout, limited payment options)",
    "No visibility into customer behavior",
    "Inability to scale operations",
    "Lost revenue from abandoned carts and poor mobile experience"
  ],
  solution: "FactoryJet builds automated, scalable e-commerce platforms that handle everything from product display to order fulfillment, allowing you to focus on business growth."
};

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    title: "Direct-to-Consumer (DTC)",
    description: "Selling directly to end customers, bypassing retailers and distributors. You control the brand story, customer relationship, and margins.",
    bestFor: ["Brand manufacturers", "Artisans and creators", "Premium product companies", "Companies wanting brand control"],
    stats: "Fashion brand increased margin from 35% to 68% by moving to DTC, now generates ₹5 crore annual revenue online.",
    icon: "ShoppingBag"
  },
  {
    title: "Business-to-Consumer (B2C)",
    description: "Traditional retail e-commerce—selling products to consumers online. Think Flipkart, Amazon marketplace, or your own branded store.",
    bestFor: ["Retailers", "Consumer goods companies", "Fashion and lifestyle brands", "Consumer electronics", "Home and garden companies"],
    stats: "Home decor retailer built B2C store, now does ₹12 crore annual online revenue with 40% of sales from website.",
    icon: "Users"
  },
  {
    title: "Business-to-Business (B2B)",
    description: "Selling products to other businesses. Wholesalers, distributors, manufacturers selling to retailers or other companies.",
    bestFor: ["Wholesalers and distributors", "Manufacturers", "Industrial suppliers", "Food and beverage distributors", "Component/parts suppliers"],
    features: ["Custom pricing by customer/volume", "Bulk ordering capabilities", "Account management and credit terms", "Purchase order/invoice integration", "Advanced reporting and analytics", "API integrations with customer systems"],
    stats: "Wholesale distributor built B2B portal, reduced sales team workload by 40%, increased order frequency by 60%.",
    icon: "Building2"
  },
  {
    title: "Multi-Vendor Marketplace",
    description: "A platform where multiple sellers list and sell products (like Amazon or Flipkart). You operate the marketplace, merchants sell through it.",
    bestFor: ["Fashion and lifestyle", "Home and living", "Electronics", "Art and crafts", "Regional products"],
    features: ["Vendor registration and verification", "Individual seller dashboards", "Commission and payout management", "Product approval workflows", "Dispute resolution system", "Review and rating aggregation"],
    stats: "Regional marketplace launched with 500 vendors, now processes ₹50 crore annual GMV with 25% commission revenue.",
    icon: "LayoutGrid"
  },
  {
    title: "Quick-Commerce Apps",
    description: "Ultra-fast delivery model (30-45 minutes) for groceries and essentials. Think Zepto, Blinkit, Instamart.",
    bestFor: ["Growing market segment (projected ₹1 trillion by 2030)", "High customer frequency", "Recurring revenue", "Premium pricing"],
    features: ["Real-time inventory management", "Dark store management system", "Delivery partner management and tracking", "Live order tracking", "Route optimization", "Surge pricing"],
    stats: "Quick-commerce startup launched in Bangalore, now operating 12 dark stores, ₹5 crore monthly GMV.",
    icon: "Zap"
  }
];

export const PLATFORMS: Platform[] = [
  {
    name: "Shopify",
    description: "The world's leading hosted e-commerce platform. You get everything: hosting, security, payment processing, and extensive app ecosystem.",
    why: ["Easiest to setup (go live in 1-2 weeks)", "Affordable (plans from $29-$2,000/month)", "Extremely scalable", "6,000+ apps in app store", "No technical skills required", "Built-in SEO features", "Mobile-optimized by default"],
    bestFor: ["Startups launching first store", "B2C retailers", "DTC brands", "Companies wanting quick launch", "Businesses with limited technical resources"],
    cost: "₹75,000 - ₹3,00,000 depending on customization",
    timeline: "4-8 weeks from project start to launch",
    roi: "Typical Shopify store generates 3x investment in Year 1",
    highlight: true
  },
  {
    name: "Shopify Plus",
    description: "Enterprise-grade solution for high-volume merchants needing unlimited scale, automation, and wholesale channels.",
    why: ["99.99% server uptime", "Unlimited staff accounts", "Dedicated wholesale channel", "Shopify Flow automation", "Advanced checkout customization", "Dedicated success manager"],
    bestFor: ["Enterprise brands", "High-volume merchants ($1M+ revenue)", "Global brands", "Complex B2B/Wholesale"],
    cost: "Starts at $2,500/month + Development",
    timeline: "8-12 weeks for migration/setup",
    roi: "Massive scalability with zero infrastructure maintenance"
  },
  {
    name: "WooCommerce",
    description: "Open-source e-commerce platform built on WordPress. Flexible, customizable, and cost-effective.",
    why: ["Open source (no licensing fees)", "Highly customizable", "WordPress integration (blogs, content)", "Large developer community", "Affordable hosting", "Control over all data", "Unlimited products/scalability"],
    bestFor: ["Companies wanting full customization", "Businesses with WordPress sites", "Content-heavy retailers", "Companies with technical team", "Budget-conscious enterprises"],
    cost: "₹60,000 - ₹4,00,000 depending on customization",
    timeline: "6-12 weeks from start to launch",
    roi: "Lower ongoing costs, higher upfront investment"
  },
  {
    name: "BigCommerce",
    description: "Open SaaS platform known for robust built-in features, strong SEO, and scalability without plugin bloat.",
    why: ["Zero transaction fees", "Native multi-currency", "Strong B2B features built-in", "99.99% uptime", "API-first architecture", "Excellent SEO capabilities"],
    bestFor: ["Mid-market to Enterprise", "Hybrid B2B/B2C", "Merchants tired of plugin maintenance", "SEO-focused brands"],
    cost: "₹25,000 - ₹1,00,000+ monthly subscription",
    timeline: "6-10 weeks",
    roi: "Lower TCO (Total Cost of Ownership) than on-premise"
  },
  {
    name: "Magento (Adobe Commerce)",
    description: "Enterprise-grade e-commerce platform offering maximum power and flexibility.",
    why: ["Enterprise-level capabilities", "Highly scalable (handles millions of SKUs)", "Powerful customization options", "Advanced multi-store functionality", "Complex business logic support", "Strong security and compliance"],
    bestFor: ["Large enterprises", "Complex business models", "High-volume retailers", "Multi-vendor operations", "Companies with technical resources"],
    cost: "₹3,00,000 - ₹15,00,000+ depending on complexity",
    timeline: "12-24 weeks for enterprise implementations",
    roi: "Long-term investment, but supports massive scale"
  },
  {
    name: "Commerceflo.ai",
    description: "Next-generation AI-powered e-commerce platform designed for modern sellers. Built with AI at its core.",
    why: ["AI-powered product recommendations", "Intelligent inventory management", "Automated marketing optimization", "Dynamic pricing", "Predictive analytics", "Modern, fast platform", "Built for omnichannel"],
    bestFor: ["Forward-thinking brands", "Companies wanting AI features", "Omnichannel sellers", "Data-driven businesses", "Growth-focused companies"],
    cost: "Depends on features and usage",
    timeline: "4-6 weeks to launch",
    roi: "Faster scaling with AI optimization"
  },
  {
    name: "PrestaShop",
    description: "Robust open-source solution popular globally for its internationalization capabilities and modular architecture.",
    why: ["600+ built-in features", "Strong internationalization (languages/currencies)", "Large add-on marketplace", "Complete data ownership", "Vibrant community support"],
    bestFor: ["SMBs to Mid-market", "International sellers", "Merchants needing specific local payment integrations"],
    cost: "₹50,000 - ₹2,50,000 (Dev fees)",
    timeline: "4-8 weeks",
    roi: "Cost-effective scaling for global reach"
  },
  {
    name: "OpenCart",
    description: "Lightweight, open-source PHP-based store management system known for its speed and low resource usage.",
    why: ["Low server costs", "MVC pattern (easy to customize)", "Multi-store management from one admin", "20+ payment gateways built-in", "13,000+ modules available"],
    bestFor: ["Small to medium businesses", "Startups with limited server budget", "Developers preferring PHP"],
    cost: "₹40,000 - ₹1,50,000",
    timeline: "4-6 weeks",
    roi: "Very low operational overhead"
  },
  {
    name: "VTEX",
    description: "The enterprise digital commerce platform that natively combines commerce, marketplace, and OMS.",
    why: ["Native marketplace capabilities", "Unified commerce (Online + Offline)", "Serverless development platform (IO)", "AWS-based auto-scaling", "Fastest time-to-revenue for enterprise"],
    bestFor: ["Enterprise", "Marketplaces", "Complex B2B", "Global Brands"],
    cost: "Revenue share model + implementation",
    timeline: "12-24 weeks",
    roi: "Rapid international expansion and marketplace growth"
  },
  {
    name: "commercetools",
    description: "The leader in MACH (Microservices, API-first, Cloud-native, Headless) commerce for ultimate flexibility.",
    why: ["True headless architecture", "Language agnostic", "Versionless (always up to date)", "Infinite scalability", "Best-of-breed component selection"],
    bestFor: ["Large Enterprises", "Tech-first companies", "Custom luxury experiences", "Complex IoT/Voice commerce"],
    cost: "Enterprise licensing (High)",
    timeline: "16-30 weeks",
    roi: "Future-proof architecture for 10+ years"
  },
  {
    name: "Spree Commerce",
    description: "A headless, open-source e-commerce platform built with Ruby on Rails, offering extreme customization.",
    why: ["Mobile-first approach", "Lightweight & fast", "PWA ready", "API-first", "Great for subscription models", "Highly customizable backend"],
    bestFor: ["DNVBs (Digitally Native Vertical Brands)", "Custom subscription businesses", "Marketplaces"],
    cost: "Development heavy (₹2,00,000 - ₹10,00,000)",
    timeline: "8-16 weeks",
    roi: "Unique user experiences that differentiate brands"
  },
  {
    name: "Medusa JS",
    description: "The open-source Shopify alternative. A modular, headless commerce engine built for developers.",
    why: ["Developer-first experience", "Node.js based", "Easy customization", "Hackable architecture", "Plugin system", "No platform lock-in"],
    bestFor: ["Startups with dev teams", "Custom functionality needs", "Tech-focused brands"],
    cost: "Free (Open Source) + Hosting/Dev",
    timeline: "6-12 weeks",
    roi: "Complete code ownership and flexibility"
  },
  {
    name: "Ecwid (by Lightspeed)",
    description: "Headless solution designed to instantly add an online store to any existing website or social platform.",
    why: ["Embed anywhere (WordPress, Wix, Custom)", "Social selling (Insta/FB/TikTok)", "POS integration", "Zero maintenance", "Automatic updates"],
    bestFor: ["Small businesses with existing sites", "Social media sellers", "Bloggers adding merch"],
    cost: "Free - ₹8,000/month",
    timeline: "1-2 weeks",
    roi: "Fastest time to market"
  },
  {
    name: "Webflow E-Commerce",
    description: "Combines design freedom with e-commerce functionality. Perfect for design-forward brands.",
    why: ["Pixel-perfect design control", "Responsive by default", "Good performance", "Modern design tools", "Designer-friendly", "All-in-one solution"],
    bestFor: ["Design-focused brands", "Premium product companies", "Boutique retailers", "Companies wanting design control", "Smaller product catalogs"],
    cost: "₹80,000 - ₹2,00,000",
    timeline: "4-8 weeks",
    roi: "Lower product count, higher design quality"
  },
  {
    name: "Custom E-Commerce Development",
    description: "When custom makes sense: Unique business model, very high traffic, legacy system integrations, or complete control requirements.",
    why: ["Unique business logic", "Proprietary algorithms", "Legacy integration", "Complete control"],
    bestFor: ["Enterprise with unique requirements", "Very high traffic/complex scaling needs"],
    cost: "₹5,00,000 - ₹50,00,000+ depending on complexity",
    timeline: "12-24 weeks",
    roi: "Complete IP ownership and tailored fit"
  }
];

export const FEATURE_SETS: FeatureSet[] = [
  { 
    title: "Product Management",
    icon: "Package",
    description: "Centralized control for your entire catalog.",
    items: [
      { text: "Unlimited product catalog", icon: "Database" },
      { text: "Variants (size, color, etc.)", icon: "Layers" },
      { text: "Digital and physical products", icon: "FileDigit" },
      { text: "Product images and videos", icon: "Image" },
      { text: "SEO optimization per product", icon: "Search" },
      { text: "Product recommendations", icon: "Sparkles" },
      { text: "Related products display", icon: "Link" },
      { text: "Inventory tracking", icon: "Box" }
    ] 
  },
  { 
    title: "Shopping Experience", 
    icon: "ShoppingBag",
    description: "Delight customers with a frictionless frontend.",
    items: [
      { text: "Intuitive product browsing", icon: "Eye" },
      { text: "Advanced search and filtering", icon: "Filter" },
      { text: "Wishlist functionality", icon: "Heart" },
      { text: "Product reviews and ratings", icon: "Star" },
      { text: "Quick view option", icon: "Maximize2" },
      { text: "Mobile-optimized shopping", icon: "Smartphone" },
      { text: "Persistent cart (across sessions)", icon: "Save" },
      { text: "Guest checkout option", icon: "UserX" }
    ] 
  },
  { 
    title: "Checkout & Payment", 
    icon: "CreditCard",
    description: "Secure, high-conversion payment flows.",
    items: [
      { text: "Streamlined checkout (3-step maximum)", icon: "CheckCircle2" },
      { text: "Multiple payment options", icon: "Wallet" },
      { text: "All major Indian payment gateways", icon: "Landmark" },
      { text: "International payment options", icon: "Globe" },
      { text: "Wallet payments (Google Pay, Apple Pay)", icon: "Smartphone" },
      { text: "EMI options", icon: "Percent" },
      { text: "Order summary with clarity", icon: "Receipt" },
      { text: "Trust badges and security indicators", icon: "ShieldCheck" }
    ] 
  },
  { 
    title: "Shipping & Fulfillment", 
    icon: "Truck",
    description: "Automated logistics and delivery tracking.",
    items: [
      { text: "Real-time shipping rate calculation", icon: "Calculator" },
      { text: "Multiple courier integration", icon: "Truck" },
      { text: "Free shipping thresholds", icon: "Gift" },
      { text: "Local and international shipping", icon: "MapPin" },
      { text: "Order tracking", icon: "Locate" },
      { text: "Shipping address validation", icon: "Map" },
      { text: "Bulk order management", icon: "Container" },
      { text: "Fulfillment automation", icon: "Bot" }
    ] 
  },
  { 
    title: "Customer Management", 
    icon: "Users",
    description: "Build lasting relationships and loyalty.",
    items: [
      { text: "Customer accounts and profiles", icon: "UserCircle" },
      { text: "Order history and tracking", icon: "History" },
      { text: "Saved addresses and preferences", icon: "MapPinned" },
      { text: "Wishlist management", icon: "Heart" },
      { text: "Newsletter subscriptions", icon: "Mail" },
      { text: "Loyalty programs", icon: "Award" },
      { text: "Referral programs", icon: "Share2" },
      { text: "Customer communication history", icon: "MessageSquare" }
    ] 
  },
  { 
    title: "Marketing & Promotions", 
    icon: "Megaphone",
    description: "Tools to drive traffic and boost sales.",
    items: [
      { text: "Discount codes and coupons", icon: "Ticket" },
      { text: "Percentage and fixed discounts", icon: "Percent" },
      { text: "Cart abandonment recovery", icon: "ShoppingCart" },
      { text: "Email marketing integration", icon: "Mail" },
      { text: "SMS marketing capability", icon: "MessageCircle" },
      { text: "Social media integration", icon: "Share" },
      { text: "Influencer collaboration tools", icon: "Camera" },
      { text: "Affiliate program management", icon: "Users2" }
    ] 
  },
  { 
    title: "Analytics & Reporting", 
    icon: "BarChart3",
    description: "Data-driven insights for growth.",
    items: [
      { text: "Sales tracking by product/category", icon: "LineChart" },
      { text: "Customer acquisition cost (CAC)", icon: "UserPlus" },
      { text: "Lifetime value (LTV)", icon: "Infinity" },
      { text: "Conversion rate analysis", icon: "TrendingUp" },
      { text: "Traffic source analysis", icon: "MousePointerClick" },
      { text: "Visitor behavior tracking", icon: "Activity" },
      { text: "Abandoned cart analysis", icon: "AlertCircle" },
      { text: "Customizable dashboards", icon: "LayoutDashboard" }
    ] 
  },
  { 
    title: "Mobile Commerce", 
    icon: "Smartphone",
    description: "Optimized for the thumb-scrolling generation.",
    items: [
      { text: "Fully responsive design", icon: "MonitorSmartphone" },
      { text: "App-like mobile experience", icon: "AppWindow" },
      { text: "One-click checkout", icon: "Zap" },
      { text: "Mobile payment integration", icon: "CreditCard" },
      { text: "Progressive web app (PWA)", icon: "Download" },
      { text: "Native app option (iOS/Android)", icon: "TabletSmartphone" },
      { text: "Mobile-optimized images", icon: "Image" },
      { text: "Fast mobile load times", icon: "Gauge" }
    ] 
  },
  { 
    title: "Inventory Management", 
    icon: "Warehouse",
    description: "Smart stock control across all channels.",
    items: [
      { text: "Real-time stock tracking", icon: "ScanLine" },
      { text: "Multi-warehouse support", icon: "Building2" },
      { text: "Low stock alerts", icon: "Bell" },
      { text: "Inventory forecasting", icon: "BrainCircuit" },
      { text: "Automatic reordering", icon: "RefreshCw" },
      { text: "Dead stock identification", icon: "Trash2" },
      { text: "Serial/batch tracking", icon: "ScanBarcode" },
      { text: "Cycle counting tools", icon: "Timer" }
    ] 
  },
  { 
    title: "Security & Compliance", 
    icon: "Lock",
    description: "Enterprise-grade protection standard.",
    items: [
      { text: "SSL certificate (HTTPS)", icon: "Lock" },
      { text: "PCI DSS compliance", icon: "Shield" },
      { text: "Data encryption", icon: "FileKey" },
      { text: "Secure payment processing", icon: "CreditCard" },
      { text: "Privacy policy and terms", icon: "FileText" },
      { text: "GDPR compliance (if applicable)", icon: "Globe" },
      { text: "Return/refund management", icon: "Undo2" },
      { text: "Fraud detection", icon: "Siren" }
    ] 
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    phase: "Phase 1: Discovery & Strategy",
    duration: "Weeks 1-2",
    whatWeDo: ["Understand your business model and goals", "Analyze target market and competitors", "Identify unique value proposition", "Define success metrics", "Recommend platform", "Create detailed project brief"],
    deliverables: ["Platform recommendation", "Project scope document", "Timeline and milestones", "Technical architecture", "Pricing proposal"]
  },
  {
    phase: "Phase 2: Design & Prototyping",
    duration: "Weeks 2-4",
    whatWeDo: ["Create wireframes for all pages", "Design product pages for conversion", "Optimize checkout flow", "Design mobile experience", "Create clickable prototype", "User testing"],
    deliverables: ["High-fidelity mockups", "Clickable prototypes", "Design system", "User flow documentation"]
  },
  {
    phase: "Phase 3: Content & Data Preparation",
    duration: "Weeks 2-4",
    whatWeDo: ["Product data import", "Product description optimization", "Image optimization", "Video processing", "SEO optimization", "Category structure"],
    deliverables: ["Imported product catalog", "Optimized product pages", "SEO-optimized descriptions", "Image gallery ready", "Category structure"]
  },
  {
    phase: "Phase 4: Development & Setup",
    duration: "Weeks 4-10",
    whatWeDo: ["Platform setup and configuration", "Theme customization/development", "Payment gateway integration", "Shipping integration", "Email system setup", "Security configuration", "Performance optimization"],
    deliverables: ["Fully configured e-commerce store", "Working payment processing", "Shipping integration live", "Email workflows active", "Analytics tracking setup"]
  },
  {
    phase: "Phase 5: Testing & Optimization",
    duration: "Weeks 9-12",
    whatWeDo: ["Functional testing", "Device/browser testing", "Payment processing testing", "Shipping calculation testing", "Performance testing", "Security audit"],
    deliverables: ["QA report", "Performance metrics", "Security audit results"]
  },
  {
    phase: "Phase 6: Launch Preparation",
    duration: "Week 12-13",
    whatWeDo: ["Final content audit", "DNS configuration", "SSL certificate installation", "Database migration", "Final backups", "Launch checklist"],
    deliverables: ["Live e-commerce store", "Access credentials", "Documentation", "Training materials"]
  },
  {
    phase: "Phase 7: Launch & Support",
    duration: "Week 13-14",
    whatWeDo: ["Go-live coordination", "24/7 monitoring", "Issue response", "Performance optimization", "Bug fixes", "Ongoing support"],
    deliverables: ["Live, stable store", "Performance reports", "Optimization recommendations"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Fashion DTC Brand",
    challenge: "Local brand with zero online presence, limited budget",
    solution: "Shopify store with custom theme, AI product recommendations, social media integration",
    results: ["₹5 crore Year 1 revenue from online sales", "65% of customers from social media", "4.2% conversion rate", "₹200 average order value"],
    timeline: "8 weeks from discovery to launch"
  },
  {
    title: "Food & Beverage Distributor",
    challenge: "Manual order processing, limited B2B sales channels",
    solution: "Custom WooCommerce B2B portal with volume pricing, invoice integration, account management",
    results: ["300+ B2B customers onboarded", "40% reduction in sales team workload", "₹15 crore annual B2B revenue", "80% order accuracy improvement"],
    timeline: "12 weeks including custom development"
  },
  {
    title: "Multi-Vendor Marketplace",
    challenge: "Wanted to build platform connecting local vendors with customers",
    solution: "Custom marketplace with vendor management, commission tracking, dispute resolution",
    results: ["2,000+ vendors on platform", "₹100 crore annual GMV", "₹15 crore commission revenue", "50,000+ monthly active buyers"],
    timeline: "18 weeks for platform development"
  },
  {
    title: "Quick-Commerce Startup",
    challenge: "Launch quick-commerce app in competitive market",
    solution: "Custom app with dark store management, AI surge pricing, delivery optimization",
    results: ["12 dark stores operational", "₹5 crore monthly GMV", "30-min average delivery", "95% on-time delivery rate"],
    timeline: "16 weeks for MVP, ongoing scaling"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Platform Selection",
    question: "Should I use Shopify or WooCommerce?",
    answer: "Shopify for quick launch and ease of use. WooCommerce for more customization and lower ongoing costs. We recommend Shopify for most SMBs launching their first store."
  },
  {
    category: "Platform Selection",
    question: "Is Commerceflo.ai worth it?",
    answer: "If you want AI-powered features and omnichannel selling, yes. It's better than older platforms but may be overkill for simple stores. We can help you evaluate."
  },
  {
    category: "Platform Selection",
    question: "Can I migrate from Shopify to WooCommerce later?",
    answer: "Yes, but it requires planning. We handle data migration, redirects, and can minimize disruption."
  },
  {
    category: "Platform Selection",
    question: "Which platform is best for B2B?",
    answer: "Custom WooCommerce or Magento for B2B. We can add custom pricing, accounts, and workflow features."
  },
  {
    category: "Platform Selection",
    question: "Can I use Shopify for multi-vendor marketplace?",
    answer: "Shopify has limitations for true multi-vendor. We recommend custom development or specialized platforms."
  },
  {
    category: "E-Commerce Features",
    question: "Do I need a mobile app or responsive website?",
    answer: "Start with responsive website. Mobile app comes later if you have 10,000+ users and need native features."
  },
  {
    category: "E-Commerce Features",
    question: "How many product images do I need?",
    answer: "Minimum 5-10 per product (multiple angles). More for fashion and visual products."
  },
  {
    category: "E-Commerce Features",
    question: "Should I offer free shipping?",
    answer: "Yes, with order minimums. Free shipping over ₹500 increases conversion by 20-30%."
  },
  {
    category: "E-Commerce Features",
    question: "What payment options should I offer?",
    answer: "Razorpay (covers multiple payment methods), UPI, wallet payments, and COD if logistics allows."
  },
  {
    category: "E-Commerce Features",
    question: "How do I handle returns and refunds?",
    answer: "Clear return policy (7-30 days), easy return process, fast refunds (3-5 days). Most platforms automate this."
  },
  {
    category: "E-Commerce Operations",
    question: "How do I manage inventory?",
    answer: "Use platform's inventory management. Sync with your ERP if you have one. Update regularly to avoid overselling."
  },
  {
    category: "E-Commerce Operations",
    question: "What shipping partners should I use?",
    answer: "Use Shiprocket to access multiple carriers. Choose based on geography, speed, and cost."
  },
  {
    category: "E-Commerce Operations",
    question: "How do I handle customer support?",
    answer: "Email support (minimum), phone optional, WhatsApp highly recommended. Aim to respond within 24 hours."
  },
  {
    category: "E-Commerce Operations",
    question: "Should I do drop-shipping?",
    answer: "Possible but challenging. Manage supplier quality carefully. Consider hybrid model (some inventory, some drop-ship)."
  },
  {
    category: "E-Commerce Operations",
    question: "How do I prevent fraud?",
    answer: "Use payment gateway fraud detection, verify customer info, watch for unusual patterns, monitor chargebacks."
  },
  {
    category: "Marketing & Growth",
    question: "How much should I spend on marketing?",
    answer: "Allocate 15-25% of revenue for marketing. Start with SEO and social media (organic), then add paid ads."
  },
  {
    category: "Marketing & Growth",
    question: "How do I get my first 100 customers?",
    answer: "Leverage existing network, social media, friends/family, local partnerships, content marketing."
  },
  {
    category: "Marketing & Growth",
    question: "Should I run ads immediately?",
    answer: "No. Build organic traffic first. Start paid ads once you have product-market fit (proven conversion)."
  },
  {
    category: "Marketing & Growth",
    question: "What's the best marketing channel?",
    answer: "Depends on product. Social media for B2C, LinkedIn for B2B, SEO for long-term, influencers for fashion/lifestyle."
  },
  {
    category: "Marketing & Growth",
    question: "How do I handle seasonal fluctuations?",
    answer: "Plan inventory accordingly, adjust marketing for peaks, build email list for off-seasons, create seasonal campaigns."
  },
  {
    category: "Support & Maintenance",
    question: "What's the difference between AMC and SLA?",
    answer: "AMC = regular maintenance. SLA = guaranteed uptime/support response. We offer both."
  },
  {
    category: "Support & Maintenance",
    question: "How often should I update my store?",
    answer: "Add new products weekly, optimize based on sales data monthly, refresh design annually."
  },
  {
    category: "Support & Maintenance",
    question: "How do I ensure my store stays secure?",
    answer: "Keep platform updated, use strong passwords, enable two-factor authentication, regular backups."
  }
];
