import React from 'react';
import { Section, SectionHeader, Button } from './ui/Section';
import { Smartphone, Users, Globe2, ShoppingCart, Zap, CreditCard, Building2, Truck, MessageSquare, Database, Layout, Server, Lock } from 'lucide-react';
import { useLeadCapture } from '../context/LeadCaptureContext';

export const B2BCommerce: React.FC = () => {
  const { openForm } = useLeadCapture();
  
  return (
    <Section id="b2b" className="bg-slate-50">
      <SectionHeader 
        eyebrow="B2B E-COMMERCE SOLUTIONS" 
        title="Wholesale Platforms & Quote-to-Order Systems" 
        subtitle="The $26 trillion B2B e-commerce market requires specialized solutions that consumer platforms can't deliver."
      />

      {/* Quick Answer Box */}
      <div className="bg-blue-50 border-l-4 border-jet-blue p-6 rounded-r-lg max-w-4xl mx-auto mb-12 shadow-sm">
        <p className="text-sm text-jet-blue font-bold mb-2 uppercase tracking-wide">💡 Quick Answer</p>
        <p className="text-jet-gray text-base leading-relaxed">
          B2B e-commerce development creates wholesale ordering platforms with customer-specific pricing, quote management, purchase order support, and ERP integration. Unlike B2C stores, B2B platforms handle complex pricing tiers, approval workflows, and account-based purchasing. FactoryJet specializes in <strong>Commerceflo</strong>, <strong>Shopify Plus B2B</strong>, <strong>Adobe Commerce B2B</strong>, <strong>OroCommerce</strong>, and custom wholesale solutions.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
        <div>
          <h3 className="text-2xl font-bold font-heading mb-6 text-jet-dark">B2B Features We Build</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
               <div className="font-bold flex items-center gap-2 text-jet-dark"><CreditCard className="h-5 w-5 text-jet-blue flex-shrink-0"/> Pricing & Catalogs</div>
               <ul className="text-sm text-jet-gray space-y-2 ml-7">
                 <li>• Customer-specific pricing</li>
                 <li>• Tiered/volume pricing</li>
                 <li>• Custom catalogs by account</li>
                 <li>• Contract pricing</li>
               </ul>
            </div>
            <div className="space-y-3">
               <div className="font-bold flex items-center gap-2 text-jet-dark"><Building2 className="h-5 w-5 text-jet-blue flex-shrink-0"/> Account Mgmt</div>
               <ul className="text-sm text-jet-gray space-y-2 ml-7">
                 <li>• Company accounts (Parent/Child)</li>
                 <li>• Multiple buyer roles & permissions</li>
                 <li>• Approval workflows</li>
                 <li>• Payment terms (Net 30/60/90)</li>
               </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm mb-6">
             <h4 className="font-bold mb-3 text-jet-dark text-sm uppercase tracking-wide">B2B Case Study Highlight</h4>
             <p className="text-sm font-bold text-jet-blue mb-1">Manufacturing Distributor B2B Portal</p>
             <p className="text-sm text-jet-gray mb-3">Legacy phone ordering to Commerceflo AI-Native Platform.</p>
             <div className="flex flex-wrap gap-4 text-xs font-bold text-jet-green">
               <span>📈 +68% Online Orders</span>
               <span>⏱️ -96% Processing Time</span>
             </div>
          </div>

          <Button className="w-full sm:w-auto" onClick={() => openForm('B2B Portal Development')}>Build Your B2B Portal →</Button>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <h4 className="font-bold mb-4 border-b pb-2 text-jet-dark">B2B Platform Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm whitespace-nowrap md:whitespace-normal">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="pb-2 pr-4">Feature</th>
                    <th className="pb-2 pr-4">Commerceflo</th>
                    <th className="pb-2 pr-4">Shopify B2B</th>
                    <th className="pb-2">Adobe Commerce</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="py-2 font-medium">Customer Pricing</td><td className="text-jet-green">✅ Native & AI</td><td className="text-jet-green">✅ Native</td><td>✅ Native</td></tr>
                  <tr><td className="py-2 font-medium">Quote Mgmt</td><td className="text-jet-green">✅ Native</td><td className="text-yellow-600">⚠️ App Req</td><td>✅ Built-in</td></tr>
                  <tr><td className="py-2 font-medium">Purchase Orders</td><td className="text-jet-green">✅ Native</td><td className="text-yellow-600">⚠️ Limited</td><td>✅ Native</td></tr>
                  <tr><td className="py-2 font-medium">Approval Workflows</td><td className="text-jet-green">✅ Yes</td><td className="text-red-500">❌ No</td><td>✅ Yes</td></tr>
                  <tr><td className="py-2 font-medium">Starting Price</td><td>Flexible</td><td>$2,500/mo</td><td>$22K+/yr</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded border text-center">
                <div className="text-2xl md:text-3xl font-bold text-jet-dark">$26T</div>
                <div className="text-xs text-jet-gray">Global B2B E-Commerce</div>
             </div>
             <div className="bg-white p-4 rounded border text-center">
                <div className="text-2xl md:text-3xl font-bold text-jet-dark">75%</div>
                <div className="text-xs text-jet-gray">Buyers Prefer Online</div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const MobileCommerce: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <Section id="mobile" className="bg-white">
      <SectionHeader 
        eyebrow="MOBILE COMMERCE SOLUTIONS" 
        title="E-Commerce App Development" 
        subtitle="Mobile commerce is $2.51 trillion—59% of all e-commerce. Apps convert 3-4x better than mobile web."
      />

      {/* Quick Answer Box */}
      <div className="bg-blue-50 border-l-4 border-jet-blue p-6 rounded-r-lg max-w-4xl mx-auto mb-12 shadow-sm">
        <p className="text-sm text-jet-blue font-bold mb-2 uppercase tracking-wide">💡 Quick Answer</p>
        <p className="text-jet-gray text-base leading-relaxed">
          Mobile commerce (mCommerce) app development creates native iOS, Android, or cross-platform shopping applications delivering superior mobile experiences. With 77% of retail traffic from mobile devices, dedicated apps increase conversion 3-4x compared to mobile web. FactoryJet builds <strong>React Native</strong>, <strong>Flutter</strong>, and native mobile commerce apps with push notifications, mobile payments, and offline capabilities.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 border border-slate-200 rounded-lg hover:border-jet-blue transition group bg-slate-50">
          <Smartphone className="h-10 w-10 text-jet-blue mb-4 group-hover:scale-110 transition flex-shrink-0" />
          <h3 className="text-xl font-bold mb-2 text-jet-dark">Native iOS/Android</h3>
          <p className="text-sm text-jet-gray mb-4">Swift, Kotlin. Best performance, full device features (Apple Pay, Biometrics). Best for premium experiences.</p>
          <span className="text-xs font-bold text-jet-blue">Timeline: 8-16 weeks</span>
        </div>
        <div className="p-6 border border-slate-200 rounded-lg hover:border-jet-blue transition group bg-slate-50">
          <Zap className="h-10 w-10 text-jet-orange mb-4 group-hover:scale-110 transition flex-shrink-0" />
          <h3 className="text-xl font-bold mb-2 text-jet-dark">Cross-Platform</h3>
          <p className="text-sm text-jet-gray mb-4">React Native, Flutter. Single codebase, 40-60% cost savings. Faster development.</p>
          <span className="text-xs font-bold text-jet-orange">Timeline: 6-12 weeks</span>
        </div>
        <div className="p-6 border border-slate-200 rounded-lg hover:border-jet-blue transition group bg-slate-50">
          <Globe2 className="h-10 w-10 text-jet-green mb-4 group-hover:scale-110 transition flex-shrink-0" />
          <h3 className="text-xl font-bold mb-2 text-jet-dark">PWA</h3>
          <p className="text-sm text-jet-gray mb-4">Progressive Web Apps. No app store required, instant updates, lowest cost.</p>
          <span className="text-xs font-bold text-jet-green">Timeline: 3-6 weeks</span>
        </div>
      </div>
      
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 max-w-4xl mx-auto mb-10">
        <h4 className="font-bold mb-4 text-center text-jet-dark">App vs Mobile Web Performance</h4>
        <div className="grid grid-cols-3 gap-2 md:gap-4 text-center text-sm">
           <div className="p-2 font-bold text-slate-500 text-xs md:text-sm">Metric</div>
           <div className="p-2 font-bold text-jet-blue text-xs md:text-sm">Mobile App</div>
           <div className="p-2 font-bold text-slate-500 text-xs md:text-sm">Mobile Web</div>
           
           <div className="p-2 border-t">Conversion Rate</div>
           <div className="p-2 border-t font-bold text-jet-green">3-4%</div>
           <div className="p-2 border-t">1-2%</div>

           <div className="p-2 border-t">Session Duration</div>
           <div className="p-2 border-t font-bold text-jet-green">4.2 min</div>
           <div className="p-2 border-t">1.8 min</div>

           <div className="p-2 border-t">Push Notifications</div>
           <div className="p-2 border-t font-bold text-jet-green">✅ Yes</div>
           <div className="p-2 border-t">⚠️ Limited</div>
        </div>
      </div>

      <div className="text-center">
        <Button className="w-full sm:w-auto" onClick={() => openForm('Mobile App Development')}>Build Your E-Commerce App →</Button>
      </div>
    </Section>
  );
};

