'use client';
import React from 'react';

interface ProcessSectionProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function ProcessSection({ handleCta }: ProcessSectionProps) {
  return (
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
                <div className="pj-week">Day 1</div>
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
                <div className="pj-week">Day 2</div>
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
                <div className="pj-week">Day 3–5</div>
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
                <div className="pj-week">Day 6</div>
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
                <div className="pj-week">Day 7</div>
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
                <div className="pj-week">Enterprise: 7–14 day delivery</div>
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
        <span className="pj-wk-label">Day 1</span>
        <span className="pj-wk-label">Day 2</span>
        <span className="pj-wk-label">Day 3–5</span>
        <span className="pj-wk-label">Day 6</span>
        <span className="pj-wk-label">Day 7</span>
        <span className="pj-wk-label">7–14d Ent.</span>
      </div>
    </div>

    <div className="sec-cta reveal" style={{marginTop:"48px",textAlign:"center"}}>
      <a href="#" className="btn btn-p" onClick={handleCta}>Ready to start building? Get Your Free Shopify Consultation <span className="arr">→</span></a>
    </div>
  </div>
</section>
  );
}
