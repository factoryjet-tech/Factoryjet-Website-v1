

import { Monitor, Smartphone, Search, Lock, Zap, MousePointer, Shield, Users, BarChart, ShoppingCart, PenTool, Youtube, FileText, Share2, DollarSign, Globe, Layers, Eye } from 'lucide-react';

export const HERO_CONTENT = {
  headline: "Web Design Company in India That Builds for Conversion",
  subHeadline: "FactoryJet designs high-performance websites engineered to turn visitors into customers. From mobile-first architecture to Core Web Vitals optimization, we build on WordPress, Webflow, Framer, and custom stacks — with measurable outcomes at every stage.",
  ctas: [
    { text: "Start Your Website Project", primary: true },
    { text: "View Website Portfolio", primary: false },
    { text: "Get Free Website Audit", primary: false }
  ]
};

export const SECTION_1_CONTENT = {
  title: "Why Your Website Is a Revenue Decision, Not a Design One",
  description: "Your website is often the first and only interaction a prospect has with your business before deciding to engage or leave. In India's accelerating digital market, where paid traffic costs are rising and mobile users dominate, a weak website compounds every marketing rupee wasted. Businesses in major metros require performance-driven digital infrastructure tailored to competitive regional markets. If you are looking for a web design company in Mumbai, Pune, Bangalore, or Delhi, our localised strategy aligns with regional competition and audience behaviour while maintaining national scalability. Every city operates differently — enterprise markets demand structured, authority-driven UX, while startup ecosystems prioritise agile, conversion-focused frameworks. Without this strategic alignment, even high traffic fails to convert. A strategically built website must:",
  points: [
    { title: "Build Credibility & Trust", desc: "Professional design signals that you're a legitimate, established business" },
    { title: "Provide 24/7 Visibility", desc: "Your website works while you sleep, representing your business around the clock" },
    { title: "Generate Leads & Sales", desc: "Strategically designed websites convert browsers into customers" },
    { title: "Improve Search Visibility", desc: "SEO-optimized websites rank higher on Google and other search engines" },
    { title: "Adapt to Your Audience", desc: "Mobile-responsive design ensures great experience on any device" },
    { title: "Support Marketing Efforts", desc: "Your website amplifies the impact of your marketing initiatives" },
    { title: "Provide Business Intelligence", desc: "Analytics reveal what customers are doing and what they want" }
  ],
  difference: {
    title: "The FactoryJet Difference",
    desc: "We don't ship template-based sites with generic layouts. Every project is scoped around your business goals, audience behaviour, and conversion targets.",
    items: [
      "Strategically Designed — Structured around your specific acquisition funnel",
      "Brand-Focused — Visual language aligned with your market positioning",
      "Mobile-First — 70%+ of Indian web traffic is mobile; design starts there",
      "SEO-Optimized — Technical SEO foundations baked in from day one",
      "Conversion-Focused — Every design decision maps to a revenue outcome",
      "Fast & Secure — Sub-2s load times with enterprise-grade infrastructure",
      "Easy to Manage — Non-technical admins can update content without developer dependency"
    ]
  }
};

export const PRINCIPLES = [
  { title: "User-Centered Design", desc: "We design for your actual users — not for awards. Our process includes user research, persona development, journey mapping, and WCAG accessibility compliance to reduce drop-off and improve engagement." },
  { title: "FactoryJet Conversion Architecture™", desc: "We apply a five-layer model to every page: Traffic Qualification → Intent Mapping → Micro-Commitment Design → Friction Elimination → Conversion Amplification. No guesswork — each layer is validated against user behaviour before launch." },
  { title: "Mobile-First Responsive Design", desc: "With 70%+ of Indian traffic arriving via mobile, we design for small screens first, then scale to desktop. Touch-optimised interactions, network-aware loading, and thumb-friendly navigation are non-negotiable." },
  { title: "Brand Consistency", desc: "Your website should function as an extension of your brand — not a separate entity. We enforce consistent colour systems, typographic hierarchy, tone alignment, and visual language across every page." },
  { title: "Performance Optimization", desc: "Sites targeting LCP under 2.5 seconds and TTFB under 50ms rank and convert measurably better. We apply image compression, code minification, caching, and CDN integration with ongoing monitoring. Studies show a 1-second delay can reduce conversions by up to 7%." },
  { title: "Search Engine Optimization (SEO)", desc: "SEO is not added after launch — it is built into the architecture. We cover technical SEO, schema markup, Core Web Vitals compliance, structured metadata, and mobile optimisation from the first line of code." }
];

