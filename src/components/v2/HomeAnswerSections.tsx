/*
 * Homepage answer sections (2026-10-04): US market cost ranges, the industry and
 * city directories, and the two AI search pieces used inside the services section.
 * Static server components. Styles: HomeExtraSections.css (imported by HomeSections).
 *
 * COST RULE: market ranges only, each with a named source. Never a FactoryJet
 * price. Every range below matches a figure already published on this site
 * (HomeFaqs.ts and the linked cost guides), so keep them in sync when one changes.
 * Source sheet: pipeline/research/MARKET-PRICE-RANGES-2026-09-30.md
 */

const COSTS = [
  { what: 'Ecommerce website, agency build', note: 'Shopify, WooCommerce, or BigCommerce', range: '$2,000 to $25,000', unit: 'one-time', source: 'Shopify and BigCommerce 2026 cost guides', href: '/blog/ecommerce-website-cost-2026', label: 'Ecommerce website cost' },
  { what: 'Custom or headless ecommerce build', note: 'Advanced integrations and custom features', range: '$25,000 to $250,000+', unit: 'one-time', source: 'BigCommerce 2026 cost guide', href: '/blog/ecommerce-website-cost-2026', label: 'Ecommerce website cost' },
  { what: 'Shopify agency rate', note: 'US and Canada', range: '$120 to $200', unit: 'per hour', source: 'CartCoders, 2026 Shopify developer cost breakdown', href: '/blog/shopify-development-cost-2026', label: 'Shopify development cost' },
  { what: 'Custom AI agent', note: 'One agent, built for your systems', range: '$5,000 to $180,000+', unit: 'one-time', source: 'ProductCrafters, 2026 pricing breakdown', href: '/blog/what-is-an-ai-agent-cost-2026', label: 'AI agent cost' },
  { what: 'AI SEO and GEO retainer', note: 'Small business', range: '$1,500 to $5,000', unit: 'per month', source: 'WebFX, May 2026 pricing guide', href: '/blog/geo-cost-small-business-2026', label: 'GEO cost' },
  { what: 'Local SEO retainer', note: 'One location or service area', range: '$500 to $3,000', unit: 'per month', source: 'WebFX, local SEO pricing', href: '/blog/local-seo-cost-2026', label: 'Local SEO cost' },
  { what: 'Small business website', note: 'Most custom professional sites', range: '$2,000 to $8,000', unit: 'one-time', source: 'FactoryJet market estimate, 2026', href: '/website-cost', label: 'Website cost' },
] as const;

