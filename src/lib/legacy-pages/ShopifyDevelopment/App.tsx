'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FooterUS from '@/components/FooterUS';
import './shopify.css';

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





<header className="hero" role="banner" id="heroSection">
  
  <div className="hero-glow hero-glow--1" data-parallax="0.03"></div>
  <div className="hero-glow hero-glow--2" data-parallax="0.02"></div>
  <div className="hero-glow hero-glow--3" data-parallax="0.015"></div>

  <div className="ctr">
    
    <nav className="bc" aria-label="Breadcrumb" style={{marginBottom:"24px"}}>
      <a href="/">Home</a><span className="bc-sep">›</span>
      <a href="/services/">Services</a><span className="bc-sep">›</span>
      <a href="/services/ecommerce-development/">E-Commerce Development</a><span className="bc-sep">›</span>
      <span style={{color:"rgba(255,255,255,.6)"}}>Shopify &amp; Shopify Plus</span>
    </nav>

    <div className="hero-split">
      
      <div className="hero-left">
        <div className="reveal">
          <span className="eyebrow eyebrow--dark">Shopify Development Partner</span>
        </div>

        <h1 className="reveal reveal-d1">Shopify &amp; Shopify Plus<br/>E-Commerce Development<br/>Services</h1>

        <p className="hero-desc reveal reveal-d2">FactoryJet builds high-converting Shopify and Shopify Plus stores for DTC, B2B, and enterprise brands worldwide. Custom store builds, platform migrations, headless commerce with Hydrogen, and Shopify Plus checkout customization — engineered to sell more and rank everywhere.</p>

        
        <div className="hero-ctas reveal reveal-d3">
          <div className="hero-cta-main">
            <a href="#" className="btn btn-p" onClick={handleCta}>
              Get a Free Shopify Consultation <span className="arr">→</span>
            </a>
          </div>
          <a href="https://wa.me/919103398557" className="btn btn-wa" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.61l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.325 0-4.47-.752-6.215-2.028l-.434-.328-3.15 1.056 1.056-3.15-.328-.434A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Chat on WhatsApp
          </a>
        </div>

        
        <div className="hero-proof reveal reveal-d4">
          <div className="proof-avatars">
            <div className="proof-av" style={{background:"linear-gradient(135deg,#0052CC,#3387FF)"}}>G</div>
            <div className="proof-av" style={{background:"linear-gradient(135deg,#FF6B35,#FFB799)"}}>A</div>
            <div className="proof-av" style={{background:"linear-gradient(135deg,#10B981,#6EE7B7)"}}>K</div>
            <div className="proof-av" style={{background:"linear-gradient(135deg,#334155,#64748B)"}}>+</div>
          </div>
          <span className="proof-text">Trusted by <strong>200+</strong> brands across <strong>9 countries</strong></span>
        </div>
      </div>

      
      <div className="hero-right reveal reveal-d2" data-parallax-container>
        <div className="hero-right-glow"></div>

        
        <div className="float-card float-card--revenue" data-parallax="0.05">
          <div className="fc-label">Monthly Revenue</div>
          <div className="fc-value">$284K</div>
          <div className="fc-sub"><span className="fc-up">↑ 32%</span> vs last quarter</div>
        </div>
        <div className="float-card float-card--growth" data-parallax="0.04">
          <div className="fc-label">Conversion Rate</div>
          <div className="fc-value">4.8%</div>
          <div className="fc-sub"><span className="fc-up">↑ 60%</span> after launch</div>
        </div>
        <div className="float-card float-card--rating" data-parallax="0.06">
          <div className="fc-label">Store Rating</div>
          <div className="fc-stars">
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
          </div>
          <div className="fc-sub">40–60% Below US/UK Agency Rates</div>
        </div>

        
        <div className="browser" data-parallax="0.02">
          <div className="browser-bar">
            <div className="browser-dots">
              <div className="browser-dot browser-dot--r"></div>
              <div className="browser-dot browser-dot--y"></div>
              <div className="browser-dot browser-dot--g"></div>
            </div>
            <div className="browser-url"><span>yourstore.myshopify.com/admin</span></div>
          </div>
          <div className="dash">
            
            <div className="dash-stats">
              <div className="dash-stat">
                <div className="dash-stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#3387FF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
                <div className="dash-stat-val">$47.2K</div>
                <div className="dash-stat-label">Today's Sales</div>
              </div>
              <div className="dash-stat">
                <div className="dash-stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
                <div className="dash-stat-val">1,284</div>
                <div className="dash-stat-label">Customers</div>
              </div>
              <div className="dash-stat">
                <div className="dash-stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FFB799" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg></div>
                <div className="dash-stat-val">3.9%</div>
                <div className="dash-stat-label">Conv. Rate</div>
              </div>
            </div>

            
            <div className="dash-chart">
              <div className="dash-chart-title">Revenue — Last 12 Months</div>
              <div className="chart-bars">
                <div className="chart-bar" style={{height:"35%",background:"var(--blue-200)"}}></div>
                <div className="chart-bar" style={{height:"42%",background:"var(--blue-200)"}}></div>
                <div className="chart-bar" style={{height:"38%",background:"var(--blue-200)"}}></div>
                <div className="chart-bar" style={{height:"55%",background:"var(--blue-200)"}}></div>
                <div className="chart-bar" style={{height:"48%",background:"var(--blue-200)"}}></div>
                <div className="chart-bar" style={{height:"62%",background:"var(--blue-200)"}}></div>
                <div className="chart-bar" style={{height:"58%",background:"var(--blue-200)"}}></div>
                <div className="chart-bar" style={{height:"72%",background:"var(--blue)"}}></div>
                <div className="chart-bar" style={{height:"68%",background:"var(--blue)"}}></div>
                <div className="chart-bar" style={{height:"78%",background:"var(--blue)"}}></div>
                <div className="chart-bar" style={{height:"85%",background:"var(--blue)"}}></div>
                <div className="chart-bar" style={{height:"95%",background:"linear-gradient(to top,var(--blue),#3387FF)"}}></div>
              </div>
            </div>

            
            <div className="dash-products">
              <div className="dash-product">
                <div className="dp-thumb" style={{background:"linear-gradient(135deg,#1a1a2e,#16213e)"}}></div>
                <div className="dp-info">
                  <div className="dp-name">Premium Running Shoes — Midnight</div>
                  <div className="dp-meta">SKU-4821 · 142 sold</div>
                </div>
                <div className="dp-price">$189.00</div>
              </div>
              <div className="dash-product">
                <div className="dp-thumb" style={{background:"linear-gradient(135deg,#0d1b2a,#1b263b)"}}></div>
                <div className="dp-info">
                  <div className="dp-name">Organic Face Serum — 30ml</div>
                  <div className="dp-meta">SKU-7193 · 89 sold</div>
                </div>
                <div className="dp-price">$64.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


<section className="trust-strip" aria-label="Trust indicators and client logos">
  
  <div className="ts-badges">
    
    <div className="ts-badge reveal">
      <div className="ts-badge-icon ts-badge-icon--blue">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </div>
      <div className="ts-badge-body">
        <div className="ts-badge-val">200+</div>
        <div className="ts-badge-label">Shopify Stores Launched</div>
      </div>
    </div>
    
    <div className="ts-badge reveal reveal-d1">
      <div className="ts-badge-icon ts-badge-icon--gold">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 4.84L19.3 7.9l-3.65 3.56.86 5.03L12 14.14l-4.51 2.37.86-5.03L4.7 7.92l4.91-.72L12 2z"/></svg>
      </div>
      <div className="ts-badge-body">
        <div className="ts-badge-val" style={{display:"flex",alignItems:"center",gap:"6px"}}>
          98%
          <span className="ts-stars">
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
          </span>
        </div>
        <div className="ts-badge-label">Client Satisfaction Rate</div>
      </div>
    </div>
    
    <div className="ts-badge reveal reveal-d2">
      <div className="ts-badge-icon ts-badge-icon--green">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
      </div>
      <div className="ts-badge-body">
        <div className="ts-badge-val">9 Countries</div>
        <div className="ts-badge-label">Served Worldwide</div>
      </div>
    </div>
    
    <div className="ts-badge reveal reveal-d3">
      <div className="ts-badge-icon ts-badge-icon--orange">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
      </div>
      <div className="ts-badge-body">
        <div className="ts-badge-val">40–60% Less</div>
        <div className="ts-badge-label">vs US/UK Agency Rates</div>
      </div>
    </div>
  </div>

  
  <div className="ts-ticker-wrap">
    <div className="ts-ticker" aria-hidden="true">
      
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#96bf48"}}>S</div><span className="ts-logo-name">Shopify</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#635BFF"}}>S</div><span className="ts-logo-name">Stripe</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#003087"}}>P</div><span className="ts-logo-name">PayPal</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2684FF"}}>R</div><span className="ts-logo-name">Razorpay</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF6600"}}>H</div><span className="ts-logo-name">HubSpot</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#00B4E6"}}>SF</div><span className="ts-logo-name">Salesforce</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#7B68EE"}}>K</div><span className="ts-logo-name">Klaviyo</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF4F00"}}>Z</div><span className="ts-logo-name">Zoho</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2C8EBB"}}>SS</div><span className="ts-logo-name">ShipStation</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0F6FFF"}}>SR</div><span className="ts-logo-name">Shiprocket</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0B5ED7"}}>SAP</div><span className="ts-logo-name">SAP</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#C74634"}}>O</div><span className="ts-logo-name">Oracle</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2CA01C"}}>QB</div><span className="ts-logo-name">QuickBooks</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#13B5EA"}}>X</div><span className="ts-logo-name">Xero</span></div></div>
      
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#96bf48"}}>S</div><span className="ts-logo-name">Shopify</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#635BFF"}}>S</div><span className="ts-logo-name">Stripe</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#003087"}}>P</div><span className="ts-logo-name">PayPal</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2684FF"}}>R</div><span className="ts-logo-name">Razorpay</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF6600"}}>H</div><span className="ts-logo-name">HubSpot</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#00B4E6"}}>SF</div><span className="ts-logo-name">Salesforce</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#7B68EE"}}>K</div><span className="ts-logo-name">Klaviyo</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF4F00"}}>Z</div><span className="ts-logo-name">Zoho</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2C8EBB"}}>SS</div><span className="ts-logo-name">ShipStation</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0F6FFF"}}>SR</div><span className="ts-logo-name">Shiprocket</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0B5ED7"}}>SAP</div><span className="ts-logo-name">SAP</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#C74634"}}>O</div><span className="ts-logo-name">Oracle</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2CA01C"}}>QB</div><span className="ts-logo-name">QuickBooks</span></div></div>
      <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#13B5EA"}}>X</div><span className="ts-logo-name">Xero</span></div></div>
    </div>
  </div>
</section>


