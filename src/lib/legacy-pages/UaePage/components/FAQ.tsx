import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "How long does website development take?",
    answer: "A standard corporate website typically takes 2-4 weeks from design to launch. Complex e-commerce platforms or custom web applications may require 6-10 weeks. We provide a detailed timeline during our initial consultation."
  },
  {
    question: "What platforms do you recommend?",
    answer: "We recommend WordPress for ease of use and content management, Shopify for robust e-commerce growth, and Next.js/React for high-performance, custom requirements. We select the stack that best fits your business goals."
  },
  {
    question: "Do you provide Arabic language support?",
    answer: "Yes, we specialize in bilingual English/Arabic websites. We ensure full RTL (Right-to-Left) layout adaptation, correct typography, and cultural localization to effectively reach your UAE audience."
  },
  {
    question: "What's included in maintenance?",
    answer: "Our Annual Maintenance Contracts (AMC) cover security updates, daily backups, speed optimization, content updates, and priority support. We ensure your website remains secure and performs optimally year-round."
  },
  {
    question: "Can you help with content creation?",
    answer: "Absolutely. We offer professional copywriting and SEO content generation services. We can craft compelling brand messaging that resonates with the Dubai market and ranks well on search engines."
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, all our builds include on-page SEO best practices. We also offer ongoing SEO packages focusing on keyword strategy, content optimization, and local SEO to improve your visibility in UAE search results."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, cheques, and online payments. Our standard payment structure is milestone-based: usually 50% upfront and 50% upon successful project completion and launch."
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes. Whether it's WordPress or a custom build, we integrate a user-friendly CMS (Content Management System) and provide training so you can easily update text, images, and products without coding."
  },
  {
    question: "Do you provide hosting?",
    answer: "We provide secure, high-speed cloud hosting services. We can set up and manage your hosting on top-tier providers like AWS or Google Cloud, ensuring maximum uptime and data security."
  },
  {
    question: "What's your refund policy?",
    answer: "We strive for 100% satisfaction. If you are not happy with the initial design drafts, we work to revise them. Specific refund terms for project cancellations are detailed transparently in our service agreement."
  },
  {
    question: "How do you handle support?",
    answer: "We offer multi-channel support via WhatsApp, email, and phone during UAE business hours. Our dedicated support team ensures rapid response times for any technical issues or update requests."
  },
  {
    question: "Can you redesign existing websites?",
    answer: "Yes, we breathe new life into outdated websites. We audit your current site, retain valuable SEO equity, and redesign the UI/UX to improve modern aesthetics, mobile responsiveness, and conversion rates."
  }
];

interface FAQItemProps {
  item: typeof faqData[0];
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`bg-white border rounded-lg overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-[#0052CC] shadow-md'
          : 'border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#0052CC]'
      }`}
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full p-5 flex justify-between items-center gap-4 cursor-pointer text-left"
      >
        <span className={`font-semibold text-[16px] leading-snug transition-colors duration-300 ${
          isOpen ? 'text-[#0052CC]' : 'text-[#0F172A]'
        }`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 text-[#0052CC] transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <Plus size={20} aria-hidden="true" />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-0">
          <p className="text-[14px] leading-[1.6] text-[#64748B]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midPoint);
  const rightColumn = faqData.slice(midPoint);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(28px,4vw,36px)] font-bold text-[#0F172A] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {leftColumn.map((item, i) => (
              <FAQItem 
                key={i} 
                item={item} 
                isOpen={openIndex === i} 
                onClick={() => toggleFAQ(i)} 
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {rightColumn.map((item, i) => (
              <FAQItem 
                key={i + midPoint} 
                item={item} 
                isOpen={openIndex === (i + midPoint)} 
                onClick={() => toggleFAQ(i + midPoint)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;