import React, { useState, FormEvent } from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    websiteType: '',
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

      await addDoc(collection(db, 'pune_leads'), {
        ...formData,
        source: 'Hero Form',
        timestamp: serverTimestamp(),
        page: 'Pune'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        websiteType: '',
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

  return (
    <section className="relative pt-24 pb-12 lg:pt-30 lg:pb-32 overflow-hidden bg-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F5FF] via-white to-white z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-jet-blue/5 skew-x-12 transform origin-top-right z-0 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="contents lg:block lg:col-span-7">
          <div className="order-1 flex flex-col items-start w-full">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-jet-blue/10 border border-jet-blue/20 text-jet-blue text-xs md:text-sm font-semibold mb-4 md:mb-6">
              #1 Website Design Company in Pune | 500+ Business Websites Delivered
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold leading-tight mb-4 md:mb-6 text-jet-navy">
              Website Design Company in Pune
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-jet-slate mb-6 md:mb-8 font-light">
              Professional Website Development & E-Commerce Solutions Starting ₹15,000 — Transform Your Business Online
            </h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6 md:mb-8 text-xs md:text-sm font-medium text-jet-slate w-full">
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> 500+ Business Websites</div>
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> 7-Day Delivery Guarantee</div>
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> 4.9★ Google Rating</div>
              <div className="flex items-center gap-2"><Check className="text-jet-green w-4 h-4 md:w-5 md:h-5" /> Mobile Responsive Standard</div>
            </div>

            <div className="flex flex-col xs:flex-row gap-3 md:gap-4 w-full md:w-auto">
              <a href="#contact" className="bg-jet-orange hover:bg-orange-600 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-orange-500/30 text-center w-full md:w-auto">
                Get Started →
              </a>
              <a href="https://wa.me/919699977699" className="bg-white border border-jet-light text-jet-navy hover:bg-gray-50 px-6 py-3.5 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 shadow-sm w-full md:w-auto">
                <MessageSquare className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>
          </div>

          <div className="order-3 lg:block w-full mt-8 lg:mt-8">
            <p className="text-jet-gray leading-relaxed text-sm md:text-base max-w-2xl">
              FactoryJet is a leading Website Design Company in Pune, specializing in professional business website design and development for companies across Maharashtra. With 25+ years of combined expertise as a trusted website development company in Pune, we help IT companies, startups, manufacturers, and businesses in Hinjewadi, Kharadi, Pimpri-Chinchwad, Chakan, and Talegaon establish a powerful online presence that generates leads and drives sustainable growth.
            </p>
          </div>
        </div>

        <div className="order-2 lg:col-span-5 w-full">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-jet-light">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-jet-navy mb-2">Get Free Consultation</h3>
            <p className="text-jet-gray mb-6 text-xs md:text-sm">Custom proposal in 2 hours. Starts at ₹15,000.</p>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-jet-white border border-jet-light rounded-lg px-4 py-3 text-jet-navy placeholder-jet-gray focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Business Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-jet-white border border-jet-light rounded-lg px-4 py-3 text-jet-navy placeholder-jet-gray focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (+91) *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-jet-white border border-jet-light rounded-lg px-4 py-3 text-jet-navy placeholder-jet-gray focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-all text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <select
                  value={formData.websiteType}
                  onChange={(e) => setFormData({...formData, websiteType: e.target.value})}
                  className="w-full bg-jet-white border border-jet-light rounded-lg px-4 py-3 text-jet-navy focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-all appearance-none cursor-pointer text-sm md:text-base"
                >
                  <option value="">Select Website Type</option>
                  <option value="business">Business Website</option>
                  <option value="ecommerce">E-commerce / Shopify</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="custom">Custom Web App</option>
                </select>
              </div>
              <div>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-jet-white border border-jet-light rounded-lg px-4 py-3 text-jet-navy focus:outline-none focus:border-jet-blue focus:ring-1 focus:ring-jet-blue transition-all appearance-none cursor-pointer text-sm md:text-base"
                >
                  <option value="">Budget Range</option>
                  <option value="15-30">₹15K - ₹30K</option>
                  <option value="30-50">₹30K - ₹50K</option>
                  <option value="50-100">₹50K - ₹1L</option>
                  <option value="100+">₹1L+</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-jet-blue hover:bg-blue-700 text-white font-bold py-3.5 md:py-4 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all mt-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Quote Now'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm text-center">Thank you! We'll contact you within 2 hours.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
              )}

              <p className="text-[10px] md:text-xs text-jet-gray text-center mt-2 md:mt-3">Your data is 100% secure. Response in 2 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
