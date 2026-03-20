'use client';

import React from 'react';

interface FaqSectionProps {
  handleCta: (e?: React.MouseEvent) => void;
  faqFilter: string;
  setFaqFilter: (filter: string) => void;
  faqSearch: string;
  setFaqSearch: (search: string) => void;
  clearFqSearch: () => void;
}

export default function FaqSection({ handleCta, faqFilter, setFaqFilter, faqSearch, setFaqSearch, clearFqSearch }: FaqSectionProps) {
  return (
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
  );
}
