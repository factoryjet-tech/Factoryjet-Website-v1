'use client';

import React, { useState } from 'react';
import { WEB_PACKAGES, ECOM_PACKAGES, SEO_PACKAGES, AMC_PACKAGES, FAQ_ITEMS } from './constants';
import { PricingCard, AccordionItem } from './components/UI';
import { ArrowRight, Check, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import { useContactModal } from '@/context/ContactModalContext';
import Link from 'next/link';
import FooterUS from '@/components/FooterUS';

const PARTNERS = [
  "Shopify Partner",
  "WordPress VIP",
  "Google Cloud",
  "Stripe Verified",
  "Microsoft",
  "Commerceflo",
  "HubSpot",
  "ZOHO",
  "AWS",
  "PayPal",
  "Webflow",
  "Framer",
  "Adobe"
];

const Hero = () => {
    return (
        <header className="relative pt-24 pb-20 overflow-hidden bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy tracking-tight mb-6 leading-tight">
                    Transparent, <span className="text-jet-blue">Value-Driven</span><br className="hidden md:block" /> Pricing
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
                    Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-jet-green" aria-hidden="true" /> No Hidden Fees</span>
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-jet-green" aria-hidden="true" /> 100% Ownership</span>
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-jet-green" aria-hidden="true" /> US-Based Project Mgmt</span>
                </div>
            </div>
        </header>
    );
};

const PricingTabs = ({ onOpenContact }: { onOpenContact: () => void }) => {
    const [activeTab, setActiveTab] = useState('web');

    const tabs = [
        { id: 'web', label: 'Website Design' },
        { id: 'ecom', label: 'E-Commerce' },
        { id: 'seo', label: 'AI SEO (Growth)' },
        { id: 'amc', label: 'AMC (Maintenance)' }
    ];

    const getPackages = () => {
        switch(activeTab) {
            case 'web': return WEB_PACKAGES;
            case 'ecom': return ECOM_PACKAGES;
            case 'seo': return SEO_PACKAGES;
            case 'amc': return AMC_PACKAGES;
            default: return WEB_PACKAGES;
        }
    };

    return (
        <section id="pricing" className="pb-32 bg-slate-50" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="sr-only">Service Pricing Packages</h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm inline-flex flex-wrap justify-center gap-1" role="tablist" aria-label="Pricing Categories">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={`panel-${tab.id}`}
                                id={`tab-${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-jet-blue ${
                                    activeTab === tab.id 
                                    ? 'bg-jet-blue text-white shadow-md' 
                                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div 
                    id={`panel-${activeTab}`}
                    role="tabpanel" 
                    aria-labelledby={`tab-${activeTab}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
                >
                    {getPackages().map((pkg: any) => (
                        <PricingCard key={pkg.id} pkg={pkg} onCtaClick={onOpenContact} />
                    ))}
                </div>

                {/* Trust Badges - Infinite Scroll */}
                <div className="mt-24 pt-10 border-t border-slate-200">
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Trusted technology partners</p>
                    
                    <div className="relative flex overflow-x-hidden group max-w-6xl mx-auto mask-gradient">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
                        
                        <div className="py-2 animate-infinite-scroll flex whitespace-nowrap gap-12 md:gap-24 group-hover:pause">
                            {/* Double the list for seamless loop */}
                            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                                <div key={i} className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default select-none">
                                   <span className="text-xl md:text-2xl font-heading font-bold text-slate-700 tracking-tight">{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQSection = ({ onOpenContact }: { onOpenContact: () => void }) => {
    const [activeCategory, setActiveCategory] = useState("Billing & Payments");

    // Extract unique categories
    const categories = Array.from(new Set(FAQ_ITEMS.map(item => item.category || "General")));

    // Filter items based on active category
    const filteredItems = FAQ_ITEMS.filter(item => (item.category || "General") === activeCategory);

    return (
        <section id="faq" className="py-24 bg-white relative" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4" aria-level={2} role="heading">
                        Common Questions & <span className="text-jet-blue">Straight Answers</span>
                    </p>
                    <p className="text-slate-500 max-w-2xl mx-auto">Everything you need to know about our billing, process, and deliverables.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                    {/* Sidebar Menu */}
                    <nav className="col-span-12 md:col-span-4 lg:col-span-3 sticky top-28" aria-label="FAQ Categories">
                        <div className="bg-slate-50 rounded-xl p-2 border border-slate-100">
                            <div className="space-y-1">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        aria-current={activeCategory === cat ? 'page' : undefined}
                                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-jet-blue ${
                                            activeCategory === cat
                                            ? 'bg-white text-jet-blue shadow-sm ring-1 ring-slate-200'
                                            : 'text-slate-600 hover:text-navy hover:bg-white/50'
                                        }`}
                                    >
                                        {cat}
                                        {activeCategory === cat && <ChevronRight className="w-4 h-4" aria-hidden="true" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 hidden md:block">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-blue-100 text-jet-blue rounded-lg">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-navy">Still have questions?</h4>
                            </div>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                            <button 
                                onClick={onOpenContact}
                                className="w-full bg-white text-jet-blue border border-blue-200 hover:bg-blue-50 hover:border-blue-300 px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
                            >
                                <span>Get in touch</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </nav>

                    {/* FAQ Content */}
                    <div className="col-span-12 md:col-span-8 lg:col-span-9">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-navy">{activeCategory}</h3>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            {filteredItems.map((item, i) => (
                                <AccordionItem key={i} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTABottom = ({ onOpenContact }: { onOpenContact: () => void }) => (
    <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Not sure which stack fits your scale?</h2>
            <p className="text-slate-200 mb-10 text-lg">Talk to a Senior Solutions Architect, not a salesperson. We&apos;ll audit your current digital footprint for free.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                    onClick={onOpenContact}
                    className="px-8 py-4 bg-white text-navy rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                    Schedule Audit
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    View Case Studies
                </button>
            </div>
        </div>
    </section>
);

const FooterLocal = () => (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/us" className="flex items-center gap-2 mb-6">
                        <img src="/FinalLogo.svg" alt="FactoryJet" className="h-8 w-auto" />
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        We build specifically for ambitious SMBs and manufacturers who want to move beyond 'brochureware' sites to revenue-generating assets.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/company/factoryjet" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-jet-blue transition-colors focus:outline-none focus:ring-2 focus:ring-jet-blue">
                            <span className="font-bold text-xs" aria-hidden="true">Li</span>
                        </a>
                        <a href="https://twitter.com/factoryjet" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-jet-blue transition-colors focus:outline-none focus:ring-2 focus:ring-jet-blue">
                            <span className="font-bold text-xs" aria-hidden="true">X</span>
                        </a>
                    </div>
                </div>

                <nav aria-label="Footer Services">
                    <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-wider">Services</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li><Link href="/us/services/web-design" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">Web Design</Link></li>
                        <li><Link href="/us/services/ecommerce-development" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">E-Commerce</Link></li>
                        <li><a href="#pricing" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">AI SEO</a></li>
                        <li><a href="#pricing" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">Maintenance</a></li>
                    </ul>
                </nav>

                <nav aria-label="Footer Company">
                    <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-wider">Company</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li><Link href="/us/about" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">About Us</Link></li>
                        <li><Link href="/case" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">Case Studies</Link></li>
                        <li><Link href="/contact" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">Contact</Link></li>
                        <li><Link href="/blog" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">Blog</Link></li>
                    </ul>
                </nav>

                <nav aria-label="Footer Legal">
                    <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-wider">Legal</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li><Link href="/privacy" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-jet-blue transition-colors focus:outline-none focus:underline">Terms of Service</Link></li>
                        <li className="flex items-center gap-2 mt-4 text-xs font-medium bg-green-50 text-green-700 px-3 py-1 rounded-full w-fit">
                            <ShieldCheck className="w-3 h-3" aria-hidden="true" /> SOC-2 Compliant
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                <p>&copy; {new Date().getFullYear()} FactoryJet Technologies Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <span>New York</span>
                    <span>London</span>
                    <span>San Francisco</span>
                </div>
            </div>
        </div>
    </footer>
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function App() {
  const { openModal } = useContactModal();
  const openUsModal = () => openModal('us');

  return (
    <main className="min-h-screen font-body text-slate-800 bg-slate-50 selection:bg-blue-100 selection:text-jet-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header basePath="/us" variant="solid" />
      <Hero />
      <PricingTabs onOpenContact={openUsModal} />
      <FAQSection onOpenContact={openUsModal} />
      <CTABottom onOpenContact={openUsModal} />
      <FooterUS />
    </main>
  );
}