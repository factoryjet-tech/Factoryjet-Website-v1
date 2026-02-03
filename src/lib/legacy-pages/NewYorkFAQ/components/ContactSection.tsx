'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    services: [] as string[],
    timeline: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const services = prev.services.includes(value)
        ? prev.services.filter(s => s !== value)
        : [...prev.services, value];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
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
      const docId = `nyc_faq_${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'us_leads', docId), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        services: formData.services,
        timeline: formData.timeline,
        budget: formData.budget,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'nyc_faq_contact_form',
        region: 'US',
        city: 'New York',
      });

      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', company: '', website: '',
        services: [], timeline: '', budget: '', message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="bg-gradient-to-br from-navy to-jetBlue py-20 px-6 sm:px-8 lg:px-12 text-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
            Ready to Transform Your Digital Presence? Let's Talk.
          </h2>
          <p className="text-xl text-blue-100">
            Schedule Your Free 30-Minute Strategy Call Today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b border-jetBlue pb-4 font-heading">Primary Contact</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="bg-jetBlue/30 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-wide">Email</p>
                    <a href="mailto:connect@factoryjet.com" className="text-lg font-medium hover:text-jetOrange transition-colors">connect@factoryjet.com</a>
                  </div>
                </li>
                {/* <li className="flex items-center gap-4">
                  <div className="bg-jetBlue/30 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-wide">Phone (EST)</p>
                    <a href="tel:+19169977699" className="text-lg font-medium hover:text-jetOrange transition-colors">+1 (916) 997-7699</a>
                  </div>
                </li> */}
                <li className="flex items-center gap-4">
                  <div className="bg-jetBlue/30 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-wide">WhatsApp</p>
                    <span className="text-lg font-medium">9169977699</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 border-b border-jetBlue pb-4 font-heading">Business Hours</h3>
              <ul className="space-y-4 text-blue-50">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-jetOrange" />
                  <div>
                    <strong className="block text-white">Monday - Friday</strong>
                    9:00 AM - 6:00 PM EST
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-jetOrange" />
                  <div>
                    <strong className="block text-white">Saturday</strong>
                    10:00 AM - 2:00 PM EST (Email only)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-400" />
                  <div>
                    <strong className="block text-gray-300">Sunday</strong>
                    Closed
                  </div>
                </li>
              </ul>
            </div>
            
             <div className="pt-6">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                    <MapPin className="w-4 h-4"/>
                    <span>Toronto, Ontario (Headquarters)</span>
                </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-navy">
              {status === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-4 font-heading">Message Sent!</h3>
                  <p className="text-lg text-slate">Thank you for contacting FactoryJet. We will respond within 4 business hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-jetBlue font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2 font-heading">Get a Response Within 4 Hours</h3>
                  <p className="text-slate mb-8">Fill out the form below to get started.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">Your Name*</label>
                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jetBlue focus:outline-none bg-gray-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">Your Email*</label>
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jetBlue focus:outline-none bg-gray-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">Your Phone</label>
                        <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jetBlue focus:outline-none bg-gray-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">Company Name*</label>
                        <input required name="company" value={formData.company} onChange={handleInputChange} type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jetBlue focus:outline-none bg-gray-50" />
                      </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-navy mb-2">Current Website (if any)</label>
                        <input name="website" value={formData.website} onChange={handleInputChange} type="url" className="w-full p-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-jetBlue focus:outline-none bg-white shadow-sm" placeholder="https://" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-3">What do you need?</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['New Website Design', 'E-Commerce Store', 'Website Redesign', 'Custom Web Application', 'SEO Services', 'Not Sure - Need Consultation'].map(opt => (
                          <label key={opt} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                            <input 
                              type="checkbox" 
                              checked={formData.services.includes(opt)}
                              onChange={() => handleCheckboxChange(opt)}
                              className="w-5 h-5 text-jetOrange rounded focus:ring-jetOrange border-gray-300 transition-all" 
                            />
                            <span className="text-slate text-sm font-medium group-hover:text-navy transition-colors">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-3">What's your timeline?</label>
                        <div className="space-y-2">
                           {['Urgent (Within 2 weeks)', '1 month', '2-3 months', 'Flexible'].map(opt => (
                             <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                               <input 
                                name="timeline" 
                                type="radio" 
                                value={opt} 
                                checked={formData.timeline === opt}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-jetGreen focus:ring-jetGreen border-gray-300" 
                               />
                               <span className="text-slate text-sm group-hover:text-navy transition-colors">{opt}</span>
                             </label>
                           ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-3">Budget Range?</label>
                        <div className="space-y-2">
                           {['Under $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+', 'Need Guidance'].map(opt => (
                             <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                               <input 
                                name="budget" 
                                type="radio" 
                                value={opt} 
                                checked={formData.budget === opt}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-jetBlue focus:ring-jetBlue border-gray-300" 
                               />
                               <span className="text-slate text-sm group-hover:text-navy transition-colors">{opt}</span>
                             </label>
                           ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Tell us more about your project:</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jetBlue focus:outline-none bg-gray-50"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-jetOrange hover:bg-opacity-90 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1 text-lg flex justify-center items-center"
                    >
                      {status === 'submitting' ? 'Sending...' : 'BOOK FREE CONSULTATION'}
                    </button>
                    
                    <p className="text-xs text-center text-slate">
                      We respect your privacy. Information used only to discuss your project. Never shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;