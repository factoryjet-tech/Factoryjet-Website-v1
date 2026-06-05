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
      <button className={`fq-tab ${faqFilter === "platform" ? "active" : ""}`} data-cat="platform" onClick={() => setFaqFilter("platform")}>Platform &amp; Tech <span className="fq-tab-count">(2)</span></button>
      <button className={`fq-tab ${faqFilter === "services" ? "active" : ""}`} data-cat="services" onClick={() => setFaqFilter("services")}>Services &amp; Support <span className="fq-tab-count">(3)</span></button>
      <button className={`fq-tab ${faqFilter === "about" ? "active" : ""}`} data-cat="about" onClick={() => setFaqFilter("about")}>About FactoryJet <span className="fq-tab-count">(3)</span></button>
    </div>


    <div className="fq-list" id="fqList">


      <div className="fq-item reveal" data-cat="pricing" data-q="how much does shopify e-commerce development cost" data-a="shopify development pricing starts $5,000 $15,000 theme-based stores $15,000 $40,000 custom shopify builds $25,000 $150,000 shopify plus enterprise projects design complexity integrations migration scope custom apps b2b requirements factoryjet enterprise-grade quality 40 60 percent below us uk agency rates">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--blue"></span>
          <h3>How much does Shopify e-commerce development cost?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Shopify development pricing starts from <span className="fq-hl">$5,000–$15,000</span> for theme-based stores, <span className="fq-hl">$15,000–$40,000</span> for custom Shopify builds, and <span className="fq-hl">$25,000–$150,000+</span> for Shopify Plus and enterprise projects. Pricing depends on design complexity, integrations, migration scope, custom apps, and B2B requirements. FactoryJet delivers enterprise-grade quality at <span className="fq-hl">Pricing is fixed and published upfront</span>.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="pricing" data-q="how long does it take to build a shopify store" data-a="most standard shopify stores delivered 7 days custom growth stores 7 14 days enterprise shopify plus headless hydrogen b2b multi-store 14 days milestone-based process strategy ux development qa seo launch">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--blue"></span>
          <h3>How long does it take to build a Shopify store?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Most standard Shopify stores are delivered in <span className="fq-hl">7 days</span>. Custom growth stores typically take <span className="fq-hl">7–14 days</span>, depending on design complexity, integrations, and migration scope. Enterprise Shopify Plus, headless Hydrogen, B2B, and multi-store builds usually require <span className="fq-hl">14+ days</span>. FactoryJet follows a milestone-based process covering strategy, UX, development, QA, SEO, and launch.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="services" data-q="can you migrate my existing store to shopify or shopify plus" data-a="zero-downtime migration woocommerce magento bigcommerce salesforce commerce cloud wix squarespace custom platforms product data customer records order history seo rankings 301 redirects structured data transfer">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Can you migrate my existing store to Shopify or Shopify Plus?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. We provide <span className="fq-hl">zero-downtime migration</span> services from WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, Wix, Squarespace, and custom platforms. We migrate products, customers, orders, content, and SEO data with <span className="fq-hl">301 redirects</span> and URL preservation.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="platform" data-q="what is headless shopify development with hydrogen" data-a="headless shopify development separates frontend presentation layer shopify backend custom storefronts modern web technologies shopify hydrogen react-based framework headless builds oxygen infrastructure 50 70 percent faster page loads near-perfect lighthouse scores 30 percent higher conversion improvements">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--orange"></span>
          <h3>What is headless Shopify development with Hydrogen?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Headless Shopify separates the storefront frontend from Shopify's backend. FactoryJet uses <span className="fq-hl">Shopify Hydrogen and Oxygen</span> to build faster React-based storefronts with better performance, flexibility, and SEO. These builds typically deliver <span className="fq-hl">50–70% faster load times</span> and improved conversion rates.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="platform" data-q="can shopify handle b2b and wholesale e-commerce" data-a="shopify plus native b2b functionality company profiles custom price lists net payment terms quick-order lists volume-based discounts dtc b2b operations single shopify plus store dedicated b2b expansion stores">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--orange"></span>
          <h3>Can Shopify handle B2B and wholesale e-commerce?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. Shopify Plus supports <span className="fq-hl">native B2B functionality</span>, including company profiles, custom pricing, net payment terms, bulk ordering, and dedicated B2B storefronts. It is ideal for wholesale and enterprise commerce.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="about" data-q="do you work with international clients" data-a="united states canada united kingdom europe australia singapore uae saudi arabia india multi-currency storefronts shopify markets region-specific payment gateways international shipping tax compliance">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--purple"></span>
          <h3>Do you work with international clients?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. FactoryJet works with clients across the <span className="fq-hl">US, UK, Canada, Europe, Australia, UAE, Saudi Arabia, Singapore, and India</span>. We support multi-currency, international shipping, region-specific payment gateways, and tax compliance.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="services" data-q="do you provide ongoing shopify support after launch" data-a="annual maintenance contracts $500 per month standard shopify stores $1,500 per month shopify plus enterprise stores performance monitoring security updates bug fixes content updates 24/7 priority support">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Do you provide ongoing Shopify support after launch?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. We offer ongoing support plans for <span className="fq-hl">performance optimization, bug fixes, app updates, CRO improvements, SEO updates, and technical maintenance</span>. Support is available for both Shopify and Shopify Plus stores.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="services" data-q="which industries do you serve for shopify development" data-a="fashion health beauty food beverage home furniture jewelry sports b2b wholesale luxury retail electronics subscription businesses tailored store architecture checkout flows integration configurations">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Which industries do you serve for Shopify development?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">We build Shopify stores for <span className="fq-hl">fashion, beauty, food, furniture, luxury, sports, B2B, electronics, and subscription brands</span>. Each store is tailored to industry-specific workflows, integrations, and conversion needs.</div></div>
      </div>


      <div className="fq-item reveal" data-cat="about" data-q="what makes factoryjet different from other shopify agencies" data-a="ai-native development deep shopify expertise google ai overviews chatgpt perplexity ai search engines india-based team enterprise-grade quality 40 60 percent below us uk australian agency rates">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--purple"></span>
          <h3>What makes FactoryJet different from other Shopify agencies?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">FactoryJet combines <span className="fq-hl">AI-native development</span>, deep Shopify expertise, and enterprise-grade execution.<ul style={{marginTop:"12px",paddingLeft:"20px"}}><li>120+ Shopify and Shopify Plus stores delivered</li><li>part of 523 websites delivered for 500+ clients globally</li><li>clients across 9 countries</li><li>Pricing is fixed and published upfront</li><li>built-in SEO, AEO, and GEO optimization</li></ul></div></div>
      </div>


      <div className="fq-item reveal" data-cat="about" data-q="how many shopify stores has factoryjet delivered" data-a="120+ shopify shopify plus stores dtc b2b enterprise brands 523 websites 500+ clients globally">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--purple"></span>
          <h3>How many Shopify stores has FactoryJet delivered?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">FactoryJet has delivered <span className="fq-hl">120+ Shopify and Shopify Plus stores</span> across DTC, B2B, and enterprise brands. This is part of our broader track record of <span className="fq-hl">523 websites delivered for 500+ clients globally</span>.</div></div>
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
        <a href="https://wa.me/919699977699" className="btn btn-wa btn-sm" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </div>
</section>
  );
}
