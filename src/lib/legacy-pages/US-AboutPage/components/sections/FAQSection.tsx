
import React, { useState, useMemo } from 'react';
import { Container, Section, Button } from '../ui/UIComponents';
import { FAQ_DATA } from '../../lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQSectionProps {
  onCtaClick?: () => void;
}

export default function FAQSection({ onCtaClick }: FAQSectionProps) {
  // Default to first category to prevent long list on load
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Flatten items for global search capabilities
  const allItems = useMemo(() => {
    return FAQ_DATA.flatMap((cat) => 
      cat.items.map((item) => ({ ...item, category: cat.category }))
    );
  }, []);

  // Extract category names
  const categories = useMemo(() => FAQ_DATA.map((c) => c.category), []);

  // Filter items based on active category OR search query
  const filteredItems = useMemo(() => {
    // If searching, search EVERYTHING. If not, show only ACTIVE category.
    let items = searchQuery.trim() 
        ? allItems 
        : allItems.filter(item => item.category === activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        item => 
          item.q.toLowerCase().includes(query) || 
          item.a.toLowerCase().includes(query)
      );
    }
    return items;
  }, [activeCategory, searchQuery, allItems]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setOpenIndex(null); 
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setSearchQuery(""); // Clear search when switching category manually to avoid confusion
    setOpenIndex(null);
  };

  return (
    <Section id="faq" className="bg-white py-24 lg:py-32">
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#FF6B35] font-semibold text-[13px] tracking-[0.12em] uppercase mb-3">Support</p>
            <h2 className="text-4xl md:text-[48px] font-bold text-[#0F172A] mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-[19px] text-[#334155] max-w-[700px] mx-auto leading-relaxed">
              Find answers to common questions about our process, pricing, and technical capabilities.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* --- SIDEBAR (Desktop: Vertical, Mobile: Hidden/Replaced) --- */}
          <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-24 z-10">
             <div className="space-y-6">
                
                {/* Search Bar */}
                <div className="relative shadow-sm">
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 text-[#64748B] pointer-events-none">
                    <Search className="w-4 h-4" />
                  </div>
                  <input 
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl py-3.5 pl-10 pr-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none transition-all shadow-sm"
                  />
                </div>

                {/* Categories List (Desktop) */}
                <div className="hidden lg:block space-y-1">
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-3">Browse by Topic</h3>
                   {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-200 flex items-center justify-between group",
                          activeCategory === cat && !searchQuery
                            ? "bg-[#0052CC]/10 text-[#0052CC] font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-[#0F172A]"
                        )}
                      >
                        {cat}
                        {activeCategory === cat && !searchQuery && (
                           <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
                        )}
                      </button>
                   ))}
                </div>

                {/* Support Box */}
                <div className="hidden lg:block bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 text-center">
                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                   </div>
                   <h4 className="font-bold text-navy mb-2">Need more help?</h4>
                   <p className="text-sm text-slate-500 mb-4">Can't find the answer you're looking for?</p>
                   <Button variant="secondary" size="sm" className="w-full" onClick={onCtaClick}>Contact Support</Button>
                </div>
             </div>
          </div>

          {/* --- MOBILE CATEGORY NAV (Scrollable) --- */}
          <div className="lg:hidden w-full overflow-x-auto pb-2 -mb-4 scrollbar-hide">
             <div className="flex gap-2 min-w-max px-1">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => handleCategoryChange(cat)}
                   className={cn(
                     "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold border transition-all",
                     activeCategory === cat && !searchQuery
                       ? "bg-[#0052CC] border-[#0052CC] text-white shadow-md"
                       : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                   )}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>

          {/* --- MAIN CONTENT AREA --- */}
          <div className="flex-1 w-full min-h-[500px]">
             {/* Dynamic Title */}
             <div className="mb-6 pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                     {searchQuery ? `Results for "${searchQuery}"` : activeCategory}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                     {searchQuery 
                        ? `${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''} found across all topics`
                        : "Common questions and answers"
                     }
                  </p>
                </div>
                {!searchQuery && (
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    {filteredItems.length} Qs
                  </span>
                )}
             </div>

             {/* Questions List */}
             <div className="space-y-4">
               {filteredItems.length > 0 ? (
                 filteredItems.map((item, idx) => {
                   const isOpen = openIndex === idx;
                   return (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.3, delay: idx * 0.05 }}
                       className={cn(
                         "border rounded-xl overflow-hidden transition-all duration-300",
                         isOpen 
                           ? "bg-white border-blue-200 ring-4 ring-blue-50/50 shadow-sm" 
                           : "bg-white border-[#E2E8F0] hover:border-slate-300"
                       )}
                     >
                       <button
                         onClick={() => handleToggle(idx)}
                         className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                       >
                         <span className={cn(
                           "text-[16px] md:text-[17px] font-semibold transition-colors leading-snug pr-4",
                           isOpen ? "text-[#0052CC]" : "text-[#0F172A] group-hover:text-[#0052CC]"
                         )}>
                           {item.q}
                         </span>
                         <span className={cn(
                           "shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                           isOpen ? "bg-[#0052CC] text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-[#0052CC]/10 group-hover:text-[#0052CC]"
                         )}>
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                         </span>
                       </button>

                       <AnimatePresence>
                         {isOpen && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                           >
                             <div className="px-6 pb-6 pt-0 text-[#334155] leading-[1.7] text-[15px] md:text-[16px]">
                               {item.a}
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </motion.div>
                   );
                 })
               ) : (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 bg-[#F8FAFC] rounded-2xl border border-dashed border-slate-200"
                 >
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 text-slate-400" />
                    </div>
                    <p className="text-slate-600 font-medium mb-1">No matches found for "{searchQuery}"</p>
                    <p className="text-slate-400 text-sm mb-4">Try checking your spelling or using different keywords.</p>
                    <button 
                      onClick={() => setSearchQuery("")} 
                      className="text-[#0052CC] font-bold text-sm hover:underline"
                    >
                       Clear filters
                    </button>
                 </motion.div>
               )}
             </div>

             {/* Mobile Support CTA */}
             <div className="lg:hidden mt-12 bg-[#F8FAFC] rounded-2xl p-8 text-center border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Still have questions?</h4>
                <p className="text-slate-500 mb-6 text-sm">Can't find the answer you're looking for?</p>
                <Button className="w-full" onClick={onCtaClick}>Contact Support</Button>
             </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
