

import { Monitor, Smartphone, Search, Lock, Zap, MousePointer, Shield, Users, BarChart, ShoppingCart, PenTool, Youtube, FileText, Share2, DollarSign, Globe, Layers, Eye } from 'lucide-react';

export const HERO_CONTENT = {
  headline: "Professional Website Design & Development Services in India - WordPress, Webflow, Custom Development for SMBs",
  subHeadline: "FactoryJet creates stunning, high-performance websites that convert visitors into customers. From responsive mobile-first design to SEO optimization, we build websites on WordPress, Webflow, Framer, and custom platforms. Annual maintenance contracts starting at just ₹2,999/month keep your site secure and running smoothly.",
  ctas: [
    { text: "Start Your Website Project", primary: true },
    { text: "View Website Portfolio", primary: false },
    { text: "Get Free Website Audit", primary: false }
  ]
};

export const SECTION_1_CONTENT = {
  title: "Why Your Website Matters in 2024-2026",
  description: "Your website is often the first interaction potential customers have with your business. In today's digital landscape, a website must be more than just a digital brochure—it needs to be a strategic business tool that:",
  points: [
    { title: "Builds Credibility & Trust", desc: "Professional design signals that you're a legitimate, established business" },
    { title: "Provides 24/7 Visibility", desc: "Your website works while you sleep, representing your business around the clock" },
    { title: "Generates Leads & Sales", desc: "Strategically designed websites convert browsers into customers" },
    { title: "Improves Search Visibility", desc: "SEO-optimized websites rank higher on Google and other search engines" },
    { title: "Adapts to Your Audience", desc: "Mobile-responsive design ensures great experience on any device" },
    { title: "Supports Marketing Efforts", desc: "Your website amplifies the impact of your marketing initiatives" },
    { title: "Provides Business Intelligence", desc: "Analytics reveal what customers are doing and what they want" }
  ],
  difference: {
    title: "The FactoryJet Difference",
    desc: "At FactoryJet, we don't create generic websites from templates. Every website we build is:",
    items: [
      "Strategically Designed: Built to achieve YOUR specific business objectives",
      "Brand-Focused: Reflects your unique brand identity and values",
      "Mobile-First: Optimized for the 70%+ of traffic coming from mobile devices",
      "SEO-Optimized: Built on technical SEO foundations for search visibility",
      "Conversion-Focused: Every design decision supports turning visitors into customers",
      "Fast & Secure: Lightning-fast performance with enterprise-grade security",
      "Easy to Manage: User-friendly admin panels let you update content without technical knowledge"
    ]
  }
};

export const PRINCIPLES = [
  { title: "User-Centered Design", desc: "We design websites for your actual users, not designers' egos. Our process includes user research, persona development, user journey mapping, and WCAG accessibility compliance." },
  { title: "Conversion-Focused Architecture", desc: "Every page, button, and element is designed to guide visitors toward action. Clear CTAs, minimal friction, social proof, and strategic form placement." },
  { title: "Mobile-First Responsive Design", desc: "With 70%+ traffic from mobile, design starts with mobile, then scales to desktop. Touch-friendly buttons, fast loading on mobile networks, and mobile-optimized navigation." },
  { title: "Brand Consistency", desc: "Your website should feel like an extension of your brand. Consistent color palettes, typography, voice alignment, visual hierarchy, and professional imagery." },
  { title: "Performance Optimization", desc: "Fast websites rank better and convert better. Image optimization, code minification, caching, CDN integration, and continuous performance monitoring." },
  { title: "Search Engine Optimization (SEO)", desc: "Built-in SEO from day one. Technical SEO best practices, keyword optimization, schema markup, mobile optimization, and Core Web Vitals page speed." }
];

