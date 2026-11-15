import LeadFormInline from '@/components/LeadFormInline';
import { HOME_FAQS } from './HomeFaqs';
import MobileStickyBar from './MobileStickyBar';
import './AiAgentDevelopmentSections.css';
import './HomeSections.css';
import './HomeExtraSections.css';

/*
 * Homepage. Rebuilt 2026-11-15 as a short page for one buyer (mid-market DTC and
 * B2B brands, $20K+ store and integration projects) and one offer (commerce audit).
 * Research: docs/reports/2026-11-15-homepage-competitor-research.md (gitignored).
 * The 2026-10-04 sections (problem stats, unified commerce, agent catalog, web
 * design, AI search, city directory) were cut; they live in git history and the
 * service pages already cover them.
 *
 * Static server component. Client code: LeadFormInline and MobileStickyBar.
 * Claims rule: no metrics next to a client name; GPSUK is Commerceflo, Sow Easy is
 * WooCommerce + Odoo, Mannik is WooCommerce (never Shopify). Costs are sourced
 * market ranges only (pipeline/research/MARKET-PRICE-RANGES-2026-09-30.md).
 */

function HomeFaqAccordion() {
  return (
    <div className="faqlist">
      {HOME_FAQS.map((faq) => (
        <details className="faqitem" data-faq-item key={faq.id}>
          <summary data-faq-question>
            <span className="qid">{faq.id}</span>
            <span className="qtext">{faq.question}</span>
            <span className="chev" aria-hidden="true">+</span>
          </summary>
          <p className="ans" data-faq-answer>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

const STORES = [
  { client: 'Exaco', system: 'Shopify + QuickBooks Enterprise', image: '/clients/screens/european-garden.webp', alt: 'European Garden Shopify store homepage, built for Exaco', href: 'https://europeangarden.com', external: true },
  { client: 'GPSUK', system: 'B2B store on Commerceflo', image: '/clients/screens/gpsuk.webp', alt: 'GPSUK promotional products trade store on Commerceflo', href: '/case-studies/gpsuk-promotional-products', external: false },
  { client: 'DTF Virginia', system: 'Shopify', image: '/clients/screens/dtf-virginia.webp', alt: 'DTF Virginia Shopify store homepage', href: 'https://dtfvirginia.com', external: true },
  { client: 'Mannik', system: 'WooCommerce', image: '/clients/screens/mannik.webp', alt: 'Mannik WooCommerce store homepage', href: 'https://mannik.co.uk', external: true },
  { client: 'Shop Holistico', system: 'Shopify', image: '/clients/screens/shopholistico.webp', alt: 'Shop Holistico Shopify store homepage', href: '/case-studies/shopholistico-shopify-store', external: false },
  { client: 'MUE Wholesale', system: 'Wholesale store', image: '/clients/screens/mue-wholesale.webp', alt: 'MUE Wholesale store homepage for MakeUp Eraser', href: 'https://muewholesale.com', external: true },
] as const;

const CASES = [
  {
    client: 'Exaco',
    from: 'Shopify', to: 'QuickBooks Enterprise',
    status: 'LIVE · EUROPEAN GARDEN BRAND',
    summary: 'A new Shopify store for the European Garden brand, connected to QuickBooks Enterprise. Before Exaco signed, we built a draft theme inside its own Shopify store. The store and the QuickBooks link are both live.',
    href: 'https://europeangarden.com', linkLabel: 'Visit the live store', external: true,
  },
  {
    client: 'Sow Easy',
    from: 'WooCommerce', to: 'Odoo',
    status: 'BUILD IN PROGRESS · STAGING',
    summary: 'A trade store for a B2B distributor that reads stock, pricing and SKUs from Odoo, so a change made in Odoo shows on the site without anyone retyping it. Being tested on staging before launch.',
    href: '/case-studies/sow-easy-distributor-portal', linkLabel: 'Read the case study', external: false,
  },
  {
    client: 'GPSUK',
    from: 'Quote', to: 'Order',
    status: 'LIVE · B2B STOREFRONT',
    summary: 'A trade storefront where business buyers log in, see their own account prices, and move from quote to order without retyping.',
    href: '/case-studies/gpsuk-promotional-products', linkLabel: 'Read the case study', external: false,
  },
] as const;

const COSTS = [
  { what: 'Store with custom design and integrations', note: 'Small to mid-sized business', range: '$5,000 to $25,000', source: 'BigCommerce, ecommerce cost guide', href: '/blog/ecommerce-website-cost-2026', label: 'Ecommerce website cost' },
  { what: 'Custom build with advanced integrations', note: 'Mid-market and enterprise, advanced integrations', range: '$25,000 to $250,000+', source: 'BigCommerce, ecommerce cost guide', href: '/blog/ecommerce-website-cost-2026', label: 'Ecommerce website cost' },
  { what: 'Website redesign by an agency', note: 'Agency range; freelancers charge less', range: '$5,000 to $75,000', source: 'WebFX, website redesign pricing (May 2026)', href: '/services/website-redesign', label: 'Website redesign' },
  { what: 'Custom AI agent', note: 'One agent, built for your systems', range: '$5,000 to $180,000+', source: 'ProductCrafters, 2026 pricing breakdown', href: '/blog/what-is-an-ai-agent-cost-2026', label: 'AI agent cost' },
] as const;

export default function HomeSections() {
  return (
    <div className="aiAgentPage homePage">
      <main id="home-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Ecommerce Development · AI Agents</div>
              <h1>Ecommerce Development <span className="hero-emphasis">Connected to Your ERP and Accounting.</span></h1>
              <p className="lead">We build Shopify and WooCommerce stores and B2B portals for DTC and B2B brands, connect them to QuickBooks, NetSuite or Odoo, and add AI agents for the repeat work, such as turning emailed purchase orders into sales orders.</p>
              <div className="actions" id="home-hero-cta">
                <a className="btn btn-primary" href="#get-audit">Get a commerce audit</a>
                <a className="btn btn-ghost" href="#work">See our work</a>
              </div>
              <p className="hero-trust">We reply within 24 hours. No sales pressure.</p>
              <aside className="hero-proof" aria-label="Selected FactoryJet clients and track record">
                <p><strong>500+ businesses served</strong> across web, commerce and AI engagements.</p>
                <div className="proof-brands" aria-label="Selected clients">
                  <span><b>Exaco</b>Shopify + QuickBooks</span>
                  <span><b>Sow Easy</b>WooCommerce + Odoo</span>
                  <span><b>GPSUK</b>B2B on Commerceflo</span>
                  <span><b>DTF Virginia</b>Shopify store</span>
                </div>
              </aside>
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
                  <input className="workflow-select" type="radio" name="order-step" value="1" aria-describedby="workflow-detail-1" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h2l2.2 10.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L19.5 8H6.2M9 20h.01M17 20h.01"/></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Order lands from any channel</span>
                  <span className="tag">READ</span>
                  <span className="workflow-detail" id="workflow-detail-1">Channel webhooks normalize each order into one shared queue with its source and customer context intact.</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="order-step" value="2" aria-describedby="workflow-detail-2" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7l8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10"/></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Check one live stock count</span>
                  <span className="tag">VERIFY</span>
                  <span className="workflow-detail" id="workflow-detail-2">The workflow checks the live inventory source before allocation, so every channel works from the same available count.</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="order-step" value="3" aria-describedby="workflow-detail-3" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h6m0 0 4-6h6M10 12l4 6h6M10 12h10"/></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Update every channel &amp; route to fulfillment</span>
                  <span className="tag">WRITE</span>
                  <span className="workflow-detail" id="workflow-detail-3">Confirmed stock is reserved, channel counts are updated, and the order is routed to the correct warehouse or 3PL.</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="order-step" value="4" aria-describedby="workflow-detail-4" />
                  <span className="workflow-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6"/></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Exceptions go to your team</span>
                  <span className="tag">HOLD</span>
                  <span className="workflow-detail" id="workflow-detail-4">Mismatches and policy exceptions pause safely with the evidence your team needs to approve or correct them.</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · if stock doesn't reconcile, the order is flagged, never oversold.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell ledger-platforms">
              <div className="k">Platforms</div>
              <nav className="platform-pills" aria-label="Ecommerce platform services">
                <a href="/services/shopify-development">Shopify &amp; Plus</a>
                <a href="/services/magento-development">Adobe Commerce (Magento)</a>
                <a href="/bigcommerce-development">BigCommerce</a>
                <a href="/services/woocommerce-development">WooCommerce</a>
                <a href="/services/ai-agent-development">AI Commerce Agents</a>
              </nav>
            </div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">Everything we build: the store, the integrations, the agents. No FactoryJet subscription.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce, and AI engagements.</div></div>
          </div>
        </div>

        <section className="section stores" id="stores">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Client Stores</div>
              <h2>Client Stores You Can Visit Today</h2>
              <p>Each one is live. Open it, then judge the work yourself.</p>
            </div>
            <ul className="storegrid">
              {STORES.map((s) => (
                <li className="storecard" key={s.client}>
                  <a href={s.href} target={s.external ? '_blank' : undefined} rel={s.external ? 'noopener' : undefined}>
                    <span className="storeshot"><img width="1440" height="900" src={s.image} alt={s.alt} loading="lazy" decoding="async" /></span>
                    <span className="storemeta"><b>{s.client}</b><span>{s.system}</span></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Case Studies</div>
              <h2>Stores and the Systems Behind Them</h2>
              <p>Three projects, each with the platform and what it connects to. Where a build is still in progress, we say so.</p>
            </div>
            <div className="casegrid">
              {CASES.map((c) => (
                <article className="casecard" key={c.client}>
                  <div className="casesys" aria-label={`${c.from} to ${c.to}`}>
                    <span>{c.from}</span><span className="casewire" aria-hidden="true"></span><span>{c.to}</span>
                  </div>
                  <span className="vtag">{c.status}</span>
                  <h3>{c.client}</h3>
                  <p>{c.summary}</p>
                  <a className="caselink" href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener' : undefined}>{c.linkLabel} <span aria-hidden="true">{c.external ? '↗' : '→'}</span></a>
                </article>
              ))}
            </div>
            <p className="workmore"><a href="/case-studies">See all case studies <span aria-hidden="true">→</span></a></p>
          </div>
        </section>

        <section className="section build" id="build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What We Build</div>
              <h2>Ecommerce Development Services</h2>
              <p>Three kinds of project we build. AI agents and AI search sit on top once the store and its data are right.</p>
            </div>
            <div className="buildgrid">
              <a className="buildcard" href="/services/ecommerce-development">
                <span className="capid">01</span>
                <h3>New Store or Redesign</h3>
                <p>Shopify, Shopify Plus and WooCommerce stores built for speed and checkout, including migrations from another platform with a full redirect map.</p>
                <div className="systags"><span>Shopify</span><span>Shopify Plus</span><span>WooCommerce</span><span>Migration</span></div>
              </a>
              <a className="buildcard" href="/b2b-ecommerce">
                <span className="capid">02</span>
                <h3>B2B Ordering Portal</h3>
                <p>Trade buyers log in to see their own prices and terms, request quotes and reorder, on the same catalog as your retail store.</p>
                <div className="systags"><span>Account pricing</span><span>Net terms</span><span>Quotes</span></div>
              </a>
              <a className="buildcard buildcard-key" href="/services/ecommerce-erp-integration">
                <span className="capid">03</span>
                <h3>Store to ERP and Accounting</h3>
                <p>Orders, stock, customers and invoices kept in step between your store and QuickBooks, NetSuite or Odoo, so nobody retypes an order.</p>
                <div className="systags"><span>QuickBooks</span><span>NetSuite</span><span>Odoo</span><span>HubSpot</span></div>
              </a>
            </div>
            <div className="buildaddons">
              <p><b>On top:</b> <a href="/services/ai-agent-development">AI agents</a> that turn emailed purchase orders and RFQs into draft orders and quotes for your team to approve, and <a href="/services/ai-seo">AI search work</a> so ChatGPT and Google can read your catalog.</p>
              <nav className="buildlinks" aria-label="Integration and AI agent pages">
                <a href="/services/shopify-quickbooks-integration">Shopify + QuickBooks</a>
                <a href="/services/wordpress-shopify-integration">WordPress + Shopify</a>
                <a href="/services/shopify-hubspot-integration">Shopify + HubSpot</a>
                <a href="/services/shopify-edi-integration">Shopify EDI</a>
                <a href="/services/netsuite-ai-agents">NetSuite AI agents</a>
                <a href="/services/odoo-ai-agents">Odoo AI agents</a>
                <a href="/services/erp-ai-agents">ERP AI agents</a>
              </nav>
            </div>
          </div>
        </section>

        <section className="section terms" id="how-we-work">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How a Project Runs</div>
              <h2>You See It Work Before You Sign</h2>
            </div>
            <div className="termgrid">
              <div className="term"><span className="idx">01</span><h3>Demo before you sign</h3><p>For a store, we set up a draft theme in your own store. For an AI agent, we build a demo that runs on your sample files, so you can check it against a job you have already done by hand.</p></div>
              <div className="term"><span className="idx">02</span><h3>Fixed price per phase</h3><p>Each phase is scoped, priced and signed on its own. You never sign one large open-ended contract.</p></div>
              <div className="term"><span className="idx">03</span><h3>Defect cover</h3><p>Defects are fixed inside the build price for a cover period agreed before work starts.</p></div>
              <div className="term"><span className="idx">04</span><h3>You own it</h3><p>On Shopify and WooCommerce builds, the code, the repository and the store sit in your name from day one. There is no FactoryJet subscription. Support after launch is optional, and each change is quoted and approved.</p></div>
            </div>
            <div className="midband">
              <div>
                <h3>Start With a Commerce Audit</h3>
                <p>Send your store and the systems it should talk to. The founder replies within 24 hours.</p>
              </div>
              <a className="btn btn-primary" href="#get-audit">Get a commerce audit</a>
            </div>
          </div>
        </section>

        <section className="section founder" id="founder">
          <div className="wrap founderwrap">
            <img className="founderphoto" width="1024" height="1536" src="/images/team/bhavesh-barot.webp" alt="Bhavesh Barot, founder of FactoryJet" loading="lazy" decoding="async" />
            <div>
              <div className="eyebrow">Who You Work With</div>
              <h2>Bhavesh Barot, Founder</h2>
              <p>FactoryJet has built websites, stores and software since 2014, for more than 500 businesses. Every enquiry goes to Bhavesh, who reads the brief and replies within 24 hours.</p>
              <a className="founderlink" href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/" target="_blank" rel="noopener">Bhavesh on LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section costsec" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Cost</div>
              <h2>What Projects Like These Cost: US Market Ranges</h2>
              <p className="answer">These ranges come from the sources named in each row. They are not FactoryJet prices. Your number depends on scope, so you get a fixed proposal for each phase after a short scoping call.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>What you are buying</th><th>US market range</th><th>Published by</th><th>Guide</th></tr></thead>
                <tbody>
                  {COSTS.map((c) => (
                    <tr key={c.what}>
                      <th>{c.what}<br /><span className="mono tableSubLabel">{c.note}</span></th>
                      <td className="range">{c.range}<small>one-time</small></td>
                      <td>{c.source}</td>
                      <td><a href={c.href}>{c.label}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="srcline costnote">Ranges checked against each source on 30 September 2026. Vendors and agencies publish these figures, so treat them as a starting point for a budget, not a quote.</p>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">Questions Buyers Ask Before Hiring an Ecommerce Development Company</h2>
                <p>Direct answers. If yours isn't here, send a short brief.</p>
              </div>
              <HomeFaqAccordion />
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us What You Sell, and What It Should Connect To</h2>
              <p>Send your store and your systems. The founder replies within 24 hours, and you get a fixed proposal for each phase before any work starts.</p>
            </div>
            <div className="finalcta-form" id="get-audit">
              <LeadFormInline
                source="us_home_form"
                region="us"
                heading="Get a commerce audit"
                headingAlign="left"
                subheading="A few details so we can prepare. We reply within 24 hours."
                requireContactDetails
              />
            </div>
          </div>
        </section>
      </main>
      <MobileStickyBar targetId="home-hero-cta" scrollToId="get-audit" />
    </div>
  );
}
