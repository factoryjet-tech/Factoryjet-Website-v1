import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Trophy,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

interface FeatureCategory {
  title: string;
  items: string[];
}

interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  suffix?: string;
  popular?: boolean;
  ctaText: string;
  categories: FeatureCategory[];
}

interface PricingProps {
  onCtaClick?: () => void;
}

const PlanCard: React.FC<{ plan: PricingPlan; onCtaClick?: () => void }> = ({
  plan,
  onCtaClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 2 categories initially
  const initialCategories = plan.categories.slice(0, 2);
  const hiddenCategories = plan.categories.slice(2);
  const hasMore = plan.categories.length > 2;

  return (
    <motion.div
      layout
      className={`bg-white rounded-[2.5rem] border-2 transition-all duration-300 flex flex-col relative overflow-hidden ${
        plan.popular
          ? "border-jet-blue shadow-2xl scale-[1.02] z-10"
          : "border-slate-100"
      }`}
    >
      {plan.popular && (
        <div className="bg-jet-blue text-white text-[10px] font-black py-2.5 w-full text-center uppercase tracking-[0.2em]">
          Ahmedabad's Favorite Choice
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-black text-jet-navy tracking-tighter">
            {plan.name}
          </h3>
          {plan.popular && <BadgeCheck size={16} className="text-jet-blue" />}
        </div>
        <p className="text-xs text-jet-gray font-bold uppercase tracking-widest mb-5 md:mb-6">
          {plan.tagline}
        </p>

        <div className="mb-6 md:mb-8">
          <span className="text-[10px] sm:text-xs font-semibold text-jet-orange uppercase tracking-wider">
            Starting At
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-4xl sm:text-5xl font-black text-jet-navy tracking-tighter">
              &#8377;{plan.price}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] text-jet-gray font-black uppercase">
                + GST
              </span>
              {plan.suffix && (
                <span className="text-xs text-jet-blue font-bold">
                  {plan.suffix}
                </span>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className={`w-full py-4 rounded-2xl font-black transition-all transform active:scale-95 text-sm uppercase tracking-widest ${
            plan.popular
              ? "bg-jet-orange text-white shadow-xl shadow-orange-500/20"
              : "bg-jet-white text-jet-navy border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {plan.ctaText}
        </button>
      </div>

      <div className="px-6 pb-6 md:px-8 md:pb-8 flex flex-col gap-5 md:gap-6">
        {/* Always visible categories */}
        {initialCategories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50 pb-2">
              {cat.title}
            </h4>
            <ul className="space-y-3">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm font-bold text-jet-navy/80"
                >
                  <Check
                    size={16}
                    className="text-jet-green mt-0.5 flex-shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Expandable categories */}
        <AnimatePresence>
          {isExpanded && hiddenCategories.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-col gap-6"
            >
              {hiddenCategories.map((cat, idx) => (
                <div key={idx} className="space-y-4 pt-2">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50 pb-2">
                    {cat.title}
                  </h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-bold text-jet-navy/80"
                      >
                        <Check
                          size={16}
                          className="text-jet-green mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2 py-3 flex items-center justify-center gap-2 text-xs font-black text-jet-blue bg-jet-blue/5 rounded-xl hover:bg-jet-blue/10 transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                See Full Stack <ChevronDown size={14} />
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  const [activeTab, setActiveTab] = useState<"website" | "ecommerce" | "amc">(
    "website"
  );

  const websitePlans: PricingPlan[] = [
    {
      name: "STARTER",
      tagline: "Validation",
      price: "29,999",
      ctaText: "Select Plan",
      categories: [
        {
          title: "CORE",
          items: ["5 Pages", "React Architecture", "Mobile Responsive"],
        },
        { title: "TECH", items: ["Basic SEO", "SSL Security", "Google Maps"] },
        {
          title: "EXTRAS",
          items: ["Contact Form", "WhatsApp Button", "Stock Photos"],
        },
      ],
    },
    {
      name: "BUSINESS",
      tagline: "Dominance",
      price: "59,999",
      popular: true,
      ctaText: "Scale Now",
      categories: [
        {
          title: "CORE",
          items: ["12 Pages", "Hybrid Architecture", "Schema.org Markup"],
        },
        {
          title: "CONVERSION",
          items: ["WhatsApp Widget", "GA4 Dashboard", "Insta Integration"],
        },
        {
          title: "TECH STACK",
          items: ["Speed Optimization", "Email Setup", "Blog Module"],
        },
      ],
    },
    {
      name: "ENTERPRISE",
      tagline: "Ecosystem",
      price: "99,999",
      ctaText: "Consult Us",
      categories: [
        {
          title: "TECH",
          items: ["20+ Pages", "PWA (Mobile App Feel)", "Headless CMS"],
        },
        { title: "OPS", items: ["CRM Integration", "Heatmaps", "Speed 90+"] },
        {
          title: "FULL STACK",
          items: ["Custom API Integrations", "Multi-language", "A/B Testing"],
        },
      ],
    },
  ];

  const ecommercePlans: PricingPlan[] = [
    {
      name: "BASIC SHOP",
      tagline: "Validation",
      price: "49,999",
      ctaText: "Select Plan",
      categories: [
        {
          title: "CORE",
          items: ["20 Products", "UPI Integration", "Mobile Checkout"],
        },
        {
          title: "LOGISTICS",
          items: ["Basic Shipping Rates", "Email Receipts"],
        },
        {
          title: "PAYMENTS",
          items: ["Razorpay Integration", "GPay/PhonePe Ready"],
        },
      ],
    },
    {
      name: "GROWTH SHOP",
      tagline: "Bestseller",
      price: "99,999",
      popular: true,
      ctaText: "Scale Now",
      categories: [
        {
          title: "CORE",
          items: ["100 Products", "Variable Options", "Advanced Checkout"],
        },
        {
          title: "LOGISTICS",
          items: [
            "Shiprocket Integration",
            "Auto GST Calculator",
            "Inventory Alerts",
          ],
        },
        {
          title: "MARKETING",
          items: ["Abandon Cart Recovery", "SMS Alerts", "Wishlist"],
        },
      ],
    },
    {
      name: "EMPIRE SHOP",
      tagline: "Authority",
      price: "1,99,999",
      ctaText: "Consult Us",
      categories: [
        {
          title: "CORE",
          items: [
            "Unlimited Products",
            "B2B Wholesale Portal",
            "Custom ERP Sync",
          ],
        },
        {
          title: "TECH",
          items: [
            "International Payments",
            "AI Personalization",
            "Advanced Reports",
          ],
        },
        {
          title: "OPERATIONS",
          items: [
            "Multi-vendor Setup",
            "Priority Support",
            "Dedicated Hosting",
          ],
        },
      ],
    },
  ];

  const amcPlans: PricingPlan[] = [
    {
      name: "ESSENTIAL",
      tagline: "Safety",
      price: "9,999",
      suffix: "/Year",
      ctaText: "Secure Site",
      categories: [
        {
          title: "CORE",
          items: ["Weekly Backups", "SSL Renewal", "Security Scans"],
        },
        { title: "SUPPORT", items: ["Email Support", "Bug Fixes"] },
        { title: "EXTRAS", items: ["Server Monitoring", "Uptime Alerts"] },
      ],
    },
    {
      name: "PROTECT",
      tagline: "Proactive",
      price: "29,999",
      suffix: "/Year",
      popular: true,
      ctaText: "Get Protected",
      categories: [
        {
          title: "CORE",
          items: ["Daily Backups", "Core Web Vitals Tuning", "Managed Updates"],
        },
        {
          title: "SUPPORT",
          items: [
            "WhatsApp Support",
            "24/7 Monitoring",
            "Monthly Strategy Call",
          ],
        },
        {
          title: "PERFORMANCE",
          items: ["CDN Management", "Database Cleanup", "Hacker Protection"],
        },
      ],
    },
    {
      name: "VIP",
      tagline: "Priority",
      price: "89,999",
      suffix: "/Year",
      ctaText: "Get VIP",
      categories: [
        {
          title: "CORE",
          items: ["Hourly Backups", "DDoS Protection", "Staging Environment"],
        },
        {
          title: "SUPPORT",
          items: ["4-Hour Response", "Dedicated Manager", "Quarterly Audit"],
        },
        {
          title: "TECH",
          items: [
            "Unlimited Content Updates",
            "SEO Monitoring",
            "Custom Dev Support",
          ],
        },
      ],
    },
  ];

  const getPlans = () => {
    switch (activeTab) {
      case "ecommerce":
        return ecommercePlans;
      case "amc":
        return amcPlans;
      default:
        return websitePlans;
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-20 bg-jet-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-jet-navy mb-4 tracking-tighter">
            Honest Tech.{" "}
            <span className="text-jet-blue underline decoration-jet-blue/20">
              Ahmedabad Pricing.
            </span>
          </h2>
          <p className="text-jet-slate mb-6 md:mb-8 max-w-xl mx-auto font-medium text-sm md:text-base">
            No hidden fees. No "agency overhead". Just world-class engineering
            built for your ROI.
          </p>

          <div className="inline-flex p-1.5 bg-white rounded-[1.5rem] border border-slate-200 shadow-lg mb-8 overflow-x-auto max-w-full no-scrollbar">
            {(["website", "ecommerce", "amc"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 sm:px-8 py-3 rounded-[1.2rem] text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap active:scale-95 ${
                  activeTab === tab
                    ? "bg-jet-blue text-white shadow-md"
                    : "text-slate-400 hover:text-jet-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16 items-start max-w-6xl mx-auto"
        >
          {getPlans().map((plan, i) => (
            <PlanCard
              key={`${activeTab}-${i}`}
              plan={plan}
              onCtaClick={onCtaClick}
            />
          ))}
        </motion.div>

        <div className="max-w-6xl mx-auto bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-dashed border-slate-300 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-5 md:gap-6 flex-1 text-center md:text-left">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-jet-green/10 rounded-[2rem] flex items-center justify-center flex-shrink-0">
                <Trophy size={36} className="text-jet-green" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-jet-navy tracking-tight mb-1">
                  Gujarat's ROI Leader
                </h4>
                <p className="text-sm text-jet-slate font-medium leading-relaxed">
                  We leverage high-end open-source stacks to provide enterprise
                  power at 1/5th the cost of CG Road agencies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 bg-slate-50 px-6 sm:px-8 md:px-10 py-5 md:py-6 rounded-[2.5rem] border border-slate-100 w-full lg:w-auto">
              <div className="flex flex-col items-center">
                <ShieldCheck size={24} className="text-jet-blue mb-1" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Secure Payments
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-6 overflow-hidden">
                <img
                  src="https://www.vectorlogo.zone/logos/upi/upi-ar21.svg"
                  alt="UPI"
                  className="h-8 sm:h-10 opacity-90"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                  alt="Razorpay"
                  className="h-3 sm:h-4 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
