import React from 'react';
import { Rocket, TrendingUp, Zap, Shield, Globe, ShoppingCart, Search, Server, Cpu, Layers, Lock, BarChart3 } from 'lucide-react';

// --- Web Design Packages ---
export const WEB_PACKAGES = [
  {
    id: 'launch',
    name: 'Launch',
    subtitle: 'Professional Website in 2 Weeks',
    price: '$1,999',
    period: 'One-Time Fixed Fee',
    save: 'Save $12,850',
    delivery: '10-14 Business Days',
    idealFor: ['Professional Service Providers', 'Solopreneurs', 'Seed Startups'],
    icon: <Rocket className="w-5 h-5" />,
    color: 'border-slate-200 hover:border-blue-300',
    btnColor: 'bg-slate-900 hover:bg-slate-800',
    popular: false,
    features: [
      { category: 'CORE', items: ['Custom Website Design (5-7 pages)', 'Mobile-Responsive Layout', 'Professional Typography', 'Stock Image Integration', 'Contact Form + Validation'] },
      { category: 'TECH STACK', items: ['WordPress or React/Next.js', 'SSL Certificate (HTTPS)', 'Domain Configuration', 'Speed Optimization', 'Cross-Browser Testing'] },
      { category: 'SEO', items: ['Basic SEO Setup (10 keywords)', 'Meta Tags Optimization', 'XML Sitemap', 'Google Analytics 4', 'Search Console Setup'] },
      { category: 'CONTENT', items: ['Homepage Copywriting', 'AI-Generated Drafts', 'Content Mgmt Training', 'User Documentation'] },
      { category: 'SUPPORT', items: ['30 Days Post-Launch Support', '2 Rounds of Revisions', 'Site Backup', 'Launch Checklist'] }
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Comprehensive Business Website',
    price: '$3,999',
    period: 'One-Time Fixed Fee',
    save: 'Save $37,550',
    delivery: '14-21 Business Days',
    idealFor: ['Growing B2B Companies', 'Lead Gen Businesses', 'Service Firms'],
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'border-jet-blue ring-2 ring-jet-blue shadow-2xl shadow-navy/10',
    btnColor: 'bg-jet-blue hover:bg-[#003D99]',
    popular: true,
    tag: 'Most Popular',
    features: [
      { category: 'CORE', items: ['12 Total Pages', 'Premium Design System', 'Custom Illustrations (10)', 'Advanced Animations', 'Hero Video Integration'] },
      { category: 'ADVANCED', items: ['Blog Platform + Categories', 'Team Profiles', 'Case Studies Section', 'Testimonial Slider', 'Newsletter Integration', 'Live Chat Widget'] },
      { category: 'SEO PRO', items: ['Advanced SEO (30 keywords)', 'Competitor Analysis', 'Advanced Schema', 'Heatmap (Hotjar)', 'Conversion Tracking'] },
      { category: 'INTEGRATIONS', items: ['HubSpot/Salesforce CRM', 'Mailchimp/Klaviyo', 'Booking Systems', 'Stripe Integration', 'Social Auto-Post'] },
      { category: 'CONTENT', items: ['Pro Copywriting (All Pages)', '5 SEO Blog Posts', 'Service Page Copy', '2 Case Studies'] },
      { category: 'SUPPORT', items: ['CMS Training (2 hrs)', 'SEO Workshop', '60 Days Support', 'Monthly Reviews (2)'] }
    ]
  },
  {
    id: 'scale',
    name: 'Scale',
    subtitle: 'Enterprise-Grade Platform',
    price: '$7,999',
    period: 'One-Time Fixed Fee',
    save: 'Save $142,150',
    delivery: '21-35 Business Days',
    idealFor: ['Mid-Market Companies', 'High-Growth Startups', 'Enterprise B2B'],
    icon: <Zap className="w-5 h-5" />,
    color: 'border-slate-200 hover:border-jet-orange',
    btnColor: 'bg-jet-orange hover:bg-[#E55A28]',
    popular: false,
    features: [
      { category: 'CORE', items: ['25+ Total Pages', '100% Custom Design', 'Brand Identity Refresh', 'Custom Illustrations (25+)', 'Micro-Interactions', 'Video Production (2)'] },
      { category: 'ENTERPRISE', items: ['Member Portal / Login', 'Advanced Search', 'Multi-Language (2)', 'Knowledge Base', 'Resource Library', 'Interactive Tools'] },
      { category: 'ANALYTICS', items: ['Custom Dashboard', 'User Behavior Analysis', 'A/B Testing Setup', 'Monthly Reports'] },
      { category: 'INTEGRATIONS', items: ['Advanced CRM Workflows', 'Marketing Automation', 'API Development', 'Zapier/Make Automation'] },
      { category: 'SECURITY', items: ['Security Hardening', 'DDoS Protection', 'Security Audits', 'GDPR/CCPA Compliance'] },
      { category: 'CONTENT', items: ['Pro Copywriting (All)', '20 SEO Blog Posts', '2 White Papers', '5 Case Studies'] },
      { category: 'VIP SUPPORT', items: ['Training (8 hrs)', '90 Days Premium Support', 'Dedicated Manager', 'Strategy Calls'] }
    ]
  }
];

// --- E-Commerce Packages ---
export const ECOM_PACKAGES = [
  {
    id: 'store_launch',
    name: 'Store Launch',
    subtitle: 'Professional Store in 3 Weeks',
    price: '$2,999',
    period: 'One-Time Fixed Fee',
    save: 'Save $38,850',
    delivery: '14-21 Business Days',
    idealFor: ['New E-Com Brands', 'Fashion', 'Home Decor', 'Dropshipping'],
    icon: <ShoppingCart className="w-5 h-5" />,
    color: 'border-slate-200 hover:border-blue-300',
    btnColor: 'bg-slate-900 hover:bg-slate-800',
    features: [
        { category: 'STRATEGY', items: ['90-Min Strategy Session', 'Competitive Analysis', 'Shopify/Woo Design', 'Mobile-First UI'] },
        { category: 'SETUP', items: ['Config (50 Products)', 'Product Categories', 'Inventory Setup', 'Product SEO', 'AI Descriptions'] },
        { category: 'COMMERCE', items: ['Stripe/PayPal Setup', 'Tax Calculation', 'Abandoned Cart', 'Shipping Zones', 'Wishlist'] },
        { category: 'MARKETING', items: ['Email Integration', 'Welcome Series', 'Store SEO', 'GA4 E-Commerce', 'Pixel Setup'] },
        { category: 'SUPPORT', items: ['Training', '30-Day Support', 'Bug Fixes'] }
    ]
  },
  {
    id: 'store_growth',
    name: 'Store Growth',
    subtitle: 'Scaling Brand Platform',
    price: '$5,999',
    period: 'One-Time Fixed Fee',
    save: 'Save $111,450',
    delivery: '21-28 Business Days',
    idealFor: ['Growing Brands', '50-150 Products', 'Subscription Boxes'],
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'border-jet-blue ring-2 ring-jet-blue shadow-2xl shadow-navy/10',
    btnColor: 'bg-jet-blue hover:bg-[#003D99]',
    popular: true,
    tag: 'Best Value',
    features: [
        { category: 'CORE', items: ['Up to 150 Products', 'Advanced Variants', 'Faceted Search', 'Premium Custom Theme', 'App-Like UX'] },
        { category: 'AI POWER', items: ['AI Copywriting (150)', 'Title A/B Testing', 'AI Feature Bullets'] },
        { category: 'FEATURES', items: ['Upsell/Cross-sell', 'Bundles', 'Subscriptions', 'Back-in-Stock Alerts', 'Buy Now Pay Later'] },
        { category: 'LOGISTICS', items: ['Multi-Zone Shipping', '10 Email Flows', 'Customer Segmentation', 'Advanced Attribution'] },
        { category: 'SUPPORT', items: ['4 Hours Training', '60-Day Premium Support', 'Bi-Weekly Calls'] }
    ]
  },
  {
    id: 'store_scale',
    name: 'Store Scale',
    subtitle: 'Enterprise Commerce',
    price: '$9,999',
    period: 'One-Time Fixed Fee',
    save: 'Save $382,450',
    delivery: '28-42 Business Days',
    idealFor: ['Established Brands', '200+ Products', 'International', 'B2B'],
    icon: <Globe className="w-5 h-5" />,
    color: 'border-slate-200 hover:border-jet-orange',
    btnColor: 'bg-jet-orange hover:bg-[#E55A28]',
    features: [
        { category: 'CORE', items: ['Up to 500 Products', 'Complex Variants', 'Ultra-Premium Design', '360° Product Views', 'Configurators'] },
        { category: 'ENTERPRISE AI', items: ['AI Descriptions (500)', 'Image Enhancement', 'Inventory Forecasting', 'Pricing Optimization'] },
        { category: 'FEATURES', items: ['Wholesale/B2B', 'Tiered Pricing', 'Loyalty Programs', 'Multi-Currency', 'ERP Integration'] },
        { category: 'LOGISTICS', items: ['Multi-Warehouse', 'Advanced Returns', 'Marketplace Sync (Amazon)'] },
        { category: 'VIP SUPPORT', items: ['90-Day Support', 'Dedicated Manager', '24/7 Emergency', 'Weekly Strategy'] }
    ]
  }
];

// --- AI SEO Packages ---
export const SEO_PACKAGES = [
    {
        id: 'seo_foundation',
        name: 'Foundation',
        subtitle: 'Multi-Channel Presence',
        price: '$399',
        period: 'Per Month',
        save: 'Save $7,001/mo',
        delivery: 'Monthly',
        idealFor: ['Local Biz', 'Startups'],
        icon: <Search className="w-5 h-5" />,
        color: 'border-slate-200 hover:border-blue-300',
        btnColor: 'bg-slate-900 hover:bg-slate-800',
        features: [
            { category: 'TRADITIONAL SEO', items: ['20 Target Keywords', 'On-Page Opt (10 pages)', 'Tech Monitoring', 'Monthly Report', '5 Backlinks'] },
            { category: 'AI GEO', items: ['3 AI Platforms', 'E-E-A-T Building', 'AI Citation Monitor'] },
            { category: 'AEO', items: ['5 Featured Snippets', 'Schema Markup', 'Voice Optimization'] },
            { category: 'CONTENT', items: ['4 SEO Blog Posts', 'Content Calendar', 'Distribution'] }
        ]
    },
    {
        id: 'seo_growth',
        name: 'Growth',
        subtitle: 'Industry Domination',
        price: '$799',
        period: 'Per Month',
        save: 'Save $27,201/mo',
        delivery: 'Monthly',
        idealFor: ['Growing B2B', 'Scale-Ups'],
        icon: <TrendingUp className="w-5 h-5" />,
        color: 'border-jet-blue ring-2 ring-jet-blue shadow-2xl shadow-navy/10',
        btnColor: 'bg-jet-blue hover:bg-[#003D99]',
        popular: true,
        tag: 'Recommended',
        features: [
            { category: 'TRADITIONAL SEO', items: ['50 Target Keywords', 'On-Page Opt (25 pages)', '15 Backlinks/mo', 'Weekly Rankings'] },
            { category: 'ADVANCED GEO', items: ['6 AI Platforms', 'Training Data Opt', 'Multi-Platform Citations'] },
            { category: 'ADVANCED AEO', items: ['15 Featured Snippets', 'Rich Results', 'PAA Optimization'] },
            { category: 'CONTENT', items: ['LLM Citations', '8 Premium Posts/Mo', '2 Long-Form Guides', 'Infographics'] },
            { category: 'REPORTING', items: ['Bi-Weekly Updates', 'Custom Dashboard', 'Strategy Calls'] }
        ]
    },
    {
        id: 'seo_domination',
        name: 'Domination',
        subtitle: 'Total Market Control',
        price: '$1,499',
        period: 'Per Month',
        save: 'Save $83,901/mo',
        delivery: 'Monthly',
        idealFor: ['Enterprise', 'Global Brands'],
        icon: <Globe className="w-5 h-5" />,
        color: 'border-slate-200 hover:border-jet-orange',
        btnColor: 'bg-jet-orange hover:bg-[#E55A28]',
        features: [
            { category: 'TRADITIONAL SEO', items: ['100+ Keywords', 'On-Page (50 pages)', '30 Authority Links', 'Intl SEO', 'Daily Rankings'] },
            { category: 'ENTERPRISE GEO', items: ['15+ AI Platforms', 'Custom AI Strategy', 'Multi-Language AI'] },
            { category: 'ENTERPRISE AEO', items: ['Snippet Domination', 'Knowledge Panel', 'Voice Domination'] },
            { category: 'CONTENT', items: ['16 Premium Articles', '4 Pillar Pieces', 'White Papers', 'PR Outreach'] },
            { category: 'VIP SUPPORT', items: ['Dedicated Manager', 'Weekly Strategy', '24/7 Priority'] }
        ]
    }
];

// --- AMC Packages ---
export const AMC_PACKAGES = [
    {
        id: 'amc_essential',
        name: 'Essential',
        subtitle: 'Basic Protection',
        price: '$99',
        period: 'Per Month',
        save: 'Save 90%',
        delivery: 'Monthly',
        icon: <Shield className="w-5 h-5" />,
        color: 'border-slate-200 hover:border-blue-300',
        btnColor: 'bg-slate-900 hover:bg-slate-800',
        features: [
            { category: 'PROTECTION', items: ['Daily Malware Scan', 'Weekly Security Scan', 'Firewall', 'DDoS Protection'] },
            { category: 'MAINTENANCE', items: ['Daily Backups', '30-Day Retention', '24/7 Monitoring', 'Monthly Updates', 'DB Optimization'] },
            { category: 'SUPPORT', items: ['3 Minor Updates', '5 Image Swaps', '48h Response'] }
        ]
    },
    {
        id: 'amc_business',
        name: 'Business',
        subtitle: 'Proactive Maintenance',
        price: '$199',
        period: 'Per Month',
        save: 'Save 94%',
        delivery: 'Monthly',
        icon: <Server className="w-5 h-5" />,
        color: 'border-jet-blue ring-2 ring-jet-blue shadow-2xl shadow-navy/10',
        btnColor: 'bg-jet-blue hover:bg-[#003D99]',
        popular: true,
        tag: 'Popular',
        features: [
            { category: 'PROTECTION', items: ['Real-Time Scan', 'SSL Management', '2x Daily Backups', '90-Day Retention'] },
            { category: 'PERFORMANCE', items: ['CDN Management', 'Image Optimization', 'Speed Tuning', 'Health Monitor'] },
            { category: 'SUPPORT', items: ['10 Text Updates', '15 Image Updates', '1 New Page/mo', '24h Response', '1 Hr Dev Time'] }
        ]
    },
    {
        id: 'amc_enterprise',
        name: 'Enterprise',
        subtitle: 'White-Glove Service',
        price: '$399',
        period: 'Per Month',
        save: 'Save 96%',
        delivery: 'Monthly',
        icon: <Cpu className="w-5 h-5" />,
        color: 'border-slate-200 hover:border-jet-orange',
        btnColor: 'bg-jet-orange hover:bg-[#E55A28]',
        features: [
            { category: 'PROTECTION', items: ['Real-Time Monitor', 'Pen Testing', 'Hourly Backups', '1-Year Retention', 'Load Testing'] },
            { category: 'STRATEGY', items: ['Advanced Analytics', 'CRO', 'Heatmaps', 'Monthly Strategy'] },
            { category: 'SUPPORT', items: ['Unlimited Updates', '5 New Pages/mo', '5 Hrs Dev Time', '1h Response', 'Dedicated Manager'] }
        ]
    }
];

export const TESTIMONIALS = [
    {
        quote: "We went from outdated DIY site to professional, converting website in 3 weeks. FactoryJet's Launch package was perfect for our startup budget.",
        author: "Sarah M.",
        role: "Founder, SaaS Startup",
        rating: 5
    },
    {
        quote: "Switched from a $15,000 agency quote to FactoryJet's $7,999 Scale package. Got better quality, faster delivery, and ongoing support.",
        author: "Michael R.",
        role: "VP Marketing, B2B Tech",
        rating: 5
    },
    {
        quote: "ChatGPT now recommends our products when people ask for solutions in our category. That alone has brought us 50+ qualified leads per month.",
        author: "Jennifer K.",
        role: "CEO, E-Commerce Business",
        rating: 5
    }
];

// --- Comprehensive FAQs with Categories ---
export const FAQ_ITEMS = [
    { 
        category: "Billing & Payments",
        q: "What are your payment terms for Web Design & E-Commerce projects?", 
        a: "We operate on a transparent 50/50 payment structure. A 50% deposit is required to kickstart the project and secure your development team. The remaining 50% is due only after the project is completed, reviewed, and you are 100% satisfied with the result, just before the final launch." 
    },
    { 
        category: "Billing & Payments",
        q: "Do you offer monthly payment plans for website builds?", 
        a: "Our website and e-commerce packages are typically one-time fixed fees to ensure you own your asset outright. However, we do partner with financing providers (like Klarna or Afterpay for B2B) depending on your region, allowing you to split the cost. For our SEO and AMC services, billing is strictly monthly." 
    },
    { 
        category: "Billing & Payments",
        q: "What specific payment methods do you accept?", 
        a: "We accept all major credit cards (Visa, Mastercard, Amex) via Stripe for secure processing. We also accept bank transfers (ACH/Wire) and Wise for international clients to minimize exchange fees. For projects over $5,000, we can accept USDC/USDT stablecoins." 
    },
    { 
        category: "Plans & Policies",
        q: "Are there any hidden fees or surprise costs?", 
        a: "Absolutely not. Our pricing is all-inclusive for the scope defined. The price you see on the proposal is the price you pay. The only external costs you might have are for third-party tools you choose to own directly (like your domain name registration, roughly $12/year, or specific premium plugin licenses if you opt out of our maintenance plan)." 
    },
    { 
        category: "Plans & Policies",
        q: "Do I fully own the website after payment?", 
        a: "Yes, 100%. Unlike many 'website-as-a-service' agencies that hold your site hostage, once your final payment is made, you receive full intellectual property rights, admin access, and code ownership. You are free to move your site to any host you like in the future." 
    },
    { 
        category: "Project & Delivery",
        q: "Is web hosting included in the package price?", 
        a: "Yes! We include 1 year of high-performance managed hosting with our 'Launch' and 'Growth' packages. This includes SSL certificates, daily backups, and CDN. After the first year, you can choose to stay with our affordable AMC plans or migrate to your own hosting provider." 
    },
    { 
        category: "Plans & Policies",
        q: "What is your refund policy if I'm not happy?", 
        a: "We offer a 14-day 'Design Satisfaction Guarantee'. If you are not happy with the initial design concepts presented during the first two weeks and we cannot rectify it to your liking, we will refund your deposit in full. We build risk-free because we are confident in our quality." 
    },
    { 
        category: "Billing & Payments",
        q: "Do you charge Sales Tax or VAT?", 
        a: "As a US-registered entity, we do not charge VAT for international clients. For US clients, sales tax is calculated based on your specific state nexus laws during checkout. Most service-based digital goods are tax-exempt in many states, but we handle compliance automatically." 
    },
    { 
        category: "Billing & Payments",
        q: "Can I pay in my local currency?", 
        a: "Our base pricing is in USD. However, our payment processors (Stripe/Wise) automatically handle currency conversion, so you can pay in EUR, GBP, CAD, AUD, or INR. The amount charged will be the real-time exchange rate equivalent of the USD price." 
    },
    { 
        category: "Billing & Payments",
        q: "How does billing work for SEO and AMC subscriptions?", 
        a: "SEO and AMC plans are billed automatically on a monthly cycle starting from the day you sign up. You will receive an invoice receipt via email each month. We use Stripe for recurring billing, ensuring PCI-DSS compliance and security." 
    },
    { 
        category: "Plans & Policies",
        q: "Can I cancel my SEO or Maintenance plan anytime?", 
        a: "Yes. We believe in earning your business every month. You can cancel your SEO or AMC subscription with a simple 30-day notice via email. There are no long-term lock-in contracts unless you opted for a discounted annual plan." 
    },
    { 
        category: "Plans & Policies",
        q: "Do you offer discounts for startups or non-profits?", 
        a: "Yes! We support the builder ecosystem. Validated early-stage startups (Pre-Seed/Seed) and registered 501(c)(3) non-profits are eligible for a 10-15% discount on our 'Growth' and 'Scale' packages. Contact our sales team for the application." 
    },
    { 
        category: "Billing & Payments",
        q: "How secure is your payment process?", 
        a: "Extremely secure. We do not store your credit card information on our servers. All transactions are processed through Stripe, the industry standard for payments, which uses AES-256 encryption. We are fully PCI-compliant." 
    },
    { 
        category: "Project & Delivery",
        q: "What happens if I need features not listed in the packages?", 
        a: "Our packages cover 90% of use cases, but we love custom builds! If you need bespoke functionality (e.g., a custom calculator, complex API integration), we will provide a separate line-item quote for that specific feature on top of the package price." 
    },
    { 
        category: "Project & Delivery",
        q: "When does the project timeline officially start?", 
        a: "The clock starts ticking the day after your deposit is received and the onboarding form is completed. This ensures we have all the necessary assets (logo, branding, preferences) to hit the ground running without delays." 
    },
    { 
        category: "Plans & Policies",
        q: "Can I upgrade my plan later?", 
        a: "Absolutely. If you start with 'Launch' and decide you need the features of 'Growth' midway through, you simply pay the difference. For SEO/AMC, you can upgrade or downgrade your tier at the start of any new billing month." 
    },
    { 
        category: "Project & Delivery",
        q: "Do you offer white-label services for other agencies?", 
        a: "Yes, we power the backend for over 15 US-based marketing agencies. We offer special white-label pricing and non-disclosure agreements (NDAs) so you can resell our services to your clients at your own markup." 
    },
    { 
        category: "Billing & Payments",
        q: "What happens if I miss a monthly payment?", 
        a: "We understand things happen. We offer a 7-day grace period for failed payments. Our system will retry the charge 3 times. If payment is still not received, services (like maintenance or SEO work) will be paused until the account is brought current." 
    },
    { 
        category: "Billing & Payments",
        q: "Is there a setup fee for the SEO packages?", 
        a: "No setup fees. The first month's payment covers the initial comprehensive audit, strategy planning, and setup. We believe in delivering value from Day 1 without charging you just to 'onboard' you." 
    },
    { 
        category: "Billing & Payments",
        q: "Do you provide invoices for tax purposes?", 
        a: "Yes, every payment triggers an automatic, itemized invoice sent to your email. These invoices are fully compliant for tax deductions as a 'Business Expense' or 'Professional Services' cost." 
    }
];