export const PLATFORMS = [
  {
    name: "WordPress Development",
    desc: "WordPress powers 43% of the internet — not because it is easy, but because it scales. It offers the deepest SEO control, a vast plugin ecosystem, and full theme ownership. The trade-off: it requires active maintenance and security hardening to stay performant.",
    bestFor: "Corporate websites, service businesses, SME blogs, small ecommerce",
    cost: "₹40,000 – ₹5,00,000+",
    timeline: "4–8 Weeks",
    features: ["Custom Theme Development", "Performance Optimization", "WooCommerce Integration", "Maintenance & Support", "Plugin Customization", "Security Hardening", "SEO Optimization"]
  },
  {
    name: "Webflow Development",
    desc: "Webflow offers pixel-level design control without sacrificing CMS flexibility. It is ideal for design-forward brands that need fast iteration and built-in hosting. SEO capabilities are strong, though scalability has limits for large catalogues or complex logic.",
    bestFor: "SaaS startups, agencies, design-led brands, portfolio sites",
    cost: "₹60,000 – ₹7,50,000+",
    timeline: "4–10 Weeks",
    features: ["Custom Responsive Design", "Animations & Interactions", "Webflow E-Commerce", "CMS Integration", "Third-Party Integration", "Performance Optimization", "Hosting & Maintenance"]
  },
  {
    name: "Framer Development",
    desc: "Built on React, Framer delivers interactive-first experiences with near-zero development overhead for motion and component logic. Best for tech-forward brands prioritising interactivity.",
    bestFor: "Startups, tech companies, interactive brand experiences",
    cost: "₹75,000 – ₹10,00,000+",
    timeline: "3–8 Weeks",
    features: ["Interactive Component Design", "AI-Powered Design Assistance", "React Development", "Real-Time Collaboration", "Performance & SEO", "Global CDN Hosting"]
  },
  {
    name: "Custom Development",
    desc: "When platform constraints limit your product vision, we build from first principles using React, Node.js, Python, and more. Full control over architecture, integrations, and scalability — with higher upfront investment and longer timelines.",
    bestFor: "Complex web applications, high-traffic systems, enterprise portals",
    cost: "₹1,50,000 – ₹50,00,000+",
    timeline: "8–24 Weeks",
    features: ["Completely Custom Websites", "Unique Functionality", "Legacy System Integration", "Complex Logic", "Scalability", "Enterprise Security"]
  },
  {
    name: "Wix & Editor X",
    desc: "Wix offers the fastest path to a live, functional website with zero maintenance overhead. Built-in CRM, booking, and hosting reduce vendor complexity. SEO and design flexibility are more constrained compared to open platforms — best for speed-to-market use cases.",
    bestFor: "Small businesses, service bookings, event pages, rapid launches",
    cost: "₹30,000 – ₹3,00,000+",
    timeline: "2–5 Weeks",
    features: ["Rapid Deployment", "Wix Velo Coding", "Built-in CRM & Booking", "Native SEO Tools", "Zero Maintenance", "Secure Infrastructure"]
  },
  {
    name: "Squarespace Design",
    desc: "Squarespace is the strongest platform for visuals-first brands where aesthetic precision matters more than SEO depth. Award-winning templates, built-in analytics, and integrated ecommerce make it ideal for creative professionals.",
    bestFor: "Photographers, artists, interior designers, fashion portfolios",
    cost: "₹35,000 – ₹2,50,000+",
    timeline: "3–6 Weeks",
    features: ["Award-Winning Templates", "Visual Storytelling", "E-commerce Integration", "Email Campaigns", "Podcast Hosting", "Integrated Analytics"]
  },
  {
    name: "HTML5 & CSS3",
    desc: "Hand-coded static sites have no CMS overhead, no database latency, and minimal attack surface. They consistently achieve exceptional Core Web Vitals scores with the lowest hosting costs. The constraint: content updates require developer access.",
    bestFor: "High-performance landing pages, microsites, brochure sites",
    cost: "₹25,000 – ₹2,00,000+",
    timeline: "2–6 Weeks",
    features: ["100/100 Core Web Vitals", "Unbreakable Security", "Zero Database Latency", "Green Hosting Compatible", "Total Animation Control", "SEO Friendly"]
  },
  {
    name: "PHP & Laravel Solutions",
    desc: "Laravel is the industry benchmark for PHP-based backend engineering — MVC architecture, clean API design, and enterprise-grade authentication. Ideal for custom CRMs, SaaS backends, and legacy system modernisation.",
    bestFor: "SaaS backends, custom CRMs, inventory management, legacy modernisation",
    cost: "₹1,00,000 – ₹25,00,000+",
    timeline: "6–20 Weeks",
    features: ["MVC Architecture", "RESTful API Development", "Database Management", "Secure Authentication", "Scalable Infrastructure", "Cloud Deployment"]
  }
];

