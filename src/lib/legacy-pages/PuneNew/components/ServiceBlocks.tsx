import React, { useState } from 'react';
import {
  Layout, ArrowRight, Globe, ShoppingCart, Smartphone, Zap, Shield,
  Code, Terminal, Server, Cloud, Check
} from 'lucide-react';

const PRICING_PLANS = {
  website: [
    {
      name: "STARTER",
      subtitle: "Launchpad",
      price: "₹29,999",
      suffix: "+ GST",
      features: [
        { cat: "CORE", items: ["5 Pages", "WordPress/React Basics", "Responsive"] },
        { cat: "SEO", items: ["XML Sitemap", "Basic Meta", "Google Maps"] },
        { cat: "PERFORMANCE", items: ["Standard Caching", "Auto-Resize Images"] },
        { cat: "SECURITY", items: ["Standard HTTPS", "Basic Login Protection", "ReCaptcha v2"] },
        { cat: "CONVERSION", items: ["Click-to-Call", "Standard Forms"] },
        { cat: "HOSTING", items: ["99% Uptime"] }
      ]
    },
    {
      name: "BUSINESS",
      subtitle: "Growth",
      price: "₹59,999",
      suffix: "+ GST",
      popular: true,
      features: [
        { cat: "CORE", items: ["12 Pages", "Hybrid AI Architecture", "Mobile-First Indexing", "Legacy Browser Support"] },
        { cat: "SEO", items: ["Advanced Robots.txt", "Open Graph Tags", "Schema.org (JSON-LD)", "G-Business Profile"] },
        { cat: "PERFORMANCE", items: ["Lighthouse 90+", "WebP Compression", "Cloudflare CDN", "Database Query Opt"] },
        { cat: "SECURITY", items: ["Military-Grade SSL", "Brute Force Protection", "ReCaptcha v3", "Daily Cloud Backups"] },
        { cat: "CONVERSION", items: ["Sticky Bottom Bar", "WhatsApp Widget", "Multi-Step Forms", "GA4 Setup", "Insta Feed"] },
        { cat: "HOSTING", items: ["99.9% Uptime", "Unmetered Bandwidth", "5 Business Emails"] }
      ]
    },
    {
      name: "ENTERPRISE",
      subtitle: "Dominance",
      price: "₹1,19,999",
      suffix: "+ GST",
      features: [
        { cat: "CORE", items: ["20+ Dynamic Pages", "Next.js/Headless", "PWA Ready", "Retina Support"] },
        { cat: "SEO", items: ["Log File Analysis", "Twitter Cards", "Voice Search (AEO)", "Local Citations"] },
        { cat: "PERFORMANCE", items: ["Core Web Vitals \"Green\"", "Lazy Loading", "Global Edge Network", "Redis Object Caching"] },
        { cat: "SECURITY", items: ["Wildcard SSL", "DDoS Mitigation", "Enterprise Spam Firewall", "Real-Time Redundant Backups"] },
        { cat: "CONVERSION", items: ["Exit Intent Popups", "AI Chatbot Ready", "CRM Integration", "Heatmaps", "Auto-Social Posting"] },
        { cat: "HOSTING", items: ["99.99% Uptime", "High-Frequency Compute", "Unlimited G-Suite Emails"] }
      ]
    }
  ],
  ecommerce: [
    {
      name: "SHOP STARTER",
      subtitle: "Validation",
      price: "₹59,999",
      suffix: "+ GST",
      features: [
        { cat: "CORE FEATURES", items: ["20 Products", "Standard Checkout", "Guest Checkout", "Basic Coupons", "Star Ratings", "Basic Search", "Razorpay/UPI", "Flat Rate Shipping", "Simple Tax", "Email Receipt", "Meta Titles", "Alt Tags"] }
      ]
    },
    {
      name: "SHOP PRO",
      subtitle: "Bestseller",
      price: "₹99,999",
      suffix: "+ GST",
      popular: true,
      features: [
        { cat: "ARCH", items: ["100 Products", "Variable Products", "One-Page Checkout", "Customer Dashboard"] },
        { cat: "MARKETING", items: ["Dynamic Discounts", "Photo Reviews", "Abandoned Cart Email", "Related Products", "Ajax Live Search"] },
        { cat: "PAYMENTS", items: ["Multi-Gateway (COD+Credit)", "Live Shipping Rates (Shiprocket)", "Auto GST Calc", "PDF Invoices"] },
        { cat: "SEO/TECH", items: ["Product Schema", "Auto-Alt Tags", "High-Perf Database mode"] },
        { cat: "MGMT", items: ["Low Stock Alerts", "Advanced Sales Reports", "Order CSV Export"] }
      ]
    },
    {
      name: "E-COMM EMPIRE",
      subtitle: "Scale",
      price: "₹1,99,999",
      suffix: "+ GST",
      features: [
        { cat: "ARCH", items: ["Unlimited Products", "Bundled/Digital", "Distraction-Free Checkout", "Social Login"] },
        { cat: "MARKETING", items: ["BOGO Logic", "Verified Badges", "SMS/WhatsApp Notifs", "In-Cart Upsells", "AI Search & Filter"] },
        { cat: "PAYMENTS", items: ["International (Stripe)", "Pincode Check", "Multi-State Tax", "GST Tax Invoices"] },
        { cat: "SEO/TECH", items: ["Google Merchant Feed", "Video Gallery", "Redis Caching for Store"] },
        { cat: "MGMT", items: ["Multi-Warehouse", "Cohort Analysis", "ERP API Ready"] }
      ]
    }
  ],
  amc: [
    {
      name: "ESSENTIAL",
      subtitle: "Insurance",
      price: "₹11,999",
      suffix: "/ Year",
      features: [
        { cat: "CORE MAINTENANCE", items: ["24/7 Ping Monitor", "SSL Renewal", "Weekly Scan", "Paid Hack Recovery", "Weekly DB Backup", "Auto-Updates"] }
      ]
    },
    {
      name: "GROWTH",
      subtitle: "Protection",
      price: "₹35,999",
      suffix: "/ Year",
      popular: true,
      features: [
        { cat: "HEALTH", items: ["24/7 HTTP Monitor", "CPU/RAM Tracking", "Monthly Error Log"] },
        { cat: "SECURITY", items: ["SSL Handshake Opt", "Daily Deep Scan", "Free Hack Cleanup", "Daily Cloud Backup"] },
        { cat: "MAINTENANCE", items: ["Managed Safe Updates", "Plugin Compatibility", "Child Theme Maint", "Monthly DB Cleanup"] },
        { cat: "PERFORMANCE", items: ["Monthly Core Web Vitals", "Broken Link Scan", "Bulk Image Compress"] },
        { cat: "SUPPORT", items: ["24 Hr Response", "WhatsApp Support", "Quarterly Strategy Call"] }
      ]
    },
    {
      name: "VIP",
      subtitle: "Partner",
      price: "₹99,999",
      suffix: "/ Year",
      features: [
        { cat: "HEALTH", items: ["Real-Time Alerts", "Traffic Spike Mgmt", "Deep Server Audits"] },
        { cat: "SECURITY", items: ["Advanced Cert Mgmt", "Real-time Firewall", "Insurance-Backed Guarantee", "Hourly Backups"] },
        { cat: "MAINTENANCE", items: ["Manual Verification", "Staging Tests", "Code Deprecation Fixes", "Query Opt"] },
        { cat: "PERFORMANCE", items: ["Bi-Weekly Tuning", "404 Mgmt", "CDN Purging"] },
        { cat: "SUPPORT", items: ["4 Hr Priority", "Dedicated Manager", "Monthly Strategy Call"] }
      ]
    }
  ]
};

