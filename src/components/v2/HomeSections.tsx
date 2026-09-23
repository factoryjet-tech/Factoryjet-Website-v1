import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import { HOME_FAQ_CATEGORIES, HOME_FAQS } from './HomeFaqs';
import './AiAgentDevelopmentSections.css';
import './HomeSections.css';

/*
 * Homepage (2026-09-23): the AI Agent Development page's design system applied
 * to the ecommerce + AI commerce positioning. Approved mockup:
 * https://claude.ai/artifact/T9nbSTbX581xUhGkXDzBYh (v3). Keyword/SERP/PAA map:
 * pipeline/research/HOMEPAGE-REDESIGN-KEYWORDS-2026-09-23.md
 *
 * Static server component. The only client code is HeroInlineForm (lead capture
 * + step-2 details modal). The hero workflow panel animates with CSS only.
 */

function HomeFaqAccordion() {
  return (
    <div className="faqlist">
      {HOME_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {HOME_FAQS.filter((faq) => faq.category === category.key).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>{faq.answer}</p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default function HomeSections() {
  return (
    <div className="aiAgentPage homePage">
      <main id="home-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Ecommerce Development · AI Commerce</div>
              <h1>We Build Your Ecommerce. And the <span className="hero-emphasis">AI Agents That Keep It Running.</span></h1>
              <p className="lead">Ecommerce development services for DTC and B2B brands: design, development, implementation, and support. Stores and B2B portals on Shopify, Shopify Plus, Adobe Commerce, BigCommerce, WooCommerce, or Commerceflo, plus the agents that list, reprice, and keep stock in sync across every channel you sell on.</p>
              <HeroInlineForm source="us_hero_inline" region="us" submitLabel="Get a commerce audit" />
            </div>

            <form className="specpanel" aria-label="Interactive order workflow illustration">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>PIPELINE · ORDER TO SHIPPED</span>
                <span className="sys"><span>SHOPIFY</span><span>AMAZON</span><span>B2B</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the workflow animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause workflow animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor"/></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay automatic workflow" title="Replay automatic workflow">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4"/></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore workflow steps">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="order-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h2l2.2 10.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L19.5 8H6.2M9 20h.01M17 20h.01"/></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Order lands from any channel</span>
                  <span className="tag">READ</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="order-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7l8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10"/></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Check one live stock count</span>
                  <span className="tag">VERIFY</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="order-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h6m0 0 4-6h6M10 12l4 6h6M10 12h10"/></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Update every channel &amp; route to fulfillment</span>
                  <span className="tag">WRITE</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="order-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6"/></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Exceptions go to your team</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · if stock doesn't reconcile, the order is flagged, never oversold.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Platforms</div><div className="v">Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo.</div></div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">Everything we build: the store, the integrations, the agents. No FactoryJet subscription.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce, and AI engagements.</div></div>
          </div>
        </div>

        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ In Plain Terms</div>
              <h2>What FactoryJet Is, and What Matters Before You Hire an Ecommerce Development Company</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>FactoryJet is an ecommerce development company for DTC and B2B brands in the United States, and an AI development company that builds the agents on top. We design, build, implement, and support stores, B2B portals, AI agents, and the websites and search presence around them. You own and run everything we build.</p></div>
                <div className="fact"><div className="sec">§02</div><p>Most multichannel problems are data problems. When your store, Amazon, Walmart, TikTok Shop, and B2B portal each keep their own copy of stock, you oversell. We build one catalog, one live inventory, and one order queue under every channel.</p></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">About 70% of online carts are abandoned before checkout.</span> The store you sell from has to load fast and be easy to buy from, or the traffic you paid for leaks out. <a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" rel="noopener nofollow">Baymard Institute ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">16.9% of US retail sales now happen online</span>, and visits to US retail sites from AI tools like ChatGPT rose 1,200% between July 2024 and February 2025. Buyers now ask an assistant what to buy. <a href="https://www.census.gov/retail/ecommerce.html" target="_blank" rel="noopener nofollow">US Census ↗</a> <a href="https://blog.adobe.com/en/publish/2025/03/17/adobe-analytics-traffic-to-us-retail-websites-from-generative-ai-sources-jumps-1200-percent" target="_blank" rel="noopener nofollow">Adobe Analytics ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p>The AI agents we build are task agents, not chatbots. They list new products in each marketplace's format, fix suppressed listings, reprice, and reconcile feeds on your live data, then hand the exceptions to your team.</p></div>
              </div>
              <div className="factphoto">
                <img width="1000" height="667" src="/images/home/home-packing-review.webp" alt="AI-generated photo of a person approving a product on a tablet at a packing desk" loading="lazy" decoding="async" />
                <div className="cap">FIELD REFERENCE · CATALOG CHECK BEFORE SHIP</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>How to Choose an Ecommerce Development Agency</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Option</th><th>What you get</th><th>Best for</th><th>Trade‑off</th></tr></thead>
                <tbody>
                  <tr><th>A stack of apps<br /><span className="mono tableSubLabel">sync app, listing tool, repricer</span></th><td>Tools you wire together and babysit yourself</td><td>One store, one channel, a simple catalog</td><td>Each tool keeps its own count, so you oversell. Six tools, four logins, all on you</td></tr>
                  <tr><th>Build‑and‑launch shops<br /><span className="mono tableSubLabel">theme agencies, freelancers</span></th><td>A new storefront, then a handoff</td><td>A fresh DTC store on one platform</td><td>Integrations and B2B rules often sit outside scope, and support ends at launch</td></tr>
                  <tr className="us"><th>Commerce partner<br /><span className="mono tableSubLabel tableSubLabelAccent">FactoryJet</span></th><td>One system across store, marketplaces, and B2B, built and implemented on your platform, with agents on top</td><td>DTC and B2B brands selling in more than one place</td><td>Scoped on a call with a fixed proposal, so there's no instant price on the page</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="definition" id="definition">
          <div className="definition-image">
            <img className="kenburns" width="1400" height="933" src="/images/home/home-unified-commerce-model.webp" alt="AI-generated model of one commerce hub connected to a storefront, a shopping cart, warehouse shelving, and wholesale pallets" loading="lazy" decoding="async" />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">Unified Commerce</h2>
            <p>The architecture under omnichannel selling. One catalog, one live inventory, and one order engine that your store, marketplaces, point of sale, and B2B portal all read from, instead of each keeping its own copy. Omnichannel describes what the customer sees. Unified commerce is what keeps it true: a unit sold on Amazon is gone from Shopify and the wholesale portal moments later, and nobody re-keys a product five times. If a vendor's "omnichannel" setup still needs a nightly spreadsheet to reconcile, it isn't unified.</p>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>Ecommerce Development Services</h2>
            </div>
            <div className="capgrid">
              <a className="cap cap-1" href="/services/ecommerce-development">
                <div className="caphead"><span className="capid">CAP‑01</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9h16l-1 11H5L4 9Z"/><path d="M8 9V7a4 4 0 0 1 8 0v2"/></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect className="diagram-surface" x="40" y="20" width="360" height="120" rx="10"/><path className="diagram-faint" d="M40 44h360"/><circle cx="56" cy="32" r="3"/><circle cx="68" cy="32" r="3"/>
                  <rect className="diagram-surface" x="60" y="58" width="90" height="62" rx="6"/><rect className="diagram-surface" x="175" y="58" width="90" height="62" rx="6"/><rect className="diagram-core" x="290" y="58" width="90" height="62" rx="6"/>
                  <path d="M75 106h40M190 106h40"/><path className="diagram-wire" d="M305 106h40"/><path d="m326 82 7 7 13-15"/></svg></div>
                <h3>Ecommerce Development</h3>
                <p>Stores designed and built for speed and checkout, on the platform that fits your catalog and budget. We recommend the fit, not the platform we happen to prefer.</p>
                <div className="systags"><span>Shopify Plus</span><span>Adobe Commerce</span><span>BigCommerce</span><span>WooCommerce</span><span>Headless</span></div>
              </a>
              <a className="cap cap-2" href="/b2b-ecommerce">
                <div className="caphead"><span className="capid">CAP‑02</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path className="diagram-wire" d="M105 80h52m125 0h52"/>
                  <g><rect className="diagram-surface" x="35" y="35" width="100" height="90" rx="10"/><circle cx="85" cy="62" r="11"/><path d="M65 99c0-24 40-24 40 0M57 112h56"/></g>
                  <g><rect className="diagram-surface" x="170" y="35" width="100" height="90" rx="10"/><circle cx="220" cy="62" r="11"/><path d="M200 99c0-24 40-24 40 0M192 112h56"/></g>
                  <g><rect className="diagram-core" x="305" y="35" width="100" height="90" rx="10"/><circle cx="355" cy="62" r="11"/><path d="M335 99c0-24 40-24 40 0M327 112h56"/></g></svg></div>
                <h3>B2B Ecommerce Portals</h3>
                <p>Trade buyers get their own login with tiered or contract pricing, net terms, quote approvals, and fast reordering, on the same catalog as your DTC store.</p>
                <div className="systags"><span>Price tiers</span><span>Net terms</span><span>ERP</span></div>
              </a>
              <a className="cap cap-3" href="/services/ai-agent-development">
                <div className="caphead"><span className="capid">CAP‑03</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="7" width="14" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6"/></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path className="diagram-wire" d="M134 50h43q15 0 15 15v30q0 15 15 15h44m55 0h30V50h40"/>
                  <rect className="diagram-surface" x="30" y="22" width="104" height="58" rx="10"/><path d="M48 41h68M48 55h42"/>
                  <rect className="diagram-surface" x="54" y="97" width="80" height="40" rx="8"/><path d="M69 116h48"/>
                  <rect className="diagram-core" x="251" y="82" width="55" height="55" rx="12"/><path d="m267 110 8 8 15-18"/>
                  <rect className="diagram-surface" x="366" y="28" width="44" height="44" rx="8"/><path d="M379 50h18m-9-9v18"/></svg></div>
                <h3>AI Commerce Agents</h3>
                <p>Agents that list, reprice to hold the Buy Box, fix suppressed listings, and reconcile feeds. Built into your system, owned by you, exceptions routed to your team.</p>
                <div className="systags"><span>Listings</span><span>Repricing</span><span>Feeds</span></div>
              </a>
              <a className="cap cap-4" href="/services/ai-integration-services">
                <div className="caphead"><span className="capid">CAP‑04</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.2 6h7.6"/><path d="M18 8.5V15.5"/></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path className="diagram-wire" d="M90 40h58q20 0 20 20v20h104V60q0-20 20-20h58M90 120h58q20 0 20-20V80m104 0v20q0 20 20 20h58"/>
                  <rect className="diagram-surface" x="46" y="24" width="44" height="32" rx="6"/><rect className="diagram-surface" x="350" y="24" width="44" height="32" rx="6"/>
                  <rect className="diagram-surface" x="46" y="104" width="44" height="32" rx="6"/><rect className="diagram-surface" x="350" y="104" width="44" height="32" rx="6"/>
                  <rect className="diagram-core" x="193" y="53" width="54" height="54" rx="12"/><path d="m214 69-9 11 9 11m12-22 9 11-9 11"/></svg></div>
                <h3>Marketplace, ERP &amp; POS Integration</h3>
                <p>Your ERP, POS, 3PL, and marketplaces tied into one order and inventory layer, so every system reads the same live number instead of its own copy.</p>
                <div className="systags"><span>Amazon</span><span>Walmart</span><span>TikTok Shop</span><span>NetSuite</span><span>3PL</span></div>
              </a>
              <a className="cap cap-5" href="/services/ecommerce-seo">
                <div className="caphead"><span className="capid">CAP‑05</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 17 9 11 13 15 21 6"/><path d="M15 6h6v6"/></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect className="diagram-surface" x="45" y="24" width="350" height="112" rx="10"/>
                  <path className="diagram-faint" d="M65 52h310M65 80h310M65 108h310M105 40v80m76-80v80m76-80v80m76-80v80"/>
                  <path className="diagram-wire" d="M65 101h38l13-31 19 42 25-63 22 35h38l15-19 18 32 24-41 17 26h61l20-18"/>
                  <circle className="diagram-core" cx="375" cy="64" r="7"/></svg></div>
                <h3>Commerce SEO &amp; AI Visibility</h3>
                <p>Category and product pages that rank, and a brand that ChatGPT, Perplexity, and Gemini name when buyers ask what to buy.</p>
                <div className="systags"><span>Google</span><span>ChatGPT</span><span>Perplexity</span></div>
              </a>
              <a className="cap cap-6" href="/services/magento-development">
                <div className="caphead"><span className="capid">CAP‑06</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h11l-3-3M20 17H9l3 3"/></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <g><rect className="diagram-surface" x="40" y="30" width="110" height="100" rx="10"/><path d="M60 55h70M60 75h70M60 95h40"/></g>
                  <path className="diagram-wire" d="M150 80h140"/><path className="diagram-wire" d="m276 68 14 12-14 12"/>
                  <rect className="diagram-surface" x="190" y="60" width="60" height="40" rx="6"/><path d="M204 80h32"/>
                  <g><rect className="diagram-core" x="290" y="30" width="110" height="100" rx="10"/><path d="M310 55h70M310 75h70"/><path d="m323 97 8 8 15-18"/></g></svg></div>
                <h3>Replatforming &amp; Migration</h3>
                <p>Off Magento or an aging stack without losing rankings: products, customers, orders, and B2B pricing moved, with a full 301 map and a cutover plan.</p>
                <div className="systags"><span>Data migration</span><span>301 map</span><span>Cutover</span></div>
              </a>
            </div>
          </div>
        </section>

        <section className="section platforms" id="platforms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Platforms</div>
                <h2>Ecommerce Platforms We Build On</h2>
              </div>
              <p>We recommend the platform that fits your catalog, your B2B rules, and your budget, not the one we happen to prefer. Here is where each one fits, and what we build on it.</p>
            </div>
            <div className="platlist" role="list">
              <a className="plat plat-own" role="listitem" href="/commerceflo">
                <span className="capid">PLT‑01</span>
                <div className="plat-name"><h3>Commerceflo</h3><span className="plat-flag">OUR PLATFORM · EARLY ACCESS</span></div>
                <div className="plat-fit"><span className="k">Best for</span>Brands selling DTC, B2B, on marketplaces, and in retail who want one data model under all of it</div>
                <p className="plat-build">Commerceflo by FactoryJet is our own AI commerce operator. Store, B2B portals, marketplace listings, and point of sale run on one data model, with eight named AI agents that propose fixes to inventory, pricing, and content.</p>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <a className="plat" role="listitem" href="/services/shopify-development">
                <span className="capid">PLT‑02</span>
                <div className="plat-name"><h3>Shopify</h3></div>
                <div className="plat-fit"><span className="k">Best for</span>DTC brands that want a fast launch and a deep app ecosystem</div>
                <p className="plat-build">Custom Shopify themes, new store builds, migrations onto Shopify, app and ERP integrations, and ongoing Shopify maintenance.</p>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <a className="plat" role="listitem" href="/services/shopify-plus-agency">
                <span className="capid">PLT‑03</span>
                <div className="plat-name"><h3>Shopify Plus</h3></div>
                <div className="plat-fit"><span className="k">Best for</span>High-volume brands running DTC and B2B on one store</div>
                <p className="plat-build">Shopify Plus B2B with company accounts, price lists, and payment terms, checkout extensions, multi-store setups, and workflow automation.</p>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <a className="plat" role="listitem" href="/services/magento-development">
                <span className="capid">PLT‑04</span>
                <div className="plat-name"><h3>Adobe Commerce (Magento)</h3></div>
                <div className="plat-fit"><span className="k">Best for</span>Very large catalogs and deep, native B2B rules</div>
                <p className="plat-build">Magento 2 builds, upgrades, speed work, and B2B modules, plus migrations off Magento when it no longer fits.</p>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <a className="plat" role="listitem" href="/bigcommerce-development">
                <span className="capid">PLT‑05</span>
                <div className="plat-name"><h3>BigCommerce</h3></div>
                <div className="plat-fit"><span className="k">Best for</span>Mid-market B2B brands that want strong B2B features without enterprise cost</div>
                <p className="plat-build">BigCommerce and B2B Edition builds, multi-storefront setups, and catalog and ERP integration.</p>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <a className="plat" role="listitem" href="/services/woocommerce-development">
                <span className="capid">PLT‑06</span>
                <div className="plat-name"><h3>WooCommerce</h3></div>
                <div className="plat-fit"><span className="k">Best for</span>Brands already on WordPress who want full control and no platform license fee</div>
                <p className="plat-build">Custom WooCommerce stores, plugin development, subscriptions, and speed and security hardening.</p>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <a className="plat" role="listitem" href="/headless-commerce">
                <span className="capid">PLT‑07</span>
                <div className="plat-name"><h3>Headless &amp; Custom Builds</h3></div>
                <div className="plat-fit"><span className="k">Best for</span>Product configurators, unusual checkouts, or speed targets a theme can't reach</div>
                <p className="plat-build">Headless storefronts on Next.js over Shopify or BigCommerce, and fully custom ecommerce builds when no platform fits.</p>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="plat-foot">
              <span>Not sure which fits? We'll tell you on a scoping call, including when your current platform is fine.</span>
              <a href="/best-ecommerce-platforms">Compare the best ecommerce platforms ↗</a>
            </div>
          </div>
        </section>


        <section className="section services" id="services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">More From the Same Team</div>
              <h2>AI Development Services, AI Search &amp; SEO, and Website Design</h2>
              <p>Ecommerce is where we started. The same engineers also build AI agents for operations teams, get brands cited in AI answers, and design websites for B2B and service businesses. One team, one set of standards, and you own everything we ship.</p>
            </div>
            <div className="svclist">
              <article className="svc" id="svc-ai-development">
                <div>
                  <div className="svc-top"><span className="svc-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="7" width="14" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6"/></svg></span><span className="capid">SVC‑02</span></div>
                  <h3>AI Agent Development</h3>
                  <div className="aka">AI development company · Agentic AI development · AI integration</div>
                  <p className="def">An AI development company builds software that reads your data, makes a decision, and takes action inside the tools you already run. We build custom AI agents wired into NetSuite, SAP, Odoo, Salesforce, HubSpot, Zendesk, and Shopify, with a human approval step wherever the decision matters. Most well-scoped agents reach production in 3 to 12 weeks.</p>
                  <div className="svc-links"><a className="btn btn-primary" href="/services/ai-agent-development">AI agent development</a><a className="btn btn-ghost" href="/services/ai-integration-services">AI integration services</a></div>
                </div>
                <div>
                <ul>
                  <li><span><b>ERP &amp; procurement agents</b> that turn an RFQ into a quote</span></li>
                  <li><span><b>Customer support agents</b> that resolve tickets from your knowledge base</span></li>
                  <li><span><b>AI voice agents</b> that answer and route business calls</span></li>
                  <li><span><b>Sales &amp; SDR agents</b> that qualify leads and book meetings</span></li>
                  <li><span><b>AI integration services</b> for CRMs, ERPs, and internal APIs</span></li>
                  <li><span><b>AI automation</b> for the repetitive work between systems</span></li>
                </ul>
                <div className="systags"><span>NetSuite</span><span>SAP</span><span>Salesforce</span><span>HubSpot</span><span>Zendesk</span></div>
                </div>
              </article>
              <article className="svc" id="svc-ai-search">
                <div>
                  <div className="svc-top"><span className="svc-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5M8.5 11h5M11 8.5v5"/></svg></span><span className="capid">SVC‑03</span></div>
                  <h3>AI Search &amp; SEO</h3>
                  <div className="aka">AI SEO services · Generative engine optimization · AEO · Ecommerce SEO</div>
                  <p className="def">AI search optimization gets your brand named and cited when buyers ask ChatGPT, Claude, Gemini, Perplexity, or Google AI Overviews what to buy, while your pages still rank in classic Google results. It's also called generative engine optimization (GEO) or answer engine optimization (AEO). Start with a free check of who AI assistants recommend in your category today.</p>
                  <div className="svc-links"><a className="btn btn-primary" href="/services/ai-seo">AI SEO services</a><a className="btn btn-ghost" href="/ai-visibility-checker">Free AI visibility check</a></div>
                </div>
                <div>
                <ul>
                  <li><span><b>AI visibility audit</b> across ChatGPT, Perplexity, and AI Overviews</span></li>
                  <li><span><b>Generative engine optimization</b> for answer-first, citable pages</span></li>
                  <li><span><b>Ecommerce SEO</b> for category and product pages</span></li>
                  <li><span><b>Technical SEO &amp; schema</b> that search engines and LLMs can parse</span></li>
                  <li><span><b>AI crawler access</b>, robots.txt, and llms.txt set up correctly</span></li>
                  <li><span><b>Local &amp; B2B SEO</b> for service areas and trade buyers</span></li>
                </ul>
                <div className="systags"><span>Google</span><span>ChatGPT</span><span>Claude</span><span>Gemini</span><span>Perplexity</span></div>
                </div>
              </article>
              <article className="svc" id="svc-web-design">
                <div>
                  <div className="svc-top"><span className="svc-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8M12 18v3"/></svg></span><span className="capid">SVC‑04</span></div>
                  <h3>Website Design &amp; Development</h3>
                  <div className="aka">Web design company · Website redesign · Web development services</div>
                  <p className="def">Custom website design and development for B2B and service businesses: planned around what your buyers need to see, built to load fast, and structured so Google and AI assistants can read it from day one. New builds and redesigns, on WordPress, Webflow, or a custom Next.js stack.</p>
                  <div className="svc-links"><a className="btn btn-primary" href="/services/web-design">Website design services</a><a className="btn btn-ghost" href="/services/website-redesign">Website redesign</a></div>
                </div>
                <div>
                <ul>
                  <li><span><b>Custom website design</b> with no templates bolted on</span></li>
                  <li><span><b>Website redesign</b> with 301 mapping that keeps your rankings</span></li>
                  <li><span><b>B2B website design</b> for long sales cycles and RFQs</span></li>
                  <li><span><b>Web development services</b> and web applications</span></li>
                  <li><span><b>Core Web Vitals</b> speed work for mobile buyers</span></li>
                  <li><span><b>Industry websites</b> for manufacturing, SaaS, legal, and healthcare</span></li>
                </ul>
                <div className="systags"><span>WordPress</span><span>Webflow</span><span>Next.js</span><span>Headless</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section className="photobreak" id="photobreak">
          <img className="kenburns" width="1536" height="540" src="/images/home/home-order-flow-panorama.webp" alt="AI-generated model of an order moving from intake through routing, inventory, a check gate, and packed shipments" loading="lazy" decoding="async" />
          <div className="caption"><span className="dot"></span>FIELD REFERENCE · ORDER TO SHIPPED</div>
        </section>

        <section className="section process" id="build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How We Build</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Audit</h3><p>What you sell, where you sell it, and what breaks between channels today.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Architect</h3><p>Platform, catalog model, and every integration mapped before any code.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Build</h3><p>Store, portal, and agents built against your real data on a short cycle.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Migrate</h3><p>Data moved with a 301 map, so rankings and order history survive cutover.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Support</h3><p>We stay after launch: monitoring, fixes, and the next channel you add.</p></div>
            </div>
            <div className="timelineAction"><a className="btn btn-primary" href="#hero">Get a commerce audit</a></div>
          </div>
        </section>

        <section className="vlog" id="work">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Selected Work</div>
              <h2>Commerce We've Designed, Built, and Launched</h2>
              <p>A few of the DTC and B2B builds behind a decade-plus of commerce work. Ask for comparable builds on a call.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">B2B WHOLESALE</span><h3>Wholesale ordering, online</h3><p>A B2B commerce build for an artificial-plants and decor wholesaler, so trade buyers place and repeat orders online instead of over email and phone.</p><div className="client">BOMBAY PETALS</div></div>
              <div className="ventry"><span className="vtag">DTC + TRADE</span><h3>One storefront for retail and trade buyers</h3><p>A storefront for an artificial plants and flowers brand that serves retail shoppers and B2B trade buyers from the same catalog.</p><div className="client">BELLE MAISON</div></div>
              <div className="ventry"><span className="vtag">AI AGENT</span><h3>Pricing computed live, not guessed</h3><p>A specialty equipment contractor needed complex retrofit pricing. We built an agent that computes every job from one rule book. Tested against a job priced by hand, it landed within a fraction of a percent, and flags any missing rate instead of guessing.</p><div className="client"><a href="/services/ai-agent-development">AI AGENT DEVELOPMENT ↗</a></div></div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">Questions Buyers Ask Before Hiring an Ecommerce Agency</h2>
                <p>Real questions, direct answers. If yours isn't here, send a short brief.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {HOME_FAQ_CATEGORIES.map((c) => <a key={c.id} href={`#${c.id}`}>{c.label}</a>)}
                </nav>
              </div>
              <HomeFaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Related</div>
            <div className="refs">
              <a href="/services/ecommerce-development">Ecommerce development services</a>
              <a href="/services/shopify-development">Shopify development</a>
              <a href="/b2b-ecommerce">B2B ecommerce portals</a>
              <a href="/services/ai-agent-development">AI agent development</a>
              <a href="/services/ai-seo">AI SEO services</a>
              <a href="/services/web-design">Website design</a>
              <a href="/blog/ecommerce-website-cost-2026">Ecommerce website cost guide</a>
              <a href="/agentic-commerce">What is agentic commerce?</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us What You Sell, and Where</h2>
              <p>We'll map your channels, catalog, and B2B into one system, and show you which work the agents can take off your team's plate. You get a fixed proposal before any work starts.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Get a commerce audit</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