export const FEATURES_LIST = [
  { icon: Smartphone, title: "Mobile-Responsive Design", desc: "Adapts to any screen with touch-optimised interfaces and mobile-network-aware performance" },
  { icon: Search, title: "SEO Optimization Foundation", desc: "Technical SEO, keyword-optimised metadata, schema markup, Core Web Vitals compliance" },
  { icon: Zap, title: "Fast Loading Speed", desc: "Median load time under 2 seconds via image compression, minification, caching, and global CDN" },
  { icon: Shield, title: "Security & Compliance", desc: "SSL, DDoS protection, malware monitoring, regular updates, GDPR compliance" },
  { icon: PenTool, title: "User-Friendly CMS", desc: "Drag-and-drop content management without technical dependency" },
  { icon: MousePointer, title: "Contact Forms & Lead Capture", desc: "Optimised forms with CRM integration and abandonment tracking" },
  { icon: Users, title: "Email Newsletter Integration", desc: "MailChimp/ConvertKit integration with optin placement and subscriber management" },
  { icon: Share2, title: "Social Media Integration", desc: "Open Graph tags, sharing buttons, embedded social feeds" },
  { icon: BarChart, title: "Analytics & Tracking", desc: "GA4, conversion tracking, event tracking, custom dashboards" },
  { icon: ShoppingCart, title: "E-Commerce Ready", desc: "Product catalogue, cart, payment gateways, inventory, and order management" },
  { icon: FileText, title: "Blog Platform", desc: "SEO-optimised publishing with category management and RSS" },
  { icon: Youtube, title: "Video Embedding", desc: "YouTube/Vimeo with responsive sizing and video SEO" }
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
      period: "/mo",
      features: ["Monthly Security Updates", "WordPress/Plugin Updates", "SSL Renewal", "Weekly Backups (30-day retention)", "Uptime Monitoring", "Monthly Health Report", "Email Support", "Malware Monitoring"]
    },
    {
      name: "Standard AMC",
      price: "₹4,999",
      period: "/mo",
      popular: true,
      features: ["Everything in Basic", "Content Updates (5/mo)", "SEO Optimization Updates", "Performance Optimization", "Blog Moderation", "Form Submission Management", "Google Analytics Review", "Priority Email Support", "Quarterly Performance Reviews"]
    },
    {
      name: "Premium AMC",
      price: "₹10,000",
      period: "/mo",
      features: ["Everything in Standard", "Unlimited Content Updates", "Active Content Strategy", "SEO Content Optimization", "Design Updates & Refresh", "New Feature Development", "Conversion Rate Optimization", "Social Media Posting", "Dedicated Account Manager", "24/7 Phone Support"]
    }
  ]
};