export const PLATFORMS = [
  {
    name: "WordPress Development",
    desc: "WordPress powers 43% of all websites on the internet. It's the most flexible, scalable, and cost-effective platform for building virtually any type of website.",
    bestFor: "Blogs, news sites, corporate websites, small e-commerce, service provider websites",
    cost: "₹40,000 - ₹5,00,000+",
    timeline: "4-8 weeks",
    features: ["Custom Theme Development", "Plugin Customization", "Performance Optimization", "Security Hardening", "WooCommerce Integration", "SEO Optimization", "Maintenance & Support"]
  },
  {
    name: "Webflow Development",
    desc: "Webflow is a visual development platform that combines the flexibility of custom code with the ease of visual design. Perfect for designers who want pixel-perfect control.",
    bestFor: "Portfolio sites, agencies, design-forward brands, SaaS websites, startups",
    cost: "₹60,000 - ₹7,50,000+",
    timeline: "4-10 weeks",
    features: ["Custom Responsive Design", "Animations & Interactions", "Webflow E-Commerce", "CMS Integration", "Third-Party Integration", "Performance Optimization", "Hosting & Maintenance"]
  },
  {
    name: "Framer Development",
    desc: "Framer is the next-generation platform for interactive web design. Built on React, it enables rapid development with built-in AI features for faster creation.",
    bestFor: "Startups, tech companies, design agencies, interactive experiences, modern brands",
    cost: "₹75,000 - ₹10,00,000+",
    timeline: "3-8 weeks",
    features: ["Interactive Component Design", "AI-Powered Design Assistance", "React Development", "Real-Time Collaboration", "Performance & SEO", "Global CDN Hosting"]
  },
  {
    name: "Custom Development",
    desc: "Sometimes off-the-shelf platforms can't deliver what you need. That's when custom development is the solution using React, Node.js, Python, and more.",
    bestFor: "Complex applications, high-traffic sites, mission-critical systems, unique requirements",
    cost: "₹1,50,000 - ₹50,00,000+",
    timeline: "8-24 weeks",
    features: ["Completely Custom Websites", "Unique Functionality", "Legacy System Integration", "Complex Logic", "Scalability", "Enterprise Security"]
  },
  {
    name: "Wix & Editor X",
    desc: "Enterprise-grade visual development that balances speed with powerful built-in business tools. Wix offers rapid deployment, secure infrastructure, and zero maintenance overhead.",
    bestFor: "Small businesses, restaurants, service bookings, event landing pages, rapid launches",
    cost: "₹30,000 - ₹3,00,000+",
    timeline: "2-5 weeks",
    features: ["Rapid Deployment", "Wix Velo Coding", "Built-in CRM & Booking", "Native SEO Tools", "Zero Maintenance", "Secure Infrastructure"]
  },
  {
    name: "Squarespace Design",
    desc: "The premium choice for aesthetics-first brands. Squarespace provides award-winning templates and an all-in-one ecosystem for creatives who need visually stunning portfolios.",
    bestFor: "Photographers, artists, interior designers, fashion portfolios, podcasts",
    cost: "₹35,000 - ₹2,50,000+",
    timeline: "3-6 weeks",
    features: ["Award-Winning Templates", "Visual Storytelling", "E-commerce Integration", "Email Campaigns", "Podcast Hosting", "Integrated Analytics"]
  },
  {
    name: "HTML5 & CSS3",
    desc: "Pure, lightweight code with zero bloat. Hand-coded static websites offer the absolute fastest load times, impenetrable security, and 100% design freedom without CMS constraints.",
    bestFor: "High-performance landing pages, promotional microsites, resume sites, brochures",
    cost: "₹25,000 - ₹2,00,000+",
    timeline: "2-6 weeks",
    features: ["100/100 Core Web Vitals", "Unbreakable Security", "Zero Database Latency", "Green Hosting Compatible", "Total Animation Control", "SEO Friendly"]
  },
  {
    name: "PHP & Laravel Solutions",
    desc: "Robust backend engineering for complex data processing. We build secure, scalable web applications and modernize legacy systems using industry-standard PHP frameworks.",
    bestFor: "SaaS Backends, Custom CRMs, Inventory Management, Legacy System Modernization",
    cost: "₹1,00,000 - ₹25,00,000+",
    timeline: "6-20 weeks",
    features: ["MVC Architecture", "RESTful API Development", "Database Management", "Secure Authentication", "Scalable Infrastructure", "Cloud Deployment"]
  }
];