export const SocialCommerce: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <Section id="social" className="bg-slate-900" dark>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-xs md:text-sm font-bold tracking-wider uppercase mb-2 block text-jet-orange">SOCIAL COMMERCE SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white tracking-tight">
            TikTok Shop & Social Integration
          </h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            Social commerce hits $87 billion in 2026. TikTok Shop alone: $15.82 billion with 407% growth. Sell where customers scroll.
          </p>

          {/* Quick Answer Box (Dark Mode) */}
          <div className="bg-slate-800 border-l-4 border-jet-green p-6 rounded-r-lg mb-8">
            <p className="text-sm text-jet-green font-bold mb-2 uppercase tracking-wide">💡 Quick Answer</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Social commerce development integrates your e-commerce store with <strong>TikTok Shop</strong>, <strong>Instagram Shopping</strong>, <strong>Facebook Marketplace</strong>, and <strong>Pinterest Shopping</strong>. It includes product catalog sync, in-app checkout setup, livestream shopping capabilities, and creator/affiliate program management.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
             <div className="bg-slate-800 p-4 rounded-lg">
               <div className="text-2xl md:text-3xl font-bold text-white mb-1">407%</div>
               <div className="text-sm text-slate-400">TikTok Shop Growth</div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg">
               <div className="text-2xl md:text-3xl font-bold text-white mb-1">10-15%</div>
               <div className="text-sm text-slate-400">Livestream Conversion</div>
             </div>
          </div>
          <Button variant="primary" className="w-full sm:w-auto" onClick={() => openForm('Social Commerce Integration')}>Launch Social Commerce →</Button>
        </div>
        <div className="grid gap-4">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
             <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg"><Users className="text-jet-green flex-shrink-0"/> Services</h4>
             <ul className="space-y-4 text-slate-300 text-sm">
               <li className="flex gap-2"><span className="text-jet-green flex-shrink-0">✅</span> <span><strong>TikTok Shop Integration:</strong> Shop setup, catalog sync, affiliate program, livestream config.</span></li>
               <li className="flex gap-2"><span className="text-jet-green flex-shrink-0">✅</span> <span><strong>Instagram Shopping:</strong> Product tagging, Commerce Manager, In-app checkout.</span></li>
               <li className="flex gap-2"><span className="text-jet-green flex-shrink-0">✅</span> <span><strong>Facebook Commerce:</strong> Shop storefront, Marketplace listings, Messenger commerce.</span></li>
               <li className="flex gap-2"><span className="text-jet-green flex-shrink-0">✅</span> <span><strong>Livestream Shopping:</strong> Real-time product tagging, inventory sync during lives.</span></li>
             </ul>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
             <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">Case Study: Beauty Brand</h4>
             <p className="text-slate-400 text-sm mb-2">TikTok Shop launch with Shopify sync.</p>
             <p className="text-xl font-bold text-white">$180K/mo Social Revenue</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const HeadlessCommerce: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <Section id="headless" className="bg-white">
       <SectionHeader 
        eyebrow="HEADLESS COMMERCE ARCHITECTURE" 
        title="Headless & Composable Commerce: MACH Architecture" 
        subtitle="Headless commerce market reaches $7.16 billion by 2032. 73% of enterprises are already headless."
      />

      {/* Quick Answer Box */}
      <div className="bg-blue-50 border-l-4 border-jet-blue p-6 rounded-r-lg max-w-4xl mx-auto mb-12 shadow-sm">
        <p className="text-sm text-jet-blue font-bold mb-2 uppercase tracking-wide">💡 Quick Answer</p>
        <p className="text-jet-gray text-base leading-relaxed">
          Headless commerce separates the frontend presentation layer from the backend e-commerce engine, connected via APIs. This enables custom frontends on any framework (React, Next.js, Vue), omnichannel experiences, and best-of-breed architecture. <strong>Composable commerce</strong> extends this with <strong>MACH principles</strong>: Microservices, API-first, Cloud-native, Headless. FactoryJet builds headless solutions on <strong>Shopify Hydrogen</strong>, <strong>BigCommerce Catalyst</strong>, <strong>Medusa.js</strong>, and <strong>commercetools</strong>.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
           <h3 className="text-2xl font-heading font-bold mb-6 text-jet-dark">MACH Architecture Explained</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                 <div className="font-bold text-jet-blue mb-1 flex items-center gap-2"><Database className="h-4 w-4 flex-shrink-0"/> Microservices</div>
                 <p className="text-xs text-jet-gray">Independent, modular services deployed separately.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                 <div className="font-bold text-jet-blue mb-1 flex items-center gap-2"><Server className="h-4 w-4 flex-shrink-0"/> API-First</div>
                 <p className="text-xs text-jet-gray">All functionality exposed through APIs.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                 <div className="font-bold text-jet-blue mb-1 flex items-center gap-2"><Globe2 className="h-4 w-4 flex-shrink-0"/> Cloud-Native</div>
                 <p className="text-xs text-jet-gray">SaaS leveraging cloud infrastructure.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                 <div className="font-bold text-jet-blue mb-1 flex items-center gap-2"><Layout className="h-4 w-4 flex-shrink-0"/> Headless</div>
                 <p className="text-xs text-jet-gray">Frontend decoupled from backend.</p>
              </div>
           </div>
        </div>
        <div>
           <h3 className="text-2xl font-heading font-bold mb-6 text-jet-dark">Traditional vs Headless</h3>
           <div className="overflow-x-auto border rounded-lg">
             <table className="w-full text-sm whitespace-nowrap md:whitespace-normal">
                <thead className="bg-slate-100 text-jet-dark">
                  <tr>
                     <th className="p-3 text-left">Aspect</th>
                     <th className="p-3 text-left">Traditional</th>
                     <th className="p-3 text-left">Headless</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-jet-gray">
                   <tr><td className="p-3 font-medium">Frontend</td><td className="p-3">Platform Templates</td><td className="p-3 font-bold text-jet-green">Any Framework</td></tr>
                   <tr><td className="p-3 font-medium">Performance</td><td className="p-3">Limited</td><td className="p-3 font-bold text-jet-green">Optimized</td></tr>
                   <tr><td className="p-3 font-medium">Customization</td><td className="p-3">Constraints</td><td className="p-3 font-bold text-jet-green">Unlimited</td></tr>
                   <tr><td className="p-3 font-medium">Scalability</td><td className="p-3">Ceiling</td><td className="p-3 font-bold text-jet-green">Infinite</td></tr>
                </tbody>
             </table>
           </div>
        </div>
      </div>
      
      <div className="text-center">
         <Button className="w-full sm:w-auto" onClick={() => openForm('Headless Commerce')}>Go Headless →</Button>
      </div>
    </Section>
  );
};

