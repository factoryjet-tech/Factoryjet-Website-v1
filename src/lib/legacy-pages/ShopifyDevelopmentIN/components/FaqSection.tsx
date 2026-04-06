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
      <button className={`fq-tab ${faqFilter === "pricing" ? "active" : ""}`} data-cat="pricing" onClick={() => setFaqFilter("pricing")}>Pricing &amp; Timeline <span className="fq-tab-count">(3)</span></button>
      <button className={`fq-tab ${faqFilter === "platform" ? "active" : ""}`} data-cat="platform" onClick={() => setFaqFilter("platform")}>Platform &amp; Tech <span className="fq-tab-count">(3)</span></button>
      <button className={`fq-tab ${faqFilter === "services" ? "active" : ""}`} data-cat="services" onClick={() => setFaqFilter("services")}>Services &amp; India <span className="fq-tab-count">(4)</span></button>
    </div>


    <div className="fq-list" id="fqList">

      <div className="fq-item reveal" data-cat="pricing" data-q="what is shopify website development cost in india" data-a="shopify development india starts ₹1,50,000 theme-based stores ₹10,00,000 shopify plus development design complexity products integrations razorpay shiprocket b2b headless commerce factoryjet transparent inr pricing">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--blue"></span>
          <h3>What is Shopify website development cost in India?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Shopify development in India starts from <span className="fq-hl">₹1,50,000</span> for theme-based stores and goes up to <span className="fq-hl">₹10,00,000 or more</span> for Shopify Plus Development projects. The final cost depends on design complexity, number of products, integrations like Razorpay and Shiprocket, and whether you need B2B or headless commerce. FactoryJet offers transparent INR pricing with no hidden costs.</div></div>
      </div>

      <div className="fq-item reveal" data-cat="pricing" data-q="do you support shopify plus development in india" data-a="shopify plus development indian brands checkout extensibility b2b commerce multi-store architecture shopify flow automation enterprise erp integrations ₹80 lakh monthly gmv">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--blue"></span>
          <h3>Do you support Shopify Plus development in India?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. FactoryJet provides full <span className="fq-hl">Shopify Plus Development</span> for Indian brands including Checkout Extensibility, B2B commerce setup, multi-store architecture, Shopify Flow automation, and enterprise ERP integrations. Shopify Plus is ideal for high-revenue Indian brands doing <span className="fq-hl">₹80 lakh or more in monthly GMV</span>.</div></div>
      </div>

      <div className="fq-item reveal" data-cat="platform" data-q="what is the difference between shopify and shopify plus" data-a="shopify small mid-size businesses $39 shopify plus enterprise tier $2,300 per month high-growth brands checkout customization checkout extensibility b2b selling company profiles custom price lists expansion stores unlimited staff accounts 10x api call limits merchant success manager shopify flow launchpad">
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

      <div className="fq-item reveal" data-cat="services" data-q="do you integrate razorpay payu cod for indian stores" data-a="razorpay payu cashfree paytm payment gateways indian shopify stores cash on delivery cod verification cod fee logic d2c brands 40 60 percent orders">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Do you integrate Razorpay, PayU, and COD for Indian stores?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. We integrate <span className="fq-hl">Razorpay, PayU, Cashfree, and PayTM</span> payment gateways for Indian Shopify stores. We also configure <span className="fq-hl">Cash on Delivery</span> workflows including COD verification and COD fee logic — essential for Indian D2C brands where COD accounts for 40–60% of orders.</div></div>
      </div>

      <div className="fq-item reveal" data-cat="services" data-q="is gst billing supported on shopify stores" data-a="gst-compliant invoice generation multi-state tax configuration cgst sgst igst hsn sac code setup tally zoho books automated gst reconciliation">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Is GST billing supported on Shopify stores?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. Every Shopify store we build for Indian businesses includes <span className="fq-hl">GST-compliant invoice generation</span>, multi-state tax configuration covering CGST, SGST, and IGST, and HSN/SAC code setup. We also integrate <span className="fq-hl">Tally and Zoho Books</span> for automated GST reconciliation where needed.</div></div>
      </div>

      <div className="fq-item reveal" data-cat="services" data-q="can you migrate our store from woocommerce or magento to shopify" data-a="zero-downtime migrations woocommerce magento prestashop shopify shopify plus products customers orders blog content 301 redirects google rankings 4 12 weeks">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Can you migrate our store from WooCommerce or Magento to Shopify?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. We handle <span className="fq-hl">zero-downtime migrations</span> from WooCommerce, Magento, PrestaShop, and other platforms to Shopify and Shopify Plus. The migration includes full transfer of products, customers, orders, and blog content — along with <span className="fq-hl">301 redirects</span> to protect your existing Google rankings. Timelines range from 4 to 12 weeks.</div></div>
      </div>

      <div className="fq-item reveal" data-cat="platform" data-q="what is headless shopify development with hydrogen" data-a="headless shopify development separates frontend presentation layer shopify backend custom storefronts modern web technologies shopify hydrogen react-based framework headless builds oxygen infrastructure 50 70 percent faster page loads near-perfect lighthouse scores 30 percent higher conversion improvements">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--orange"></span>
          <h3>What is headless Shopify development with Hydrogen?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Headless Shopify development separates the frontend presentation layer from the Shopify backend, allowing fully custom storefronts built with modern web technologies. <span className="fq-hl">Shopify Hydrogen</span> is Shopify&#39;s official React-based framework for headless builds, hosted on Shopify&#39;s <span className="fq-hl">Oxygen infrastructure</span>. Hydrogen storefronts deliver <span className="fq-hl">50 to 70 percent faster page loads</span>, near-perfect Lighthouse scores, and <span className="fq-hl">30 percent or higher conversion improvements</span>.</div></div>
      </div>

      <div className="fq-item reveal" data-cat="platform" data-q="can shopify handle b2b and wholesale e-commerce" data-a="shopify plus native b2b functionality company profiles custom price lists net payment terms quick-order lists volume-based discounts dtc b2b operations single shopify plus store dedicated b2b expansion stores">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--orange"></span>
          <h3>Can Shopify handle B2B and wholesale e-commerce?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. Shopify Plus includes <span className="fq-hl">native B2B functionality</span> with company profiles, custom price lists, net payment terms, quick-order lists, and volume-based discounts. Businesses can run DTC and B2B operations from a single Shopify Plus store or create dedicated <span className="fq-hl">B2B expansion stores</span>.</div></div>
      </div>

      <div className="fq-item reveal" data-cat="services" data-q="do you offer shopify plus for enterprise brands in india" data-a="shopify plus development enterprise indian brands fashion fmcg electronics b2b checkout extensibility unlimited staff accounts shopify flow automation 10 expansion storefronts ₹1 crore per month online revenue">
        <button className="fq-q" onClick={(e) => { const item = e.currentTarget.closest(".fq-item"); if(item) { const wasOpen = item.classList.contains("open"); document.querySelectorAll(".fq-item.open").forEach(el => el.classList.remove("open")); if(!wasOpen) item.classList.add("open"); } }} aria-expanded="false">
          <span className="fq-dot fq-dot--green"></span>
          <h3>Do you offer Shopify Plus for enterprise brands in India?</h3>
          <span className="fq-chev"><svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg></span>
        </button>
        <div className="fq-a"><div className="fq-a-body">Yes. FactoryJet handles <span className="fq-hl">Shopify Plus Development</span> for enterprise Indian brands in fashion, FMCG, electronics, and B2B sectors. Shopify Plus gives Indian enterprises custom checkout via Checkout Extensibility, unlimited staff accounts, advanced Shopify Flow automation, and up to <span className="fq-hl">10 expansion storefronts</span> — making it the right platform for brands scaling beyond <span className="fq-hl">₹1 crore per month</span> in online revenue.</div></div>
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