export const PROCESS_STEPS = [
  { phase: "Phase 1", title: "Discovery & Strategy", time: "Weeks 1–2", desc: "Business consultation, audience analysis, competitor review, success metrics and KPI definition. We identify where your current digital presence loses revenue before writing a line of code." },
  { phase: "Phase 2", title: "Design & Prototyping", time: "Weeks 2–4", desc: "Wireframes, high-fidelity mockups, clickable prototypes, user testing, and iteration. Design decisions are validated against conversion intent — not aesthetic preference alone." },
  { phase: "Phase 3", title: "Content Development", time: "Weeks 2–4", desc: "Strategic copywriting, SEO optimisation, image sourcing, video scripting. 70% of redesigns that fail do so because content was treated as an afterthought." },
  { phase: "Phase 4", title: "Development & Implementation", time: "Weeks 4–10", desc: "Coding, functionality build, CMS integration, analytics configuration, performance optimisation. All builds target LCP under 2.5s and mobile usability scores above 95." },
  { phase: "Phase 5", title: "Testing & QA", time: "Weeks 9–11", desc: "Cross-browser and device testing, performance validation, security hardening, SEO audit, accessibility check. No site launches without passing a 47-point QA protocol." },
  { phase: "Phase 6", title: "Launch & Go-Live", time: "Week 11–12", desc: "Domain/DNS setup, SSL installation, database migration, final backups, 24/7 launch monitoring." },
  { phase: "Phase 7", title: "Training & Handover", time: "Week 12–13", desc: "CMS training, user manuals, dashboard access, and best practices documentation for your team." },
  { phase: "Phase 8", title: "Post-Launch Support", time: "Ongoing", desc: "30 days free support, performance monitoring, bug fixes, and conversion optimisation via AMC." }
];

