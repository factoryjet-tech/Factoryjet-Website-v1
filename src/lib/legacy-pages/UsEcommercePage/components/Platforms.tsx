import React, { useState } from 'react';
import { Section, SectionHeader, Button } from './ui/Section';
import { Check, ShoppingBag, Globe, Zap, Server, Code, Layers, BrainCircuit, LayoutGrid, RotateCw } from 'lucide-react';
import { useLeadCapture } from '../context/LeadCaptureContext';

const platforms = [
  { id: 'shopify', name: 'Shopify / Plus', icon: ShoppingBag, color: 'text-[#96bf48]' },
  { id: 'commerceflo', name: 'Commerceflo.ai', icon: BrainCircuit, color: 'text-indigo-500' },
  { id: 'adobe', name: 'Adobe Commerce', icon: Layers, color: 'text-[#f15923]' },
  { id: 'woo', name: 'WooCommerce', icon: ShoppingBag, color: 'text-[#7f54b3]' },
  { id: 'spree', name: 'Spree Commerce', icon: Code, color: 'text-[#DB3637]' },
  { id: 'medusa', name: 'Medusa.js', icon: Server, color: 'text-indigo-600' },
  { id: 'headless', name: 'Headless', icon: Zap, color: 'text-jet-blue' },
  { id: 'custom', name: 'Custom', icon: Code, color: 'text-jet-orange' },
];

