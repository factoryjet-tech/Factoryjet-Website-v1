import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from '../data.constants';
import { ServiceCardProps } from '../data.types';
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const ServiceCard: React.FC<{ service: ServiceCardProps }> = ({ service }) => {
  // Determine if the card has a dark background based on className content
  const isDarkCard =
    service.className?.includes("bg-jet-navy") ||
    service.className?.includes("text-white") ||
    service.className?.includes("bg-gradient-to-r");

  return (
    <div
      className={`p-8 rounded-card border transition-all duration-300 hover:shadow-hover hover:-translate-y-1 relative group overflow-hidden ${
        service.className || "bg-white border-jet-light"
      }`}
    >
      <div
        className={`absolute top-0 right-0 p-4 opacity-5 font-black text-6xl group-hover:scale-110 group-hover:opacity-10 transition-all select-none ${
          isDarkCard ? "text-white" : "text-jet-navy"
        }`}
      >
        {service.icon}
      </div>
      <div className="relative z-10 h-full flex flex-col">
        <div
          className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 w-fit border ${
            isDarkCard
              ? "bg-white/10 text-white border-white/20"
              : "text-jet-blue bg-blue-50 border-blue-100"
          }`}
        >
          {service.tag}
        </div>

        {/* Title: Use white if dark card, else navy */}
        <h3
          className={`text-2xl font-bold font-heading mb-3 ${
            isDarkCard ? "text-white" : "text-jet-navy"
          }`}
        >
          {service.title}
        </h3>

        <div className="flex items-end gap-3 mb-4">
          <span
            className={`text-3xl font-bold ${
              isDarkCard ? "text-jet-orange" : "text-jet-orange"
            }`}
          >
            {service.price}
          </span>
          {service.originalPrice && (
            <span
              className={`text-sm line-through mb-1 decoration-current opacity-60 ${
                isDarkCard ? "text-gray-300" : "text-gray-400"
              }`}
            >
              {service.originalPrice}
            </span>
          )}
        </div>

        {/* Description: Use white/80 if dark card, else slate */}
        <p
          className={`text-sm mb-6 leading-relaxed h-16 ${
            isDarkCard ? "text-gray-200" : "text-jet-slate"
          }`}
        >
          {service.description}
        </p>

        <div className="space-y-3 mb-8 flex-1">
          {service.includes.slice(0, 5).map((inc: string, i: number) => (
            <div
              key={i}
              className={`flex items-start text-sm ${
                isDarkCard ? "text-gray-200" : "text-jet-slate"
              }`}
            >
              <Check
                size={16}
                className={`mr-2 shrink-0 mt-0.5 ${
                  isDarkCard ? "text-jet-green" : "text-jet-green"
                }`}
                strokeWidth={3}
              />{" "}
              {inc}
            </div>
          ))}
          {service.includes.length > 5 && (
            <div
              className={`text-xs italic pl-6 ${
                isDarkCard ? "text-gray-400" : "text-jet-gray"
              }`}
            >
              + {service.includes.length - 5} more features
            </div>
          )}
        </div>

        <button
          className={`w-full py-3 border rounded-btn font-bold text-sm transition-all shadow-sm ${
            isDarkCard
              ? "border-white text-white hover:bg-white hover:text-jet-navy"
              : "border-jet-blue text-jet-blue hover:bg-jet-blue hover:text-white"
          }`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export const Services = () => (
  <section className="py-24 bg-jet-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-jet-orange font-bold tracking-wider uppercase text-sm mb-2 block">
          Our Solutions
        </span>
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-jet-navy">
          Website Design Services for Every Hyderabad Business
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
        {SITE_DATA.services.map((service, idx) => (
          <ServiceCard key={idx} service={service as ServiceCardProps} />
        ))}
      </div>
    </div>
  </section>
);

export const Process = () => (
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-jet-navy">
          From Inquiry to Launch in 7 Days
        </h2>
        <p className="text-xl text-jet-slate mt-2">
          Transparent, efficient, results-focused
        </p>
      </div>

      <div className="relative border-l-2 border-jet-light ml-4 md:ml-10 space-y-12">
        {[
          {
            day: "Day 1",
            title: "Discovery & Strategy",
            icon: "🎯",
            desc: "Free 30-minute consultation to understand your business, goals, and target audience. Competitor analysis and strategy recommendation. Same-day proposal delivery.",
          },
          {
            day: "Day 2",
            title: "Design Mockups",
            icon: "🎨",
            desc: "Custom wireframes and design mockups based on your brand. 2-3 design options for review. Unlimited revisions at design stage.",
          },
          {
            day: "Day 3-4",
            title: "Development",
            icon: "💻",
            desc: "Rapid development on React/Next.js or WordPress. Mobile-responsive implementation. Integration of forms, analytics, and third-party tools.",
          },
          {
            day: "Day 5",
            title: "Content & SEO",
            icon: "✍️",
            desc: "Content integration and optimization. On-page SEO implementation. Meta tags, schema markup, sitemap, robots.txt setup.",
          },
          {
            day: "Day 6",
            title: "Testing & QA",
            icon: "✅",
            desc: "Cross-browser testing (Chrome, Safari, Firefox, Edge). Mobile device testing (iOS, Android). Performance optimization and speed testing.",
          },
          {
            day: "Day 7",
            title: "Launch",
            icon: "🚀",
            desc: "Domain configuration and SSL installation. Final review and client approval. LIVE deployment with zero downtime. Handover and training session.",
          },
          {
            day: "Ongoing",
            title: "Support & Growth",
            icon: "📈",
            desc: "30-60 days post-launch support included. AMC options for continuous optimization. Growth partnership for long-term success.",
          },
        ].map((step, i) => (
          <div key={i} className="relative pl-12 md:pl-16">
            <div className="absolute -left-[17px] top-0 w-9 h-9 bg-jet-blue text-white rounded-full flex items-center justify-center font-bold shadow-lg ring-4 ring-white z-10 text-sm">
              {step.icon}
            </div>
            <span className="text-xs font-bold text-jet-orange uppercase tracking-wider bg-orange-50 px-2 py-1 rounded-sm mb-2 inline-block">
              {step.day}
            </span>
            <h3 className="text-2xl font-bold text-jet-navy mb-2 font-heading">
              {step.title}
            </h3>
            <p className="text-jet-slate leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TechStack = () => (
  <section className="py-24 bg-jet-white border-y border-jet-light">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-heading font-bold text-center mb-12 text-jet-navy">
        Platforms & Technologies We Master
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h3 className="text-xl font-bold mb-4 text-jet-navy flex items-center gap-2">
            🌐 Website Platforms
          </h3>
          <div className="bg-white rounded-card shadow-sm overflow-hidden border border-jet-light">
            <table className="w-full text-sm">
              <thead className="bg-jet-light/50 text-jet-navy">
                <tr>
                  <th className="p-4 text-left font-bold">Platform</th>
                  <th className="p-4 text-left font-bold">Best For</th>
                  <th className="p-4 text-left font-bold">Starting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jet-light">
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">WordPress</td>
                  <td className="p-4 text-jet-slate">Blogs, corporate</td>
                  <td className="p-4 font-bold text-jet-navy">₹29,999</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">Webflow</td>
                  <td className="p-4 text-jet-slate">Agencies, portfolios</td>
                  <td className="p-4 font-bold text-jet-navy">₹49,999</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">
                    React/Next.js
                  </td>
                  <td className="p-4 text-jet-slate">SaaS, High-perf</td>
                  <td className="p-4 font-bold text-jet-navy">₹1,49,999</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">Framer</td>
                  <td className="p-4 text-jet-slate">Interactive</td>
                  <td className="p-4 font-bold text-jet-navy">₹59,999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-jet-navy flex items-center gap-2">
            🛒 E-Commerce Platforms
          </h3>
          <div className="bg-white rounded-card shadow-sm overflow-hidden border border-jet-light">
            <table className="w-full text-sm">
              <thead className="bg-jet-light/50 text-jet-navy">
                <tr>
                  <th className="p-4 text-left font-bold">Platform</th>
                  <th className="p-4 text-left font-bold">Best For</th>
                  <th className="p-4 text-left font-bold">Starting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jet-light">
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">Shopify</td>
                  <td className="p-4 text-jet-slate">D2C, Quick launch</td>
                  <td className="p-4 font-bold text-jet-navy">₹59,999</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">
                    WooCommerce
                  </td>
                  <td className="p-4 text-jet-slate">Control, WordPress</td>
                  <td className="p-4 font-bold text-jet-navy">₹75,999</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">Magento</td>
                  <td className="p-4 text-jet-slate">Enterprise</td>
                  <td className="p-4 font-bold text-jet-navy">₹2,50,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-jet-blue">Custom</td>
                  <td className="p-4 text-jet-slate">Unique needs</td>
                  <td className="p-4 font-bold text-jet-navy">₹3,00,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-jet-gray uppercase tracking-widest mb-6">
          Seamless Integrations
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[
            "Razorpay",
            "PayU",
            "Stripe",
            "Shiprocket",
            "Delhivery",
            "BlueDart",
            "Google Analytics",
            "HubSpot",
          ].map((p) => (
            <span
              key={p}
              className="text-lg font-bold text-jet-slate hover:text-jet-blue cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Pricing Data & Types ---

type PricingCategory = "Website Design" | "E-Commerce" | "AMC (Maintenance)";

interface PricingFeatureCategory {
  category: string;
  items: string[];
}

interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  suffix: string;
  isPopular: boolean;
  features: PricingFeatureCategory[];
}

const PRICING_DATA: Record<PricingCategory, PricingPlan[]> = {
  "Website Design": [
    {
      name: "Starter",
      tagline: "Launchpad",
      price: "₹29,999",
      suffix: "+ GST",
      isPopular: false,
      features: [
        {
          category: "CORE",
          items: ["5 Pages", "WordPress/React Basics", "Responsive"],
        },
        {
          category: "SEO",
          items: ["XML Sitemap", "Basic Meta", "Google Maps"],
        },
        {
          category: "PERFORMANCE",
          items: ["Standard Caching", "Auto-Resize Images"],
        },
        {
          category: "SECURITY",
          items: ["Standard HTTPS", "Basic Login Protection", "ReCaptcha v2"],
        },
        { category: "CONVERSION", items: ["Click-to-Call", "Standard Forms"] },
        { category: "HOSTING", items: ["99% Uptime"] },
      ],
    },
    {
      name: "Business",
      tagline: "Growth",
      price: "₹59,999",
      suffix: "+ GST",
      isPopular: true,
      features: [
        {
          category: "CORE",
          items: [
            "12 Pages",
            "Hybrid AI Architecture",
            "Mobile-First Indexing",
            "Legacy Browser Support",
          ],
        },
        {
          category: "SEO",
          items: [
            "Advanced Robots.txt",
            "Open Graph Tags",
            "Schema.org (JSON-LD)",
            "G-Business Profile",
          ],
        },
        {
          category: "PERFORMANCE",
          items: [
            "Lighthouse 90+",
            "WebP Compression",
            "Cloudflare CDN",
            "Database Query Opt",
          ],
        },
        {
          category: "SECURITY",
          items: [
            "Military-Grade SSL",
            "Brute Force Protection",
            "ReCaptcha v3",
            "Daily Cloud Backups",
          ],
        },
        {
          category: "CONVERSION",
          items: [
            "Sticky Bottom Bar",
            "WhatsApp Widget",
            "Multi-Step Forms",
            "GA4 Setup",
            "Insta Feed",
          ],
        },
        {
          category: "HOSTING",
          items: ["99.9% Uptime", "Unmetered Bandwidth"],
        },
      ],
    },
    {
      name: "Enterprise",
      tagline: "Dominance",
      price: "₹1,19,999",
      suffix: "+ GST",
      isPopular: false,
      features: [
        {
          category: "CORE",
          items: [
            "20+ Dynamic Pages",
            "Next.js/Headless",
            "PWA Ready",
            "Retina Support",
          ],
        },
        {
          category: "SEO",
          items: [
            "Log File Analysis",
            "Twitter Cards",
            "Voice Search (AEO)",
            "Local Citations",
          ],
        },
        {
          category: "PERFORMANCE",
          items: [
            'Core Web Vitals "Green"',
            "Lazy Loading",
            "Global Edge Network",
            "Redis Object Caching",
          ],
        },
        {
          category: "SECURITY",
          items: [
            "Wildcard SSL",
            "DDoS Mitigation",
            "Enterprise Spam Firewall",
            "Real-Time Redundant Backups",
          ],
        },
        {
          category: "CONVERSION",
          items: [
            "Exit Intent Popups",
            "AI Chatbot Ready",
            "CRM Integration",
            "Heatmaps",
            "Auto-Social Posting",
          ],
        },
        {
          category: "HOSTING",
          items: ["99.99% Uptime", "High-Frequency Compute"],
        },
      ],
    },
  ],
  "E-Commerce": [
    {
      name: "Shop Starter",
      tagline: "Validation",
      price: "₹59,999",
      suffix: "+ GST",
      isPopular: false,
      features: [
        {
          category: "CORE FEATURES",
          items: [
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
      name: "Shop Pro",
      tagline: "Bestseller",
      price: "₹99,999",
      suffix: "+ GST",
      isPopular: true,
      features: [
        {
          category: "ARCH",
          items: [
            "100 Products",
            "Variable Products",
            "One-Page Checkout",
            "Customer Dashboard",
          ],
        },
        {
          category: "MARKETING",
          items: [
            "Dynamic Discounts",
            "Photo Reviews",
            "Abandoned Cart Email",
            "Related Products",
            "Ajax Live Search",
          ],
        },
        {
          category: "PAYMENTS",
          items: [
            "Multi-Gateway (COD+Credit)",
            "Live Shipping Rates (Shiprocket)",
            "Auto GST Calc",
            "PDF Invoices",
          ],
        },
        {
          category: "SEO/TECH",
          items: ["Product Schema", "Auto-Alt Tags", "High-Perf Database mode"],
        },
        {
          category: "MGMT",
          items: [
            "Low Stock Alerts",
            "Advanced Sales Reports",
            "Order CSV Export",
          ],
        },
      ],
    },
    {
      name: "E-Comm Empire",
      tagline: "Scale",
      price: "₹1,99,999",
      suffix: "+ GST",
      isPopular: false,
      features: [
        {
          category: "ARCH",
          items: [
            "Unlimited Products",
            "Bundled/Digital",
            "Distraction-Free Checkout",
            "Social Login",
          ],
        },
        {
          category: "MARKETING",
          items: [
            "BOGO Logic",
            "Verified Badges",
            "SMS/WhatsApp Notifs",
            "In-Cart Upsells",
            "AI Search & Filter",
          ],
        },
        {
          category: "PAYMENTS",
          items: [
            "International (Stripe)",
            "Pincode Check",
            "Multi-State Tax",
            "GST Tax Invoices",
          ],
        },
        {
          category: "SEO/TECH",
          items: [
            "Google Merchant Feed",
            "Video Gallery",
            "Redis Caching for Store",
          ],
        },
        {
          category: "MGMT",
          items: ["Multi-Warehouse", "Cohort Analysis"],
        },
      ],
    },
  ],
  "AMC (Maintenance)": [
    {
      name: "Essential",
      tagline: "Insurance",
      price: "₹11,999",
      suffix: "/Year",
      isPopular: false,
      features: [
        {
          category: "CORE MAINTENANCE",
          items: [
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
      name: "Growth",
      tagline: "Protection",
      price: "₹35,999",
      suffix: "/Year",
      isPopular: true,
      features: [
        {
          category: "HEALTH",
          items: ["24/7 HTTP Monitor", "CPU/RAM Tracking", "Monthly Error Log"],
        },
        {
          category: "SECURITY",
          items: [
            "SSL Handshake Opt",
            "Daily Deep Scan",
            "Free Hack Cleanup",
            "Daily Cloud Backup",
          ],
        },
        {
          category: "MAINTENANCE",
          items: [
            "Managed Safe Updates",
            "Plugin Compatibility",
            "Child Theme Maint",
            "Monthly DB Cleanup",
          ],
        },
        {
          category: "PERFORMANCE",
          items: [
            "Monthly Core Web Vitals",
            "Broken Link Scan",
            "Bulk Image Compress",
          ],
        },
        {
          category: "SUPPORT",
          items: [
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
      price: "₹99,999",
      suffix: "/Year",
      isPopular: false,
      features: [
        {
          category: "HEALTH",
          items: [
            "Real-Time Alerts",
            "Traffic Spike Mgmt",
            "Deep Server Audits",
          ],
        },
        {
          category: "SECURITY",
          items: [
            "Advanced Cert Mgmt",
            "Real-time Firewall",
            "Insurance-Backed Guarantee",
            "Hourly Backups",
          ],
        },
        {
          category: "MAINTENANCE",
          items: [
            "Manual Verification",
            "Staging Tests",
            "Code Deprecation Fixes",
            "Query Opt",
          ],
        },
        {
          category: "PERFORMANCE",
          items: ["Bi-Weekly Tuning", "404 Mgmt", "CDN Purging"],
        },
        {
          category: "SUPPORT",
          items: [
            "4 Hr Priority",
            "Dedicated Manager",
            "Monthly Strategy Call",
          ],
        },
      ],
    },
  ],
};

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative flex flex-col rounded-xl border transition-all duration-300 ${
        plan.isPopular
          ? "bg-white shadow-xl border-jet-blue scale-100 md:scale-105 z-10"
          : "bg-white shadow-md border-jet-light hover:border-jet-blue/30"
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-jet-blue text-white text-[10px] font-bold text-center py-1.5 uppercase tracking-widest rounded-t-xl z-20">
          Most Popular Choice
        </div>
      )}

      <div
        className={`p-6 ${plan.isPopular ? "pt-10" : ""} flex flex-col h-full`}
      >
        <div className="mb-4">
          <h3
            className={`text-sm font-bold uppercase tracking-wider mb-1 ${
              plan.isPopular ? "text-jet-blue" : "text-jet-slate"
            }`}
          >
            {plan.name}
          </h3>
          <p className="text-xs text-jet-gray mb-4">{plan.tagline}</p>
          <div className="flex flex-col">
            <span className="text-xs text-jet-gray font-normal">
              starting at
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-jet-navy">
                {plan.price}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                {plan.suffix}
              </span>
            </div>
          </div>
        </div>

        <button
          className={`w-full py-3 rounded-lg font-bold text-sm mb-6 transition-all shadow-sm ${
            plan.isPopular
              ? "bg-jet-orange text-white hover:bg-[#E55A2B] hover:shadow-lg"
              : "bg-white border border-jet-blue text-jet-blue hover:bg-blue-50"
          }`}
        >
          {plan.isPopular ? "Get Started Now" : "Select Plan"}
        </button>

        <div className="flex-1 space-y-4">
          {/* Always show first category items */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-jet-gray uppercase tracking-wider border-b border-gray-100 pb-1">
              {plan.features[0].category}
            </p>
            {plan.features[0].items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-jet-slate"
              >
                <Check
                  size={14}
                  className="text-jet-green shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Collapsible Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden space-y-4"
              >
                {plan.features.slice(1).map((cat, i) => (
                  <div key={i} className="space-y-2 pt-2">
                    <p className="text-[10px] font-bold text-jet-gray uppercase tracking-wider border-b border-gray-100 pb-1">
                      {cat.category}
                    </p>
                    {cat.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-jet-slate"
                      >
                        <Check
                          size={14}
                          className="text-jet-green shrink-0 mt-0.5"
                          strokeWidth={3}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {plan.features.length > 1 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 flex items-center justify-center gap-1 text-xs font-bold text-jet-blue hover:text-jet-navy transition-colors py-2 border-t border-gray-100"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                View All Features <ChevronDown size={14} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<PricingCategory>("Website Design");

  return (
    <section className="py-24 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] relative">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0052CC_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 text-jet-navy">
            Transparent, <span className="text-jet-blue">Value-Driven</span>{" "}
            Pricing
          </h2>
          <p className="text-jet-slate max-w-2xl mx-auto">
            Enterprise-grade technology stacks at SMB-friendly prices. No hidden
            fees, just pure engineering excellence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-gray-100">
            {(Object.keys(PRICING_DATA) as PricingCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-jet-blue text-white shadow-lg"
                    : "text-jet-slate hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          <AnimatePresence mode="wait">
            {PRICING_DATA[activeTab].map((plan, i) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={plan.isPopular ? "md:-mt-4" : ""}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface IndustryCardProps {
  title: string;
  loc: string;
  exp: string;
  sol: string;
  res: string;
}

const IndustryCard = ({ title, loc, exp, sol, res }: IndustryCardProps) => (
  <div className="bg-white p-6 rounded-card border border-jet-light shadow-card hover:shadow-hover hover:border-jet-blue transition-all group">
    <h3 className="font-bold text-lg text-jet-navy mb-2 group-hover:text-jet-blue transition-colors font-heading">
      {title}
    </h3>
    <p className="text-xs text-jet-gray mb-4 flex items-center gap-1 font-medium">
      📍 {loc}
    </p>
    <div className="space-y-2 text-sm text-jet-slate border-t border-jet-light pt-4">
      <p>
        <strong>Exp:</strong> {exp}
      </p>
      <p>
        <strong>Solutions:</strong> {sol}
      </p>
      <p className="text-jet-green font-bold flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-jet-green"></span> {res}
      </p>
    </div>
  </div>
);

export const Industries = () => (
  <section className="py-24 bg-jet-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-heading font-bold text-center mb-16 text-jet-navy">
        Industries We Serve Across Hyderabad
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <IndustryCard
          title="IT & Software"
          loc="HITEC City, Madhapur"
          exp="80+ websites"
          sol="Corporate, SaaS"
          res="Leads up 340%"
        />
        <IndustryCard
          title="Pharma & Life Sci"
          loc="Genome Valley, IKP"
          exp="40+ websites"
          sol="Product catalogs, B2B"
          res="200+ global inquiries"
        />
        <IndustryCard
          title="Healthcare"
          loc="Banjara Hills"
          exp="35+ websites"
          sol="Hospital, booking"
          res="60% online booking"
        />
        <IndustryCard
          title="Startups & SaaS"
          loc="T-Hub, We Hub"
          exp="100+ startups"
          sol="Landing pages, MVP"
          res="25% conversion rate"
        />
        <IndustryCard
          title="Real Estate"
          loc="Gachibowli"
          exp="30+ websites"
          sol="Project showcase"
          res="150% more inquiries"
        />
        <IndustryCard
          title="Retail & E-Com"
          loc="Kukatpally, Ameerpet"
          exp="60+ stores"
          sol="Shopify, D2C"
          res="₹1.5 Cr revenue Year 1"
        />
        <IndustryCard
          title="Education"
          loc="Ameerpet, Dilsukhnagar"
          exp="25+ websites"
          sol="LMS, Admissions"
          res="200% admission hike"
        />
        <IndustryCard
          title="Manufacturing"
          loc="Jeedimetla, Patancheru"
          exp="20+ websites"
          sol="B2B portals"
          res="Export leads up 180%"
        />
      </div>
    </div>
  </section>
);
