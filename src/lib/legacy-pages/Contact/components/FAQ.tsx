import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircleQuestion, Wallet, Settings, HeartHandshake } from 'lucide-react';
import { AccordionItem } from '../data.types';

// Group 1: General & First Steps
const GENERAL_FAQS: AccordionItem[] = [
  { question: "How quickly will I hear back after contacting you?", answer: "We take speed seriously. You'll hear back within 2 business hours for form submissions and emails. If you WhatsApp us during business hours, expect a reply within 30 minutes. Call us? We pick up immediately." },
  { question: "Is the initial consultation really free?", answer: "Yes, 100% free. It's a 30-minute discovery call with zero obligation. We want to see if we're a good fit for you, and vice versa. Even if we don't work together, you'll walk away with actionable advice." },
  { question: "What actually happens during the free consultation?", answer: "We cut the fluff. We discuss your business goals, current challenges, and technical needs. Then, we provide honest recommendations and outline potential solutions. No hard sales pitch, just consulting." },
  { question: "Will I be speaking with a salesperson?", answer: "Nope. You'll speak with an expert who actually understands the tech\u2014a developer, senior marketer, or digital consultant. We believe in expert-to-expert communication, not scripted sales calls." },
  { question: "Can you provide references or case studies?", answer: "Absolutely. We have 30+ detailed case studies and over 250 client reviews. Once we understand your industry, we can share specific examples of similar businesses we've helped transform." },
  { question: "Where are your teams located?", answer: "Our HQ is in Bangalore, the Silicon Valley of India. We also have regional presence in Mumbai and Delhi, plus remote talent across the country. We serve clients globally." },
];

// Group 2: Services & Process
const SERVICE_FAQS: AccordionItem[] = [
  { question: "What if I'm not sure exactly what I need?", answer: "That's perfectly normal! That's exactly why we offer the consultation. We'll ask the right questions to diagnose your problem and recommend the right digital solution\u2014whether it's a simple site or a complex ERP." },
  { question: "Do you work with businesses outside India?", answer: "Yes, we love working globally! We work with clients across Southeast Asia, the Middle East, and beyond. We're pros at async communication and scheduling calls that work for your time zone." },
  { question: "Can you work with our existing vendors or team?", answer: "Definitely. We play nice with others. Whether you have an in-house IT team or other agencies, we're happy to collaborate and fill in the gaps where you need us." },
  { question: "What's your typical project timeline?", answer: "It varies, but generally: Websites take 4-8 weeks, E-Commerce 8-12 weeks, and complex CRM/ERP systems take 8-16 weeks. Marketing is ongoing, with significant results usually seen in months 2-6." },
  { question: "What if we need something custom or unusual?", answer: "We thrive on complex challenges. If it's technically possible, we'll figure out how to build it. If it's genuinely not feasible or too risky, we'll tell you honestly and suggest a better alternative." },
  { question: "Do you handle website hosting and maintenance?", answer: "Yes, we offer comprehensive maintenance packages. We can handle hosting, security updates, daily backups, and content changes so you can focus on running your business." },
];

// Group 3: Pricing & Payments
const PRICING_FAQS: AccordionItem[] = [
  { question: "Can you give me a ballpark price?", answer: "To give you a rough idea: Websites range from \u20B940k - \u20B95L. E-Commerce from \u20B91.5L - \u20B910L+. CRM/ERP implementations start from \u20B92L up to \u20B950L+. We provide exact quotes after scoping your specific needs." },
  { question: "Do you have any hidden fees?", answer: "Never. We hate surprises as much as you do. All costs\u2014development, licenses, taxes\u2014are outlined clearly in our proposal. The price we quote is the price you pay." },
  { question: "Can you work within our budget?", answer: "We're flexible. If your budget is tight, we can prioritize features, phase the project, or recommend cost-effective alternatives. We'll always be honest about what is achievable with your investment." },
  { question: "Do you require payment upfront?", answer: "Typically, yes. We usually structure it as 30-50% upfront to book resources, 30-50% at key milestones, and the final 20% upon completion. We can offer payment plans for larger enterprise projects." },
  { question: "What payment methods do you accept?", answer: "We accept Bank Transfers (NEFT/RTGS), UPI, and Credit Cards via secure payment gateways. For international clients, we also support PayPal and wire transfers." },
];

// Group 4: Support & Partnership
const SUPPORT_FAQS: AccordionItem[] = [
  { question: "Who will be my main point of contact?", answer: "You will be assigned a dedicated Project Manager or Account Manager. They will be your single point of contact for updates, feedback, and questions, so you never get passed around." },
  { question: "What if I have an emergency on a weekend?", answer: "For existing clients with critical support packages, we have a 24/7 emergency hotline. If your site goes down on a Sunday, we're on it within an hour." },
  { question: "Do you offer white-label services for other agencies?", answer: "Yes, we do! We partner with design agencies and consultants to deliver backend dev or complex implementations under their brand. Email connect@factoryjet.com to discuss." },
  { question: "How do we track the project's progress?", answer: "Transparency is key. We set up a project dashboard (using tools like Jira, Trello, or ClickUp) where you can see real-time progress. We also have weekly status calls to keep everyone aligned." },
  { question: "Do you own the code after the project is done?", answer: "Once the project is fully paid for, you own 100% of the code, design assets, and intellectual property. We don't hold your business hostage." },
];

const AccordionGroup: React.FC<{ items: AccordionItem[], title: string, icon: React.ReactNode }> = ({ items, title, icon }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100 h-full">
      <div className="flex items-center gap-3 mb-5 md:mb-6 pb-4 border-b border-slate-100">
        <div className="p-2 bg-blue-50 text-jetBlue rounded-lg">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-start justify-between text-left group"
            >
              <span className={`font-semibold text-sm transition-colors ${openIndex === index ? 'text-jetBlue' : 'text-slate-700 group-hover:text-jetBlue'}`}>
                {item.question}
              </span>
              <div className="ml-3 mt-0.5">
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-jetOrange flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-slate-400 group-hover:text-jetBlue flex-shrink-0 transition-colors" />
                )}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-jetOrange uppercase tracking-widest mb-2">Got Questions?</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Everything You Need to Know</h3>
          <p className="text-slate-600 text-base sm:text-lg">
            We believe in radical transparency. Here are honest answers to the most common questions we get from clients like you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <AccordionGroup 
            items={GENERAL_FAQS} 
            title="General & First Steps" 
            icon={<MessageCircleQuestion className="w-6 h-6" />} 
          />
          <AccordionGroup 
            items={SERVICE_FAQS} 
            title="Services & Process" 
            icon={<Settings className="w-6 h-6" />} 
          />
          <AccordionGroup 
            items={PRICING_FAQS} 
            title="Pricing & Payments" 
            icon={<Wallet className="w-6 h-6" />} 
          />
          <AccordionGroup 
            items={SUPPORT_FAQS} 
            title="Support & Partnership" 
            icon={<HeartHandshake className="w-6 h-6" />} 
          />
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-slate-600 mb-3 md:mb-4">Still have a question we didn't answer?</p>
          <a href="#contact-form" className="inline-flex items-center gap-2 text-jetBlue font-bold hover:underline">
            Ask us directly in the form above <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
