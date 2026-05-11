'use client';

import Hero from './components/Hero';
import Stats from './components/Stats';
import StoryTimeline from './components/StoryTimeline';
import MissionBento from './components/MissionBento';
import WhyChoose from './components/WhyChoose';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import { FAQS } from './data.constants';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero />
        <Stats />
        <StoryTimeline />
        <MissionBento />
        <WhyChoose />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