export const PORTFOLIO = [
  { title: "E-Commerce Fashion Brand", type: "D2C Fashion Brand", challenge: "Needed modern e-commerce store with strong visual appeal", solution: "Custom Shopify theme with product photography optimization", result: "150% increase in online sales, 40% improvement in mobile conversions", tech: "Shopify, Custom Theme", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" },
  { title: "B2B Manufacturing Company", type: "Industrial Equipment", challenge: "Needed B2B website for lead generation and product information", solution: "WordPress custom theme with lead capture optimization and SEO", result: "300% increase in qualified leads from website", tech: "WordPress, Custom Theme", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" },
  { title: "Tech Startup SaaS Website", type: "SaaS Startup", challenge: "Needed landing page and product showcase site", solution: "Webflow with animations and interactive product demo", result: "25% conversion rate on signup form", tech: "Webflow, Animations", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
  { title: "Healthcare Provider Website", type: "Diagnostic Center Chain", challenge: "Multi-location website with appointment scheduling", solution: "Custom WordPress with location pages and online booking", result: "40% of new appointments now through website", tech: "WordPress, Booking System", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" },
  { title: "Non-Profit Organization", type: "NGO/Non-Profit", challenge: "Limited budget but needed professional web presence", solution: "WordPress with WooCommerce for donation management", result: "5x increase in online donations", tech: "WordPress, WooCommerce", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop" }
];

export const FAQS = [
  { q: "Q1: How long does it take to build a business website in India?", a: "Timelines depend on scope, platform, and content readiness. A basic business website takes 3–5 weeks. An SME website with custom design and SEO structure takes 6–10 weeks. E-commerce or enterprise website development projects run 12–24 weeks. Most delays occur when client content — copy, images, approvals — is delivered late." },
  { q: "Q2: How much does a web design company in India charge?", a: "Website design cost in India depends on the scope and functionality. A basic business website costs ₹30,000–₹80,000. A custom-designed SME website with SEO architecture ranges from ₹80,000–₹3,00,000. E-commerce website development starts at ₹1,50,000 and scales to ₹10,00,000+. Enterprise builds begin at ₹5,00,000. Ongoing website maintenance costs ₹3,000–₹10,000 per month." },
  { q: "Q3: Should I choose WordPress or a custom website for my business?", a: "WordPress is suitable for 80% of business websites because it offers strong SEO control, flexibility, and lower maintenance costs. Custom website development is recommended only when your platform requires unique logic, high data processing, or enterprise-grade architecture." },
  { q: "Q4: Can you redesign my existing website without losing SEO rankings?", a: "Yes. As a web design company in India, we audit existing traffic, rankings, and URL structure before redesign. We preserve SEO equity, implement redirects correctly, and maintain high-performing content to prevent ranking loss." },
  { q: "Q5: Will my website rank on Google after launch?", a: "We build every website on strong technical SEO foundations — optimized crawl structure, schema markup, Core Web Vitals, mobile usability, and metadata. However, ranking depends on ongoing SEO strategy, content marketing, and backlinks. We offer dedicated SEO services in India post-launch." },
  { q: "Q6: Do you provide SEO-optimized content creation?", a: "Yes. Our website development process includes strategic copywriting, keyword mapping, SEO optimisation, image sourcing, and content structure planning. High-quality content is essential for ranking in competitive industries." },
  { q: "Q7: How secure will my website be?", a: "Every website includes SSL, malware protection, DDoS mitigation, and firewall configuration. WordPress websites are hardened with limited login exposure and plugin audits. Security is maintained through our AMC plans." },
  { q: "Q8: Do you handle domain, hosting, and professional email setup?", a: "Yes. We manage domain configuration, DNS setup, SSL installation, and business email setup via Google Workspace or Zoho during the website launch phase." },
  { q: "Q9: Will my website be mobile-friendly?", a: "Yes. Every website is built mobile-first. Over 70% of internet traffic in India comes from mobile devices, and Google uses mobile-first indexing. We test across iOS and Android devices before launch." },
  { q: "Q10: Can you integrate CRM, payment gateways, and marketing tools?", a: "Yes. We integrate HubSpot, Zoho, Salesforce, Mailchimp, WhatsApp Business API, Razorpay, PayU, and custom APIs. E-commerce websites include secure Indian payment gateway integrations." },
  { q: "Q11: Do you set up analytics and conversion tracking?", a: "Yes. We configure GA4 with conversion tracking, event tracking, scroll depth, CTA clicks, and ecommerce tracking. You retain full ownership of your website data." },
  { q: "Q12: Do you offer ongoing SEO services after website launch?", a: "Yes. We provide technical SEO audits, content strategy, backlink development, and monthly SEO optimisation through our AMC plans or standalone SEO packages." },
  { q: "Q13: How often should a business website be updated?", a: "Security updates should occur monthly. SEO content updates — blogs, service pages, case studies — should be ongoing. Websites that remain inactive for 12+ months typically lose rankings." },
  { q: "Q14: Can you build an e-commerce website for my business?", a: "Yes. We develop e-commerce websites on WooCommerce, Shopify, Webflow Commerce, and custom stacks. Platform selection depends on catalogue size, integrations, and scalability requirements." },
  { q: "Q15: Do you provide website hosting?", a: "Yes. We offer managed hosting on AWS, Google Cloud, and Vercel via Cloudflare edge infrastructure. Our setups target fast load times, low TTFB, and 99.9% uptime." },
  { q: "Q16: What happens after the website launch?", a: "The first 30 days include post-launch support for bug fixes and minor adjustments. Ongoing support, SEO updates, and performance optimisation are handled under AMC plans." },
  { q: "Q17: What's included in the maintenance contract?", a: "AMC plans cover security updates, plugin/platform updates, SSL renewal, backups, uptime monitoring, and health reporting. Standard and Premium plans add content updates, SEO updates, and performance optimisation. See our Pricing page for a full feature breakdown." },
  { q: "Q18: Can you migrate my website from Wix or another platform?", a: "Yes. We handle website migration from Wix, Squarespace, WordPress, and legacy platforms. Migration includes content transfer, SEO redirect mapping, and post-launch testing." },
  { q: "Q19: How do you price website development projects?", a: "Projects are priced on a fixed-scope model after discovery. Larger website development projects may be structured with milestone payments." },
  { q: "Q20: What if I am not satisfied with the final website?", a: "We include structured revision rounds during design and development. If deliverables fall short of the agreed scope, we resolve them at no additional cost." }
];

export const METRICS = {
  traffic: ["Monthly Unique Visitors", "Page Views", "Traffic Sources", "Mobile vs Desktop", "New vs Returning"],
  engagement: ["Average Session Duration", "Bounce Rate", "Pages per Session", "CTA Click-Through Rate"],
  conversion: ["Leads Generated", "Conversion Rate", "Cost Per Lead", "Lead Quality Score", "Sales from Website"],
  technical: ["Page Load Speed (<2s)", "Core Web Vitals Score", "Mobile Usability Score", "SEO Health Score"],
  search: ["Keyword Rankings", "Organic Traffic", "CTR from Search", "Average Position"]
};

export const TRENDS = [
  { title: "AI-Powered Personalisation", desc: "Dynamic content based on visitor behaviour, personalised recommendations, intelligent chatbots, and predictive content sequencing — already deployed on mid-market sites in competitive Indian verticals." },
  { title: "Dark Mode Support", desc: "Light/dark theme parity improves accessibility, reduces eye strain, and increases session duration on OLED mobile screens — now an expected standard rather than a differentiator." },
  { title: "Minimalist Design", desc: "Visual restraint with deliberate hierarchy. Whitespace, reduced navigation, and focused CTAs consistently outperform feature-dense layouts in A/B conversion tests." },
  { title: "Video-First Content", desc: "Auto-playing contextual videos on landing pages reduce bounce rate by demonstrating value faster than text alone. Short-form product showcases are the highest-engagement format for Indian mobile audiences." },
  { title: "Interactive Elements", desc: "Scroll-triggered animations, micro-interactions, and interactive product showcases increase engagement time and signal relevance to search algorithms through behavioural metrics." },
  { title: "Core Web Vitals & Performance", desc: "LCP under 2.5 seconds, CLS below 0.1, and INP under 200ms are now ranking factors. Sites missing these benchmarks lose positions to technically optimised competitors regardless of content quality." },
  { title: "Accessibility Focus", desc: "WCAG 2.2 compliance, keyboard navigation, screen reader support, and contrast ratios are legal requirements in several markets and ranking signals in all of them." },
  { title: "Voice Search Optimisation", desc: "Conversational query structures, FAQ schema markup, and natural language content targeting question-based searches — increasingly relevant as voice usage grows in Tier-2 and Tier-3 Indian cities." }
];

export const LOCATIONS = [
  { name: "Web Design Company in Mumbai", href: "/services/web-design/mumbai" },
  { name: "Web Design Services in Pune", href: "/services/web-design/pune" },
  { name: "Website Development Company in Bangalore", href: "/services/web-design/bangalore" },
  { name: "Web Design Company in Delhi", href: "/services/web-design/delhi" },
  { name: "Website Design Services in Chennai", href: "/services/web-design/chennai" },
  { name: "Web Development Company in Hyderabad", href: "/services/web-design/hyderabad" },
  { name: "Web Design Agency in Ahmedabad", href: "/services/web-design/ahmedabad" },
  { name: "Website Development Services in Surat", href: "/services/web-design/surat" }
];
