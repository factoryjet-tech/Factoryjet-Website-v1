'use client';

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Search,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { faqData } from './data';
import { FAQItem, SearchResult } from './types';
import Header from '@/components/Header';
import FooterUS from '@/components/FooterUS';
import { useContactModal } from '@/context/ContactModalContext';
import Link from 'next/link';

// --- Helper Components ---

const Badge = React.memo(({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
));

// --- Helpers ---

// Recursively extract text from ReactNode tree for search indexing
const extractTextFromNode = (node: React.ReactNode): string => {
  if (!node) return '';
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromNode).join(' ');
  }
  if (React.isValidElement(node)) {
    // Access children from props safely
    const props = node.props as { children?: React.ReactNode };
    return extractTextFromNode(props.children);
  }
  return '';
};

// --- Custom Hooks ---

const useSearch = (query: string) => {
  const [results, setResults] = useState<SearchResult[]>([]);

  // Build a search index once on mount to avoid expensive traversal during typing
  const searchIndex = useMemo(() => {
    return faqData.flatMap(category => 
      category.items.map(item => ({
        item,
        categoryId: category.id,
        categoryTitle: category.title,
        // Pre-process text for case-insensitive search
        qText: item.question.toLowerCase(),
        aText: extractTextFromNode(item.answer).toLowerCase()
      }))
    );
  }, []);

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    const terms = lowerQuery.split(/\s+/).filter(t => t.length > 0);

    const newResults = searchIndex.map(entry => {
      let score = 0;
      let matchType: 'question' | 'answer' | null = null;

      const qExact = entry.qText.includes(lowerQuery);
      const aExact = entry.aText.includes(lowerQuery);

      if (qExact) {
        score += 50;
        matchType = 'question';
      }
      if (aExact) {
        score += 20;
        if (!matchType) matchType = 'answer';
      }

      let termsMatched = 0;
      terms.forEach(term => {
        if (entry.qText.includes(term)) {
          score += 10;
          termsMatched++;
          if (!matchType) matchType = 'question';
        } else if (entry.aText.includes(term)) {
          score += 5;
          termsMatched++;
          if (!matchType) matchType = 'answer';
        }
      });

      if (score === 0) return null;

      if (termsMatched === terms.length && terms.length > 1) {
        score += 15;
      }

      return {
        item: entry.item,
        categoryId: entry.categoryId,
        categoryTitle: entry.categoryTitle,
        score,
        matchType: matchType!
      } as SearchResult;
    })
    .filter((r): r is SearchResult => r !== null)
    .sort((a, b) => b.score - a.score);

    setResults(newResults);
  }, [query, searchIndex]);

  return results;
};

// --- Components ---


const Hero = React.memo(({ 
  searchValue, 
  onSearchChange 
}: { 
  searchValue: string; 
  onSearchChange: (val: string) => void 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-jet-navy via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-jet-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jet-orange rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 pt-20 pb-24 text-center">
        <Badge className="bg-blue-500/30 text-blue-100 border border-blue-400/30 mb-6 backdrop-blur-sm">
          <Sparkles size={12} className="mr-1" aria-hidden="true" /> AI-Native Agency Help Center
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
          How can we help you <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">scale?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Find answers about our AI-native workflows, startup-friendly pricing, and multi-platform SEO strategies.
        </p>

        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-0 bg-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-white rounded-2xl shadow-xl flex items-center p-2 transform group-hover:-translate-y-0.5 transition-all">
            <Search className="text-slate-400 ml-4 w-6 h-6" aria-hidden="true" />
            <label htmlFor="search-input" className="sr-only">Search FAQs</label>
            <input 
              id="search-input"
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search FAQs... (e.g., 'Shopify', 'SEO cost', 'Timelines')"
              className="flex-1 p-3 text-jet-navy placeholder-slate-400 outline-none text-lg bg-transparent"
              autoComplete="off"
            />
            <div className="hidden sm:flex items-center gap-2 pr-4" aria-hidden="true">
              <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-500 bg-slate-100 rounded border border-slate-200">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-jet-green" aria-hidden="true" /> 100+ Questions</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-jet-green" aria-hidden="true" /> Updated Weekly</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-jet-green" aria-hidden="true" /> Expert Verified</span>
        </div>
      </div>
    </div>
  );
});

