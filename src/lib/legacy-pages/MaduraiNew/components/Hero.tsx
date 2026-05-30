import React, { useState, FormEvent } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { TRUST_INDICATORS, CONTACT } from '../data.constants';
import AuthorByline from '@/components/AuthorByline';
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

      await addDoc(collection(db, 'madurai_leads'), {
        ...formData,
        source: 'Hero Form',
        timestamp: serverTimestamp(),
        page: 'Madurai'
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
    <section className="relative bg-gradient-to-br from-[#F0F5FF] to-white pt-6 pb-12 md:pt-10 md:pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="w-full lg:w-3/5 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#FF6B35] mr-2">🏆</span>
              <span className="text-sm font-semibold text-[#64748B]">#1 Website Design Company in Madurai</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] leading-tight">
              Best Website Design Company in <span className="text-[#0052CC]">Madurai</span>
            </h1>
            <AuthorByline />

            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
              FactoryJet is a Top Website & E-Commerce Development Company. Starting at Just <span className="font-bold text-[#0F172A]">₹15,000</span> - FactoryJet Offers Professional Web Design & E-Commerce Solutions & Services to Businesses in Madurai.
            </p>

            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g,'')}`}
              className="inline-flex items-center text-[#10B981] font-bold text-lg hover:underline decoration-2 underline-offset-4"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Us Now: {CONTACT.whatsapp}
            </a>

            <div className="hidden md:grid grid-cols-2 gap-3 pt-2">
              {TRUST_INDICATORS.slice(0, 4).map((ti, i) => (
                <div key={i} className="flex items-center text-sm font-medium text-[#64748B]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0" />
                  {ti}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form - Glassmorphism */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-5 md:p-8">
              <LeadFormInline
                region="in"
                source="madurai_hero"
                heading="Get a free consultation"
                subheading="Custom proposal in 2 hours — just your name and email."
              />
            </div>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="mt-12 prose max-w-none text-[#64748B] text-justify hidden md:block">
          <p>FactoryJet is Madurai's leading website design company delivering professional website development, WordPress website development, and e-commerce solutions for businesses across Tamil Nadu. As the top website design company in Madurai with 25+ years of combined expertise, we help local businesses, manufacturers, exporters, retailers, and service providers establish powerful online presence that generates leads and drives sales.</p>
          <p className="mt-4">We are the best website design company in Madurai serving businesses across the city's thriving commercial and industrial hubs — KK Nagar, Anna Nagar, Goripalayam, Tallakulam, Thirunagar, Pasumalai, Mattuthavani, and the expanding SIDCO Industrial Estate at Kappalur.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