export const CrossBorderOmnichannel: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <Section className="bg-slate-50">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Cross Border */}
        <div>
          <div className="mb-6">
            <span className="text-xs md:text-sm font-bold text-jet-blue uppercase tracking-wider">INTERNATIONAL E-COMMERCE</span>
            <h2 className="text-3xl font-heading font-bold mt-2 text-jet-dark tracking-tight">Cross-Border Expansion</h2>
          </div>
          
          {/* Quick Answer Box */}
          <div className="bg-white border-l-4 border-jet-blue p-4 rounded-r shadow-sm mb-6">
            <p className="text-xs text-jet-blue font-bold mb-1 uppercase">💡 Quick Answer</p>
            <p className="text-jet-gray text-sm leading-relaxed">
               Cross-border e-commerce development enables selling internationally with multi-currency checkout, local payment methods, duties (DDP), and international shipping. We implement <strong>Shopify Markets</strong>, <strong>Global-e</strong>, and <strong>BigCommerce</strong> solutions.
            </p>
          </div>

          <p className="text-jet-gray mb-6 leading-relaxed">
            Cross-border e-commerce reaches $20 trillion by 2033. Expand globally without the complexity.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <Globe2 className="h-6 w-6 text-jet-blue flex-shrink-0" />
              <div>
                <h4 className="font-bold text-jet-dark">Currency & Pricing</h4>
                <p className="text-sm text-jet-gray">Multi-currency (100+), Local pricing strategies, Dynamic conversion.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CreditCard className="h-6 w-6 text-jet-blue flex-shrink-0" />
              <div>
                <h4 className="font-bold text-jet-dark">Payments & Duties</h4>
                <p className="text-sm text-jet-gray">Local methods (iDEAL, Klarna), Landed cost (DDP), VAT/GST compliance.</p>
              </div>
            </div>
             <div className="flex gap-4">
              <Truck className="h-6 w-6 text-jet-blue flex-shrink-0" />
              <div>
                <h4 className="font-bold text-jet-dark">Logistics</h4>
                <p className="text-sm text-jet-gray">International carrier integration, Returns management.</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => openForm('International Expansion')}>Expand Globally →</Button>
        </div>

        {/* Omnichannel */}
        <div>
          <div className="mb-6">
            <span className="text-xs md:text-sm font-bold text-jet-orange uppercase tracking-wider">OMNICHANNEL SOLUTIONS</span>
            <h2 className="text-3xl font-heading font-bold mt-2 text-jet-dark tracking-tight">Unified Commerce</h2>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white border-l-4 border-jet-orange p-4 rounded-r shadow-sm mb-6">
            <p className="text-xs text-jet-orange font-bold mb-1 uppercase">💡 Quick Answer</p>
            <p className="text-jet-gray text-sm leading-relaxed">
               Omnichannel commerce development creates unified shopping experiences across website, app, marketplaces (Amazon, Walmart), and physical stores (POS). Unify inventory and customer data for 89% higher retention.
            </p>
          </div>

          <p className="text-jet-gray mb-6 leading-relaxed">
            Omnichannel customers purchase 70% more often and spend 34% more. Unify your commerce experience.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded border shadow-sm">
              <h4 className="font-bold mb-1 text-jet-dark">Unified Inventory</h4>
              <p className="text-xs text-jet-gray">Real-time sync across all channels & locations.</p>
            </div>
            <div className="bg-white p-4 rounded border shadow-sm">
              <h4 className="font-bold mb-1 text-jet-dark">Marketplaces</h4>
              <p className="text-xs text-jet-gray">Amazon, Walmart, eBay integration.</p>
            </div>
            <div className="bg-white p-4 rounded border shadow-sm">
              <h4 className="font-bold mb-1 text-jet-dark">POS Integration</h4>
              <p className="text-xs text-jet-gray">Shopify POS, Square, Clover, Lightspeed.</p>
            </div>
             <div className="bg-white p-4 rounded border shadow-sm">
              <h4 className="font-bold mb-1 text-jet-dark">Order Hub</h4>
              <p className="text-xs text-jet-gray">Centralized order routing & management.</p>
            </div>
          </div>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => openForm('Omnichannel Strategy')}>Unify Your Commerce →</Button>
        </div>
      </div>
    </Section>
  );
};