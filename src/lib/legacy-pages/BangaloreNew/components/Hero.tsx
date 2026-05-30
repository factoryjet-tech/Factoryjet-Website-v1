import React, { useState, FormEvent } from 'react';
import { Check, MapPin, TrendingUp, Users, ShieldCheck, Zap } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { trackWhatsAppConversion } from '@/utils/gtm';
import LeadFormInline from '@/components/LeadFormInline';

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using direct db import
      // Direct db usage

      await addDoc(collection(db, 'bangalore_leads'), {
        ...formData,
        source: 'Hero Form',
        timestamp: serverTimestamp(),
        page: 'Bangalore'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessType: '',
        budget: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section className="relative w-full pt-12 pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-orange-400/20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">

          <div className="w-full lg:w-[60%] space-y-8">
            <nav className="flex items-center text-sm text-slate-600 font-semibold space-x-2">
              <span>Home</span>
              <span className="text-slate-400">/</span>
              <span>Services</span>
              <span className="text-slate-400">/</span>
              <span className="text-[#0052CC]">Website Design Company in Bangalore</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-100 text-[#0052CC] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052CC]"></span>
              </span>
              #1 Website Design Company in Bangalore
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight">
              Website Design Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#2563EB]">Bangalore</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-slate-700 leading-relaxed max-w-3xl">
              Professional Website Development & E-Commerce Solutions Starting <span className="text-[#0052CC] font-bold">₹29,999</span>. Powering Bengaluru's Startups, Enterprises & D2C Brands.
            </h2>

            <div className="py-2 md:py-4">
              <a href="https://wa.me/919699977699?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20web%20design%20services%20in%20Bangalore" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppConversion} className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#1ebc57] text-white px-5 py-3 md:px-8 md:py-5 rounded-full font-bold text-base md:text-lg shadow-lg shadow-green-500/30 transform transition-all hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="md:w-7 md:h-7"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.893 3.156.893 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-5.767-5.77zm0 10.426c-1.077 0-1.916-.277-2.731-.726l-.196-.108-1.57.411.419-1.531-.126-.2c-.525-.838-.802-1.713-.801-2.909.001-2.569 2.088-4.657 4.656-4.657 2.569 0 4.656 2.087 4.657 4.656.001 2.57-2.087 4.657-4.655 4.657h-.001zm2.535-3.483c-.139-.069-.819-.404-.945-.451-.127-.046-.219-.068-.311.069-.093.138-.358.45-.438.542-.081.092-.162.103-.3.034-.139-.069-.586-.216-1.116-.689-.413-.369-.692-.824-.773-.962-.081-.138-.009-.213.061-.282.063-.062.139-.161.208-.242.07-.08.093-.138.139-.23.046-.092.023-.173-.012-.242-.034-.069-.311-.75-.425-1.027-.111-.269-.224-.233-.307-.237l-.261-.005c-.091 0-.238.034-.362.17-.123.136-.473.461-.473 1.124 0 .664.483 1.306.551 1.397.068.092.951 1.453 2.304 2.038.321.139.572.222.767.284.321.102.613.088.845.053.256-.038.819-.334.935-.657.116-.322.116-.599.081-.657-.035-.057-.127-.091-.266-.16z"/></svg>
                <span>WhatsApp Us Now: +91 96999 77699</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
               {[
                 "500+ Websites Delivered",
                 "7-Day Launch for Business Sites",
                 "Bangalore-Based Team",
                 "2-Hour Response Time"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-slate-100 shadow-sm">
                   <div className="bg-blue-100 p-1 rounded-full"><Check className="w-4 h-4 text-[#0052CC]" /></div>
                   <span className="text-base font-bold text-slate-800">{item}</span>
                 </div>
               ))}
            </div>

          </div>

          <div className="w-full lg:w-[40%] relative z-10" id="contact-form">
            <div className="glass-card p-8 rounded-3xl sticky top-8 border-t border-l border-white/50 shadow-2xl backdrop-blur-xl bg-white/40">
              <div className="absolute -top-6 -right-6 bg-[#0052CC] text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-3">
                Response in 2 hrs
              </div>
              <LeadFormInline
                region="in"
                source="bangalore_hero"
                heading="Get a free consultation"
                subheading="Custom proposal in 2 hours — just your name and email."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const HeroDetailedText = () => (
    <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-8">
                    <h3 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                        We don't just build websites. We build <span className="text-[#0052CC]">digital assets</span> that drive Bengaluru's economy.
                    </h3>

                    <div className="prose prose-lg text-slate-700 leading-relaxed font-medium">
                        <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#0052CC] first-letter:mr-3 first-letter:float-left mb-6 text-lg">
                            FactoryJet is a trusted web design company in Bangalore specializing in website development, WordPress development, Shopify store development, and e-commerce solutions for businesses across Karnataka's Silicon Valley. With 25+ years of combined expertise, we help startups, enterprises, D2C brands, and growing businesses in Koramangala, Whitefield, Electronic City, HSR Layout, Indiranagar, and across Bengaluru build powerful online platforms that generate leads, drive conversions, and accelerate growth.
                        </p>
                        <p className="text-lg">
                            Our team covers Bangalore's most active business corridors — Manyata Tech Park, Embassy Tech Village, Outer Ring Road, ITPL Whitefield, Electronic City Phase 1 & 2, MG Road, and the fast-growing startup zones of Koramangala and HSR Layout. Every website we build is mobile-responsive, SEO-friendly, and designed to turn visitors into paying customers.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <MapPin className="w-24 h-24 text-[#0052CC]" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                             <TrendingUp className="w-5 h-5 text-[#FF6B35]" /> Bengaluru's Digital Reality
                        </h4>
                        <p className="text-slate-700 text-lg leading-relaxed mb-4">
                            Bangalore is India's startup capital with <strong className="text-[#0052CC]">₹15 lakh crore in annual GDP</strong>, 60,000+ registered startups, and home to 45% of India's unicorns. The city handles 35% of the country's tech services exports.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            Yet <strong className="text-red-600">50% of Bangalore businesses still lack a professional website</strong>, losing lakhs in potential revenue every year. That's the gap FactoryJet fills. As a results-driven web development company in Bangalore, we build websites that help local businesses compete nationally — and globally.
                        </p>
                    </div>

                    <div className="bg-[#0052CC] text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                         <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#FF6B35]" /> Why Choose FactoryJet?
                            </h4>
                            <p className="text-blue-50 text-lg leading-relaxed font-medium">
                                As a proven website development company in Bangalore, we've helped 500+ businesses — from funded startups in Koramangala to e-commerce brands in Whitefield — launch professional, SEO-ready websites. Starting at just <strong className="text-white text-xl">₹29,999</strong>.
                            </p>
                         </div>
                         <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-base text-slate-600 leading-loose text-justify font-medium">
                    <span className="font-bold text-slate-900">Our Expertise:</span> Whether you're searching for a website designer in Bangalore, a web design agency in Bangalore, a website developer in Bangalore, or a complete web design services in Bangalore partner — FactoryJet works with startups, SMBs, enterprises, D2C brands, and businesses across the Bengaluru metro. Need Shopify store development or WordPress web development? Get a free quote today.
                </p>
            </div>
        </div>
    </section>
);

export default Hero;
