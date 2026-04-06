'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FooterUS from '@/components/FooterUS';
import './shopify.css';

import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import WhyShopify from './components/WhyShopify';
import ServicesSection from './components/ServicesSection';
import PlatformComparison from './components/PlatformComparison';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import TechnologySection from './components/TechnologySection';
import MigrationSection from './components/MigrationSection';
import GlobalReach from './components/GlobalReach';
import PricingSection from './components/PricingSection';
import WhyFactoryJet from './components/WhyFactoryJet';
import CaseStudies from './components/CaseStudies';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';

export default function ShopifyDevelopmentPage({ region = 'in' }: { region?: 'in' | 'us' }) {
  const { openModal } = useContactModal();
  const [pricingTab, setPricingTab] = useState('build');
  const [fullTableOpen, setFullTableOpen] = useState(false);
  const [faqFilter, setFaqFilter] = useState('all');
  const [faqSearch, setFaqSearch] = useState('');
  const csScrollRef = useRef<HTMLDivElement>(null);

  const handleCta = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    openModal(region);
  }, [openModal, region]);

  // Parallax on hero elements
  useEffect(() => {
    const hero = document.getElementById('heroSection');
    if (!hero) return;
    const els = hero.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroH = hero.offsetHeight;
          if (scrollY < heroH * 1.2) {
            els.forEach((el) => {
              const speed = parseFloat(el.dataset.parallax || '0.02');
              const y = scrollY * speed * 60;
              el.style.transform = `translateY(${y}px)`;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.shopify-page .reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bars = document.querySelectorAll('.shopify-page .chart-bar') as NodeListOf<HTMLElement>;
    if (!bars.length) return;
    bars.forEach((bar) => { bar.dataset.h = bar.style.height; bar.style.height = '0'; });
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { bars.forEach((bar, i) => { setTimeout(() => { bar.style.height = bar.dataset.h || '0'; }, 80 * i); }); observer.unobserve(e.target); } }); }, { threshold: 0.3 });
    const chart = document.querySelector('.shopify-page .dash-chart');
    if (chart) observer.observe(chart);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = document.getElementById('pjTrack');
    const fill = document.getElementById('pjFill') as HTMLElement | null;
    const steps = document.querySelectorAll('.shopify-page .pj-step');
    const weekLabels = document.querySelectorAll('.shopify-page .pj-wk-label');
    if (!track || !steps.length) return;
    function updateProgress() {
      const rect = track!.getBoundingClientRect();
      const viewH = window.innerHeight;
      const scrolled = Math.max(0, Math.min(1, (viewH * 0.6 - rect.top) / rect.height));
      if (fill) fill.style.width = (scrolled * 100) + '%';
      const stepFrac = 1 / steps.length;
      steps.forEach((s, i) => { const threshold = (i + 0.3) * stepFrac; s.classList.toggle('reached', scrolled >= threshold); s.classList.toggle('active', scrolled >= threshold && scrolled < (i + 1.3) * stepFrac); if (weekLabels[i]) weekLabels[i].classList.toggle('reached', scrolled >= threshold); });
    }
    let ticking = false;
    const onScroll = () => { if (!ticking) { requestAnimationFrame(() => { updateProgress(); ticking = false; }); ticking = true; } };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const updatePill = () => {
      const activeBtn = document.querySelector('.shopify-page .pr-toggle-btn.active') as HTMLElement | null;
      const pill = document.getElementById('prPill') as HTMLElement | null;
      if (activeBtn && pill) { pill.style.left = activeBtn.offsetLeft + 'px'; pill.style.width = activeBtn.offsetWidth + 'px'; }
    };
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [pricingTab]);

  useEffect(() => {
    const anim = (el: Element) => {
      const h = el as HTMLElement; const target = parseFloat(h.dataset.count || '0'); const suffix = h.dataset.suffix || ''; const decimals = parseInt(h.dataset.decimals || '0'); const text = h.dataset.text;
      if (text) { h.textContent = text; return; }
      const dur = 1200; const start = performance.now();
      const step = (now: number) => { const prog = Math.min((now - start) / dur, 1); const ease = 1 - Math.pow(1 - prog, 3); const val = ease * target; h.textContent = decimals ? val.toFixed(decimals) + suffix : Math.round(val) + suffix; if (prog < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.querySelectorAll('[data-count]').forEach((c) => anim(c)); observer.unobserve(e.target); } }); }, { threshold: 0.3 });
    document.querySelectorAll('.shopify-page .cs-card').forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = csScrollRef.current; if (!el) return;
    const dots = document.querySelectorAll('.shopify-page #csDots .cs-dot');
    const onScroll = () => { const idx = Math.round(el.scrollLeft / (el.scrollWidth / 4)); dots.forEach((d, i) => d.classList.toggle('active', i === Math.min(idx, 3))); };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.shopify-page .fq-item');
    const countEl = document.getElementById('fqCount');
    const emptyEl = document.getElementById('fqEmpty');
    const q = faqSearch.trim().toLowerCase();
    if (q.length === 0) { items.forEach((el) => { el.classList.remove('hidden'); if (faqFilter !== 'all' && (el as HTMLElement).dataset.cat !== faqFilter) el.classList.add('hidden'); }); if (countEl) countEl.textContent = ''; if (emptyEl) emptyEl.classList.remove('show'); return; }
    let visible = 0;
    items.forEach((el) => { const h = el as HTMLElement; const qText = (h.dataset.q || '') + ' ' + (h.dataset.a || ''); if (qText.includes(q)) { el.classList.remove('hidden'); visible++; } else { el.classList.add('hidden'); el.classList.remove('open'); } });
    if (countEl) countEl.textContent = visible + ' result' + (visible !== 1 ? 's' : '') + ' found';
    if (emptyEl) emptyEl.classList.toggle('show', visible === 0);
  }, [faqSearch, faqFilter]);

  useEffect(() => {
    const items = document.querySelectorAll('.shopify-page .fq-item');
    items.forEach((el) => { el.classList.remove('hidden', 'open'); if (faqFilter !== 'all' && (el as HTMLElement).dataset.cat !== faqFilter) el.classList.add('hidden'); });
  }, [faqFilter]);

  useEffect(() => {
    const handleSvcFilter = (e: Event) => {
      const btn = e.currentTarget as HTMLElement; const filter = btn.dataset.filter;
      document.querySelectorAll('.shopify-page .svc-tab').forEach((t) => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.shopify-page #svcGrid .svc').forEach((c) => { const h = c as HTMLElement; h.style.display = (filter === 'all' || h.dataset.category === filter) ? '' : 'none'; });
    };
    const tabs = document.querySelectorAll('.shopify-page .svc-tab');
    tabs.forEach((tab) => tab.addEventListener('click', handleSvcFilter));
    return () => tabs.forEach((tab) => tab.removeEventListener('click', handleSvcFilter));
  }, []);

  const scrollCS = useCallback((dir: number) => {
    const el = csScrollRef.current; if (!el) return;
    const card = el.querySelector('.cs-card'); const cardW = card ? (card as HTMLElement).offsetWidth : 420;
    el.scrollBy({ left: dir * (cardW + 20), behavior: 'smooth' });
  }, []);

  const clearFqSearch = useCallback(() => { setFaqSearch(''); }, []);

  const shopifyFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How much does Shopify e-commerce development cost?", acceptedAnswer: { "@type": "Answer", text: "Shopify e-commerce development costs range from $5,000 to $25,000 for standard Shopify stores and $25,000 to $150,000 or more for Shopify Plus enterprise builds. Factors that affect cost include design complexity, number of product SKUs, third-party integrations with ERP, CRM, and PIM systems, custom app development, and migration requirements. FactoryJet offers enterprise-grade Shopify development at startup-friendly prices, with projects typically 40 to 60 percent below US and UK agency rates." } },
      { "@type": "Question", name: "What is the difference between Shopify and Shopify Plus?", acceptedAnswer: { "@type": "Answer", text: "Shopify is designed for small to mid-size businesses with monthly plans starting at $39, while Shopify Plus is the enterprise tier starting at $2,300 per month for high-growth brands doing $80,000 or more in monthly revenue. Shopify Plus offers full checkout customization through Checkout Extensibility, B2B selling with company profiles and custom price lists, up to 10 expansion stores, unlimited staff accounts, 10x API call limits, a dedicated Merchant Success Manager, and advanced automation through Shopify Flow and Launchpad." } },
      { "@type": "Question", name: "How long does it take to build a Shopify store?", acceptedAnswer: { "@type": "Answer", text: "A standard Shopify store using a customized theme takes 4 to 8 weeks. A fully custom Shopify store with bespoke design and integrations takes 8 to 14 weeks. Enterprise Shopify Plus builds with headless architecture, B2B functionality, and complex integrations typically take 12 to 20 weeks." } },
      { "@type": "Question", name: "Can you migrate my existing store to Shopify or Shopify Plus?", acceptedAnswer: { "@type": "Answer", text: "Yes. FactoryJet provides zero-downtime migration services from WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, Wix, Squarespace, and custom platforms to Shopify and Shopify Plus. Our migration process preserves all product data, customer records, order history, and SEO rankings through 301 redirects and structured data transfer." } },
      { "@type": "Question", name: "What is headless Shopify development with Hydrogen?", acceptedAnswer: { "@type": "Answer", text: "Headless Shopify development separates the frontend presentation layer from the Shopify backend, allowing fully custom storefronts built with modern web technologies. Shopify Hydrogen is Shopify's official React-based framework for headless builds, hosted on Shopify's Oxygen infrastructure. Hydrogen storefronts deliver 50 to 70 percent faster page loads, near-perfect Lighthouse scores, and 30 percent or higher conversion improvements." } },
      { "@type": "Question", name: "Can Shopify handle B2B and wholesale e-commerce?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shopify Plus includes native B2B functionality with company profiles, custom price lists, net payment terms, quick-order lists, and volume-based discounts. Businesses can run DTC and B2B operations from a single Shopify Plus store or create dedicated B2B expansion stores." } },
      { "@type": "Question", name: "Do you work with international clients?", acceptedAnswer: { "@type": "Answer", text: "Yes. FactoryJet serves clients across the United States, Canada, United Kingdom, Europe, Australia, Singapore, UAE, Saudi Arabia, and India. We configure multi-currency storefronts through Shopify Markets, set up region-specific payment gateways, and implement international shipping and tax compliance." } },
      { "@type": "Question", name: "Do you provide ongoing Shopify support after launch?", acceptedAnswer: { "@type": "Answer", text: "Yes. FactoryJet offers Annual Maintenance Contracts starting at $500 per month for standard Shopify stores and $1,500 per month for Shopify Plus enterprise stores. AMC plans cover performance monitoring, security updates, bug fixes, content updates, and 24/7 priority support." } },
      { "@type": "Question", name: "Which industries do you serve for Shopify development?", acceptedAnswer: { "@type": "Answer", text: "We build Shopify stores across fashion, health and beauty, food and beverage, home and furniture, jewelry, sports, B2B wholesale, luxury retail, electronics, and subscription businesses. Each industry receives tailored store architecture, checkout flows, and integration configurations." } },
      { "@type": "Question", name: "What makes FactoryJet different from other Shopify agencies?", acceptedAnswer: { "@type": "Answer", text: "FactoryJet combines AI-native development practices with deep Shopify expertise. Every store we build is optimized for visibility across Google, AI Overviews, ChatGPT, Perplexity, and other AI search engines. Our India-based team delivers enterprise-grade quality at 40 to 60 percent below comparable US, UK, and Australian agency rates." } },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyFaqSchema) }}
    />
    <Header variant="transparent" basePath={region === 'us' ? '/us' : ''} />
    <div className="shopify-page">
      <HeroSection handleCta={handleCta} />
      <TrustStrip />
      <WhyShopify handleCta={handleCta} />
      <ServicesSection handleCta={handleCta} />
      <PlatformComparison handleCta={handleCta} />
      <IndustriesSection handleCta={handleCta} />
      <ProcessSection handleCta={handleCta} />
      <TechnologySection />
      <MigrationSection handleCta={handleCta} />
      <GlobalReach handleCta={handleCta} />
      <PricingSection handleCta={handleCta} pricingTab={pricingTab} setPricingTab={setPricingTab} fullTableOpen={fullTableOpen} setFullTableOpen={setFullTableOpen} />
      <WhyFactoryJet handleCta={handleCta} />
      <CaseStudies csScrollRef={csScrollRef} scrollCS={scrollCS} />
      <FaqSection handleCta={handleCta} faqFilter={faqFilter} setFaqFilter={setFaqFilter} faqSearch={faqSearch} setFaqSearch={setFaqSearch} clearFqSearch={clearFqSearch} />
      <FinalCta handleCta={handleCta} />
    </div>
    {region === 'us' ? <FooterUS /> : <Footer />}
    </>
  );
}
