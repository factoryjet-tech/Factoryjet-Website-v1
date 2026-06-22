import React from 'react';
import { Check, AlertTriangle, TrendingDown, Smartphone, ShoppingCart, Filter, Shield } from 'lucide-react';

export const SocialProof = () => {
  return (
    <section className="py-8 bg-jet-white border-b border-jet-light">
      <div className="container mx-auto px-4">
        <p className="text-center text-jet-gray text-xs md:text-sm font-semibold tracking-wider mb-6 uppercase">Trusted by 500+ Pune Businesses</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-lg md:text-xl font-bold font-heading text-jet-slate">Google Partner</span>
          <span className="text-lg md:text-xl font-bold font-heading text-jet-slate">Shopify</span>
          <span className="text-lg md:text-xl font-bold font-heading text-jet-slate">WordPress VIP</span>
          <span className="text-lg md:text-xl font-bold font-heading text-jet-slate">Razorpay</span>
          <span className="text-lg md:text-xl font-bold font-heading text-jet-slate">AWS</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 text-center border-t border-jet-light pt-8">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-jet-blue font-heading">500+</div>
            <div className="text-[10px] md:text-xs text-jet-gray font-bold uppercase mt-1">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-jet-blue font-heading">₹100Cr+</div>
            <div className="text-[10px] md:text-xs text-jet-gray font-bold uppercase mt-1">Client Revenue</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-jet-blue font-heading">98%</div>
            <div className="text-[10px] md:text-xs text-jet-gray font-bold uppercase mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-jet-blue font-heading">7 Days</div>
            <div className="text-[10px] md:text-xs text-jet-gray font-bold uppercase mt-1">Avg Delivery</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-bold text-jet-blue font-heading">4.9★</div>
            <div className="text-[10px] md:text-xs text-jet-gray font-bold uppercase mt-1">Google Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy mb-8 md:mb-12 text-center">About FactoryJet — Website Design Company in Pune</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-jet-blue font-heading">Company Information</h3>
            <ul className="space-y-3 text-jet-slate text-sm md:text-base">
              <li className="flex justify-between border-b border-jet-light pb-2"><span>Name:</span> <span className="font-semibold text-jet-navy">FactoryJet Technologies</span></li>
              <li className="flex justify-between border-b border-jet-light pb-2"><span>Type:</span> <span className="font-semibold text-jet-navy">Digital Transformation Agency</span></li>
              <li className="flex justify-between border-b border-jet-light pb-2"><span>Experience:</span> <span className="font-semibold text-jet-navy">25+ Years Combined</span></li>
              <li className="flex justify-between border-b border-jet-light pb-2"><span>Rating:</span> <span className="font-semibold text-jet-navy">4.9/5.0</span></li>
              <li className="flex justify-between border-b border-jet-light pb-2"><span>Clients:</span> <span className="font-semibold text-jet-navy">500+ Businesses</span></li>
            </ul>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-jet-blue font-heading">Core Capabilities</h3>
            <ul className="space-y-2 text-jet-slate text-sm md:text-base">
              {[
                "Website Design & Development", "WordPress Website Development", "Shopify Store Development",
                "E-Commerce Design & Development", "Custom Web Apps", "Mobile Responsive Design",
                "UI/UX Design Services", "SEO Optimization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-jet-blue/10 flex items-center justify-center text-jet-blue text-xs font-bold shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-jet-blue font-heading">Why Pune Chooses Us</h3>
            <p className="text-jet-gray leading-relaxed text-sm">
              Pune Metropolitan Region is India's fastest-growing business hub. Yet 60% of Pune businesses operate without professional websites. As a trusted Website Design Company in Pune and a top website development company in Pune, FactoryJet specializes in scalable, performance-driven digital platforms.
            </p>
            <p className="text-jet-gray leading-relaxed text-sm">
              We serve businesses across Greater Pune, including Hinjewadi, Kharadi, Viman Nagar, Magarpatta, Hadapsar, Wakad, Baner, Aundh, Pimpri-Chinchwad, Bhosari, Chakan, and Talegaon.
            </p>
            <div className="flex flex-wrap gap-2">
              {["IT & Software", "Manufacturing", "Startups", "Education"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-jet-light rounded-full text-xs font-medium text-jet-slate">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProblemSection = () => {
  const problems = [
    { icon: AlertTriangle, color: "text-red-500", label: "COST: ₹50K/MONTH LOST", title: "Invisible to Online Customers", desc: "90% of customers search Google before making purchase decisions. If you're not appearing in search results, you don't exist to them." },
    { icon: TrendingDown, color: "text-red-500", label: "COST: 70% CREDIBILITY LOST", title: "No Professional Online Presence", desc: "A Facebook page isn't enough. 75% of people judge a company's credibility based on their website design. You're losing deals before you know." },
    { icon: Smartphone, color: "text-red-500", label: "COST: 78% BUYERS LOST", title: "No Mobile Responsive Site", desc: "78% of Indian internet users browse on mobile. If your website isn't mobile responsive, you're invisible to the majority of your potential customers." },
    { icon: ShoppingCart, color: "text-red-500", label: "COST: ₹10L/YEAR LOST", title: "No E-Commerce Capability", desc: "Indian e-commerce is growing at 25% annually. Competitors on Shopify are capturing customers while you rely on phone orders." },
    { icon: Filter, color: "text-red-500", label: "COST: ZERO LEADS", title: "Dependent on Referrals", desc: "Referrals don't scale. With your own SEO website, you generate leads automatically 24/7. Your website becomes your best salesperson." },
    { icon: Shield, color: "text-red-500", label: "COST: SECURITY RISK", title: "Outdated Technology", desc: "Old websites are vulnerable to hacks. Modern React and secure WordPress development ensure your business data stays safe." }
  ];

  return (
    <section className="py-12 md:py-20 bg-jet-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy mb-3 md:mb-4">Is Your Pune Business Losing Customers Every Day?</h2>
          <p className="text-base md:text-lg text-jet-gray">Without a professional website, Pune businesses lose lakhs in potential revenue. In India's fastest-growing business hub, having no online presence means you don't exist.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((card, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-jet-light border-t-4 border-t-red-500">
              <div className="flex items-center justify-between mb-4">
                <card.icon className={`w-8 h-8 ${card.color}`} />
                <span className="text-[10px] md:text-xs font-bold bg-red-50 text-red-600 px-2 py-1 rounded">{card.label}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-jet-navy mb-3 font-heading">{card.title}</h3>
              <p className="text-jet-gray text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SolutionSection = () => {
  const features = [
    { title: "Pune Business Expertise", desc: "We've built 500+ websites for Hinjewadi IT companies, Kharadi startups, and Chakan manufacturers." },
    { title: "Fast Delivery — 7 Days", desc: "Traditional agencies take 2-4 months. We deliver in 7 days using AI-powered processes." },
    { title: "Mobile Responsive Standard", desc: "Every FactoryJet website works perfectly on phones, tablets, and desktops. No extra charge." },
    { title: "Starts at ₹15,000", desc: "Professional business websites starting at 60-70% cheaper than typical Pune agencies." },
    { title: "E-Commerce Specialists", desc: "Shopify and WooCommerce experts. Payment gateways, shipping, and inventory are integrated." }
  ];

  const comparison = [
    ["Delivery Time", "7 Days", "6-12 Weeks"],
    ["Starting Price", "₹15,000", "₹50,000+"],
    ["Industry Exp", "500+ Clients", "Generic"],
    ["SEO Included", "Yes", "Extra Cost"],
    ["Mobile Ready", "100%", "Sometimes"],
    ["Support (AMC)", "₹2,999/mo", "₹8,000/mo"]
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top-right z-0 hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-jet-blue/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy mb-8 md:mb-12 text-center">How FactoryJet Solves Pune Businesses' Website Problems</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="grid gap-4 md:gap-6">
              {features.map((item, i) => (
                <div key={i} className="group flex gap-4 md:gap-5 p-4 md:p-5 border border-slate-100 rounded-2xl hover:shadow-lg hover:border-jet-blue/20 transition-all bg-white relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-jet-blue scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-jet-blue/10 flex items-center justify-center shrink-0 mt-1 text-jet-blue font-bold group-hover:bg-jet-blue group-hover:text-white transition-colors text-sm md:text-base">✓</div>
                  <div>
                    <h3 className="font-bold text-jet-navy text-base md:text-lg font-heading mb-1">{item.title}</h3>
                    <p className="text-jet-slate text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-jet-gray text-sm leading-relaxed mt-6">As a performance-focused website development company in Pune, we ensure every build supports long-term growth. Our team includes experienced website designers in Pune and skilled website developers in Pune who focus on performance, user experience, and long-term scalability.</p>
          </div>

          <div className="lg:col-span-5 relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-jet-blue to-jet-orange opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-jet-navy/95 backdrop-blur-xl text-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-jet-blue/30 rounded-full blur-[60px] pointer-events-none"></div>

              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center font-heading tracking-tight relative z-10">Why Choose FactoryJet?</h3>

              <div className="space-y-0 text-sm relative z-10">
                <div className="hidden md:grid grid-cols-3 pb-4 mb-4 border-b border-white/10 font-bold text-slate-300 tracking-wider text-xs uppercase">
                  <span>Feature</span>
                  <span className="text-center text-jet-blue">FactoryJet</span>
                  <span className="text-center text-slate-500">Others</span>
                </div>

                {comparison.map(([f, u, o], i) => (
                  <div key={i} className="flex flex-col md:grid md:grid-cols-3 items-start md:items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2 -mx-2 md:mx-0">
                    <span className="text-slate-300 text-xs uppercase font-bold md:hidden mb-1">Feature</span>
                    <span className="text-white font-medium mb-1 md:mb-0 w-full md:w-auto">{f}</span>

                    <div className="flex justify-between w-full md:contents">
                      <div className="flex flex-col md:hidden">
                        <span className="text-jet-blue text-xs uppercase font-bold mb-1">FactoryJet</span>
                        <span className="font-bold text-jet-green drop-shadow-sm">{u}</span>
                      </div>
                      <div className="flex flex-col md:hidden text-right">
                        <span className="text-slate-500 text-xs uppercase font-bold mb-1">Others</span>
                        <span className="text-slate-400">{o}</span>
                      </div>
                    </div>

                    <span className="hidden md:block text-center font-bold text-jet-green drop-shadow-sm">{u}</span>
                    <span className="hidden md:block text-center text-slate-400">{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
