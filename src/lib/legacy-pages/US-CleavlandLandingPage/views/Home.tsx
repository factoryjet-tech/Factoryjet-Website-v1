'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ContactForm } from '../components/ContactForm';
import { Heading, Text } from '../components/Typography';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Award, 
  TrendingUp,
  Palette,
  ShoppingCart,
  Settings,
  Check,
  Calendar,
  MapPin,
  Zap,
  Banknote,
  Search,
  Monitor,
  Rocket,
  ClipboardCheck,
  Clock,
  X,
  HelpCircle,
  Lock,
  Server,
  Smartphone,
  BarChart,
  PenTool,
  Image as ImageIcon,
  Phone,
  Quote,
  MessageSquare,
  Users,
  ExternalLink,
  Plus,
  Minus,
  ArrowUp,
  Mail,
  MessageCircle,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Pricing Section State
  const [pricingMode, setPricingMode] = useState<'web' | 'ecommerce' | 'seo' | 'amc'>('web');
  const [openAccordions, setOpenAccordions] = useState<Record<string, string | null>>({});
  const [openAddons, setOpenAddons] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAccordion = (cardId: string, sectionId: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [cardId]: prev[cardId] === sectionId ? null : sectionId
    }));
  };

  const toggleAddon = (addonId: string) => {
    setOpenAddons(prev => ({
      ...prev,
      [addonId]: !prev[addonId]
    }));
  };

  const processSteps = [
    {
      title: "Discovery & Strategy",
      timeline: "Week 1-2",
      icon: <Search className="w-6 h-6" />,
      description: "We start by deeply understanding your business, target audience, and goals. Through comprehensive consultation and competitive analysis, we develop a strategic roadmap that aligns your website with your business objectives.",
      deliverables: ["Project brief and strategy document", "Competitor analysis", "Success metrics definition", "Timeline and milestone planning"]
    },
    {
      title: "Design & Prototyping",
      timeline: "Week 2-4",
      icon: <Palette className="w-6 h-6" />,
      description: "Our designers create stunning visual concepts that bring your brand to life. We develop wireframes, high-fidelity mockups, and clickable prototypes for your review and feedback before any code is written.",
      deliverables: ["Wireframes for all pages", "High-fidelity design mockups", "Clickable prototypes", "Design system documentation"]
    },
    {
      title: "Development & Build",
      timeline: "Week 4-8",
      icon: <Monitor className="w-6 h-6" />,
      description: "Our developers transform approved designs into a fully functional website using modern technologies and best practices. Every line of code is optimized for performance, security, and scalability.",
      deliverables: ["Fully developed website", "CMS integration", "Form and functionality setup", "Mobile responsiveness verified"]
    },
    {
      title: "Testing & Refinement",
      timeline: "Week 7-9",
      icon: <ClipboardCheck className="w-6 h-6" />,
      description: "Rigorous testing across devices, browsers, and screen sizes ensures flawless functionality. We conduct performance optimization, security audits, and user acceptance testing before launch.",
      deliverables: ["QA testing report", "Performance optimization", "Security verification", "Final client approval"]
    },
    {
      title: "Launch & Support",
      timeline: "Week 9-10+",
      icon: <Rocket className="w-6 h-6" />,
      description: "We handle the technical deployment, configure analytics and tracking, and provide comprehensive training. Post-launch, our support team ensures your website continues performing optimally.",
      deliverables: ["Live website launch", "Training documentation", "Analytics setup", "30-day post-launch support"]
    }
  ];

  const portfolioProjects = [
    {
      title: "TechForge Manufacturing",
      industry: "Industrial Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Outdated website with poor mobile experience, low search rankings, no lead generation",
      results: [
        "200% increase in organic traffic",
        "150% mobile conversion boost",
        "75 qualified leads monthly",
        "First-page Google rankings"
      ],
      tech: ["WordPress", "Custom Theme", "WooCommerce B2B"],
      timeline: "8 weeks"
    },
    {
      title: "Luxe Style Boutique",
      industry: "Fashion & Lifestyle",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Wanted to expand from brick-and-mortar to online sales, needed seamless inventory management",
      results: [
        "$250k online revenue in year 1",
        "40% of sales from e-commerce",
        "98% customer satisfaction",
        "35% higher average order value"
      ],
      tech: ["Shopify Plus", "Inventory Sync", "Local Delivery"],
      timeline: "6 weeks"
    },
    {
      title: "Metro Health Partners",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      challenge: "Complex appointment scheduling, HIPAA compliance requirements, patient portal integration",
      results: [
        "60% less phone scheduling",
        "40% new patient acquisition",
        "100% HIPAA compliant",
        "4.8/5 patient satisfaction"
      ],
      tech: ["WordPress", "Patient Portal", "HIPAA Hosting"],
      timeline: "10 weeks"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      position: "Owner",
      company: "Martinez Legal Services",
      industry: "Legal Services",
      initials: "SM",
      rating: 5,
      date: "November 2024",
      quote: "FactoryJet completely transformed our online presence. Our old website was outdated and barely functional on mobile devices. The new website they created is not only beautiful but has increased our client inquiries by 180%. The team was professional, responsive, and delivered exactly what they promised. Best investment we've made in our practice.",
      results: [
        { text: "180% increase in client inquiries", icon: <TrendingUp size={16} /> },
        { text: "3-week delivery (faster than promised)", icon: <Zap size={16} /> },
        { text: "5-star experience", icon: <Star size={16} /> }
      ],
      color: "primary", // Blue
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Michael Thompson",
      position: "Founder & CEO",
      company: "Modern Craft Co.",
      industry: "E-Commerce",
      initials: "MT",
      rating: 5,
      date: "October 2024",
      quote: "We needed an e-commerce platform that could handle our growing product line and FactoryJet delivered beyond expectations. Our new Shopify store is fast, easy to manage, and our customers love it. Sales have increased 250% in just 4 months. The team's expertise in e-commerce is evident in every detail. Highly recommend!",
      results: [
        { text: "250% sales increase in 4 months", icon: <Banknote size={16} /> },
        { text: "Seamless e-commerce experience", icon: <ShoppingCart size={16} /> },
        { text: "45% improvement in conversion", icon: <TrendingUp size={16} /> }
      ],
      color: "secondary", // Orange
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Dr. Jennifer Park",
      position: "Medical Director",
      company: "Family Health Partners",
      industry: "Healthcare",
      initials: "JP",
      rating: 5,
      date: "September 2024",
      quote: "As a healthcare provider, we had very specific requirements for HIPAA compliance and patient data security. FactoryJet not only met all our compliance needs but created a beautiful, patient-friendly website with online appointment booking. Our patient acquisition has increased 65%, and the online booking system has reduced our administrative workload significantly.",
      results: [
        { text: "65% increase in new patients", icon: <Users size={16} /> },
        { text: "100% HIPAA compliant", icon: <Lock size={16} /> },
        { text: "60% reduction in phone scheduling", icon: <Clock size={16} /> }
      ],
      color: "accent", // Green
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  const trustMetrics = [
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "500+", label: "Projects Completed" },
    { value: "25+", label: "Years Experience" }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website in Cleveland?",
      answer: "A typical business website takes 4-8 weeks from project kickoff to launch. Simple brochure sites can be completed in 4-6 weeks, while complex e-commerce or custom web applications may take 8-12 weeks. We provide a detailed timeline during our initial consultation based on your specific requirements. Our AI-enhanced process allows us to deliver faster than traditional agencies without compromising quality.",
      category: "Timeline",
      icon: "⏱️"
    },
    {
      question: "What's included in your website design packages?",
      answer: "All our packages include mobile-responsive design, SEO optimization, Google Analytics setup, contact form integration, and 30 days of post-launch support. Our Starter package ($2,999) includes up to 5 pages, Professional package ($6,999) includes up to 15 pages plus blog/CMS, and Enterprise package ($12,999+) includes unlimited pages, e-commerce, and custom integrations. Every package includes free SSL certificate, hosting setup assistance, and training on how to manage your website.",
      category: "Pricing",
      icon: "💰"
    },
    {
      question: "Do you provide ongoing website maintenance and support?",
      answer: "Yes! We offer Annual Maintenance Contracts (AMC) starting at just $199/month. Our AMC includes regular software updates, security patches, performance monitoring, monthly content updates, backup management, and priority technical support. For clients who prefer managing their own site, we provide comprehensive training and are available for ad-hoc support at competitive hourly rates.",
      category: "Support",
      icon: "🛠️"
    },
    {
      question: "Can you help with SEO and getting found on Google?",
      answer: "Absolutely! Every website we build includes fundamental SEO optimization - proper heading structure, meta tags, XML sitemap, mobile optimization, and fast loading speeds. For clients wanting more comprehensive SEO services, we offer ongoing SEO packages that include keyword research, content optimization, link building, local SEO, and monthly ranking reports. Many of our Cleveland clients rank on the first page of Google within 3-6 months with our SEO services.",
      category: "SEO",
      icon: "🔍"
    },
    {
      question: "What platform do you build websites on?",
      answer: "We work with multiple platforms based on your needs: WordPress (most popular - flexible and easy to manage), Shopify (best for e-commerce), Webflow (great for design-focused sites), and custom development using React/Next.js (for complex applications). We'll recommend the best platform during our consultation based on your goals, budget, and technical requirements. Each platform has its strengths, and we're experts in all of them.",
      category: "Technical",
      icon: "⚙️"
    },
    {
      question: "Will my website work on mobile phones and tablets?",
      answer: "Yes, 100%! Every website we create is mobile-responsive and mobile-first. This means your site will automatically adapt to look perfect on any device - smartphones, tablets, laptops, and desktop computers. With over 60% of web traffic coming from mobile devices, mobile optimization isn't optional - it's essential. We test every site on multiple devices and screen sizes before launch.",
      category: "Technical",
      icon: "📱"
    },
    {
      question: "Can I update the website content myself after it's built?",
      answer: "Absolutely! We build websites on user-friendly content management systems (CMS) that allow you to easily update text, images, blog posts, and more without any coding knowledge. We provide comprehensive training (video tutorials and documentation) on how to manage your content. For clients who prefer not to manage content themselves, our maintenance packages include monthly content updates.",
      category: "Management",
      icon: "✏️"
    },
    {
      question: "How much does a website cost in Cleveland?",
      answer: "Our website projects range from $2,999 for a basic business website to $12,999+ for comprehensive e-commerce or custom applications. The exact cost depends on the number of pages, features required, design complexity, and integrations needed. We offer transparent, upfront pricing with no hidden fees. Most Cleveland small businesses invest between $4,000-$8,000 for a professional website that drives results. We also offer flexible payment plans to make professional web design accessible.",
      category: "Pricing",
      icon: "💵"
    },
    {
      question: "Do you redesign existing websites or only build new ones?",
      answer: "We do both! If you have an existing website that needs a refresh, we can redesign it completely while preserving your content and maintaining your search engine rankings. Website redesigns typically take 4-6 weeks and cost 20-30% less than building from scratch since some content and assets already exist. We'll audit your current site, identify areas for improvement, and create a redesign strategy that addresses your goals.",
      category: "Services",
      icon: "🔄"
    },
    {
      question: "What makes FactoryJet different from other Cleveland web design companies?",
      answer: "Several key differentiators: (1) We're AI-enhanced but human-driven - using cutting-edge tools to deliver faster without sacrificing quality, (2) Transparent pricing with no hidden fees, (3) Faster delivery - 4-7 weeks vs. industry standard 8-12 weeks, (4) Local Cleveland focus with deep understanding of the local market, (5) 25+ years of proven expertise across 500+ projects, (6) Comprehensive services - from design to SEO to ongoing support, all under one roof, (7) 98% client satisfaction rate and genuine commitment to your success.",
      category: "About",
      icon: "⭐"
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  // --- PRICING DATA STRUCTURES ---

  const webPackages = [
    {
      id: "web-launch",
      name: "Launch",
      price: "$1,999",
      billing: "fixed",
      description: "Professional Website in 2 Weeks",
      features: [
        "Custom Website Design (5-7 pages)",
        "Mobile-Responsive Layout",
        "WordPress or Custom Platform",
        "Basic SEO Setup (10 keywords)",
        "Content Strategy & Copywriting",
        "30 Days Post-Launch Support",
        "Training & Video Tutorials"
      ],
      bestFor: "Startups, Local Businesses, Professionals",
      color: "primary",
      ctaText: "Get Started"
    },
    {
      id: "web-growth",
      name: "Growth",
      price: "$3,999",
      billing: "fixed",
      badge: "Most Popular",
      description: "Comprehensive Business Website in 3 Weeks",
      features: [
        "12 Total Pages + Blog Platform",
        "Premium Design & Animations",
        "Advanced SEO (30 keywords)",
        "CRM & Email Integration",
        "Professional Copywriting (All Pages)",
        "60 Days Post-Launch Support",
        "Monthly Performance Reviews"
      ],
      bestFor: "Growing B2B, Lead Gen, Established SMBs",
      color: "secondary",
      ctaText: "Get Started"
    },
    {
      id: "web-scale",
      name: "Scale",
      price: "$7,999",
      billing: "fixed",
      description: "Enterprise-Grade Website in 5 Weeks",
      features: [
        "25+ Total Pages & Custom Design",
        "Member Login & Advanced Search",
        "Multi-Language Support (2 langs)",
        "Enterprise Security & Analytics",
        "20 SEO Blog Posts + White Papers",
        "90 Days Premium Support",
        "Dedicated Account Manager"
      ],
      bestFor: "Mid-Market, Enterprise, Multi-Location",
      color: "accent",
      ctaText: "Get Quote"
    },
  ];

  const ecommercePackages = [
    {
      id: "ecom-launch",
      name: "Store Launch",
      price: "$2,999",
      billing: "fixed",
      description: "Professional Online Store in 3 Weeks",
      features: [
        "Setup & Config (Up to 50 Products)",
        "Professional Store Design",
        "AI-Powered Product Content",
        "Payment & Shipping Integration",
        "Email Marketing Setup",
        "Store SEO Foundation",
        "30-Day Post-Launch Support"
      ],
      bestFor: "New Brands, Boutiques, Creators",
      color: "primary",
      ctaText: "Start Selling"
    },
    {
      id: "ecom-growth",
      name: "Store Growth",
      price: "$5,999",
      billing: "fixed",
      badge: "Best Value",
      description: "Complete E-Commerce Platform for Scaling",
      features: [
        "Up to 150 Products Added",
        "Premium Custom Theme Design",
        "Advanced AI Content & SEO",
        "Advanced Email Flows (Klaviyo)",
        "Enhanced Analytics & Tracking",
        "Subscription & Bundling Features",
        "60-Day Premium Support"
      ],
      bestFor: "Growing Brands, Fashion, D2C",
      color: "secondary",
      ctaText: "Scale Up"
    },
    {
      id: "ecom-scale",
      name: "Store Scale",
      price: "$9,999",
      billing: "fixed",
      description: "Enterprise Platform for High-Volume Brands",
      features: [
        "Up to 500 Products & AI Optimization",
        "Enterprise Design & UX",
        "B2B/Wholesale Pricing Portals",
        "Global Multi-Zone Shipping",
        "ERP & CRM Integrations",
        "Predictive Analytics & BI",
        "90-Day Enterprise Support"
      ],
      bestFor: "High-Volume, B2B, International",
      color: "accent",
      ctaText: "Go Enterprise"
    }
  ];

  const seoPackages = [
    {
      id: "seo-foundation",
      name: "Foundation",
      price: "$399",
      billing: "/month",
      description: "Start Your Multi-Channel Search Presence",
      features: [
        "Traditional SEO (20 keywords)",
        "GEO Optimization (3 AI Platforms)",
        "AEO Featured Snippets (5/mo)",
        "AIO Citation Monitoring",
        "4 SEO Blog Posts (1,500w) / Mo",
        "Monthly Performance Dashboard",
        "Competitor Analysis"
      ],
      bestFor: "Small Businesses, Startups, Local Biz",
      color: "primary",
      ctaText: "Start Ranking"
    },
    {
      id: "seo-growth",
      name: "Growth",
      price: "$799",
      billing: "/month",
      badge: "Recommended",
      description: "Dominate Your Industry Across All Channels",
      features: [
        "Advanced SEO (50 keywords)",
        "GEO Optimization (6 AI Platforms)",
        "AEO Featured Snippets (15/mo)",
        "8 Premium Blog Posts (2,000w) / Mo",
        "Link Building (15 backlinks/mo)",
        "Bi-Weekly Performance Updates",
        "Phone Support"
      ],
      bestFor: "Growing B2B, Competitive Markets",
      color: "secondary",
      ctaText: "Accelerate Growth"
    },
    {
      id: "seo-domination",
      name: "Domination",
      price: "$1,499",
      billing: "/month",
      description: "Total Market Control Across Every Channel",
      features: [
        "Enterprise SEO (100+ keywords)",
        "GEO Optimization (15+ AI Platforms)",
        "AEO Featured Snippets (30+/mo)",
        "16 Premium Articles (3,000w) / Mo",
        "Authority Link Building (30/mo)",
        "Dedicated SEO Manager",
        "Weekly Strategy Calls"
      ],
      bestFor: "Enterprise, National Brands, Leaders",
      color: "accent",
      ctaText: "Dominate Market"
    }
  ];

  const amcPackages = [
    {
      id: "amc-essential",
      name: "Essential Protection",
      price: "$99",
      billing: "/month",
      description: "Sleep Well Knowing Your Site is Protected",
      features: [
        "Daily Malware Scanning & Security",
        "Daily Automatic Backups",
        "Monthly Software & Plugin Updates",
        "24/7 Uptime Monitoring",
        "Minor Content Updates (3/mo)",
        "Email Support (48hr response)"
      ],
      bestFor: "Small Biz, Brochure Sites",
      color: "primary",
      ctaText: "Get Protected"
    },
    {
      id: "amc-growth",
      name: "Business Growth",
      price: "$199",
      billing: "/month",
      badge: "Best Value",
      description: "Proactive Maintenance + Content Support",
      features: [
        "Real-Time Security & 90-Day Backups",
        "Weekly Updates & Speed Optimization",
        "Text & Image Updates (10+/mo)",
        "1 Hour Development Time Included",
        "Monthly Performance Dashboard",
        "Priority Support (24hr response)"
      ],
      bestFor: "Growing Biz, E-Commerce",
      color: "secondary",
      ctaText: "Secure Growth"
    },
    {
      id: "amc-enterprise",
      name: "Enterprise Excellence",
      price: "$399",
      billing: "/month",
      description: "White-Glove Service + Strategic Growth",
      features: [
        "Real-Time Monitoring & Hourly Backups",
        "Unlimited Content Updates",
        "5 Hours Development Time Included",
        "Advanced Analytics & CRO",
        "Monthly Strategy Calls",
        "Emergency Support (1hr response)"
      ],
      bestFor: "High-Volume, Critical Sites",
      color: "accent",
      ctaText: "Go Enterprise"
    }
  ];

  const addonServices = [
    {
      id: "web-addons",
      title: "Web & Design Add-Ons",
      items: [
        "Professional Copywriting: $299/page",
        "Logo Design: $1,499",
        "Brand Identity Package: $4,999",
        "Mobile App (iOS/Android): $9,999",
        "Social Media Setup: $999"
      ]
    },
    {
      id: "ecom-addons",
      title: "E-Commerce Add-Ons",
      items: [
        "AI Product Photography: $49/product",
        "Amazon Marketplace Integration: $1,499",
        "Inventory Management System: $1,999",
        "Additional Currency Setup: $299",
        "Multi-Language Expansion: $1,499"
      ]
    },
    {
      id: "seo-addons",
      title: "SEO & Content A La Carte",
      items: [
        "SEO Only Service: $299/month",
        "Content Writing (4 posts): $299/month",
        "Link Building (10 links): $399/month",
        "Complete SEO Audit: $499",
        "AIO Brand Positioning: $1,299"
      ]
    },
    {
      id: "tech-addons",
      title: "Technical Services",
      items: [
        "API Development: $1,999+",
        "Custom Database Integration: $2,999",
        "Site Speed Optimization: $999",
        "Advanced Security Hardening: $1,500",
        "Team Training Session: $500"
      ]
    }
  ];

  const currentPackages = pricingMode === 'web' ? webPackages : (pricingMode === 'ecommerce' ? ecommercePackages : (pricingMode === 'seo' ? seoPackages : amcPackages));

  return (
    <div className="mt-4 flex flex-col min-h-screen bg-slate-50">
      
      {/* <Navbar /> */}

      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden" aria-label="Introduction">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10 pointer-events-none opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-orange-50/40 rounded-full blur-[80px] -z-10 pointer-events-none opacity-40"></div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text Content */}
              <div className="flex flex-col gap-6 text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold w-fit mx-auto lg:mx-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Accepting New Projects for 2026
                </div>

                <Heading level={1} className="leading-tight">
                  <span className="block text-navy">Professional Website</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Design Services
                  </span>
                  <span className="block text-navy">in Cleveland, Ohio</span>
                </Heading>
                
                <Text size="lg" className="text-slate-600 max-w-xl mx-auto lg:mx-0">
                  FactoryJet creates stunning, high-performance websites that drive results for Cleveland businesses. From modern design to seamless development, we deliver digital solutions that convert visitors into customers.
                </Text>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Button size="lg" variant="primary" rightIcon={<ArrowRight size={20} />} onClick={() => {
                    const heroForm = document.getElementById('hero-form');
                    if(heroForm) heroForm.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Get Free Website Quote
                  </Button>
                  <a 
                    href="https://wa.me/919699977699" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg text-lg px-8 py-4 gap-2.5 min-h-[56px] bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-green-500/30"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp Us
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start text-sm text-slate-500 font-medium">
                   <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>Free Consultation</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>No Hidden Fees</span>
                   </div>
                </div>
              </div>

              {/* Right Column: Multi-Step Contact Form */}
              <div id="hero-form" className="relative z-10 w-full max-w-md mx-auto lg:mr-0 lg:ml-auto mt-8 lg:mt-0">
                <ContactForm />
                
                {/* Decorative Elements around form */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 rounded-full opacity-50 -z-10 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-100 rounded-full opacity-50 -z-10 blur-xl"></div>
              </div>
            </div>

            {/* Bottom Trust Strip */}
            <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                <div className="flex items-center gap-2 mb-1 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} />
                  <span className="font-bold text-2xl text-navy">500+</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Successful Projects</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                <div className="flex items-center gap-2 mb-1 text-secondary group-hover:scale-110 transition-transform duration-300">
                  <Star size={24} fill="currentColor" className="text-secondary" />
                  <span className="font-bold text-2xl text-navy">98%</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Client Satisfaction</p>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                <div className="flex items-center gap-2 mb-1 text-primary group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={24} />
                  <span className="font-bold text-2xl text-navy">25+</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Years Experience</p>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                <div className="flex items-center gap-2 mb-1 text-accent group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck size={24} />
                  <span className="font-bold text-2xl text-navy">ISO</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Certified Processes</p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Services Overview */}
        <section id="services" className="py-16 md:py-20 relative" aria-label="Our Services">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-100/30 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} className="mb-4">Our Cleveland Website Design Services</Heading>
              <Text size="lg" className="text-slate-600">
                Comprehensive digital solutions tailored for Cleveland businesses looking to dominate their online presence.
              </Text>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Service 1: Custom Website Design */}
               <Card 
                 variant="standard" 
                 hoverEffect 
                 className="h-full flex flex-col p-8 border-light transition-all duration-300 group hover:border-primary/30 hover:bg-white/90 hover:backdrop-blur-sm"
               >
                 <div className="mb-6 w-[60px] h-[60px] rounded-2xl bg-blue-50 text-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                   <Palette size={32} strokeWidth={1.5} />
                 </div>
                 <Heading level={3} className="text-xl mb-3 group-hover:text-primary transition-colors">Custom Website Design</Heading>
                 <Text size="base" className="text-slate-600 mb-6 flex-grow">
                   Your brand deserves a unique digital presence. We create custom websites that reflect your brand personality, engage your audience, and drive conversions. Every design element is crafted specifically for your business goals.
                 </Text>
                 <ul className="space-y-3 mb-8">
                   {["Unique, brand-aligned design", "Mobile-first responsive layouts", "Conversion-optimized user experience", "Modern design trends integrated"].map((feature, i) => (
                     <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                       <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                       <span>{feature}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-auto">
                   <span className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer" onClick={() => window.location.href = '#cta'}>
                     Learn More <ArrowRight size={18} />
                   </span>
                 </div>
               </Card>

               {/* Service 2: E-Commerce Development */}
               <Card 
                 variant="standard" 
                 hoverEffect 
                 className="h-full flex flex-col p-8 border-light transition-all duration-300 group hover:border-secondary/30 hover:bg-white/90 hover:backdrop-blur-sm"
               >
                 <div className="mb-6 w-[60px] h-[60px] rounded-2xl bg-orange-50 text-secondary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                   <ShoppingCart size={32} strokeWidth={1.5} />
                 </div>
                 <Heading level={3} className="text-xl mb-3 group-hover:text-secondary transition-colors">E-Commerce Development</Heading>
                 <Text size="base" className="text-slate-600 mb-6 flex-grow">
                   Launch or upgrade your online store with our e-commerce expertise. We build powerful, scalable online shopping experiences on Shopify, WooCommerce, and custom platforms that maximize sales and customer satisfaction.
                 </Text>
                 <ul className="space-y-3 mb-8">
                   {["Multiple platform expertise", "Payment gateway integration", "Inventory management systems", "Customer account management"].map((feature, i) => (
                     <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                       <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                       <span>{feature}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-auto">
                   <span className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer" onClick={() => window.location.href = '#cta'}>
                     Learn More <ArrowRight size={18} />
                   </span>
                 </div>
               </Card>

               {/* Service 3: WordPress Development */}
               <Card 
                 variant="standard" 
                 hoverEffect 
                 className="h-full flex flex-col p-8 border-light transition-all duration-300 group hover:border-emerald-500/30 hover:bg-white/90 hover:backdrop-blur-sm"
               >
                 <div className="mb-6 w-[60px] h-[60px] rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                   <Settings size={32} strokeWidth={1.5} />
                 </div>
                 <Heading level={3} className="text-xl mb-3 group-hover:text-emerald-600 transition-colors">WordPress Development</Heading>
                 <Text size="base" className="text-slate-600 mb-6 flex-grow">
                   Leverage the power of WordPress with our expert development services. We create fast, secure, SEO-optimized WordPress sites that are easy to manage and built to grow with your business.
                 </Text>
                 <ul className="space-y-3 mb-8">
                   {["Custom WordPress themes", "Plugin development & optimization", "Performance & security hardening", "Content management training"].map((feature, i) => (
                     <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                       <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                       <span>{feature}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-auto">
                   <span className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer" onClick={() => window.location.href = '#cta'}>
                     Learn More <ArrowRight size={18} />
                   </span>
                 </div>
               </Card>
            </div>
          </div>
        </section>

        {/* 5. Why Choose FactoryJet */}
        <section id="why-choose" className="py-16 md:py-24 bg-white relative overflow-hidden" aria-label="Why Choose Us">
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0052CC_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} className="mb-4">Why Cleveland Businesses Choose FactoryJet</Heading>
              <Text size="lg" className="text-slate-600">
                We combine technical expertise with deep understanding of the Cleveland market to deliver websites that drive real business results.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Reason 1 */}
              <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-primary shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl font-bold text-primary">25+</span>
                  <div className="p-3 rounded-xl bg-white shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Calendar className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                </div>
                <Heading level={3} className="text-xl mb-3 text-navy">25+ Years of Experience</Heading>
                <Text className="text-slate-600">
                  Over two decades of proven expertise in web design and development. Our team brings battle-tested knowledge from 500+ successful projects across 50+ industries. We've seen it all and know what works.
                </Text>
              </div>

              {/* Reason 2 */}
              <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-secondary shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl font-bold text-secondary">100%</span>
                  <div className="p-3 rounded-xl bg-white shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <MapPin className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                </div>
                <Heading level={3} className="text-xl mb-3 text-navy">Local Cleveland Focus</Heading>
                <Text className="text-slate-600">
                  We understand Cleveland's business landscape, local market dynamics, and what Cleveland customers expect. Our designs resonate with your local audience while maintaining global standards of excellence.
                </Text>
              </div>

              {/* Reason 3 */}
              <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-accent shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl font-bold text-accent">7 Days</span>
                  <div className="p-3 rounded-xl bg-white shadow-sm text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Zap className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                </div>
                <Heading level={3} className="text-xl mb-3 text-navy">Fast Turnaround</Heading>
                <Text className="text-slate-600">
                  Get your website launched in as little as 7 days. While competitors take 4-6 weeks, our AI-enhanced process delivers enterprise-quality results in a fraction of the time without compromising quality.
                </Text>
              </div>

              {/* Reason 4 */}
              <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-primary shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl font-bold text-primary">$1,999</span>
                  <div className="p-3 rounded-xl bg-white shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Banknote className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                </div>
                <Heading level={3} className="text-xl mb-3 text-navy">Transparent Pricing</Heading>
                <Text className="text-slate-600">
                  No hidden fees. No surprise charges. Our transparent pricing gives you complete budget clarity from day one. Quality websites starting at $1,999 with flexible payment terms designed for growing businesses.
                </Text>
              </div>

              {/* Reason 5 */}
              <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-secondary shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group md:col-span-2 lg:col-span-2">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 flex justify-between items-start md:block w-full md:w-auto">
                    <span className="text-5xl font-bold text-secondary block mb-0 md:mb-4">24/7</span>
                    <div className="p-3 rounded-xl bg-white shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-colors md:hidden">
                      <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="hidden md:block p-3 rounded-xl bg-white shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-colors h-fit">
                      <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <div className="flex-grow">
                    <Heading level={3} className="text-xl mb-3 text-navy">Ongoing Support</Heading>
                    <Text className="text-slate-600">
                      Your success is our mission. We provide comprehensive maintenance packages starting at just $49/month, ensuring your website stays secure, fast, and up-to-date. Real support when you need it.
                    </Text>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Our Process */}
        <section id="process" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden" aria-label="Our Process">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} className="mb-4">Our Proven Website Design Process</Heading>
              <Text size="lg" className="text-slate-600">
                From concept to launch, we follow a strategic process that ensures your website exceeds expectations and delivers measurable results.
              </Text>
            </div>
            
            <div className="relative">
              {/* Central Line Desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 border-r-2 border-dashed border-primary/30 h-full"></div>
              
              {/* Steps */}
              <div className="space-y-12 md:space-y-0">
                {processSteps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:mb-24 last:md:mb-0`}>
                      
                      {/* Mobile Line connection helper */}
                      <div className="md:hidden absolute left-8 top-12 bottom-0 w-0.5 bg-slate-200 border-l-2 border-dashed border-primary/30 -z-10"></div>

                      {/* Content Half */}
                      <div className="w-full md:w-1/2 md:px-16 mb-8 md:mb-0 relative">
                          <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-glow-primary/20 hover:-translate-y-1 transition-all duration-300 group z-10 relative ml-16 md:ml-0`}>
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                  {step.icon}
                                </div>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">{step.timeline}</span>
                            </div>
                            <Heading level={3} className="text-xl mb-3 text-navy">{step.title}</Heading>
                            <Text className="text-slate-600 mb-6 text-sm leading-relaxed">{step.description}</Text>
                            
                            {/* Deliverables */}
                            <div className="bg-slate-50/50 rounded-lg p-4 border border-slate-100">
                                <p className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">Key Deliverables</p>
                                <ul className="space-y-2">
                                  {step.deliverables.map(d => (
                                      <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                                        {d}
                                      </li>
                                  ))}
                                </ul>
                            </div>
                          </div>
                          
                          {/* Number Circle - Absolute Center Desktop, Absolute Left Mobile */}
                          <div className={`absolute top-0 md:top-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center font-bold text-xl md:text-2xl z-20 text-primary
                            left-0 md:left-auto md:right-auto md:transform
                            ${index % 2 === 0 ? 'md:-right-8 md:translate-x-1/2' : 'md:-left-8 md:-translate-x-1/2'}
                          `}>
                            {index + 1}
                          </div>
                      </div>
                      
                      {/* Empty Half for Desktop spacing */}
                      <div className="hidden md:block w-1/2"></div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Portfolio Showcase */}
        <section id="portfolio" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden" aria-label="Selected Works">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-white/50 opacity-60 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} className="mb-4">Recent Websites We've Built</Heading>
              <Text size="lg" className="text-slate-600">
                Real results for real businesses. Explore our portfolio of high-performance websites that drive growth and deliver measurable ROI.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 ease-out flex flex-col h-full hover:-translate-y-2 overflow-hidden"
                >
                  {/* Card Image Area */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img 
                      src={project.image} 
                      loading="lazy"
                      width="800"
                      height="533"
                      alt={`${project.title} - ${project.industry} website design`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wide">
                      {project.industry}
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <Heading level={3} className="text-xl mb-2 text-navy group-hover:text-primary transition-colors">{project.title}</Heading>
                    <p className="text-sm text-slate-400 mb-6 line-clamp-2 min-h-[40px]">{project.challenge}</p>

                    <div className="mb-6">
                      <p className="text-sm font-bold text-navy mb-3 uppercase tracking-wider">Key Results</p>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <Check size={16} className="text-accent mt-0.5 flex-shrink-0 stroke-[3]" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                          <Clock size={14} />
                          <span>{project.timeline}</span>
                        </div>
                        <a href="#" className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm hover:translate-x-1 transition-transform">
                          View Case Study <ArrowRight size={16} strokeWidth={2.5} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
               <Button variant="outline" size="lg" className="border-slate-300 text-slate-600 hover:border-primary hover:text-primary hover:bg-white">
                  View Full Portfolio
               </Button>
            </div>
          </div>
        </section>

        {/* 8. Pricing Options */}
        <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-50/30" aria-label="Pricing Packages">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Heading level={2} className="mb-4">Transparent Pricing for Cleveland Businesses</Heading>
              <Text size="lg" className="text-slate-600">
                Professional websites at 40-50% below traditional US agency rates. Fixed pricing, no surprises.
              </Text>
            </div>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-16">
              <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm inline-flex flex-wrap justify-center">
                <button
                  onClick={() => setPricingMode('web')}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    pricingMode === 'web'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  Web Design
                </button>
                <button
                  onClick={() => setPricingMode('ecommerce')}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    pricingMode === 'ecommerce'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  E-Commerce
                </button>
                <button
                  onClick={() => setPricingMode('seo')}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    pricingMode === 'seo'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  AI SEO
                </button>
                <button
                  onClick={() => setPricingMode('amc')}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    pricingMode === 'amc'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  AMC
                </button>
              </div>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-20 transition-all duration-500">
              {currentPackages.map((tier) => (
                <div 
                  key={tier.id} 
                  className={`relative flex flex-col h-full bg-white rounded-2xl shadow-sm transition-all duration-300 
                    border-t-4 hover:shadow-xl hover:-translate-y-1
                    ${tier.badge ? 'md:scale-105 z-10 shadow-xl border-secondary ring-1 ring-secondary/5' : ''}
                    ${!tier.badge && tier.color === 'primary' ? 'border-primary' : ''}
                    ${!tier.badge && tier.color === 'secondary' ? 'border-secondary' : ''}
                    ${!tier.badge && tier.color === 'accent' ? 'border-accent' : ''}
                  `}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-secondary text-white text-[12px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wide shadow-sm flex items-center gap-1">
                        <Award size={12} fill="currentColor" /> {tier.badge}
                      </div>
                    </div>
                  )}

                  {/* Header Area */}
                  <div className={`p-8 pb-4 text-center ${tier.badge ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-bold text-navy mb-4">{tier.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <span className={`text-5xl font-bold ${
                        tier.color === 'secondary' ? 'text-secondary' : 
                        tier.color === 'accent' ? 'text-accent' : 'text-primary'
                      }`} aria-label={`Price: ${tier.price}`}>{tier.price}</span>
                      {tier.billing && <span className="text-slate-400 text-lg font-medium self-end mb-1.5">{tier.billing}</span>}
                    </div>
                    {tier.description && <p className="text-slate-600 text-sm leading-relaxed mb-2">{tier.description}</p>}
                  </div>

                  {/* Expandable Sections OR Simple List */}
                  <div className="flex-grow">
                    {tier.features ? (
                      <div className="px-8 py-6">
                        <ul className="space-y-4">
                          {tier.features.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-600">
                              <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                tier.color === 'secondary' ? 'text-secondary' : 
                                tier.color === 'accent' ? 'text-accent' : 'text-primary'
                              }`} strokeWidth={2.5} />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {/* CTA Area */}
                  <div className="p-8 mt-auto bg-white rounded-b-2xl">
                    {tier.bestFor && (
                      <p className="text-center text-sm text-slate-500 mb-6 px-2">
                        <span className="font-semibold text-navy">Best for:</span> {tier.bestFor}
                      </p>
                    )}
                    
                    <Button 
                      variant={tier.color === 'secondary' ? 'secondary' : (tier.color === 'accent' ? 'primary' : 'primary')} 
                      className={`w-full justify-center font-bold text-lg h-14 ${
                        tier.color === 'accent' ? 'bg-accent hover:bg-emerald-600 shadow-emerald-200' : ''
                      }`}
                      onClick={() => {
                        const heroForm = document.getElementById('hero-form');
                        if(heroForm) heroForm.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {tier.ctaText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional Add-Ons */}
            <div className="max-w-5xl mx-auto">
              <Heading level={3} className="text-center text-xl mb-8">Optional Add-On Services</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addonServices.map((addon) => (
                  <div key={addon.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                      onClick={() => toggleAddon(addon.id)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    >
                      <h4 className="font-bold text-navy">{addon.title}</h4>
                      <span className={`transform transition-transform duration-300 text-slate-400 ${
                        openAddons[addon.id] ? 'rotate-180 text-primary' : 'rotate-0'
                      }`}>
                        <ChevronDown size={20} />
                      </span>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAddons[addon.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="p-6 space-y-3 border-t border-slate-100">
                        {addon.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* FAQ Teaser */}
            <div className="text-center mt-16">
              <p className="text-slate-500 mb-4">Have questions about pricing?</p>
              <a href="#cta" className="text-primary font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                 Contact us for a custom quote <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </section>

        {/* 9. Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-t from-slate-50 to-white relative overflow-hidden" aria-label="Testimonials">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/20 skew-x-12 -z-10"></div>
          <div className="absolute top-20 left-10 w-24 h-24 bg-orange-100/40 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-100/40 rounded-full blur-2xl -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Heading level={2} className="mb-4">What Our Clients Say About Us</Heading>
              <Text size="lg" className="text-slate-600">
                Don't just take our word for it. Here's what our clients have to say about working with FactoryJet.
              </Text>
            </div>

            {/* Trust Metrics Banner */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-16 mx-auto max-w-5xl">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center">
                  <div className="flex items-center gap-2 text-navy font-bold text-lg md:border-r md:border-slate-100 md:pr-8 md:mr-4 w-full md:w-auto justify-center md:justify-start">
                     <span className="flex">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="text-secondary fill-secondary" />)}
                     </span>
                     <span>500+ Happy Clients</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-grow">
                     {trustMetrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                           <span className="text-2xl font-bold text-navy">{metric.value}</span>
                           <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{metric.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-16">
              {testimonials.map((testimonial, index) => (
                <div 
                   key={index} 
                   className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/30 overflow-hidden h-full flex flex-col"
                   role="article"
                >
                   {/* Large Quote Mark Decoration */}
                   <Quote className="absolute top-6 right-6 text-slate-100 w-24 h-24 rotate-180 opacity-50 transform group-hover:scale-110 transition-transform duration-500 -z-0" />
                   
                   {/* Header */}
                   <div className="flex items-start gap-4 mb-6 relative z-10">
                      {/* Initials Avatar */}
                      <div className={`w-[80px] h-[80px] flex-shrink-0 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-md border-4 border-white`}>
                         {testimonial.initials}
                      </div>
                      <div className="pt-1">
                         <h3 className="text-lg font-bold text-navy leading-tight">{testimonial.name}</h3>
                         <p className="text-sm text-slate-500 mb-1">{testimonial.position}</p>
                         <p className={`text-sm font-semibold text-${testimonial.color} mb-1.5`}>{testimonial.company}</p>
                         <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-${testimonial.color === 'primary' ? 'blue' : testimonial.color === 'secondary' ? 'orange' : 'emerald'}-50 text-${testimonial.color} border border-${testimonial.color === 'primary' ? 'blue' : testimonial.color === 'secondary' ? 'orange' : 'emerald'}-100`}>
                            {testimonial.industry}
                         </span>
                      </div>
                   </div>

                   {/* Rating */}
                   <div className="flex gap-1 mb-4 relative z-10">
                      {[1, 2, 3, 4, 5].map((star) => (
                         <Star key={star} size={20} className="text-secondary fill-secondary" />
                      ))}
                   </div>

                   {/* Quote Text */}
                   <blockquote className="text-slate-600 leading-relaxed mb-6 relative z-10 flex-grow min-h-[120px]">
                      "{testimonial.quote}"
                   </blockquote>

                   {/* Key Results */}
                   <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 relative z-10 group-hover:bg-blue-50/30 transition-colors">
                      <div className="space-y-2">
                         {testimonial.results.map((result, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                               <span className={`text-${testimonial.color} mt-0.5`}>{result.icon}</span>
                               <span>{result.text}</span>
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* Date */}
                   <div className="mt-auto pt-4 border-t border-slate-50 text-xs text-slate-400 font-medium flex items-center justify-between relative z-10">
                      <span>Posted {testimonial.date}</span>
                      <span className="flex items-center gap-1 text-slate-300 group-hover:text-primary transition-colors">
                         <MessageSquare size={12} /> Verified Review
                      </span>
                   </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col items-center justify-center gap-6">
               <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
                  <span className="flex text-secondary"><Star size={14} fill="currentColor" /></span>
                  <span>4.9 out of 5 on Google Reviews</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4 ml-1 opacity-80" />
               </div>
               
               <Button variant="outline" className="border-slate-300 hover:border-primary">
                  Read All Reviews <ExternalLink size={16} />
               </Button>
            </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50" aria-label="Frequently Asked Questions">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} className="mb-4">Frequently Asked Questions About Website Design in Cleveland</Heading>
              <Text size="lg" className="text-slate-600">
                Got questions? We've got answers. Find everything you need to know about our website design services, pricing, and process.
              </Text>
            </div>

            {/* Search and Filters */}
            <div className="mb-12">
               {/* Search Bar */}
               <div className="relative mb-8 max-w-2xl mx-auto">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                     <Search size={20} />
                  </div>
                  <input
                     type="text"
                     placeholder="Search questions..."
                     className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>

               {/* Category Tabs */}
               <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                     <button
                        key={category}
                        onClick={() => { setActiveCategory(category); setOpenFaqIndex(null); }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] ${
                           activeCategory === category
                              ? 'bg-primary text-white shadow-md'
                              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
               {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                     <div key={index} className="group">
                        <button
                           onClick={() => toggleFaq(index)}
                           className={`w-full flex items-center justify-between p-6 text-left bg-white border rounded-xl transition-all duration-300 relative z-10 min-h-[56px] ${
                              openFaqIndex === index
                                 ? 'border-primary shadow-md bg-blue-50/30 rounded-b-none z-20'
                                 : 'border-slate-200 hover:border-primary/50 hover:bg-blue-50/10 hover:shadow-sm'
                           }`}
                           aria-expanded={openFaqIndex === index}
                        >
                           <div className="flex-1 pr-8">
                              <span className="font-semibold text-navy text-lg block mb-1">{faq.question}</span>
                              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide flex items-center gap-1">
                                 {faq.icon} {faq.category}
                              </span>
                           </div>
                           <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              openFaqIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-primary group-hover:bg-blue-100'
                           }`}>
                              {openFaqIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                           </span>
                        </button>
                        <div
                           className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                              openFaqIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                           }`}
                           role="region"
                        >
                           <div className="overflow-hidden">
                              <div className="p-6 pt-0 bg-slate-50 border-x border-b border-slate-200 rounded-b-xl text-slate-600 leading-relaxed -mt-1 relative z-0">
                                 <div className="pt-4 border-t border-slate-100/50">
                                    {faq.answer}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               ) : (
                  <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                     <p className="text-slate-500">No questions found matching your search.</p>
                     <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                     >
                        Clear Filters
                     </Button>
                  </div>
               )}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-blue-100 shadow-lg shadow-blue-50/50 max-w-3xl mx-auto relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0"></div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                     <HelpCircle size={24} />
                  </div>
                  <Heading level={3} className="text-xl mb-2">Still have questions?</Heading>
                  <Text className="text-slate-600 mb-6">Can't find the answer you're looking for? Contact our team for personalized assistance.</Text>
                  <Button onClick={() => {
                        const heroForm = document.getElementById('hero-form');
                        if(heroForm) heroForm.scrollIntoView({ behavior: 'smooth' });
                      }}>Talk to an Expert</Button>
               </div>
            </div>
          </div>
        </section>

        {/* 11. Final Call to Action */}
        <section id="cta" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0052CC] to-[#003D99]" aria-label="Call to Action">
           {/* Decorative Elements */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:30px_30px] pointer-events-none"></div>
           
           <div className="max-w-6xl mx-auto px-4 relative z-10">
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               
               {/* Left Side: Text and Contact Info */}
               <div className="text-center lg:text-left">
                 <Heading level={2} className="text-white text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
                   Ready to Transform Your <span className="text-orange-300">Cleveland Business</span> Online?
                 </Heading>
                 <Text size="lg" className="text-blue-100 mb-8 text-lg font-medium drop-shadow-sm">
                   Join 500+ Cleveland businesses that trust FactoryJet for their digital success. Schedule a free 30-minute consultation with our experts.
                 </Text>
                 
                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                   <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-blue-50 shadow-lg font-bold text-lg px-8 py-4 h-14 border-0 w-full sm:w-auto"
                      leftIcon={<Phone className="w-5 h-5 fill-current" />}
                   >
                      +91 96999 77699
                   </Button>
                   <a 
                    href="https://wa.me/919699977699" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg text-lg px-8 py-4 gap-2.5 min-h-[56px] bg-[#25D366] text-white hover:bg-[#128C7E] w-full sm:w-auto"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp Us
                  </a>
                 </div>
                 
                 {/* Trust Reinforcement */}
                 <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-blue-100 text-sm font-medium mb-12 lg:mb-0">
                    {[
                       "Free consultation",
                       "Transparent pricing",
                       "7-day response guarantee",
                       "100% satisfaction"
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-2">
                          <div className="bg-green-500/20 rounded-full p-0.5"><Check className="w-4 h-4 text-green-400" strokeWidth={3} /></div>
                          <span>{item}</span>
                       </div>
                    ))}
                 </div>
               </div>

               {/* Right Side: Form Instance */}
               <div>
                 <ContactForm />
               </div>
             </div>
             
             {/* Contact Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-100 border-t border-white/10 pt-10 mt-12">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary mb-1">
                      <Phone className="w-5 h-5" />
                   </div>
                   <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">Call Us</span>
                   <span className="font-semibold text-white">+91 96999 77699</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary mb-1">
                      <Mail className="w-5 h-5" />
                   </div>
                   <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">Email Us</span>
                   <span className="font-semibold text-white">connect@factoryjet.com</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary mb-1">
                      <MessageCircle className="w-5 h-5" />
                   </div>
                   <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">Live Chat</span>
                   <span className="font-semibold text-white">Mon-Fri 9am-6pm EST</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary mb-1">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">Office</span>
                   <span className="font-semibold text-white">Downtown Cleveland, OH</span>
                </div>
             </div>
           </div>
        </section>
      </main>

      {/* 12. Footer */}

    </div>
  );
};