export const FEATURES_LIST = [
  { icon: Smartphone, title: "Mobile-Responsive Design", desc: "Automatically adapts to any screen size with touch-friendly interfaces and optimized mobile network performance." },
  { icon: Search, title: "SEO Optimization Foundation", desc: "Technical SEO best practices, keyword-optimized metadata, schema markup, and Core Web Vitals optimization." },
  { icon: Zap, title: "Fast Loading Speed", desc: "Sub-2 second load times via image optimization, minification, caching, and global CDN integration." },
  { icon: Shield, title: "Security & Compliance", desc: "SSL certificate (HTTPS), DDoS protection, malware monitoring, regular updates, and GDPR compliance." },
  { icon: PenTool, title: "User-Friendly CMS", desc: "Intuitive admin interface with drag-and-drop content creation and easy image/meta tag management." },
  { icon: MousePointer, title: "Contact Forms & Lead Capture", desc: "Customizable forms with lead capture optimization, CRM integration, and abandonment tracking." },
  { icon: Users, title: "Email Newsletter Integration", desc: "Integration with MailChimp/ConvertKit, optin form placement, and subscriber management." },
  { icon: Share2, title: "Social Media Integration", desc: "Social sharing buttons, Open Graph tags, and embedded social feeds (Instagram/Twitter)." },
  { icon: BarChart, title: "Analytics & Tracking", desc: "GA4 integration, conversion tracking, event tracking, and custom metric dashboards." },
  { icon: ShoppingCart, title: "E-Commerce Ready", desc: "Product catalog, shopping cart, payment gateways, inventory management, and order tracking." },
  { icon: FileText, title: "Blog Platform", desc: "Easy article publishing, category/tag management, SEO-optimized posts, and RSS feeds." },
  { icon: Youtube, title: "Video Embedding", desc: "YouTube/Vimeo embedding with video SEO optimization and responsive sizing." }
];

export const HOSTING_AMC = {
  hosting: {
    title: "Hosting & Infrastructure Solutions",
    intro: "We partner with industry-leading hosting providers to ensure your website is fast, secure, and always available.",
    features: ["99.9% uptime guarantee", "Automatic daily backups (30+ day retention)", "Free SSL certificates", "Global CDN integration", "DDoS protection", "24/7 monitoring and support", "Automatic scaling", "Email hosting integration"],
    options: ["Managed WordPress Hosting (WP Engine, Kinsta)", "Cloud Hosting (AWS, Google Cloud)", "Dedicated Servers", "VPS Hosting", "Platform-Native (Webflow/Framer)"]
  },
  amc: [
    {
      name: "Basic AMC",
      price: "₹2,999",
      period: "/month",
      features: ["Monthly Security Updates", "WordPress/Plugin Updates", "SSL Certificate Renewal", "Weekly Backups (30-day retention)", "Uptime Monitoring", "Monthly Health Report", "Email Support", "Malware Monitoring"]
    },
    {
      name: "Standard AMC",
      price: "₹4,999 - ₹7,999",
      period: "/month",
      popular: true,
      features: ["Everything in Basic", "Content Updates (5/mo)", "SEO Optimization Updates", "Performance Optimization", "Blog Moderation", "Form Submission Management", "Google Analytics Review", "Priority Email Support", "Quarterly Performance Reviews"]
    },
    {
      name: "Premium AMC",
      price: "₹10,000 - ₹15,000+",
      period: "/month",
      features: ["Everything in Standard", "Unlimited Content Updates", "Active Content Strategy", "SEO Content Optimization", "Design Updates & Refresh", "New Feature Development", "Conversion Rate Optimization", "Social Media Posting", "Dedicated Account Manager", "24/7 Phone Support"]
    }
  ]
};

