import React, { useState } from 'react';
import { Section } from './ui/Section';
import { 
  ChevronDown, 
  Minus, 
  Plus, 
  Layers, 
  Code, 
  Building2, 
  Smartphone, 
  Share2, 
  Server, 
  Globe, 
  DollarSign,
  BrainCircuit
} from 'lucide-react';

const faqData = [
  {
    id: 'ai-commerce',
    category: "AI & Commerceflo",
    icon: BrainCircuit,
    questions: [
      { 
        q: "What exactly is 'AI-Native' commerce, and why should I care?", 
        a: "Think of 'AI-Native' as having a brain built into your business from day one, rather than taping a calculator to the side later. Legacy platforms like Shopify are 'Bolt-On' systems; their AI is blind to data silos. Commerceflo is built on a Unified Data Model, meaning its AI sees everything—inventory, B2B orders, Amazon sales—simultaneously. This allows it to make complex decisions, like routing inventory from a retail store to an FBA warehouse, because it's the only AI that knows both exist." 
      },
      { 
        q: "Can you explain what Commerceflo.ai actually is in simple terms?", 
        a: "Commerceflo.ai is the central nervous system for ambitious SMEs ($500k–$20M). It's a single operating system that replaces the chaotic 'Franken-stack' of apps and spreadsheets. It unifies your entire business—One Catalog, One Inventory Pool, One Order Hub—across every channel you sell on, from your B2B portal and Shopify site to TikTok Shop and Amazon. It lets you 'Sell Everywhere, Manage Once' without the technical headache." 
      },
      { 
        q: "How does AI actually help with the daily grind of running an online store?", 
        a: "It acts as your co-pilot to handle the heavy lifting. The Doer automates grunt work—generating SEO descriptions for every channel and routing thousands of orders to the cheapest fulfillment center. The Analyst watches your margins, auto-adjusting prices to win Amazon Buy Boxes and balancing inventory to prevent stockouts. The Strategist spots growth, telling you when a product is trending on TikTok or if you should expand to Walmart Marketplace based on your catalog." 
      },
      { 
        q: "Is Commerceflo truly a unified multi-channel solution, or just another connector tool?", 
        a: "Absolutely. Unlike tools that just pass data back and forth, Commerceflo is a thinking engine. It natively integrates B2C, B2B, Marketplaces, Social, and POS into one dashboard. Because it’s Headless and API-First, it doesn't just sync stock numbers; it orchestrates your entire logistics and sales strategy. It eliminates 'Inventory Blindness' and 'Channel Chaos,' giving you a single, truthful view of your business that legacy platforms simply can't provide." 
      }
    ]
  },
  { 
    id: 'platforms',
    category: "Platform Selection", 
    icon: Layers,
    questions: [
      { q: "Which e-commerce platform is best for my business?", a: "It depends on your needs. Shopify is best for DTC brands wanting quick launch. Shopify Plus for enterprise DTC ($10M+ revenue). BigCommerce for B2B/B2C hybrid. Adobe Commerce for complex customization. WooCommerce for WordPress integration. Headless platforms (Medusa.js, Spree) for maximum flexibility. We provide free platform consultations." },
      { q: "Should I choose Shopify or WooCommerce?", a: "Shopify is easier, faster, and has better support—ideal for most businesses. WooCommerce offers more flexibility and no transaction fees—ideal if you have WordPress expertise or need deep customization. Choose Shopify for simplicity; WooCommerce for control." },
      { q: "What's the difference between Shopify and Shopify Plus?", a: "Shopify Plus ($2,500/month) offers: checkout customization, Shopify Flow automation, higher API limits, dedicated support, multi-storefront, and B2B features. Standard Shopify ($29-299/month) handles most needs for brands under $1M annual revenue." },
      { q: "Is BigCommerce better than Shopify for B2B?", a: "Yes. BigCommerce has native B2B features (customer-specific pricing, quotes, purchase orders) in its B2B Edition. Shopify requires apps or Shopify Plus for B2B functionality. For B2B-first businesses, BigCommerce is typically the better choice." },
      { q: "What is Spree Commerce and when should I use it?", a: "Spree Commerce is an open-source Ruby on Rails e-commerce framework. Use it when you have Ruby development resources, need complete customization freedom, want to avoid licensing fees, or are building a marketplace. It's more technical but offers maximum flexibility." },
      { q: "What is Medusa.js and how does it compare to Shopify?", a: "Medusa.js is an open-source headless commerce engine built on Node.js. It offers Shopify-like features with complete customization and zero transaction fees. Choose Medusa for custom builds; Shopify for quick launch with less technical overhead." }
    ]
  },
  { 
    id: 'process',
    category: "Development Process", 
    icon: Code,
    questions: [
      { q: "How long does e-commerce development take?", a: "Starter stores: 2-4 weeks. Custom stores: 6-12 weeks. Enterprise/headless: 12-24 weeks. Social commerce: 2-4 weeks. Mobile apps: 8-16 weeks. We provide detailed timelines after discovery." },
      { q: "How much does e-commerce development cost?", a: "Starter: $5K-10K. Growth: $10K-25K. Professional: $25K-50K. Enterprise: $50K-150K+. Mobile apps: $30K-100K+. Pricing depends on platform, features, and customization requirements." },
      { q: "Do you provide ongoing support?", a: "Yes. All projects include post-launch support (30-90 days based on tier). We also offer monthly retainer support plans starting at $1,500/month for ongoing optimization, updates, and technical support." },
      { q: "Can you migrate from our current platform?", a: "Yes. We handle migrations from WooCommerce, Magento, BigCommerce, Shopify, and custom platforms. Migration includes data transfer, SEO preservation (301 redirects), and design refresh." }
    ]
  },
  { 
    id: 'b2b',
    category: "B2B E-Commerce", 
    icon: Building2,
    questions: [
       { q: "What B2B features do you build?", a: "Customer-specific pricing, tiered pricing, quote management (RFQ), purchase orders, company accounts, multiple buyer roles, approval workflows, payment terms (Net 30/60/90), bulk ordering, quick reorder, and ERP integration." },
       { q: "Which platform is best for B2B e-commerce?", a: "BigCommerce B2B Edition for mid-market. Adobe Commerce for enterprise with complex requirements. OroCommerce for B2B-first businesses. Shopify Plus for existing Shopify merchants adding B2B. Custom solutions for unique requirements." },
       { q: "Can you integrate with our ERP?", a: "Yes. We integrate with SAP, NetSuite, Microsoft Dynamics, Salesforce, HubSpot, ERPNext, and most major systems. Custom integrations also available." }
    ]
  },
  { 
    id: 'mobile',
    category: "Mobile & Apps", 
    icon: Smartphone,
    questions: [
      { q: "Do I need a mobile app or is responsive web enough?", a: "Responsive web works for most businesses. Consider an app if: you have 100K+ customers, high repeat purchase rate, want push notifications, need offline features, or compete against app-first brands. Apps convert 3-4x better than mobile web." },
      { q: "React Native vs Flutter - which is better for e-commerce?", a: "Both are excellent. React Native is better if your team knows JavaScript/React. Flutter offers slightly better performance and is better if starting fresh. Both achieve 40-60% cost savings vs native development." },
      { q: "How much does e-commerce app development cost?", a: "Cross-platform (React Native/Flutter): $30K-60K. Native (iOS + Android separately): $60K-120K. PWA: $15K-30K. Pricing depends on features and platform integration complexity." }
    ]
  },
  { 
    id: 'social',
    category: "Social Commerce", 
    icon: Share2,
    questions: [
      { q: "How do I sell on TikTok Shop?", a: "TikTok Shop requires: US business, product catalog, fulfillment capability. We handle: shop setup, product sync with your e-commerce platform, affiliate program configuration, and livestream setup. Typical setup: 2-4 weeks." },
      { q: "Can you set up Instagram Shopping?", a: "Yes. We configure Instagram Shopping including: business account eligibility, product tagging, catalog management via Commerce Manager, checkout configuration, and shopping ads setup." },
      { q: "What is livestream commerce?", a: "Livestream commerce is selling products during live video broadcasts on platforms like TikTok Live and Instagram Live. Products are tagged and purchasable in real-time. Conversion rates reach 10-15% (vs 2% for regular e-commerce)." }
    ]
  },
  { 
    id: 'headless',
    category: "Headless & Technical", 
    icon: Server,
    questions: [
      { q: "What is headless commerce?", a: "Headless commerce separates the frontend (what customers see) from the backend (e-commerce engine) via APIs. This enables custom frontends using any technology, better performance, and omnichannel experiences. It's more complex but offers unlimited flexibility." },
      { q: "What is composable commerce?", a: "Composable commerce uses best-of-breed, modular components instead of a single monolithic platform. Following MACH principles (Microservices, API-first, Cloud-native, Headless), it allows mixing different vendors for commerce, CMS, search, payments, etc." },
      { q: "What does MACH architecture mean?", a: "MACH stands for Microservices, API-first, Cloud-native, Headless. It's an architectural approach that enables maximum flexibility, scalability, and the ability to swap individual components without rebuilding everything." },
      { q: "When should I go headless?", a: "Consider headless when: you need maximum performance (sub-second loads), want custom frontend experiences, need true omnichannel (web, app, IoT), have developer resources, or are limited by template-based platforms." }
    ]
  },
  { 
    id: 'cross-border',
    category: "Cross-Border", 
    icon: Globe,
    questions: [
      { q: "Can you help us sell internationally?", a: "Yes. We implement cross-border solutions including multi-currency checkout, local payment methods, duties and taxes calculation, international shipping, and localized content. Solutions include Shopify Markets, Global-e, and BigCommerce multi-storefront." },
      { q: "How do you handle multi-currency?", a: "We configure automatic currency conversion based on visitor location, local pricing strategies, proper rounding rules, and checkout in local currency. Most platforms support 100+ currencies." },
      { q: "What about duties and taxes for international orders?", a: "We implement landed cost calculation showing duties and taxes at checkout (DDP - Delivered Duty Paid), ensuring no surprise fees for customers and proper compliance." }
    ]
  },
  { 
    id: 'pricing',
    category: "Pricing & Timeline", 
    icon: DollarSign,
    questions: [
       { q: "What's included in your pricing?", a: "All pricing includes: discovery, design, development, testing, launch, training, and post-launch support. No hidden fees. Hosting, apps, and platform subscription fees are separate (we'll detail these in your quote)." },
       { q: "Do you offer payment plans?", a: "Yes. Typical structure: 40% deposit, 40% at development milestone, 20% at launch. We also offer monthly payment options for larger projects." }
    ]
  }
];

