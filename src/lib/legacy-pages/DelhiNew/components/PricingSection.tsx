import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../data.constants';

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PRICING_PLANS[0].id);
  const activePlan = PRICING_PLANS.find(p => p.id === activeTab) || PRICING_PLANS[0];

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            Transparent, <span className="text-jet-blue">Value-Driven</span> Pricing
          </h2>
          <p className="text-slate text-base lg:text-lg">
            Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence.
          </p>
        </div>

        <div className="flex justify-center mb-8 lg:mb-12 overflow-x-auto py-2 px-4 no-scrollbar">
          <div className="bg-white rounded-full p-1.5 shadow-sm border border-gray-200 inline-flex whitespace-nowrap">
            {PRICING_PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(plan.id)}
                className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 ${
                  activeTab === plan.id
                    ? 'bg-jet-blue text-white shadow-md'
                    : 'text-slate hover:bg-gray-50'
                }`}
              >
                {plan.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {activePlan.tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl flex flex-col ${
                tier.popular
                  ? 'border-jet-blue shadow-lg scale-[1.02] md:scale-105 z-10'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-jet-blue text-white text-center text-[10px] lg:text-xs font-bold py-1.5 rounded-t-xl uppercase tracking-wider">
                  Most Popular Choice
                </div>
              )}

              <div className={`p-6 lg:p-8 ${tier.popular ? 'pt-8 lg:pt-10' : ''} flex-grow`}>
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-jet-blue uppercase tracking-wide mb-1">{tier.name}</h3>
                  <p className="text-xs text-gray-500 mb-4">{tier.tagline}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl lg:text-4xl font-heading font-bold text-navy tracking-tight">{tier.price}</span>
                    <span className="text-[10px] lg:text-xs text-gray-400 ml-1 font-medium">{tier.period}</span>
                  </div>

                  <button className={`w-full py-3 rounded-lg font-bold text-sm transition-colors border min-h-[48px] ${
                    tier.popular
                      ? 'bg-jet-orange hover:bg-jet-orange-dark text-white border-transparent'
                      : 'bg-white hover:bg-gray-50 text-jet-blue border-jet-blue'
                  }`}>
                    {tier.buttonText}
                  </button>
                </div>

                <div className="space-y-6">
                  {tier.categories.map((category, catIdx) => (
                    <div key={catIdx}>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-1">
                        {category.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {category.items.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs text-slate">
                            <Check className="h-3.5 w-3.5 text-jet-green mr-2.5 mt-0.5 flex-shrink-0" strokeWidth={3} />
                            <span className="font-mono">{feature}</span>
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

export default PricingSection;