const Platforms: React.FC = () => {
  const [activeTab, setActiveTab] = useState('shopify');
  const { openForm } = useLeadCapture();

  const renderContent = () => {
    switch (activeTab) {
      case 'shopify':
        return (
          <div className="animate-fade-in">
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">Shopify Development Services: From Launch to $100M+ in Revenue</h3>
            <p className="text-jet-gray mb-6 leading-relaxed">Shopify is the world's leading hosted e-commerce platform, powering over 4.4 million online stores worldwide. From startups to enterprise brands like Allbirds, Gymshark, and Kylie Cosmetics, Shopify provides the infrastructure to sell anywhere.</p>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="bg-slate-50 p-5 md:p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold mb-3 text-jet-dark">Our Shopify Development Services</h4>
                <ul className="space-y-2 text-sm text-jet-gray">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Custom theme development from scratch</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Liquid template customization</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Mobile-optimized responsive design</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Performance optimization (sub-2s loads)</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> SEO foundation & Analytics setup</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-5 md:p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold mb-3 text-jet-dark">Shopify Plus Development</h4>
                <ul className="space-y-2 text-sm text-jet-gray">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Enterprise checkout customization</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Shopify Flow automation</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Launchpad for flash sales</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Wholesale channel (B2B on Shopify)</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Custom scripts & Hydrogen headless</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 border rounded bg-white shadow-sm">
                <div className="text-2xl font-bold text-jet-blue">85+</div>
                <div className="text-xs text-jet-gray font-medium">Shopify Stores Built</div>
              </div>
              <div className="text-center p-4 border rounded bg-white shadow-sm">
                <div className="text-2xl font-bold text-jet-green">247%</div>
                <div className="text-xs text-jet-gray font-medium">Avg. Revenue Increase</div>
              </div>
              <div className="text-center p-4 border rounded bg-white shadow-sm">
                <div className="text-2xl font-bold text-jet-orange">1.8s</div>
                <div className="text-xs text-jet-gray font-medium">Avg. Page Speed</div>
              </div>
              <div className="text-center p-4 border rounded bg-white shadow-sm">
                <div className="text-2xl font-bold text-jet-dark">73%</div>
                <div className="text-xs text-jet-gray font-medium">Checkout Completion</div>
              </div>
            </div>
            
            <Button className="w-full md:w-auto" onClick={() => openForm('Shopify Development')}>Get Your Shopify Quote →</Button>
          </div>
        );
      case 'commerceflo':
        return (
          <div className="animate-fade-in">
             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
               <BrainCircuit className="h-8 w-8 text-indigo-600 flex-shrink-0" />
               <h3 className="text-xl md:text-2xl font-heading font-bold">Commerceflo.ai: The AI-Native Omnichannel Solution</h3>
             </div>
             
             <p className="text-jet-gray mb-6 leading-relaxed text-base md:text-lg">
               <strong>Sell Everywhere. Manage Once.</strong> Commerceflo.ai is an AI-Native Omnichannel Commerce Platform designed to be the central nervous system for ambitious SMEs. It replaces the chaotic "Franken-stack" of disconnected apps with a single, unified operating system.
             </p>
             
             <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5 md:p-6 mb-8">
               <h4 className="font-bold text-indigo-900 mb-4 text-lg">Why Commerceflo?</h4>
               <div className="grid md:grid-cols-3 gap-6">
                 <div>
                   <div className="flex items-center gap-2 font-bold text-indigo-800 mb-2">
                     <LayoutGrid className="h-4 w-4"/> Unified Hub
                   </div>
                   <p className="text-sm text-indigo-700 leading-relaxed">
                     One Catalog, One Inventory Pool, and One Order Hub across all sales channels—B2C, B2B, Marketplaces, Social, and POS.
                   </p>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 font-bold text-indigo-800 mb-2">
                     <BrainCircuit className="h-4 w-4"/> AI Co-Pilot
                   </div>
                   <p className="text-sm text-indigo-700 leading-relaxed">
                     An AI engine that acts as <strong>The Doer</strong> (Automating tasks), <strong>The Analyst</strong> (Optimizing pricing/inventory), and <strong>The Strategist</strong> (Identifying growth).
                   </p>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 font-bold text-indigo-800 mb-2">
                     <RotateCw className="h-4 w-4"/> Channel Sync
                   </div>
                   <p className="text-sm text-indigo-700 leading-relaxed">
                     Eliminate "Channel Chaos." Real-time sync preventing inventory blindness and disconnected data silos.
                   </p>
                 </div>
               </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold mb-3 text-jet-dark">Core Capabilities</h4>
                  <ul className="space-y-3 text-sm text-jet-gray">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Unified PIM:</strong> One source of truth for products & attributes.</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Centralized OMS:</strong> All orders (Amazon, B2B, DTC) in one list.</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Smart WMS:</strong> Multi-location inventory routing logic.</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Native B2B:</strong> Custom price lists, portals, and customer tiers.</li>
                  </ul>
                </div>
                 <div>
                  <h4 className="font-bold mb-3 text-jet-dark">The AI Advantage</h4>
                  <ul className="space-y-3 text-sm text-jet-gray">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Automation:</strong> Saves 20+ hours/week on manual data entry.</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Dynamic Pricing:</strong> Auto-match competitors for Buy Box wins.</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Growth:</strong> AI-powered bundle suggestions to increase AOV.</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> <strong>Content:</strong> AI-generated SEO descriptions for every channel.</li>
                  </ul>
                </div>
             </div>

             <div className="bg-slate-900 text-white p-4 rounded-lg flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="mb-4 md:mb-0 w-full md:w-auto">
                  <span className="font-bold text-indigo-400 block mb-1">Ideal For:</span>
                  <span className="text-sm text-slate-300">Ambitious SMEs ($500k - $20M revenue) facing "App Fatigue" and "Channel Chaos".</span>
                </div>
                <div className="text-left md:text-right w-full md:w-auto">
                   <div className="text-2xl font-bold text-jet-green">Reduce Costs</div>
                   <div className="text-xs text-slate-400">Boost Profitability</div>
                </div>
             </div>

             <Button className="bg-indigo-600 hover:bg-indigo-700 w-full md:w-auto" onClick={() => openForm('Commerceflo Platform')}>Get Your Commerceflo Quote →</Button>
          </div>
        );
      case 'adobe':
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-heading font-bold mb-4">Adobe Commerce (Magento) Development</h3>
            <p className="text-jet-gray mb-6 leading-relaxed">Adobe Commerce (formerly Magento) is the enterprise e-commerce solution within Adobe Experience Cloud. It powers complex businesses requiring deep customization, B2B marketplace functionality, and integration with the Adobe ecosystem.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="font-bold mb-3 text-jet-dark">Our Services</h4>
                <ul className="space-y-2 text-sm text-jet-gray">
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Custom theme & module development</li>
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> B2B portal implementation</li>
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Adobe Commerce Cloud deployment</li>
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Performance optimization & Security hardening</li>
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Magento 1 to Adobe Commerce 2 migration</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg">
                 <h4 className="font-bold mb-3 text-jet-dark">When to Choose Adobe</h4>
                 <ul className="space-y-2 text-sm text-jet-gray">
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Maximum customization needed</li>
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Building a B2B marketplace</li>
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Complex product configurations</li>
                   <li className="flex items-start gap-2"><Check className="h-4 w-4 text-jet-green mt-1 flex-shrink-0"/> Adobe ecosystem integration required</li>
                </ul>
              </div>
            </div>
            <Button className="w-full md:w-auto" onClick={() => openForm('Adobe Commerce Development')}>Get Your Adobe Commerce Quote →</Button>
          </div>
        );
      case 'woo':
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-heading font-bold mb-4">WooCommerce Development: Flexible E-Commerce on WordPress</h3>
             <p className="text-jet-gray mb-6 leading-relaxed">WooCommerce is an open-source e-commerce plugin for WordPress, powering over 5 million stores globally. It offers unlimited customization, content marketing integration, and full ownership with no platform fees.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
               <div className="p-4 border border-slate-200 rounded text-center shadow-sm">
                 <div className="text-2xl md:text-3xl font-bold text-jet-blue mb-1">28%</div>
                 <div className="text-xs md:text-sm text-jet-gray">Global Market Share</div>
               </div>
               <div className="p-4 border border-slate-200 rounded text-center shadow-sm">
                 <div className="text-2xl md:text-3xl font-bold text-jet-green">$0</div>
                 <div className="text-xs md:text-sm text-jet-gray">Transaction Fees</div>
               </div>
               <div className="p-4 border border-slate-200 rounded text-center shadow-sm">
                 <div className="text-2xl md:text-3xl font-bold text-jet-orange">1k+</div>
                 <div className="text-xs md:text-sm text-jet-gray">Extensions Available</div>
               </div>
               <div className="p-4 border border-slate-200 rounded text-center shadow-sm">
                 <div className="text-2xl md:text-3xl font-bold text-jet-dark">5M+</div>
                 <div className="text-xs md:text-sm text-jet-gray">Stores Powered</div>
               </div>
             </div>
             <p className="mb-6 font-medium text-jet-dark p-4 bg-slate-50 rounded border">Services: Custom themes, Plugin development, B2B wholesale plugins, Headless WooCommerce, Performance optimization.</p>
             <Button className="w-full md:w-auto" onClick={() => openForm('WooCommerce Development')}>Get Your WooCommerce Quote →</Button>
          </div>
        )
      case 'spree':
        return (
          <div className="animate-fade-in">
             <h3 className="text-2xl font-heading font-bold mb-4">Spree Commerce Development: Open-Source Ruby on Rails E-Commerce</h3>
             <p className="text-jet-gray mb-6 leading-relaxed">Spree Commerce is an open-source e-commerce framework built on Ruby on Rails. It powers 50,000+ stores worldwide and offers complete flexibility through its modular architecture. Unlike SaaS platforms, Spree gives you full code ownership with no licensing fees.</p>
             <div className="bg-orange-50 p-6 rounded-lg mb-8 border border-orange-100">
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-orange-900 mb-2">Why Spree?</h4>
                    <p className="text-sm text-orange-800 mb-4">True Open Source. Modular Architecture. Enterprise Scalability to millions of SKUs. No license fees ever.</p>
                    <h4 className="font-bold text-orange-900 mb-2">When to Choose Spree</h4>
                    <ul className="space-y-1 text-sm text-orange-800">
                      <li>✅ Complete customization freedom needed</li>
                      <li>✅ Building a marketplace</li>
                      <li>✅ Headless flexibility required</li>
                      <li>✅ Have Ruby on Rails resources</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-900 mb-2">Our Services</h4>
                    <ul className="space-y-1 text-sm text-orange-800 mb-4">
                      <li>• Custom Spree store development</li>
                      <li>• Marketplace development (multi-vendor)</li>
                      <li>• Extension & Theme customization</li>
                      <li>• Payment, Shipping, ERP integrations</li>
                      <li>• Migration from legacy platforms</li>
                    </ul>
                    <p className="text-sm font-bold text-orange-900">Pricing: Development costs $10K-$100K+</p>
                  </div>
               </div>
             </div>
             <Button className="w-full md:w-auto" onClick={() => openForm('Spree Commerce Development')}>Get Your Spree Commerce Quote →</Button>
          </div>
        );
      case 'medusa':
        return (
          <div className="animate-fade-in">
             <h3 className="text-2xl font-heading font-bold mb-4">Medusa.js: The Modern Open-Source Headless Commerce Engine</h3>
             <p className="text-jet-gray mb-6 leading-relaxed">Medusa.js is an open-source headless commerce engine built on Node.js. It's designed for developers who want Shopify-like features with complete customization freedom. Medusa offers modular architecture, no transaction fees, and the flexibility to build any commerce experience.</p>
             
             <div className="grid md:grid-cols-2 gap-8 mb-8">
               <div className="p-5 border border-slate-200 rounded-lg">
                 <h4 className="font-bold text-jet-dark mb-2">Why Medusa.js?</h4>
                 <ul className="text-sm space-y-2 text-jet-gray">
                   <li><strong className="text-indigo-600">Developer-First:</strong> Built on Node.js/TypeScript. REST & GraphQL APIs.</li>
                   <li><strong className="text-indigo-600">True Headless:</strong> Any frontend (Next.js, Gatsby, React Native).</li>
                   <li><strong className="text-indigo-600">No Vendor Lock-In:</strong> Open-source (MIT), self-hosted, own your data.</li>
                   <li><strong className="text-indigo-600">Rich Features:</strong> Multi-currency, Multi-region, B2B mode, Returns.</li>
                 </ul>
               </div>
               <div className="p-5 border border-slate-200 rounded-lg">
                 <h4 className="font-bold text-jet-dark mb-2">Our Medusa.js Services</h4>
                 <ul className="text-sm space-y-1 text-jet-gray">
                   <li>• Medusa backend configuration & Admin customization</li>
                   <li>• Next.js storefront development</li>
                   <li>• Plugin development & API extensions</li>
                   <li>• React Native mobile apps</li>
                   <li>• CMS & ERP integrations</li>
                 </ul>
               </div>
             </div>

             <div className="overflow-x-auto mb-8 border rounded-lg">
               <table className="min-w-full text-sm text-left whitespace-nowrap md:whitespace-normal">
                 <thead className="bg-slate-100">
                   <tr>
                     <th className="p-3 font-bold text-jet-dark">Feature</th>
                     <th className="p-3 font-bold text-jet-dark">Medusa.js</th>
                     <th className="p-3 font-bold text-jet-dark">Shopify</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className="border-b">
                     <td className="p-3 font-medium">License</td>
                     <td className="p-3 text-jet-green font-bold">Open Source (MIT)</td>
                     <td className="p-3">Proprietary</td>
                   </tr>
                   <tr className="border-b">
                     <td className="p-3 font-medium">Transaction Fees</td>
                     <td className="p-3 text-jet-green font-bold">$0</td>
                     <td className="p-3">0-2%</td>
                   </tr>
                    <tr className="border-b">
                     <td className="p-3 font-medium">Frontend</td>
                     <td className="p-3 font-bold text-jet-blue">Any Framework</td>
                     <td className="p-3">Liquid Templates</td>
                   </tr>
                   <tr>
                     <td className="p-3 font-medium">Best For</td>
                     <td className="p-3">Custom Builds</td>
                     <td className="p-3">Quick Launch</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <Button className="w-full md:w-auto" onClick={() => openForm('Medusa.js Development')}>Get Your Medusa.js Quote →</Button>
          </div>
        );
      case 'headless':
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-heading font-bold mb-4">Headless & Composable Commerce: MACH Architecture</h3>
            <p className="text-jet-gray mb-6 leading-relaxed">Headless commerce separates the frontend presentation layer from the backend e-commerce engine, connected via APIs. This enables custom frontends on any framework, omnichannel experiences, and best-of-breed architecture.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
               <div className="border border-slate-200 p-5 rounded-lg hover:shadow-md transition">
                 <h4 className="font-bold text-jet-blue">Shopify Hydrogen</h4>
                 <p className="text-sm mt-2 text-jet-gray">Shopify's React-based headless framework. React, Remix, Oxygen hosting. Best for Shopify merchants.</p>
               </div>
               <div className="border border-slate-200 p-5 rounded-lg hover:shadow-md transition">
                 <h4 className="font-bold text-jet-blue">Commerceflo API</h4>
                 <p className="text-sm mt-2 text-jet-gray">Headless-first architecture. Connect any frontend to the AI-Native engine.</p>
               </div>
               <div className="border border-slate-200 p-5 rounded-lg hover:shadow-md transition">
                 <h4 className="font-bold text-jet-blue">Commercetools</h4>
                 <p className="text-sm mt-2 text-jet-gray">Enterprise composable commerce. Cloud-native, API-first, MACH certified. Best for Large Enterprise.</p>
               </div>
               <div className="border border-slate-200 p-5 rounded-lg hover:shadow-md transition">
                 <h4 className="font-bold text-jet-blue">Medusa.js</h4>
                 <p className="text-sm mt-2 text-jet-gray">Open-source headless commerce engine. Node.js, any frontend. Best for custom builds.</p>
               </div>
            </div>
            <div className="bg-slate-900 text-white p-6 rounded-lg mb-8">
              <h4 className="font-bold mb-3">Benefits of Headless</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">⚡ Sub-second loads</div>
                <div className="flex items-center gap-2">🎨 Any frontend</div>
                <div className="flex items-center gap-2">📱 True Omnichannel</div>
                <div className="flex items-center gap-2">🔮 Future-proof</div>
              </div>
            </div>
            <Button className="w-full md:w-auto" onClick={() => openForm('Headless Commerce Architecture')}>Go Headless →</Button>
          </div>
        );
      case 'custom':
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-heading font-bold mb-4">Custom E-Commerce Development: Bespoke Solutions</h3>
            <p className="text-jet-gray mb-6 leading-relaxed">For highly unique business processes, integration with proprietary systems, specific industry requirements, or mission-critical functionality that SaaS platforms can't handle.</p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-2 text-jet-dark">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vue.js', 'Next.js', 'Node.js', 'Python', 'PHP', 'PostgreSQL', 'AWS', 'Google Cloud'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-jet-dark">Services</h4>
                <ul className="text-sm space-y-1 text-jet-gray">
                  <li>• Completely custom platforms</li>
                  <li>• Legacy system integration</li>
                  <li>• Complex business logic implementation</li>
                  <li>• Enterprise-grade scalability & security</li>
                </ul>
              </div>
            </div>
            <p className="font-medium mb-6 text-jet-dark p-4 bg-slate-50 rounded border">Investment: $50,000 - $500,000+ | Timeline: 12-24+ weeks</p>
            <Button className="w-full md:w-auto" onClick={() => openForm('Custom E-Commerce Development')}>Discuss Your Custom Project →</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Section id="platforms" className="bg-white">
      <SectionHeader 
        eyebrow="PLATFORM EXPERTISE" 
        title="E-Commerce Platforms We Master" 
        subtitle="The right platform is the foundation. The wrong one is a ceiling."
      />
      
      {/* Quick Answer Box */}
      <div className="bg-blue-50 border-l-4 border-jet-blue p-6 rounded-r-lg max-w-4xl mx-auto mb-12 shadow-sm">
        <p className="text-sm text-jet-blue font-bold mb-2 uppercase tracking-wide">💡 Quick Answer</p>
        <p className="text-jet-gray text-base leading-relaxed">
          The best e-commerce platform depends on your business model. <strong>Shopify</strong> for DTC. <strong>Commerceflo</strong> for unified B2B/B2C & AI automation. <strong>Adobe Commerce</strong> for complex enterprise needs. <strong>Headless</strong> for ultimate customization.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-16">
        {/* Tabs Navigation - Scrollable on mobile, stacked on desktop */}
        <div className="lg:w-1/4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar snap-x z-10">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform.id)}
                className={`snap-start flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all min-w-[220px] lg:min-w-0 border lg:border-none ${
                  activeTab === platform.id 
                    ? 'bg-jet-blue text-white shadow-md transform scale-[1.02] border-jet-blue' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-100'
                }`}
              >
                <Icon className={`h-5 w-5 flex-shrink-0 ${activeTab === platform.id ? 'text-white' : platform.color}`} />
                <span className="font-medium whitespace-nowrap">{platform.name}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="lg:w-3/4 bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-sm min-h-[500px]">
          {renderContent()}
        </div>
      </div>

      {/* Master Comparison Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto border border-slate-200 rounded-xl shadow-sm bg-white">
        <div className="bg-slate-50 p-4 border-b border-slate-200 sticky left-0">
          <h4 className="font-bold text-jet-dark text-lg">Platform Comparison Master Table</h4>
        </div>
        <table className="w-full text-sm text-left whitespace-nowrap md:whitespace-normal">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4 font-bold">Platform</th>
              <th className="p-4 font-bold">Best For</th>
              <th className="p-4 font-bold">Starting Cost</th>
              <th className="p-4 font-bold">Launch Time</th>
              <th className="p-4 font-bold">B2B Ready</th>
              <th className="p-4 font-bold">Headless</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { p: 'Shopify', best: 'DTC Brands', cost: '$29/mo', time: '2-4 weeks', b2b: 'Limited', head: 'Hydrogen' },
              { p: 'Commerceflo', best: 'Unified B2B/B2C SMBs', cost: 'Custom', time: '3-6 weeks', b2b: 'Native', head: 'API-First' },
              { p: 'Adobe Commerce', best: 'Complex Enterprise', cost: '$22K+/yr', time: '12-24 weeks', b2b: 'Excellent', head: 'Yes' },
              { p: 'WooCommerce', best: 'Content Commerce', cost: '$0 + hosting', time: '4-8 weeks', b2b: 'Plugin-based', head: 'API' },
              { p: 'Spree Commerce', best: 'Ruby Custom Apps', cost: '$0', time: '8-16 weeks', b2b: 'Yes', head: 'Yes' },
              { p: 'Medusa.js', best: 'Node Custom Apps', cost: '$0', time: '6-12 weeks', b2b: 'Yes', head: 'Native' },
              { p: 'Custom', best: 'Unique Needs', cost: '$50K+', time: '12-24+ weeks', b2b: 'Custom', head: 'Custom' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-jet-blue sticky left-0 bg-white md:static">{row.p}</td>
                <td className="p-4">{row.best}</td>
                <td className="p-4">{row.cost}</td>
                <td className="p-4">{row.time}</td>
                <td className="p-4">{row.b2b}</td>
                <td className="p-4">{row.head}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Platforms;