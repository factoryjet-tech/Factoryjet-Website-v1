import React, { useState } from 'react';
import { Section } from './ui/Section';
import {
  Minus,
  Plus,
  Layers,
  Code,
  Building2,
  Server,
  DollarSign,
  BrainCircuit
} from 'lucide-react';

const faqData = [
  {
    id: 'pricing-timeline',
    category: 'Pricing & Timeline',
    icon: DollarSign,
    questions: [
      {
        q: 'How much does e-commerce development cost?',
        a: 'FactoryJet e-commerce development starts from $1,999 for launch-ready stores. Growth builds typically range from $10,000 to $24,999, advanced custom storefronts from $25,000 to $49,999, and enterprise commerce solutions from $50,000 to $150,000+. Final pricing depends on platform, product catalog size, integrations, and business complexity.'
      },
      {
        q: 'How long does it take to build an e-commerce store?',
        a: 'Most core e-commerce stores are delivered in 7 days. More advanced custom builds typically take 7–14 days, while enterprise and marketplace solutions follow milestone-based delivery timelines depending on integrations, platform requirements, and project scope.'
      }
    ]
  },
  {
    id: 'platforms',
    category: 'Platform Selection',
    icon: Layers,
    questions: [
      {
        q: 'Which e-commerce platforms does FactoryJet work with?',
        a: 'FactoryJet builds on Shopify, Shopify Plus, WooCommerce, BigCommerce, Adobe Commerce, and headless commerce frameworks. We recommend the right platform based on your business model, growth stage, product catalog, required integrations, and revenue goals.'
      }
    ]
  },
  {
    id: 'ai-commerce',
    category: 'AI & Commerceflo',
    icon: BrainCircuit,
    questions: [
      {
        q: 'What exactly is AI-native e-commerce, and why does it matter?',
        a: 'AI-native e-commerce means your store is built for speed, search visibility, automation, and conversion intelligence from day one. At FactoryJet, this includes structured data, schema markup, answer-first content architecture, AI-ready product pages, and integrations that improve visibility across Google, AI Overviews, ChatGPT, and other generative search engines.'
      },
      {
        q: 'What is Commerceflo.ai in simple terms?',
        a: 'Commerceflo.ai is a unified commerce operating system for growing brands that want to manage products, inventory, orders, B2B sales, marketplaces, and social commerce from one platform. Instead of using multiple disconnected tools, it centralizes catalog, stock, order routing, and analytics into one dashboard for easier scaling.'
      },
      {
        q: 'Is Commerceflo a true multi-channel solution?',
        a: 'Yes. Commerceflo supports true multi-channel commerce by connecting your website, B2B portal, marketplaces, social commerce channels, and POS systems into one unified backend. This reduces inventory mismatch, improves order visibility, and allows centralized management across all sales channels.'
      }
    ]
  },
  {
    id: 'ownership-migration',
    category: 'Ownership & Migration',
    icon: Code,
    questions: [
      {
        q: 'Do you provide full code ownership?',
        a: 'Yes. Every project includes full GitHub repository ownership, zero vendor lock-in, hosting setup in your account, and complete access to source code, assets, and technical documentation.'
      },
      {
        q: 'Can you migrate my existing store?',
        a: 'Yes. FactoryJet provides zero-downtime migrations from Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom platforms with SEO preservation, 301 redirects, structured data migration, and full order history transfer.'
      }
    ]
  },
  {
    id: 'why-factoryjet',
    category: 'Why FactoryJet',
    icon: Server,
    questions: [
      {
        q: 'What makes FactoryJet different from other e-commerce agencies?',
        a: 'FactoryJet combines enterprise-grade development with startup-friendly pricing. Our key USPs include 7-day delivery, full code ownership, AI-native architecture, 523 websites delivered, 500+ clients served, 4.9/5 client rating, and pricing that is typically 40–60% below comparable US and UK agencies.'
      }
    ]
  },
  {
    id: 'b2b',
    category: 'B2B & Wholesale',
    icon: Building2,
    questions: [
      {
        q: 'Do you support B2B and wholesale e-commerce?',
        a: 'Yes. We build B2B and wholesale e-commerce systems with custom pricing, customer-specific catalogs, bulk ordering workflows, ERP integrations, approval flows, and multi-user business accounts across Shopify Plus, Adobe Commerce, and headless frameworks.'
      }
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