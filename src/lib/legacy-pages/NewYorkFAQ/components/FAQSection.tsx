import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData, FAQItem } from '../data/faqData';

const FAQSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('q1');
  const [activeCategory, setActiveCategory] = useState<string>('General');

  // Categories derived from data
  const categories = Array.from(new Set(faqData.map(item => item.category)));

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = faqData.filter(item => {
    const query = searchQuery.toLowerCase();
    const matchQuestion = item.question.toLowerCase().includes(query);
    const matchAnswer = Array.isArray(item.answer) 
      ? item.answer.some(a => a.toLowerCase().includes(query))
      : item.answer.toLowerCase().includes(query);
    return matchQuestion || matchAnswer;
  });

  // Group by category for filtered results
  const groupedFAQs: Record<string, FAQItem[]> = {};
  categories.forEach(cat => {
    const items = filteredFAQs.filter(item => item.category === cat);
    if (items.length > 0) {
      groupedFAQs[cat] = items;
    }
  });

  // Scroll to category function
  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(`cat-${category}`);
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-lightGray to-white py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" id="faq">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-100 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
              Frequently Asked <span className="text-jetBlue">Questions</span>
            </h2>
            <p className="text-xl text-slate font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Everything NYC Business Owners Ask About Professional Web Design.
              Honest answers to the questions we hear most.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="relative max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-jetBlue" />
            </div>
            <input
              type="text"
              placeholder="Search questions (e.g., 'timeline', 'cost', 'SEO')..."
              className="block w-full pl-12 pr-4 py-4 border-0 rounded-2xl leading-5 bg-white text-navy placeholder-slate/50 focus:outline-none focus:ring-4 focus:ring-blue-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-base transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Sidebar Navigation (Desktop) */}
          <motion.div 
            className="hidden lg:block w-64 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32 space-y-2">
              <h3 className="text-xs font-bold text-slate uppercase tracking-wider mb-4 px-4">Categories</h3>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-between group ${
                    activeCategory === cat 
                      ? 'bg-jetBlue text-white shadow-lg shadow-blue-500/20' 
                      : 'text-slate hover:bg-white hover:text-navy'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && <ArrowRight className="w-4 h-4" />}
                </button>
              ))}
              
              <div className="mt-8 p-6 bg-navy rounded-2xl text-white">
                <h4 className="font-bold mb-2">Still have questions?</h4>
                <p className="text-sm text-blue-200 mb-4">We're happy to explain our process in detail.</p>
                <a href="#contact" className="text-xs font-bold uppercase tracking-wide border-b border-jetOrange text-jetOrange hover:text-white transition-colors pb-1 inline-block">
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mobile Category Nav */}
          <div className="lg:hidden overflow-x-auto no-scrollbar pb-4 flex gap-3 sticky top-20 z-20 bg-lightGray/95 backdrop-blur-sm py-2 -mx-6 px-6 sm:px-8 sm:-mx-8">
             {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                     activeCategory === cat 
                      ? 'bg-jetBlue text-white shadow-md' 
                      : 'bg-white text-slate border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0 space-y-16">
            {Object.keys(groupedFAQs).length > 0 ? (
              Object.entries(groupedFAQs).map(([category, items], catIdx) => (
                <motion.div 
                  key={category} 
                  id={`cat-${category}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  onViewportEnter={() => setActiveCategory(category)}
                >
                  <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-gradient-to-r from-jetBlue to-jetOrange rounded-full"></span>
                    {category} Questions
                  </h3>
                  
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div 
                        key={item.id}
                        className={`group bg-white rounded-2xl transition-all duration-300 border ${
                          openId === item.id 
                            ? 'border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-blue-500/10' 
                            : 'border-transparent hover:border-gray-100 hover:shadow-lg'
                        }`}
                      >
                        <button
                          onClick={() => toggleFAQ(item.id)}
                          className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                        >
                          <span className={`font-bold text-lg pr-8 transition-colors ${
                            openId === item.id ? 'text-jetBlue' : 'text-navy group-hover:text-jetBlue'
                          }`}>
                            {item.question}
                          </span>
                          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openId === item.id 
                              ? 'bg-jetBlue text-white rotate-180' 
                              : 'bg-gray-50 text-slate group-hover:bg-blue-50 group-hover:text-jetBlue'
                          }`}>
                            <ChevronDown className="w-5 h-5" />
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {openId === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-0">
                                <div className="h-px w-full bg-gray-50 mb-4"></div>
                                <div className="text-slate leading-relaxed space-y-4 pl-1">
                                  {Array.isArray(item.answer) ? (
                                    item.answer.map((paragraph, idx) => (
                                      <p key={idx}>
                                        {paragraph.split('\n').map((line, i) => (
                                          <span key={i}>
                                              {line.startsWith('**') ? 
                                                  <strong className="text-navy font-semibold">{line.replace(/\*\*/g, '')}</strong> : 
                                                  line
                                              }
                                              <br/>
                                          </span>
                                        ))}
                                      </p>
                                    ))
                                  ) : (
                                    <p>{item.answer}</p>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate/40" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">No questions found</h3>
                <p className="text-slate">Try adjusting your search terms.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-jetBlue font-semibold hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;