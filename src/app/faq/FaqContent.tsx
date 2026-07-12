'use client';

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Search,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { faqData } from '@/lib/legacy-pages/US-FAQ/data';
import { FAQItem, SearchResult } from '@/lib/legacy-pages/US-FAQ/types';
import LogoBar from '@/components/v2/LogoBar';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─── Helpers ────────────────────────────────────────────────────────────── */

const extractTextFromNode = (node: React.ReactNode): string => {
  if (!node) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromNode).join(' ');
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return extractTextFromNode(props.children);
  }
  return '';
};

const Badge = React.memo(({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-fj-body ${className}`}>
    {children}
  </span>
));
Badge.displayName = 'Badge';

/* ─── Custom Hook: Search ────────────────────────────────────────────────── */

const useSearch = (query: string) => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const searchIndex = useMemo(() => {
    return faqData.flatMap((category) =>
      category.items.map((item) => ({
        item,
        categoryId: category.id,
        categoryTitle: category.title,
        qText: item.question.toLowerCase(),
        aText: extractTextFromNode(item.answer).toLowerCase(),
      }))
    );
  }, []);

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    const terms = lowerQuery.split(/\s+/).filter((t) => t.length > 0);

    const newResults = searchIndex
      .map((entry) => {
        let score = 0;
        let matchType: 'question' | 'answer' | null = null;

        if (entry.qText.includes(lowerQuery)) { score += 50; matchType = 'question'; }
        if (entry.aText.includes(lowerQuery)) { score += 20; if (!matchType) matchType = 'answer'; }

        let termsMatched = 0;
        terms.forEach((term) => {
          if (entry.qText.includes(term)) { score += 10; termsMatched++; if (!matchType) matchType = 'question'; }
          else if (entry.aText.includes(term)) { score += 5; termsMatched++; if (!matchType) matchType = 'answer'; }
        });

        if (score === 0) return null;
        if (termsMatched === terms.length && terms.length > 1) score += 15;

        return { item: entry.item, categoryId: entry.categoryId, categoryTitle: entry.categoryTitle, score, matchType: matchType! } as SearchResult;
      })
      .filter((r): r is SearchResult => r !== null)
      .sort((a, b) => b.score - a.score);

    setResults(newResults);
  }, [query, searchIndex]);

  return results;
};

/* ─── Hero ───────────────────────────────────────────────────────────────── */

const Hero = React.memo(({ searchValue, onSearchChange }: { searchValue: string; onSearchChange: (val: string) => void }) => {
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
    <div className="relative bg-fj-charcoal text-fj-charcoal-text overflow-hidden">
      {/* Bloom accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F05A28]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-fj-jet-orange/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 pt-24 pb-28 text-center">
        <Badge className="bg-[#F05A28]/20 text-[#F05A28] border border-[#F05A28]/30 mb-6 backdrop-blur-sm">
          <Sparkles size={12} className="mr-1" aria-hidden="true" /> AI-Native Agency Help Center
        </Badge>

        <h1 className="font-fj-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
          How can we help you{' '}
          <span className="text-[#F05A28]">scale?</span>
        </h1>

        <p className="text-lg md:text-xl text-fj-charcoal-muted font-fj-body mb-10 max-w-2xl mx-auto leading-relaxed">
          Find answers about our AI-native workflows, startup-friendly pricing, and multi-platform SEO strategies.
        </p>

        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-0 bg-[#F05A28] rounded-2xl blur opacity-20 group-hover:opacity-35 transition-opacity" />
          <div className="relative bg-white rounded-2xl shadow-xl flex items-center p-2 transform group-hover:-translate-y-0.5 transition-all">
            <Search className="text-fj-neutral-200 ml-4 w-6 h-6" aria-hidden="true" />
            <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
            <input
              id="faq-search"
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search FAQs... (e.g., 'Shopify', 'SEO cost', 'Timelines')"
              className="flex-1 p-3 text-fj-ink placeholder-fj-neutral-200 outline-none text-base md:text-lg bg-transparent font-fj-body"
              autoComplete="off"
            />
            <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-fj-neutral-400 bg-fj-neutral-50 rounded border border-fj-neutral-100 mr-3" aria-hidden="true">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-fj-charcoal-muted font-fj-body">
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-fj-jet-green" aria-hidden="true" /> 100+ Questions</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-fj-jet-green" aria-hidden="true" /> Updated Weekly</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-fj-jet-green" aria-hidden="true" /> Expert Verified</span>
        </div>
      </div>
    </div>
  );
});
Hero.displayName = 'Hero';

/* ─── Quick Links ────────────────────────────────────────────────────────── */

const QuickLinks = React.memo(({ onSelectQuestion }: { onSelectQuestion: (id: string) => void }) => {
  const popularItems = useMemo(() => faqData.flatMap((cat) => cat.items).filter((item) => item.popular).slice(0, 4), []);

  return (
    <div className="relative -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectQuestion(item.id)}
            className="bg-white p-5 rounded-xl shadow-lg shadow-fj-ink/5 hover:shadow-xl hover:shadow-fj-jet-blue/10 hover:-translate-y-1 transition-all duration-300 text-left border border-fj-neutral-100 hover:border-[#F05A28]-tint group"
            aria-label={`View popular question: ${item.question}`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="bg-[rgba(240,90,40,0.08)] text-[#F05A28] p-2 rounded-lg group-hover:bg-[#B23E13] group-hover:text-white transition-colors">
                <Zap size={18} aria-hidden="true" />
              </span>
              <ChevronRight size={16} className="text-fj-neutral-200 group-hover:text-[#F05A28] transition-colors" aria-hidden="true" />
            </div>
            <p className="font-semibold text-fj-ink text-sm leading-snug font-fj-body">{item.question}</p>
          </button>
        ))}
      </div>
    </div>
  );
});
QuickLinks.displayName = 'QuickLinks';

/* ─── Accordion Item ─────────────────────────────────────────────────────── */

const AccordionItem = React.memo(({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  const headerId = `accordion-header-${item.id}`;
  const contentId = `accordion-content-${item.id}`;

  return (
    <div className={`border rounded-xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-fj-jet-blue/20 shadow-md border-[#F05A28]-tint' : 'border-fj-neutral-100 hover:border-[#F05A28]-tint'}`}>
      <h3>
        <button
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        >
          <span className={`text-base md:text-lg font-semibold pr-8 transition-colors font-fj-display ${isOpen ? 'text-[#B23E13]' : 'text-fj-ink'}`}>
            {item.question}
          </span>
          <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[rgba(240,90,40,0.08)] text-[#F05A28]' : 'bg-fj-neutral-50 text-fj-neutral-400'}`}>
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
          <div className="p-5 pt-0 text-fj-neutral-600 leading-relaxed border-t border-fj-neutral-100 mt-2 font-fj-body">
            <div className="prose prose-blue max-w-none text-sm md:text-base">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
AccordionItem.displayName = 'AccordionItem';

/* ─── Sidebar ────────────────────────────────────────────────────────────── */

const Sidebar = React.memo(({ activeCategory, onCategorySelect }: { activeCategory: string; onCategorySelect: (id: string) => void }) => (
  <nav className="space-y-1" aria-label="FAQ Categories">
    {faqData.map((category) => {
      const Icon = category.icon;
      const isActive = activeCategory === category.id;
      return (
        <a
          key={category.id}
          href={`#${category.id}`}
          onClick={(e) => { e.preventDefault(); onCategorySelect(category.id); }}
          aria-current={isActive ? 'page' : undefined}
          className={`group flex items-center px-4 py-3 text-sm font-medium font-fj-body rounded-lg transition-all duration-200 ${
            isActive
              ? 'bg-[#B23E13] text-white shadow-md shadow-fj-jet-blue/20'
              : 'text-fj-neutral-600 hover:bg-fj-neutral-50 hover:text-fj-ink'
          }`}
        >
          <Icon className={`mr-3 h-5 w-5 transition-colors ${isActive ? 'text-white' : 'text-fj-neutral-200 group-hover:text-[#F05A28]'}`} aria-hidden="true" />
          {category.title}
          {isActive && <ChevronRight className="ml-auto w-4 h-4 opacity-75" aria-hidden="true" />}
        </a>
      );
    })}
  </nav>
));
Sidebar.displayName = 'Sidebar';

/* ─── Search Results ─────────────────────────────────────────────────────── */

const SearchResults = ({ results, onSelect }: { results: SearchResult[]; onSelect: (itemId: string) => void }) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl border border-fj-neutral-100">
        <div className="bg-fj-neutral-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="text-fj-neutral-200" size={32} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-fj-ink font-fj-display">No results found</h3>
        <p className="text-fj-neutral-400 mt-1 font-fj-body">Try adjusting your search terms or browse categories.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" role="list">
      <h2 className="text-xl font-bold text-fj-ink font-fj-display mb-6">Search Results ({results.length})</h2>
      {results.map((result, idx) => (
        <div
          key={`${result.categoryId}-${result.item.id}-${idx}`}
          role="listitem"
          className="bg-white p-6 rounded-xl border border-fj-neutral-100 shadow-sm hover:shadow-md hover:border-[#F05A28]-tint transition-all cursor-pointer group"
          onClick={() => onSelect(result.item.id)}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(result.item.id); } }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-fj-neutral-50 text-fj-neutral-600 group-hover:bg-[rgba(240,90,40,0.08)] group-hover:text-[#F05A28] transition-colors">
              {result.categoryTitle}
            </Badge>
            {result.matchType === 'answer' && (
              <Badge className="bg-[rgba(240,90,40,0.08)] text-[#B23E13] border border-[#F05A28]/10">Found in answer</Badge>
            )}
          </div>
          <h3 className="text-lg font-bold text-fj-ink group-hover:text-[#F05A28] transition-colors mb-2 font-fj-display">
            {result.item.question}
          </h3>
          <div className="text-fj-neutral-400 text-sm font-fj-body line-clamp-2">Click to view detailed answer...</div>
        </div>
      ))}
    </div>
  );
};

/* ─── Contact CTA ────────────────────────────────────────────────────────── */

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function FaqContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const searchResults = useSearch(searchQuery);
  const isSearching = searchQuery.length >= 2;

  const handleCategorySelect = useCallback((id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = (elementRect - bodyRect) - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const toggleItem = useCallback((id: string, categoryId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        faqData.find((c) => c.id === categoryId)?.items.forEach((i) => next.delete(i.id));
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleSelectSearchResult = useCallback((itemId: string) => {
    const category = faqData.find((c) => c.items.some((i) => i.id === itemId));
    if (category) {
      setSearchQuery('');
      setActiveCategory(category.id);
      setExpandedItems(new Set([itemId]));
      setTimeout(() => {
        const element = document.getElementById(itemId);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (isSearching) return;
    const handleScroll = () => {
      const sections = faqData.map((c) => document.getElementById(c.id));
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
    <>
      {/* Hero with search */}
      <Hero searchValue={searchQuery} onSearchChange={setSearchQuery} />

      {/* Trust signal */}
      <LogoBar tagline="Trusted by 500+ US businesses — answered by the same team that built their sites" />

      {/* Popular questions quick links */}
      {!isSearching && <QuickLinks onSelectQuestion={handleSelectSearchResult} />}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Sidebar */}
          {!isSearching && (
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
                <p className="text-xs font-semibold text-fj-neutral-400 uppercase tracking-wider mb-4 px-4 font-fj-body">
                  Categories
                </p>
                <Sidebar activeCategory={activeCategory} onCategorySelect={handleCategorySelect} />
              </div>
            </aside>
          )}

          {/* FAQ content */}
          <div className="flex-1 min-w-0">
            {isSearching ? (
              <SearchResults results={searchResults} onSelect={handleSelectSearchResult} />
            ) : (
              <div className="space-y-16">
                {faqData.map((category) => (
                  <section key={category.id} id={category.id} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-[rgba(240,90,40,0.08)] text-[#F05A28] rounded-lg">
                        <category.icon size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-fj-ink font-fj-display">{category.title}</h2>
                        <p className="text-fj-neutral-400 text-sm font-fj-body">{category.description}</p>
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

      {/* Final CTA */}
      <FinalCTA
        variant="dark"
        eyebrow="STILL HAVE QUESTIONS?"
        headline="Can't find what you're looking for?"
        sub="Our team answers every inquiry within 4 business hours. Talk to the founder — no commitment required."
        primaryCta={{ label: 'Talk to the Founder', href: '/contact' }}
        secondaryCta={{ label: 'Email Us', href: 'mailto:connect@factoryjet.com' }}
        objectionHandler="No commitment. No sales pitch. Just answers."
      />
    </>
  );
}
