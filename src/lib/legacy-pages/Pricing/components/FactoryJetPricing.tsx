import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  Shield,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Lightbulb,
  Cpu,
  ShoppingBag,
  LifeBuoy,
  Plus,
  Minus,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick } from '@/utils/gtm';

// --- TYPES ---
type PricingCategory = "website" | "ecommerce" | "amc" | "seo";

interface PricingFeatureItem {
  category?: string;
  features: string[];
}

interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  period?: string; // e.g., "/Year" or "/Month"
  isHero: boolean;
  features: PricingFeatureItem[];
}

// --- DATA ---

const DATA_WEBSITE: PricingTier[] = [
  {
    name: "STARTER",
    tagline: "Launchpad",
    price: "₹29,999",
    isHero: false,
    features: [
      {
        category: "CORE",
        features: ["5 Pages", "WordPress/React Basics", "Responsive"],
      },
      {
        category: "SEO",
        features: ["XML Sitemap", "Basic Meta", "Google Maps"],
      },
      {
        category: "PERFORMANCE",
        features: ["Standard Caching", "Auto-Resize Images"],
      },
      {
        category: "SECURITY",
        features: ["Standard HTTPS", "Basic Login Protection", "ReCaptcha v2"],
      },
      {
        category: "CONVERSION",
        features: ["Click-to-Call", "Standard Forms"],
      },
      {
        category: "HOSTING",
        features: ["99% Uptime"],
      },
    ],
  },
  {
    name: "BUSINESS",
    tagline: "Growth",
    price: "₹59,999",
    isHero: true,
    features: [
      {
        category: "CORE",
        features: [
          "12 Pages",
          "Hybrid AI Architecture",
          "Mobile-First Indexing",
          "Legacy Browser Support",
        ],
      },
      {
        category: "SEO",
        features: [
          "Advanced Robots.txt",
          "Open Graph Tags",
          "Schema.org (JSON-LD)",
          "G-Business Profile",
        ],
      },
      {
        category: "PERFORMANCE",
        features: [
          "Lighthouse 90+",
          "WebP Compression",
          "Cloudflare CDN",
          "Database Query Opt",
        ],
      },
      {
        category: "SECURITY",
        features: [
          "Military-Grade SSL",
          "Brute Force Protection",
          "ReCaptcha v3",
          "Daily Cloud Backups",
        ],
      },
      {
        category: "CONVERSION",
        features: [
          "Sticky Bottom Bar",
          "WhatsApp Widget",
          "Multi-Step Forms",
          "GA4 Setup",
          "Insta Feed",
        ],
      },
      {
        category: "HOSTING",
        features: ["99.9% Uptime", "Unmetered Bandwidth"],
      },
    ],
  },
  {
    name: "ENTERPRISE",
    tagline: "Dominance",
    price: "₹1,19,999",
    isHero: false,
    features: [
      {
        category: "CORE",
        features: [
          "20+ Dynamic Pages",
          "Next.js/Headless",
          "PWA Ready",
          "Retina Support",
        ],
      },
      {
        category: "SEO",
        features: [
          "Log File Analysis",
          "Twitter Cards",
          "Voice Search (AEO)",
          "Local Citations",
        ],
      },
      {
        category: "PERFORMANCE",
        features: [
          'Core Web Vitals "Green"',
          "Lazy Loading",
          "Global Edge Network",
          "Redis Object Caching",
        ],
      },
      {
        category: "SECURITY",
        features: [
          "Wildcard SSL",
          "DDoS Mitigation",
          "Enterprise Spam Firewall",
          "Real-Time Redundant Backups",
        ],
      },
      {
        category: "CONVERSION",
        features: [
          "Exit Intent Popups",
          "AI Chatbot Ready",
          "CRM Integration",
          "Heatmaps",
          "Auto-Social Posting",
        ],
      },
      {
        category: "HOSTING",
        features: ["99.99% Uptime", "High-Frequency Compute"],
      },
    ],
  },
];