export const PROCESS_STEPS = [
  { phase: "Phase 1", title: "Discovery & Strategy", time: "Weeks 1-2", desc: "Business consultation, audience analysis, competitor review, success metrics & KPI identification." },
  { phase: "Phase 2", title: "Design & Prototyping", time: "Weeks 2-4", desc: "Wireframes, high-fidelity design mockups, clickable prototypes, user testing & iteration." },
  { phase: "Phase 3", title: "Content Development", time: "Weeks 2-4", desc: "Strategic copywriting, SEO optimization, image sourcing/creation, video scripting." },
  { phase: "Phase 4", title: "Development & Implementation", time: "Weeks 4-10", desc: "Coding, functionality implementation, CMS integration, analytics setup, performance optimization." },
  { phase: "Phase 5", title: "Testing & QA", time: "Weeks 9-11", desc: "Cross-browser/device testing, performance testing, security hardening, SEO audit, accessibility check." },
  { phase: "Phase 6", title: "Launch & Go-Live", time: "Week 11-12", desc: "Domain/DNS setup, SSL installation, database migration, final backups, 24/7 launch support." },
  { phase: "Phase 7", title: "Training & Handover", time: "Week 12-13", desc: "Comprehensive CMS training, user manuals, dashboard access, best practices guide." },
  { phase: "Phase 8", title: "Post-Launch Support", time: "Ongoing", desc: "30 days free support, performance monitoring, bug fixes, conversion optimization via AMC." }
];