<section className="sec sec--w" id="why-shopify">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Why Shopify</span>
      <h2>Why Shopify Is the World's Leading E-Commerce Platform</h2>
    </div>

    <div className="vp-bento">

      
      
      <div className="vp-card vp-hero vp-span-8 vp-icon--blue-glow reveal">
        <div className="vp-icon vp-icon--blue">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <h3>The World's #1 E-Commerce Platform</h3>
        <p>Shopify is the most widely used e-commerce platform in the world. As of 2026, over <span className="vp-hl">2.85 million live stores</span> operate on Shopify across <span className="vp-hl">175 countries</span>, processing more than <span className="vp-hl">$378 billion in gross merchandise volume</span> annually. Shopify powers <span className="vp-hl">29 percent of all e-commerce websites globally</span> and holds the number one market share position in the United States, United Kingdom, Canada, Australia, and India.</p>
      </div>

      
      <aside className="vp-card vp-stats vp-span-4 reveal reveal-d1">
        <h3>Shopify by the Numbers</h3>
        <div className="vp-stat-row"><span className="vp-stat-val">2.85M+</span><span className="vp-stat-lbl">live stores worldwide</span></div>
        <div className="vp-stat-row"><span className="vp-stat-val">$378B+</span><span className="vp-stat-lbl">gross merchandise volume</span></div>
        <div className="vp-stat-row"><span className="vp-stat-val">29%</span><span className="vp-stat-lbl">global e-commerce market share</span></div>
        <div className="vp-stat-row"><span className="vp-stat-val">15%</span><span className="vp-stat-lbl">better checkout conversion</span></div>
        <div className="vp-stat-row"><span className="vp-stat-val">309ms</span><span className="vp-stat-lbl">average page load time</span></div>
        <div className="vp-stat-row"><span className="vp-stat-val">12,320</span><span className="vp-stat-lbl">apps in the Shopify App Store</span></div>
        <div className="vp-stat-row"><span className="vp-stat-val">136</span><span className="vp-stat-lbl">currencies supported</span></div>
        <div className="vp-stat-row"><span className="vp-stat-val">99.99%</span><span className="vp-stat-lbl">uptime guarantee</span></div>
      </aside>

      
      
      <div className="vp-card vp-metric vp-span-4 vp-icon--green-glow reveal">
        <div className="vp-icon vp-icon--green">
          <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <div className="vp-metric-num">15<span className="vp-unit">%</span></div>
        <h3>Better Checkout Conversion</h3>
        <p>Businesses choose Shopify because it combines <span className="vp-hl">enterprise-grade infrastructure</span> with operational simplicity. Shopify's checkout converts <span className="vp-hl">15 percent better</span> than competing platforms.</p>
      </div>

      
      <div className="vp-card vp-metric vp-span-4 vp-icon--orange-glow reveal reveal-d1">
        <div className="vp-icon vp-icon--orange">
          <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div className="vp-metric-num">309<span className="vp-unit">ms</span></div>
        <h3>Blazing Fast Load Times</h3>
        <p>Its average page load time of <span className="vp-hl">309 milliseconds</span> is more than twice as fast as WooCommerce's 776 milliseconds.</p>
      </div>

      
      <div className="vp-card vp-metric vp-span-4 vp-icon--purple-glow reveal reveal-d2">
        <div className="vp-icon vp-icon--purple">
          <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3"/></svg>
        </div>
        <div className="vp-metric-num">12,320</div>
        <h3>Apps &amp; Infinite Scale</h3>
        <p>With <span className="vp-hl">12,320 apps</span> in the Shopify App Store, <span className="vp-hl">99.99 percent uptime</span>, and native support for over <span className="vp-hl">136 currencies</span> through Shopify Markets, the platform scales from a single-product launch to a billion-dollar enterprise operation.</p>
      </div>

      
      <div className="vp-card vp-fj vp-span-12 reveal" style={{display:"grid",gap:"24px",alignItems:"center"}} id="vp-fj-row">
        <div>
          <div className="vp-icon vp-icon--navy" style={{boxShadow:"0 4px 12px rgba(0,0,0,.2)"}}>
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#3387FF" stroke="none"/></svg>
          </div>
          <h3>Your Shopify Development Partner — FactoryJet</h3>
          <p>FactoryJet is a Shopify development agency that builds, migrates, and scales Shopify stores for brands across the <span className="vp-hl">United States, Canada, United Kingdom, Europe, Australia, Singapore, UAE, Saudi Arabia, and India</span>. We specialize in <span className="vp-hl">custom Shopify Plus development</span>, headless commerce with Hydrogen, platform migrations, B2B e-commerce, and end-to-end store optimization.</p>
        </div>
      </div>

    </div>

    <div className="sec-cta reveal" style={{marginTop:"48px",textAlign:"center"}}>
      <a href="#" className="btn btn-p" onClick={handleCta}>Ready to build on the platform trusted by millions? Get Your Free Shopify Consultation <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--f" id="services">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Our Services</span>
      <h2>What We Build on Shopify and Shopify Plus</h2>
      <p className="sub sub--center">FactoryJet offers a full spectrum of Shopify e-commerce development services, from initial store setup to enterprise-grade Shopify Plus architecture. Every store we build is optimized for conversions, search engine visibility, and AI-powered discovery across Google, ChatGPT, Perplexity, and other generative search engines.</p>
    </div>

    
    <div className="svc-tabs reveal">
      <button className="svc-tab active" data-filter="all">All Services</button>
      <button className="svc-tab" data-filter="build">Build</button>
      <button className="svc-tab" data-filter="migrate">Migrate</button>
      <button className="svc-tab" data-filter="scale">Scale &amp; Optimize</button>
    </div>

    <div className="svc-grid" id="svcGrid">

      
      <div className="svc svc--light svc-7 reveal" data-category="build">
        <div className="svc-stripe svc-stripe--blue"></div>
        <div className="svc-top">
          <div className="svc-glow svc-glow--blue"></div>
          <div className="svc-icon svc-icon--blue">
            <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <h3>Custom Shopify Store Development</h3>
          <p className="svc-sum">End-to-end Shopify builds with custom Liquid themes, conversion-optimized UX, and schema markup for search and AI visibility.</p>
          <div className="svc-bullets">
            <span className="svc-pill svc-pill--blue">Custom Liquid Themes</span>
            <span className="svc-pill svc-pill--blue">Mobile-First</span>
            <span className="svc-pill svc-pill--blue">Sub-2.5s Load</span>
          </div>
        </div>
        <div className="svc-bot">
          <div className="svc-detail">
            <div className="svc-detail-inner">We build Shopify stores from the ground up with custom Liquid theme development, conversion-optimized product pages, advanced collection filtering, and seamless checkout flows. Every store is mobile-first, performance-tuned for sub-2.5-second load times, and structured with comprehensive schema markup for maximum search and AI visibility. Custom Shopify store development starts from $5,000 for theme-based builds and $15,000 or more for fully bespoke designs.</div>
          </div>
          <div className="svc-footer">
            <button className="svc-explore" onClick={(e) => { const card = e.currentTarget.closest(".svc"); if(card) card.classList.toggle("expanded"); }}><span className="exp-show">Explore</span><span className="exp-hide">Collapse</span> <span className="arr">→</span></button>
            <span className="svc-price svc-price--blue">From $5,000</span>
          </div>
        </div>
      </div>

      
      <div className="svc svc--light svc-5 reveal reveal-d1" data-category="build">
        <div className="svc-stripe svc-stripe--orange"></div>
        <div className="svc-top">
          <div className="svc-glow svc-glow--orange"></div>
          <div className="svc-icon svc-icon--orange">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <h3>Shopify Plus Enterprise Development</h3>
          <p className="svc-sum">Enterprise-grade builds for high-volume brands — Checkout Extensibility, B2B, multi-store, and advanced automation.</p>
          <div className="svc-bullets">
            <span className="svc-pill svc-pill--orange">Checkout Extensibility</span>
            <span className="svc-pill svc-pill--orange">B2B Ready</span>
            <span className="svc-pill svc-pill--orange">Multi-Store</span>
          </div>
        </div>
        <div className="svc-bot">
          <div className="svc-detail">
            <div className="svc-detail-inner">Shopify Plus is the enterprise tier of Shopify, used by over <span className="svc-hl">45,000 high-volume brands</span> worldwide including Gymshark, Allbirds, Fashion Nova, and Heinz. FactoryJet builds Shopify Plus stores with full Checkout Extensibility for custom checkout fields, conditional logic, and post-purchase upsells. We configure B2B selling with company profiles, custom price lists, and net payment terms. We set up multi-store architecture using Shopify Plus expansion stores, enabling up to <span className="svc-hl">10 additional storefronts</span> for international markets, flash sale sites, or wholesale channels. Shopify Plus development typically ranges from $25,000 to $150,000 depending on complexity, integrations, and custom feature requirements.</div>
          </div>
          <div className="svc-footer">
            <button className="svc-explore" onClick={(e) => { const card = e.currentTarget.closest(".svc"); if(card) card.classList.toggle("expanded"); }}><span className="exp-show">Explore</span><span className="exp-hide">Collapse</span> <span className="arr">→</span></button>
            <span className="svc-price svc-price--blue">$25K – $150K</span>
          </div>
        </div>
      </div>

      
      <div className="svc svc--dark svc-12 reveal" data-category="build">
        <div className="svc-stripe svc-stripe--green"></div>
        <div className="svc-top">
          <div className="svc-hero-grid">
            <div>
              <div className="svc-glow svc-glow--green" style={{opacity:".5"}}></div>
              <div className="svc-icon svc-icon--green">
                <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>Shopify Headless Commerce Development (Hydrogen &amp; Oxygen)</h3>
              <p className="svc-sum">Fully decoupled storefronts built on Shopify Hydrogen — 50–70% faster loads, near-perfect Lighthouse scores, complete design freedom.</p>
              <div className="svc-bullets">
                <span className="svc-pill svc-pill--dark">React / Hydrogen</span>
                <span className="svc-pill svc-pill--dark">Oxygen Hosting</span>
                <span className="svc-pill svc-pill--dark">+30% Conversions</span>
                <span className="svc-pill svc-pill--dark">PWA Ready</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="svc-bot">
          <div className="svc-detail">
            <div className="svc-detail-inner">Headless commerce separates the storefront presentation layer from the Shopify backend, enabling fully custom shopping experiences built with modern web technologies. Shopify Hydrogen is Shopify's official React-based framework for headless builds, and Oxygen is the global hosting infrastructure that serves these storefronts. Hydrogen storefronts deliver <span className="svc-hl">50 to 70 percent faster page loads</span>, near-perfect Google Lighthouse scores, and measurable conversion improvements of <span className="svc-hl">30 percent or higher</span>. FactoryJet builds Hydrogen storefronts for brands that need complete design freedom, ultra-fast performance, and progressive web app capabilities that standard Shopify themes cannot achieve.</div>
          </div>
          <div className="svc-footer">
            <button className="svc-explore" onClick={(e) => { const card = e.currentTarget.closest(".svc"); if(card) card.classList.toggle("expanded"); }}><span className="exp-show">Explore</span><span className="exp-hide">Collapse</span> <span className="arr">→</span></button>
            <span className="svc-price svc-price--dark">$30K – $120K+</span>
          </div>
        </div>
      </div>

      
      <div className="svc svc--light svc-4 reveal" data-category="migrate">
        <div className="svc-stripe svc-stripe--purple"></div>
        <div className="svc-top">
          <div className="svc-glow svc-glow--purple"></div>
          <div className="svc-icon svc-icon--purple">
            <svg viewBox="0 0 24 24"><path d="M21 12H3m0 0l6-6m-6 6l6 6M21 6v12"/></svg>
          </div>
          <h3>Shopify Migration Services</h3>
          <p className="svc-sum">Zero-downtime migrations from any platform with full data integrity and SEO preservation.</p>
          <div className="svc-bullets">
            <span className="svc-pill svc-pill--purple">Zero Downtime</span>
            <span className="svc-pill svc-pill--purple">301 Redirects</span>
            <span className="svc-pill svc-pill--purple">Full Data Transfer</span>
          </div>
        </div>
        <div className="svc-bot">
          <div className="svc-detail">
            <div className="svc-detail-inner">FactoryJet provides zero-downtime migration services from WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, Wix, Squarespace, PrestaShop, and custom legacy platforms to Shopify and Shopify Plus. Our migration process includes complete data transfer covering products, customers, orders, blog content, and reviews. We implement full SEO preservation through <span className="svc-hl">301 redirects</span>, canonical tag management, and sitemap resubmission. We verify all structured data transfers correctly and conduct post-migration audits across speed, functionality, and search rankings. Migration timelines range from <span className="svc-hl">4 to 12 weeks</span> depending on catalog size and integration complexity.</div>
          </div>
          <div className="svc-footer">
            <button className="svc-explore" onClick={(e) => { const card = e.currentTarget.closest(".svc"); if(card) card.classList.toggle("expanded"); }}><span className="exp-show">Explore</span><span className="exp-hide">Collapse</span> <span className="arr">→</span></button>
            <span className="svc-price svc-price--blue">4–12 Weeks</span>
          </div>
        </div>
      </div>

      
      <div className="svc svc--light svc-4 reveal reveal-d1" data-category="build">
        <div className="svc-stripe svc-stripe--cyan"></div>
        <div className="svc-top">
          <div className="svc-glow svc-glow--cyan"></div>
          <div className="svc-icon svc-icon--cyan">
            <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <h3>Shopify B2B and Wholesale E-Commerce Development</h3>
          <p className="svc-sum">DTC and wholesale from a single store — custom pricing, net terms, ERP integration.</p>
          <div className="svc-bullets">
            <span className="svc-pill svc-pill--cyan">Custom Price Lists</span>
            <span className="svc-pill svc-pill--cyan">ERP Sync</span>
            <span className="svc-pill svc-pill--cyan">Net Payment Terms</span>
          </div>
        </div>
        <div className="svc-bot">
          <div className="svc-detail">
            <div className="svc-detail-inner">Shopify Plus now includes native B2B functionality that allows businesses to operate DTC and wholesale channels from a single store. FactoryJet builds B2B Shopify solutions with <span className="svc-hl">company profiles and buyer role management</span>, custom price lists and volume-based discounting, net payment terms with automated invoicing, quick-order lists for repeat buyers, and integration with ERP systems for real-time inventory and order synchronization. We serve B2B brands across manufacturing, food service, industrial supply, and professional equipment industries.</div>
          </div>
          <div className="svc-footer">
            <button className="svc-explore" onClick={(e) => { const card = e.currentTarget.closest(".svc"); if(card) card.classList.toggle("expanded"); }}><span className="exp-show">Explore</span><span className="exp-hide">Collapse</span> <span className="arr">→</span></button>
            <span className="svc-price svc-price--blue">Plus Required</span>
          </div>
        </div>
      </div>

      
      <div className="svc svc--light svc-4 reveal reveal-d2" data-category="build">
        <div className="svc-stripe svc-stripe--rose"></div>
        <div className="svc-top">
          <div className="svc-glow svc-glow--rose"></div>
          <div className="svc-icon svc-icon--rose">
            <svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          </div>
          <h3>Shopify App Development and API Integration</h3>
          <p className="svc-sum">Custom apps and deep integrations with ERP, CRM, PIM, and logistics platforms via REST and GraphQL APIs.</p>
          <div className="svc-bullets">
            <span className="svc-pill svc-pill--rose">Custom Apps</span>
            <span className="svc-pill svc-pill--rose">GraphQL API</span>
            <span className="svc-pill svc-pill--rose">ERP / CRM / PIM</span>
          </div>
        </div>
        <div className="svc-bot">
          <div className="svc-detail">
            <div className="svc-detail-inner">FactoryJet develops custom Shopify apps for functionality that does not exist in the Shopify App Store. We also integrate Shopify with third-party platforms including ERP systems like <span className="svc-hl">SAP, Oracle, and ERPNext</span>, CRM platforms like <span className="svc-hl">Salesforce, HubSpot, and Zoho</span>, PIM systems for centralized product information management, marketing automation platforms, accounting software like QuickBooks, Xero, and Tally, and logistics and fulfillment platforms like ShipStation, Shiprocket, and Delhivery. All integrations use Shopify's REST and GraphQL APIs with proper authentication, rate limit management, and webhook configurations.</div>
          </div>
          <div className="svc-footer">
            <button className="svc-explore" onClick={(e) => { const card = e.currentTarget.closest(".svc"); if(card) card.classList.toggle("expanded"); }}><span className="exp-show">Explore</span><span className="exp-hide">Collapse</span> <span className="arr">→</span></button>
            <span className="svc-price svc-price--blue">From $8,000</span>
          </div>
        </div>
      </div>

      
      <div className="svc svc--light svc-12 reveal" data-category="scale">
        <div className="svc-stripe svc-stripe--multi"></div>
        <div className="svc-top">
          <div className="svc-glow svc-glow--blue"></div>
          <div style={{display:"grid",gap:"20px",alignItems:"start"}} className="svc-hero-grid">
            <div>
              <div className="svc-icon svc-icon--blue">
                <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h3>Shopify Conversion Rate Optimization</h3>
              <p className="svc-sum">Data-driven CRO for existing stores — A/B testing, checkout optimization, and trust signal placement for 25–60% lift.</p>
              <div className="svc-bullets">
                <span className="svc-pill svc-pill--blue">A/B Testing</span>
                <span className="svc-pill svc-pill--blue">Cart Recovery</span>
                <span className="svc-pill svc-pill--blue">Speed Optimization</span>
                <span className="svc-pill svc-pill--blue">Mobile UX</span>
                <span className="svc-pill svc-pill--blue">25–60% Lift</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="svc-bot">
          <div className="svc-detail">
            <div className="svc-detail-inner">Beyond building stores, FactoryJet optimizes existing Shopify and Shopify Plus stores for higher conversion rates. Our CRO services include checkout flow optimization, product page A/B testing, cart abandonment recovery implementation, page speed improvement, mobile UX optimization, and trust signal placement. Shopify stores that undergo structured CRO programs typically see <span className="svc-hl">25 to 60 percent improvement in conversion rates</span> within the first 90 days.</div>
          </div>
          <div className="svc-footer">
            <button className="svc-explore" onClick={(e) => { const card = e.currentTarget.closest(".svc"); if(card) card.classList.toggle("expanded"); }}><span className="exp-show">Explore</span><span className="exp-hide">Collapse</span> <span className="arr">→</span></button>
            <span className="svc-price svc-price--blue">90-Day Programs</span>
          </div>
        </div>
      </div>

    </div>

    <div className="sec-cta reveal" style={{marginTop:"48px",textAlign:"center"}}>
      <a href="#" className="btn btn-p" onClick={handleCta}>Tell us what you need built — Get a Custom Shopify Project Quote <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--w" id="comparison">
  <div className="ctr">
    <div className="sec-head reveal">
      <span className="eyebrow">Platform Comparison</span>
      <h2>Shopify vs Shopify Plus — A Complete Comparison</h2>
    </div>
    <div className="cmp-intro reveal">
      <p>Choosing between Shopify and Shopify Plus depends on your revenue, operational complexity, and growth trajectory. Here is a detailed comparison to guide your decision.</p>
    </div>

    <div className="cmp-visual reveal">
      
      <div className="cmp-table-card">
        <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
          <table className="tbl">
            <thead><tr><th>Feature</th><th>Shopify (Grow Plan)</th><th>Shopify Plus</th></tr></thead>
            <tbody>
              <tr><td>Monthly Cost</td><td>$105/month</td><td>$2,300/month (3-year term) or $2,500/month (1-year term)</td></tr>
              <tr><td>Variable Fees</td><td>Standard transaction fees</td><td>0.35% on monthly sales above approximately $800,000 (capped at $40,000/month)</td></tr>
              <tr><td>Checkout Customization</td><td>Limited to standard options</td><td>Full Checkout Extensibility with custom fields, conditional logic, and branded UI</td></tr>
              <tr><td>B2B Selling</td><td>Not available</td><td>Company profiles, custom price lists, net payment terms, quantity rules</td></tr>
              <tr><td>Expansion Stores</td><td>Not available</td><td>Up to 10 additional stores included</td></tr>
              <tr><td>Staff Accounts</td><td>Up to 15</td><td>Unlimited</td></tr>
              <tr><td>API Call Limits</td><td>Standard</td><td>10x standard limits</td></tr>
              <tr><td>Automation</td><td>Basic Shopify Flow</td><td>Advanced Shopify Flow, Launchpad for flash sales and product drops</td></tr>
              <tr><td>POS Pro</td><td>$89/month per location</td><td>Included for up to 20 locations</td></tr>
              <tr><td>Support</td><td>Standard support channels</td><td>Dedicated Merchant Success Manager with 24/7 priority support</td></tr>
              <tr><td>Theme Storage</td><td>Up to 20 themes</td><td>Up to 100 themes</td></tr>
              <tr><td>Custom Pixels</td><td>Limited</td><td>Full custom pixel support for advanced analytics</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="cmp-upgrade-card reveal reveal-d1">
        <h3>When Should You Upgrade to Shopify Plus?</h3>
        <div className="cmp-signals">
          <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Monthly revenue consistently exceeds <strong>$80,000 to $100,000</strong></span></div>
          <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Need <strong>custom checkout experiences</strong> including branded checkout pages, conditional discounts, and post-purchase upsells</span></div>
          <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Business requires <strong>B2B and wholesale capabilities</strong> alongside DTC selling</span></div>
          <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Expanding internationally — <strong>multiple storefronts</strong> in different currencies and languages</span></div>
          <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Need <strong>advanced automation</strong> for product launches, flash sales, and campaign scheduling</span></div>
          <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>API usage is <strong>hitting standard rate limits</strong> due to high integration volume</span></div>
        </div>
        <p className="cmp-upgrade-note">FactoryJet helps businesses evaluate whether Shopify Plus is the right investment and handles the full migration and setup process.</p>
        <a href="#" className="btn btn-p btn-sm" onClick={handleCta} style={{width:"100%",justifyContent:"center"}}>Book a Free Strategy Call <span className="arr">→</span></a>
      </div>
    </div>
  </div>
