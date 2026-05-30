'use client';

import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import Hero from './components/Hero';
import AgencyInfo from './components/AgencyInfo';
import WhyDubai from './components/WhyDubai';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Industries from './components/Industries';
import Process from './components/Process';
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does website development take?", acceptedAnswer: { "@type": "Answer", text: "A standard corporate website typically takes 2-4 weeks from design to launch. Complex e-commerce platforms or custom web applications may require 6-10 weeks. We provide a detailed timeline during our initial consultation." } },
    { "@type": "Question", name: "What platforms do you recommend?", acceptedAnswer: { "@type": "Answer", text: "We recommend WordPress for ease of use and content management, Shopify for robust e-commerce growth, and Next.js/React for high-performance, custom requirements. We select the stack that best fits your business goals." } },
    { "@type": "Question", name: "Do you provide Arabic language support?", acceptedAnswer: { "@type": "Answer", text: "Yes, we specialize in bilingual English/Arabic websites. We ensure full RTL (Right-to-Left) layout adaptation, correct typography, and cultural localization to effectively reach your UAE audience." } },
    { "@type": "Question", name: "What's included in maintenance?", acceptedAnswer: { "@type": "Answer", text: "Our Annual Maintenance Contracts (AMC) cover security updates, daily backups, speed optimization, content updates, and priority support. We ensure your website remains secure and performs optimally year-round." } },
    { "@type": "Question", name: "Can you help with content creation?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We offer professional copywriting and SEO content generation services. We can craft compelling brand messaging that resonates with the Dubai market and ranks well on search engines." } },
    { "@type": "Question", name: "Do you offer SEO services?", acceptedAnswer: { "@type": "Answer", text: "Yes, all our builds include on-page SEO best practices. We also offer ongoing SEO packages focusing on keyword strategy, content optimization, and local SEO to improve your visibility in UAE search results." } },
    { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept bank transfers, cheques, and online payments. Our standard payment structure is milestone-based: usually 50% upfront and 50% upon successful project completion and launch." } },
    { "@type": "Question", name: "Can I update the website myself?", acceptedAnswer: { "@type": "Answer", text: "Yes. Whether it's WordPress or a custom build, we integrate a user-friendly CMS (Content Management System) and provide training so you can easily update text, images, and products without coding." } },
    { "@type": "Question", name: "Do you provide hosting?", acceptedAnswer: { "@type": "Answer", text: "We provide secure, high-speed cloud hosting services. We can set up and manage your hosting on top-tier providers like AWS or Google Cloud, ensuring maximum uptime and data security." } },
    { "@type": "Question", name: "What's your refund policy?", acceptedAnswer: { "@type": "Answer", text: "We strive for 100% satisfaction. If you are not happy with the initial design drafts, we work to revise them. Specific refund terms for project cancellations are detailed transparently in our service agreement." } },
    { "@type": "Question", name: "How do you handle support?", acceptedAnswer: { "@type": "Answer", text: "We offer multi-channel support via WhatsApp, email, and phone during UAE business hours. Our dedicated support team ensures rapid response times for any technical issues or update requests." } },
    { "@type": "Question", name: "Can you redesign existing websites?", acceptedAnswer: { "@type": "Answer", text: "Yes, we breathe new life into outdated websites. We audit your current site, retain valuable SEO equity, and redesign the UI/UX to improve modern aesthetics, mobile responsiveness, and conversion rates." } },
  ],
};

function App() {
  const { openModal } = useContactModal();

  return (
    <div className="font-sans antialiased text-navy bg-offwhite min-h-screen relative selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero onOpenModal={() => openModal('in')} />
        <AgencyInfo />
        <WhyDubai />
        <Services />
        <Comparison onOpenModal={() => openModal('in')} />
        <Industries onOpenModal={() => openModal('in')} />
        <Process />
        <Features onOpenModal={() => openModal('in')} />
        <SuccessStories onOpenModal={() => openModal('in')} />
        <Pricing onOpenModal={() => openModal('in')} />
        <FAQ />
      </main>
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
