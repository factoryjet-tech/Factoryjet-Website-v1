import React from 'react';
import { CheckCircle, ArrowRight, ShieldCheck, Star, Clock, Lock, XCircle, TrendingDown, Smartphone, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data.constants';
import AuthorByline from '@/components/AuthorByline';

// --- Components ---

const LeadCaptureForm = ({ className = "" }: { className?: string }) => (
  <div className={`backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/20 relative overflow-hidden group hover:border-white/30 transition-all duration-500 ${className}`}>
    {/* Top Accent Line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jet-blue via-jet-orange to-jet-green"></div>
    
    <div className="mb-6">
      <h3 className="text-2xl font-heading font-bold text-white mb-2">Get Free Consultation</h3>
      <p className="text-sm text-blue-100/90 font-medium">Custom proposal in 2 hours. <span className="text-jet-green font-bold">100% Free.</span></p>
    </div>

    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-gray-50 text-jet-navy placeholder-gray-500 focus:border-jet-blue focus:ring-4 focus:ring-jet-blue/20 outline-none transition-all font-medium backdrop-blur-sm shadow-inner" 
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          required 
          className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-gray-50 text-jet-navy placeholder-gray-500 focus:border-jet-blue focus:ring-4 focus:ring-jet-blue/20 outline-none transition-all font-medium backdrop-blur-sm shadow-inner" 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-gray-50 text-jet-navy placeholder-gray-500 focus:border-jet-blue focus:ring-4 focus:ring-jet-blue/20 outline-none transition-all font-medium backdrop-blur-sm shadow-inner" 
        />
        <div className="grid grid-cols-2 gap-4">
          <select className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-gray-50 text-jet-navy focus:border-jet-blue focus:ring-4 focus:ring-jet-blue/20 outline-none transition-all cursor-pointer font-medium appearance-none shadow-inner">
            <option>IT Services</option>
            <option>SaaS / Startup</option>
            <option>Pharma</option>
            <option>Healthcare</option>
            <option>Retail / Ecom</option>
            <option>Other</option>
          </select>
          <select className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-gray-50 text-jet-navy focus:border-jet-blue focus:ring-4 focus:ring-jet-blue/20 outline-none transition-all cursor-pointer font-medium appearance-none shadow-inner">
            <option>Budget?</option>
            <option>&lt; ₹50k</option>
            <option>₹50k - ₹1L</option>
            <option>₹1L - ₹3L</option>
            <option>&gt; ₹3L</option>
          </select>
        </div>
      </div>

      <button type="submit" className="w-full bg-jet-orange text-white py-4 rounded-lg font-bold hover:bg-[#ff7a47] transition-all shadow-lg shadow-jet-orange/20 hover:shadow-jet-orange/40 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg mt-2 group-hover:scale-[1.02] duration-300 ring-2 ring-transparent focus:ring-white">
        Get Free Consultation <ArrowRight size={20} />
      </button>
      
      {/* Trust Badges under Form */}
      <div className="flex items-center justify-center gap-6 pt-5 border-t border-white/10 mt-2">
        <div className="flex items-center gap-1.5 text-[11px] text-blue-100/80 font-bold tracking-wide uppercase">
          <Lock size={12} className="text-jet-green" /> SSL Secure
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-blue-100/80 font-bold tracking-wide uppercase">
          <ShieldCheck size={12} className="text-jet-blue" /> Privacy Guaranteed
        </div>
      </div>
    </form>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative pt-10 pb-12 lg:pt-12 lg:pb-24 bg-jet-navy overflow-hidden min-h-[95vh] flex items-center">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1e3a8a] via-jet-navy to-[#050A15] opacity-80"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-jet-blue/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-jet-orange/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-40"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            
            {/* 1. Badge */}
            <div className="flex flex-col items-start gap-6 mb-6 lg:mb-8">
              <div className="text-[10px] md:text-xs font-bold text-blue-200/60 uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/5">
                Home / Website Design / Hyderabad
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-jet-orange/10 to-transparent border-l-4 border-jet-orange px-4 py-2 text-orange-100 text-sm font-bold shadow-lg shadow-jet-orange/5 backdrop-blur-sm rounded-r-lg">
                {SITE_DATA.hero.badge}
              </div>
            </div>

            {/* 2. Headline */}
            <h1 className="text-4xl lg:text-7xl font-heading font-bold mb-4 lg:mb-6 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              {SITE_DATA.hero.h1}
            </h1>
            <AuthorByline variant="dark" />

            {/* 3. Subheadline */}
            <p className="text-lg lg:text-2xl font-light text-blue-100/90 mb-8 lg:mb-10 max-w-2xl leading-relaxed border-l-2 border-white/20 pl-4 lg:pl-6">
              {SITE_DATA.hero.subhead}
            </p>

            {/* 4. WhatsApp CTA (Mobile Only - Priority) */}
            <a href="https://wa.me/919699977699?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20website%20design%20services%20in%20Hyderabad." target="_blank" rel="noopener noreferrer" className="lg:hidden w-full bg-jet-orange text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg mb-8 hover:bg-[#ff7a47] transition-colors">
              <MessageCircle size={24} fill="white" /> 💬 WhatsApp Us Now
            </a>

            {/* 5. Trust Indicators (Mobile Instance - before Form) */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-8">
               {["500+ Projects", "4.9★ Google Rating", "7-Day Delivery", "Local Expert Team"].map(item => (
                 <div key={item} className="flex items-center gap-2 text-xs font-bold bg-white/5 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10 text-blue-100 cursor-default">
                   <CheckCircle className="w-3.5 h-3.5 text-jet-green" /> {item}
                 </div>
               ))}
            </div>

            {/* 6. Form (Mobile Instance - before Text) */}
            <LeadCaptureForm className="lg:hidden mb-12" />
            
            {/* Desktop CTAs (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-5 items-center mb-12">
              <button className="w-full sm:w-auto bg-jet-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ff7a47] transition-all shadow-xl hover:shadow-2xl hover:shadow-jet-orange/20 transform hover:-translate-y-1">
                🚀 Get Free Website Audit
              </button>
              <button className="w-full sm:w-auto bg-white/5 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-jet-navy transition-all shadow-lg flex items-center justify-center gap-2 backdrop-blur-sm">
                View Portfolio
              </button>
            </div>

            {/* Trust Badges (Desktop Instance) */}
            <div className="hidden lg:flex flex-wrap gap-3 mb-10">
               {["500+ Projects", "4.9★ Google Rating", "7-Day Delivery", "Local Expert Team"].map(item => (
                 <div key={item} className="flex items-center gap-2 text-xs font-bold bg-white/5 px-3 py-2 rounded-lg backdrop-blur-md border border-white/10 text-blue-100 hover:bg-white/10 transition-colors cursor-default">
                   <CheckCircle className="w-3.5 h-3.5 text-jet-green" /> {item}
                 </div>
               ))}
            </div>

            {/* 7. Full Hero Paragraph (ALL Text - No Hiding) */}
            <div className="relative rounded-xl bg-black/20 border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-1 h-4 bg-jet-blue rounded-full"></div>
                 <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">About FactoryJet Hyderabad</span>
              </div>
              
              <div className="prose prose-sm prose-invert text-blue-100/70 font-light leading-relaxed text-justify max-w-none">
                {SITE_DATA.hero.text}
              </div>
            </div>

            {/* Social Proof Micro-copy */}
            <div className="mt-8 flex items-center gap-3 text-sm text-blue-200/50 font-medium">
               <div className="flex -space-x-2 opacity-80 grayscale mix-blend-screen">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-400 border border-jet-navy"></div>)}
               </div>
               <p>Trusted by <span className="text-blue-100 font-bold">500+ Hyderabad businesses</span></p>
            </div>
          </div>
          
          {/* Right Content - Sticky Form (Desktop Only) */}
          <div className="lg:col-span-5 w-full relative lg:sticky lg:top-24 hidden lg:block">
             <div className="absolute inset-0 bg-jet-blue/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
             <LeadCaptureForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export const SocialProof = () => (
  <section className="bg-white border-b border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Marquee Placeholder for Logos */}
      <div className="flex gap-12 opacity-40 grayscale mb-12 justify-center flex-wrap items-center">
         {["Razorpay", "Shiprocket", "Google Partner", "Meta Business", "Shopify Partners", "AWS Partner", "HubSpot", "Microsoft"].map(logo => (
           <span key={logo} className="text-xl font-bold font-heading text-jet-slate hover:text-jet-blue hover:grayscale-0 transition-all cursor-default">{logo}</span>
         ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center divide-x divide-gray-100">
        {[
          { num: "500+", label: "Projects" },
          { num: "₹150 Cr+", label: "Revenue" },
          { num: "4.9★", label: "Rating" },
          { num: "7 Days", label: "Delivery" },
          { num: "25+", label: "Years Exp." },
          { num: "50+", label: "Industries" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-bold text-jet-blue font-heading">{stat.num}</span>
            <span className="text-sm text-jet-gray font-medium uppercase tracking-wider mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const EntityBlock = () => (
  <section className="py-24 bg-jet-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-card shadow-card border border-jet-light hover:shadow-hover transition-all duration-300">
          <div className="w-14 h-14 bg-blue-50 text-jet-blue rounded-xl flex items-center justify-center mb-6">
             <span className="text-3xl">🏢</span>
          </div>
          <h3 className="text-xl font-bold mb-3 font-heading text-jet-navy">WHO WE ARE</h3>
          <p className="text-jet-slate leading-relaxed">FactoryJet is a digital transformation company specializing in website design, e-commerce development, AI-powered marketing, CRM implementation, and ERPNext solutions for SMBs and enterprises.</p>
        </div>
        <div className="bg-white p-8 rounded-card shadow-card border border-jet-light hover:shadow-hover transition-all duration-300">
           <div className="w-14 h-14 bg-orange-50 text-jet-orange rounded-xl flex items-center justify-center mb-6">
             <span className="text-3xl">⚡</span>
          </div>
          <h3 className="text-xl font-bold mb-3 font-heading text-jet-navy">WHAT WE DO</h3>
          <p className="text-jet-slate leading-relaxed">We build high-performance websites, Shopify stores, WooCommerce platforms, React/Next.js applications, WordPress sites, and custom web applications with integrated SEO, GEO, AEO, and AIO optimization.</p>
        </div>
        <div className="bg-white p-8 rounded-card shadow-card border border-jet-light hover:shadow-hover transition-all duration-300">
           <div className="w-14 h-14 bg-green-50 text-jet-green rounded-xl flex items-center justify-center mb-6">
             <span className="text-3xl">📍</span>
          </div>
          <h3 className="text-xl font-bold mb-3 font-heading text-jet-navy">WHERE WE SERVE</h3>
          <p className="text-jet-slate leading-relaxed">Based in HITEC City, we serve all Hyderabad including Madhapur, Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Begumpet, Secunderabad, Kukatpally, and across Telangana.</p>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-card border-l-8 border-jet-blue">
        <p className="text-jet-navy leading-relaxed text-lg font-light text-justify">
          {SITE_DATA.entity.fullText}
        </p>
      </div>
    </div>
  </section>
);

const ProblemCard = ({ icon: Icon, title, cost, text }: { icon: any, title: string, cost: string, text: string }) => (
  <div className="group bg-white p-8 rounded-card border border-jet-light hover:border-jet-orange hover:shadow-hover transition-all duration-300">
    <div className="flex items-start justify-between mb-6">
      <div className="p-3 bg-red-50 text-red-600 rounded-lg group-hover:bg-orange-50 group-hover:text-jet-orange transition-colors">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">{cost}</span>
    </div>
    <h3 className="text-xl font-bold text-jet-navy mb-4 font-heading">{title}</h3>
    <p className="text-jet-slate text-sm leading-relaxed">{text}</p>
  </div>
);

export const Problems = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-jet-navy mb-4">Why Hyderabad Businesses Lose <span className="text-red-500">₹30,000+ Daily</span> Without a Website</h2>
        <div className="h-1.5 w-24 bg-jet-orange mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProblemCard 
          icon={XCircle}
          title="Invisible Online" 
          cost="₹30,000+ lost daily"
          text="85% of Hyderabad customers Google before they buy. 4,000+ startups and 1,500+ tech companies compete for attention. Without a professional website, your business doesn't exist online. Competitors with websites capture your potential customers 24/7 while your leads go to waste. In a city with 600,000+ IT professionals researching everything online, invisible means irrelevant."
        />
        <ProblemCard 
          icon={TrendingDown}
          title="Competitors Winning" 
          cost="45% share lost"
          text="Search 'IT services Hyderabad' or 'pharma company Telangana' — your competitors appear, you don't. Hyderabad's tech-savvy customers research extensively before buying. Every day without proper SEO, you lose ground to competitors who invested in their digital presence. The gap widens exponentially as they build domain authority while you remain invisible."
        />
        <ProblemCard 
          icon={Smartphone}
          title="Mobile Disaster" 
          cost="89% bounce rate"
          text="78% of Hyderabad's internet users browse on mobile. If your website isn't mobile-optimized, you're losing 3 out of 4 visitors before they see your offering. Google penalizes non-responsive sites. Your competitors' mobile-friendly sites rank higher, load faster, and convert better while yours drives customers away."
        />
        <ProblemCard 
          icon={Clock}
          title="Slow Loading" 
          cost="₹15k/sec lost"
          text="Every second of delay costs 7% of conversions. If your website takes 8 seconds to load (common with poor hosting), you've lost half your visitors before they see your content. In a city of IT professionals who expect speed, slow websites signal unprofessionalism. Page speed is now a Google ranking factor — slow means invisible."
        />
        <ProblemCard 
          icon={CheckCircle} /* Using generic alert/check circle for 'Zero Conversions' isn't available in import, using generic icon logic above */
          title="Zero Conversions" 
          cost="96% wasted traffic"
          text="Traffic without conversion is vanity, not strategy. If your website isn't designed for lead generation — no clear CTAs, no contact forms, no WhatsApp integration — you're paying for visitors who leave without action. 96% of first-time visitors never return. Without conversion optimization, your marketing spend delivers zero ROI."
        />
      </div>
    </div>
  </section>
);

export const Solution = () => (
  <section className="py-24 bg-jet-navy text-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold mb-16 text-center">Why Hyderabad Businesses Choose FactoryJet</h2>
        
        {/* Comparison Table */}
        <div className="overflow-x-auto mb-20 rounded-xl border border-gray-700 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/10 border-b border-gray-600">
                <th className="p-6 text-gray-300 font-heading uppercase tracking-wider text-sm font-bold">Factor</th>
                <th className="p-6 text-gray-400 font-heading uppercase tracking-wider text-sm font-bold">Traditional Agencies</th>
                <th className="p-6 text-jet-orange text-xl font-bold bg-white/5 w-1/3">FactoryJet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="hover:bg-white/5 transition-colors"><td className="p-6 text-gray-300 font-medium">Timeline</td><td className="p-6 text-gray-400">8-12 weeks</td><td className="p-6 font-bold text-jet-green bg-white/5 text-lg">7 days ✓</td></tr>
              <tr className="hover:bg-white/5 transition-colors"><td className="p-6 text-gray-300 font-medium">Cost</td><td className="p-6 text-gray-400">₹2-5 lakhs</td><td className="p-6 font-bold text-jet-green bg-white/5 text-lg">Starting ₹29,999 ✓</td></tr>
              <tr className="hover:bg-white/5 transition-colors"><td className="p-6 text-gray-300 font-medium">SEO Included</td><td className="p-6 text-gray-400">Extra ₹50K+</td><td className="p-6 font-bold text-jet-green bg-white/5 text-lg">Built-in ✓</td></tr>
              <tr className="hover:bg-white/5 transition-colors"><td className="p-6 text-gray-300 font-medium">Mobile Optimization</td><td className="p-6 text-gray-400">Often extra</td><td className="p-6 font-bold text-jet-green bg-white/5 text-lg">Standard ✓</td></tr>
              <tr className="hover:bg-white/5 transition-colors"><td className="p-6 text-gray-300 font-medium">Post-Launch Support</td><td className="p-6 text-gray-400">30 days max</td><td className="p-6 font-bold text-jet-green bg-white/5 text-lg">AMC from ₹2,999/mo ✓</td></tr>
              <tr className="hover:bg-white/5 transition-colors"><td className="p-6 text-gray-300 font-medium">AI Integration</td><td className="p-6 text-gray-400">Not available</td><td className="p-6 font-bold text-jet-green bg-white/5 text-lg">AI-powered ✓</td></tr>
              <tr className="hover:bg-white/5 transition-colors"><td className="p-6 text-gray-300 font-medium">Tech Stack</td><td className="p-6 text-gray-400">Outdated</td><td className="p-6 font-bold text-jet-green bg-white/5 text-lg">Modern (React, Next.js) ✓</td></tr>
            </tbody>
          </table>
        </div>

        {/* Accordion Differentiators */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { title: "Hyderabad Tech Ecosystem Expertise", text: "We've worked with IT companies in HITEC City, SaaS startups in T-Hub, pharma companies in Genome Valley, and healthcare providers across the city. We understand Hyderabad's unique business landscape." },
            { title: "Silicon Valley Tech Stack", text: "We build on React, Next.js, Tailwind CSS, and modern frameworks — the same technologies used by Google, Meta, and top Hyderabad unicorns. No outdated WordPress themes." },
            { title: "AI-Powered Efficiency", text: "We use AI for content generation, design iterations, and optimization — cutting development time by 60% without sacrificing quality. This allows us to deliver in 7 days." },
            { title: "Conversion-Focused Design", text: "Every FactoryJet website is designed for conversions. Strategic CTA placement, optimized forms, WhatsApp integration, and trust signals are baked into every design." },
            { title: "Startup to Enterprise Experience", text: "From bootstrapped startups to enterprise SaaS companies, we've built websites across the spectrum. We understand lean budgets AND enterprise requirements." },
            { title: "Complete Digital Ecosystem", text: "Website is just the start. We offer e-commerce development, digital marketing, CRM implementation, and ERPNext. One partner for your entire journey." },
            { title: "Partnership, Not Project", text: "We don't disappear after launch. Our Annual Maintenance Contracts (AMC) starting at ₹2,999/month ensure your website stays updated, secure, and optimized." }
          ].map((item, idx) => (
             <details key={idx} className="group bg-jet-slate/20 rounded-lg border border-white/10 open:bg-white/5 transition-all">
                <summary className="p-6 cursor-pointer font-bold flex justify-between items-center text-lg hover:text-jet-orange transition-colors">
                  {item.title}
                  <span className="text-jet-orange group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/10 mt-2 font-light">
                   {item.text}
                </div>
             </details>
          ))}
        </div>
     </div>
  </section>
);