export function CostAnswers() {
  return (
    <section className="section costsec" id="cost">
      <div className="wrap">
        <div className="section-head splithead">
          <div>
            <div className="eyebrow">Cost</div>
            <h2>What Does It Cost? US Market Ranges, With Sources</h2>
          </div>
          <p className="answer">These are US market ranges, each with the source that published it. They are not FactoryJet prices. Your number depends on scope, so we send a fixed proposal after a short scoping call.</p>
        </div>
        <div className="tablewrap">
          <table>
            <thead><tr><th>What you are buying</th><th>US market range</th><th>Published by</th><th>Our guide</th></tr></thead>
            <tbody>
              {COSTS.map((c) => (
                <tr key={c.what}>
                  <th>{c.what}<br /><span className="mono tableSubLabel">{c.note}</span></th>
                  <td className="range">{c.range}<small>{c.unit}</small></td>
                  <td>{c.source}</td>
                  <td><a href={c.href}>{c.label}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="srcline costnote">Third-party ranges checked against each source on 30 September 2026. The small business website range is our own market estimate. Agencies and vendors publish these figures, so treat them as a starting point for a budget, never as a quote.</p>
      </div>
    </section>
  );
}

const INDUSTRIES = [
  { href: '/ecommerce-for-manufacturers', t: 'Manufacturers and distributors', l: 'B2B portals, quoting, and ERP-connected ordering' },
  { href: '/services/manufacturing-ai-agents', t: 'Manufacturing AI agents', l: 'Quoting and ERP automation' },
  { href: '/services/healthcare-ai-agents', t: 'Healthcare AI agents', l: 'Medical receptionist agents' },
  { href: '/services/medical-website-design', t: 'Medical practices', l: 'Websites for clinics and practices' },
  { href: '/services/legal-ai-agents', t: 'Law firms: AI agents', l: 'AI intake for legal practices' },
  { href: '/services/law-firm-website-design', t: 'Law firms: websites', l: 'Website design for legal practices' },
  { href: '/services/property-management-ai-agents', t: 'Property management', l: 'AI leasing agents' },
  { href: '/services/real-estate-website-design', t: 'Real estate', l: 'Websites for agents and brokerages' },
  { href: '/services/automotive-ai-voice-agents', t: 'Automotive AI voice agents', l: 'Service booking for dealerships' },
  { href: '/services/restaurant-ai-voice-agents', t: 'Restaurant AI voice agents', l: 'Phone orders and reservations' },
  { href: '/services/chemical-pharmaceutical-ai-agents', t: 'Chemical and pharmaceutical AI agents', l: 'Batch record review and SDS authoring' },
  { href: '/services/agriculture-equipment-ai-agents', t: 'Agriculture equipment AI agents', l: 'Parts lookup and service dispatch' },
] as const;

const CITIES = [
  ['austin', 'Austin'], ['dallas', 'Dallas'], ['denver', 'Denver'], ['chicago', 'Chicago'],
  ['new-york', 'New York'], ['los-angeles', 'Los Angeles'], ['san-francisco', 'San Francisco'], ['seattle', 'Seattle'],
  ['atlanta', 'Atlanta'], ['miami', 'Miami'], ['nashville', 'Nashville'], ['portland', 'Portland'],
] as const;

export function WorkDirectory() {
  return (
    <section className="section agentdir" id="industries-cities">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Who We Work With</div>
          <h2>Industries and US Cities We Build For</h2>
          <p>We work remotely with brands across the United States. Pick your industry or your city for the detail that applies to you.</p>
        </div>
        <div className="agentdir-group">
          <div className="agentdir-label">
            <h3>By Industry</h3>
            <p>Commerce, websites, and AI agents built around how each industry sells.</p>
          </div>
          <ul className="agentdir-grid">
            {INDUSTRIES.map((i) => (
              <li key={i.href}><a href={i.href}><span className="agentdir-t">{i.t}</span><span className="agentdir-l">{i.l}</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </div>
        <div className="agentdir-group">
          <div className="agentdir-label">
            <h3>Ecommerce Development by City</h3>
            <p>Each page covers ecommerce development for brands in that city.</p>
          </div>
          <ul className="agentdir-grid citygrid">
            {CITIES.map(([slug, name]) => (
              <li key={slug}><a href={`/${slug}/ecommerce-development`}><span className="agentdir-t">{name}</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Decorative: what a cited AI answer looks like. "YourBrand" is a placeholder. */
export function AiAnswerMock() {
  return (
    <div className="aimock" aria-hidden="true">
      <div className="q">BUYER ASKS AN AI ASSISTANT · &quot;best planters for a sunny patio&quot;</div>
      <div className="a">&quot;For full sun, <b>YourBrand</b> is a common pick, with several sizes in stock.&quot;</div>
      <span className="cite">cited: yourbrand.com</span>
    </div>
  );
}

export function AiVisibilityBand() {
  return (
    <div className="aivband">
      <div>
        <div className="eyebrow">Free Tool</div>
        <h3>Does ChatGPT Recommend Your Business?</h3>
        <p>Run a free check across ChatGPT, Perplexity, and Google AI Overviews. You get an AI visibility score and the fixes in about a minute.</p>
      </div>
      <a className="btn btn-primary" href="/ai-visibility-checker">Run my free check</a>
    </div>
  );
}
