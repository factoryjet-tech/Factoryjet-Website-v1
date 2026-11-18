import React from 'react';
import { Calendar, Mail, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-11127037244/N5PhCPWusNQbELy65Lkp'
    });
  }
};

const ContactMethods: React.FC = () => {
  return (
    <section id="connect" className="py-12 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm font-bold text-[#B23E13] uppercase tracking-widest mb-2">Connect With Us</h2>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Choose Your Preferred Contact Method</h3>
          <p className="mt-4 text-slate-600">Need immediate assistance? We're here for you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: Consultation */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-neumorphic border-t-4 border-jetBlue flex flex-col h-full"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 text-jetBlue rounded-xl flex items-center justify-center mb-5 md:mb-6">
              <Calendar className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Schedule a Free Consultation</h4>
            <span className="inline-block px-3 py-1 bg-blue-50 text-jetBlue text-xs font-bold rounded-full w-fit mb-4">Recommended</span>
            <p className="text-slate-600 mb-6 flex-grow">Best for initial discovery, understanding your needs, and getting expert recommendations tailored to your situation.</p>
            
            <div className="space-y-3 mb-6 md:mb-8 text-sm text-slate-500">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-jetGreen mt-0.5" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-jetGreen mt-0.5" />
                <span>Sat: 10:00 AM - 2:00 PM IST</span>
              </div>
            </div>

            <a href="#contact-form" className="w-full py-3 bg-jetBlue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Book Free 30-Min Call
            </a>
          </motion.div>

        </div>

        {/* Email Section */}
        <div className="mt-10 md:mt-12 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6 text-slate-400" />
                <h4 className="text-lg font-bold text-slate-900">Email Us</h4>
              </div>
              <p className="text-slate-600 text-sm max-w-2xl">
                Best for detailed inquiries and formal communication. We respond within 4 business hours.
                Include your name, company, and needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-slate-500 text-xs uppercase font-semibold">General Inquiries</span>
                <a href="mailto:connect@factoryjet.com" className="text-jetBlue hover:underline font-medium">connect@factoryjet.com</a>
              </div>
              <div>
                <span className="block text-slate-500 text-xs uppercase font-semibold">Sales</span>
                <a href="mailto:connect@factoryjet.com" className="text-jetBlue hover:underline font-medium">connect@factoryjet.com</a>
              </div>
              <div>
                <span className="block text-slate-500 text-xs uppercase font-semibold">Support</span>
                <a href="mailto:connect@factoryjet.com" className="text-jetBlue hover:underline font-medium">connect@factoryjet.com</a>
              </div>
              <div>
                <span className="block text-slate-500 text-xs uppercase font-semibold">Careers</span>
                <a href="mailto:connect@factoryjet.com" className="text-jetBlue hover:underline font-medium">connect@factoryjet.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
