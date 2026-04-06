'use client';
import React from 'react';

interface ServicesSectionProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function ServicesSection({ handleCta }: ServicesSectionProps) {
  return (
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
            <span className="svc-price svc-price--blue">From ₹1,50,000</span>
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
            <span className="svc-price svc-price--blue">₹10L – ₹1.25Cr</span>
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
            <span className="svc-price svc-price--dark">₹12L – ₹40L</span>
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
            <span className="svc-price svc-price--blue">From ₹2,50,000</span>
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
  );
}
