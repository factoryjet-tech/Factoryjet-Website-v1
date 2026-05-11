'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Minus,
  Lightbulb,
  Palette,
  Code2,
  ShoppingBag,
  Search,
  LifeBuoy,
} from 'lucide-react';

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-11127037244/N5PhCPWusNQbELy65Lkp'
    });
  }
};

// --- DATA STRUCTURE ---
const categories = [
  { id: 'strategy', label: 'Strategy & Process', icon: Lightbulb, desc: 'Timeline, ownership, and how we work.' },
  { id: 'design', label: 'Design & UX', icon: Palette, desc: 'Revisions, mobile-first, and aesthetics.' },
  { id: 'tech', label: 'Technical & Engineering', icon: Code2, desc: 'Hosting, security, and tech stack.' },
  { id: 'ecommerce', label: 'E-Commerce & Scale', icon: ShoppingBag, desc: 'Payments, shipping, and products.' },
  { id: 'seo', label: 'SEO & AI Growth', icon: Search, desc: 'Ranking on Google & ChatGPT.' },
  { id: 'support', label: 'Support & Pricing', icon: LifeBuoy, desc: 'AMCs, refunds, and after-care.' },
];

const faqData: Record<string, Array<{ q: string; a: string }>> = {
  strategy: [
    {
      q: "How long does it *really* take to launch a website?",
      a: "We move fast. For our **Starter** and **Business** packages, we have a strict **7-day delivery timeline**. Custom Enterprise projects or complex E-commerce stores have tailored timelines — we scope these upfront so there are zero surprises."
    },
    {
      q: "Who owns the code and design after you're done?",
      a: "You do. 100%. Once the final payment is cleared, we transfer full intellectual property rights, source code, and admin credentials to you. We don't hold your business hostage."
    },
    {
      q: "Do I need to have all my content ready before we start?",
      a: "Not necessarily. We can start with a 'Content Frame' using placeholder text to get the structure right. However, having your text and images ready helps us launch faster. If you need help writing content, we offer AI-enhanced copywriting services."
    },
    {
      q: "What do you need from me to get started?",
      a: "Just three things: 1) Your logo (if you have one), 2) A rough idea of pages you need (e.g., Home, About, Services), and 3) Examples of websites you like. We handle the rest."
    },
    {
      q: "Do you outsource your work to freelancers?",
      a: "No. FactoryJet is a fully in-house team of architects, designers, and developers. This ensures strict quality control, data security, and communication speed."
    },
    {
      q: "Do I have to pay everything upfront?",
      a: "No. We typically work on a **50% advance** to book your slot and start the work, and the remaining **50% before the final handover** and launch."
    },
    {
      q: "Can I sign a Non-Disclosure Agreement (NDA)?",
      a: "Absolutely. We work with many startups and enterprises with sensitive ideas. We are happy to sign an NDA before we discuss your project details."
    }
  ],
  design: [
    {
      q: "Do you use pre-made templates or custom designs?",
      a: "We use a **Hybrid Approach**. We have our own proprietary high-performance component library (like LEGO blocks) that allows us to build custom-looking sites extremely fast. For Enterprise clients, we design 100% from scratch using Figma."
    },
    {
      q: "What if I don't like the design?",
      a: "That's why we have a Revision Phase. We design the homepage first and get your feedback. Our packages include 2-3 rounds of major revisions to ensure the visual style matches your vision perfectly."
    },
    {
      q: "Will my website look good on mobile phones?",
      a: "It will look *better* on mobile. We follow a **Mobile-First Design** philosophy. Since 80% of traffic comes from phones, we design for the smallest screen first to ensure perfect usability."
    },
    {
      q: "Can you redesign my existing website without losing my SEO?",
      a: "Yes. This is a delicate process called 'SEO Migration'. We map all your old URLs to the new ones (301 redirects) so you don't lose your Google ranking juice during the upgrade."
    },
    {
      q: "Do you provide stock images?",
      a: "Yes, we have access to premium libraries like Shutterstock and Unsplash. We also use Generative AI (Midjourney) to create unique, copyright-free visuals for your brand."
    },
    {
      q: "Can I request specific fonts or colors?",
      a: "Of course. If you have a Brand Guide, we follow it strictly. If not, we will recommend a color palette and typography that aligns with your industry psychology."
    },
    {
      q: "Do you design logos?",
      a: "Basic text-based logos are included. For professional brand identity design (Logo, Letterhead, Visiting Cards), we have a separate 'Branding Add-on' package."
    }
  ],
  tech: [
    {
      q: "Which platform do you use to build websites?",
      a: "We select the best tool for the job. For 90% of SMBs, we use **WordPress** (for flexibility) or **Shopify** (for e-commerce). For high-scale startups, we use **Next.js/React** (the same tech used by Netflix/Uber)."
    },
    {
      q: "Is hosting included in the package?",
      a: "Our **AMC (Annual Maintenance)** plans include premium cloud hosting. If you prefer to manage it yourself, we can deploy the site on your own AWS, Godaddy, or Hostinger account."
    },
    {
      q: "Will my website be fast?",
      a: "Blazing fast. We target a **Google PageSpeed score of 90+**. We use caching, image compression (WebP), and CDNs (Content Delivery Networks) to ensure your site loads in under 2 seconds."
    },
    {
      q: "Is the website secure from hackers?",
      a: "Security is a priority. We install enterprise-grade firewalls, SSL certificates, and limit login attempts. Our AMC plans also include daily cloud backups so your data is never lost."
    },
    {
      q: "Do I get a professional email address (e.g., ceo@mycompany.com)?",
      a: "Yes, we can set up professional business emails via Google Workspace (G-Suite) or Zoho Mail integration."
    },
    {
      q: "Can I update the content myself later?",
      a: "100%. We build with 'No-Code' editors (like Elementor or Gutenberg). You can change text, images, and prices as easily as editing a Word document. We provide a training video on handover."
    },
    {
      q: "What happens if the site breaks at 2 AM?",
      a: "If you are on our **Growth** or **VIP** AMC plan, we have 24/7 uptime monitoring. Our team gets an alert instantly and fixes critical server issues."
    }
  ],
  ecommerce: [
    {
      q: "Shopify vs WooCommerce - which one is better?",
      a: "Simple answer: **Shopify** is better if you want a hands-off, managed platform and don't mind monthly fees. **WooCommerce** is better if you want full control, lower long-term costs, and deep customization. We build on both."
    },
    {
      q: "Can I sell internationally?",
      a: "Yes. We can set up multi-currency converters and international payment gateways (Stripe/PayPal) so you can accept payments in USD, EUR, etc."
    },
    {
      q: "How many products can I upload?",
      a: "Technically unlimited. Our 'Shop Starter' plan covers setup for 20 products, but the system can handle thousands. We teach you how to bulk upload using CSV/Excel."
    },
    {
      q: "Can you integrate Razorpay / PhonePe / Stripe?",
      a: "Yes. We integrate all major Indian and International payment gateways. We ensure the checkout flow is secure and smooth."
    },
    {
      q: "How are shipping rates calculated?",
      a: "We integrate logistics partners like **Shiprocket** or **Pickrr**. This allows real-time shipping rate calculation based on the customer's pincode and package weight."
    },
    {
      q: "Do you support 'Abandoned Cart Recovery'?",
      a: "Yes! This is a standard feature in our **Shop Pro** plan. If a customer leaves without buying, they get an automatic email/WhatsApp reminder to complete the purchase."
    },
    {
      q: "Can I manage inventory across Amazon and my website?",
      a: "Yes, we can set up 'Omnichannel' inventory sync so that when you sell an item on Amazon, stock decreases on your website automatically (requires specific ERP integrations)."
    }
  ],
  seo: [
    {
      q: "Will I rank #1 on Google immediately?",
      a: "No agency can guarantee #1 rankings overnight (and you should run from those who do). However, we build the **Foundation for #1**. We ensure your structure, keywords, speed, and schema are perfect so Google *loves* your site."
    },
    {
      q: "What is AIO / GEO Optimization?",
      a: "**Artificial Intelligence Optimization**. People are now searching on ChatGPT and Gemini, not just Google. We optimize your content so these AI bots can read and cite your business as a trusted answer."
    },
    {
      q: "Do you write the content for the website?",
      a: "We provide 'UX Copywriting' for headlines and buttons. For long-form blogs or product descriptions, we offer AI-assisted content writing services as an add-on."
    },
    {
      q: "Do you set up Google Analytics?",
      a: "Yes. We set up **GA4 (Google Analytics 4)** and **Google Search Console** so you can see exactly how many visitors you have and where they come from."
    },
    {
      q: "Is technical SEO included?",
      a: "Yes. XML Sitemaps, Robots.txt, Schema Markup, Open Graph tags, and Alt tags are standard in every single package we sell."
    },
    {
      q: "How do you handle Core Web Vitals?",
      a: "We obsess over it. We optimize LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) to ensure you pass Google's Core Web Vitals assessment."
    }
  ],
  support: [
    {
      q: "Are there any hidden monthly fees?",
      a: "For the website build: **No**. It is a one-time cost. The only recurring costs are Domain (yearly) and Hosting (yearly). If you choose Shopify, you pay them a monthly subscription."
    },
    {
      q: "What is an AMC and is it mandatory?",
      a: "AMC is **Annual Maintenance Contract**. It is NOT mandatory, but highly recommended. It acts like insurance. We handle backups, plugin updates, and security scans so you don't have to worry about your site crashing."
    },
    {
      q: "Do you offer refunds?",
      a: "We have a milestone-based refund policy. If you cancel before the design phase starts, we refund the advance. Once design/coding work has begun, the advance is non-refundable to cover labor costs."
    },
    {
      q: "Can I upgrade from 'Starter' to 'Business' later?",
      a: "Yes! Our architecture is scalable. You can start small and upgrade your package as your revenue grows. We just charge the difference."
    },
    {
      q: "How do we communicate during the project?",
      a: "We create a dedicated **WhatsApp Group** for quick updates and use Email/Zoom for formal reviews. You will have a dedicated Project Manager."
    },
    {
      q: "What happens after the website is launched?",
      a: "We don't ghost you. We provide a 30-day bug-fix support period for free. After that, you can sign up for an AMC or contact us for ad-hoc updates at an hourly rate."
    }
  ]
};

