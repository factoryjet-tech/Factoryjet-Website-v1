import React, { useState, FormEvent } from 'react';
import { Star, ChevronDown, Rocket, Phone, MapPin, Mail } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { TESTIMONIALS, FAQS, CONTACT } from '../data.constants';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12 px-4">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-[#64748B] max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

export const Testimonials = () => (
  <section className="py-20 bg-[#FFFBF0]">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="What Our Clients Say" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-orange-100 relative">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
            </div>
            <p className="text-[#0F172A] italic mb-6">"{t.text}"</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold mr-3">
                {t.author[0]}
              </div>
              <div>
                <div className="font-bold text-[#0F172A]">{t.author}</div>
                <div className="text-xs text-[#64748B]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Flatten FAQs for grid display
  const allFaqs = FAQS.flatMap((category, catIndex) =>
    category.items.map((item, index) => ({
      ...item,
      categoryName: category.category,
      id: `${catIndex}-${index}`
    }))
  );

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Frequently Asked Questions" subtitle="No confusion. Just clear answers." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {allFaqs.map((item) => (
            <div key={item.id} className="border border-gray-100 bg-gray-50 rounded-xl overflow-hidden self-start">
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-start p-6 text-left hover:bg-white transition-colors duration-300"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#0052CC] uppercase tracking-wider mb-2 block">{item.categoryName}</span>
                  <span className="font-bold text-[#0F172A] text-lg leading-snug">{item.question}</span>
                </div>
                <div className={`mt-1 p-1 rounded-full ${openIndex === item.id ? 'bg-[#0052CC] text-white' : 'bg-gray-200 text-gray-500'} transition-all duration-300 flex-shrink-0 ml-4`}>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${openIndex === item.id ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-0 bg-white text-[#64748B] leading-relaxed border-t border-transparent">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LocalSEO = () => (
  <section className="py-12 bg-gray-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 text-sm text-[#64748B]">
      <h3 className="text-lg font-bold text-[#0F172A] mb-4">Serving Madurai & Surrounding Districts</h3>
      <p className="mb-4">
        <strong>Madurai City Areas:</strong> KK Nagar, Anna Nagar, Goripalayam, Tallakulam, Thirunagar, Pasumalai, Mattuthavani, Vilangudi, Kochadai, Arapalayam, Sellur, Perungudi, Tiruparankundram, Avaniapuram, SS Colony, TVS Nagar, Narimedu, Jaihindpuram.
      </p>
      <p className="mb-4">
        <strong>Industrial Areas:</strong> SIDCO Industrial Estate Kappalur, Madurai-Tuticorin Industrial Corridor, Thirumangalam Industrial Area, Sivaganga Road Industrial Belt, Melur Industrial Zone.
      </p>
      <p>
        FactoryJet is the leading website design company in Madurai serving businesses across the city and surrounding districts. Our website development in Madurai services extend to Sivaganga, Dindigul, Virudhunagar, Theni, and Ramanathapuram.
      </p>
    </div>
  </section>
);

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
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
        source: 'Final CTA',
        timestamp: serverTimestamp(),
        page: 'Madurai'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0052CC] to-[#003380] text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-[100px] opacity-20"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight drop-shadow-md">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Join 500+ Tamil Nadu businesses who chose the best website design company in Madurai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 items-center mb-10">
          <button
            onClick={() => {
              const form = document.getElementById('final-cta-form');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#FF6B35] rounded-full shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 w-full sm:w-auto min-w-[280px] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              <Rocket className="w-5 h-5 mr-3 animate-pulse" />
              Get Free Quote Today
            </span>
          </button>

          <a
            href={`tel:${CONTACT.phone.replace(/\D/g,'')}`}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0052CC] transition-all duration-300 bg-white rounded-full shadow-xl hover:shadow-white/50 hover:-translate-y-1 w-full sm:w-auto min-w-[280px]"
          >
            <span className="relative flex items-center">
              <Phone className="w-5 h-5 mr-3" />
              Call: {CONTACT.phone}
            </span>
          </a>
        </div>

        <div className="mt-10 inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-blue-50">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-ping"></span>
          Limited Availability: Only 15 new projects/month
        </div>

        {/* Contact Form */}
        <div id="final-cta-form" className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Or Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full h-12 px-4 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
                required
              />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full h-12 px-4 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
                required
              />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full h-12 px-4 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
              required
            />
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent outline-none resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-white text-[#0052CC] font-bold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 text-white px-4 py-2 rounded-lg text-sm">
                Thank you! We'll contact you within 2 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded-lg text-sm">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-24 md:pb-8">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">FactoryJet<span className="text-[#FF6B35]">.</span></h3>
        <p className="text-sm leading-relaxed mb-6">
          Madurai's most trusted website design company. We help local businesses grow online with professional, mobile-responsive, SEO-optimized websites.
        </p>
        <div className="flex space-x-4">
          {/* Social Icons Placeholders */}
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#0052CC] transition-colors cursor-pointer">f</div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">in</div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">t</div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {['Home', 'About Us', 'Services', 'Portfolio', 'Case Studies', 'Blog', 'Contact'].map(link => (
            <li key={link}><a href="#" className="hover:text-[#FF6B35] transition-colors">{link}</a></li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-bold mb-4">Our Services</h4>
        <ul className="space-y-2 text-sm">
          {['Website Design', 'WordPress Development', 'E-Commerce Stores', 'Shopify Development', 'SEO Services', 'Website Redesign'].map(link => (
            <li key={link}><a href="#" className="hover:text-[#FF6B35] transition-colors">{link}</a></li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-bold mb-4">Contact Info</h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-[#FF6B35] flex-shrink-0" />
            <span>{CONTACT.address}</span>
          </li>
          <li className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-[#FF6B35] flex-shrink-0" />
            <a href={`tel:${CONTACT.phone.replace(/\D/g,'')}`}>{CONTACT.phone}</a>
          </li>
          <li className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-[#FF6B35] flex-shrink-0" />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500 max-w-7xl mx-auto px-4">
      <p className="mb-2">© 2026 FactoryJet Technologies. All rights reserved.</p>
      <p>FactoryJet is the leading website design company in Madurai providing professional website development, WordPress website development, and e-commerce solutions for businesses across Tamil Nadu.</p>
    </div>
  </footer>
);
