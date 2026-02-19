import React, { useState } from 'react';
import { Monitor, Check, ChevronDown, ChevronUp } from 'lucide-react';

export const Services = () => {
    const services = [
        { title: "Professional Business Websites", price: "Starting ₹29,999", time: "7-10 Days", desc: "Establish your Bangalore business's digital presence with a professional website designed to generate leads and build credibility.", features: ["5-10 page custom website", "Mobile-first responsive design", "Contact forms with email integration", "WhatsApp chat integration", "Basic SEO setup", "Google Analytics integration", "SSL certificate included", "1-year hosting included", "30-day post-launch support"], bestFor: "Startups, professional services, local businesses" },
        { title: "E-Commerce Store Development", price: "Starting ₹99,999", time: "3-4 Weeks", desc: "Launch your online store with Bangalore's leading e-commerce development company. High-converting stores on WooCommerce or Shopify.", features: ["Up to 500 products setup", "Razorpay/PayU integration", "Shiprocket integration", "Inventory management", "Order tracking", "Customer accounts", "Mobile commerce optimized", "Product search & filtering", "Discount system", "Analytics dashboard"], bestFor: "D2C brands, retail, wholesale/B2B" },
        { title: "Shopify Store Development", price: "Starting ₹59,999", time: "10-14 Days", desc: "Expert Shopify store development for Bangalore e-commerce brands. Conversion-optimized stores with custom themes.", features: ["Custom Shopify theme", "Up to 200 products", "Payment gateway setup", "Shipping automation", "Essential apps", "Mobile checkout", "SEO optimization", "Speed optimization", "Training included"], bestFor: "Fashion, beauty, lifestyle brands" },
        { title: "WordPress Website Development", price: "Starting ₹39,999", time: "10-14 Days", desc: "Custom WordPress website development with flexibility and scalability. Feature-rich websites with custom themes.", features: ["Custom WordPress theme", "10-20 pages", "Blog/news section", "Contact forms", "SEO plugins", "Security hardening", "Speed optimization", "Admin training", "Elementor/Gutenberg"], bestFor: "Content businesses, blogs, news sites" },
        { title: "High-Converting Landing Pages", price: "Starting ₹19,999", time: "3-5 Days", desc: "Conversion-focused landing pages for Bangalore marketing campaigns. Optimized for maximum conversion rates.", features: ["Single-page design", "Compelling copy", "Lead capture forms", "WhatsApp integration", "A/B testing ready", "Mobile-optimized", "Fast loading", "Analytics integration", "CRM integration"], bestFor: "Marketing campaigns, product launches" },
        { title: "Website Redesign & Migration", price: "Starting ₹49,999", time: "2-3 Weeks", desc: "Transform outdated websites into modern digital assets. Visual overhaul, mobile optimization, and platform migration.", features: ["Visual redesign", "Mobile responsiveness", "SEO audit", "Content migration", "Platform migration", "Speed optimization", "Modern UI/UX", "Conversion opt", "301 redirects"], bestFor: "Businesses with outdated sites" },
        { title: "Custom Web Applications", price: "Starting ₹1,99,999", time: "4-8 Weeks", desc: "Custom web apps for unique requirements. Portals, dashboards, and custom solutions using React/Next.js.", features: ["Custom functionality", "User auth", "Database integration", "API development", "Admin dashboards", "Third-party integrations", "Scalable arch", "Security", "Documentation"], bestFor: "SaaS, portals, booking systems" },
        { title: "UI/UX Design Services", price: "Starting ₹39,999", time: "1-2 Weeks", desc: "Professional UI/UX design for digital products. Beautiful, intuitive, and conversion-focused interfaces.", features: ["User research", "Wireframing", "High-fidelity mockups", "Prototypes", "Design systems", "Mobile/Desktop", "Usability testing", "Developer handoff", "Figma files"], bestFor: "Startups, apps, digital products" },
        { title: "Marketplace Development", price: "Starting ₹2,99,999", time: "6-10 Weeks", desc: "Multi-vendor marketplace development. Scalable platforms with vendor management and commission systems.", features: ["Multi-vendor arch", "Vendor dashboard", "Commission mgmt", "Payment splits", "Product approval", "Reviews/Ratings", "Advanced search", "Mobile responsive", "Admin analytics"], bestFor: "Marketplace entrepreneurs, aggregators" }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Website Design & Development Services in Bangalore</h2>
                    <p className="text-xl text-slate-700">From startup landing pages to enterprise e-commerce — Complete Solutions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow flex flex-col h-full">
                            <div className="p-8 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <Monitor className="w-8 h-8 text-[#0052CC]" />
                                    </div>
                                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">{s.time}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{s.title}</h3>
                                <p className="text-[#FF6B35] font-bold text-lg mb-4">{s.price}</p>
                                <p className="text-slate-700 text-base mb-6 leading-relaxed">{s.desc}</p>

                                <div className="mb-4">
                                    <h4 className="font-bold text-sm text-slate-900 mb-2">Key Features:</h4>
                                    <ul className="text-sm text-slate-700 space-y-1">
                                        {s.features.slice(0, 5).map((f, fi) => <li key={fi}>• {f}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 border-t border-slate-100">
                                <a href="#contact-form" className="block w-full text-center text-[#0052CC] font-bold py-2 border border-[#0052CC] rounded hover:bg-[#0052CC] hover:text-white transition-colors">
                                    Get This Package
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Process = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Our Website Development Process in Bangalore</h2>
                 <p className="text-xl text-slate-700">Transparent, Efficient, Results-Driven — From Concept to Launch in 7-14 Days</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                 {[
                    { title: "Discovery", day: "Day 1", desc: "Free 30-min consultation to understand your business." },
                    { title: "Strategy", day: "Day 2-3", desc: "Wireframes, sitemap, and content strategy planning." },
                    { title: "Design", day: "Day 3-5", desc: "Visual design creation with revision rounds." },
                    { title: "Development", day: "Day 5-10", desc: "Clean code, fast performance, and SEO optimization." },
                    { title: "Testing", day: "Day 10-12", desc: "Comprehensive testing across devices and scenarios." },
                    { title: "Launch", day: "Day 12-14", desc: "Deployment with SSL and 30-day support included." }
                 ].map((step, i) => (
                    <div key={i} className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                        <div className="absolute -top-3 -right-3 bg-[#0052CC] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{i+1}</div>
                        <div className="text-xs font-bold text-[#FF6B35] mb-2">{step.day}</div>
                        <h3 className="font-bold text-[#0F172A] mb-2">{step.title}</h3>
                        <p className="text-xs text-slate-700 font-medium">{step.desc}</p>
                    </div>
                 ))}
            </div>
        </div>
    </section>
);

export const Technologies = () => (
    <section className="py-16 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
                <p className="text-slate-400">Industry-Leading Platforms & Modern Tech Stack for Bangalore Businesses</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center text-sm text-slate-300">
                <div className="col-span-full mb-4 font-bold text-white text-lg">CMS & E-Commerce</div>
                <span>WordPress</span><span>Shopify</span><span>WooCommerce</span><span>Webflow</span><span>Framer</span><span>Magento</span>
                <div className="col-span-full my-4 font-bold text-white text-lg border-t border-slate-700 pt-8">Frontend & Backend</div>
                <span>React</span><span>Next.js</span><span>Vue.js</span><span>Tailwind CSS</span><span>Node.js</span><span>Python</span>
                <div className="col-span-full my-4 font-bold text-white text-lg border-t border-slate-700 pt-8">Infrastructure & Tools</div>
                <span>AWS</span><span>Google Cloud</span><span>Vercel</span><span>Figma</span><span>Adobe XD</span><span>Razorpay</span>
             </div>
        </div>
    </section>
);

interface PlanSectionProps {
    title: string;
    features: string[];
    defaultOpen?: boolean;
}

const PlanSection: React.FC<PlanSectionProps> = ({ title, features, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div
            className="border-t border-slate-100 last:border-b group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={toggle}
                className="w-full flex justify-between items-center py-4 px-1 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#0052CC] transition-colors"
            >
                {title}
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <ul className="pb-4 space-y-2 px-1">
                    {features.map((f, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="leading-tight">{f}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const Pricing = () => {
    const [activeTab, setActiveTab] = useState<'design' | 'ecommerce' | 'amc'>('design');

    const websitePlans = [
        {
            name: "STARTER", subtitle: "Launchpad", price: "₹29,999", gst: "+ GST",
            desc: "For small businesses",
            sections: [
                { title: "Core", features: ["5 Pages", "WordPress/React Basics", "Responsive"] },
                { title: "SEO", features: ["XML Sitemap", "Basic Meta", "Google Maps"] },
                { title: "Performance", features: ["Standard Caching", "Auto-Resize Images"] },
                { title: "Security", features: ["Standard HTTPS", "Basic Login Protection", "ReCaptcha v2"] },
                { title: "Conversion", features: ["Click-to-Call", "Standard Forms"] },
                { title: "Hosting", features: ["99% Uptime"] }
            ]
        },
        {
            name: "BUSINESS", subtitle: "Growth", price: "₹59,999", gst: "+ GST",
            desc: "Most Popular Choice", popular: true,
            sections: [
                { title: "Core", features: ["12 Pages", "Hybrid AI Architecture", "Mobile-First Indexing", "Legacy Browser Support"] },
                { title: "SEO", features: ["Advanced Robots.txt", "Open Graph Tags", "Schema.org (JSON-LD)", "G-Business Profile"] },
                { title: "Performance", features: ["Lighthouse 90+", "WebP Compression", "Cloudflare CDN", "Database Query Opt"] },
                { title: "Security", features: ["Military-Grade SSL", "Brute Force Protection", "ReCaptcha v3", "Daily Cloud Backups"] },
                { title: "Conversion", features: ["Sticky Bottom Bar", "WhatsApp Widget", "Multi-Step Forms", "GA4 Setup", "Insta Feed"] },
                { title: "Hosting", features: ["99.9% Uptime", "Unmetered Bandwidth", "5 Business Emails"] }
            ]
        },
        {
            name: "ENTERPRISE", subtitle: "Dominance", price: "₹1,19,999", gst: "+ GST",
            desc: "For scaling companies",
            sections: [
                { title: "Core", features: ["20+ Dynamic Pages", "Next.js/Headless", "PWA Ready", "Retina Support"] },
                { title: "SEO", features: ["Log File Analysis", "Twitter Cards", "Voice Search (AEO)", "Local Citations"] },
                { title: "Performance", features: ["Core Web Vitals \"Green\"", "Lazy Loading", "Global Edge Network", "Redis Object Caching"] },
                { title: "Security", features: ["Wildcard SSL", "DDoS Mitigation", "Enterprise Spam Firewall", "Real-Time Redundant Backups"] },
                { title: "Conversion", features: ["Exit Intent Popups", "AI Chatbot Ready", "CRM Integration", "Heatmaps", "Auto-Social Posting"] },
                { title: "Hosting", features: ["99.99% Uptime", "High-Frequency Compute", "Enterprise G-Suite Emails"] }
            ]
        }
    ];

    const ecomPlans = [
        {
            name: "SHOP STARTER", subtitle: "Validation", price: "₹59,999", gst: "+ GST",
            desc: "Start selling online",
            sections: [
                { title: "Core Features", features: ["20 Products", "Standard Checkout", "Guest Checkout", "Basic Coupons", "Star Ratings", "Basic Search", "Razorpay/UPI", "Flat Rate Shipping", "Simple Tax", "Email Receipt", "Meta Titles", "Alt Tags"] }
            ]
        },
        {
            name: "SHOP PRO", subtitle: "Bestseller", price: "₹99,999", gst: "+ GST",
            desc: "Most Popular Choice", popular: true,
            sections: [
                { title: "Architecture", features: ["100 Products", "Variable Products", "One-Page Checkout", "Customer Dashboard"] },
                { title: "Marketing", features: ["Dynamic Discounts", "Photo Reviews", "Abandoned Cart Email", "Related Products", "Ajax Live Search"] },
                { title: "Payments", features: ["Multi-Gateway (COD+Credit)", "Live Shipping Rates (Shiprocket)", "Auto GST Calc", "PDF Invoices"] },
                { title: "SEO/Tech", features: ["Product Schema", "Auto-Alt Tags", "High-Perf Database mode"] },
                { title: "Management", features: ["Low Stock Alerts", "Advanced Sales Reports", "Order CSV Export"] }
            ]
        },
        {
            name: "E-COMM EMPIRE", subtitle: "Scale", price: "₹1,99,999", gst: "+ GST",
            desc: "Enterprise Scale",
            sections: [
                { title: "Architecture", features: ["Massive Catalog Support", "Bundled/Digital", "Distraction-Free Checkout", "Social Login"] },
                { title: "Marketing", features: ["BOGO Logic", "Verified Badges", "SMS/WhatsApp Notifs", "In-Cart Upsells", "AI Search & Filter"] },
                { title: "Payments", features: ["International (Stripe)", "Pincode Check", "Multi-State Tax", "GST Tax Invoices"] },
                { title: "SEO/Tech", features: ["Google Merchant Feed", "Video Gallery", "Redis Caching for Store"] },
                { title: "Management", features: ["Multi-Warehouse", "Cohort Analysis", "ERP API Ready"] }
            ]
        }
    ];

    const amcPlans = [
        {
            name: "ESSENTIAL", subtitle: "Insurance", price: "₹11,999", gst: "/Year",
            desc: "Basic Protection",
            sections: [
                { title: "Core Maintenance", features: ["24/7 Ping Monitor", "SSL Renewal", "Weekly Scan", "Paid Hack Recovery", "Weekly DB Backup", "Auto-Updates"] }
            ]
        },
        {
            name: "GROWTH", subtitle: "Protection", price: "₹35,999", gst: "/Year",
            desc: "Most Popular Choice", popular: true,
            sections: [
                { title: "Health", features: ["24/7 HTTP Monitor", "CPU/RAM Tracking", "Monthly Error Log"] },
                { title: "Security", features: ["SSL Handshake Opt", "Daily Deep Scan", "Free Hack Cleanup", "Daily Cloud Backup"] },
                { title: "Maintenance", features: ["Managed Safe Updates", "Plugin Compatibility", "Child Theme Maint", "Monthly DB Cleanup"] },
                { title: "Performance", features: ["Monthly Core Web Vitals", "Broken Link Scan", "Bulk Image Compress"] },
                { title: "Support", features: ["24 Hr Response", "WhatsApp Support", "Quarterly Strategy Call"] }
            ]
        },
        {
            name: "VIP", subtitle: "Partner", price: "₹99,999", gst: "/Year",
            desc: "Total Peace of Mind",
            sections: [
                { title: "Health", features: ["Real-Time Alerts", "Traffic Spike Mgmt", "Deep Server Audits"] },
                { title: "Security", features: ["Advanced Cert Mgmt", "Real-time Firewall", "Insurance-Backed Guarantee", "Hourly Backups"] },
                { title: "Maintenance", features: ["Manual Verification", "Staging Tests", "Code Deprecation Fixes", "Query Opt"] },
                { title: "Performance", features: ["Bi-Weekly Tuning", "404 Mgmt", "CDN Purging"] },
                { title: "Support", features: ["4 Hr Priority", "Dedicated Manager", "Monthly Strategy Call"] }
            ]
        }
    ];

    const currentPlans = activeTab === 'design' ? websitePlans : activeTab === 'ecommerce' ? ecomPlans : amcPlans;

    return (
        <section className="py-24 bg-slate-50" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">
                        Transparent, <span className="text-[#0052CC]">Value-Driven</span> Pricing
                    </h2>
                    <p className="text-lg text-slate-700">
                        Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
                        <button
                            onClick={() => setActiveTab('design')}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'design' ? 'bg-[#0052CC] text-white shadow-md' : 'text-slate-600 hover:text-[#0052CC]'}`}
                        >
                            Website Design
                        </button>
                        <button
                            onClick={() => setActiveTab('ecommerce')}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'ecommerce' ? 'bg-[#0052CC] text-white shadow-md' : 'text-slate-600 hover:text-[#0052CC]'}`}
                        >
                            E-Commerce
                        </button>
                        <button
                            onClick={() => setActiveTab('amc')}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'amc' ? 'bg-[#0052CC] text-white shadow-md' : 'text-slate-600 hover:text-[#0052CC]'}`}
                        >
                            AMC (Maintenance)
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {currentPlans.map((plan, i) => (
                        <div key={i} className={`bg-white rounded-2xl transition-all duration-300 flex flex-col relative ${plan.popular ? 'ring-2 ring-[#0052CC] shadow-2xl scale-105 z-10' : 'border border-slate-200 shadow-lg hover:shadow-xl'}`}>
                            {plan.popular && (
                                <div className="bg-[#0052CC] text-white text-xs font-bold text-center py-2 rounded-t-xl uppercase tracking-widest">
                                    Most Popular Choice
                                </div>
                            )}
                            <div className="p-8 pb-4">
                                <h3 className="text-[#0052CC] font-bold text-sm uppercase tracking-wider mb-1">{plan.name}</h3>
                                <div className="text-slate-400 text-xs font-semibold mb-4">{plan.subtitle}</div>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-4xl font-extrabold text-[#0F172A]">{plan.price}</span>
                                    <span className="text-slate-500 text-xs ml-2 font-bold">{plan.gst}</span>
                                </div>

                                <a href="#contact-form" className={`block w-full py-3.5 rounded-lg font-bold text-center transition-all mt-6 ${plan.popular ? 'bg-[#FF6B35] text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20' : 'bg-white border-2 border-[#0052CC] text-[#0052CC] hover:bg-blue-50'}`}>
                                    {plan.popular ? 'Get Started Now' : 'Select Plan'}
                                </a>
                            </div>

                            <div className="px-8 pb-8 flex-grow space-y-2">
                                {plan.sections.map((section, idx) => (
                                    <PlanSection
                                        key={idx}
                                        title={section.title}
                                        features={section.features}
                                        defaultOpen={plan.popular && idx === 0}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-sm text-slate-500 max-w-2xl mx-auto">
                    <p>All plans include our 30-90 day post-launch support. Prices exclude 18% GST. Renewal rates for AMC apply after 1 year. Custom enterprise requirements? <a href="#contact-form" className="text-[#0052CC] font-bold underline">Contact us</a>.</p>
                </div>
            </div>
        </section>
    );
};
