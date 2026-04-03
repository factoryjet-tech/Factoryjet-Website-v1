import React, { useState } from 'react';
import {
  ArrowRight, CheckCircle2, MessageCircle, Shield
} from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { trackWhatsAppConversion } from '@/utils/gtm';
import { db } from '@/firebase';
import { trackFormSubmission } from '@/utils/gtm';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', businessType: '', budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const TRUST_INDICATORS = [
    "500+ Business Websites Delivered",
    "4.9★ Google Rating (200+ Reviews)",
    "7-Day Delivery Guarantee",
    "Delhi NCR-Based Expert Team",
    "₹150 Cr+ Revenue Generated for Clients",
    "Mobile Responsive Sites Standard"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      // Generate readable document ID
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'delhi_leads', docId), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        businessType: formData.businessType,
        budget: formData.budget,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'delhi_hero_form',
      });

      setIsSuccess(true);
      trackFormSubmission();
      setFormData({ name: '', phone: '', email: '', businessType: '', budget: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                <span className="text-xs font-semibold tracking-wide text-blue-50">#1 Website Design Company in Delhi NCR | 500+ Business Websites Delivered</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight drop-shadow-sm text-left">
              Website Design Company in Delhi NCR
            </h1>

            <div className="border-l-4 border-jet-orange pl-4 lg:pl-5 py-1">
                <h2 className="text-base sm:text-xl text-blue-50 font-light leading-relaxed">
                  Professional Website Development & E-Commerce Solutions Starting ₹29,999 — Transform Your Business Into a Digital Powerhouse
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
              <button
                onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-jet-orange hover:bg-jet-orange-dark text-white px-6 py-3.5 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_15px_30px_rgba(255,107,53,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center group w-full sm:w-auto min-h-[48px]"
              >
                Get Free Quote Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://wa.me/919699977699" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppConversion} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center w-full sm:w-auto min-h-[48px]">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Form - Glassmorphism */}
          <div className="lg:col-span-5 w-full" id="hero-form">
            <div className="glass-card p-5 lg:p-6 rounded-2xl relative overflow-hidden border border-white/20 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-jet-blue to-jet-orange"></div>
                <div className="text-center mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 font-heading">Get Free Consultation</h3>
                  <p className="text-blue-100 text-xs lg:text-sm opacity-90">Custom proposal in 2 hours. Starts at ₹29,999.</p>
                </div>

                {isSuccess && (
                  <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-100 text-sm text-center">
                    Thank you! We will contact you within 2 hours.
                  </div>
                )}

                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100 text-sm text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy placeholder-gray-400 font-medium transition-all group-hover:bg-white min-h-[42px] text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (+91)"
                      required
                      value={formData.phone}
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy placeholder-gray-400 font-medium transition-all group-hover:bg-white min-h-[42px] text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy placeholder-gray-400 font-medium transition-all group-hover:bg-white min-h-[42px] text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <select
                      name="businessType"
                      value={formData.businessType}
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy font-medium transition-all group-hover:bg-white appearance-none min-h-[42px] text-sm"
                      onChange={handleChange}
                    >
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
                    <select
                      name="budget"
                      value={formData.budget}
                      className="w-full px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white/95 border-2 border-transparent focus:border-jet-blue focus:ring-0 outline-none text-navy font-medium transition-all group-hover:bg-white appearance-none min-h-[42px] text-sm"
                      onChange={handleChange}
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under50k">Under ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
                      <option value="above250k">Above ₹2,50,000</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-jet-blue hover:bg-jet-blue-light text-white font-bold py-3 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-95 text-lg flex items-center justify-center min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quote Now'}
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

export default HeroSection;
