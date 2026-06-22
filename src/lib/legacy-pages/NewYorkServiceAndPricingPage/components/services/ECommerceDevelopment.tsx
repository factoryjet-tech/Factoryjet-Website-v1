import React from 'react';
import { Check } from 'lucide-react';

export default function ECommerceDevelopment() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight font-heading">
            5. E-Commerce Website Development in NYC
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#0052CC] mb-6">
            Online Stores That Actually Sell
          </p>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            New York City's e-commerce market is worth billions. Whether you're selling physical products, digital goods, or services, FactoryJet builds online stores optimized for conversions, not just looking pretty.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h4 className="text-2xl font-bold text-[#0F172A] mb-2 font-heading">Shopify</h4>
            <div className="text-xl font-bold text-[#0052CC] mb-4">$8,000 - $25,000</div>
            <div className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 px-3 py-1 rounded-full text-sm inline-block mb-8 font-medium">Best for: Fast launch, proven platform</div>
            <ul className="space-y-3 text-[#334155]">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> 4-6 week development</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> App integrations</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Payment processing</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Inventory management</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Secure checkout</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Mobile optimized</li>
            </ul>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h4 className="text-2xl font-bold text-[#0F172A] mb-2 font-heading">WooCommerce</h4>
            <div className="text-xl font-bold text-[#0052CC] mb-4">$7,500 - $30,000</div>
            <div className="bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20 px-3 py-1 rounded-full text-sm inline-block mb-8 font-medium">Best for: WordPress users, full control</div>
            <ul className="space-y-3 text-[#334155]">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> 6-10 week development</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Unlimited customization</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Lower ongoing fees</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Complete ownership</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Plugin ecosystem</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Flexible scaling</li>
            </ul>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h4 className="text-2xl font-bold text-[#0F172A] mb-2 font-heading">Custom E-Commerce</h4>
            <div className="text-xl font-bold text-[#0052CC] mb-4">$25,000 - $150,000+</div>
            <div className="bg-[#0052CC]/10 text-[#0052CC] border border-[#0052CC]/20 px-3 py-1 rounded-full text-sm inline-block mb-8 font-medium">Best for: Unique requirements</div>
            <ul className="space-y-3 text-[#334155]">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> 12-24 week development</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Proprietary features</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Complex business logic</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Custom integrations</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Complete control</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0052CC] rounded-full"></div> Competitive advantage</li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h4 className="text-xl font-bold text-[#0F172A] mb-8 font-heading">E-Commerce Features</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Mobile-optimized checkout', 'Multiple payment gateways', 'Inventory management', 'Product variations',
              'Abandoned cart recovery', 'Customer accounts', 'Wishlist functionality', 'Product reviews',
              'Search & filtering', 'Discount codes', 'Email marketing', 'Analytics & reporting',
              'Shipping calculator', 'Tax automation', 'Multi-currency', 'Gift cards'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-[#E2E8F0] hover:shadow-md transition-all">
                <Check className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs font-medium text-[#334155]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}