'use client';
import React from 'react';

interface PricingSectionProps {
  handleCta: (e?: React.MouseEvent) => void;
  pricingTab: string;
  setPricingTab: (tab: string) => void;
  fullTableOpen: boolean;
  setFullTableOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PricingSection({ handleCta, pricingTab, setPricingTab, fullTableOpen, setFullTableOpen }: PricingSectionProps) {
  return (
    <section className="sec sec--w" id="pricing">
      <div className="ctr">
        <div className="reveal" style={{maxWidth:"760px",margin:"0 auto 48px",padding:"24px 28px",background:"var(--off-white)",border:"1px solid var(--light)",borderRadius:"var(--r-xl)"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"10px 24px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:".9375rem",color:"var(--navy)",fontWeight:"500"}}><span style={{color:"#10B981",fontWeight:"700"}}>✓</span> 100% code ownership with full GitHub repository transfer</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:".9375rem",color:"var(--navy)",fontWeight:"500"}}><span style={{color:"#10B981",fontWeight:"700"}}>✓</span> Zero vendor lock-in</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:".9375rem",color:"var(--navy)",fontWeight:"500"}}><span style={{color:"#10B981",fontWeight:"700"}}>✓</span> Hosting configured in your account</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:".9375rem",color:"var(--navy)",fontWeight:"500"}}><span style={{color:"#10B981",fontWeight:"700"}}>✓</span> QA tested across 20+ devices</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:".9375rem",color:"var(--navy)",fontWeight:"500"}}><span style={{color:"#10B981",fontWeight:"700"}}>✓</span> Lighthouse audited</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:".9375rem",color:"var(--navy)",fontWeight:"500"}}><span style={{color:"#10B981",fontWeight:"700"}}>✓</span> WCAG accessibility best practices</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:".9375rem",color:"var(--navy)",fontWeight:"500"}}><span style={{color:"#10B981",fontWeight:"700"}}>✓</span> Core Web Vitals optimized</div>
          </div>
        </div>
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
              7-day core delivery
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
            <div className="pr-savings"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> Pricing is fixed and published upfront</div>
            <div className="pr-price-from">Starting from</div>
            <div className="pr-price-row">
              <span className="pr-price">$15,000</span>
              <span className="pr-price-unit">– $40,000</span>
            </div>
            <div className="pr-timeline">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              7–14 day delivery
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
              14+ day enterprise delivery
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
                  <tr style={{borderBottom:"1px solid var(--light)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Shopify Theme-Based Store</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$5,000 – $15,000</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>7-day core delivery</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Startups and small businesses launching their first Shopify store</td></tr>
                  <tr style={{borderBottom:"1px solid var(--light)",background:"var(--off-white)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Custom Shopify Store</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$15,000 – $40,000</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>7–14 day delivery</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Growing brands needing bespoke design and custom functionality</td></tr>
                  <tr style={{borderBottom:"1px solid var(--light)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Shopify Plus Enterprise Store</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$25,000 – $150,000+</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>14+ day enterprise delivery</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>High-revenue brands requiring checkout customization, B2B, and multi-store</td></tr>
                  <tr style={{borderBottom:"1px solid var(--light)",background:"var(--off-white)"}}><td style={{padding:"14px 16px",fontWeight:"600",color:"var(--navy)"}}>Headless Shopify (Hydrogen)</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>$30,000 – $120,000+</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>14+ day enterprise delivery</td><td style={{padding:"14px 16px",color:"var(--slate)"}}>Brands needing ultra-fast performance and complete design freedom</td></tr>
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
  );
}