export const PORTFOLIO = [
  { title: "E-Commerce Fashion Brand", type: "D2C Fashion Brand", challenge: "Needed modern e-commerce store with strong visual appeal", solution: "Custom Shopify theme with product photography optimization", result: "150% increase in online sales, 40% improvement in mobile conversions", tech: "Shopify, Custom Theme", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" },
  { title: "B2B Manufacturing Company", type: "Industrial Equipment", challenge: "Needed B2B website for lead generation and product information", solution: "WordPress custom theme with lead capture optimization and SEO", result: "300% increase in qualified leads from website", tech: "WordPress, Custom Theme", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" },
  { title: "Tech Startup SaaS Website", type: "SaaS Startup", challenge: "Needed landing page and product showcase site", solution: "Webflow with animations and interactive product demo", result: "25% conversion rate on signup form", tech: "Webflow, Animations", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
  { title: "Healthcare Provider Website", type: "Diagnostic Center Chain", challenge: "Multi-location website with appointment scheduling", solution: "Custom WordPress with location pages and online booking", result: "40% of new appointments now through website", tech: "WordPress, Booking System", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" },
  { title: "Non-Profit Organization", type: "NGO/Non-Profit", challenge: "Limited budget but needed professional web presence", solution: "WordPress with WooCommerce for donation management", result: "5x increase in online donations", tech: "WordPress, WooCommerce", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop" }
];

export const FAQS = [
  { q: "Q1: How long does it really take to build a website?", a: "A typical business website takes 6-8 weeks from discovery to launch. E-commerce sites take 8-12 weeks. Complex custom applications take 12-16+ weeks. We provide detailed timelines during the discovery phase." },
  { q: "Q2: What's the typical cost of a website?", a: "Website costs range from ₹40,000 for simple WordPress sites to ₹5,00,000+ for complex custom development. Most small businesses invest ₹75,000 - ₹2,50,000. We provide transparent quotes based on your specific requirements." },
  { q: "Q3: Should I choose WordPress or a custom website?", a: "WordPress is cost-effective, easy to manage, and great for most businesses. Custom development is necessary for unique requirements or complex functionality. We recommend WordPress for 80% of small businesses." },
  { q: "Q4: Can you redesign my existing website?", a: "Yes, we redesign existing websites regularly. We migrate your content, improve design and functionality, and boost your rankings. Most redesigns take 6-10 weeks." },
  { q: "Q5: Will my website rank on Google?", a: "Yes, we build SEO into every website. We implement technical SEO best practices, keyword optimization, and site structure designed for search success. However, ongoing SEO effort (content, link building) improves rankings further." },
  { q: "Q6: Can you help with content creation?", a: "Yes, we can create content or help you develop content. We write SEO-optimized copy, product descriptions, blog posts, and more. Content is often included in our design package." },
  { q: "Q7: What about website security?", a: "Security is built into everything we do. We use SSL certificates, security plugins, regular updates, and monitoring. Our AMC includes ongoing security maintenance." },
  { q: "Q8: Do you handle domain and email setup?", a: "Yes, we handle domain registration and setup. We can also configure email hosting (Gmail, business email, or dedicated email server)." },
  { q: "Q9: Will my website work on mobile devices?", a: "Absolutely. All our websites are mobile-first responsive. We test on 20+ devices to ensure perfect functionality." },
  { q: "Q10: Can you integrate with my existing tools (CRM, email, etc.)?", a: "Yes, we integrate with most tools. Common integrations include CRMs, email platforms, analytics, payment gateways, scheduling tools, and more." },
  { q: "Q11: What about analytics and tracking?", a: "We set up Google Analytics 4 and implement conversion tracking. You'll get monthly reports showing visitors, traffic sources, and conversions." },
  { q: "Q12: Can you help with SEO after launch?", a: "Yes, our AMC includes ongoing SEO updates. We can also provide SEO services (separate package) for content marketing, link building, and ranking optimization." },
  { q: "Q13: How often do I need to update my website?", a: "Update frequency depends on your business. Many sites need monthly updates, some need weekly updates. Our AMC makes regular updates easy and affordable." },
  { q: "Q14: What if I want to sell products online?", a: "We build e-commerce stores on WooCommerce, Shopify, or custom platforms. Payment gateway integration, inventory management, and shipping setup are all included." },
  { q: "Q15: Do you provide hosting?", a: "We recommend hosting providers and help you set up. We also manage hosting for clients who prefer. Hosting typically costs ₹500-3000/month depending on your traffic." },
  { q: "Q16: What if I want to make changes after launch?", a: "You can make changes yourself through your website admin (we train you), or request changes through our AMC. Minor changes are included in Premium AMC." },
  { q: "Q17: What's included in the maintenance contract?", a: "AMC includes updates, backups, security monitoring, uptime monitoring, and monthly reporting. Premium AMC adds content updates, SEO optimization, and phone support." },
  { q: "Q18: Can you migrate my website from another platform?", a: "Yes, we migrate websites from WordPress, Wix, Squarespace, custom platforms, and more. We ensure zero data loss and 301 redirects maintain your rankings." },
  { q: "Q19: How do you charge for website projects?", a: "We charge a project fee based on scope, timeline, and complexity. We can also discuss retainer arrangements for ongoing work." },
  { q: "Q20: What if I'm not happy with the website?", a: "We stand behind our work. During development, you provide feedback and we iterate until you're happy. After launch, our support continues and we make adjustments as needed." }
];

export const METRICS = {
  traffic: ["Monthly Unique Visitors", "Page Views", "Traffic Sources", "Mobile vs Desktop", "New vs Returning"],
  engagement: ["Average Session Duration", "Bounce Rate", "Pages per Session", "Click-Through Rate on CTAs"],
  conversion: ["Leads Generated", "Conversion Rate", "Cost Per Lead", "Lead Quality Score", "Sales from Website"],
  technical: ["Page Load Speed (< 2s)", "Core Web Vitals Score", "Mobile Usability Score", "SEO Health Score"],
  search: ["Keyword Rankings", "Organic Traffic", "CTR from Search", "Avg Position"]
};

export const TRENDS = [
  { title: "1. AI-Powered Personalization", desc: "Dynamic content based on visitor behavior, personalized recommendations, chatbots, and predictive content." },
  { title: "2. Dark Mode Support", desc: "Light and dark theme options to improve user experience, accessibility, and reduce eye strain." },
  { title: "3. Minimalist Design", desc: "Less is more approach with clear visual hierarchy, whitespace for focus, and simpler navigation." },
  { title: "4. Video-First Content", desc: "Videos on landing pages, short-form video content, auto-playing videos, and product showcases." },
  { title: "5. Interactive Elements", desc: "Animations, micro-interactions, scroll-based animations, interactive showcases, and gamification." },
  { title: "6. Core Web Vitals & Performance", desc: "Lightning-fast page speeds, smooth scrolling, stable layouts, and mobile-first performance." },
  { title: "7. Accessibility Focus", desc: "WCAG compliance, keyboard navigation, screen reader optimization, and color contrast standards." },
  { title: "8. Voice Search Optimization", desc: "Conversational keywords, question-based content, FAQ schema markup, and natural language optimization." }
];
