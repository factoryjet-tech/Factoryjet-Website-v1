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

  return (
    <>
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