</section>


<section className="sec sec--f" id="industries">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Industries</span>
      <h2>Shopify E-Commerce Development Across Every Industry</h2>
      <p className="sub sub--center">FactoryJet builds Shopify stores for specific industry requirements. Each vertical receives tailored product page structures, checkout flows, integration architectures, and conversion strategies.</p>
    </div>
    <div className="ind-grid">
      <div className="ind reveal"><span className="ind-emoji">👗</span><h3>Fashion and Apparel</h3><p>Fashion and apparel is the largest category on Shopify, representing 21.8 percent of all stores with over 527,000 merchants. FactoryJet builds fashion stores with size guides, color swatches, lookbook galleries, inventory sync across wholesale and DTC channels, and returns management integration. Notable Shopify Plus fashion brands include Gymshark, Allbirds, Fashion Nova, NOBULL, and KITH.</p></div>
      <div className="ind reveal reveal-d1"><span className="ind-emoji">💄</span><h3>Health and Beauty</h3><p>Health and beauty brands on Shopify benefit from subscription capabilities, ingredient transparency pages, before-and-after galleries, loyalty program integration, and compliance with regional cosmetics regulations. FactoryJet has built Shopify stores in this vertical that achieved 180 percent or higher sales growth within the first year.</p></div>
      <div className="ind reveal reveal-d2"><span className="ind-emoji">🍽️</span><h3>Food and Beverage</h3><p>Food and beverage e-commerce requires specialized handling for perishable goods, subscription box models, delivery zone configuration, cold chain logistics integration, and nutritional information display. We configure Shopify stores with delivery date pickers, minimum order thresholds, and dynamic shipping rates based on weight and zone.</p></div>
      <div className="ind reveal reveal-d3"><span className="ind-emoji">🏭</span><h3>B2B and Wholesale</h3><p>B2B e-commerce on Shopify Plus enables manufacturers, distributors, and wholesale operations to sell online with custom pricing per customer, volume discounts, purchase order workflows, and ERP-connected inventory. FactoryJet builds B2B Shopify solutions that integrate with SAP, Oracle, ERPNext, and industry-specific ERP platforms.</p></div>
      <div className="ind reveal reveal-d4"><span className="ind-emoji">🏡</span><h3>Home and Furniture</h3><p>Home and furniture stores require high-resolution product photography support, room visualization tools, complex variant handling for materials and dimensions, and white-glove delivery integration. We build Shopify furniture stores with AR product preview capabilities and sample ordering workflows.</p></div>
      <div className="ind reveal reveal-d5"><span className="ind-emoji">💎</span><h3>Jewelry and Luxury</h3><p>Jewelry and luxury e-commerce demands premium visual presentation, 360-degree product views, engraving and customization options, certificate of authenticity integration, and insurance-backed shipping. We build Shopify luxury stores with elevated design systems that reflect brand exclusivity.</p></div>
      <div className="ind reveal reveal-d6"><span className="ind-emoji">⚽</span><h3>Sports and Outdoor</h3><p>Sports brands on Shopify require team ordering capabilities, size recommendation engines, product comparison tools, and integration with athlete endorsement content. We build stores in this vertical with pre-order functionality for seasonal product drops and limited-edition releases.</p></div>
      <div className="ind reveal reveal-d7"><span className="ind-emoji">🔄</span><h3>Subscription-Based Businesses</h3><p>Subscription e-commerce on Shopify uses apps like Recharge, Bold Subscriptions, and Shopify's native subscription APIs. FactoryJet configures subscription stores with flexible billing cycles, skip and pause functionality, subscriber dashboards, and churn reduction automation.</p></div>
    </div>
    <div className="sec-cta reveal">
      <a href="#" className="btn btn-p" onClick={handleCta}>Building for a specific industry? Discuss Your Shopify Project <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--w pj" id="process">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Our Process</span>
      <h2>How FactoryJet Builds Your Shopify Store — A Six-Phase Process</h2>
      <p className="sub sub--center">FactoryJet follows a structured, milestone-driven development process for every Shopify and Shopify Plus project. Each phase has defined deliverables, review checkpoints, and transparent timelines.</p>
    </div>

    <div className="pj-track reveal" id="pjTrack">
      
      <div className="pj-rail"><div className="pj-fill" id="pjFill"></div></div>

      
      <div className="pj-steps" id="pjSteps">

        
        <div className="pj-step" data-step="1">
          <div className="pj-card">
            <div className="pj-head">
              <div className="pj-num pj-num--idle">1</div>
              <div className="pj-icon" style={{background:"linear-gradient(135deg,#0052CC,#3387FF)"}}>
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <div className="pj-info">
                <div className="pj-title">Discovery and Strategy</div>
                <div className="pj-week">Weeks 1–2</div>
              </div>
            </div>
            <p className="pj-sum">Audit your business, competitors, and goals — then deliver a technical blueprint and project scope.</p>
            <div className="pj-tags">
              <span className="pj-tag">Scope Document</span>
              <span className="pj-tag">Architecture</span>
              <span className="pj-tag">Cost Proposal</span>
            </div>
            <div className="pj-detail">
              <div className="pj-detail-inner">We start by understanding your business model, target customers, product catalog, competitive landscape, and growth goals. We audit your existing store if you have one, analyze competitor Shopify implementations, and recommend the optimal Shopify plan, theme approach, and integration architecture. Deliverables include a <span className="pj-hl">project scope document</span>, <span className="pj-hl">technical architecture blueprint</span>, timeline with milestones, and a <span className="pj-hl">detailed cost proposal</span>.</div>
            </div>
            <div className="pj-toggle"><button className="pj-toggle-btn" onClick={(e) => { const step = e.currentTarget.closest(".pj-step"); if(step) step.classList.toggle("open"); }}><span className="pj-tg-show">Details</span><span className="pj-tg-hide">Less</span> <span className="pj-tg-chev">▼</span></button></div>
          </div>
        </div>

        
        <div className="pj-step" data-step="2">
          <div className="pj-card">
            <div className="pj-head">
              <div className="pj-num pj-num--idle">2</div>
              <div className="pj-icon" style={{background:"linear-gradient(135deg,#7C3AED,#A78BFA)"}}>
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <div className="pj-info">
                <div className="pj-title">UX Design and Prototyping</div>
                <div className="pj-week">Weeks 2–4</div>
              </div>
            </div>
            <p className="pj-sum">Mobile-first wireframes, high-fidelity mockups, and clickable prototypes — before any code is written.</p>
            <div className="pj-tags">
              <span className="pj-tag">Wireframes</span>
              <span className="pj-tag">Mockups</span>
              <span className="pj-tag">Prototype</span>
            </div>
            <div className="pj-detail">
              <div className="pj-detail-inner">We create wireframes and high-fidelity mockups for every page type, starting with mobile layouts. Design decisions are rooted in <span className="pj-hl">conversion rate optimization</span> best practices including strategic CTA placement, trust signal positioning, streamlined checkout flows, and accessible navigation. You review <span className="pj-hl">clickable prototypes</span> and provide feedback before any code is written. Deliverables include wireframes, design mockups, a clickable prototype, and a <span className="pj-hl">brand-integrated design system</span>.</div>
            </div>
            <div className="pj-toggle"><button className="pj-toggle-btn" onClick={(e) => { const step = e.currentTarget.closest(".pj-step"); if(step) step.classList.toggle("open"); }}><span className="pj-tg-show">Details</span><span className="pj-tg-hide">Less</span> <span className="pj-tg-chev">▼</span></button></div>
          </div>
        </div>

        
        <div className="pj-step" data-step="3">
          <div className="pj-card">
            <div className="pj-head">
              <div className="pj-num pj-num--idle">3</div>
              <div className="pj-icon" style={{background:"linear-gradient(135deg,#059669,#34D399)"}}>
                <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div className="pj-info">
                <div className="pj-title">Development and Integration</div>
                <div className="pj-week">Weeks 4–10</div>
              </div>
            </div>
            <p className="pj-sum">Custom Liquid or Hydrogen build with payment gateways, shipping, tax, and all third-party integrations.</p>
            <div className="pj-tags">
              <span className="pj-tag">Liquid / Hydrogen</span>
              <span className="pj-tag">Payments</span>
              <span className="pj-tag">Integrations</span>
            </div>
            <div className="pj-detail">
              <div className="pj-detail-inner">We build your store using custom Liquid theme development or Hydrogen headless architecture, depending on your project requirements. During this phase, we integrate payment gateways including <span className="pj-hl">Shopify Payments, Stripe, PayPal, Razorpay, Telr</span>, and regional providers. We connect shipping platforms, configure tax rules for target markets, set up email notifications, and implement all third-party integrations. For Shopify Plus builds, this phase includes <span className="pj-hl">Checkout Extensibility</span> configuration, B2B setup, <span className="pj-hl">Shopify Flow automation</span>, and expansion store creation.</div>
            </div>
            <div className="pj-toggle"><button className="pj-toggle-btn" onClick={(e) => { const step = e.currentTarget.closest(".pj-step"); if(step) step.classList.toggle("open"); }}><span className="pj-tg-show">Details</span><span className="pj-tg-hide">Less</span> <span className="pj-tg-chev">▼</span></button></div>
          </div>
        </div>

        
        <div className="pj-step" data-step="4">
          <div className="pj-card">
            <div className="pj-head">
              <div className="pj-num pj-num--idle">4</div>
              <div className="pj-icon" style={{background:"linear-gradient(135deg,#FF6B35,#FFB799)"}}>
                <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
              </div>
              <div className="pj-info">
                <div className="pj-title">Content, SEO, and AI Optimization</div>
                <div className="pj-week">Weeks 8–11</div>
              </div>
            </div>
            <p className="pj-sum">Schema markup, meta optimization, AI crawler access, and content structured for Google + AI search engines.</p>
            <div className="pj-tags">
              <span className="pj-tag">JSON-LD Schema</span>
              <span className="pj-tag">AI Visibility</span>
              <span className="pj-tag">Meta SEO</span>
            </div>
            <div className="pj-detail">
              <div className="pj-detail-inner">We optimize every product page, collection page, and content page for search engines and AI discovery platforms. This includes meta titles and descriptions for every URL, <span className="pj-hl">JSON-LD schema markup</span> covering Product, Collection, Organization, FAQPage, BreadcrumbList, and HowTo types, internal linking between product pages and collections and blog content, image optimization with descriptive alt text, and structured content that AI chatbots like <span className="pj-hl">ChatGPT, Gemini, Perplexity, and Claude</span> can parse, extract, and cite. We also ensure AI crawlers including GPTBot, ClaudeBot, PerplexityBot, and Google-Extended are <span className="pj-hl">allowed in robots.txt</span>.</div>
            </div>
            <div className="pj-toggle"><button className="pj-toggle-btn" onClick={(e) => { const step = e.currentTarget.closest(".pj-step"); if(step) step.classList.toggle("open"); }}><span className="pj-tg-show">Details</span><span className="pj-tg-hide">Less</span> <span className="pj-tg-chev">▼</span></button></div>
          </div>
        </div>

        
        <div className="pj-step" data-step="5">
          <div className="pj-card">
            <div className="pj-head">
              <div className="pj-num pj-num--idle">5</div>
              <div className="pj-icon" style={{background:"linear-gradient(135deg,#0891B2,#67E8F9)"}}>
                <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <div className="pj-info">
                <div className="pj-title">Testing and Quality Assurance</div>
                <div className="pj-week">Weeks 10–12</div>
              </div>
            </div>
            <p className="pj-sum">Cross-browser, cross-device testing with Lighthouse 90+ targets, security hardening, and schema validation.</p>
            <div className="pj-tags">
              <span className="pj-tag">Lighthouse 90+</span>
              <span className="pj-tag">Security</span>
              <span className="pj-tag">Accessibility</span>
            </div>
            <div className="pj-detail">
              <div className="pj-detail-inner">We test across all major browsers including Chrome, Safari, Firefox, and Edge on iOS, Android, macOS, and Windows devices. Performance testing targets <span className="pj-hl">Lighthouse scores of 90 or higher</span> with LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1. We verify all payment flows, conduct security hardening, test form submissions, validate schema markup with <span className="pj-hl">Google's Rich Results Test</span>, and audit mobile responsiveness.</div>
            </div>
            <div className="pj-toggle"><button className="pj-toggle-btn" onClick={(e) => { const step = e.currentTarget.closest(".pj-step"); if(step) step.classList.toggle("open"); }}><span className="pj-tg-show">Details</span><span className="pj-tg-hide">Less</span> <span className="pj-tg-chev">▼</span></button></div>
          </div>
        </div>

        
        <div className="pj-step" data-step="6">
          <div className="pj-card">
            <div className="pj-head">
              <div className="pj-num pj-num--idle">6</div>
              <div className="pj-icon" style={{background:"linear-gradient(135deg,#E11D48,#FDA4AF)"}}>
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div className="pj-info">
                <div className="pj-title">Launch and Ongoing Growth</div>
                <div className="pj-week">Week 12+</div>
              </div>
            </div>
            <p className="pj-sum">Zero-downtime launch with GA4 tracking, conversion monitoring, and optional annual maintenance contracts.</p>
            <div className="pj-tags">
              <span className="pj-tag">Zero Downtime</span>
              <span className="pj-tag">GA4 Setup</span>
              <span className="pj-tag">AMC Available</span>
            </div>
            <div className="pj-detail">
              <div className="pj-detail-inner">We launch your store with <span className="pj-hl">zero downtime</span>, configure analytics tracking with <span className="pj-hl">Google Analytics 4 and server-side tagging</span>, set up conversion tracking, and monitor post-launch performance. For ongoing support, FactoryJet offers <span className="pj-hl">Annual Maintenance Contracts</span> covering performance monitoring, security updates, content updates, CRO experiments, and <span className="pj-hl">24/7 priority support</span>.</div>
            </div>
            <div className="pj-toggle"><button className="pj-toggle-btn" onClick={(e) => { const step = e.currentTarget.closest(".pj-step"); if(step) step.classList.toggle("open"); }}><span className="pj-tg-show">Details</span><span className="pj-tg-hide">Less</span> <span className="pj-tg-chev">▼</span></button></div>
          </div>
        </div>

      </div>

      
      <div className="pj-weeks-bar" id="pjWeekBar">
        <span className="pj-wk-label">Wk 1–2</span>
        <span className="pj-wk-label">Wk 2–4</span>
        <span className="pj-wk-label">Wk 4–10</span>
        <span className="pj-wk-label">Wk 8–11</span>
        <span className="pj-wk-label">Wk 10–12</span>
        <span className="pj-wk-label">Wk 12+</span>
      </div>
    </div>

    <div className="sec-cta reveal" style={{marginTop:"48px",textAlign:"center"}}>
      <a href="#" className="btn btn-p" onClick={handleCta}>Ready to start building? Get Your Free Shopify Consultation <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--d" id="technology">
  <div className="sec-glow" style={{width:"400px",height:"400px",background:"rgba(0,82,204,.1)",top:"-100px",right:"-100px",filter:"blur(120px)"}}></div>
  <div className="ctr" style={{position:"relative",zIndex:"2"}}>
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow eyebrow--dark">Technology</span>
      <h2 style={{color:"#fff"}}>Advanced Shopify Technology We Work With</h2>
      <p className="sub sub--center" style={{color:"rgba(255,255,255,.5)"}}>FactoryJet stays at the forefront of Shopify's technology ecosystem. Here are the advanced capabilities we implement for our clients.</p>
    </div>

    <div className="lm-grid">

      
      <div className="lm lm--glass lm-7 reveal">
        <div className="lm-glow" style={{background:"rgba(0,82,204,.1)",top:"-20px",left:"-20px"}}></div>
        <div className="lm-visual">
          <div className="lm-diagram">
            <svg viewBox="0 0 280 90" fill="none">
              
              <rect className="node" x="105" y="25" width="70" height="40" fill="rgba(0,82,204,.2)" stroke="rgba(0,82,204,.5)" strokeWidth="1.5"/>
              <text x="140" y="49" textAnchor="middle" fill="rgba(255,255,255,.8)" fontSize="9" fontWeight="700">YOUR STORE</text>
              
              <rect className="node" x="0" y="5" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
              <text x="28" y="23" textAnchor="middle" fontSize="7">🇺🇸 USD</text>
              <rect className="node" x="0" y="57" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
              <text x="28" y="75" textAnchor="middle" fontSize="7">🇬🇧 GBP</text>
              <rect className="node" x="224" y="5" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
              <text x="252" y="23" textAnchor="middle" fontSize="7">🇦🇪 AED</text>
              <rect className="node" x="224" y="57" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
              <text x="252" y="75" textAnchor="middle" fontSize="7">🇮🇳 INR</text>
              
              <line className="line line--active" x1="56" y1="19" x2="105" y2="38"/>
              <line className="line line--active" x1="56" y1="71" x2="105" y2="52"/>
              <line className="line line--active" x1="175" y1="38" x2="224" y2="19"/>
              <line className="line line--active" x1="175" y1="52" x2="224" y2="71"/>
              
              <circle className="dot" cx="80" cy="28" r="2.5"/><circle className="dot" cx="80" cy="62" r="2.5"/>
              <circle className="dot" cx="200" cy="28" r="2.5"/><circle className="dot" cx="200" cy="62" r="2.5"/>
            </svg>
          </div>
        </div>
        <div className="lm-body">
          <div className="lm-head-row">
            <h3>Shopify Markets for International Selling</h3>
            <span className="lm-tag lm-tag--blue">Multi-Currency</span>
          </div>
          <p className="lm-sum">Sell across 50+ markets and 136 currencies from a single store — with localized checkout, auto tax, and market-specific pricing.</p>
          <div className="lm-chips">
            <div className="lm-chip">
              <span className="lm-chip-val">97%</span><span className="lm-chip-label">boost</span>
              <div className="lm-tip">97% boost in cross-border transactions for SMBs</div>
            </div>
            <div className="lm-chip">
              <span className="lm-chip-val">92%</span><span className="lm-chip-label">prefer local</span>
              <div className="lm-tip">92% of customers prefer seeing prices in local currency</div>
            </div>
            <div className="lm-chip">
              <span className="lm-chip-val">−33%</span><span className="lm-chip-label">cart drop</span>
              <div className="lm-tip">Local payment options reduce cart abandonment by 33%</div>
            </div>
          </div>
          <div className="lm-expand">
            <div className="lm-expand-inner">Shopify Markets enables selling across <span className="lm-hl">50 international markets</span> and <span className="lm-hl">136 currencies</span> from a single store. We configure multi-currency pricing, localized checkout experiences, automatic tax and duty calculation, and market-specific product availability. Shopify Markets has driven a <span className="lm-hl">97 percent boost in cross-border transactions</span> for SMBs. Research shows <span className="lm-hl">92 percent of customers</span> prefer seeing prices in their local currency, and local payment options reduce cart abandonment by <span className="lm-hl">33 percent</span>.</div>
          </div>
          <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
        </div>
      </div>

      
      <div className="lm lm--glass lm-5 reveal reveal-d1">
        <div className="lm-glow" style={{background:"rgba(255,107,53,.08)",top:"-20px",right:"-20px"}}></div>
        <div className="lm-visual">
          <div className="lm-diagram">
            <svg viewBox="0 0 200 90" fill="none">
              
              <rect className="node" x="0" y="30" width="48" height="30" fill="rgba(255,107,53,.15)" stroke="rgba(255,107,53,.4)" strokeWidth="1.5"/>
              <text x="24" y="48" textAnchor="middle" fontSize="7" fill="#FFB799">CART</text>
              <rect className="node" x="76" y="30" width="48" height="30" fill="rgba(255,107,53,.2)" stroke="rgba(255,107,53,.5)" strokeWidth="1.5"/>
              <text x="100" y="48" textAnchor="middle" fontSize="7" fill="#FFB799">CHECKOUT</text>
              <rect className="node" x="152" y="30" width="48" height="30" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.4)" strokeWidth="1.5"/>
              <text x="176" y="48" textAnchor="middle" fontSize="7" fill="#6EE7B7">CONFIRM</text>
              
              <line className="line line--active" x1="48" y1="45" x2="76" y2="45" style={{stroke:"rgba(255,107,53,.5)"}}/>
              <line className="line line--active" x1="124" y1="45" x2="152" y2="45" style={{stroke:"rgba(16,185,129,.5)"}}/>
              
              <rect x="80" y="5" width="40" height="16" rx="4" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
              <text x="100" y="16" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.5)">UPSELL</text>
              <line x1="100" y1="21" x2="100" y2="30" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="2 2"/>
              <rect x="80" y="69" width="40" height="16" rx="4" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
              <text x="100" y="80" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.5)">CUSTOM</text>
              <line x1="100" y1="60" x2="100" y2="69" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="2 2"/>
            </svg>
          </div>
        </div>
        <div className="lm-body">
          <div className="lm-head-row">
            <h3>Shopify Checkout Extensibility</h3>
            <span className="lm-tag lm-tag--orange">Plus Only</span>
          </div>
          <p className="lm-sum">Custom checkout fields, conditional logic, branded UI, post-purchase upsells — replacing deprecated checkout.liquid.</p>
          <div className="lm-chips">
            <div className="lm-chip">
              <span className="lm-chip-val">+15%</span><span className="lm-chip-label">conversion</span>
              <div className="lm-tip">Shopify's checkout converts 15% better than competitors</div>
            </div>
            <div className="lm-chip">
              <span className="lm-chip-val">Secure</span><span className="lm-chip-label">extensions</span>
              <div className="lm-tip">Extension-based model replaces deprecated checkout.liquid</div>
            </div>
          </div>
          <div className="lm-expand">
            <div className="lm-expand-inner">Shopify's checkout converts <span className="lm-hl">15 percent better</span> than competing platforms. With Checkout Extensibility on Shopify Plus, we implement custom checkout fields, conditional display logic, post-purchase upsell offers, branded checkout UI elements, loyalty point redemption, and third-party app integration at checkout. This replaces the deprecated checkout.liquid with a more secure and performant extension-based model.</div>
          </div>
          <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
        </div>
      </div>

      
      <div className="lm lm--glass lm-5 reveal">
        <div className="lm-glow" style={{background:"rgba(16,185,129,.08)",top:"-20px",left:"-20px"}}></div>
        <div className="lm-visual">
          <div className="lm-diagram">
            <svg viewBox="0 0 200 80" fill="none">
              
              <circle cx="100" cy="40" r="22" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.4)" strokeWidth="1.5"/>
              <text x="100" y="37" textAnchor="middle" fontSize="12" fill="#6EE7B7">✦</text>
              <text x="100" y="48" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.6)">MAGIC</text>
              
              <circle cx="32" cy="18" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
              <text x="32" y="21" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Desc.</text>
              <circle cx="168" cy="18" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
              <text x="168" y="21" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Images</text>
              <circle cx="32" cy="62" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
              <text x="32" y="65" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Translate</text>
              <circle cx="168" cy="62" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
              <text x="168" y="65" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Sidekick</text>
              
              <line x1="46" y1="22" x2="78" y2="34" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
              <line x1="154" y1="22" x2="122" y2="34" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
              <line x1="46" y1="58" x2="78" y2="46" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
              <line x1="154" y1="58" x2="122" y2="46" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div className="lm-body">
          <div className="lm-head-row">
            <h3>Shopify Magic and AI-Powered Commerce</h3>
            <span className="lm-tag lm-tag--green">AI Built-In</span>
          </div>
          <p className="lm-sum">AI product descriptions, background removal, Sidekick admin assistant, Store Builder, and auto-translations — on all plans.</p>
          <div className="lm-chips">
            <div className="lm-chip">
              <span className="lm-chip-val">All Plans</span><span className="lm-chip-label">included</span>
              <div className="lm-tip">Shopify Magic is available on every Shopify plan</div>
            </div>
            <div className="lm-chip">
              <span className="lm-chip-val">5 Tools</span><span className="lm-chip-label">in suite</span>
              <div className="lm-tip">Descriptions · Images · Sidekick · Builder · Translate</div>
            </div>
          </div>
          <div className="lm-expand">
            <div className="lm-expand-inner">Shopify Magic is Shopify's built-in AI suite available on all plans. It includes <span className="lm-hl">AI-generated product descriptions</span>, image editing with background removal and replacement, <span className="lm-hl">Sidekick AI admin assistant</span> for store management, AI Store Builder that creates storefronts from text prompts, and auto-translations for international selling. FactoryJet integrates these AI capabilities into our store builds and trains clients on using them effectively.</div>
          </div>
          <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
        </div>
      </div>

      
      <div className="lm lm--glass lm-7 reveal reveal-d1">
        <div className="lm-glow" style={{background:"rgba(0,82,204,.08)",bottom:"-20px",right:"-20px"}}></div>
        <div className="lm-visual">
          <div className="lm-diagram">
            <svg viewBox="0 0 280 80" fill="none">
              
              <rect className="node" x="0" y="22" width="60" height="36" fill="rgba(0,82,204,.15)" stroke="rgba(0,82,204,.4)" strokeWidth="1.5"/>
              <text x="30" y="37" textAnchor="middle" fontSize="6.5" fill="var(--blue-200)">ONLINE</text>
              <text x="30" y="48" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.35)">STORE</text>
              
              <circle cx="140" cy="40" r="18" fill="rgba(0,82,204,.1)" stroke="rgba(0,82,204,.3)" strokeWidth="1.5"/>
              <text x="140" y="38" textAnchor="middle" fontSize="8" fill="var(--blue-200)">⟳</text>
              <text x="140" y="48" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.4)">SYNC</text>
              
              <rect className="node" x="220" y="22" width="60" height="36" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.35)" strokeWidth="1.5"/>
              <text x="250" y="37" textAnchor="middle" fontSize="6.5" fill="#6EE7B7">IN-STORE</text>
              <text x="250" y="48" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.35)">POS</text>
              
              <line className="line line--active" x1="60" y1="40" x2="122" y2="40"/>
              <line className="line line--active" x1="158" y1="40" x2="220" y2="40"/>
              
              <text x="70" y="74" fontSize="5" fill="rgba(255,255,255,.3)">Inventory · Customers · Loyalty</text>
            </svg>
          </div>
        </div>
        <div className="lm-body">
          <div className="lm-head-row">
            <h3>Shopify POS for Omnichannel Retail</h3>
            <span className="lm-tag lm-tag--blue">Omnichannel</span>
          </div>
          <p className="lm-sum">Unified online + in-store operations — inventory sync, customer profiles, BOPIS, and loyalty across all channels.</p>
          <div className="lm-chips">
            <div className="lm-chip">
              <span className="lm-chip-val">20</span><span className="lm-chip-label">locations</span>
              <div className="lm-tip">POS Pro included for up to 20 locations on Shopify Plus</div>
            </div>
            <div className="lm-chip">
              <span className="lm-chip-val">Unified</span><span className="lm-chip-label">inventory</span>
              <div className="lm-tip">Single inventory pool across online and all physical stores</div>
            </div>
          </div>
          <div className="lm-expand">
            <div className="lm-expand-inner">For brands with physical retail locations, FactoryJet configures Shopify POS to unify online and in-store operations. Shopify Plus includes <span className="lm-hl">POS Pro for up to 20 locations</span>, covering unified inventory, customer profiles, staff permissions, and hardware configuration. We build omnichannel experiences where customers can <span className="lm-hl">buy online and pick up in store</span>, return in-store purchases online, and access unified loyalty programs across all channels.</div>
          </div>
          <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="sec sec--w" id="migration">
  <div className="ctr">
    <div className="sec-head reveal">
      <span className="eyebrow">Migration</span>
      <h2>Migrate to Shopify from Any E-Commerce Platform</h2>
      <p className="sub">FactoryJet handles complete e-commerce migrations with zero downtime and full data integrity.</p>
    </div>
    <div className="mig-g">
      <div className="mig-c reveal">
        <h3>WooCommerce to Shopify Migration</h3>
        <p>WooCommerce to Shopify is the most requested migration path. Businesses migrate because Shopify eliminates hosting management, provides automatic security updates, reduces checkout abandonment by up to 27 percent, and offers significantly faster page loads. FactoryJet migrates all products, customers, orders, blog content, reviews, and discount codes. We implement 301 redirects for every URL to preserve search rankings.</p>
        <span className="mig-price">$5,000 – $50,000</span>
      </div>
      <div className="mig-c reveal reveal-d1">
        <h3>Magento to Shopify Plus Migration</h3>
        <p>Magento to Shopify Plus migrations target enterprise businesses seeking lower total cost of ownership, simpler operations, and faster performance. We migrate complex Magento product catalogs including configurable products, custom attributes, and multi-store configurations. We rebuild custom functionality using Shopify Plus features and apps, and integrate existing ERP and CRM connections.</p>
        <span className="mig-price">$15,000 – $75,000</span>
      </div>
      <div className="mig-c reveal reveal-d2">
        <h3>Salesforce Commerce Cloud to Shopify Plus Migration</h3>
        <p>A growing number of luxury and fashion brands are migrating from Salesforce Commerce Cloud to Shopify Plus for its lower total cost of ownership, faster development cycles, and superior app ecosystem. FactoryJet has experience migrating complex SFCC implementations including multi-site architectures, custom cartridge functionality, and order management system integrations.</p>
      </div>
      <div className="mig-c reveal reveal-d3">
        <h3>BigCommerce, Wix, and Other Platforms to Shopify Migration</h3>
        <p>We also migrate stores from BigCommerce, Wix, Squarespace, PrestaShop, OpenCart, and custom legacy platforms. Every migration follows our structured process covering data audit, migration plan, test migration, go-live migration, and post-migration verification.</p>
      </div>
    </div>
    <div className="sec-cta reveal">
      <a href="#" className="btn btn-p" onClick={handleCta}>Planning a migration? Get a Free Migration Assessment <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--f" id="global">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Global Reach</span>
      <h2>Shopify Development for Businesses Worldwide</h2>
      <p className="sub sub--center">FactoryJet serves clients across nine countries, combining deep Shopify expertise with local market knowledge and competitive pricing.</p>
    </div>
    <div className="glo-g">
      <div className="glo-c reveal"><h3><span className="glo-flag">🇺🇸</span> Shopify Development for US Businesses</h3><p>The United States is the largest e-commerce market globally at approximately $1.2 trillion, with Shopify holding 30 percent platform market share. Over 55 percent of all Shopify Plus merchants are US-based. FactoryJet serves US businesses from startups to enterprise brands, offering Shopify Plus development, headless commerce builds, and full-service store optimization at 40 to 60 percent below comparable US agency rates.</p></div>
      <div className="glo-c reveal reveal-d1"><h3><span className="glo-flag">🇬🇧</span> Shopify Development for UK Businesses</h3><p>The United Kingdom is Europe's largest e-commerce market and third largest globally. Shopify holds 23 percent of the UK platform market with over 193,000 stores and approximately 3,200 Shopify Plus merchants. FactoryJet delivers to UK brands with expertise in GDPR compliance, VAT configuration, and UK-specific payment gateway integration.</p></div>
      <div className="glo-c reveal reveal-d2"><h3><span className="glo-flag">🇮🇳</span> Shopify Development for Indian Businesses</h3><p>India is the fastest-growing Shopify market globally, with 97 percent year-over-year growth in store adoption. Over 90,000 live Shopify stores now operate in India as the country's D2C market crosses $100 billion. FactoryJet builds Shopify stores for Indian brands with integration of Razorpay, PayU, and Cashfree payment gateways, Shiprocket and Delhivery logistics, and GST-compliant invoicing.</p></div>
      <div className="glo-c reveal reveal-d3"><h3><span className="glo-flag">🇦🇪</span> Shopify Development for UAE and Middle East Businesses</h3><p>The UAE e-commerce market reached $8.8 billion in 2024 and is projected to grow to $13.8 billion by 2029. FactoryJet builds Shopify stores for UAE and Saudi businesses with Arabic language support, Telr and PayTabs payment integration, and Middle East shipping provider configuration.</p></div>
      <div className="glo-c glo-wide reveal reveal-d4"><h3><span className="glo-flag">🌍</span> Additional Markets</h3><p>FactoryJet also serves businesses in Canada (Shopify's home country with 133,000+ stores), Australia (120,000+ stores and a mobile-first market), Singapore (the gateway to Southeast Asia's $8.9 billion e-commerce market), and Europe (France, Germany, Netherlands, and other EU markets) with GDPR compliance and multi-language capabilities.</p></div>
    </div>
    <div className="sec-cta reveal">
      <a href="#" className="btn btn-p" onClick={handleCta}>Where are your customers? Let's Build Your Global Shopify Store <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--w" id="pricing">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Pricing</span>
      <h2>How Much Does Shopify Development Cost?</h2>
      <p className="sub sub--center">Transparent pricing is a core FactoryJet value. Here are indicative ranges for our Shopify development services.</p>
    </div>

    
    <div className="pr-toggle-wrap reveal">
      <div className="pr-toggle" id="prToggle">
        <div className="pr-toggle-pill" id="prPill"></div>
        <button className={`pr-toggle-btn ${pricingTab === "build" ? "active" : ""}`} data-tab="build" onClick={() => setPricingTab("build")}>One-Time Build</button>
        <button className={`pr-toggle-btn ${pricingTab === "ongoing" ? "active" : ""}`} data-tab="ongoing" onClick={() => setPricingTab("ongoing")}>Build + Ongoing Support</button>
      </div>
    </div>

    
    <div className="pr-cards reveal">

      
      <div className="pr-card pr-card--light">
        <div className="pr-tier pr-tier--blue">Launch</div>
        <div className="pr-name">Shopify Theme-Based Store</div>
        <div className="pr-desc">Startups and small businesses launching their first Shopify store</div>
        <div className="pr-services">
          <span className="pr-svc-tag pr-svc-tag--blue">Custom Theme</span>
          <span className="pr-svc-tag pr-svc-tag--blue">Mobile-First</span>
          <span className="pr-svc-tag pr-svc-tag--gray">Schema Markup</span>
        </div>
        <div className="pr-price-from">Starting from</div>
        <div className="pr-price-row">
          <span className="pr-price">$5,000</span>
          <span className="pr-price-unit">– $15,000</span>
        </div>
        <div className="pr-timeline">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          4–8 weeks
        </div>
        
        <div className="pr-ongoing-price" style={{display:"none"}}>
          <div className="pr-savings"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> Add ongoing support</div>
          <div className="pr-price-from">Monthly AMC from</div>
          <div className="pr-price-row"><span className="pr-price" style={{fontSize:"1.5rem"}}>$500</span><span className="pr-price-unit">/month</span></div>
        </div>
        <a href="#" className="pr-cta pr-cta--secondary" onClick={handleCta}>Get a Quote</a>
        <div className="pr-divider"></div>
        <div className="pr-features">
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Custom Liquid theme development</div>
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Conversion-optimized product pages</div>
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Mobile-first responsive design</div>
        </div>
        <div className="pr-more">
          <div className="pr-more-inner">
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Sub-2.5s performance tuning</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Comprehensive schema markup</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Payment gateway integration</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>SEO and AI visibility optimization</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>30-day post-launch support</div>
            <div className="pr-feat"><svg className="pr-x" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Checkout Extensibility</div>
            <div className="pr-feat"><svg className="pr-x" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>B2B / Wholesale features</div>
            <div className="pr-feat"><svg className="pr-x" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Headless / Hydrogen</div>
          </div>
        </div>
        <button className="pr-more-btn" onClick={(e) => { const card = e.currentTarget.closest(".pr-card"); if(card) card.classList.toggle("expanded"); }}><span className="mb-show">Show all features</span><span className="mb-hide">Show less</span> <span className="pr-chev">▼</span></button>
      </div>

      
      <div className="pr-card pr-card--featured">
        <div className="pr-glow"></div>
        <span className="pr-popular">Most Popular</span>
        <div className="pr-tier pr-tier--orange">Growth</div>
        <div className="pr-name">Custom Shopify Store</div>
        <div className="pr-desc">Growing brands needing bespoke design, custom functionality, and third-party integrations</div>
        <div className="pr-services">
          <span className="pr-svc-tag pr-svc-tag--blue">Bespoke Design</span>
          <span className="pr-svc-tag pr-svc-tag--blue">App Integrations</span>
          <span className="pr-svc-tag pr-svc-tag--blue">CRO</span>
        </div>
        <div className="pr-savings"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> 40–60% below US/UK rates</div>
        <div className="pr-price-from">Starting from</div>
        <div className="pr-price-row">
          <span className="pr-price">$15,000</span>
          <span className="pr-price-unit">– $40,000</span>
        </div>
        <div className="pr-timeline">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          8–14 weeks
        </div>
        
        <div className="pr-ongoing-price" style={{display:"none"}}>
          <div className="pr-price-from">Monthly AMC from</div>
          <div className="pr-price-row"><span className="pr-price" style={{fontSize:"1.5rem"}}>$1,000</span><span className="pr-price-unit">/month</span></div>
        </div>
        <a href="#" className="pr-cta pr-cta--primary" onClick={handleCta}>Get a Custom Proposal</a>
        <div className="pr-divider"></div>
        <div className="pr-features">
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Everything in Launch, plus:</div>
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Fully bespoke custom design</div>
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Custom Shopify app development</div>
        </div>
        <div className="pr-more">
          <div className="pr-more-inner">
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>ERP, CRM, PIM integrations</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Platform migration (WooCommerce, Magento, etc.)</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Conversion rate optimization program</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Advanced collection filtering</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>GA4 + server-side tagging</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>AI search engine optimization</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>30-day post-launch support</div>
            <div className="pr-feat"><svg className="pr-x" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Headless / Hydrogen architecture</div>
          </div>
        </div>
        <button className="pr-more-btn" onClick={(e) => { const card = e.currentTarget.closest(".pr-card"); if(card) card.classList.toggle("expanded"); }}><span className="mb-show">Show all features</span><span className="mb-hide">Show less</span> <span className="pr-chev">▼</span></button>
      </div>

      
      <div className="pr-card pr-card--light">
        <div className="pr-tier pr-tier--green">Enterprise</div>
        <div className="pr-name">Shopify Plus &amp; Headless</div>
        <div className="pr-desc">High-revenue brands requiring checkout customization, B2B, multi-store, and headless Hydrogen architecture</div>
        <div className="pr-services">
          <span className="pr-svc-tag pr-svc-tag--blue">Shopify Plus</span>
          <span className="pr-svc-tag pr-svc-tag--blue">Hydrogen</span>
          <span className="pr-svc-tag pr-svc-tag--blue">B2B</span>
          <span className="pr-svc-tag pr-svc-tag--blue">Multi-Store</span>
        </div>
        <div className="pr-price-from">Starting from</div>
        <div className="pr-price-row">
          <span className="pr-price">$25,000</span>
          <span className="pr-price-unit">– $150,000+</span>
        </div>
        <div className="pr-timeline">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          12–20 weeks
        </div>
        
        <div className="pr-ongoing-price" style={{display:"none"}}>
          <div className="pr-savings"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> Dedicated account team</div>
          <div className="pr-price-from">Monthly AMC from</div>
          <div className="pr-price-row"><span className="pr-price" style={{fontSize:"1.5rem"}}>$1,500</span><span className="pr-price-unit">– $3,000/month</span></div>
        </div>
        <a href="#" className="pr-cta pr-cta--secondary" onClick={handleCta}>Talk to an Expert</a>
        <div className="pr-divider"></div>
        <div className="pr-features">
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Everything in Growth, plus:</div>
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Full Checkout Extensibility</div>
          <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Hydrogen headless storefronts</div>
        </div>
        <div className="pr-more">
          <div className="pr-more-inner">
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>B2B with company profiles &amp; price lists</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Up to 10 expansion stores</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Shopify Flow automation</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Multi-currency via Shopify Markets</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>SAP / Oracle ERP integration</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Near-perfect Lighthouse scores</div>
            <div className="pr-feat"><svg className="pr-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Priority 24/7 support</div>
          </div>
        </div>
        <button className="pr-more-btn" onClick={(e) => { const card = e.currentTarget.closest(".pr-card"); if(card) card.classList.toggle("expanded"); }}><span className="mb-show">Show all features</span><span className="mb-hide">Show less</span> <span className="pr-chev">▼</span></button>
      </div>
    </div>

    
    <div className="pr-fulltable-toggle reveal">
      <button className="pr-fulltable-btn" onClick={() => setFullTableOpen(p => !p)}>View complete pricing breakdown <span className="pr-chev" id="ftChev" style={{transform: fullTableOpen ? "rotate(180deg)" : "none"}}>▼</span></button>
    </div>
    <div className={`pr-fulltable ${fullTableOpen ? "open" : ""}`} id="prFullTable">
      <div className="pr-fulltable-inner">
        <div style={{overflowX:"auto",borderRadius:"var(--r-xl)",border:"1px solid var(--light)"}}>
          <table style={{width:"100%",minWidth:"700px",borderCollapse:"collapse",background:"var(--white)",fontSize:".8125rem"}}>
            <thead><tr style={{background:"var(--dark-bg)"}}>
              <th style={{padding:"14px 16px",textAlign:"left",color:"rgba(255,255,255,.7)",fontWeight:"600",fontSize:".6875rem",letterSpacing:".06em",textTransform:"uppercase"}}>Service</th>
              <th style={{padding:"14px 16px",textAlign:"left",color:"rgba(255,255,255,.7)",fontWeight:"600",fontSize:".6875rem",letterSpacing:".06em",textTransform:"uppercase"}}>Price Range (USD)</th>
              <th style={{padding:"14px 16px",textAlign:"left",color:"rgba(255,255,255,.7)",fontWeight:"600",fontSize:".6875rem",letterSpacing:".06em",textTransform:"uppercase"}}>Timeline</th>
              <th style={{padding:"14px 16px",textAlign:"left",color:"rgba(255,255,255,.7)",fontWeight:"600",fontSize:".6875rem",letterSpacing:".06em",textTransform:"uppercase"}}>Best For</th>
            </tr></thead>
            <tbody>
              <tr style={{borderBottom:"1px solid var(--light)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Shopify Theme-Based Store</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$5,000 – $15,000</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>4–8 weeks</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Startups and small businesses launching their first Shopify store</td></tr>
              <tr style={{borderBottom:"1px solid var(--light)",background:"var(--off-white)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Custom Shopify Store</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$15,000 – $40,000</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>8–14 weeks</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Growing brands needing bespoke design and custom functionality</td></tr>
              <tr style={{borderBottom:"1px solid var(--light)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Shopify Plus Enterprise Store</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$25,000 – $150,000+</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>12–20 weeks</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>High-revenue brands requiring checkout customization, B2B, and multi-store</td></tr>
              <tr style={{borderBottom:"1px solid var(--light)",background:"var(--off-white)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Headless Shopify (Hydrogen)</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$30,000 – $120,000+</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>12–20 weeks</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Brands needing ultra-fast performance and complete design freedom</td></tr>
              <tr style={{borderBottom:"1px solid var(--light)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Shopify Migration</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$5,000 – $75,000</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>4–12 weeks</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Businesses moving from WooCommerce, Magento, SFCC, or other platforms</td></tr>
              <tr style={{borderBottom:"1px solid var(--light)",background:"var(--off-white)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Shopify App Development</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$8,000 – $50,000+</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>6–16 weeks</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Custom functionality not available in the Shopify App Store</td></tr>
              <tr><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Ongoing Support (AMC)</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$500 – $3,000/month</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Ongoing</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Maintenance, updates, optimization, and 24/7 support</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <p className="pr-note reveal">FactoryJet's India-based team delivers enterprise-grade quality at 40 to 60 percent below comparable US, UK, and Australian agency rates. All pricing includes project management, QA testing, deployment, and a 30-day post-launch support period.</p>
    <div className="sec-cta reveal" style={{marginTop:"28px",textAlign:"center"}}>
      <a href="#" className="btn btn-p" onClick={handleCta}>Get a precise quote for your project — Request Your Custom Proposal <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--f" id="why-factoryjet">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Why FactoryJet</span>
      <h2>What Makes FactoryJet Different From Other Shopify Agencies</h2>
    </div>
    <div className="diff-g">
      <div className="diff reveal"><h3>AI-Optimized E-Commerce Architecture</h3><p>Every Shopify store we build is optimized for visibility across Google, AI Overviews, ChatGPT, Perplexity, Gemini, and Claude. We implement comprehensive JSON-LD schema, answer-first content structures, and entity-rich product descriptions that generative search engines can parse, cite, and recommend. This is not an add-on service. It is built into our development process from day one.</p></div>
      <div className="diff reveal reveal-d1"><h3>Enterprise Quality at Startup-Friendly Prices</h3><p>FactoryJet's India-based development team delivers the same caliber of Shopify Plus builds, headless commerce architectures, and integration work that agencies in New York, London, and Sydney charge two to three times more for. Our pricing makes enterprise-grade e-commerce accessible to growing brands that cannot justify $100,000 or more for a store build.</p></div>
      <div className="diff reveal reveal-d2"><h3>Full-Stack Shopify Expertise</h3><p>We handle every layer of your Shopify store: Liquid theme development, Hydrogen headless builds, Checkout Extensibility configuration, Shopify Flow automation, API integrations with ERP and CRM systems, and ongoing conversion rate optimization. You do not need separate agencies for design, development, integration, and marketing. FactoryJet is a single partner for the entire scope.</p></div>
      <div className="diff reveal reveal-d3"><h3>Structured Development Process</h3><p>Our six-phase process with weekly milestones, defined deliverables, and transparent timelines eliminates the guesswork and delays that plague agency-client relationships. You know exactly what is being built, when it will be delivered, and how much it will cost before the project begins.</p></div>
      <div className="diff diff-wide reveal reveal-d4"><h3>Global Delivery, Local Expertise</h3><p>We have built Shopify stores for businesses across nine countries and understand the regional nuances of payment gateways, tax compliance, shipping logistics, and consumer behavior in each market.</p></div>
    </div>
    <div className="sec-cta reveal">
      <a href="#" className="btn btn-p" onClick={handleCta}>Experience the FactoryJet difference — Book Your Free Consultation Today <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec cs-section" id="case-studies" aria-label="Case Studies">
  <div className="ctr" style={{position:"relative",zIndex:"2"}}>
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow eyebrow--dark">Results That Speak</span>
      <h2 style={{color:"#fff"}}>Real Shopify Stores, Real Growth</h2>
      <p className="sub sub--center" style={{color:"rgba(255,255,255,.45)"}}>Every metric is from a live FactoryJet Shopify build. Hover to explore the full story.</p>
    </div>
  </div>

  <div className="cs-fade reveal">
    <div className="cs-scroll" id="csScroll" ref={csScrollRef}>

      
      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#0F172A,#334155)"}}>NV</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">NovéThread</div>
            <div className="cs-brand-type">DTC Fashion &amp; Apparel — United States</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(0,82,204,.15)",color:"var(--blue-200)"}}>Hydrogen Build</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">1.8%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">4.7%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="161" data-suffix="%">0%</div><div className="cs-met-label">Conv. Increase</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="0.9" data-suffix="s" data-decimals="1">0s</div><div className="cs-met-label">LCP Load Time</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="98" data-suffix="">0</div><div className="cs-met-label">Lighthouse Score</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,35 20,32 40,30 60,28 80,25 100,20 120,22 140,15 160,10 180,8 200,3" fill="none" stroke="url(#sparkBlue)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0052CC" stopOpacity=".3"/><stop offset="100%" stopColor="#3387FF"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Sluggish WooCommerce store with 4.2s load times and a 1.8% conversion rate — losing $40K/month in abandoned carts.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">Complete rebuild on Shopify Hydrogen with Oxygen hosting, custom checkout, and schema-rich product pages for AI visibility.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">161% conversion lift, sub-1s loads, 98 Lighthouse score — $1.2M additional revenue in Year 1.</span></div>
        </div>
      </div>

      
      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#059669,#34D399)"}}>BG</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">BotanicGlow</div>
            <div className="cs-brand-type">Health &amp; Beauty — United Kingdom</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(16,185,129,.15)",color:"#6EE7B7"}}>Shopify Plus</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">$22K</div>
            <div className="cs-ba-sub">Monthly Rev.</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">$62K</div>
            <div className="cs-ba-sub">Monthly Rev.</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="182" data-suffix="%">0%</div><div className="cs-met-label">Sales Growth</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="47" data-suffix="%">0%</div><div className="cs-met-label">Repeat Rate</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="3.4" data-suffix="x" data-decimals="1">0x</div><div className="cs-met-label">ROAS</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,38 20,36 40,34 60,30 80,28 100,22 120,18 140,14 160,10 180,6 200,2" fill="none" stroke="url(#sparkGreen)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkGreen" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#059669" stopOpacity=".3"/><stop offset="100%" stopColor="#34D399"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Squarespace site with no subscription engine, no schema, and zero AI search visibility — stagnant at $22K/month.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">Migrated to Shopify Plus with Recharge subscriptions, loyalty integration, ingredient transparency pages, and full AEO optimization.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">180%+ sales growth within Year 1, 47% subscriber repeat rate, featured in 3 AI search engines within 90 days.</span></div>
        </div>
      </div>

      
      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#7C3AED,#A78BFA)"}}>AF</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">AlphaForge Industrial</div>
            <div className="cs-brand-type">B2B Wholesale — United Arab Emirates</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(124,58,237,.15)",color:"#C4B5FD"}}>WooCommerce → Plus</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">Manual</div>
            <div className="cs-ba-sub">Order Process</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">Automated</div>
            <div className="cs-ba-sub">ERP-Synced</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="27" data-suffix="%">0%</div><div className="cs-met-label">Less Cart Drop</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="340" data-suffix="">0</div><div className="cs-met-label">B2B Accounts</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="0" data-suffix="" data-text="Zero">—</div><div className="cs-met-label">Downtime</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,30 20,28 40,32 60,26 80,22 100,20 120,16 140,12 160,9 180,5 200,3" fill="none" stroke="url(#sparkPurple)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkPurple" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7C3AED" stopOpacity=".3"/><stop offset="100%" stopColor="#A78BFA"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Outdated WooCommerce store with manual B2B orders, no price lists, and constant hosting crashes during peak traffic.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">Zero-downtime migration to Shopify Plus with B2B company profiles, custom price lists, net terms, SAP ERP integration, and Arabic language support.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">27% checkout abandonment reduction, 340 B2B accounts onboarded, zero downtime during migration — full ROI in 4 months.</span></div>
        </div>
      </div>

      
      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#FF6B35,#FFB799)"}}>VK</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">VeloKit Sports</div>
            <div className="cs-brand-type">Sports &amp; Outdoor — India</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(255,107,53,.15)",color:"#FFB799"}}>CRO Program</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">2.1%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">5.3%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="152" data-suffix="%">0%</div><div className="cs-met-label">Conv. Lift</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="1.8" data-suffix="s" data-decimals="1">0s</div><div className="cs-met-label">LCP After</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="41" data-suffix="%">0%</div><div className="cs-met-label">Cart Recovery</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,36 20,34 40,32 60,30 80,28 100,24 120,18 140,12 160,8 180,5 200,2" fill="none" stroke="url(#sparkOrange)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkOrange" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FF6B35" stopOpacity=".3"/><stop offset="100%" stopColor="#FFB799"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Existing Shopify store with slow mobile performance, no cart recovery, and a 2.1% conversion rate — well below industry average.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">90-day CRO program: checkout flow optimization, A/B tested product pages, cart abandonment sequences, speed tuning to sub-2s LCP, and mobile UX overhaul.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">152% conversion rate lift within 90 days, 41% cart recovery rate, $380K additional annual revenue — zero platform migration needed.</span></div>
        </div>
      </div>

    </div>
  </div>

  
  <div className="ctr" style={{position:"relative",zIndex:"2"}}>
    <div className="cs-arrows reveal">
      <button className="cs-arrow" onClick={() => scrollCS(-1)} aria-label="Previous case study">←</button>
      <button className="cs-arrow" onClick={() => scrollCS(1)} aria-label="Next case study">→</button>
    </div>
    <div className="cs-dots reveal" id="csDots">
      <div className="cs-dot active"></div>
      <div className="cs-dot"></div>
      <div className="cs-dot"></div>
      <div className="cs-dot"></div>
    </div>
    <div className="sec-cta reveal" style={{marginTop:"32px",textAlign:"center"}}>
      <a href="/case" className="btn btn-ghost">View Full Portfolio <span className="arr">→</span></a>
    </div>
  </div>
</section>


<section className="sec sec--f" id="faq">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">FAQ</span>
      <h2>Shopify E-Commerce Development — Frequently Asked Questions</h2>
    </div>

    
    <div className="fq-search-wrap reveal">
      <input type="text" className="fq-search" id="fqSearch" value={faqSearch} onChange={(e) => setFaqSearch(e.target.value)} placeholder="Search questions — try &quot;pricing&quot;, &quot;migration&quot;, &quot;Hydrogen&quot;..." autoComplete="off"/>
      <svg className="fq-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <button className={`fq-clear ${faqSearch.length > 0 ? "show" : ""}`} id="fqClear" onClick={clearFqSearch}>✕</button>
    </div>

    
    <div className="fq-count" id="fqCount"></div>

    
    <div className="fq-tabs reveal">
      <button className={`fq-tab ${faqFilter === "all" ? "active" : ""}`} data-cat="all" onClick={() => setFaqFilter("all")}>All Questions <span className="fq-tab-count">(10)</span></button>
      <button className={`fq-tab ${faqFilter === "pricing" ? "active" : ""}`} data-cat="pricing" onClick={() => setFaqFilter("pricing")}>Pricing &amp; Timeline <span className="fq-tab-count">(2)</span></button>
      <button className={`fq-tab ${faqFilter === "platform" ? "active" : ""}`} data-cat="platform" onClick={() => setFaqFilter("platform")}>Platform &amp; Tech <span className="fq-tab-count">(3)</span></button>
      <button className={`fq-tab ${faqFilter === "services" ? "active" : ""}`} data-cat="services" onClick={() => setFaqFilter("services")}>Services &amp; Support <span className="fq-tab-count">(3)</span></button>
      <button className={`fq-tab ${faqFilter === "about" ? "active" : ""}`} data-cat="about" onClick={() => setFaqFilter("about")}>About FactoryJet <span className="fq-tab-count">(2)</span></button>
    </div>

    
    <div className="fq-list" id="fqList">

      
      <div className="fq-item reveal" data-cat="pricing" data-q="how much does shopify e-commerce development cost" data-a="shopify e-commerce development costs range $5,000 $25,000 standard shopify stores $25,000 $150,000 shopify plus enterprise builds design complexity product skus third-party integrations erp crm pim custom app development migration requirements factoryjet enterprise-grade startup-friendly prices 40 60 percent below us uk agency rates">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--blue"></span>
          <h3>How much does Shopify e-commerce development cost?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Shopify e-commerce development costs range from <span className="fq-hl">$5,000 to $25,000</span> for standard Shopify stores and <span className="fq-hl">$25,000 to $150,000 or more</span> for Shopify Plus enterprise builds. Factors that affect cost include design complexity, number of product SKUs, third-party integrations with ERP, CRM, and PIM systems, custom app development, and migration requirements. FactoryJet offers enterprise-grade Shopify development at startup-friendly prices, with projects typically <span className="fq-hl">40 to 60 percent below US and UK agency rates</span>.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="platform" data-q="what is the difference between shopify and shopify plus" data-a="shopify small mid-size businesses $39 shopify plus enterprise tier $2,300 per month high-growth brands $80,000 checkout customization checkout extensibility b2b selling company profiles custom price lists expansion stores unlimited staff accounts 10x api call limits merchant success manager shopify flow launchpad">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--orange"></span>
          <h3>What is the difference between Shopify and Shopify Plus?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Shopify is designed for small to mid-size businesses with monthly plans starting at <span className="fq-hl">$39</span>, while Shopify Plus is the enterprise tier starting at <span className="fq-hl">$2,300 per month</span> for high-growth brands doing $80,000 or more in monthly revenue. Shopify Plus offers full checkout customization through <span className="fq-hl">Checkout Extensibility</span>, B2B selling with company profiles and custom price lists, up to <span className="fq-hl">10 expansion stores</span>, unlimited staff accounts, 10x API call limits, a dedicated <span className="fq-hl">Merchant Success Manager</span>, and advanced automation through Shopify Flow and Launchpad.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="pricing" data-q="how long does it take to build a shopify store" data-a="standard shopify store customized theme 4 8 weeks fully custom shopify store bespoke design integrations 8 14 weeks enterprise shopify plus headless architecture b2b functionality complex integrations 12 20 weeks">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--blue"></span>
          <h3>How long does it take to build a Shopify store?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">A standard Shopify store using a customized theme takes <span className="fq-hl">4 to 8 weeks</span>. A fully custom Shopify store with bespoke design and integrations takes <span className="fq-hl">8 to 14 weeks</span>. Enterprise Shopify Plus builds with headless architecture, B2B functionality, and complex integrations typically take <span className="fq-hl">12 to 20 weeks</span>.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="services" data-q="can you migrate my existing store to shopify or shopify plus" data-a="zero-downtime migration woocommerce magento bigcommerce salesforce commerce cloud wix squarespace custom platforms product data customer records order history seo rankings 301 redirects structured data transfer">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Can you migrate my existing store to Shopify or Shopify Plus?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. FactoryJet provides <span className="fq-hl">zero-downtime migration</span> services from WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, Wix, Squarespace, and custom platforms to Shopify and Shopify Plus. Our migration process preserves all product data, customer records, order history, and SEO rankings through <span className="fq-hl">301 redirects</span> and structured data transfer.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="platform" data-q="what is headless shopify development with hydrogen" data-a="headless shopify development separates frontend presentation layer shopify backend custom storefronts modern web technologies shopify hydrogen react-based framework headless builds oxygen infrastructure 50 70 percent faster page loads near-perfect lighthouse scores 30 percent higher conversion improvements">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--orange"></span>
          <h3>What is headless Shopify development with Hydrogen?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Headless Shopify development separates the frontend presentation layer from the Shopify backend, allowing fully custom storefronts built with modern web technologies. <span className="fq-hl">Shopify Hydrogen</span> is Shopify's official React-based framework for headless builds, hosted on Shopify's <span className="fq-hl">Oxygen infrastructure</span>. Hydrogen storefronts deliver <span className="fq-hl">50 to 70 percent faster page loads</span>, near-perfect Lighthouse scores, and <span className="fq-hl">30 percent or higher conversion improvements</span>.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="platform" data-q="can shopify handle b2b and wholesale e-commerce" data-a="shopify plus native b2b functionality company profiles custom price lists net payment terms quick-order lists volume-based discounts dtc b2b operations single shopify plus store dedicated b2b expansion stores">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--orange"></span>
          <h3>Can Shopify handle B2B and wholesale e-commerce?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. Shopify Plus includes <span className="fq-hl">native B2B functionality</span> with company profiles, custom price lists, net payment terms, quick-order lists, and volume-based discounts. Businesses can run DTC and B2B operations from a single Shopify Plus store or create dedicated <span className="fq-hl">B2B expansion stores</span>.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="about" data-q="do you work with international clients" data-a="united states canada united kingdom europe australia singapore uae saudi arabia india multi-currency storefronts shopify markets region-specific payment gateways international shipping tax compliance">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--purple"></span>
          <h3>Do you work with international clients?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. FactoryJet serves clients across the <span className="fq-hl">United States, Canada, United Kingdom, Europe, Australia, Singapore, UAE, Saudi Arabia, and India</span>. We configure multi-currency storefronts through Shopify Markets, set up region-specific payment gateways, and implement international shipping and tax compliance.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="services" data-q="do you provide ongoing shopify support after launch" data-a="annual maintenance contracts $500 per month standard shopify stores $1,500 per month shopify plus enterprise stores performance monitoring security updates bug fixes content updates 24/7 priority support">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Do you provide ongoing Shopify support after launch?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. FactoryJet offers <span className="fq-hl">Annual Maintenance Contracts</span> starting at <span className="fq-hl">$500 per month</span> for standard Shopify stores and <span className="fq-hl">$1,500 per month</span> for Shopify Plus enterprise stores. AMC plans cover performance monitoring, security updates, bug fixes, content updates, and <span className="fq-hl">24/7 priority support</span>.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="services" data-q="which industries do you serve for shopify development" data-a="fashion health beauty food beverage home furniture jewelry sports b2b wholesale luxury retail electronics subscription businesses tailored store architecture checkout flows integration configurations">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Which industries do you serve for Shopify development?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">We build Shopify stores across <span className="fq-hl">fashion, health and beauty, food and beverage, home and furniture, jewelry, sports, B2B wholesale, luxury retail, electronics, and subscription businesses</span>. Each industry receives tailored store architecture, checkout flows, and integration configurations.</div></div>
      </div>

      
      <div className="fq-item reveal" data-cat="about" data-q="what makes factoryjet different from other shopify agencies" data-a="ai-native development deep shopify expertise google ai overviews chatgpt perplexity ai search engines india-based team enterprise-grade quality 40 60 percent below us uk australian agency rates">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--purple"></span>
          <h3>What makes FactoryJet different from other Shopify agencies?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">FactoryJet combines <span className="fq-hl">AI-native development practices</span> with deep Shopify expertise. Every store we build is optimized for visibility across <span className="fq-hl">Google, AI Overviews, ChatGPT, Perplexity</span>, and other AI search engines. Our India-based team delivers enterprise-grade quality at <span className="fq-hl">40 to 60 percent below</span> comparable US, UK, and Australian agency rates.</div></div>
      </div>

    </div>

    
    <div className="fq-empty" id="fqEmpty">
      <div className="fq-empty-icon">🔍</div>
      <div className="fq-empty-text">No questions match your search. Try different keywords or browse by category.</div>
      <button className="btn btn-s btn-sm" onClick={clearFqSearch}>Clear Search</button>
    </div>

    
    <div className="fq-help reveal">
      <div className="fq-help-icon">
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      </div>
      <div className="fq-help-body">
        <h3>Still have questions?</h3>
        <p>Our Shopify experts are ready to help. Get a personalized answer within 24 hours.</p>
      </div>
      <div className="fq-help-ctas">
        <a href="#" className="btn btn-p btn-sm" onClick={handleCta}>Get in Touch <span className="arr">→</span></a>
        <a href="https://wa.me/919103398557" className="btn btn-wa btn-sm" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </div>
</section>


<section className="fc-section" id="contact">
  
  <div className="fc-orb fc-orb--1"></div>
  <div className="fc-orb fc-orb--2"></div>
  <div className="fc-orb fc-orb--3"></div>
  <div className="fc-grid"></div>

  <div className="ctr">
    <div className="fc-content">

      <div className="reveal">
        <div className="fc-eyebrow">Get Started</div>
      </div>

      <h2 className="fc-h reveal reveal-d1">Let's Build Your<br/><span className="fc-h-accent">Shopify Store</span></h2>

      <p className="fc-sub reveal reveal-d2">Whether you are launching your first e-commerce store, migrating from another platform, scaling to Shopify Plus, or building a headless commerce experience with Hydrogen, FactoryJet is your Shopify development partner.</p>

      
      <div className="reveal reveal-d2">
        <div className="fc-urgency">
          <span className="fc-urgency-dot"></span>
          <span className="fc-urgency-text"><strong>3 project slots</strong> available for Q2 2026</span>
        </div>
      </div>

      
      <div className="reveal reveal-d3">
        <div className="fc-cta-wrap">
          <button className="fc-cta" onClick={handleCta}>
            Get Your Free Shopify Consultation <span className="arr">→</span>
          </button>
        </div>
      </div>

      
      <div className="fc-secondary reveal reveal-d3">
        <a href="https://wa.me/919103398557" className="btn btn-wa btn-sm" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.61l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.325 0-4.47-.752-6.215-2.028l-.434-.328-3.15 1.056 1.056-3.15-.328-.434A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Chat With Us on WhatsApp
        </a>
        <a href="/case" className="btn btn-ghost btn-sm">View Our Shopify Portfolio</a>
      </div>

      
      <p className="reveal" style={{color:"rgba(255,255,255,.55)",fontSize:".8125rem",fontWeight:"600",letterSpacing:".06em",textTransform:"uppercase",marginBottom:"20px"}}>Get started in three steps</p>

      <div className="fc-steps reveal">
        <div className="fc-step">
          <div className="fc-step-num">1</div>
          <h3>Free Consultation</h3>
          <p>Tell us about your business, products, and goals. We will recommend the right Shopify plan, architecture, and approach.</p>
        </div>
        <div className="fc-step">
          <div className="fc-step-num">2</div>
          <h3>Custom Proposal</h3>
          <p>Receive a detailed project scope with timeline, milestones, deliverables, and transparent pricing within 48 hours.</p>
        </div>
        <div className="fc-step">
          <div className="fc-step-num">3</div>
          <h3>We Build, You Grow</h3>
          <p>Our team builds your store while you focus on your business. Launch with confidence on a platform built to scale.</p>
        </div>
      </div>

      
      <div className="fc-trust reveal">
        <div className="fc-trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span><strong>200+</strong> stores launched</span>
        </div>
        <div className="fc-trust-sep"></div>
        <div className="fc-trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span><strong>98%</strong> satisfaction</span>
        </div>
        <div className="fc-trust-sep"></div>
        <div className="fc-trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue-200)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          <span><strong>9</strong> countries</span>
        </div>
        <div className="fc-trust-sep"></div>
        <div className="fc-trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FF9F77" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          <span><strong>40–60%</strong> below US/UK rates</span>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
    {region === 'us' ? <FooterUS /> : <Footer />}
    </>
  );
}
