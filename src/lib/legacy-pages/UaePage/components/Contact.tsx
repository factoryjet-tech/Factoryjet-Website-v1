'use client';

import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, ArrowRight, CheckCircle2, Clock, Calendar, Check } from 'lucide-react';
import { trackFormSubmission } from '@/utils/gtm';
import LeadFormInline from '@/components/LeadFormInline';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Dynamically import Firebase to reduce bundle size
      const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const { db } = await import('@/firebase');

      // Generate readable document ID
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `uae_footer_${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'uae_leads', docId), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'uae_footer_form',
        region: 'UAE',
      });

      setIsSuccess(true);
      trackFormSubmission();
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-20 relative overflow-hidden group">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
             {/* Gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A]"></div>

             {/* Geometric Pattern Overlay */}
             <div className="absolute inset-0 opacity-[0.03]" style={{
                 backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                 backgroundSize: '30px 30px'
             }}></div>

             {/* Floating Particles */}
             <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full blur-[2px] animate-pulse"></div>
             <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-orange-500 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s' }}></div>
             <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">

        {/* Main 50/50 Layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-1/2 space-y-10">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">Get Your Free <span className="text-[#FF6B35]">Consultation</span></h2>
                    <p className="text-gray-400">Ready to transform your digital presence? Reach out to Dubai's top rated agency.</p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 gap-4">
                    {/* Email Card */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:bg-white/[0.05] transition-colors group/card">
                        <div className="w-14 h-14 bg-[#FF6B35]/20 rounded-full flex items-center justify-center text-[#FF6B35] group-hover/card:scale-110 transition-transform">
                            <Mail size={28} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email</p>
                            <div className="flex items-center gap-3">
                                <a href="mailto:connect@factoryjet.com" className="text-xl font-bold text-white tracking-tight hover:text-[#FF6B35] transition-colors">connect@factoryjet.com</a>
                            </div>
                            <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
                                <Clock size={12} className="text-[#FF6B35]" /> Reply within 2 hours
                            </div>
                        </div>
                    </div>

                    {/* Office Card */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:bg-white/[0.05] transition-colors group/card">
                        <div className="w-14 h-14 bg-[#10B981]/20 rounded-full flex items-center justify-center text-[#10B981] group-hover/card:scale-110 transition-transform">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Office</p>
                            <span className="text-xl font-bold text-white tracking-tight block">Dubai Internet City</span>
                            <button type="button" className="flex items-center gap-1.5 mt-1 text-xs text-[#0052CC] hover:text-white transition-colors font-medium">
                                <Calendar size={12} /> Schedule a visit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Why Choose Section */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-5">Why Top Brands Choose Us</h3>
                    <div className="grid grid-cols-2 gap-3">
                         {[
                             "25+ Years Experience", "98% Client Satisfaction",
                             "Bilingual Team (Ar/En)", "500+ Successful Projects",
                             "UAE Market Expertise", "Local Dubai Support"
                         ].map((text, i) => (
                             <div key={i} className="flex items-center gap-2.5 text-sm text-gray-400">
                                 <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                 <span>{text}</span>
                             </div>
                         ))}
                    </div>
                </div>
            </div>

            {/* Visual Separator (Hidden on mobile) */}
            <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent self-stretch"></div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-1/2">
                <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                    {/* Decorative glow behind form */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

                        {isSuccess ? (
                          <div className="text-center py-8">
                            <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Check size={32} className="text-[#10B981]" strokeWidth={3} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                            <p className="text-gray-400">We'll get back to you within 2 hours.</p>
                          </div>
                        ) : (
                          <LeadFormInline
                            region="in"
                            source="uae_contact"
                            heading="Get a free consultation"
                            subheading="Just your name and email to start — we reply within 2 hours."
                          />
                        )}
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-white/10 pt-10 pb-10 px-4 relative z-10 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/FinalLogoWhite.svg"
              alt="FactoryJet Logo"
              className="h-10 w-auto"
            />
            <span className="text-gray-400 font-medium text-base">UAE</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="flex gap-4">
            {[
              { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
              { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
              { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
              { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com' }
            ].map(({ Icon, label, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${label}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                    <Icon size={18} aria-hidden="true" />
                </a>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-8">
          Copyright © 2026 FactoryJet Dubai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
