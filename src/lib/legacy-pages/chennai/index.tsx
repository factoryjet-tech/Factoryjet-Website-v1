'use client';

import Script from 'next/script';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import AboutEntity from './components/AboutEntity';
import ProblemAgitation from './components/ProblemAgitation';
import Comparison from './components/Comparison';
import Services from './components/Services';
import Process from './components/Process';
import Technologies from './components/Technologies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CaseStudies from './components/CaseStudies';
// import Footer from './components/Footer'; // Commented out - using global Footer instead
import FinalCTA from './components/FinalCTA';
import GlassCard from './components/GlassCard';
import StickyWhatsApp from './components/StickyWhatsApp';
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm';
import { INDUSTRIES, TESTIMONIALS } from './constant';
import { Star } from 'lucide-react';

// Updated Industries Component
const Industries = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-jet-navy">Industries We Serve in Chennai</h2>
        <p className="text-jet-slate">Chennai's economy spans IT, automobiles, manufacturing, healthcare, and more. FactoryJet brings industry-specific expertise to every sector:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((ind, i) => (
          <GlassCard key={i} className="text-left py-8 hover:bg-slate-50 transition-transform cursor-default flex flex-col h-full">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 text-jet-blue rounded-full flex items-center justify-center group-hover:bg-jet-blue group-hover:text-white transition-colors shrink-0">
                    <ind.icon size={24} />
                </div>
                <h3 className="text-jet-navy font-bold text-lg leading-tight">{ind.name}</h3>
             </div>
             <p className="text-sm text-jet-slate leading-relaxed">{ind.description}</p>
          </GlassCard>
        ))}
      </div>
      <div className="text-center mt-12">
         <p className="font-bold text-jet-navy mb-4">Don't see your industry? We serve 50+ sectors.</p>
         <button className="text-jet-blue border border-jet-blue px-6 py-2 rounded-lg font-bold hover:bg-blue-50">Discuss Your Industry</button>
      </div>
    </div>
  </section>
);

// New Testimonials Component
const Testimonials = () => (
   <section className="py-20 bg-jet-white">
      <div className="container mx-auto px-4 lg:px-8">
         <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center text-jet-navy">What Chennai Clients Say About FactoryJet</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
               <GlassCard key={i} className="p-8">
                  <p className="text-slate-600 italic mb-6 text-lg">"{t.text}"</p>
                  <div>
                     <p className="font-bold text-jet-navy text-lg">{t.name}</p>
                     <p className="text-sm text-slate-500 mb-2">{t.role}</p>
                     <div className="flex text-yellow-400">
                        {[...Array(t.rating)].map((_, r) => <Star key={r} size={16} fill="currentColor" />)}
                     </div>
                  </div>
               </GlassCard>
            ))}
         </div>
         <div className="text-center mt-12">
            <h3 className="font-bold text-xl mb-4">Join 100+ satisfied Chennai clients</h3>
            <div className="flex justify-center gap-4">
               <button className="bg-jet-blue text-white px-6 py-2 rounded-lg font-bold">Read More Reviews</button>
            </div>
         </div>
      </div>
   </section>
);

// Locations Component
const Locations = () => (
  <section className="py-24 bg-jet-navy text-center relative overflow-hidden">
     <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
     <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Serving All Chennai Locations</h2>
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">FactoryJet provides website design services across Chennai:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto text-blue-100 text-sm mb-12">
            <div>
               <h4 className="font-bold text-white mb-2">IT Corridors:</h4>
               <p>OMR (Old Mahabalipuram Road), Tidel Park, Taramani, Perungudi, Sholinganallur, Thoraipakkam, Navalur</p>
            </div>
            <div>
               <h4 className="font-bold text-white mb-2">Commercial Areas:</h4>
               <p>T. Nagar, Anna Nagar, Guindy, Nungambakkam, Egmore, Mount Road, Kodambakkam</p>
            </div>
            <div>
               <h4 className="font-bold text-white mb-2">Residential & Mixed:</h4>
               <p>Adyar, Velachery, Mylapore, Porur, Chromepet, Tambaram, Pallavaram</p>
            </div>
            <div>
               <h4 className="font-bold text-white mb-2">Industrial Zones:</h4>
               <p>Ambattur, Guindy Industrial Estate, Oragadam, Sriperumbudur</p>
            </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="bg-white/10 px-3 py-1 rounded text-xs text-white">City: Chennai</span>
            <span className="bg-white/10 px-3 py-1 rounded text-xs text-white">Region: Tamil Nadu</span>
            <span className="bg-white/10 px-3 py-1 rounded text-xs text-white">Office: Tidel Park, OMR</span>
        </div>
     </div>
  </section>
);

function ChennaiPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/services/web-design/chennai",
    "telephone": "+91 96999 77699",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ITPL Main Rd, Tigalarpalya, Brookefield",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Chennai"
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website design costs vary based on complexity. At FactoryJet, we offer packages starting at ₹15,000 for basic websites to ₹5,00,000+ for enterprise solutions."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our streamlined process typically delivers a website in 7 days. More complex projects may take 2-4 weeks."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide e-commerce solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in e-commerce development with Shopify, WooCommerce, and custom platforms."
        }
      },
      {
        "@type": "Question",
        name: "Can you integrate payment gateways?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we integrate all major payment gateways including Razorpay, PayPal, Stripe for secure transactions."
        }
      },
      {
        "@type": "Question",
        name: "Will my website be mobile responsive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. All websites are fully responsive and optimized for all devices."
        }
      }
    ]
  };
  return (
    <div className="bg-white text-jet-navy font-sans selection:bg-jet-orange selection:text-white">
      <Script
        id="chennai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="chennai-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <StickyWhatsApp />
      <ExitIntentLeadForm region="in" source="chennai_exit" />

      <Hero />
      <SocialProof />
      <AboutEntity />
      <ProblemAgitation />
      <Comparison />
      <Services />
      <Process />
      <Technologies />
      <Pricing />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Locations />
      <FinalCTA />
    </div>
  );
}

export default ChennaiPage;