// Generate FAQPage JSON-LD schema from all FAQ data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: Object.values(faqData).flat().map((item) => ({
    "@type": "Question",
    name: item.q.replace(/\*/g, ''),
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a.replace(/\*\*/g, ''),
    },
  })),
};

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('strategy');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-jet-blue font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">Knowledge Base</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-jet-navy mb-4 md:mb-6">
            Common Questions & <br className="hidden md:block"/><span className="text-jet-blue">Straight Answers</span>
          </h3>
          <p className="text-slate-500 text-sm md:text-lg">
            Everything you need to know about our process, technology, and deliverables.
            We believe in complete transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">

          {/* Left Column: Category Navigation */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-1 md:space-y-2">
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 md:mb-4 px-2 md:px-4">Browse Topics</p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(0); // Reset open question when switching
                    }}
                    className={`
                      w-full flex items-center gap-2 md:gap-4 p-2.5 md:p-4 rounded-xl transition-all duration-300 text-left group border
                      ${activeCategory === cat.id
                        ? 'bg-jet-blue text-white border-jet-blue shadow-lg shadow-blue-500/20'
                        : 'bg-white text-jet-slate border-transparent hover:bg-slate-50 hover:border-slate-200'
                      }
                    `}
                  >
                    <div className={`
                      p-1.5 md:p-2 rounded-lg transition-colors shrink-0
                      ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-jet-blue'}
                    `}>
                      <cat.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-bold text-xs md:text-base truncate">{cat.label}</span>
                      <span className={`text-[10px] md:text-xs mt-0.5 hidden md:block ${activeCategory === cat.id ? 'text-blue-100' : 'text-slate-500'}`}>
                        {cat.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50/50 rounded-2xl md:rounded-3xl p-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 md:space-y-4"
                >
                  {faqData[activeCategory]?.map((item, index) => (
                    <div
                      key={index}
                      className={`
                        bg-white rounded-xl md:rounded-2xl border transition-all duration-300 overflow-hidden
                        ${openIndex === index
                          ? 'border-jet-blue/30 shadow-lg shadow-blue-900/5'
                          : 'border-slate-200 hover:border-slate-300'
                        }
                      `}
                    >
                      <button
                        id={`faq-question-${activeCategory}-${index}`}
                        onClick={() => toggleQuestion(index)}
                        className="w-full flex items-start justify-between p-4 md:p-6 text-left cursor-pointer"
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${activeCategory}-${index}`}
                      >
                        <span className={`font-display font-bold text-sm md:text-lg pr-4 md:pr-8 leading-snug ${openIndex === index ? 'text-jet-blue' : 'text-jet-navy'}`}>
                          {item.q}
                        </span>
                        <div className={`
                          shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors
                          ${openIndex === index ? 'bg-jet-blue text-white' : 'bg-slate-100 text-slate-500'}
                        `}>
                          {openIndex === index ? <Minus className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" /> : <Plus className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />}
                        </div>
                      </button>

                      <motion.div
                        id={`faq-answer-${activeCategory}-${index}`}
                        initial={false}
                        animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                        role="region"
                        aria-labelledby={`faq-question-${activeCategory}-${index}`}
                      >
                        <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                          <div className="h-px w-full bg-slate-100 mb-3 md:mb-4" />
                          <p className="text-jet-slate leading-relaxed text-sm md:text-base">
                            {/* Render simple markdown-like bolding */}
                            {item.a.split('**').map((part, i) =>
                              i % 2 === 1 ? <strong key={i} className="text-jet-navy font-bold">{part}</strong> : part
                            )}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Contextual CTA */}
            <div className="mt-6 md:mt-8 text-center p-4 md:p-6 bg-blue-50 rounded-xl md:rounded-2xl border border-blue-100">
               <p className="text-jet-navy font-medium mb-3 text-sm md:text-base">Can't find the answer you're looking for?</p>
               <a
                 href="https://wa.me/919699977699"
                 target="_blank"
                 rel="noopener noreferrer"
                 onClick={trackWhatsAppConversion}
                 aria-label="Chat with our team on WhatsApp"
                 className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg"
               >
                 <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
                 Chat with our team directly
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
