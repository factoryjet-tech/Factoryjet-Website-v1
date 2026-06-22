import React from 'react';

const SOCIAL_PROOF_STATS = [
  { value: "500+", label: "BUSINESS WEBSITES DELIVERED" },
  { value: "₹150 Cr+", label: "CLIENT REVENUE GENERATED" },
  { value: "98%", label: "CLIENT SATISFACTION" },
  { value: "7 Days", label: "AVG DELIVERY TIME" },
  { value: "4.9★", label: "GOOGLE RATING" }
];

const SocialProof: React.FC = () => (
  <section className="bg-gray-50 py-10 lg:py-12 border-b border-gray-200">
    <div className="container mx-auto px-4">
      <div className="text-center mb-6 lg:mb-8">
        <p className="text-slate font-semibold uppercase tracking-wider text-xs md:text-sm">Trusted by 500+ Delhi NCR Businesses</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {['Google Partner', 'Shopify Partners', 'WordPress VIP', 'Razorpay', 'Shiprocket', 'HubSpot'].map((logo) => (
             <span key={logo} className="font-heading font-bold text-lg md:text-xl text-slate w-[45%] md:w-auto text-center">{logo}</span>
           ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {SOCIAL_PROOF_STATS.map((stat, idx) => (
          <div key={idx} className="p-4 md:p-2">
            <div className="text-3xl font-bold text-jet-blue">{stat.value}</div>
            <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center italic text-slate max-w-4xl mx-auto text-sm md:text-base">
        "FactoryJet built our D2C e-commerce website in just 5 days. We launched our Shopify store and crossed ₹1 Crore revenue in the first quarter. Their website design expertise in Delhi NCR is exceptional." — D2C Founder, Gurgaon
      </div>
    </div>
  </section>
);

export default SocialProof;
