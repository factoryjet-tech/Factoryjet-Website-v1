import React from 'react';
import { SITE_DATA } from '../data.constants';
import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export const CaseStudies = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-jet-navy">Hyderabad Success Stories</h2>
        <p className="text-xl text-jet-slate mt-2">Real businesses. Real results. Real Hyderabad.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SITE_DATA.caseStudies.map((cs, i) => (
          <div key={i} className="border border-jet-light rounded-card p-8 hover:shadow-hover transition-all bg-gradient-to-br from-white to-gray-50 flex flex-col h-full">
            <div className="text-[10px] font-bold text-jet-blue bg-blue-50 px-3 py-1 rounded-full w-fit mb-4 border border-blue-100">{cs.badge}</div>
            <h3 className="text-2xl font-bold mb-2 text-jet-navy font-heading">{cs.title}</h3>
            <p className="text-sm font-semibold text-jet-gray mb-6">{cs.client}</p>
            
            <div className="space-y-4 mb-6 text-sm text-jet-slate flex-1">
              <p><strong className="text-jet-navy block mb-1">Challenge:</strong> {cs.challenge}</p>
              <p><strong className="text-jet-navy block mb-1">Solution:</strong> {cs.solution}</p>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg mb-6 border border-green-100">
              <strong className="block text-green-800 mb-2 font-heading">Key Results:</strong>
              <ul className="space-y-1.5 text-sm text-green-900">
                {cs.result.map((r: string, ri: number) => <li key={ri} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 bg-green-600 rounded-full"></span>{r}</li>)}
              </ul>
            </div>
            <div className="text-xs font-bold text-jet-gray uppercase tracking-widest border-t border-jet-light pt-4 flex items-center justify-between">
               <span>Timeline: {cs.timeline}</span>
               <span className="text-jet-blue cursor-pointer hover:underline">Read case study →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="py-24 bg-jet-navy text-white relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-jet-blue opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-heading font-bold text-center mb-16">What Hyderabad Leaders Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { q: "FactoryJet understood our IT services market better than any agency. 50+ qualified leads monthly.", n: "Srinivas Reddy", t: "CEO, TechCorp Solutions" },
          { q: "Delivered in 10 days with perfect attention to regulatory requirements. Inquiries tripled.", n: "Dr. Kavitha Sharma", t: "Director, PharmaCure Labs" },
          { q: "FactoryJet's healthcare expertise showed. 60% of our appointments now come through the website.", n: "Dr. Ramesh Babu", t: "Admin, LifeCare Hospitals" },
          { q: "Built our entire e-commerce ecosystem in 45 days. Best investment for our D2C brand.", n: "Priya Mehta", t: "Founder, StyleHub Fashion" }
        ].map((t, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-card backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <p className="text-sm italic text-gray-300 mb-6 leading-relaxed">"{t.q}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-jet-blue to-jet-navy rounded-full border border-white/20 flex items-center justify-center font-bold text-xs">{t.n.charAt(0)}</div>
              <div>
                <div className="font-bold text-sm text-white">{t.n}</div>
                <div className="text-xs text-gray-400">{t.t}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQ = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-jet-navy mb-4">Frequently Asked Questions</h2>
        <p className="text-jet-gray">Everything you need to know about website design in Hyderabad.</p>
      </div>
      
      {/* Cards Layout - Fully Visible Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {SITE_DATA.faqs.map((faq, idx) => (
          <div key={idx} className="bg-jet-light/20 p-6 rounded-lg border border-jet-light hover:border-jet-blue/30 transition-colors">
            <h3 className="font-bold text-lg text-jet-navy mb-3">{faq.question}</h3>
            <p className="text-jet-slate text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const LocalSEO = () => (
  <section className="py-24 bg-jet-white">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3 bg-white p-8 rounded-card shadow-card border border-jet-light">
        <h3 className="text-2xl font-bold mb-6 font-heading text-jet-navy">Visit Our Hyderabad Office</h3>
        <address className="not-italic space-y-4 text-jet-slate mb-8">
          <p className="font-bold text-jet-navy text-lg">FactoryJet Technologies Pvt. Ltd.</p>
          <p>Ayyapa Society, HITEC City Main Road</p>
          <p>Madhapur, Hyderabad</p>
          <p>Telangana 500081</p>
          <div className="pt-6 space-y-3 border-t border-jet-light">
            <p className="flex items-center gap-3"><Phone size={18} className="text-jet-orange" /> 040-XXX-XXXX</p>
            <p className="flex items-center gap-3"><Mail size={18} className="text-jet-orange" /> connect@factoryjet.com</p>
            <p className="flex items-center gap-3"><Clock size={18} className="text-jet-orange" /> Mon-Sat: 9 AM - 7 PM</p>
          </div>
        </address>
        <p className="text-xs text-jet-gray bg-jet-light/50 p-3 rounded-md">landmark: Near Inorbit Mall, Madhapur | Opposite Cyber Towers</p>
      </div>
      <div className="md:w-2/3 bg-gray-200 rounded-card shadow-inner border border-jet-light min-h-[400px] flex items-center justify-center relative overflow-hidden group">
        {/* Placeholder for Map */}
        <div className="absolute inset-0 bg-blue-50/50 flex items-center justify-center text-jet-blue font-bold text-xl group-hover:scale-105 transition-transform duration-700">
           <MapPin size={48} className="mb-2 animate-bounce" />
           <span className="ml-2">View on Google Maps</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-jet-gray text-center font-medium">
      <div className="bg-white p-2 rounded border border-jet-light">HITEC City • Madhapur • Gachibowli</div>
      <div className="bg-white p-2 rounded border border-jet-light">Banjara Hills • Jubilee Hills • Begumpet</div>
      <div className="bg-white p-2 rounded border border-jet-light">Secunderabad • LB Nagar • Uppal</div>
    </div>
  </section>
);

export const FinalCTA = () => (
  <section className="py-24 bg-gradient-to-r from-jet-blue to-[#0041a3] text-white text-center relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6">Ready to Launch Your Website?</h2>
      <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">Get a professional website that generates leads, builds credibility, and grows your business in Hyderabad.</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-bold text-blue-100">
        {["Free 30-min consultation", "Custom proposal in 2 hours", "7-day delivery", "No upfront payment"].map(v => (
          <span key={v} className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">✓ {v}</span>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
         <button className="bg-jet-orange text-white px-10 py-5 rounded-btn font-bold text-xl hover:bg-[#E55A2B] shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            🚀 Get Free Audit
         </button>
         <button className="bg-jet-green text-white px-10 py-5 rounded-btn font-bold text-xl hover:bg-[#0EA06F] shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            💬 WhatsApp Us
         </button>
      </div>
      <p className="text-yellow-300 font-bold animate-pulse text-sm bg-black/20 w-fit mx-auto px-4 py-1 rounded-full">🔥 Limited Time Offer: 20% off on all packages this month</p>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-jet-navy text-gray-400 py-20 border-t border-gray-800 pb-28 md:pb-20">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
      <div className="lg:col-span-2">
        <h3 className="text-white text-3xl font-bold mb-6 font-heading tracking-tight">FactoryJet Hyderabad</h3>
        <p className="leading-relaxed mb-8 text-sm text-gray-400 pr-4">{SITE_DATA.footerSEO.substring(0, 300)}...</p>
        <div className="flex gap-4">
           {/* Social placeholders */}
           <a href="#" className="w-10 h-10 bg-white/5 rounded-full hover:bg-jet-blue transition-all flex items-center justify-center text-white hover:-translate-y-1"><Linkedin size={18} /></a>
           <a href="#" className="w-10 h-10 bg-white/5 rounded-full hover:bg-jet-blue transition-all flex items-center justify-center text-white hover:-translate-y-1"><Twitter size={18} /></a>
           <a href="#" className="w-10 h-10 bg-white/5 rounded-full hover:bg-jet-blue transition-all flex items-center justify-center text-white hover:-translate-y-1"><Instagram size={18} /></a>
           <a href="#" className="w-10 h-10 bg-white/5 rounded-full hover:bg-jet-blue transition-all flex items-center justify-center text-white hover:-translate-y-1"><Facebook size={18} /></a>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <h4 className="text-white font-bold mb-6 font-heading text-lg">Services</h4>
        <ul className="space-y-4 text-sm">
          {["Website Design", "E-Commerce", "Shopify Stores", "WordPress", "React Apps", "Redesign"].map(item => (
             <li key={item}><a href="#" className="hover:text-jet-orange transition-colors flex items-center gap-2"><ArrowRight size={12} className="text-gray-600" /> {item}</a></li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-1">
        <h4 className="text-white font-bold mb-6 font-heading text-lg">Company</h4>
        <ul className="space-y-4 text-sm">
          {["About Us", "Portfolio", "Case Studies", "Contact", "Careers"].map(item => (
             <li key={item}><a href="#" className="hover:text-jet-orange transition-colors flex items-center gap-2"><ArrowRight size={12} className="text-gray-600" /> {item}</a></li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-1">
        <h4 className="text-white font-bold mb-6 font-heading text-lg">Legal</h4>
        <ul className="space-y-4 text-sm">
          {["Privacy Policy", "Terms of Service", "Sitemap", "Disclaimer"].map(item => (
             <li key={item}><a href="#" className="hover:text-jet-orange transition-colors flex items-center gap-2"><ArrowRight size={12} className="text-gray-600" /> {item}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
      <p>&copy; 2026 FactoryJet Technologies Pvt. Ltd. All Rights Reserved.</p>
      <div className="flex items-center gap-2">
         <span>Made with</span>
         <span className="text-red-500 text-lg">♥</span>
         <span>in HITEC City, Hyderabad</span>
      </div>
    </div>
  </footer>
);