const DATA_ECOMMERCE: PricingTier[] = [
  {
    name: "SHOP STARTER",
    tagline: "Validation",
    price: "₹59,999",
    isHero: false,
    features: [
      {
        category: "CORE FEATURES",
        features: [
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
    ],
  },
  {
    name: "SHOP PRO",
    tagline: "Bestseller",
    price: "₹99,999",
    isHero: true,
    features: [
      {
        category: "ARCH",
        features: [
          "100 Products",
          "Variable Products",
          "One-Page Checkout",
          "Customer Dashboard",
        ],
      },
      {
        category: "MARKETING",
        features: [
          "Dynamic Discounts",
          "Photo Reviews",
          "Abandoned Cart Email",
          "Related Products",
          "Ajax Live Search",
        ],
      },
      {
        category: "PAYMENTS",
        features: [
          "Multi-Gateway (COD+Credit)",
          "Live Shipping Rates (Shiprocket)",
          "Auto GST Calc",
          "PDF Invoices",
        ],
      },
      {
        category: "SEO/TECH",
        features: [
          "Product Schema",
          "Auto-Alt Tags",
          "High-Perf Database mode",
        ],
      },
      {
        category: "MGMT",
        features: [
          "Low Stock Alerts",
          "Advanced Sales Reports",
          "Order CSV Export",
        ],
      },
    ],
  },
  {
    name: "E-COMM EMPIRE",
    tagline: "Scale",
    price: "₹1,99,999",
    isHero: false,
    features: [
      {
        category: "ARCH",
        features: [
          "Full Product Catalogue",
          "Bundled/Digital",
          "Distraction-Free Checkout",
          "Social Login",
        ],
      },
      {
        category: "MARKETING",
        features: [
          "BOGO Logic",
          "Verified Badges",
          "SMS/WhatsApp Notifs",
          "In-Cart Upsells",
          "AI Search & Filter",
        ],
      },
      {
        category: "PAYMENTS",
        features: [
          "International (Stripe)",
          "Pincode Check",
          "Multi-State Tax",
          "GST Tax Invoices",
        ],
      },
      {
        category: "SEO/TECH",
        features: [
          "Google Merchant Feed",
          "Video Gallery",
          "Redis Caching for Store",
        ],
      },
      {
        category: "MGMT",
        features: ["Multi-Warehouse", "Cohort Analysis"],
      },
    ],
  },
];

const DATA_AMC: PricingTier[] = [
  {
    name: "ESSENTIAL",
    tagline: "Insurance",
    price: "₹3,499",
    period: "/Month",
    isHero: false,
    features: [
      {
        category: "CORE MAINTENANCE",
        features: [
          "24/7 Ping Monitor",
          "SSL Renewal",
          "Weekly Scan",
          "Paid Hack Recovery",
          "Weekly DB Backup",
          "Auto-Updates",
        ],
      },
    ],
  },
  {
    name: "GROWTH",
    tagline: "Protection",
    price: "₹7,999",
    period: "/Month",
    isHero: true,
    features: [
      {
        category: "HEALTH",
        features: [
          "24/7 HTTP Monitor",
          "CPU/RAM Tracking",
          "Monthly Error Log",
        ],
      },
      {
        category: "SECURITY",
        features: [
          "SSL Handshake Opt",
          "Daily Deep Scan",
          "Free Hack Cleanup",
          "Daily Cloud Backup",
        ],
      },
      {
        category: "MAINTENANCE",
        features: [
          "Managed Safe Updates",
          "Plugin Compatibility",
          "Child Theme Maint",
          "Monthly DB Cleanup",
        ],
      },
      {
        category: "PERFORMANCE",
        features: [
          "Monthly Core Web Vitals",
          "Broken Link Scan",
          "Bulk Image Compress",
        ],
      },
      {
        category: "SUPPORT",
        features: [
          "24 Hr Response",
          "WhatsApp Support",
          "Quarterly Strategy Call",
        ],
      },
    ],
  },
  {
    name: "VIP",
    tagline: "Partner",
    price: "₹19,999",
    period: "/Month",
    isHero: false,
    features: [
      {
        category: "HEALTH",
        features: [
          "Real-Time Alerts",
          "Traffic Spike Mgmt",
          "Deep Server Audits",
        ],
      },
      {
        category: "SECURITY",
        features: [
          "Advanced Cert Mgmt",
          "Real-time Firewall",
          "Insurance-Backed Guarantee",
          "Hourly Backups",
        ],
      },
      {
        category: "MAINTENANCE",
        features: [
          "Manual Verification",
          "Staging Tests",
          "Code Deprecation Fixes",
          "Query Opt",
        ],
      },
      {
        category: "PERFORMANCE",
        features: ["Bi-Weekly Tuning", "404 Mgmt", "CDN Purging"],
      },
      {
        category: "SUPPORT",
        features: [
          "4 Hr Priority",
          "Dedicated Manager",
          "Monthly Strategy Call",
        ],
      },
    ],
  },
];

const DATA_SEO: PricingTier[] = [
  {
    name: "SEO STARTER",
    tagline: "Visibility",
    price: "₹9,999",
    period: "/Month",
    isHero: false,
    features: [
      {
        category: "ON-PAGE SEO",
        features: [
          "5 Pages Optimised",
          "Title & Meta Tags",
          "Header Structure (H1–H3)",
          "Image Alt Text",
          "Internal Linking Audit",
        ],
      },
      {
        category: "TECHNICAL SEO",
        features: [
          "XML Sitemap Submission",
          "Robots.txt Optimisation",
          "Core Web Vitals Check",
          "Canonical Tags",
        ],
      },
      {
        category: "LOCAL SEO",
        features: [
          "Google Business Profile",
          "NAP Consistency Audit",
          "1 City Landing Page",
        ],
      },
      {
        category: "REPORTING",
        features: [
          "Monthly Rank Report",
          "Google Search Console Setup",
        ],
      },
    ],
  },
  {
    name: "SEO GROWTH",
    tagline: "Authority",
    price: "₹24,999",
    period: "/Month",
    isHero: true,
    features: [
      {
        category: "ON-PAGE SEO",
        features: [
          "Up to 12 Pages Optimised",
          "Keyword Research (50 KW)",
          "Schema Markup (JSON-LD)",
          "Content Gap Analysis",
          "FAQ Schema for AEO",
        ],
      },
      {
        category: "TECHNICAL SEO",
        features: [
          "Site Speed Optimisation",
          "Mobile-First Audit",
          "Crawl Error Fixes",
          "Structured Data Audit",
          "Redirect Management",
        ],
      },
      {
        category: "AI SEO",
        features: [
          "AI Answer Engine Optimisation",
          "ChatGPT/Perplexity Visibility",
          "Long-tail AI Query Targeting",
          "Entity & Knowledge Graph",
        ],
      },
      {
        category: "CONTENT",
        features: [
          "2 SEO Blog Posts/Month",
          "4 City Landing Pages",
          "Competitor Analysis",
        ],
      },
      {
        category: "REPORTING",
        features: [
          "Weekly Rank Tracking",
          "Monthly Strategy Call",
          "GA4 + GSC Dashboard",
        ],
      },
    ],
  },
  {
    name: "SEO ENTERPRISE",
    tagline: "Domination",
    price: "₹59,999",
    period: "/Month",
    isHero: false,
    features: [
      {
        category: "ON-PAGE SEO",
        features: [
          "Up to 25 Pages Optimised",
          "Full Keyword Universe Map",
          "Dynamic Schema Automation",
          "Topical Authority Build",
          "Video SEO & Transcripts",
        ],
      },
      {
        category: "TECHNICAL SEO",
        features: [
          "Log File Analysis",
          "JavaScript SEO Audit",
          "Hreflang (Multi-Language)",
          "International SEO",
          "CDN + Edge Optimisation",
        ],
      },
      {
        category: "AI SEO",
        features: [
          "Full GEO Strategy",
          "AI Citation Building",
          "LLM Training Data Seeding",
          "Voice Search (AEO) Full",
          "Perplexity / Gemini Opt",
        ],
      },
      {
        category: "CONTENT",
        features: [
          "8 SEO Blog Posts/Month",
          "Up to 10 City Pages",
          "Digital PR & Link Outreach",
          "Video Content Strategy",
        ],
      },
      {
        category: "REPORTING",
        features: [
          "Real-Time Rank Dashboard",
          "Weekly Strategy Call",
          "Dedicated SEO Manager",
          "Competitor Intelligence",
        ],
      },
    ],
  },
];

const FAQ_DATA = [
  {
    id: "strategy",
    category: "Strategy & Process",
    icon: Lightbulb,
    items: [
      {
        q: "Who is FactoryJet strictly designed for?",
        a: "We build specifically for ambitious SMBs and manufacturers in India who want to move beyond 'brochureware' sites. If you need complex integrations, high performance, and a system that generates leads, we are your partner.",
      },
      {
        q: "Do you work with early-stage startups?",
        a: "Yes, but usually those with seed funding or a clear revenue model. Our 'Starter' plans are great for validation, while our 'Enterprise' stacks are for scaling. We don't typically do 'hobby' projects.",
      },
      {
        q: "How are you different from a freelancer on Upwork?",
        a: "Reliability and Architecture. A freelancer fixes a task; we build a system. We provide a full team (Designer, Dev, SEO Specialist) and guarantee uptime, security, and code quality that a single person cannot scale.",
      },
      {
        q: "What is the typical timeline for a 'Business' plan?",
        a: "Starter and Business websites launch in 7 days. Enterprise builds with complex integrations are scoped individually — you'll get a day-by-day delivery plan at kickoff, not a vague estimate.",
      },
      {
        q: "Do I own the Intellectual Property (IP)?",
        a: "100%. Once the final invoice is cleared, you receive full code ownership, database access, and creative assets. We don't believe in holding clients hostage.",
      },
    ],
  },
  {
    id: "technical",
    category: "Technical & Engineering",
    icon: Cpu,
    items: [
      {
        q: "What do you mean by 'Hybrid AI Architecture'?",
        a: "We use AI agents to dynamically generate schema markup, optimize image alt-text, and structure your content for Voice Search (AEO). It's SEO on autopilot, baked into the code.",
      },
      {
        q: "Why use Next.js over standard WordPress?",
        a: "Speed and Security. Next.js (React) renders pages instantly and is much harder to hack because it separates the frontend from the backend. It's the standard for modern enterprise web.",
      },
      {
        q: "Will my website pass Google's Core Web Vitals?",
        a: "Yes, that is a contractual deliverable. We aim for 90+ scores on mobile. We use aggressive caching, image compression, and code splitting to ensure green scores.",
      },
      {
        q: "How secure are your servers?",
        a: "We use enterprise-grade cloud architecture (DigitalOcean/AWS) with WAF (Web Application Firewalls), DDoS mitigation, and daily off-site backups. It's bank-grade security for your business.",
      },
      {
        q: "Can I host this on my own AWS account?",
        a: "Absolutely. While we offer managed hosting for ease, we can deploy the entire stack to your personal AWS, Google Cloud, or Azure instance during the handover phase.",
      },
    ],
  },
  {
    id: "ecommerce",
    category: "E-Commerce & Scale",
    icon: ShoppingBag,
    items: [
      {
        q: "Can you migrate me from Shopify to WooCommerce?",
        a: "Yes. Many clients switch to save on the monthly transaction fees. We migrate all products, customers, and order history while preserving your SEO rankings.",
      },
      {
        q: "Which payment gateways do you support?",
        a: "All major Indian and International gateways: Razorpay, Stripe, PhonePe, Paytm, and PayPal. We also configure COD with OTP verification to reduce returns.",
      },
      {
        q: "How do you handle 'High Traffic' events?",
        a: "Our Enterprise stacks use Redis Object Caching and CDN Edge Networks. This means your site can handle thousands of concurrent users during a sale without crashing.",
      },
      {
        q: "Is the inventory synced with my offline ERP?",
        a: "In the Enterprise plan, yes. We can build custom APIs to sync your website inventory with Tally, Zoho Books, or custom ERPs.",
      },
      {
        q: "Do you support multi-vendor marketplaces?",
        a: "Yes, we can build Amazon-style marketplaces where other vendors sign up and sell, but this requires a custom quote beyond our standard pricing cards.",
      },
    ],
  },
  {
    id: "support",
    category: "Support & AMC",
    icon: LifeBuoy,
    items: [
      {
        q: "What happens if my site breaks at 2 AM?",
        a: "If you are on the 'Growth' or 'VIP' AMC plan, our uptime monitors alert us instantly. We have a 24/7 response protocol to get you back online before you even wake up.",
      },
      {
        q: "Is the AMC mandatory?",
        a: "No. It is highly recommended for security and peace of mind, but if you have an internal IT team, we are happy to hand over the documentation and keys to them.",
      },
      {
        q: "How do you update content on my site?",
        a: "We build custom, simplified Admin Dashboards. You don't need to know code to change a price, update a blog, or change a banner. It's as easy as posting on Facebook.",
      },
      {
        q: "Do you offer refunds?",
        a: "We have a milestone-based refund policy. If you cancel during the Design Phase, you only pay for the design. Once coding begins, refunds are pro-rated based on work completed.",
      },
      {
        q: "Can I upgrade from 'Starter' to 'Business' later?",
        a: "Yes! Since we build modularly, upgrading is usually just a matter of adding the new features and paying the difference in tier price.",
      },
    ],
  },
];

// --- COMPONENT ---

const PricingCard: React.FC<{
  tier: PricingTier;
  onSelectPlan: () => void;
}> = ({ tier, onSelectPlan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`relative flex flex-col w-full h-full bg-white rounded-xl overflow-hidden ${
        tier.isHero
          ? "ring-2 ring-[#F05A28] shadow-2xl scale-100 md:scale-105 z-10"
          : "border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
      }`}
    >
      {tier.isHero && (
        <div className="bg-[#B23E13] text-white text-xs font-bold text-center py-1.5 uppercase tracking-wide">
          Most Popular Choice
        </div>
      )}

      <div className="p-4 md:p-6 lg:p-8 border-b border-slate-100">
        <h3 className="text-[#F05A28] font-heading font-bold text-base md:text-lg lg:text-xl uppercase tracking-wider mb-2">
          {tier.name}
        </h3>
        <p className="text-slate-500 text-xs md:text-sm font-medium mb-3 md:mb-4">
          {tier.tagline}
        </p>



        <button
          onClick={onSelectPlan}
          className={`w-full py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 transform active:scale-95 ${
            tier.isHero
              ? "bg-[#B23E13] text-white hover:bg-[#d44d1f] shadow-md hover:shadow-lg"
              : "bg-white border-2 border-[#B23E13] text-[#B23E13] hover:bg-[#B23E13] hover:text-white"
          }`}
        >
          {tier.isHero ? "Get Started Now" : "Select Plan"}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
        {tier.features.map((section, idx) => (
          <div key={idx} className="border-b border-slate-100 last:border-0">
            {section.category && (
              <div className="bg-slate-50/80 px-4 md:px-6 py-1.5 md:py-2">
                <h4 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {section.category}
                </h4>
              </div>
            )}
            <ul className="py-1 md:py-2">
              {section.features.map((feature, fIdx) => (
                <li
                  key={fIdx}
                  className="px-4 md:px-6 py-2 md:py-2.5 flex items-start text-sm text-slate-600 group hover:bg-slate-50 transition-colors"
                >
                  <Check
                    className="w-3 h-3 md:w-4 md:h-4 text-[#10B981] min-w-[12px] md:min-w-[16px] mt-0.5 mr-2 md:mr-3"
                    strokeWidth={3}
                  />
                  <span className="font-medium leading-relaxed font-mono text-[11px] md:text-xs lg:text-sm text-slate-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decorative gradient for long lists fade */}
      <div className="h-4 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 pointer-events-none" />
    </motion.div>
  );
};

const FactoryJetPricing = () => {
  const [activeTab, setActiveTab] = useState<PricingCategory>("website");
  const { openModal } = useContactModal();

  // FAQ State
  const [faqCategory, setFaqCategory] = useState("strategy");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const tabs: { id: PricingCategory; label: string }[] = [
    { id: "website", label: "Website Design" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "seo", label: "SEO & AI SEO" },
    { id: "amc", label: "AMC (Maintenance)" },
  ];

  const getData = () => {
    switch (activeTab) {
      case "ecommerce":
        return DATA_ECOMMERCE;
      case "amc":
        return DATA_AMC;
      case "seo":
        return DATA_SEO;
      default:
        return DATA_WEBSITE;
    }
  };

  const activeFaqs =
    FAQ_DATA.find((cat) => cat.id === faqCategory)?.items || [];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen pb-12 md:pb-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* --- HERO SECTION --- */}
      <header className="relative pt-14 md:pt-16 pb-12 md:pb-16 px-4 text-center bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto">
          <p
            className="inline-flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase tracking-widest"
            style={{ color: '#B23E13', letterSpacing: '0.14em' }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F05A28]" />
            TRANSPARENT PRICING
          </p>
          <h1 className="text-3xl md:text-6xl font-heading font-bold text-[#0F0F12] mb-4 md:mb-6 tracking-tight">
            Transparent, <span className="text-[#F05A28]">Value-Driven</span>{" "}
            Pricing
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade technology stacks at SMB-friendly prices. No hidden
            fees, just pure engineering excellence.
          </p>
        </div>
      </header>

      {/* Tab + Pricing Grid — sticky tab is bounded to this container so it doesn't overlap the CTA below */}
      <div>

      {/* --- TAB SWITCHER --- */}
      <div className="sticky top-20 z-30 mx-auto max-w-full md:max-w-fit px-2 mb-8 md:mb-12">
        <div className="bg-white/90 backdrop-blur-md p-1 md:p-1.5 rounded-full border border-slate-200 shadow-lg flex items-center space-x-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-slate-500 hover:text-[#0F0F12]"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#B23E13] rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- PRICING GRID --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 items-start"
          >
            {getData().map((tier, idx) => (
              <div key={idx} className={tier.isHero ? "md:-mt-4 md:mb-4" : ""}>
                <PricingCard tier={tier} onSelectPlan={openModal} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
      </div>{/* end Tab + Pricing Grid container */}

      {/* --- ADVANCED FAQ SECTION --- */}
      <section className="max-w-6xl mx-auto mt-16 md:mt-32 px-4 md:px-8 overflow-x-hidden">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#0F0F12] mb-3 md:mb-4">
            Common Questions &{" "}
            <span className="text-[#F05A28]">Straight Answers</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base lg:text-lg">
            Everything you need to know about our process, technology, and
            deliverables.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
          {/* FAQ CATEGORY TABS (Left on Desktop) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 lg:sticky lg:top-24">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 custom-scrollbar">
                {FAQ_DATA.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = faqCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setFaqCategory(cat.id);
                        setOpenFaqIndex(0);
                      }}
                      className={`flex items-center w-full p-3 md:p-4 rounded-xl text-left transition-all duration-300 relative group flex-shrink-0 lg:flex-shrink ${
                        isActive
                          ? "bg-[#B23E13] text-white shadow-md"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 ${
                          isActive
                            ? "text-white"
                            : "text-[#F05A28] group-hover:scale-110 transition-transform"
                        }`}
                      />
                      <div>
                        <span className="block font-bold text-xs md:text-sm">
                          {cat.category}
                        </span>
                        <span
                          className={`text-[10px] md:text-xs ${
                            isActive ? "text-orange-200" : "text-slate-400"
                          }`}
                        >
                          5 Questions
                        </span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="activeFaqTab"
                          className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                          initial={false}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FAQ ACCORDION (Right) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={faqCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {activeFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`group border rounded-xl md:rounded-2xl transition-all duration-300 overflow-hidden bg-white ${
                        isOpen
                          ? "border-[#F05A28] shadow-lg ring-1 ring-[#F05A28]/20"
                          : "border-slate-200 hover:border-[#F05A28]/30 hover:shadow-md"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 md:p-5 lg:p-6 text-left"
                      >
                        <span
                          className={`font-heading font-semibold text-sm md:text-base lg:text-lg pr-4 md:pr-8 transition-colors ${
                            isOpen
                              ? "text-[#B23E13]"
                              : "text-[#0F0F12] group-hover:text-[#F05A28]"
                          }`}
                        >
                          {faq.q}
                        </span>
                        <div
                          className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#B23E13] text-white rotate-180"
                              : "bg-slate-100 text-slate-500 group-hover:bg-orange-50"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3 h-3 md:w-4 md:h-4" />
                          ) : (
                            <Plus className="w-3 h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                              <div className="h-px w-full bg-slate-100 mb-3 md:mb-4" />
                              <div className="flex items-start">
                                <div className="mt-1 mr-4 hidden md:block">
                                  <div className="w-2 h-2 rounded-full bg-[#F05A28]" />
                                </div>
                                <p className="text-slate-600 leading-relaxed text-xs md:text-sm lg:text-base">
                                  {faq.a}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="max-w-4xl mx-auto mt-16 md:mt-32 px-4 md:px-6">
        <div className="bg-[#0F0F12] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden group">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F05A28] opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl transition-opacity group-hover:opacity-20 duration-700" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F05A28] opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-3 md:mb-4">
              Not sure which stack fits your scale?
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
              Talk to a Senior Solutions Architect, not a salesperson. We'll
              audit your current digital footprint for free.
            </p>
            <button
              onClick={() => {
                trackCTAClick('book_free_consultation', 'pricing_cta', 'primary');
                openModal();
              }}
              className="bg-[#B23E13] text-white hover:bg-[#d44d1f] font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-[#F05A28]/30 transition-all transform hover:-translate-y-1 flex items-center mx-auto text-sm md:text-base"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
            <p className="mt-3 md:mt-4 text-[10px] md:text-xs text-white font-mono uppercase tracking-wider">
              No obligation • 15-min Technical Discovery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactoryJetPricing;
