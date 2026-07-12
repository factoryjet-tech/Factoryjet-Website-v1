'use client';

import React from 'react';
import Hero from './components/Hero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import Locations from './components/Locations';
import SupportSection from './components/SupportSection';
import FAQ from './components/FAQ';
import { trackContactClick, trackCTAClick } from '@/utils/gtm';

const contactFaqs = [
  { question: "How quickly will I hear back after contacting you?", answer: "We take speed seriously. You'll hear back within 2 business hours for form submissions and emails. If you WhatsApp us during business hours, expect a reply within 30 minutes. Call us? We pick up immediately." },
  { question: "Is the initial consultation really free?", answer: "Yes, 100% free. It's a 30-minute discovery call with zero obligation. We want to see if we're a good fit for you, and vice versa. Even if we don't work together, you'll walk away with actionable advice." },
  { question: "What actually happens during the free consultation?", answer: "We cut the fluff. We discuss your business goals, current challenges, and technical needs. Then, we provide honest recommendations and outline potential solutions. No hard sales pitch, just consulting." },
  { question: "Will I be speaking with a salesperson?", answer: "Nope. You'll speak with an expert who actually understands the tech\u2014a developer, senior marketer, or digital consultant. We believe in expert-to-expert communication, not scripted sales calls." },
  { question: "Can you provide references or case studies?", answer: "Absolutely. We have 30+ detailed case studies and over 250 client reviews. Once we understand your industry, we can share specific examples of similar businesses we've helped transform." },
  { question: "Where are your teams located?", answer: "Our HQ is in Bangalore, the Silicon Valley of India. We also have regional presence in Mumbai and Delhi, plus remote talent across the country. We serve clients globally." },
  { question: "What if I'm not sure exactly what I need?", answer: "That's perfectly normal! That's exactly why we offer the consultation. We'll ask the right questions to diagnose your problem and recommend the right digital solution\u2014whether it's a simple site or a complex ERP." },
  { question: "Do you work with businesses outside India?", answer: "Yes, we love working globally! We work with clients across Southeast Asia, the Middle East, and beyond. We're pros at async communication and scheduling calls that work for your time zone." },
  { question: "Can you work with our existing vendors or team?", answer: "Definitely. We play nice with others. Whether you have an in-house IT team or other agencies, we're happy to collaborate and fill in the gaps where you need us." },
  { question: "What's your typical project timeline?", answer: "It varies, but generally: Websites launch in as little as 7 days, E-Commerce in 4-6 weeks, and complex CRM/ERP systems take 8-16 weeks. Marketing is ongoing, with significant results usually seen in months 2-6." },
  { question: "What if we need something custom or unusual?", answer: "We thrive on complex challenges. If it's technically possible, we'll figure out how to build it. If it's genuinely not feasible or too risky, we'll tell you honestly and suggest a better alternative." },
  { question: "Do you handle website hosting and maintenance?", answer: "Yes, we offer comprehensive maintenance packages. We can handle hosting, security updates, daily backups, and content changes so you can focus on running your business." },
  { question: "Can you give me a ballpark price?", answer: "To give you a rough idea: Websites range from \u20B940k - \u20B95L. E-Commerce from \u20B91.5L - \u20B910L+. CRM/ERP implementations start from \u20B92L up to \u20B950L+. We provide exact quotes after scoping your specific needs." },
  { question: "Do you have any hidden fees?", answer: "Never. We hate surprises as much as you do. All costs\u2014development, licenses, taxes\u2014are outlined clearly in our proposal. The price we quote is the price you pay." },
  { question: "Can you work within our budget?", answer: "We're flexible. If your budget is tight, we can prioritize features, phase the project, or recommend cost-effective alternatives. We'll always be honest about what is achievable with your investment." },
  { question: "Do you require payment upfront?", answer: "Typically, yes. We usually structure it as 30-50% upfront to book resources, 30-50% at key milestones, and the final 20% upon completion. We can offer payment plans for larger enterprise projects." },
  { question: "What payment methods do you accept?", answer: "We accept Bank Transfers (NEFT/RTGS), UPI, and Credit Cards via secure payment gateways. For international clients, we also support PayPal and wire transfers." },
  { question: "Who will be my main point of contact?", answer: "You will be assigned a dedicated Project Manager or Account Manager. They will be your single point of contact for updates, feedback, and questions, so you never get passed around." },
  { question: "What if I have an emergency on a weekend?", answer: "For existing clients with critical support packages, we have a 24/7 emergency hotline. If your site goes down on a Sunday, we're on it within an hour." },
  { question: "Do you offer white-label services for other agencies?", answer: "Yes, we do! We partner with design agencies and consultants to deliver backend dev or complex implementations under their brand. Email connect@factoryjet.com to discuss." },
  { question: "How do we track the project's progress?", answer: "Transparency is key. We set up a project dashboard (using tools like Jira, Trello, or ClickUp) where you can see real-time progress. We also have weekly status calls to keep everyone aligned." },
  { question: "Do you own the code after the project is done?", answer: "Once the project is fully paid for, you own 100% of the code, design assets, and intellectual property. We don't hold your business hostage." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const ContactPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization", "@id": "https://factoryjet.com/#organization",
      "name": "FactoryJet",
      "url": "https://factoryjet.com",
      "logo": "https://factoryjet.com/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 96999 77699",
          "contactType": "customer service",
          "email": "connect@factoryjet.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91 96999 77699",
          "contactType": "sales",
          "email": "connect@factoryjet.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white pb-24 md:pb-0">
        <main>
          <Hero />
          <ContactMethods />
          <ContactForm />
          <Locations />
          <SupportSection />
          <FAQ />
        </main>


        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40 flex gap-3 shadow-neumorphic">
          <a
            href="tel:+919699977699"
            onClick={() => trackContactClick('phone', '+919699977699', 'contact_page_mobile_bar')}
            className="flex-1 bg-white border border-[#B23E13] text-[#B23E13] font-bold py-3 rounded-lg text-center shadow-sm"
          >
            Call Now
          </a>
          <a
            href="#contact-form"
            onClick={() => trackCTAClick('get_quote', 'contact_page_mobile_bar', 'primary')}
            className="flex-1 bg-jetBlue text-white font-bold py-3 rounded-lg text-center shadow-lg"
          >
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
