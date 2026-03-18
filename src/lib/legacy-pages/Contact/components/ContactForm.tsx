import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Send } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { ContactFormData, INITIAL_FORM_STATE } from '../data.types';
import { trackFormStart, trackFormSubmit, trackFormSuccess, trackFormError, trackButtonClick } from '@/utils/gtm';

const SERVICES = [
  "Website Design & Development", "E-Commerce Platform", "Digital Marketing (SEO, Social, Ads)", 
  "CRM Implementation", "ERP Implementation", "AI Creative Studio", 
  "Enterprise AI Solutions", "Not sure / Need consultation"
];

const GOALS = [
  "Build new website or e-commerce store", "Improve existing digital presence", 
  "Increase online leads and sales", "Streamline operations with CRM/ERP", 
  "Scale marketing efforts", "Leverage AI and automation", "Other"
];

const TIMELINES = [
  "Urgent (within 1 month)", "Soon (1-3 months)", 
  "Planning ahead (3-6 months)", "Exploring options (6+ months)"
];

const BUDGETS = [
  "Under \u20B950,000", "\u20B950,000 - \u20B91,00,000", "\u20B91,00,000 - \u20B93,00,000",
  "\u20B93,00,000 - \u20B910,00,000", "\u20B910,00,000+", "Not sure / Need guidance"
];

interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}

const Chip: React.FC<ChipProps> = ({ 
  label, 
  selected, 
  onClick, 
  multi = false 
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3 py-2 sm:px-4 rounded-lg text-sm font-medium transition-all border ${
      selected 
        ? 'bg-jetBlue text-white border-jetBlue shadow-md transform scale-[1.02]' 
        : 'bg-white text-slate-600 border-slate-200 hover:border-jetBlue/50 hover:bg-blue-50'
    }`}
  >
    <div className="flex items-center gap-2">
      {selected && <Check className="w-3.5 h-3.5" />}
      {label}
    </div>
  </button>
);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists 
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleSingleSelect = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Track form submission
    trackFormSubmit('contact_page_form', {
      services: formData.services,
      goal: formData.goal,
      budget: formData.budget,
      timeline: formData.timeline,
    });

    try {
      // Generate readable document ID: 2026-12-18_13-30-45_JohnDoe
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0]; // 2026-12-18
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // 13-30-45
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15); // JohnDoe (no spaces, max 15 chars)
      const docId = `${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'contactpage', docId), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'contact_page',
      });

      // Track successful submission
      trackFormSuccess('contact_page_form');
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      const errorMessage = 'Something went wrong. Please try again.';
      trackFormError('contact_page_form', errorMessage);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl p-6 md:p-12 text-center shadow-glass border border-emerald-100">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
            <Check className="w-10 h-10 text-jetGreen" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">Thank You! Request Received.</h2>
          <p className="text-base sm:text-lg text-slate-600 mb-6 md:mb-8 max-w-xl mx-auto">
            We have received your details. A team member will review your request and respond within <strong>2 business hours</strong>.
          </p>
          <div className="bg-slate-50 p-4 sm:p-6 rounded-xl text-left max-w-md mx-auto space-y-3">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-jetGreen rounded-full"></div>
               <span className="text-sm text-slate-700">Immediate: Confirmation Email Sent</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
               <span className="text-sm text-slate-700">Within 2 Hours: Personal Response</span>
             </div>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false);
              setError(null);
            }}
            className="mt-6 md:mt-8 text-jetBlue font-medium hover:underline"
          >
            Submit another response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-5 sm:p-6 md:p-12">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Get a Custom Proposal for Your Project</h2>
            <p className="text-slate-600 mt-2">Fill out the details below. We guarantee a response within 2 business hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
            
            {/* Step 1: About You */}
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-jetBlue text-white font-bold text-sm">1</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Tell Us About You</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue focus:border-jetBlue outline-none transition-all bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue focus:border-jetBlue outline-none transition-all bg-white" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue focus:border-jetBlue outline-none transition-all bg-white" placeholder="Enter your contact number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue focus:border-jetBlue outline-none transition-all bg-white" placeholder="Acme Inc." />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Website (if applicable)</label>
                  <input type="url" name="website" value={formData.website} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue focus:border-jetBlue outline-none transition-all bg-white" placeholder="https://..." />
                </div>
              </div>
            </div>

            {/* Step 2: About Needs */}
            <div className="space-y-6 md:space-y-8 pt-6 md:pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-jetBlue text-white font-bold text-sm">2</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Tell Us About Your Needs</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3 md:mb-4">What services are you interested in? (Select all that apply)</label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {SERVICES.map(service => (
                    <Chip key={service} label={service} selected={formData.services.includes(service)} onClick={() => toggleService(service)} multi />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3 md:mb-4">What's your primary goal?</label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {GOALS.map(item => (
                    <Chip key={item} label={item} selected={formData.goal === item} onClick={() => handleSingleSelect('goal', item)} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-3 md:mb-4">What's your timeline?</label>
                   <div className="flex flex-col gap-2">
                    {TIMELINES.map(item => (
                      <label key={item} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                        <input type="radio" name="timeline" value={item} checked={formData.timeline === item} onChange={handleInputChange} className="text-jetBlue focus:ring-jetBlue" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </label>
                    ))}
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-3 md:mb-4">Estimated Budget Range</label>
                   <div className="flex flex-col gap-2">
                    {BUDGETS.map(item => (
                      <label key={item} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                         <input type="radio" name="budget" value={item} checked={formData.budget === item} onChange={handleInputChange} className="text-jetBlue focus:ring-jetBlue" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </label>
                    ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Step 3: Tell Us More */}
            <div className="space-y-5 md:space-y-6 pt-6 md:pt-8 border-t border-slate-100">
               <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-jetBlue text-white font-bold text-sm">3</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Tell Us More</h3>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Please describe your project or needs in detail *</label>
                <textarea required name="description" value={formData.description} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue focus:border-jetBlue outline-none transition-all bg-white" placeholder="E.g., We need a new e-commerce store on Shopify to replace our outdated website..." />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">How did you hear about us?</label>
                <select name="referral" value={formData.referral} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue bg-white">
                  <option value="">Select an option</option>
                  <option value="Google Search">Google Search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

             {/* Step 4: Contact Pref */}
             <div className="space-y-5 md:space-y-6 pt-6 md:pt-8 border-t border-slate-100">
               <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-jetBlue text-white font-bold text-sm">4</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Preferred Contact Method</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">How should we contact you?</label>
                   <select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue bg-white">
                    <option value="Email">Email</option>
                    <option value="Phone">Phone Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Video Call">Video Call</option>
                  </select>
                </div>
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Best time to reach you?</label>
                   <select name="bestTime" value={formData.bestTime} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-jetBlue bg-white">
                    <option value="Anytime">Anytime</option>
                    <option value="Morning">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM - 3 PM)</option>
                    <option value="Evening">Evening (3 PM - 7 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="pt-6 md:pt-8">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-jetOrange hover:bg-orange-600 text-white font-bold text-base sm:text-lg py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>Submit Request <Send className="w-5 h-5" /></>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
