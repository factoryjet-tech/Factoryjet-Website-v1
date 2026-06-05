'use client';

import React from 'react';
import AuthorByline from '@/components/AuthorByline';

interface HeroSectionProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function HeroSection({ handleCta }: HeroSectionProps) {
  return (
    <header className="hero" role="banner" id="heroSection">

  <div className="hero-glow hero-glow--1" data-parallax="0.03"></div>
  <div className="hero-glow hero-glow--2" data-parallax="0.02"></div>
  <div className="hero-glow hero-glow--3" data-parallax="0.015"></div>

  <div className="ctr">

    <nav className="bc" aria-label="Breadcrumb" style={{marginBottom:"24px"}}>
      <a href="/us">Home</a><span className="bc-sep">›</span>
      <a href="/us/services/ecommerce-development/">E-Commerce Development</a><span className="bc-sep">›</span>
      <span style={{color:"rgba(255,255,255,.6)"}}>Shopify &amp; Shopify Plus</span>
    </nav>

    <div className="hero-split">

      <div className="hero-left">
        <div className="reveal">
          <span className="eyebrow eyebrow--dark">Shopify Development Partner</span>
        </div>

        <h1 className="reveal reveal-d1">Shopify &amp; Shopify Plus<br/>E-Commerce Development<br/>Services</h1>
        <AuthorByline variant="dark" />

        <p className="hero-desc reveal reveal-d2">FactoryJet builds high-converting Shopify and Shopify Plus stores for DTC, B2B, and enterprise brands worldwide. Custom store builds, platform migrations, headless commerce with Hydrogen, and Shopify Plus checkout customization — engineered to sell more and rank everywhere.</p>


        <div className="hero-ctas reveal reveal-d3">
          <div className="hero-cta-main">
            <a href="#" className="btn btn-p" onClick={handleCta}>
              Get a Free Shopify Consultation <span className="arr">→</span>
            </a>
          </div>
          <a href="https://wa.me/919699977699" className="btn btn-wa" target="_blank" rel="noopener">
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
          <span className="proof-text">Trusted by <strong>120+</strong> brands across <strong>9 countries</strong></span>
        </div>
      </div>


      <div className="hero-right reveal reveal-d2" data-parallax-container>
        <div className="hero-right-glow"></div>

        {/* Browser / dashboard mockup — overflow:visible so float-cards can extend outside */}
        <div className="browser browser--with-cards" data-parallax="0.02">

          {/* Metric cards — absolutely positioned outside the browser's right edge, ~20% overlapping */}
          {/* <div className="float-card float-card--revenue" data-parallax="0.05">
            <div className="fc-label">Monthly Revenue</div>
            <div className="fc-value">$284K</div>
            <div className="fc-sub"><span className="fc-up">↑ 32%</span> vs last quarter</div>
          </div> */}
          {/* <div className="float-card float-card--growth" data-parallax="0.04">
            <div className="fc-label">Conversion Rate</div>
            <div className="fc-value">4.8%</div>
            <div className="fc-sub"><span className="fc-up">↑ 60%</span> after launch</div>
          </div> */}
          {/* <div className="float-card float-card--rating" data-parallax="0.06">
            <div className="fc-label">Store Rating</div>
            <div className="fc-stars">
              <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
              <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
              <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
              <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
              <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
            </div>
            <div className="fc-sub">Pricing is fixed and published upfront</div>
          </div> */}

          {/* Dashboard content wrapper — clipped independently */}
          <div className="browser-inner">
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
                  <div className="dash-stat-label">Today&apos;s Sales</div>
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
  </div>
</header>
  );
}