const QuickLinks = React.memo(({ onSelectQuestion }: { onSelectQuestion: (id: string) => void }) => {
  const popularItems = useMemo(() => {
    return faqData.flatMap(cat => cat.items).filter(item => item.popular).slice(0, 4);
  }, []);

  return (
    <div className="relative -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => onSelectQuestion(item.id)}
            className="bg-white p-5 rounded-xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 text-left border border-transparent hover:border-blue-100 group"
            aria-label={`View popular question: ${item.question}`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="bg-blue-50 text-jet-blue p-2 rounded-lg group-hover:bg-jet-blue group-hover:text-white transition-colors">
                <Zap size={18} aria-hidden="true" />
              </span>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-jet-blue transition-colors" aria-hidden="true" />
            </div>
            <p className="font-semibold text-jet-navy text-sm leading-snug">{item.question}</p>
          </button>
        ))}
      </div>
    </div>
  );
});

const AccordionItem = React.memo(({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const headerId = `accordion-header-${item.id}`;
  const contentId = `accordion-content-${item.id}`;

  return (
    <div 
      className={`border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-jet-blue/20 shadow-md' : 'hover:border-blue-300'}`}
    >
      <h3>
        <button 
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        >
          <span className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-jet-blue' : 'text-jet-navy'}`}>
            {item.question}
          </span>
          <span className={`flex-shrink-0 ml-4 bg-slate-50 p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-jet-blue' : 'text-slate-400'}`}>
            <ChevronDown size={20} aria-hidden="true" />
          </span>
        </button>
      </h3>
      
      <div 
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div ref={contentRef} className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
            <div className="prose prose-blue max-w-none text-sm md:text-base">
              {item.answer}
            </div>
            <div className="mt-6 flex items-center gap-2">
               <button className="text-xs font-medium text-slate-500 hover:text-jet-blue flex items-center gap-1 transition-colors">
                  <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center" aria-hidden="true">🔗</span> Copy Link
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Sidebar = React.memo(({ 
  activeCategory, 
  onCategorySelect 
}: { 
  activeCategory: string; 
  onCategorySelect: (id: string) => void;
}) => (
  <nav className="space-y-1" aria-label="FAQ Categories">
    {faqData.map((category) => {
      const Icon = category.icon;
      const isActive = activeCategory === category.id;
      return (
        <a
          key={category.id}
          href={`#${category.id}`}
          onClick={(e) => {
            e.preventDefault();
            onCategorySelect(category.id);
          }}
          aria-current={isActive ? 'page' : undefined}
          className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
            isActive 
              ? 'bg-jet-blue text-white shadow-md shadow-blue-500/20' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-jet-navy'
          }`}
        >
          <Icon 
            className={`mr-3 h-5 w-5 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-jet-blue'}`} 
            aria-hidden="true"
          />
          {category.title}
          {isActive && <ChevronRight className="ml-auto w-4 h-4 opacity-75" aria-hidden="true" />}
        </a>
      );
    })}
  </nav>
));

const SearchResults = ({ results, onSelect }: { results: SearchResult[], onSelect: (itemId: string) => void }) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
        <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
           <Search className="text-slate-300" size={32} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-medium text-jet-navy">No results found</h3>
        <p className="text-slate-500 mt-1">Try adjusting your search terms or browse categories.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" role="list">
      <h2 className="text-xl font-bold text-jet-navy mb-6">Search Results ({results.length})</h2>
      {results.map((result, idx) => (
        <div 
          key={`${result.categoryId}-${result.item.id}-${idx}`}
          role="listitem"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
          onClick={() => onSelect(result.item.id)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(result.item.id);
            }
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-jet-blue transition-colors">
              {result.categoryTitle}
            </Badge>
            {result.matchType === 'answer' && (
              <Badge className="bg-blue-50 text-jet-blue border border-blue-100">
                Found in answer
              </Badge>
            )}
          </div>
          <h3 className="text-lg font-bold text-jet-navy group-hover:text-jet-blue transition-colors mb-2">
            {result.item.question}
          </h3>
          <div className="text-slate-500 text-sm line-clamp-2">
            Click to view detailed answer...
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactCTA = () => {
  const { openModal } = useContactModal();
  return (
    <section className="bg-jet-blue text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
        <p className="text-blue-50 mb-10 text-lg">Our AI-native experts are ready to help you navigate your digital transformation.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button onClick={() => openModal('us')} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white hover:text-jet-blue transition-all group text-left">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:text-jet-blue transition-colors">
              <MessageCircle size={24} aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg mb-1">Live Chat</h3>
            <p className="text-sm opacity-80 group-hover:opacity-100">Chat with an expert now</p>
          </button>

          <button onClick={() => openModal('us')} className="bg-white text-jet-blue p-6 rounded-xl shadow-xl hover:-translate-y-1 transition-transform text-left">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-jet-blue">
              <Phone size={24} aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg mb-1">Schedule Call</h3>
            <p className="text-sm text-slate-600">Book 30-min consultation</p>
          </button>

          <a href="mailto:connect@factoryjet.com" className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white hover:text-jet-blue transition-all group text-left">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:text-jet-blue transition-colors">
              <Mail size={24} aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg mb-1">Email Us</h3>
            <p className="text-sm opacity-80 group-hover:opacity-100">Get answer within 4 hours</p>
          </a>
        </div>
      </div>
    </section>
  );
};

const FooterLocal = React.memo(() => (
  <footer className="bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-1">
        <Link href="/" className="flex items-center gap-2 mb-4 text-white">
          <img src="/FinalLogo.svg" alt="FactoryJet" className="h-8 w-auto" />
        </Link>
        <p className="text-sm text-slate-400 mb-4">
          Enterprise-grade digital solutions with startup-friendly pricing.
        </p>
        <div className="flex gap-4">
          <a href="https://twitter.com/factoryjet" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-jet-blue cursor-pointer transition-colors text-slate-300 hover:text-white">X</a>
          <a href="https://linkedin.com/company/factoryjet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-jet-blue cursor-pointer transition-colors text-slate-300 hover:text-white">in</a>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Services</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white"><Link href="/services/web-design">Website Design</Link></li>
          <li className="hover:text-white"><Link href="/services/ecommerce-development">E-Commerce</Link></li>
          <li className="hover:text-white"><Link href="/us#services">SEO/GEO/AIO</Link></li>
          <li className="hover:text-white"><Link href="/us#services">CRM Implementation</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Company</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white"><Link href="/about">About Us</Link></li>
          <li className="hover:text-white"><Link href="/us#process">Process</Link></li>
          <li className="hover:text-white"><Link href="/contact">Contact</Link></li>
          <li className="hover:text-white"><Link href="/faq">FAQ</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white"><Link href="/privacy">Privacy Policy</Link></li>
          <li className="hover:text-white"><Link href="/terms">Terms of Service</Link></li>
          <li className="hover:text-white"><Link href="/sitemap">Sitemap</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
      &copy; {new Date().getFullYear()} FactoryJet. All rights reserved.
    </div>
  </footer>
));

// --- Main App Component ---

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const searchResults = useSearch(searchQuery);
  const isSearching = searchQuery.length >= 2;

  // SEO: Inject JSON-LD Schema for FAQPage
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.flatMap(cat => cat.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": extractTextFromNode(item.answer)
        }
      })))
    };
    const script = document.createElement('script');
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); }
  }, []);

  const handleCategorySelect = useCallback((id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const toggleItem = useCallback((id: string, categoryId: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        faqData.find(c => c.id === categoryId)?.items.forEach(i => next.delete(i.id));
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleSelectSearchResult = useCallback((itemId: string) => {
    const category = faqData.find(c => c.items.some(i => i.id === itemId));
    if (category) {
      setSearchQuery('');
      setActiveCategory(category.id);
      setExpandedItems(new Set([itemId]));
      
      setTimeout(() => {
        const element = document.getElementById(itemId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (isSearching) return;

    const handleScroll = () => {
      const sections = faqData.map(c => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(faqData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearching]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header basePath="/" variant="solid" />

      <main className="flex-grow pt-16">
        <Hero searchValue={searchQuery} onSearchChange={setSearchQuery} />
        
        {!isSearching && <QuickLinks onSelectQuestion={handleSelectSearchResult} />}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12">
            
            {!isSearching && (
              <aside className="hidden md:block w-64 flex-shrink-0">
                <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pb-8">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-4">Categories</h3>
                  <Sidebar activeCategory={activeCategory} onCategorySelect={handleCategorySelect} />
                </div>
              </aside>
            )}

            <div className="flex-1 min-w-0">
              {isSearching ? (
                <SearchResults results={searchResults} onSelect={handleSelectSearchResult} />
              ) : (
                <div className="space-y-16">
                  {faqData.map((category) => (
                    <section key={category.id} id={category.id} className="scroll-mt-24">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 text-jet-blue rounded-lg">
                          <category.icon size={24} aria-hidden="true" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-jet-navy">{category.title}</h2>
                          <p className="text-slate-500 text-sm">{category.description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {category.items.map((item) => (
                          <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={expandedItems.has(item.id)}
                            onToggle={() => toggleItem(item.id, category.id)}
                          />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ContactCTA />
      </main>

      <FooterUS />
    </div>
  );
};

export default App;