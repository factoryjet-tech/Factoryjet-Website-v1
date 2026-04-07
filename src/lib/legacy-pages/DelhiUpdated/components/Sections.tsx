import React, { useState } from 'react';
import { trackWhatsAppConversion } from '@/utils/gtm';
import {
  Check, Star, MapPin, ArrowRight, Clock, Shield, Globe,
  Smartphone, BarChart3, Users, Zap, Layout, Code2,
  Building2, ShoppingCart, ShoppingBag, PenTool, RefreshCw,
  Settings, Palette, Store, Server, Phone, CheckCircle2, MessageCircle, ChevronRight, ChevronDown, Plus, Minus
} from 'lucide-react';
import { 
  HERO_CONTENT, TRUST_INDICATORS, SOCIAL_PROOF_STATS, 
  ABOUT_CONTENT, PROBLEMS, SOLUTIONS, SERVICES, 
  PRICING_PLANS, INDUSTRIES, FAQS, FOOTER_SEO_PARAGRAPH 
} from '../data.constants';

// --- Components ---

export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', businessType: '', budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been received. We will contact you within 2 hours.');
  };

  return (
    <section id="hero" className="relative pt-24 pb-8 lg:pt-28 lg:pb-16 overflow-hidden bg-hero-gradient">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-white space-y-4 lg:space-y-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jet-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-jet-green"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide text-blue-50">{HERO_CONTENT.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight drop-shadow-sm text-left">
              {HERO_CONTENT.title}
            </h1>

            <div className="border-l-4 border-jet-orange pl-4 lg:pl-5 py-1">
                <h2 className="text-base sm:text-xl text-blue-50 font-light leading-relaxed">
                  {HERO_CONTENT.subheadline}
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-1 w-full">
              {TRUST_INDICATORS.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 group">
                  <div className="bg-white/10 p-1 rounded-full group-hover:bg-jet-green transition-colors flex-shrink-0">
                    <CheckCircle2 className="text-jet-green group-hover:text-white h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium text-blue-100 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-full sm:flex-row gap-3 pt-3 lg:pt-4">
              <button className="bg-jet-orange hover:bg-jet-orange-dark text-white px-6 py-3.5 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_15px_30px_rgba(255,107,53,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center group w-full sm:w-auto min-h-[48px]">
                Get Free Quote Today 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://wa.me/919699977699" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center w-full sm:w-auto min-h-[48px]">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Form - Glassmorphism */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card p-5 lg:p-6 rounded-2xl relative overflow-hidden border border-white/20 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-jet-blue to-jet-orange"></div>
                <div className="text-center mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 font-heading">Get Free Consultation</h3>
                  <p className="text-blue-100 text-xs lg:text-sm opacity-90">Custom proposal in 2 hours. Starts at ₹29,999.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="group">
                    <input 
                      type="text" name="name" placeholder="Full Name" required 
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy placeholder-gray-400 font-medium transition-all group-hover:bg-white min-h-[42px] text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="tel" name="phone" placeholder="Phone Number (+91)" required 
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy placeholder-gray-400 font-medium transition-all group-hover:bg-white min-h-[42px] text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="email" name="email" placeholder="Email Address" required 
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy placeholder-gray-400 font-medium transition-all group-hover:bg-white min-h-[42px] text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <select name="businessType" className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy font-medium transition-all group-hover:bg-white appearance-none min-h-[42px] text-sm" onChange={handleChange}>
                      <option value="">Select Business Type</option>
                      <option value="startup">Startup / Tech Company</option>
                      <option value="ecommerce">E-Commerce / D2C Brand</option>
                      <option value="enterprise">Enterprise / Corporate</option>
                      <option value="manufacturing">Manufacturing Company</option>
                      <option value="professional">Professional Services</option>
                      <option value="healthcare">Healthcare / Clinic</option>
                      <option value="realestate">Real Estate</option>
                      <option value="education">Educational Institution</option>
                      <option value="restaurant">Restaurant / Hospitality</option>
                      <option value="other">Other Business</option>
                    </select>
                  </div>
                  <div className="group">
                    <select name="budget" className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy font-medium transition-all group-hover:bg-white appearance-none min-h-[42px] text-sm" onChange={handleChange}>
                      <option value="">Select Budget Range</option>
                      <option value="under50k">Under ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
                      <option value="above250k">Above ₹2,50,000</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full bg-jet-blue hover:bg-jet-blue-light text-white font-bold py-3 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-95 text-lg flex items-center justify-center min-h-[48px]">
                    Get Free Quote Now
                  </button>
                  
                  <div className="text-[10px] text-center text-blue-200 mt-2 flex items-center justify-center gap-1 opacity-80">
                    <Shield size={12} /> 
                    <span>100% Secure. No spam guaranteed.</span>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroDescription = () => (
  <section className="bg-white py-12 lg:py-24 border-b border-gray-100 relative overflow-hidden">
     <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gray-50 rounded-full opacity-50 z-0"></div>
     <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full opacity-50 z-0"></div>
     
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-slate-700 text-base md:text-lg lg:text-xl leading-7 md:leading-9 font-light space-y-4 lg:space-y-6">
                 {HERO_CONTENT.paragraph.split('\n\n').map((paragraph, index) => (
                    <p key={index} className={`${index === 0 ? 'first-letter:text-4xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-jet-blue first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left' : ''}`}>
                        {paragraph}
                    </p>
                 ))}
            </div>
        </div>
     </div>
  </section>
);

export const SocialProof = () => (
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
      {/* Mobile: Vertical Stack / Desktop: Grid */}
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

export const AboutBlock = () => {
  // Function to highlight keywords without changing the core content string
  const highlightContent = (text: string) => {
    // This is a simplified visual enhancement. 
    // In a real scenario, we might parse this. 
    // Here we wrap the whole text in a visually dazzling container as requested.
    return text.split('\n\n').map((p, i) => (
      <p key={i} className="mb-6 last:mb-0 relative z-10">
        {p}
      </p>
    ));
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-10 lg:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">About FactoryJet — Website Design Company in Delhi NCR</h2>
        </div>
        
        {/* Visual Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-lg mb-4 text-jet-blue flex items-center">
              <Building2 className="w-5 h-5 mr-2" /> Company Info
            </h3>
            <ul className="space-y-3 text-sm text-slate">
              {ABOUT_CONTENT.column1.map((item, idx) => <li key={idx} className="flex items-start border-l-2 border-gray-100 pl-3">{item}</li>)}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-lg mb-4 text-jet-blue flex items-center">
              <Zap className="w-5 h-5 mr-2" /> Core Capabilities
            </h3>
            <ul className="space-y-3 text-sm text-slate">
               {ABOUT_CONTENT.column2.map((item, idx) => (
                 <li key={idx} className="flex items-start"><Check className="h-4 w-4 text-jet-green mr-2 mt-0.5 flex-shrink-0" />{item}</li>
               ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-lg mb-4 text-jet-blue flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> Service Areas
            </h3>
            <ul className="space-y-3 text-sm text-slate">
              {ABOUT_CONTENT.column3.map((item, idx) => <li key={idx} className="flex items-start border-l-2 border-gray-100 pl-3">{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Visually Dazzling Keyword-Dense Paragraph Block */}
        <div className="relative rounded-3xl overflow-hidden bg-navy text-white shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-jet-blue opacity-20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-jet-orange opacity-20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="prose prose-lg prose-invert max-w-none text-blue-50 leading-relaxed font-light">
               {/* 
                  Highlighting keywords logic can be complex in React without dangerouslySetInnerHTML. 
                  For safety and performance, we style the container brilliantly and use specific typography.
                  The content is dense with keywords as provided in constants.ts. 
                */}
               <div className="text-lg md:text-xl lg:text-2xl font-sans font-light tracking-wide text-justify">
                  {ABOUT_CONTENT.paragraph.split('\n\n').map((p, i) => (
                    <p key={i} className="mb-8 last:mb-0 border-l-4 border-jet-orange pl-6">
                      {p}
                    </p>
                  ))}
               </div>
            </div>
            
            {/* Call to Action integrated in the block */}
            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">Ready to scale?</p>
                <p className="text-xl font-heading font-bold text-white">Let's build your digital empire.</p>
              </div>
              <button className="bg-white text-navy hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center">
                Start Project <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export const ProblemSection = () => (
  <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">The Digital Challenge Facing Delhi NCR Businesses</h2>
        <p className="text-base lg:text-lg text-slate">Why 55% of Delhi NCR Businesses Are Losing Crores to Competitors with Better Websites</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROBLEMS.map((item, idx) => (
          <div key={idx} className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col md:block">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
              <item.icon className="h-6 w-6 lg:h-7 lg:w-7 text-red-500" />
            </div>
            <div>
               <h3 className="text-lg lg:text-xl font-bold text-navy mb-2 lg:mb-3">{item.title}</h3>
               <p className="text-slate text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SolutionSection = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">The FactoryJet Solution</h2>
        <p className="text-base lg:text-lg text-slate">How We Transform Delhi NCR Businesses Into Digital Leaders</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SOLUTIONS.map((item, idx) => (
          <div key={idx} className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-t-4 border-jet-blue hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
              <item.icon className="h-6 w-6 lg:h-7 lg:w-7 text-jet-blue" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-navy mb-2 lg:mb-3">{item.title}</h3>
            <p className="text-slate text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServicesSection = () => (
  <section id="services" className="py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">Website Design & Development Services</h2>
        <p className="text-base lg:text-lg text-slate">Comprehensive Web Solutions for Startups, SMBs, Enterprises & D2C Brands</p>
      </div>
      {/* Mobile: 1 Col Stack / Desktop: 3 Col Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-jet-blue/10 rounded-lg flex items-center justify-center text-jet-blue flex-shrink-0">
                <service.icon size={24} />
              </div>
              <div className="text-right">
                <div className="font-bold text-jet-blue text-sm lg:text-base">{service.price}</div>
                <div className="text-xs text-gray-500">{service.timeline}</div>
              </div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-navy mb-3">{service.title}</h3>
            <p className="text-slate text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="text-xs text-gray-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-jet-green rounded-full mr-2 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-400 uppercase">Best For:</span>
              <p className="text-xs font-medium text-navy mt-1">{service.bestFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(PRICING_PLANS[0].id);

  const activePlan = PRICING_PLANS.find(p => p.id === activeTab) || PRICING_PLANS[0];

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            Transparent, <span className="text-jet-blue">Value-Driven</span> Pricing
          </h2>
          <p className="text-slate text-base lg:text-lg">
            Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence.
          </p>
        </div>

        {/* Tab Switcher */}
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

        {/* Pricing Cards - Stack on Mobile */}
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
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-jet-blue text-white text-center text-[10px] lg:text-xs font-bold py-1.5 rounded-t-xl uppercase tracking-wider">
                  Most Popular Choice
                </div>
              )}

              <div className={`p-6 lg:p-8 ${tier.popular ? 'pt-8 lg:pt-10' : ''} flex-grow`}>
                {/* Header Info */}
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

                {/* Features List */}
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

export const IndustriesSection = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">Industries We Serve in Delhi NCR</h2>
      </div>
      {/* Mobile: Stacked / Small Tablet: 2 Col / Desktop: 5 Col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        {INDUSTRIES.map((ind, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-gray-100 group">
            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <ind.icon className="text-jet-blue" size={24} />
            </div>
            <h3 className="font-bold text-navy mb-2">{ind.title}</h3>
            <p className="text-xs text-slate mb-3">{ind.description}</p>
            <div className="text-xs font-semibold text-jet-orange">{ind.stats}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-base lg:text-lg text-slate">Everything You Need to Know About Website Development in Delhi NCR</p>
        </div>
        
        {/* Split into 2 columns for better readability and reduced overload */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column - First half */}
          <div className="space-y-4">
            {FAQS.slice(0, Math.ceil(FAQS.length / 2)).map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${
                  openIndex === idx ? 'border-jet-blue ring-1 ring-jet-blue shadow-md' : 'border-gray-100 hover:border-jet-blue/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-jet-orange font-bold text-lg hidden sm:block">Q.</span>
                    <span className="font-bold text-navy text-sm sm:text-base pr-4">{faq.question}</span>
                  </div>
                  {openIndex === idx ? (
                    <Minus className="h-5 w-5 text-jet-blue flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate text-sm leading-relaxed pl-0 sm:pl-7 border-l-2 border-gray-100 ml-1 sm:ml-0">
                    {faq.answer}
                  </p>
                  <div className="mt-3 pl-0 sm:pl-7 ml-1 sm:ml-0">
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Second half */}
          <div className="space-y-4">
            {FAQS.slice(Math.ceil(FAQS.length / 2)).map((faq, idx) => {
              const adjustedIdx = idx + Math.ceil(FAQS.length / 2);
              return (
                <div 
                  key={adjustedIdx} 
                  className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${
                    openIndex === adjustedIdx ? 'border-jet-blue ring-1 ring-jet-blue shadow-md' : 'border-gray-100 hover:border-jet-blue/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(adjustedIdx)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-jet-orange font-bold text-lg hidden sm:block">Q.</span>
                      <span className="font-bold text-navy text-sm sm:text-base pr-4">{faq.question}</span>
                    </div>
                    {openIndex === adjustedIdx ? (
                      <Minus className="h-5 w-5 text-jet-blue flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === adjustedIdx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate text-sm leading-relaxed pl-0 sm:pl-7 border-l-2 border-gray-100 ml-1 sm:ml-0">
                      {faq.answer}
                    </p>
                    <div className="mt-3 pl-0 sm:pl-7 ml-1 sm:ml-0">
                      <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const LocalSEOSection = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4 lg:mb-6">Serving All of Delhi NCR</h2>
          <p className="text-slate mb-6 lg:mb-8 text-sm lg:text-base">Local Website Design Experts with Deep Understanding of NCR's Business Landscape</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Gurgaon</h4>
              <p className="text-sm text-gray-600">Cyber City, Golf Course Rd, DLF, Sohna Rd, Udyog Vihar</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Noida</h4>
              <p className="text-sm text-gray-600">Sector 62, 18, 63, Greater Noida, Film City</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Delhi</h4>
              <p className="text-sm text-gray-600">CP, South Delhi, Nehru Place, Dwarka, Rohini</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Faridabad & Ghaziabad</h4>
              <p className="text-sm text-gray-600">NIT, Industrial Area, Indirapuram, Vaishali</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
             <MapPin className="mr-2 text-jet-orange flex-shrink-0" />
             Office: WeWork, Two Horizon Center, Golf Course Road, Sector 43, Gurugram
          </div>
        </div>
        <div className="h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
           {/* Simulated Map */}
           <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
             <div className="text-center">
               <MapPin size={48} className="mx-auto mb-2 text-gray-300" />
               <p>Google Map Embed: Delhi NCR Region</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);
export const FinalCTA = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-200 via-orange-200 to-blue-200 text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 lg:mb-6">
        Ready to Transform Your Delhi NCR Business Online?
      </h2>
      <p className="text-lg lg:text-xl text-orange-100 mb-8 lg:mb-10 max-w-2xl mx-auto">
        Join 500+ Successful Businesses Who Chose FactoryJet — Get Started in 24 Hours
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 lg:mb-10">
        <button className="bg-white text-orange-600 px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-lg lg:text-xl shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto min-h-[56px]">
          🚀 Get Free Quote Today
        </button>
        <button className="bg-transparent border-2 border-white text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-lg lg:text-xl hover:bg-white/20 transition-all w-full sm:w-auto min-h-[56px]">
          📞 Call Now
        </button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm font-medium text-orange-50">
        <span>✓ 500+ Websites Delivered</span>
        <span>✓ 4.9★ Google Rating</span>
        <span>✓ 7-Day Delivery</span>
        <span>✓ Starts at ₹29,999</span>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-navy text-gray-400 pt-16 lg:pt-20 pb-10 border-t border-gray-800">
    <div className="container mx-auto px-4">
      {/* Mobile: Stacked / Desktop: 4 Col */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
        <div>
          <h3 className="text-white text-2xl font-bold font-heading mb-4 lg:mb-6">FactoryJet</h3>
          <p className="text-sm leading-relaxed mb-6">Delhi NCR's most trusted website design company. We transform businesses into digital powerhouses through professional websites and e-commerce solutions.</p>
          <div className="flex space-x-4">
            {/* Social Icons would go here */}
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 lg:mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {['Home', 'About Us', 'Services', 'Portfolio', 'Case Studies', 'Blog', 'Contact'].map(link => (
              <li key={link}><a href="#" className="hover:text-white transition-colors block py-1">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 lg:mb-6">Our Services</h4>
          <ul className="space-y-3 text-sm">
             <li className="block py-1">Website Design</li>
             <li className="block py-1">WordPress Development</li>
             <li className="block py-1">Shopify E-Commerce</li>
             <li className="block py-1">Custom Web Apps</li>
             <li className="block py-1">UI/UX Design</li>
             <li className="block py-1">Website Redesign</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 lg:mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-jet-orange flex-shrink-0" />
              WeWork, Two Horizon Center, Golf Course Road, Sector 43, Gurugram, Haryana 122002
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-jet-orange flex-shrink-0" />
              +91-999-999-9999
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 mr-3 text-jet-orange flex-shrink-0">@</div>
              delhi@factoryjet.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 lg:pt-10 pb-6">
         <h4 className="text-white font-bold mb-4 text-xs lg:text-sm uppercase tracking-wider">SEO Information</h4>
         <p className="text-xs leading-relaxed text-gray-500 text-justify whitespace-pre-line">
           {FOOTER_SEO_PARAGRAPH}
         </p>
      </div>

      <div className="text-center text-xs text-gray-600 mt-8">
        © 2026 FactoryJet Technologies. All rights reserved. | Privacy Policy | Terms of Service
      </div>
    </div>
  </footer>
);

export const ProcessSection = () => (
  <section id="process" className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">Our Website Development Process</h2>
        <p className="text-base lg:text-lg text-slate">From Concept to Launch in 7-14 Days</p>
      </div>
      {/* Mobile: Vertical Stack / Desktop: 6 Col Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
        {['Discovery', 'Strategy', 'Design', 'Development', 'Testing', 'Launch'].map((step, idx) => (
          <div key={idx} className="relative text-center p-4 bg-gray-50 md:bg-transparent rounded-lg md:rounded-none flex flex-row md:flex-col items-center md:justify-start gap-4 md:gap-0">
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 mx-auto bg-jet-blue text-white rounded-full flex items-center justify-center font-bold text-lg lg:text-xl md:mb-4 shadow-lg z-10 relative">
              {idx + 1}
            </div>
            {idx < 5 && <div className="hidden lg:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-0"></div>}
            <h3 className="font-bold text-navy text-lg md:text-base">{step}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CaseStudiesSection = () => (
  <section id="portfolio" className="py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
       <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">Success Stories: Delhi NCR Businesses Transformed</h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
             <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">Project Image Placeholder</div>
             <div className="p-6 lg:p-8">
                <div className="text-xs font-bold text-jet-orange uppercase mb-2">E-Commerce SaaS</div>
                <h3 className="text-xl lg:text-2xl font-bold text-navy mb-3 lg:mb-4">Commerceflo</h3>
                <p className="text-slate mb-6 text-sm">340% increase in demo requests and first page Google rankings for 25+ keywords after full platform redesign.</p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">Next.js</span>
                   <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">Tailwind</span>
                </div>
             </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
             <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">Project Image Placeholder</div>
             <div className="p-6 lg:p-8">
                <div className="text-xs font-bold text-jet-orange uppercase mb-2">Home Decor E-Commerce</div>
                <h3 className="text-xl lg:text-2xl font-bold text-navy mb-3 lg:mb-4">Belle Maison</h3>
                <p className="text-slate mb-6 text-sm">180% increase in mobile conversions and ₹1.8 Crore monthly revenue after migration to Shopify Plus.</p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">Shopify Plus</span>
                   <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">Migration</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export const TestimonialsSection = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">What Delhi NCR Business Owners Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
         {[
           { name: "Rahul Sharma", role: "Founder, D2C Brand", loc: "Gurgaon", text: "FactoryJet delivered our Shopify store in just 8 days. The design is stunning, and we crossed ₹50 Lakh in sales within the first month." },
           { name: "Vikram Singh", role: "MD, Industrial Mfg", loc: "Faridabad", text: "We had a terrible experience with two agencies before finding FactoryJet. They understood our manufacturing business perfectly." },
           { name: "Dr. Priya Mehta", role: "Dermatologist", loc: "Noida", text: "Our clinic website now ranks #1 for 'dermatologist in Noida.' The patient inquiries have tripled." }
         ].map((t, i) => (
           <div key={i} className="p-6 lg:p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate italic mb-6 text-sm lg:text-base">"{t.text}"</p>
              <div>
                <div className="font-bold text-navy">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role} | {t.loc}</div>
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);