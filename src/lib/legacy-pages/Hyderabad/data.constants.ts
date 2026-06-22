import { FAQItem, ServiceCardProps, CaseStudyProps, PricingTier } from './data.types';

export const SITE_DATA = {
  hero: {
    badge: "🏆 #1 Rated Web Design Agency in Hyderabad | 500+ Projects Delivered",
    h1: "Website Design Company in Hyderabad",
    subhead: "Professional Web Development for Telangana's IT Capital Starting ₹29,999",
    text: "FactoryJet is the leading website design company in Hyderabad with 25+ years of combined expertise in web design, e-commerce development, AI-powered digital marketing, CRM implementation, and complete digital transformation for IT companies, startups, pharma businesses, healthcare providers, manufacturers, and growing enterprises across Telangana. We serve businesses in HITEC City, Madhapur, Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Begumpet, Ameerpet, Kukatpally, Secunderabad, LB Nagar, Uppal, Dilsukhnagar, Financial District, Nanakramguda, Raidurg, Miyapur, and all Hyderabad neighborhoods with custom website development, Shopify development, WooCommerce development, React development, Next.js development, WordPress development, and enterprise web applications — all delivered in 4-7 days, not months. As the best web design company in Hyderabad, we've helped 500+ businesses across India's fastest-growing tech hub launch professional, mobile-optimized, SEO-ready websites that convert visitors into customers. Whether you're a SaaS startup in HITEC City, a pharma company in Genome Valley, a retail business in Banjara Hills, or an e-commerce brand in Madhapur — FactoryJet delivers results. Hyderabad has emerged as India's #2 IT hub with 1,500+ tech companies and 600,000+ IT professionals. The city's startup ecosystem is thriving with 4,000+ startups. FactoryJet understands this dynamic market and builds websites that help Hyderabad businesses compete globally. If you're searching for a website design company near me, web design company Hyderabad, affordable website designer in HITEC City, or best web development agency in Telangana — FactoryJet works with startups, SMBs, enterprises, and growing businesses across the Hyderabad metropolitan region."
  },
  entity: {
    fullText: "FactoryJet is a registered digital transformation company in India (CIN: XXXXXXXXX) with headquarters in HITEC City, Hyderabad. Founded by technology veterans with 25+ years of combined experience in web development, e-commerce, and enterprise software, FactoryJet serves small and medium businesses across Telangana and India. Our Hyderabad team specializes in custom website design, e-commerce development on Shopify, WooCommerce, and Magento, AI-powered digital marketing including SEO, GEO, AEO, and AIO optimization, CRM implementation with HubSpot, ZOHO, and Salesforce, and ERPNext implementation for manufacturing and distribution companies. We have completed 500+ projects for businesses across Hyderabad's diverse economy — IT and software companies in HITEC City, pharmaceutical companies in Genome Valley, healthcare providers across the city, manufacturing units in Jeedimetla, retail businesses in Banjara Hills, startups in T-Hub and We Hub, and e-commerce brands across Telangana. FactoryJet is a Google Partner, Meta Business Partner, Shopify Partner, HubSpot Partner, and ERPNext certified partner. Our ISO-certified processes ensure quality, security, and timely delivery for every project."
  },
  faqs: [
    {
      question: "How much does website design cost in Hyderabad?",
      answer: "Website design costs in Hyderabad range from ₹15,000 to ₹10,00,000+ depending on complexity. Basic template websites cost ₹15-30K. Custom business websites cost ₹50,000-1,50,000. E-commerce websites cost ₹80,000-3,00,000. SaaS and enterprise sites cost ₹1,50,000-5,00,000+. FactoryJet offers transparent pricing starting at ₹29,999 for starter websites, ₹59,999 for business websites, and ₹99,999 for e-commerce websites — significantly more affordable than most HITEC City agencies."
    },
    {
      question: "How long does it take to build a website in Hyderabad?",
      answer: "Website development timelines in Hyderabad typically range from 4-16 weeks depending on the agency. Simple websites take 1-2 weeks. Business websites take 2-4 weeks. E-commerce websites take 3-8 weeks. FactoryJet delivers most websites in 7 days — 50-70% faster than the Hyderabad industry average — thanks to our AI-powered development process and experienced team."
    },
    {
      question: "Which is the best website design company in Hyderabad?",
      answer: "The best website design company in Hyderabad depends on your specific needs. For IT companies, startups, and SMBs seeking affordable, fast, high-quality websites with modern tech stack (React, Next.js), FactoryJet is consistently rated among the top choices with a 4.9/5 Google rating and 500+ completed projects. Key factors to consider: portfolio quality, delivery timeline, tech stack, pricing transparency, post-launch support, and industry expertise."
    },
    {
      question: "Do you provide mobile-friendly websites?",
      answer: "Yes, absolutely. All FactoryJet websites are mobile-first responsive. With 78% of Hyderabad's internet users browsing on mobile devices, mobile optimization is non-negotiable. We design for mobile first, then scale up to tablet and desktop. Google's mobile-first indexing means mobile-friendly websites rank higher in search results."
    },
    {
      question: "Can you build an e-commerce website for my Hyderabad business?",
      answer: "Yes! We build complete e-commerce stores on Shopify, WooCommerce, Magento, and custom platforms. Our e-commerce package (₹99,999) includes product catalog, payment gateway integration (Razorpay, PayU, CCAvenue, UPI), shipping integration (Shiprocket, Delhivery, BlueDart), inventory management, order tracking, and customer accounts. We've helped Hyderabad retailers generate crores in online revenue."
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer: "Yes. All projects include 30-60 days of post-launch support for bug fixes and minor updates. After that, our Annual Maintenance Contracts (AMC) start at just ₹2,999/month and include software updates, security patches, daily backups, performance monitoring, and technical support."
    },
    {
      question: "Will my website rank on Google Search?",
      answer: "Yes. Basic SEO is included in all packages: technical SEO setup, meta tags optimization, XML sitemap, robots.txt, Google Analytics integration, and Search Console setup. For advanced SEO including content marketing, link building, local SEO, GEO (Generative Engine Optimization), and AIO (AI Optimization), we offer specialized packages."
    },
    {
      question: "What's the difference between WordPress and React/Next.js?",
      answer: "WordPress is a content management system — easy to use, great for blogs and corporate sites, with thousands of plugins, but can be slower. React/Next.js are modern JavaScript frameworks — faster (sub-2-second load times), more customizable, better for web applications and SaaS products, but require technical expertise to maintain. FactoryJet offers both: WordPress for content-heavy sites, React/Next.js for high-performance applications."
    },
    {
      question: "Do you work with IT companies and startups in HITEC City?",
      answer: "Yes! IT and startups are our specialty. We've built 100+ websites for HITEC City IT companies, SaaS startups in T-Hub and We Hub, software services firms, and tech consultancies. We understand B2B lead generation, product positioning, technical content, and the fast-paced startup environment."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. Website redesign starts at ₹39,999. We migrate your content, preserve SEO rankings with proper 301 redirects, improve design and user experience, optimize for speed, and give you a modern, high-converting website. Most redesigns are completed in 7-10 days."
    },
    {
      question: "What payment gateways do you integrate?",
      answer: "We integrate all major Indian payment gateways: Razorpay (most popular for startups), PayU, CCAvenue, Instamojo, Cashfree, and PhonePe Business. For UPI payments, we support all major UPI apps. For international payments: Stripe and PayPal. Multi-gateway setups are available for enterprises."
    },
    {
      question: "Do you provide hosting services?",
      answer: "We assist with hosting setup on reliable providers like AWS, Vercel, Netlify, Cloudflare, and managed WordPress hosting. Hosting typically costs ₹500-5,000/month depending on traffic and requirements. First-year hosting assistance is included in all our packages."
    },
    {
      question: "How many revisions are included in the design process?",
      answer: "Unlimited revisions during the design phase. We work until you're 100% satisfied before moving to development. Our collaborative process ensures your vision is perfectly captured in the final design."
    },
    {
      question: "Can I update content myself after the website is launched?",
      answer: "Yes. We build on user-friendly CMS platforms (WordPress, Shopify, Webflow) that allow you to update content — text, images, blog posts — without any technical knowledge. Training is included in every project delivery."
    },
    {
      question: "Do you serve areas outside Hyderabad city?",
      answer: "Yes. We serve Greater Hyderabad including Secunderabad, Gachibowli, Kukatpally, Miyapur, LB Nagar, Uppal, and surrounding areas. We also work with clients across Telangana, India, and internationally via video calls and collaborative tools."
    },
    {
      question: "What if I need e-commerce with B2B features?",
      answer: "Our B2B Portal Development (starting ₹2,50,000) includes customer-specific pricing, bulk ordering, dealer/distributor accounts, credit terms management, ERP integration (ERPNext, SAP), and advanced analytics. Perfect for manufacturers and wholesalers."
    },
    {
      question: "Do you sign contracts and NDAs?",
      answer: "Yes. We provide detailed project contracts outlining scope, timeline, deliverables, and payment terms. We sign NDAs when required to protect your business information, ideas, and proprietary data."
    },
    {
      question: "What's included in the ₹29,999 starter package?",
      answer: "Up to 5 pages, mobile-responsive design, basic SEO setup (meta tags, sitemap), contact form with email notifications, WhatsApp integration, Google Analytics + Search Console, SSL certificate, 1-year hosting assistance, and 30 days post-launch support."
    },
    {
      question: "Can we meet in person for discussions?",
      answer: "Yes, for Hyderabad-based clients, we offer in-person meetings at our HITEC City office or your location. Most ongoing communication happens through video calls (Zoom, Google Meet) and project management tools (Notion, Trello) for efficiency."
    },
    {
      question: "Do you offer EMI payment options?",
      answer: "Yes. For projects above ₹50,000, we offer flexible payment options including milestone-based payments (50% upfront, 50% on launch) and EMI options through partner platforms. Enterprise clients can discuss custom payment terms."
    },
    {
      question: "What is your development process?",
      answer: "Our 7-day process: Day 1 - Discovery & strategy call. Day 2 - Design mockups (2-3 options). Days 3-4 - Development and integration. Day 5 - Content and SEO setup. Day 6 - Testing and QA. Day 7 - Launch and handover. Ongoing - Support and optimization."
    },
    {
      question: "Can you integrate WhatsApp on my website?",
      answer: "Yes, WhatsApp integration is included in all packages. We add WhatsApp chat buttons, click-to-chat links, and can integrate WhatsApp Business API for automated responses and lead management."
    },
    {
      question: "How do you ensure website speed and performance?",
      answer: "We optimize images, minify code, use CDN (Content Delivery Networks), implement lazy loading, choose fast hosting, and follow Core Web Vitals best practices. Our target: sub-2-second load time. We provide performance reports and recommendations."
    },
    {
      question: "Do you offer digital marketing services along with website design?",
      answer: "Yes. We offer comprehensive digital marketing: SEO (Search Engine Optimization), GEO (Generative Engine Optimization for AI search), AEO (Answer Engine Optimization), Social Media Management, Google Ads, Meta Ads, and Content Marketing. Many clients bundle website + marketing for complete digital presence."
    },
    {
      question: "What makes you different from freelance web designers?",
      answer: "Unlike freelancers, we offer: (1) Team-based delivery — no single point of failure, (2) Structured process with project management, (3) Legal contracts and accountability, (4) Long-term support and AMC options, (5) Broader expertise (design, development, SEO, marketing), (6) Faster delivery with dedicated resources."
    },
    {
      question: "Do you provide logo design and branding?",
      answer: "Yes. We offer complete branding packages including logo design, brand identity (colors, typography, guidelines), and brand collateral (business cards, letterhead, social media templates). Branding can be bundled with website for better rates."
    },
    {
      question: "What happens after my website is launched?",
      answer: "Post-launch, you receive: (1) 30-60 days free support, (2) Training on content management, (3) All login credentials and documentation, (4) Performance and analytics setup, (5) Recommendations for growth. We offer AMC for ongoing support."
    },
    {
      question: "Can you build multi-language websites?",
      answer: "Yes. We build multi-language websites for businesses targeting diverse audiences. Supports Hindi, Telugu, English, and other languages. Technical implementation includes proper hreflang tags for SEO and easy content management for each language."
    },
    {
      question: "Which CMS do you recommend?",
      answer: "Depends on your needs. WordPress for blogs and content-heavy sites. Shopify for quick e-commerce launch. WooCommerce for WordPress-based e-commerce. Webflow for design-focused sites. Custom (React/Next.js) for high-performance applications. We recommend based on your specific requirements."
    },
    {
      question: "How do I get started with FactoryJet?",
      answer: "Three easy steps: (1) Book a free 30-minute consultation — fill the form on this page or WhatsApp us, (2) Receive a custom proposal within 2 hours with scope, timeline, and pricing, (3) Start your project — we begin work immediately upon confirmation. Most websites go live within 7 days."
    }
  ],
  services: [
    {
      title: "Startup Website Package",
      price: "₹29,999",
      originalPrice: "₹49,999",
      tag: "Most Popular for Startups",
      icon: "🚀",
      description: "Perfect for T-Hub startups, We Hub entrepreneurs, and first-time founders launching their MVP or company website. Get a professional digital presence in 5 days.",
      includes: ["Up to 5 pages", "Mobile-responsive", "Basic SEO setup", "Contact form", "WhatsApp integration", "Google Analytics", "SSL certificate", "1-year hosting assist", "30 days support"],
      bestFor: "Seed-stage startups, solopreneurs",
      delivery: "5 business days",
      className: "md:col-span-1 bg-gradient-to-br from-white to-blue-50"
    },
    {
      title: "Business Website Package",
      price: "₹59,999",
      originalPrice: "₹89,999",
      tag: "Best for Growing SMBs",
      icon: "💼",
      description: "Ideal for established Hyderabad businesses — IT services, consulting firms, and growing SMBs needing a comprehensive digital presence.",
      includes: ["Up to 12 pages", "Custom UI/UX", "Advanced on-page SEO", "Blog functionality", "CRM integration", "Social media integration", "Performance optimization", "60 days support"],
      bestFor: "IT services, consulting firms",
      delivery: "7 business days",
      className: "md:col-span-1 bg-white"
    },
    {
      title: "E-Commerce Store Package",
      price: "₹99,999",
      originalPrice: "₹1,49,999",
      tag: "Complete Online Store",
      icon: "🛒",
      description: "Full e-commerce solution for Hyderabad retailers and D2C brands. Shopify, WooCommerce, or custom platform.",
      includes: ["Up to 100 products", "Shopify/WooCommerce", "Payment gateway", "Shipping integration", "Inventory mgmt", "Order tracking", "Customer accounts", "Abandoned cart recovery", "90 days support"],
      bestFor: "Retail, fashion, electronics",
      delivery: "10-14 business days",
      className: "md:col-span-1 bg-white"
    },
    {
      title: "SaaS Website Package",
      price: "₹1,49,999",
      originalPrice: "₹2,49,999",
      tag: "Built for Conversions",
      icon: "⚡",
      description: "High-converting marketing websites for Hyderabad's SaaS companies. Built on React/Next.js for blazing performance.",
      includes: ["Up to 20 pages", "React/Next.js", "Custom animations", "Conversion-optimized", "A/B testing setup", "CRM integration", "Analytics dashboard", "Demo booking system"],
      bestFor: "SaaS startups, tech products",
      delivery: "14-21 business days",
      className: "md:col-span-2 bg-jet-navy text-white border-none"
    },
    {
      title: "Pharma & Healthcare",
      price: "₹79,999",
      originalPrice: "₹1,19,999",
      tag: "Compliance-Ready",
      icon: "🏥",
      description: "Specialized websites for Hyderabad's pharma and healthcare sector. HIPAA-aware design, patient-friendly interfaces.",
      includes: ["Up to 15 pages", "Healthcare UI/UX", "Online booking", "Doctor profiles", "Patient portal", "HIPAA-aware", "Mobile app option", "Multi-language"],
      bestFor: "Hospitals, clinics, pharma",
      delivery: "10-14 business days",
      className: "md:col-span-1 bg-white"
    },
    {
      title: "IT Services Website",
      price: "₹69,999",
      originalPrice: "₹99,999",
      tag: "Built for Tech",
      icon: "💻",
      description: "Professional websites for HITEC City IT companies. Showcase expertise, generate enterprise leads.",
      includes: ["Up to 12 pages", "Service portfolio", "Case studies", "Tech stack display", "Careers page", "Blog", "Lead magnets", "LinkedIn integration"],
      bestFor: "IT services, software firms",
      delivery: "7-10 business days",
      className: "md:col-span-1 bg-white"
    },
    {
      title: "Real Estate Website",
      price: "₹89,999",
      originalPrice: "₹1,29,999",
      tag: "Property Showcase",
      icon: "🏠",
      description: "Feature-rich websites for Hyderabad's booming real estate market. Project showcases, virtual tours.",
      includes: ["Up to 15 pages", "Listing mgmt", "Advanced search", "Virtual tours", "EMI calculator", "Lead forms", "Maps integration", "CRM integration"],
      bestFor: "Builders, developers, agents",
      delivery: "10-14 business days",
      className: "md:col-span-1 bg-white"
    },
    {
      title: "Education & Training",
      price: "₹69,999",
      originalPrice: "₹99,999",
      tag: "Student-Friendly",
      icon: "🎓",
      description: "Complete websites for Hyderabad's educational institutions, coaching centers, and e-learning platforms.",
      includes: ["Up to 12 pages", "Course catalog", "Online admissions", "Faculty profiles", "Student portal", "Fee payment", "Event mgmt", "Blog"],
      bestFor: "Schools, colleges, coaching",
      delivery: "7-10 business days",
      className: "md:col-span-1 bg-white"
    },
    {
      title: "B2B Portal Development",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      tag: "Enterprise Solution",
      icon: "🏭",
      description: "Enterprise-grade B2B portals for manufacturers and distributors. Custom pricing, bulk orders.",
      includes: ["Custom React/Next.js", "Customer pricing", "Bulk orders", "Dealer portals", "Inventory sync", "ERP integration", "Advanced analytics", "Multi-user roles"],
      bestFor: "Manufacturers, distributors",
      delivery: "30-45 business days",
      className: "md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    },
    {
      title: "Website Redesign",
      price: "₹39,999",
      originalPrice: "₹69,999",
      tag: "Modernize",
      icon: "🔄",
      description: "Transform your outdated website into a modern asset. Preserve SEO, improve performance.",
      includes: ["Design overhaul", "Modern UI/UX", "Mobile optimization", "Speed optim", "SEO migration", "Content migration", "Analytics setup", "30 days support"],
      bestFor: "Outdated websites",
      delivery: "7-10 business days",
      className: "md:col-span-1 bg-jet-blue/10 border-jet-blue"
    }
  ],
  caseStudies: [
    {
      badge: "AGRITECH | DIGITAL TRANSFORMATION",
      title: "Grofresh Agro (ERP Transformation)",
      client: "Grofresh Agro, Hyderabad",
      challenge: "Grofresh Agro was running their entire operation on spreadsheets and manual processes. No website presence, disconnected systems, month-end closing taking 15+ days, inventory discrepancies, and zero digital visibility in a competitive agritech market.",
      solution: "FactoryJet delivered complete digital transformation: Professional corporate website with product catalog, ERPNext implementation covering inventory, sales, purchase, and accounting, E-commerce integration for B2B customers, and Digital marketing strategy.",
      result: ["100% digital transformation achieved", "Month-end close reduced from 15 days to 2 days", "70% improvement in operational efficiency", "Complete inventory visibility across warehouses", "50% reduction in manual data entry errors", "B2B customer portal live with 100+ active buyers"],
      timeline: "90 days complete transformation"
    },
    {
      badge: "HOME DECOR | E-COMMERCE",
      title: "Belle Maison (E-Commerce Success)",
      client: "Belle Maison, Multi-city D2C Brand",
      challenge: "Belle Maison had beautiful products but no online sales channel. They were dependent on offline retail and struggling to scale. Needed both B2B (wholesale) and DTC (direct-to-consumer) capabilities.",
      solution: "FactoryJet built a comprehensive e-commerce ecosystem: Dual storefronts: B2B wholesale portal + DTC Shopify store, 800+ products catalogued with professional photography, Razorpay + Shiprocket integration, Inventory sync between B2B and DTC.",
      result: ["₹1.5 Crore sales in first 120 days", "800+ products live across both platforms", "2,000+ customers acquired", "B2B portal handling 50+ wholesale accounts", "40% repeat purchase rate", "Average order value ₹3,500+", "Instagram following grew to 15K+"],
      timeline: "45 days to launch, ongoing optimization"
    },
    {
      badge: "MARKETING AGENCY | B2B LEAD GENERATION",
      title: "Impulse Branding Solutions (Corporate Growth)",
      client: "Impulse Branding Solutions, Hyderabad",
      challenge: "Impulse Branding was an established creative agency but relied entirely on referrals. No website, no SEO presence, limited scalability. Wanted to position as a premium B2B partner.",
      solution: "FactoryJet delivered complete digital repositioning: Premium corporate website showcasing portfolio, SEO strategy targeting B2B marketing keywords, Content marketing program with case studies, LinkedIn optimization and thought leadership.",
      result: ["₹3 Crore in new business revenue (6 months)", "125% increase in organic traffic", "40+ keywords ranking on page 1", "200% increase in inbound leads", "Premium positioning achieved", "Won 3 enterprise clients from organic search", "Speaking engagements from thought leadership content"],
      timeline: "Website in 14 days, ongoing SEO partnership"
    },
    {
      badge: "CONSULTING | GLOBAL B2B",
      title: "Formative Concepts (B2B Consulting)",
      client: "Formative Concepts, B2B Consulting Firm",
      challenge: "Formative Concepts had expertise but zero digital visibility. They were losing opportunities to competitors who showed up in Google searches. Needed to establish thought leadership and generate qualified enterprise leads globally.",
      solution: "FactoryJet implemented comprehensive digital strategy: Professional website with thought leadership focus, SEO + GEO + AIO optimization for AI visibility, Content strategy with whitepapers and case studies, HubSpot CRM integration.",
      result: ["₹90 Lakhs in revenue within 4 months", "0 to 5,000 global visitors monthly", "ChatGPT and Perplexity now cite their content", "30+ qualified enterprise leads per month", "3 global enterprise contracts won", "Established as thought leaders in their niche", "Featured in industry publications"],
      timeline: "30 days to launch, ongoing content partnership"
    }
  ] as CaseStudyProps[],
  footerSEO: "FactoryJet is the leading website design company in Hyderabad serving businesses across Telangana with professional web development, e-commerce solutions, and digital transformation services. As the best web design agency in Hyderabad, we specialize in custom website design, Shopify development, WooCommerce development, WordPress development, React development, and Next.js development for IT companies, startups, pharma businesses, healthcare providers, manufacturers, and enterprises. Our Hyderabad office in HITEC City serves clients in Madhapur, Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Begumpet, Ameerpet, Kukatpally, Secunderabad, LB Nagar, Uppal, Dilsukhnagar, Financial District, Nanakramguda, Raidurg, Miyapur, Manikonda, and all Greater Hyderabad areas. We also serve clients across Telangana including Warangal, Nizamabad, Karimnagar, and Khammam. Whether you need a website design company near me in HITEC City, affordable web development in Madhapur, e-commerce website design in Gachibowli, SaaS website development in Hyderabad, pharma company website design, IT company website development, or hospital website design — FactoryJet delivers results with transparent pricing starting at ₹29,999. Our services include website design, website redesign, e-commerce development, Shopify stores, WooCommerce stores, B2B portals, landing pages, SEO optimization, GEO optimization, AEO optimization, AIO optimization, digital marketing, social media management, Google Ads, Meta Ads, CRM implementation (HubSpot, ZOHO, Salesforce), and ERPNext implementation. FactoryJet is a Google Partner, Meta Business Partner, Shopify Partner, HubSpot Partner, and ERPNext certified partner serving 500+ businesses with a 4.9★ Google rating. Contact us today for a free website audit and consultation."
};