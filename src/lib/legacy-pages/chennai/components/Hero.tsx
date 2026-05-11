import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Check, ArrowRight, Star, ShieldCheck, CreditCard, Lock, MessageCircle } from 'lucide-react';
import { TRUST_BADGES } from '../constant';
import AuthorByline from '@/components/AuthorByline';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-12 overflow-hidden bg-gradient-mesh min-h-screen flex items-center">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-200/50 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-indigo-200/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* 
            MOBILE-FIRST LAYOUT STRATEGY 
            Mobile Order: Badge -> H1 -> Subhead -> CTA -> Trust -> Form -> Text
            Desktop Order: 2 Cols. Left(Header, CTA, Trust, Text), Right(Form)
            Implementation: CSS Grid for Desktop to reposition the Form visually to the right,
            while keeping it earlier in the DOM or using order-first/last strategies if needed.
            
            Actually, to strictly satisfy "Form before Text on Mobile" but "Text on Left, Form on Right on Desktop":
            DOM Order: Header -> CTA -> Trust -> Form -> Text
            Desktop Grid: 
              Col 1: Header (Span 2)
              Col 1: CTA
              Col 1: Trust
              Col 2: Form (Row Span X)
              Col 1: Text
        */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12">
          
          {/* 1. Badge (Mobile Order 1) */}
          <div className="lg:col-span-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 text-jet-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
               <MapPinIcon size={12} /> Serving All Chennai Locations
            </div>
          </div>

          {/* 2. Headlines (Mobile Order 3 & 4) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.2] text-jet-navy mb-6">
              <span className="text-jet-blue">#1 Website Design Company in Chennai</span> – Professional Web Development Services Starting ₹29,999
            </h1>
            <AuthorByline />
            <h2 className="text-base sm:text-lg md:text-xl text-jet-slate leading-relaxed font-medium mb-0">
              FactoryJet delivers award-winning <strong>website design in Chennai</strong> with 7-day delivery, AI-powered optimization, and complete digital solutions. As the leading <strong>web development company in Chennai</strong>, we've helped 500+ businesses across OMR, T. Nagar, Anna Nagar, Adyar, Guindy, and Velachery transform their digital presence. From startup websites to enterprise e-commerce platforms, our Chennai-based team combines cutting-edge technology with local market expertise.
            </h2>
          </div>

          {/* 3. Primary CTAs (Mobile Order 5) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary CTA - Jet Orange as requested */}
              <Button variant="accent" className="w-full sm:w-auto px-8 py-4 text-lg shadow-xl shadow-jet-orange/20 flex items-center justify-center gap-2">
                 <MessageCircle size={20} /> Get Free Website Consultation
              </Button>
              {/* Secondary CTA */}
              <Button variant="secondary" className="w-full sm:w-auto py-4 text-lg">
                 View Chennai Portfolio
              </Button>
          </div>

          {/* 4. Trust Indicators (Mobile Order 6) */}
          <div className="lg:col-span-7 flex flex-wrap justify-center lg:justify-start gap-3">
             {TRUST_BADGES.map((badge, i) => (
                <span key={i} className="bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-slate-200 text-jet-gray flex items-center gap-1.5">
                  <Check size={14} className="text-jet-green shrink-0" /> {badge}
                </span>
              ))}
          </div>

          {/* 5. Lead Capture Form (Mobile Order 7) 
              Placed here in DOM to appear before Text on mobile.
              On Desktop, we move it to Col 2 and span rows.
          */}
          <div className="lg:col-span-5 lg:row-start-2 lg:row-end-6 lg:col-start-8">
            <motion.div 
              className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-jet-blue via-jet-orange to-jet-green" />
              
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2 text-jet-navy">Get Free Consultation</h3>
              <p className="text-jet-slate text-sm mb-6">Response within 2 hours. Enterprise quality, SMB pricing.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-jet-navy placeholder-slate-400 focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-colors shadow-sm" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-jet-navy placeholder-slate-400 focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-colors shadow-sm" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-jet-navy placeholder-slate-400 focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-colors shadow-sm" />
                </div>
                <div>
                  <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-jet-navy placeholder-slate-400 focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-colors appearance-none shadow-sm">
                     <option>Select Business Type</option>
                     <option>Startup / Small Business</option>
                     <option>Corporate / Enterprise</option>
                     <option>E-Commerce</option>
                     <option>Other</option>
                  </select>
                </div>
                
                <Button variant="primary" className="w-full py-4 text-lg font-bold group shadow-jet-blue/30">
                  Get Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
              
              <div className="mt-6 pt-4 border-t border-slate-200/60">
                 <p className="text-[10px] uppercase tracking-wider text-center text-slate-400 mb-2 font-bold">100% Secure & Confidential</p>
                 <div className="flex justify-center items-center gap-3 text-slate-400 grayscale opacity-70">
                    <div className="flex items-center gap-1 text-[10px]"><ShieldCheck size={12} /> ISO 9001</div>
                    <div className="flex items-center gap-1 text-[10px]"><Lock size={12} /> SSL Secure</div>
                    <div className="flex items-center gap-1 text-[10px]"><CreditCard size={12} /> Verified</div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* 6. Full Hero Paragraphs (Mobile Order 8) */}
          <div className="lg:col-span-7 text-left space-y-8">
            {/* Paragraph 1 */}
            <p className="text-jet-slate text-base leading-relaxed">
               Looking for a reliable <strong>website design company in Chennai</strong>? FactoryJet is Chennai's fastest-growing digital agency, specializing in custom web design, e-commerce development, and AI-powered digital marketing solutions. Our Tidel Park office serves businesses across Tamil Nadu's capital with professional web development services that drive real results.
            </p>

            {/* Why Choose Us List */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-sm">
               <h3 className="font-bold text-jet-navy mb-4 text-lg">Why Chennai businesses choose FactoryJet:</h3>
               <ul className="space-y-3">
                  {[
                    { title: "7-Day Express Delivery", desc: "Launch your website in just one week" },
                    { title: "₹29,999 Starting Price", desc: "Enterprise-quality at SMB-friendly rates" },
                    { title: "Local Chennai Team", desc: "Face-to-face consultations available at our OMR office" },
                    { title: "SEO + GEO + AEO + AIO Optimization", desc: "Rank on Google AND AI search engines" },
                    { title: "Free 1-Year Hosting", desc: "No hidden costs, complete transparency" },
                    { title: "100+ Chennai Clients", desc: "Trusted by local businesses across industries" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-jet-slate group">
                       <div className="mt-0.5 bg-jet-green/10 p-0.5 rounded-full shrink-0 group-hover:bg-jet-green/20 transition-colors">
                          <Check size={14} className="text-jet-green" />
                       </div>
                       <span><strong className="text-jet-navy">{item.title}</strong> – {item.desc}</span>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Paragraph 2 */}
            <p className="text-jet-slate text-base leading-relaxed">
               Whether you're a startup in Taramani, an automobile company in Guindy, a healthcare provider in Adyar, or a retail business in T. Nagar, FactoryJet provides <strong>web design Chennai</strong> solutions tailored to your industry and growth goals. Our team understands the Chennai market, local competition, and what it takes to succeed digitally in Tamil Nadu's business capital.
            </p>

            {/* Service Areas (Mobile Order 9) */}
            <div className="pt-6 border-t border-slate-200">
               <p className="text-xs text-jet-slate/80 leading-loose">
                  <span className="font-bold text-jet-navy block sm:inline mb-1 sm:mb-0">Our Chennai Service Areas:</span> OMR (Old Mahabalipuram Road) | Tidel Park | Taramani | Velachery | Adyar | Guindy | T. Nagar | Anna Nagar | Mylapore | Porur | Perungudi | Sholinganallur | Nungambakkam | Kodambakkam | Egmore | Mount Road | Chromepet | Tambaram
               </p>
            </div>
            
            {/* Inline Testimonial */}
            <div className="flex items-center gap-4 p-4 bg-slate-50/80 rounded-lg border border-slate-100 max-w-md">
              <div className="flex -space-x-3 shrink-0">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                    </div>
                 ))}
              </div>
              <div className="text-sm">
                 <div className="flex text-yellow-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-jet-navy font-bold leading-none">"Leads increased by 300% in 1 month"</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper Icon
const MapPinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default Hero;