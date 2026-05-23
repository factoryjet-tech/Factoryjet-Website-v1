'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PricingTier } from '../data.types';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick, trackContactClick, trackButtonClick } from '@/utils/gtm';

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-11127037244/N5PhCPWusNQbELy65Lkp",
    });
  }
};

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"website" | "ecommerce" | "amc">(
    "website"
  );
  const { openModal } = useContactModal();

  const webTiers: PricingTier[] = [
    {
      name: "STARTER",
      price: "₹29,999",
      description: "For small businesses establishing a digital presence.",
      buttonText: "Start Launchpad",
      features: [
        {
          category: "CORE DEVELOPMENT",
          items: [
            "5 Pages Custom Design",
            "WordPress/React Basics",
            "Mobile Responsive",
          ],
        },
        {
          category: "SEO FOUNDATION",
          items: [
            "XML Sitemap Generation",
            "Basic Meta Tags",
            "Google Maps Integration",
          ],
        },
        {
          category: "PERFORMANCE",
          items: [
            "Standard Caching",
            "Auto-Resize Images",
            "99% Uptime Hosting",
          ],
        },
        {
          category: "SECURITY & CONVERSION",
          items: [
            "Standard HTTPS",
            "Basic Login Protection",
            "Click-to-Call Buttons",
          ],
        },
      ],
    },
    {
      name: "BUSINESS",
      price: "₹59,999",
      description: "Growth-focused stack for serious lead generation.",
      isPopular: true,
      highlight: "Most Popular",
      buttonText: "Start Growth Project",
      features: [
        {
          category: "CORE DEVELOPMENT",
          items: [
            "12 Custom Pages",
            "Hybrid AI Architecture",
            "Mobile-First Indexing",
            "Legacy Browser Support",
          ],
        },
        {
          category: "ADVANCED SEO",
          items: [
            "Advanced Robots.txt",
            "Open Graph (Social) Tags",
            "Schema.org (JSON-LD)",
            "G-Business Profile Setup",
          ],
        },
        {
          category: "PERFORMANCE 90+",
          items: [
            "Lighthouse Score 90+",
            "WebP Compression",
            "Cloudflare CDN Setup",
            "Database Query Opt",
          ],
        },
        {
          category: "SECURITY SUITE",
          items: [
            "Military-Grade SSL",
            "Brute Force Protection",
            "ReCaptcha v3",
            "Daily Cloud Backups",
          ],
        },
        {
          category: "CONVERSION TOOLS",
          items: [
            "Sticky Bottom Bar",
            "WhatsApp Widget",
            "Multi-Step Forms",
            "GA4 Analytics Setup",
          ],
        },
      ],
    },
    {
      name: "ENTERPRISE",
      price: "₹1,19,999",
      description: "Dominance stack for market leaders.",
      buttonText: "Contact Sales",
      features: [
        {
          category: "CORE DEVELOPMENT",
          items: [
            "20+ Dynamic Pages",
            "Next.js / Headless Arch",
            "PWA Ready",
            "Retina Support",
          ],
        },
        {
          category: "SEO DOMINANCE",
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
            "Core Web Vitals 'Green'",
            "Lazy Loading",
            "Global Edge Network",
            "Redis Object Caching",
          ],
        },
        {
          category: "ENTERPRISE SECURITY",
          items: [
            "Wildcard SSL",
            "DDoS Mitigation",
            "Spam Firewall",
            "Real-Time Redundancy",
          ],
        },
        {
          category: "GROWTH TOOLS",
          items: [
            "Exit Intent Popups",
            "AI Chatbot Ready",
            "CRM Integration",
            "Heatmaps",
          ],
        },
      ],
    },
  ];

  const ecomTiers: PricingTier[] = [
    {
      name: "SHOP STARTER",
      price: "₹59,999",
      description: "Launch your retail journey.",
      buttonText: "Launch Store",
      features: [
        {
          category: "STORE ARCHITECTURE",
          items: [
            "20 Products Setup",
            "Standard Checkout",
            "Guest Checkout",
            "Basic Coupons",
          ],
        },
        {
          category: "ESSENTIAL FEATURES",
          items: [
            "Star Ratings",
            "Basic Search",
            "Razorpay/UPI Integration",
            "Flat Rate Shipping",
          ],
        },
        {
          category: "TECH SPECS",
          items: [
            "Simple Tax Setup",
            "Email Receipts",
            "Meta Titles",
            "Alt Tags",
          ],
        },
      ],
    },
    {
      name: "SHOP PRO",
      price: "₹99,999",
      description: "The Bestseller stack for volume sellers.",
      isPopular: true,
      highlight: "Retail Standard",
      buttonText: "Build Empire",
      features: [
        {
          category: "STORE ARCHITECTURE",
          items: [
            "100 Products Setup",
            "Variable Products",
            "One-Page Checkout",
            "Customer Dashboard",
          ],
        },
        {
          category: "MARKETING ENGINE",
          items: [
            "Dynamic Discounts",
            "Photo Reviews",
            "Abandoned Cart Email",
            "Related Products",
          ],
        },
        {
          category: "PAYMENTS & LOGISTICS",
          items: [
            "Multi-Gateway (COD+CC)",
            "Live Shipping (Shiprocket)",
            "Auto GST Calc",
            "PDF Invoices",
          ],
        },
        {
          category: "SEO & TECH",
          items: [
            "Product Schema",
            "Auto-Alt Tags",
            "High-Perf DB Mode",
            "Ajax Live Search",
          ],
        },
        {
          category: "MANAGEMENT",
          items: [
            "Low Stock Alerts",
            "Advanced Sales Reports",
            "Order CSV Export",
          ],
        },
      ],
    },
    {
      name: "E-COMM EMPIRE",
      price: "₹1,99,999",
      description: "Unrestricted scale for national brands.",
      buttonText: "Contact Experts",
      features: [
        {
          category: "STORE ARCHITECTURE",
          items: [
            "Large catalog — products scoped per project",
            "Bundled/Digital Products",
            "Distraction-Free Checkout",
            "Social Login",
          ],
        },
        {
          category: "MARKETING ENGINE",
          items: [
            "BOGO Logic",
            "Verified Badges",
            "SMS/WhatsApp Notifs",
            "In-Cart Upsells",
          ],
        },
        {
          category: "GLOBAL PAYMENTS",
          items: [
            "International (Stripe)",
            "Pincode Check",
            "Multi-State Tax",
            "GST Tax Invoices",
          ],
        },
        {
          category: "ADVANCED TECH",
          items: [
            "Google Merchant Feed",
            "Video Gallery",
            "Redis Caching",
            "AI Search & Filter",
          ],
        },
        {
          category: "MANAGEMENT",
          items: ["Multi-Warehouse", "Cohort Analysis", ""],
        },
      ],
    },
  ];

  const amcTiers: PricingTier[] = [
    {
      name: "ESSENTIAL",
      price: "₹11,999",
      description: "Basic insurance for your site.",
      buttonText: "Secure Now",
      features: [
        {
          category: "MONITORING",
          items: ["24/7 Ping Monitor", "SSL Renewal", "Weekly Malware Scan"],
        },
        {
          category: "MAINTENANCE",
          items: ["Paid Hack Recovery", "Weekly DB Backup", "Auto-Updates"],
        },
      ],
    },
    {
      name: "GROWTH",
      price: "₹35,999",
      description: "Proactive protection for businesses.",
      isPopular: true,
      highlight: "Peace of Mind",
      buttonText: "Get Protection",
      features: [
        {
          category: "HEALTH MONITOR",
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
      name: "VIP PARTNER",
      price: "₹99,999",
      description: "Your own dedicated DevOps team.",
      buttonText: "Hire Team",
      features: [
        {
          category: "REAL-TIME HEALTH",
          items: [
            "Real-Time Alerts",
            "Traffic Spike Mgmt",
            "Deep Server Audits",
          ],
        },
        {
          category: "ELITE SECURITY",
          items: [
            "Advanced Cert Mgmt",
            "Real-time Firewall",
            "Insurance-Backed",
            "Hourly Backups",
          ],
        },
        {
          category: "DEVOPS",
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
          category: "PRIORITY SUPPORT",
          items: [
            "4 Hr Priority",
            "Dedicated Manager",
            "Monthly Strategy Call",
          ],
        },
      ],
    },
  ];

  const currentTiers =
    activeTab === "website"
      ? webTiers
      : activeTab === "ecommerce"
      ? ecomTiers
      : amcTiers;

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Subtle Mesh Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-jet-blue font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">
            Transparent, Value-Driven Pricing
          </h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-jet-navy mb-4 md:mb-6">
            Enterprise stacks at <br className="hidden md:block" /> SMB-friendly
            prices.
          </h3>
          <p className="text-slate-600 text-sm md:text-lg">
            Choose the perfect stack for your stage of growth. No hidden fees.
          </p>
        </div>

        {/* Intelligent Tab Switcher */}
        <div className="flex justify-center mb-10 md:mb-16 overflow-x-auto pb-2">
          <div className="inline-flex bg-white p-1 md:p-1.5 rounded-full border border-slate-200 shadow-sm relative">
            {(["website", "ecommerce", "amc"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative px-3 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-colors z-10 whitespace-nowrap
                  ${
                    activeTab === tab
                      ? "text-white"
                      : "text-slate-500 hover:text-jet-navy"
                  }
                `}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-jet-blue rounded-full -z-10 shadow-lg shadow-blue-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab === "website"
                  ? "Website"
                  : tab === "ecommerce"
                  ? "E-Commerce"
                  : "AMC"}
                <span className="hidden md:inline">
                  {tab === "website"
                    ? " Design"
                    : tab === "amc"
                    ? " (Maintenance)"
                    : ""}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start"
          >
            {currentTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`
                  relative bg-white rounded-2xl flex flex-col h-full
                  ${
                    tier.isPopular
                      ? "border-2 border-jet-blue shadow-2xl shadow-blue-900/10 z-10 lg:scale-105 lg:-mt-4 lg:mb-4"
                      : "border border-slate-200 shadow-xl shadow-slate-200/50"
                  }
                `}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-700 text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide shadow-md shadow-orange-700/20 whitespace-nowrap">
                    {tier.highlight}
                  </div>
                )}

                {/* Card Header */}
                <div className="p-5 md:p-8 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
                  <h4 className="text-jet-navy font-bold tracking-wide uppercase text-xs md:text-sm mb-3 md:mb-4">
                    {tier.name}
                  </h4>
                  <div className="mb-3 md:mb-4">
                    <span className="text-[10px] md:text-xs font-semibold text-jet-orange uppercase tracking-wider">
                      Starting At
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-jet-navy">
                        {tier.price}
                      </span>
                      <span className="text-slate-500 text-xs md:text-sm font-medium">
                        {tier.price.includes("/Year") ? "" : "+ GST"}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Feature Stacking (Dense List) */}
                <div className="p-5 md:p-8 flex-grow">
                  <div className="space-y-5 md:space-y-8">
                    {tier.features.map((group, gIdx) => (
                      <div key={gIdx}>
                        <h5 className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 md:mb-3 border-b border-slate-100 pb-1">
                          {group.category}
                        </h5>
                        <ul className="space-y-2 md:space-y-2.5">
                          {group.items.map((item, iIdx) => (
                            <li
                              key={iIdx}
                              className="flex items-start gap-2 md:gap-3"
                            >
                              <div className="mt-0.5 md:mt-1 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <Check className="w-2 h-2 md:w-2.5 md:h-2.5 text-jetGreen stroke-[3]" />
                              </div>
                              <span className="text-xs md:text-sm text-slate-600 font-medium leading-tight">
                                {/* Use basic formatting for tech terms if possible, otherwise simple text */}
                                {item.split(" ").map((word, wIdx) =>
                                  [
                                    "Redis",
                                    "Lighthouse",
                                    "Schema.org",
                                    "Cloudflare",
                                    "Next.js",
                                    "React",
                                    "XML",
                                    "SSL",
                                    "DDoS",
                                  ].some((tech) => word.includes(tech)) ? (
                                    <span
                                      key={wIdx}
                                      className="font-mono text-[10px] md:text-xs text-slate-800 bg-slate-100 px-1 rounded mx-0.5"
                                    >
                                      {word}
                                    </span>
                                  ) : (
                                    word + " "
                                  )
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer / CTA */}
                <div className="p-5 md:p-8 pt-0 mt-auto">
                  <button
                    onClick={() => {
                      trackCTAClick(`pricing_${tier.name.toLowerCase().replace(/\s+/g, '_')}`, 'home_pricing', tier.isPopular ? 'primary' : 'secondary');
                      trackButtonClick(tier.buttonText, `pricing_card_${activeTab}`);
                      openModal();
                    }}
                    className={`
                      w-full py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2 group
                      ${
                        tier.isPopular
                          ? "bg-orange-700 hover:bg-orange-800 text-white shadow-lg shadow-orange-700/30 hover:shadow-xl hover:-translate-y-1"
                          : "bg-white border-2 border-slate-200 text-jet-navy hover:border-jet-blue hover:text-jet-blue"
                      }
                    `}
                  >
                    {tier.buttonText}
                    {tier.isPopular && (
                      <ArrowRight
                        size={14}
                        className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Box */}
        <div className="mt-12 md:mt-20 max-w-2xl mx-auto text-center bg-white border border-slate-200 p-5 md:p-8 rounded-2xl shadow-sm">
          <h4 className="font-display font-bold text-lg md:text-xl text-jet-navy mb-2">
            Not sure which plan is right for you?
          </h4>
          <p className="text-slate-500 mb-4 md:mb-6 text-sm md:text-base">
            Our solution architects will analyze your business and recommend the
            perfect stack.
          </p>
          <a
            href="https://wa.me/919699977699"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackContactClick('whatsapp', '+919699977699', 'home_pricing_cta');
              trackWhatsAppConversion();
            }}
            className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg shadow-green-500/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
