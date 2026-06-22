import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Star, Zap } from 'lucide-react';

type PricingCategory = 'website' | 'ecommerce' | 'amc';

interface PricingProps {
  onOpenModal: () => void;
}

interface PricingTier {
  name: string;
  price: string;
  subtitle?: string;
  isPopular?: boolean;
  features: string[];
  detailedFeatures?: { category: string; items: string[] }[];
}

const pricingData: Record<PricingCategory, PricingTier[]> = {
  website: [
    {
      name: "Essential",
      price: "AED 1,999",
      subtitle: "Starting at (~$545 USD)",
      features: [
        "Up to 7 Custom Pages",
        "Mobile-First Responsive Design",
        "Basic SEO Setup",
        "Contact Form & WhatsApp Chat",
        "CMS Training (1 Hour)",
        "30 Days Support"
      ],
      detailedFeatures: [
        { category: "Design", items: ["AI-powered design generation", "2 rounds of revisions", "Stock image integration (15 images)"] },
        { category: "Tech", items: ["SSL Certificate", "Google Analytics 4", "XML Sitemap", "Page Speed Optimization"] }
      ]
    },
    {
      name: "Professional",
      price: "AED 5,999",
      subtitle: "Starting at (~$1,635 USD)",
      isPopular: true,
      features: [
        "Up to 15 Custom Pages",
        "Advanced Design & Animations",
        "Comprehensive SEO Optimization",
        "Blog Setup with 5 Posts",
        "Advanced Forms & Automation",
        "60 Days Support"
      ],
      detailedFeatures: [
        { category: "Design", items: ["3 rounds of revisions", "Stock image integration (40 images)", "Micro-interactions"] },
        { category: "Tech", items: ["Google Tag Manager", "Facebook Pixel", "Security Hardening", "Lazy Loading"] },
        { category: "Functionality", items: ["Live Chat Widget", "Newsletter Subscription", "Social Feed Integration"] }
      ]
    },
    {
      name: "Premium",
      price: "AED 15,999",
      subtitle: "Starting at (~$4,360 USD)",
      features: [
        "Up to 25 Custom Pages",
        "Fully Custom Brand-Unique Design",
        "Advanced Animations & Parallax",
        "CRM & Marketing Integration",
        "Multi-Language Setup",
        "90 Days Support"
      ],
      detailedFeatures: [
        { category: "Design", items: ["5 rounds of revisions", "Professional stock/AI imagery", "Video backgrounds"] },
        { category: "Tech", items: ["Headless CMS capable", "PWA capabilities", "Advanced Caching & CDN", "GDPR Compliance"] },
        { category: "Marketing", items: ["Advanced Schema Markup", "Local SEO", "Content Strategy Document"] }
      ]
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      subtitle: "Get a custom quote",
      features: [
        "Unlimited Custom Pages",
        "Custom Web App Development",
        "Cloud Architecture (AWS/Azure)",
        "Advanced Security & RBAC",
        "Custom API Integrations",
        "Dedicated Team & Project Manager"
      ],
      detailedFeatures: [
        { category: "Tech", items: ["Load Balancing", "Redis Caching", "Database Optimization", "Disaster Recovery"] },
        { category: "Support", items: ["Priority 24/7 Channel", "SLA Guarantees", "Weekly Status Meetings"] }
      ]
    }
  ],
  ecommerce: [
    {
      name: "Starter",
      price: "AED 4,999",
      subtitle: "~$1,360 USD",
      features: [
        "Up to 50 Products",
        "10 Custom Pages",
        "2 Payment Gateways",
        "Shopping Cart & Checkout",
        "Basic E-commerce SEO",
        "30 Days Support"
      ],
      detailedFeatures: [
        { category: "Product", items: ["Product Categories (10)", "Inventory Tracking", "Product Search"] },
        { category: "Features", items: ["Guest Checkout", "Order Management", "Abandoned Cart Email (Basic)"] }
      ]
    },
    {
      name: "Professional",
      price: "AED 14,999",
      subtitle: "~$4,085 USD",
      isPopular: true,
      features: [
        "Up to 500 Products",
        "20 Custom Pages",
        "5 Payment Gateways + BNPL",
        "Advanced Shipping Integration",
        "Abandoned Cart Recovery",
        "60 Days Support"
      ],
      detailedFeatures: [
        { category: "Marketing", items: ["Coupon System", "Email Automation", "Wishlist", "Product Reviews"] },
        { category: "Tech", items: ["Advanced SEO", "Rich Snippets", "Google Shopping Feed", "Facebook Catalog"] }
      ]
    },
    {
      name: "Premium",
      price: "AED 49,999",
      subtitle: "~$13,600 USD",
      features: [
        "Up to 5,000 Products",
        "Unlimited Pages",
        "Multi-Currency & Multi-Language",
        "Subscription Management",
        "Multi-Channel Selling (Amazon/Noon)",
        "90 Days Support"
      ],
      detailedFeatures: [
        { category: "Advanced", items: ["Headless Commerce", "PWA", "One-click Upsells", "Loyalty Program"] },
        { category: "B2B", items: ["Wholesale Portal", "Volume Discounts", "Quote Request System"] }
      ]
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      subtitle: "Get a custom quote",
      features: [
        "Multi-Vendor Marketplace",
        "Unlimited Vendors & Products",
        "Custom Platform Development",
        "Microservices Architecture",
        "AI-Powered Search & Recommendations",
        "24/7 Premium Support"
      ],
      detailedFeatures: [
        { category: "Marketplace", items: ["Vendor Portals", "Commission Management", "Vendor Payout Automation"] },
        { category: "Scale", items: ["High Concurrency", "Global CDN", "Big Data Analytics", "Auto-scaling"] }
      ]
    }
  ],
  amc: [
    {
      name: "Essential",
      price: "AED 999",
      subtitle: "Per Month (Billed Annually)",
      features: [
        "2 Development Hours/Month",
        "Daily Backups",
        "Weekly Security Scans",
        "Plugin/Theme Updates",
        "Uptime Monitoring",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "AED 2,499",
      subtitle: "Per Month (Billed Annually)",
      isPopular: true,
      features: [
        "6 Development Hours/Month",
        "Twice-Daily Backups",
        "Daily Security Scans",
        "Performance Optimization",
        "Email & WhatsApp Support",
        "Monthly Strategy Call"
      ],
      detailedFeatures: [
        { category: "Security", items: ["DDoS Monitoring", "2FA Setup", "Security Audit Quarterly"] },
        { category: "Updates", items: ["Landing Page Updates", "Banner Changes", "Product Uploads (50)"] }
      ]
    },
    {
      name: "Premium",
      price: "AED 5,999",
      subtitle: "Per Month (Billed Annually)",
      features: [
        "12 Development Hours/Month",
        "Real-Time Backups",
        "Real-Time Threat Monitoring",
        "Priority Support (4h Response)",
        "Advanced SEO Monitoring",
        "Dedicated Account Manager"
      ],
      detailedFeatures: [
        { category: "Performance", items: ["99.9% Uptime SLA", "Core Web Vitals Monitoring", "Database Optimization"] },
        { category: "Marketing", items: ["Email Campaign Setup", "A/B Testing", "Conversion Optimization"] }
      ]
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      subtitle: "Get a custom quote",
      features: [
        "25 Development Hours/Month",
        "24/7 SOC Security",
        "99.99% Uptime SLA",
        "1-Hour Response Time",
        "Multi-Site Management",
        "Strategic Partnership"
      ],
      detailedFeatures: [
        { category: "Enterprise", items: ["Dedicated Dev Team", "Disaster Recovery", "Custom SLAs", "Business Intelligence"] }
      ]
    }
  ]
};

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>('website');
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({});

  const toggleExpand = (tierName: string) => {
    setExpandedTiers(prev => ({
      ...prev,
      [tierName]: !prev[tierName]
    }));
  };

  return (
    <section id="pricing" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0F172A_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* === HEADER === */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-white mb-4">
            Transparent Pricing for <span className="text-[#FF6B35]">Dubai Businesses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Aggressive pricing with AI-powered efficiency. Save 50-70% compared to traditional UAE agencies without compromising quality.
          </p>
        </div>

        {/* === TABS === */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-10">
          {(['website', 'ecommerce', 'amc'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#0052CC] border-[#0052CC] text-white shadow-[0_0_20px_rgba(0,82,204,0.4)] transform scale-105'
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat === 'website' && 'Website Design'}
              {cat === 'ecommerce' && 'E-Commerce'}
              {cat === 'amc' && 'Annual Maintenance'}
            </button>
          ))}
        </div>

        {/* === PRICING CARDS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start relative z-10">
          {pricingData[activeCategory].map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-6 lg:p-8 rounded-2xl transition-all duration-300 group ${
                tier.isPopular 
                  ? 'bg-[#1a2332] border-[3px] border-[#FF6B35] shadow-[0_0_40px_-10px_rgba(255,107,53,0.3)] transform scale-[1.02] lg:-translate-y-6 z-20' 
                  : 'bg-[#1a2332] border border-white/10 hover:border-white/30 hover:-translate-y-2 hover:shadow-xl z-10'
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                  <span className="bg-[#FF6B35] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1 animate-pulse">
                    <Star size={12} fill="currentColor" /> Most Popular
                  </span>
                </div>
              )}

              {/* Spotlight Effect for Popular Card */}
              {tier.isPopular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/5 to-transparent rounded-2xl pointer-events-none"></div>
              )}

              <div className="mb-8 relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>

                <div className="flex flex-col items-start leading-none">
                    {tier.price.match(/\d/) ? (
                        <>
                            <span className="text-[10px] sm:text-xs font-semibold text-[#FF6B35] uppercase tracking-wider mb-2">
                              Starting At
                            </span>
                            <span className="text-sm font-bold text-gray-400 mb-1">
                              {tier.price.match(/^[^\d]*/)?.[0]?.replace(/\s+/g, '') || "AED"}
                            </span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-[36px] sm:text-[40px] lg:text-[44px] font-bold text-white tracking-tight">
                                {tier.price.replace(/^[^\d]*/, '').replace(/[^\d]*$/, '')}
                              </span>
                              <span className="text-xl sm:text-2xl font-bold text-white/80">
                                {tier.price.match(/[^\d]*$/)?.[0] || ""}
                              </span>
                            </div>
                        </>
                    ) : (
                         <span className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight mt-2 mb-1">
                            {tier.price}
                        </span>
                    )}
                </div>

                {tier.subtitle && <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-2">{tier.subtitle}</p>}
              </div>

              {/* Features List */}
              <div className="flex-grow space-y-4 mb-8 relative z-10">
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.isPopular ? 'bg-[#FF6B35]/20 text-[#FF6B35]' : 'bg-white/10 text-white'
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-300 leading-snug">{feat}</span>
                  </div>
                ))}

                {/* Collapsible Details */}
                {tier.detailedFeatures && (
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedTiers[tier.name] ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 border-t border-white/10 space-y-5">
                      {tier.detailedFeatures.map((group, gIdx) => (
                        <div key={gIdx}>
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{group.category}</p>
                          <ul className="space-y-2">
                            {group.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-xs text-gray-400 flex items-center gap-2">
                                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-auto space-y-4 relative z-10">
                {tier.detailedFeatures && (
                  <button 
                    onClick={() => toggleExpand(tier.name)}
                    className="w-full text-xs font-bold text-gray-500 hover:text-white flex items-center justify-center gap-1 transition-colors py-1 uppercase tracking-wide"
                  >
                    {expandedTiers[tier.name] ? 'Show Less' : 'View Detailed Features'}
                    {expandedTiers[tier.name] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                )}
                
                <button 
                  onClick={onOpenModal}
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  tier.isPopular 
                    ? 'bg-[#FF6B35] hover:bg-[#e55a28] text-white shadow-[0_4px_20px_rgba(255,107,53,0.3)]' 
                    : 'bg-white text-[#0052CC] hover:bg-gray-100'
                }`}>
                  <Zap size={16} fill={tier.isPopular ? "white" : "#0052CC"} /> 
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;