export const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-jet-blue/20 text-jet-blue font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4 shadow-sm">Our Expertise</span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-jet-navy leading-tight">World-Class Digital Services</h2>
          <p className="text-jet-slate mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg">We blend creativity with engineering to build digital products that scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto md:auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
          <div className="lg:col-span-2 lg:row-span-2 bg-white p-6 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-jet-blue to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Layout className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-heading text-jet-navy">Business Websites</h3>
              <p className="text-jet-slate text-base md:text-lg leading-relaxed mb-4 md:mb-6">Perfect for Pune's small businesses. We build SEO-optimized, mobile-responsive corporate websites that establish instant credibility.</p>
              <ul className="space-y-2 mb-6 md:mb-8 text-jet-gray text-sm md:text-base">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-jet-green rounded-full"></div>5 Page Professional Site</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-jet-green rounded-full"></div>WhatsApp Integration</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-jet-green rounded-full"></div>Google Business Profile</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 border-t border-slate-100 pt-6 gap-4 md:gap-0">
              <div>
                <span className="text-xs text-jet-gray uppercase font-bold tracking-wider">Starting At</span>
                <div className="font-bold text-jet-blue text-2xl">₹15,000</div>
              </div>
              <a href="#contact" className="w-full md:w-auto bg-jet-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-jet-blue transition-colors flex items-center justify-center gap-2 group-hover:gap-3 text-sm md:text-base">
                Get Started <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:border-jet-blue/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-jet-blue group-hover:bg-jet-blue group-hover:text-white transition-colors duration-300 shrink-0">
                <Globe className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-heading text-jet-navy">WordPress Development</h3>
                <p className="text-jet-slate text-sm">Custom themes, Elementor Pro, and easy content management for non-tech founders.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-jet-blue to-[#003D99] text-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-jet-blue/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-[2px]"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-jet-orange/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-jet-orange mb-4 md:mb-6 border border-white/20">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-heading leading-tight">Shopify E-Commerce</h3>
              <p className="text-blue-100 text-sm mb-4 md:mb-6 leading-relaxed">Launch your online store in 7 days. Payment gateways, shipping, and inventory tailored for India.</p>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="text-xs text-blue-200 uppercase font-bold mb-1">Scale to Millions</div>
                <div className="font-bold text-2xl md:text-3xl mb-4">₹49,999</div>
                <button className="w-full bg-white text-jet-blue font-bold py-3 rounded-xl hover:bg-jet-orange hover:text-white transition-colors shadow-lg text-sm md:text-base">View Plan</button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
            <Smartphone className="w-8 h-8 text-jet-green mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2 font-heading text-jet-navy">Mobile First</h3>
            <p className="text-jet-gray text-xs leading-relaxed">100% responsive designs optimized for the 78% of users on mobile.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
            <Zap className="w-8 h-8 text-jet-orange mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2 font-heading text-jet-navy">Landing Pages</h3>
            <p className="text-jet-gray text-xs leading-relaxed">High-conversion pages for Google Ads designed to maximize ROAS.</p>
          </div>

          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex items-center relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-jet-orange/5 rounded-bl-full"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 font-heading text-jet-navy">Website Redesign</h3>
              <p className="text-jet-slate text-sm max-w-md">Modernize your outdated site. We migrate content, improve speed by 300%, and preserve SEO rankings.</p>
            </div>
          </div>

          <div className="lg:col-span-1 bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Layout className="w-5 h-5"/>
            </div>
            <h3 className="text-lg font-bold mb-2 font-heading text-jet-navy">UI/UX Design</h3>
            <p className="text-jet-gray text-xs">User-centric interfaces that convert.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
            <Shield className="w-8 h-8 text-jet-blue mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2 font-heading text-jet-navy">AMC Support</h3>
            <p className="text-jet-gray text-xs">Security, backups, & monthly updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Process = () => {
  const steps = [
    { step: "1", title: "Discovery", desc: "Requirements & Strategy" },
    { step: "2", title: "Strategy", desc: "Sitemap & Content" },
    { step: "3", title: "Design", desc: "UI/UX Mockups" },
    { step: "4", title: "Develop", desc: "Coding & CMS" },
    { step: "5", title: "Testing", desc: "Mobile & Speed" },
    { step: "6", title: "Launch", desc: "Go Live!" }
  ];

  return (
    <section id="process" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy">Our 7-Day Website Delivery Process</h2>
          <p className="text-jet-gray mt-2 text-sm md:text-base">From first call to live website in one week.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-jet-light -translate-y-1/2 z-0"></div>
          <div className="md:hidden absolute top-0 left-[19px] w-0.5 h-full bg-jet-light z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
            {steps.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-jet-light shadow-sm text-left md:text-center flex md:block items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-jet-blue text-white flex items-center justify-center font-bold mx-0 md:mx-auto mb-0 md:mb-3 shadow-md shrink-0 relative z-10">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-jet-navy font-heading">{item.title}</h3>
                  <p className="text-xs text-jet-gray mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Technologies = () => {
  const technologies = [
    { name: "WordPress", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Shopify", icon: ShoppingCart, color: "text-green-500", bg: "bg-green-50" },
    { name: "React", icon: Code, color: "text-cyan-500", bg: "bg-cyan-50" },
    { name: "Next.js", icon: Terminal, color: "text-slate-800", bg: "bg-slate-100" },
    { name: "Node.js", icon: Server, color: "text-green-600", bg: "bg-green-50" },
    { name: "WooCommerce", icon: ShoppingCart, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "AWS", icon: Cloud, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Google Cloud", icon: Cloud, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Razorpay", icon: Check, color: "text-blue-700", bg: "bg-blue-50" },
    { name: "Shiprocket", icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Tailwind", icon: Code, color: "text-cyan-400", bg: "bg-cyan-50" },
    { name: "Figma", icon: Layout, color: "text-pink-500", bg: "bg-pink-50" }
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-jet-blue font-bold tracking-widest text-xs uppercase font-heading">Powered By Best-in-Class Tech</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy mt-3">Platforms & Technologies We Use</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="group flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-jet-blue/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className={`w-10 h-10 md:w-12 md:h-12 ${tech.bg} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <tech.icon className={`w-5 h-5 md:w-6 md:h-6 ${tech.color}`} />
              </div>
              <span className="font-bold text-jet-navy group-hover:text-jet-blue transition-colors text-sm md:text-base">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  const [pricingTab, setPricingTab] = useState<'website' | 'ecommerce' | 'amc'>('website');

  return (
    <section id="pricing" className="py-12 md:py-20 bg-jet-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4 text-jet-navy">Transparent, <span className="text-jet-blue">Value-Driven Pricing</span></h2>
          <p className="text-jet-gray max-w-2xl mx-auto text-sm md:text-base">Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence.</p>
        </div>

        <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0">
          <div className="bg-white p-1 rounded-full border border-jet-light shadow-sm inline-flex shrink-0">
            <button
              onClick={() => setPricingTab('website')}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${pricingTab === 'website' ? 'bg-jet-blue text-white shadow-md' : 'text-jet-slate hover:text-jet-blue'}`}
            >
              Website Design
            </button>
            <button
              onClick={() => setPricingTab('ecommerce')}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${pricingTab === 'ecommerce' ? 'bg-jet-blue text-white shadow-md' : 'text-jet-slate hover:text-jet-blue'}`}
            >
              E-Commerce
            </button>
            <button
              onClick={() => setPricingTab('amc')}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${pricingTab === 'amc' ? 'bg-jet-blue text-white shadow-md' : 'text-jet-slate hover:text-jet-blue'}`}
            >
              AMC (Maintenance)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-7xl mx-auto">
          {PRICING_PLANS[pricingTab].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-0 shadow-lg border relative transition-all duration-300 hover:-translate-y-1 ${plan.popular ? 'border-jet-blue ring-1 ring-jet-blue/20 z-10 scale-100 md:scale-105' : 'border-jet-light'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-jet-blue text-white text-[10px] md:text-xs font-bold text-center py-1.5 rounded-t-xl uppercase tracking-wider">
                  Most Popular Choice
                </div>
              )}

              <div className={`p-6 md:p-8 ${plan.popular ? 'pt-8 md:pt-10' : ''}`}>
                <div className="mb-4 md:mb-6">
                  <h3 className="text-jet-blue font-bold text-xs md:text-sm uppercase tracking-wide mb-1">{plan.name}</h3>
                  <div className="text-jet-gray text-[10px] md:text-xs font-medium">{plan.subtitle}</div>
                </div>

                <div className="flex items-baseline gap-1 mb-6 md:mb-8">
                  <span className="text-3xl md:text-4xl font-bold text-jet-navy font-heading">{plan.price}</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-medium">{plan.suffix}</span>
                </div>

                {plan.popular ? (
                  <a href="#contact" className="w-full block text-center bg-jet-orange hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg mb-6 md:mb-8 text-sm md:text-base">
                    Get Started Now
                  </a>
                ) : (
                  <a href="#contact" className="w-full block text-center bg-white border border-jet-blue text-jet-blue hover:bg-blue-50 py-3 rounded-lg font-bold transition-all mb-6 md:mb-8 text-sm md:text-base">
                    Select Plan
                  </a>
                )}

                <div className="space-y-4 md:space-y-6">
                  {plan.features.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">{section.cat}</h4>
                      <ul className="space-y-2 md:space-y-3">
                        {section.items.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-xs md:text-sm text-jet-slate">
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-jet-blue shrink-0 mt-0.5" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
