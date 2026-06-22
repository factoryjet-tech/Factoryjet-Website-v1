
import React from 'react';
import { MapPin, Clock, IndianRupee, CreditCard, ShieldCheck, Award } from 'lucide-react';

const WhyUs: React.FC = () => {
  const items = [
    { title: "Ahmedabad-Based Team", desc: "Meet us in Navrangpura. WhatsApp anytime. Real humans, not bots.", icon: <MapPin className="text-jet-blue" />, signal: "Visit our office" },
    { title: "4-Week Delivery", desc: "Most agencies take 3-6 months. We deliver in 4 weeks flat.", icon: <Clock className="text-jet-orange" />, signal: "Or your money back" },
    { title: "Transparent Pricing", desc: "No surprise invoices. Know exactly what you pay upfront.", icon: <IndianRupee className="text-jet-green" />, signal: "Starting \u20B924,999" },
    { title: "All India Payments", desc: "UPI, GPay, Razorpay\u2014all integrated free of cost.", icon: <CreditCard className="text-jet-blue" />, signal: "Razorpay Partner" },
    { title: "Ongoing Support", desc: "We don't disappear after launch. AMC starts at \u20B92,499/mo.", icon: <ShieldCheck className="text-jet-orange" />, signal: "WhatsApp support" },
    { title: "Google Partner", desc: "Certified team ensuring your SEO is in expert hands.", icon: <Award className="text-jet-green" />, signal: "Certified Agency" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-jet-navy mb-4">Why 150+ Ahmedabad Businesses Choose FactoryJet</h2>
          <p className="text-jet-slate italic">We're not another faceless agency. We're your local growth partners.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div key={i} className="bg-jet-white p-6 md:p-8 rounded-3xl border border-jet-light group hover:shadow-xl hover:bg-white transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {it.icon}
              </div>
              <h3 className="text-xl font-bold text-jet-navy mb-2">{it.title}</h3>
              <p className="text-sm text-jet-slate mb-6">{it.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-jet-light rounded-full text-[10px] font-bold text-jet-blue uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-jet-blue rounded-full animate-pulse" />
                {it.signal}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
