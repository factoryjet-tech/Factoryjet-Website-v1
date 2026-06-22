
import React from 'react';
import { Monitor, ShoppingBag, Zap, CreditCard, Users } from 'lucide-react';

interface ServicesProps {
  onCtaClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onCtaClick }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-jet-blue font-bold text-sm uppercase tracking-widest mb-4 block">What We Do</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-jet-navy mb-4 md:mb-6">
            Everything Ahmedabad SMBs Need to Grow Online
          </h2>
          <p className="text-lg text-jet-slate">
            We specialize in high-performance websites and revenue-generating e-commerce stores&mdash;with all India payment integrations built-in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-20">
          {/* Card 1 */}
          <div
            onClick={onCtaClick}
            className="group bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-jet-light shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 group-hover:scale-125 transition-transform" />

            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-jet-blue text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-blue-200">
                <Monitor size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-jet-navy mb-4">Website Design & Development</h3>
              <p className="text-jet-slate mb-8 leading-relaxed">
                Custom, mobile-responsive websites built for Ahmedabad businesses. From corporate sites to landing pages, we deliver in 4 weeks flat.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Mobile-First Design (85% of visitors)',
                  'Local SEO + Google My Business Setup',
                  'Fast Loading (<2s on Indian networks)',
                  'SSL Security + Daily Backups'
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-jet-navy">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-jet-blue">&#10003;</div>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">WordPress</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Webflow</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Next.js</span>
              </div>

              <div className="flex items-baseline justify-between border-t border-jet-light pt-5 md:pt-6">
                <span className="text-jet-gray text-sm font-medium">Starting from</span>
                <span className="text-3xl font-bold text-jet-navy">&#8377;24,999</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={onCtaClick}
            className="group bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-jet-light shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 group-hover:scale-125 transition-transform" />

            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-jet-orange text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-orange-200">
                <ShoppingBag size={32} />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-jet-navy mb-4">E-Commerce Store Development</h3>
              <p className="text-jet-slate mb-8 leading-relaxed">
                Full-featured online stores with UPI, Razorpay, and all Indian payment gateways. Start selling to Ahmedabad and all of India.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'UPI + Razorpay + All Payment Modes',
                  'Shiprocket + Delhivery Integration',
                  'Inventory Management Built-in',
                  'WhatsApp Order Notifications'
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-jet-navy">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center text-jet-orange">&#10003;</div>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Shopify</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">WooCommerce</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">Custom</span>
              </div>

              <div className="flex items-baseline justify-between border-t border-jet-light pt-5 md:pt-6">
                <span className="text-jet-gray text-sm font-medium">Starting from</span>
                <span className="text-3xl font-bold text-jet-navy">&#8377;44,999</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature strip */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <div className="flex gap-4 p-5 md:p-6 bg-jet-white rounded-2xl border border-jet-light">
            <Zap className="text-jet-blue flex-shrink-0" />
            <div>
              <h4 className="font-bold text-jet-navy">4-Week Delivery</h4>
              <p className="text-xs text-jet-slate mt-1">Faster than any CG Road agency. Guaranteed.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 md:p-6 bg-jet-white rounded-2xl border border-jet-light">
            <CreditCard className="text-jet-orange flex-shrink-0" />
            <div>
              <h4 className="font-bold text-jet-navy">All India Payments</h4>
              <p className="text-xs text-jet-slate mt-1">UPI, GPay, Razorpay&mdash;all included free.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 md:p-6 bg-jet-white rounded-2xl border border-jet-light">
            <Users className="text-jet-green flex-shrink-0" />
            <div>
              <h4 className="font-bold text-jet-navy">Ahmedabad-Based Team</h4>
              <p className="text-xs text-jet-slate mt-1">Local support. Meet us in Navrangpura.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
