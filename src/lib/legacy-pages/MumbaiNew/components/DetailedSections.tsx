import React, { useState, useEffect, FormEvent } from 'react';
import { servicesData, caseStudiesData, testimonialsData, faqData } from '../data';
import {
  Star, CheckCircle, Package, ArrowRight, Settings, Globe, Truck,
  ShoppingCart, Calculator, Check, X, ChevronDown, ChevronUp,
  Factory, Beaker, Shirt, Zap, Container, Download, BarChart2, TrendingUp,
  DollarSign
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

interface SectionProps {
  onOpenModal?: () => void;
}

/* --- SECTION 6: SERVICES (BENTO GRID) --- */
export const ServicesSection: React.FC<SectionProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-bgLight py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Industrial Web Design Services in Mumbai</h2>
          <p className="text-slate mt-4 max-w-2xl mx-auto">From manufacturer catalogs to B2B e-commerce portals, we build websites that generate export leads and grow wholesale orders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 3;
            return (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-light flex flex-col ${isFeatured ? 'lg:col-span-2 lg:bg-navy' : ''}`}>
                <div className="mb-6">
                   {/* Icon placeholder logic */}
                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isFeatured ? 'bg-blue-50 text-primary lg:bg-white/10 lg:text-accent' : 'bg-blue-50 text-primary'}`}>
                      <Package className="w-6 h-6" />
                   </div>
                   <h3 className={`text-2xl font-bold mb-2 ${isFeatured ? 'text-navy lg:text-white' : 'text-navy'}`}>{service.title}</h3>
                   <p className={`text-sm mt-2 italic ${isFeatured ? 'text-slate lg:text-white/70' : 'text-slate'}`}>Ideal For: {service.idealFor}</p>
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${isFeatured ? 'text-slate lg:text-white/80' : 'text-slate'}`}>{service.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`text-sm flex items-start gap-2 ${isFeatured ? 'text-slate lg:text-white/90' : 'text-slate'}`}>
                      <CheckCircle className={`w-4 h-4 mt-0.5 ${isFeatured ? 'text-primary lg:text-accent' : 'text-primary'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenModal}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${isFeatured ? 'bg-secondary text-white hover:bg-orange-600 lg:hover:bg-white lg:hover:text-navy' : 'bg-primary text-white hover:bg-navy'}`}
                >
                  {isFeatured ? 'Contact Sales →' : 'Get Quote →'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* --- ROI CALCULATOR COMPONENT --- */
const ROICalculator = () => {
  // State for Calculator
  const [businessType, setBusinessType] = useState<'lead_gen' | 'ecommerce'>('lead_gen');
  const [traffic, setTraffic] = useState(1000);
  const [conversionRate, setConversionRate] = useState(1.5);
  const [valuePerLeadOrOrder, setValuePerLeadOrOrder] = useState(5000);
  const [investment, setInvestment] = useState(50000);

  // State for Modal
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: ''
  });

  // Calculation results
  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    monthlyGain: 0,
    yearlyGain: 0,
    roiPercent: 0,
    paybackPeriod: 0
  });

  useEffect(() => {
    // Assumptions for "High Performance Website"
    const trafficMultiplier = 1.4; // +40% traffic via SEO/AEO
    const convMultiplier = 1.5;    // +50% conversion via UX/Speed

    const currentRevenue = traffic * (conversionRate / 100) * valuePerLeadOrOrder;

    const newTraffic = traffic * trafficMultiplier;
    const newConv = conversionRate * convMultiplier;
    const projectedRevenue = newTraffic * (newConv / 100) * valuePerLeadOrOrder;

    const monthlyGain = projectedRevenue - currentRevenue;
    const yearlyGain = monthlyGain * 12;

    // ROI = (Gain from Investment - Cost of Investment) / Cost of Investment
    // We calculate 1st Year ROI
    const roiPercent = investment > 0 ? (yearlyGain / investment) * 100 : 0;

    // Payback in months
    const paybackPeriod = monthlyGain > 0 ? investment / monthlyGain : 0;

    setResults({
      currentRevenue,
      projectedRevenue,
      monthlyGain,
      yearlyGain,
      roiPercent,
      paybackPeriod
    });
  }, [traffic, conversionRate, valuePerLeadOrOrder, investment]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Using direct db import
      // Direct db usage

      await addDoc(collection(db, 'mumbai_leads'), {
        ...formData,
        businessType,
        traffic,
        conversionRate,
        valuePerLeadOrOrder,
        investment,
        calculatedROI: results.roiPercent.toFixed(0),
        calculatedPayback: results.paybackPeriod.toFixed(1),
        source: 'ROI Calculator',
        timestamp: serverTimestamp(),
        page: 'Mumbai'
      });

      setFormSubmitted(true);
      setFormData({ name: '', company: '', phone: '', email: '' });
    } catch (error) {
      console.error('Error submitting ROI form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="mt-24 mb-12">
      <div className="bg-gradient-to-br from-navy to-blue-900 rounded-3xl p-6 md:p-12 shadow-2xl border border-white/10 text-white">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Real ROI Calculator</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Calculate exactly how a high-performance, SEO-ready FactoryJet website pays for itself.
            Based on data from 500+ industrial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* INPUTS COLUMN */}
          <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex bg-white/10 p-1 rounded-lg mb-6">
              <button
                onClick={() => setBusinessType('lead_gen')}
                className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${businessType === 'lead_gen' ? 'bg-primary text-white shadow' : 'text-blue-200 hover:text-white'}`}
              >
                Lead Generation (B2B)
              </button>
              <button
                onClick={() => setBusinessType('ecommerce')}
                className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${businessType === 'ecommerce' ? 'bg-primary text-white shadow' : 'text-blue-200 hover:text-white'}`}
              >
                E-Commerce
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                Monthly Visitors (Current)
              </label>
              <input
                type="range" min="100" max="10000" step="100"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-2 bg-blue-900 rounded-lg appearance-none cursor-pointer accent-secondary mb-2"
              />
              <div className="flex justify-between text-sm font-mono bg-navy/50 p-2 rounded border border-white/10">
                <span>100</span>
                <span className="text-secondary font-bold">{traffic}</span>
                <span>10,000+</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                Conversion Rate (%)
              </label>
              <input
                type="range" min="0.1" max="5.0" step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-blue-900 rounded-lg appearance-none cursor-pointer accent-secondary mb-2"
              />
              <div className="flex justify-between text-sm font-mono bg-navy/50 p-2 rounded border border-white/10">
                <span>0.1%</span>
                <span className="text-secondary font-bold">{conversionRate}%</span>
                <span>5.0%</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                {businessType === 'lead_gen' ? 'Avg. Value per Lead (₹)' : 'Avg. Order Value (AOV) (₹)'}
              </label>
              <input
                type="number"
                value={valuePerLeadOrOrder}
                onChange={(e) => setValuePerLeadOrOrder(Number(e.target.value))}
                className="w-full p-3 bg-navy/50 border border-white/20 rounded-lg text-white font-mono focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                Estimated Website Investment (₹)
              </label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full p-3 bg-navy/50 border border-white/20 rounded-lg text-white font-mono focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {/* RESULTS COLUMN */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-xl font-bold border-b border-white/10 pb-2 mb-4">Projected Growth with FactoryJet</h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="text-xs text-blue-300 uppercase mb-1">Current Monthly Revenue</div>
                  <div className="text-lg font-mono text-white/70">{formatCurrency(results.currentRevenue)}</div>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <div className="text-xs text-accent uppercase mb-1 font-bold">Projected Monthly Revenue</div>
                  <div className="text-xl font-mono text-white font-bold">{formatCurrency(results.projectedRevenue)}</div>
                  <div className="text-xs text-accent mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +{(results.monthlyGain / (results.currentRevenue || 1) * 100).toFixed(0)}% Lift
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20 mt-6">
                 <div className="flex items-center gap-3 mb-2">
                    <BarChart2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-bold uppercase tracking-wider text-blue-200">1st Year Additional Profit</span>
                 </div>
                 <div className="text-4xl font-bold text-white font-mono mb-2">
                   {formatCurrency(results.yearlyGain)}
                 </div>
                 <p className="text-xs text-blue-200">
                   *Based on conservative estimates of 40% traffic lift (SEO/AEO) and 50% conversion lift (UX/Speed).
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                 <div className="p-4 bg-navy/50 rounded-lg border border-white/10">
                    <div className="text-xs text-slate-400 uppercase mb-1">ROI Multiplier</div>
                    <div className="text-2xl font-bold text-green-400">{results.roiPercent.toFixed(0)}%</div>
                 </div>
                 <div className="p-4 bg-navy/50 rounded-lg border border-white/10">
                    <div className="text-xs text-slate-400 uppercase mb-1">Payback Period</div>
                    <div className="text-2xl font-bold text-green-400">{results.paybackPeriod < 1 ? '< 1 Month' : `${results.paybackPeriod.toFixed(1)} Months`}</div>
                 </div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="mt-8 w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Full ROI Report (PDF)
            </button>
          </div>
        </div>
      </div>

      {/* DOWNLOAD MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl border border-light">
             <button
               onClick={() => setShowModal(false)}
               className="absolute top-4 right-4 text-slate-400 hover:text-navy"
             >
               <X className="w-6 h-6" />
             </button>

             {!formSubmitted ? (
               <>
                 <div className="text-center mb-6">
                   <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Download className="w-6 h-6 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold text-navy">Download ROI Report</h3>
                   <p className="text-sm text-slate mt-2">Get the detailed PDF breakdown sent to your email.</p>
                 </div>

                 <form className="space-y-4" onSubmit={handleFormSubmit}>
                   <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                     <input
                       type="text"
                       name="name"
                       value={formData.name}
                       onChange={handleFormChange}
                       required
                       className="w-full border border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                       placeholder="John Doe"
                     />
                   </div>
                   <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company Name</label>
                     <input
                       type="text"
                       name="company"
                       value={formData.company}
                       onChange={handleFormChange}
                       required
                       className="w-full border border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                       placeholder="Your Business Ltd."
                     />
                   </div>
                   <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                     <input
                       type="tel"
                       name="phone"
                       value={formData.phone}
                       onChange={handleFormChange}
                       required
                       className="w-full border border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                       placeholder="+91 99999 99999"
                     />
                   </div>
                   <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                     <input
                       type="email"
                       name="email"
                       value={formData.email}
                       onChange={handleFormChange}
                       required
                       className="w-full border border-light rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                       placeholder="john@company.com"
                     />
                   </div>
                   {submitError && (
                     <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
                   )}
                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-primary hover:bg-navy text-white font-bold py-3 rounded-lg mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? 'Submitting...' : 'Download PDF Report'}
                   </button>
                   <p className="text-[10px] text-center text-slate-400">
                     We respect your privacy. No spam.
                   </p>
                 </form>
               </>
             ) : (
               <div className="text-center py-8">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Check className="w-8 h-8 text-green-600" />
                 </div>
                 <h3 className="text-xl font-bold text-navy mb-2">Success!</h3>
                 <p className="text-slate mb-6">Your detailed ROI report has been generated and sent to your email address.</p>
                 <button
                   onClick={() => { setShowModal(false); setFormSubmitted(false); }}
                   className="text-primary font-bold hover:underline"
                 >
                   Close Window
                 </button>
               </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

/* --- SECTION 9: PRICING --- */
export const PricingSection: React.FC<SectionProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'website' | 'ecommerce' | 'amc'>('website');

  // Helper to render checkmark item
  const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-2">
      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
      <span className="text-xs text-slate-700 font-medium">{text}</span>
    </div>
  );

  // Helper for Section Header within card
  const FeatureHeader = ({ text }: { text: string }) => (
    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-5 mb-3 border-b border-light pb-1">
      {text}
    </div>
  );

  return (
    <section className="bg-white py-16 md:py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-navy text-center mb-3 font-heading leading-tight">
          Transparent, <span className="text-primary">Value-Driven</span> <br className="hidden md:block" /> Pricing
        </h2>
        <p className="text-center text-slate mb-10 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence.
        </p>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 md:gap-0 bg-white md:border border-light md:rounded-full p-1 shadow-none md:shadow-sm">
            {[
              { id: 'website', label: 'Website Design' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'amc', label: 'AMC (Maintenance)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border md:border-0 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md border-primary'
                    : 'text-slate-500 hover:text-navy hover:bg-slate-50 border-light bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRICING CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* ================= WEBSITE DESIGN TAB ================= */}
          {activeTab === 'website' && (
            <>
              {/* STARTER */}
              <div className="w-full max-w-md mx-auto md:max-w-none border border-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white relative">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Starter</h3>
                <p className="text-xs text-slate-500 mb-4">Launchpad</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-navy">₹29,999</span>
                  <span className="text-xs text-slate-500 font-medium">+ GST</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm mb-8">
                  Select Plan
                </button>

                <FeatureHeader text="Core" />
                <FeatureItem text="5 Pages" />
                <FeatureItem text="WordPress/React Basics" />
                <FeatureItem text="Responsive" />

                <FeatureHeader text="SEO" />
                <FeatureItem text="XML Sitemap" />
                <FeatureItem text="Basic Meta" />
                <FeatureItem text="Google Maps" />

                <FeatureHeader text="Performance" />
                <FeatureItem text="Standard Caching" />
                <FeatureItem text="Auto-Resize Images" />

                <FeatureHeader text="Security" />
                <FeatureItem text="Standard HTTPS" />
                <FeatureItem text="Basic Login Protection" />
                <FeatureItem text="ReCaptcha v2" />

                <FeatureHeader text="Conversion" />
                <FeatureItem text="Click-to-Call" />
                <FeatureItem text="Standard Forms" />

                <FeatureHeader text="Hosting" />
                <FeatureItem text="99% Uptime" />
              </div>

              {/* BUSINESS (POPULAR) */}
              <div className="w-full max-w-md mx-auto md:max-w-none border-2 border-primary rounded-2xl p-6 shadow-xl relative bg-white transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Most Popular Choice
                </div>
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1 mt-2">Business</h3>
                <p className="text-xs text-slate-500 mb-4">Growth</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-navy">₹59,999</span>
                  <span className="text-xs text-slate-500 font-medium">+ GST</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg bg-secondary text-white font-bold hover:bg-orange-600 transition-colors text-sm mb-8 shadow-lg shadow-orange-200">
                  Get Started Now
                </button>

                <FeatureHeader text="Core" />
                <FeatureItem text="12 Pages" />
                <FeatureItem text="Hybrid AI Architecture" />
                <FeatureItem text="Mobile-First Indexing" />
                <FeatureItem text="Legacy Browser Support" />

                <FeatureHeader text="SEO" />
                <FeatureItem text="Advanced Robots.txt" />
                <FeatureItem text="Open Graph Tags" />
                <FeatureItem text="Schema.org (JSON-LD)" />
                <FeatureItem text="G-Business Profile" />

                <FeatureHeader text="Performance" />
                <FeatureItem text="Lighthouse 90+" />
                <FeatureItem text="WebP Compression" />
                <FeatureItem text="Cloudflare CDN" />
                <FeatureItem text="Database Query Opt" />

                <FeatureHeader text="Security" />
                <FeatureItem text="Military-Grade SSL" />
                <FeatureItem text="Brute Force Protection" />
                <FeatureItem text="ReCaptcha v3" />
                <FeatureItem text="Daily Cloud Backups" />

                <FeatureHeader text="Conversion" />
                <FeatureItem text="Sticky Bottom Bar" />
                <FeatureItem text="WhatsApp Widget" />
                <FeatureItem text="Multi-Step Forms" />
                <FeatureItem text="GA4 Setup" />
                <FeatureItem text="Insta Feed" />

                <FeatureHeader text="Hosting" />
                <FeatureItem text="99.9% Uptime" />
                <FeatureItem text="Unmetered Bandwidth" />
                <FeatureItem text="5 Business Emails" />
              </div>

              {/* ENTERPRISE */}
              <div className="w-full max-w-md mx-auto md:max-w-none border border-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white relative">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Enterprise</h3>
                <p className="text-xs text-slate-500 mb-4">Dominance</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-navy">₹1,19,999</span>
                  <span className="text-xs text-slate-500 font-medium">+ GST</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm mb-8">
                  Select Plan
                </button>

                <FeatureHeader text="Core" />
                <FeatureItem text="20+ Dynamic Pages" />
                <FeatureItem text="Next.js/Headless" />
                <FeatureItem text="PWA Ready" />
                <FeatureItem text="Retina Support" />

                <FeatureHeader text="SEO" />
                <FeatureItem text="Log File Analysis" />
                <FeatureItem text="Twitter Cards" />
                <FeatureItem text="Voice Search (AEO)" />
                <FeatureItem text="Local Citations" />

                <FeatureHeader text="Performance" />
                <FeatureItem text="Core Web Vitals 'Green'" />
                <FeatureItem text="Lazy Loading" />
                <FeatureItem text="Global Edge Network" />
                <FeatureItem text="Redis Object Caching" />

                <FeatureHeader text="Security" />
                <FeatureItem text="Wildcard SSL" />
                <FeatureItem text="DDoS Mitigation" />
                <FeatureItem text="Enterprise Spam Firewall" />
                <FeatureItem text="Real-Time Redundant Backups" />

                <FeatureHeader text="Conversion" />
                <FeatureItem text="Exit Intent Popups" />
                <FeatureItem text="AI Chatbot Ready" />
                <FeatureItem text="CRM Integration" />
                <FeatureItem text="Heatmaps" />
                <FeatureItem text="Auto-Social Posting" />

                <FeatureHeader text="Hosting" />
                <FeatureItem text="99.99% Uptime" />
                <FeatureItem text="High-Frequency Compute" />
                <FeatureItem text="Unlimited G-Suite Emails" />
              </div>
            </>
          )}

          {/* ================= E-COMMERCE TAB ================= */}
          {activeTab === 'ecommerce' && (
            <>
              {/* SHOP STARTER */}
              <div className="w-full max-w-md mx-auto md:max-w-none border border-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white relative">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Shop Starter</h3>
                <p className="text-xs text-slate-500 mb-4">Validation</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-navy">₹59,999</span>
                  <span className="text-xs text-slate-500 font-medium">+ GST</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm mb-8">
                  Select Plan
                </button>

                <FeatureHeader text="Core Features" />
                <FeatureItem text="20 Products" />
                <FeatureItem text="Standard Checkout" />
                <FeatureItem text="Guest Checkout" />
                <FeatureItem text="Basic Coupons" />
                <FeatureItem text="Star Ratings" />
                <FeatureItem text="Basic Search" />
                <FeatureItem text="Razorpay/UPI" />
                <FeatureItem text="Flat Rate Shipping" />
                <FeatureItem text="Simple Tax" />
                <FeatureItem text="Email Receipt" />
                <FeatureItem text="Meta Titles" />
                <FeatureItem text="Alt Tags" />
              </div>

              {/* SHOP PRO (POPULAR) */}
              <div className="w-full max-w-md mx-auto md:max-w-none border-2 border-primary rounded-2xl p-6 shadow-xl relative bg-white transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Most Popular Choice
                </div>
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1 mt-2">Shop Pro</h3>
                <p className="text-xs text-slate-500 mb-4">Bestseller</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-navy">₹99,999</span>
                  <span className="text-xs text-slate-500 font-medium">+ GST</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg bg-secondary text-white font-bold hover:bg-orange-600 transition-colors text-sm mb-8 shadow-lg shadow-orange-200">
                  Get Started Now
                </button>

                <FeatureHeader text="Arch" />
                <FeatureItem text="100 Products" />
                <FeatureItem text="Variable Products" />
                <FeatureItem text="One-Page Checkout" />
                <FeatureItem text="Customer Dashboard" />

                <FeatureHeader text="Marketing" />
                <FeatureItem text="Dynamic Discounts" />
                <FeatureItem text="Photo Reviews" />
                <FeatureItem text="Abandoned Cart Email" />
                <FeatureItem text="Related Products" />
                <FeatureItem text="Ajax Live Search" />

                <FeatureHeader text="Payments" />
                <FeatureItem text="Multi-Gateway (COD+Credit)" />
                <FeatureItem text="Live Shipping Rates (Shiprocket)" />
                <FeatureItem text="Auto GST Calc" />
                <FeatureItem text="PDF Invoices" />

                <FeatureHeader text="SEO/Tech" />
                <FeatureItem text="Product Schema" />
                <FeatureItem text="Auto-Alt Tags" />
                <FeatureItem text="High-Perf Database mode" />

                <FeatureHeader text="MGMT" />
                <FeatureItem text="Low Stock Alerts" />
                <FeatureItem text="Advanced Sales Reports" />
                <FeatureItem text="Order CSV Export" />
              </div>

              {/* E-COMM EMPIRE */}
              <div className="w-full max-w-md mx-auto md:max-w-none border border-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white relative">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">E-Comm Empire</h3>
                <p className="text-xs text-slate-500 mb-4">Scale</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-navy">₹1,99,999</span>
                  <span className="text-xs text-slate-500 font-medium">+ GST</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm mb-8">
                  Select Plan
                </button>

                <FeatureHeader text="Arch" />
                <FeatureItem text="Unlimited Products" />
                <FeatureItem text="Bundled/Digital" />
                <FeatureItem text="Distraction-Free Checkout" />
                <FeatureItem text="Social Login" />

                <FeatureHeader text="Marketing" />
                <FeatureItem text="BOGO Logic" />
                <FeatureItem text="Verified Badges" />
                <FeatureItem text="SMS/WhatsApp Notifs" />
                <FeatureItem text="In-Cart Upsells" />
                <FeatureItem text="AI Search & Filter" />

                <FeatureHeader text="Payments" />
                <FeatureItem text="International (Stripe)" />
                <FeatureItem text="Pincode Check" />
                <FeatureItem text="Multi-State Tax" />
                <FeatureItem text="GST Tax Invoices" />

                <FeatureHeader text="SEO/Tech" />
                <FeatureItem text="Google Merchant Feed" />
                <FeatureItem text="Video Gallery" />
                <FeatureItem text="Redis Caching for Store" />

                <FeatureHeader text="MGMT" />
                <FeatureItem text="Multi-Warehouse" />
                <FeatureItem text="Cohort Analysis" />
                <FeatureItem text="ERP API Ready" />
              </div>
            </>
          )}

          {/* ================= AMC TAB ================= */}
          {activeTab === 'amc' && (
            <>
              {/* ESSENTIAL */}
              <div className="w-full max-w-md mx-auto md:max-w-none border border-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white relative">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Essential</h3>
                <p className="text-xs text-slate-500 mb-4">Insurance</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-navy">₹11,999</span>
                  <span className="text-xs text-slate-500 font-medium">/Year</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm mb-8">
                  Select Plan
                </button>

                <FeatureHeader text="Core Maintenance" />
                <FeatureItem text="24/7 Ping Monitor" />
                <FeatureItem text="SSL Renewal" />
                <FeatureItem text="Weekly Scan" />
                <FeatureItem text="Paid Hack Recovery" />
                <FeatureItem text="Weekly DB Backup" />
                <FeatureItem text="Auto-Updates" />

                <FeatureHeader text="Maintenance" />
                <FeatureItem text="Managed Safe Updates" />
                <FeatureItem text="Plugin Compatibility" />
                <FeatureItem text="Child Theme Maint" />
                <FeatureItem text="Monthly DB Cleanup" />

                <FeatureHeader text="Performance" />
                <FeatureItem text="Monthly Core Web Vitals" />
                <FeatureItem text="Broken Link Scan" />
                <FeatureItem text="Bulk Image Compress" />

                <FeatureHeader text="Support" />
                <FeatureItem text="24 Hr Response" />
                <FeatureItem text="WhatsApp Support" />
                <FeatureItem text="Quarterly Strategy Call" />
              </div>

              {/* GROWTH (POPULAR) */}
              <div className="w-full max-w-md mx-auto md:max-w-none border-2 border-primary rounded-2xl p-6 shadow-xl relative bg-white transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Most Popular Choice
                </div>
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1 mt-2">Growth</h3>
                <p className="text-xs text-slate-500 mb-4">Protection</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-navy">₹35,999</span>
                  <span className="text-xs text-slate-500 font-medium">/Year</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg bg-secondary text-white font-bold hover:bg-orange-600 transition-colors text-sm mb-8 shadow-lg shadow-orange-200">
                  Get Started Now
                </button>

                <FeatureHeader text="Health" />
                <FeatureItem text="24/7 HTTP Monitor" />
                <FeatureItem text="CPU/RAM Tracking" />
                <FeatureItem text="Monthly Error Log" />

                <FeatureHeader text="Security" />
                <FeatureItem text="SSL Handshake Opt" />
                <FeatureItem text="Daily Deep Scan" />
                <FeatureItem text="Free Hack Cleanup" />
                <FeatureItem text="Daily Cloud Backup" />

                <FeatureHeader text="Maintenance" />
                <FeatureItem text="Managed Safe Updates" />
                <FeatureItem text="Plugin Compatibility" />
                <FeatureItem text="Child Theme Maint" />
                <FeatureItem text="Monthly DB Cleanup" />

                <FeatureHeader text="Performance" />
                <FeatureItem text="Monthly Core Web Vitals" />
                <FeatureItem text="Broken Link Scan" />
                <FeatureItem text="Bulk Image Compress" />

                <FeatureHeader text="Support" />
                <FeatureItem text="24 Hr Response" />
                <FeatureItem text="WhatsApp Support" />
                <FeatureItem text="Quarterly Strategy Call" />
              </div>

              {/* VIP */}
              <div className="w-full max-w-md mx-auto md:max-w-none border border-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white relative">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">VIP</h3>
                <p className="text-xs text-slate-500 mb-4">Partner</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-navy">₹99,999</span>
                  <span className="text-xs text-slate-500 font-medium">/Year</span>
                </div>
                <button onClick={onOpenModal} className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm mb-8">
                  Select Plan
                </button>

                <FeatureHeader text="Health" />
                <FeatureItem text="Real-Time Alerts" />
                <FeatureItem text="Traffic Spike Mgmt" />
                <FeatureItem text="Deep Server Audits" />

                <FeatureHeader text="Security" />
                <FeatureItem text="Advanced Cert Mgmt" />
                <FeatureItem text="Real-time Firewall" />
                <FeatureItem text="Insurance-Backed Guarantee" />
                <FeatureItem text="Hourly Backups" />

                <FeatureHeader text="Maintenance" />
                <FeatureItem text="Manual Verification" />
                <FeatureItem text="Staging Tests" />
                <FeatureItem text="Code Deprecation Fixes" />
                <FeatureItem text="Query Opt" />

                <FeatureHeader text="Performance" />
                <FeatureItem text="Bi-Weekly Tuning" />
                <FeatureItem text="404 Mgmt" />
                <FeatureItem text="CDN Purging" />

                <FeatureHeader text="Support" />
                <FeatureItem text="4 Hr Priority" />
                <FeatureItem text="Dedicated Manager" />
                <FeatureItem text="Monthly Strategy Call" />
              </div>
            </>
          )}

        </div>

        {/* ROI Calculator Replaces Old Image */}
        <ROICalculator />

        {/* How Pricing Works */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="p-6 bg-bgLight rounded-xl border border-light text-center">
             <div className="font-bold text-xl text-navy mb-2">No lock-in</div>
             <p className="text-slate text-sm">Cancel or pause anytime with 30-day notice.</p>
           </div>
           <div className="p-6 bg-bgLight rounded-xl border border-light text-center">
             <div className="font-bold text-xl text-navy mb-2">Pay-as-you-scale</div>
             <p className="text-slate text-sm">Upgrade/downgrade with no penalty.</p>
           </div>
           <div className="p-6 bg-bgLight rounded-xl border border-light text-center">
             <div className="font-bold text-xl text-navy mb-2">Custom quotes</div>
             <p className="text-slate text-sm">Special requirements? We'll build you a plan.</p>
           </div>
           <div className="p-6 bg-bgLight rounded-xl border border-light text-center">
             <div className="font-bold text-xl text-navy mb-2">Volume discounts</div>
             <p className="text-slate text-sm">Available for long-term partners.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

/* --- SECTION 10: INDUSTRIES --- */
export const IndustriesSection: React.FC = () => {
  const industries = [
    { name: "Manufacturing", icon: Factory },
    { name: "Chemical & Pharma", icon: Beaker },
    { name: "Textile & Garments", icon: Shirt },
    { name: "Electronics", icon: Zap },
    { name: "Food Processing", icon: CheckCircle },
    { name: "Engineering", icon: Settings },
    { name: "Export/Import", icon: Globe },
    { name: "Logistics", icon: Truck },
  ];

  return (
    <section className="bg-bgLight py-20 border-t border-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold text-navy mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-4 border border-light">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy">{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 11: CASE STUDIES --- */
export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Recent Industrial Projects</h2>
        </div>
        <div className="space-y-20">
          {caseStudiesData.map((study, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                 <div className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 inline-block rounded-full mb-4">
                    {study.badge}
                 </div>
                 <h3 className="text-2xl font-bold text-navy mb-2">{study.client}</h3>
                 <div className="text-sm text-slate-500 mb-6 font-medium">{study.industry} | {study.services}</div>

                 <div className="space-y-6">
                   <div>
                     <h4 className="font-bold text-navy text-sm uppercase mb-2">Challenge</h4>
                     <p className="text-slate text-sm leading-relaxed">{study.challenge}</p>
                   </div>
                   <div>
                     <h4 className="font-bold text-navy text-sm uppercase mb-2">Solution</h4>
                     <p className="text-slate text-sm leading-relaxed">{study.solution}</p>
                   </div>
                   <div>
                     <h4 className="font-bold text-navy text-sm uppercase mb-2">Key Results</h4>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                       {study.results.map((res, i) => (
                         <li key={i} className="flex items-start gap-2 text-sm text-slate">
                           <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {res}
                         </li>
                       ))}
                     </ul>
                   </div>
                   {study.testimonial && (
                     <div className="bg-bgLight p-4 rounded-lg border-l-4 border-secondary italic text-sm text-slate-600">
                       "{study.testimonial}"
                       <div className="mt-2 font-bold text-navy not-italic">— {study.testimonialAuthor}</div>
                     </div>
                   )}
                 </div>
               </div>
               <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Case Study Image with Hover Effect - Using aspect-video for reliable rendering and min-h for mobile robustness */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-light group w-full aspect-video md:aspect-[4/3] bg-slate-200 min-h-[250px]">
                     <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                     <img
                       src={study.image}
                       alt={`Case Study: ${study.client} - ${study.industry}`}
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                       loading="lazy"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-bold text-lg">View Project Case Study →</p>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 12: TESTIMONIALS --- */
export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by 500+ Manufacturers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, r) => <Star key={r} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-orange-600 rounded-full flex items-center justify-center font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-blue-300">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 13: FAQS --- */
const FaqItemComp: React.FC<{
  item: typeof faqData[0];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`mb-4 border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-secondary shadow-lg bg-white' : 'border-light bg-white hover:border-blue-300'}`}>
       <button
         onClick={onToggle}
         className="w-full flex justify-between items-center p-5 text-left"
       >
          <span className={`font-bold text-sm md:text-base ${isOpen ? 'text-secondary' : 'text-navy'}`}>{item.question}</span>
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
             {isOpen ? <ChevronUp className="w-5 h-5 text-secondary" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>
       </button>
       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-5 pt-0 text-slate text-sm leading-relaxed border-t border-dashed border-light/50">
             {item.answer}
          </div>
       </div>
    </div>
  );
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const mid = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, mid);
  const rightFaqs = faqData.slice(mid);

  return (
    <section className="bg-bgBlueTint py-24 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#0052CC_1px,transparent_1px)] [background-size:20px_20px]"></div>

       <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-slate mb-12 max-w-2xl mx-auto">Everything you need to know about building a high-performance industrial website.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
           <div>
              {leftFaqs.map((item, i) => (
                <FaqItemComp
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
           </div>
           <div>
              {rightFaqs.map((item, i) => {
                const globalIndex = mid + i;
                return (
                  <FaqItemComp
                    key={i}
                    item={item}
                    isOpen={openIndex === globalIndex}
                    onToggle={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                  />
                );
              })}
           </div>
        </div>
      </div>
    </section>
  );
};
