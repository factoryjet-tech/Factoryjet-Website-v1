'use client';

import React from 'react';

interface FinalCtaProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function FinalCta({ handleCta }: FinalCtaProps) {
  return (
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
        <a href="https://wa.me/919699977699" className="btn btn-wa btn-sm" target="_blank" rel="noopener">
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
  );
}