// Generate FAQPage JSON-LD schema from all FAQ categories
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const currentCategoryData = faqData.find(cat => cat.id === activeCategory);

  return (
    <Section id="faq" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Knowledge Base Header */}
      <div className="text-center mb-12 md:mb-16">
        <span className="text-jet-blue font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">KNOWLEDGE BASE</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-jet-dark mb-4">
          Common Questions & <span className="text-jet-blue">Straight Answers</span>
        </h2>
        <p className="text-jet-gray text-base md:text-lg max-w-3xl mx-auto px-4">
          Everything you need to know about our process, technology, and deliverables. We believe in complete transparency.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Sidebar Categories - Horizontal Scroll on Mobile, Vertical Sidebar on Desktop */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
           <h3 className="hidden lg:block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-2">Browse Topics</h3>
           <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar lg:overflow-visible px-1">
             {faqData.map((cat) => {
               const Icon = cat.icon;
               const isActive = activeCategory === cat.id;
               return (
                 <button
                   key={cat.id}
                   onClick={() => {
                     setActiveCategory(cat.id);
                     setOpenQuestions([]); // Optional: Close questions when switching categories
                   }}
                   className={`flex items-center gap-2 lg:gap-3 px-4 py-3 lg:px-5 lg:py-4 rounded-xl text-left transition-all duration-200 font-semibold text-sm whitespace-nowrap lg:whitespace-normal flex-shrink-0 ${
                     isActive 
                       ? 'bg-jet-blue text-white shadow-md' 
                       : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-jet-blue'
                   }`}
                 >
                   <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20' : 'bg-white shadow-sm'} hidden sm:block`}>
                      <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                   </div>
                   {cat.category}
                 </button>
               )
             })}
           </div>
        </div>

        {/* Main Content Accordion */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4">
             {currentCategoryData?.questions.map((item, idx) => {
               const qId = `${activeCategory}-${idx}`;
               const isOpen = openQuestions.includes(qId);
               
               return (
                 <div 
                   key={idx} 
                   className={`border rounded-2xl bg-white transition-all duration-300 ${isOpen ? 'border-jet-blue shadow-md ring-1 ring-jet-blue/20' : 'border-slate-200 shadow-sm hover:border-jet-blue/50'}`}
                 >
                   <button 
                     onClick={() => toggleQuestion(qId)}
                     className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                   >
                     <span className={`text-base md:text-lg font-bold pr-4 md:pr-8 ${isOpen ? 'text-jet-blue' : 'text-jet-dark'}`}>
                       {item.q}
                     </span>
                     <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-jet-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                     </div>
                   </button>
                   
                   <div 
                     className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                   >
                     <div className="px-5 pb-6 md:px-6 md:pb-6 text-jet-gray text-sm md:text-base leading-relaxed">
                       {item.a}
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;