import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import { WEB_DESIGN_FAQ_CATEGORIES, WEB_DESIGN_FAQS } from './WebDesignHubFaqs';
import './AiAgentDevelopmentSections.css';
import './WebDesignHubSections.css';

/*
 * Website Design hub (/services/web-design), rebuilt 2026-09-23 in the AI Agent
 * Development page's design system. Serves the US and India with market-neutral
 * copy. No prices on this page: cost questions link to the cost guides.
 *
 * Static server component. The only client code is HeroInlineForm (lead capture
 * + step-2 details modal). The hero workflow panel animates with CSS only.
 */

export const webDesignBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Website Design & Development', url: 'https://factoryjet.com/services/web-design' },
];

const COST_GUIDE = '/blog/how-much-does-a-website-cost-small-business-usa-2026';
const REDESIGN_COST_GUIDE = '/blog/website-redesign-cost-us-small-business-2026';

function WebDesignFaqAccordion() {
  return (
    <div className="faqlist">
      {WEB_DESIGN_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {WEB_DESIGN_FAQS.filter((faq) => faq.category === category.key).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>
                {faq.answer}
                {faq.source && (
                  <>
                    {' '}
                    <a className="faqsrc" href={faq.source.url} target="_blank" rel="noopener nofollow">{faq.source.label} ↗</a>
                  </>
                )}
                {faq.link && (
                  <>
                    {' '}
                    <a className="faqsrc" href={faq.link.url}>{faq.link.label} ↗</a>
                  </>
                )}
              </p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
const DIAGRAM = { viewBox: '0 0 440 160', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 } as const;
const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export default function WebDesignHubSections() {
  return (
    <div className="aiAgentPage webDesignHub">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {webDesignBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === webDesignBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="web-design-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Website Design &amp; Development</div>
              <h1>Website Design and Development That <span className="hero-emphasis">Gets Found by Google and AI</span></h1>
              <p className="lead">FactoryJet is a web design company for B2B and service businesses. One team handles custom website design, website development, and redesigns on WordPress, Webflow, Framer, or Next.js. Every site loads fast on a phone, is structured so Google, ChatGPT, and other AI assistants can read it, and stays supported after launch. You own the site, the code, and every account.</p>
              <HeroInlineForm source="web_design_hub_inline" region="us" submitLabel="Get a website audit" />
              <p className="hero-alt">Already have a site that needs work? See <a href="/services/website-redesign">website redesign services</a>.</p>
            </div>

            <form className="specpanel" aria-label="Interactive website build workflow illustration">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>PIPELINE · BRIEF TO LIVE SITE</span>
                <span className="sys"><span>WORDPRESS</span><span>WEBFLOW</span><span>NEXT.JS</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the workflow animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause workflow animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay automatic workflow" title="Replay automatic workflow">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore workflow steps">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="build-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h6v6H4zM14 5h6M14 9h4M4 15h16M4 19h10" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Map every page to a buyer question</span>
                  <span className="tag">PLAN</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="build-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><rect x="3" y="4" width="13" height="16" rx="2" /><rect x="16" y="9" width="5" height="11" rx="1.5" /><path d="M6 8h7M6 12h4" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Design desktop &amp; mobile, you approve</span>
                  <span className="tag">DESIGN</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="build-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Build, then test speed on a real phone</span>
                  <span className="tag">BUILD</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="build-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Redirects &amp; schema checked before launch</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · no launch until every old URL has a 301 and the mobile speed report passes.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Platforms</div><div className="v">WordPress, Webflow, and custom Next.js builds. Shopify, BigCommerce, and WooCommerce when you sell online.</div></div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">The code, the design files, the domain, hosting, analytics, and Search Console. All in your name, no FactoryJet license fee.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce, and AI engagements.</div></div>
          </div>
        </div>

        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ In Plain Terms</div>
              <h2>What a Web Design Company Does, and What to Check Before You Hire One</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>A web design company plans, designs, builds, and launches your website: page structure, visual design, code, mobile layouts, speed, and SEO basics. Website design services from FactoryJet cover all of it for B2B and service businesses, plus redesigns of sites that already exist.</p></div>
                <div className="fact"><div className="sec">§02</div><p><span className="stat">53% of mobile site visits are likely to be abandoned if pages take longer than 3 seconds to load.</span> Speed is not a finishing touch. It decides whether people see your offer at all. <a href="https://blog.google/products/admanager/the-need-for-mobile-speed/" target="_blank" rel="noopener nofollow">Google, 2016 ↗</a></p></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">People form a first opinion of a web page in about 50 milliseconds</span>, before they read a word. Clear layout and a plain headline do more in that moment than any animation. <a href="https://www.tandfonline.com/doi/abs/10.1080/01449290500330448" target="_blank" rel="noopener nofollow">Lindgaard et al., 2006 ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">Google says there is no special markup needed to appear in its AI Overviews.</span> The same basics apply: pages that can be crawled and indexed, with the important content in text. A site built right for Google is most of the way to being read by AI assistants too. <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener nofollow">Google Search Central ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p>The most common way a website fails is after launch, not before. The agency goes quiet, plugins go stale, and nobody remembers which old URLs needed redirects. We build every site so your team can run it, and we stay on to support it.</p></div>
              </div>
              <div className="factphoto">
                <img width="900" height="600" src="/images/web-design-hub/web-design-page-model.webp" alt="AI-generated model of responsive website design: a white web page layout connected to a matching phone layout by a glass tube" loading="lazy" decoding="async" />
                <div className="cap">FIELD REFERENCE · ONE LAYOUT, EVERY SCREEN</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>How to Choose a Web Design Agency</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Option</th><th>What you get</th><th>Best for</th><th>Trade-off</th></tr></thead>
                <tbody>
                  <tr><th>DIY website builder<br /><span className="mono tableSubLabel">Wix, Squarespace</span></th><td>A template you set up and maintain yourself</td><td>A hobby site or a single landing page</td><td>You don&apos;t own the code, and moving off it later means a rebuild</td></tr>
                  <tr><th>Freelancer<br /><span className="mono tableSubLabel">template WordPress</span></th><td>A customized theme from one person</td><td>A simple information site on a tight budget</td><td>One person is a single point of failure. Speed and SEO depend on who you find</td></tr>
                  <tr><th>Build-and-launch agency<br /><span className="mono tableSubLabel">traditional studio</span></th><td>A custom site, then a handoff</td><td>A one-time build with an in-house team to run it</td><td>Support often ends at launch, and the domain or hosting may sit in their name</td></tr>
                  <tr className="us"><th>Website partner<br /><span className="mono tableSubLabel tableSubLabelAccent">FactoryJet</span></th><td>Custom website design planned around buyer questions, built for speed and AI search, then supported</td><td>B2B and service businesses that rely on the site for leads</td><td>Scoped on a call with a fixed proposal, so there&apos;s no instant price on the page</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">What each option costs depends on your scope. For typical ranges, see our <a href={COST_GUIDE}>US website cost guide</a> and <a href={REDESIGN_COST_GUIDE}>website redesign cost guide</a>. Wherever you are, you get a fixed proposal after a scoping call.</p>
          </div>
        </section>

        <section className="definition" id="definition">
          <div className="definition-image">
            <img width="1400" height="933" src="/images/web-design-hub/web-design-definition-model.webp" alt="AI-generated model of a white web page connected by glass tubes to a magnifying glass, a speech bubble, and a stack of index cards" loading="lazy" decoding="async" />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">AI-Ready Website</h2>
            <p>A website that search engines and AI assistants can read, understand, and quote. In practice it&apos;s good SEO done properly: the real content sits in the HTML, each page has one clear heading and a logical outline, common buyer questions get direct answers, structured data names your business and services, pages load fast, and robots.txt lets the search and AI crawlers in.</p>
            <p>There is no secret AI tag. If a vendor sells &quot;AI optimization&quot; while your pages show nothing until JavaScript runs, fix that first. Want to see where you stand today? Run the <a href="/ai-visibility-checker">free AI visibility check</a>.</p>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>Website Design and Web Development Services</h2>
            </div>
            <div className="capgrid">
              <a className="cap cap-1" href="/services/website-redesign">
                <div className="caphead"><span className="capid">CAP-01</span><svg {...CAP_ICON}><path d="M4 7h11l-3-3M20 17H9l3 3" /></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>
                  <g><rect className="diagram-surface" x="40" y="30" width="110" height="100" rx="10" /><path d="M60 55h70M60 75h45M60 95h60" /></g>
                  <path className="diagram-wire" d="M150 58h140M150 80h140M150 102h140" /><path className="diagram-wire" d="m276 46 14 12-14 12" />
                  <g><rect className="diagram-core" x="290" y="30" width="110" height="100" rx="10" /><path d="M310 55h70M310 75h70" /><path d="m323 97 8 8 15-18" /></g></svg></div>
                <h3>Website Redesign</h3>
                <p>A rebuild of the site you already have, with every URL mapped and 301 redirected so the rankings and links you earned come with you.</p>
                <div className="systags"><span>URL audit</span><span>301 map</span><span>Content migration</span></div>
              </a>
              <a className="cap cap-2" href="/services/b2b-website-design">
                <div className="caphead"><span className="capid">CAP-02</span><svg {...CAP_ICON}><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>
                  <path className="diagram-wire" d="M105 80h52m125 0h52" />
                  <g><rect className="diagram-surface" x="35" y="35" width="100" height="90" rx="10" /><circle cx="85" cy="62" r="11" /><path d="M65 99c0-24 40-24 40 0M57 112h56" /></g>
                  <g><rect className="diagram-surface" x="170" y="35" width="100" height="90" rx="10" /><circle cx="220" cy="62" r="11" /><path d="M200 99c0-24 40-24 40 0M192 112h56" /></g>
                  <g><rect className="diagram-core" x="305" y="35" width="100" height="90" rx="10" /><path d="M325 60h60M325 78h60M325 96h36" /></g></svg></div>
                <h3>B2B Website Design</h3>
                <p>Sites for long sales cycles and buying committees: clear service pages, proof, spec sheets, and RFQ forms that route straight into your CRM.</p>
                <div className="systags"><span>RFQ forms</span><span>HubSpot</span><span>Salesforce</span></div>
              </a>
              <a className="cap cap-3" href="/services/small-business-website-design">
                <div className="caphead"><span className="capid">CAP-03</span><svg {...CAP_ICON}><path d="M4 9h16l-1 11H5L4 9Z" /><path d="M4 9l2-5h12l2 5" /></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>
                  <rect className="diagram-surface" x="40" y="20" width="360" height="120" rx="10" /><path className="diagram-faint" d="M40 44h360" /><circle cx="56" cy="32" r="3" /><circle cx="68" cy="32" r="3" />
                  <rect className="diagram-surface" x="60" y="58" width="90" height="62" rx="6" /><rect className="diagram-surface" x="175" y="58" width="90" height="62" rx="6" /><rect className="diagram-core" x="290" y="58" width="90" height="62" rx="6" />
                  <path d="M75 106h40M190 106h40" /><path className="diagram-wire" d="M305 106h40" /><path d="m326 82 7 7 13-15" /></svg></div>
                <h3>Small Business Websites</h3>
                <p>A fast, professional site that makes the next step obvious: call, book, or send a form. Local search basics set up from day one.</p>
                <div className="systags"><span>Booking</span><span>Local SEO</span><span>Forms</span></div>
              </a>
              <a className="cap cap-4" href="/services/wordpress-development">
                <div className="caphead"><span className="capid">CAP-04</span><svg {...CAP_ICON}><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>
                  <path className="diagram-wire" d="M134 50h43q15 0 15 15v30q0 15 15 15h44m55 0h30V50h40" />
                  <rect className="diagram-surface" x="30" y="22" width="104" height="58" rx="10" /><path d="M48 41h68M48 55h42" />
                  <rect className="diagram-surface" x="54" y="97" width="80" height="40" rx="8" /><path d="M69 116h48" />
                  <rect className="diagram-core" x="251" y="82" width="55" height="55" rx="12" /><path d="m267 110 8 8 15-18" />
                  <rect className="diagram-surface" x="366" y="28" width="44" height="44" rx="8" /><path d="M379 50h18m-9-9v18" /></svg></div>
                <h3>WordPress Development</h3>
                <p>Custom block themes and plugins without page-builder bloat, so your team keeps the editor it knows and the site stays fast.</p>
                <div className="systags"><span>Block themes</span><span>Custom plugins</span><span>Headless WP</span></div>
              </a>
              <a className="cap cap-5" href="/services/web-application-development">
                <div className="caphead"><span className="capid">CAP-05</span><svg {...CAP_ICON}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" /></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>
                  <path className="diagram-wire" d="M90 40h58q20 0 20 20v20h104V60q0-20 20-20h58M90 120h58q20 0 20-20V80m104 0v20q0 20 20 20h58" />
                  <rect className="diagram-surface" x="46" y="24" width="44" height="32" rx="6" /><rect className="diagram-surface" x="350" y="24" width="44" height="32" rx="6" />
                  <rect className="diagram-surface" x="46" y="104" width="44" height="32" rx="6" /><rect className="diagram-surface" x="350" y="104" width="44" height="32" rx="6" />
                  <rect className="diagram-core" x="193" y="53" width="54" height="54" rx="12" /><path d="m214 69-9 11 9 11m12-22 9 11-9 11" /></svg></div>
                <h3>Web Application Development</h3>
                <p>Client portals, booking engines, dashboards, and internal tools on Next.js, connected to the systems your business already runs.</p>
                <div className="systags"><span>Next.js</span><span>APIs</span><span>Stripe</span><span>Portals</span></div>
              </a>
              <a className="cap cap-6" href="/services/ai-seo">
                <div className="caphead"><span className="capid">CAP-06</span><svg {...CAP_ICON}><path d="M3 17 9 11 13 15 21 6" /><path d="M15 6h6v6" /></svg></div>
                <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>
                  <rect className="diagram-surface" x="45" y="24" width="350" height="112" rx="10" />
                  <path className="diagram-faint" d="M65 52h310M65 80h310M65 108h310M105 40v80m76-80v80m76-80v80m76-80v80" />
                  <path className="diagram-wire" d="M65 101h38l13-31 19 42 25-63 22 35h38l15-19 18 32 24-41 17 26h61l20-18" />
                  <circle className="diagram-core" cx="375" cy="64" r="7" /></svg></div>
                <h3>Speed, SEO &amp; AI Visibility</h3>
                <p>Core Web Vitals, schema, and crawler access set up at build time, then ongoing work to get named in ChatGPT, Perplexity, and AI Overviews.</p>
                <div className="systags"><span>Core Web Vitals</span><span>Schema</span><span>llms.txt</span></div>
              </a>
            </div>
          </div>
        </section>

        <section className="section platforms" id="platforms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Platforms</div>
                <h2>Website Platforms We Build On</h2>
              </div>
              <p>WordPress runs <span className="stat">40.2% of all websites</span>, far more than any other CMS, while Webflow runs 0.8% and Framer 0.2% (<a href="https://w3techs.com/technologies/overview/content_management" target="_blank" rel="noopener nofollow">W3Techs, September 2026 ↗</a>). Popular does not mean right for you. Here is who each platform suits, what we build on it, and the honest trade-offs.</p>
            </div>
            <div className="platlist" role="list">
              <a className="plat" role="listitem" href="/services/wordpress-development">
                <span className="capid">PLT-01</span>
                <div className="plat-name"><h3>WordPress</h3><p className="pw-fit"><span className="k">Best for</span>Content teams that publish often and need events, memberships, or several languages</p></div>
                <p className="pw-build"><span className="k">What we build</span>WordPress website design on custom block themes, custom plugins, and headless WordPress. No heavy page builders, so pages stay fast and your team keeps an editor it knows.</p>
                <dl className="pw-trade">
                  <dt>Editor</dt><dd>Familiar block editor, easy for writers</dd>
                  <dt>Speed</dt><dd>Fast with a lean theme, slow when stacked with page builders and plugins</dd>
                  <dt>Cost to own</dt><dd>Open source. You pay for hosting, premium plugins, and regular updates</dd>
                  <dt>Ecosystem</dt><dd>The largest plugin and theme library of any CMS</dd>
                  <dt>Lock-in</dt><dd>Low. Move hosts or export your content any time</dd>
                </dl>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <div className="plat" role="listitem">
                <span className="capid">PLT-02</span>
                <div className="plat-name"><h3>Webflow</h3><p className="pw-fit"><span className="k">Best for</span>Marketing teams that want visual control and no plugin upkeep</p></div>
                <p className="pw-build"><span className="k">What we build</span>We work as a Webflow agency for B2B marketing sites: a clean class system, CMS collections for blogs, case studies, and resources, and forms wired to your CRM.</p>
                <dl className="pw-trade">
                  <dt>Editor</dt><dd>Visual editor, so marketers can publish without a developer</dd>
                  <dt>Speed</dt><dd>Fast by default on Webflow&apos;s managed hosting</dd>
                  <dt>Cost to own</dt><dd>A monthly Webflow hosting plan on top of the build</dd>
                  <dt>Ecosystem</dt><dd>Smaller app marketplace. Complex features often need custom code</dd>
                  <dt>Lock-in</dt><dd>Medium to high. The site lives on Webflow, and moving off usually means a rebuild</dd>
                </dl>
                <span className="plat-go" aria-hidden="true"></span>
              </div>
              <div className="plat" role="listitem">
                <span className="capid">PLT-03</span>
                <div className="plat-name"><h3>Framer</h3><p className="pw-fit"><span className="k">Best for</span>Startups and launch sites that need to look sharp and ship fast</p></div>
                <p className="pw-build"><span className="k">What we build</span>Landing pages, product launch sites, and small marketing sites with motion, when speed from design to live matters most.</p>
                <dl className="pw-trade">
                  <dt>Editor</dt><dd>Feels like a design tool. Very quick for designers, simple CMS for editors</dd>
                  <dt>Speed</dt><dd>Fast hosted pages. Heavy animation needs care on phones</dd>
                  <dt>Cost to own</dt><dd>A monthly Framer site plan on top of the build</dd>
                  <dt>Ecosystem</dt><dd>A growing set of components and plugins, with fewer integrations than WordPress</dd>
                  <dt>Lock-in</dt><dd>High. Framer hosts the site, so moving usually means a rebuild</dd>
                </dl>
                <span className="plat-go" aria-hidden="true"></span>
              </div>
              <a className="plat" role="listitem" href="/services/web-application-development">
                <span className="capid">PLT-04</span>
                <div className="plat-name"><h3>Next.js</h3><p className="pw-fit"><span className="k">Best for</span>Sites that need top speed, logins, app features, or deep integrations</p></div>
                <p className="pw-build"><span className="k">What we build</span>As a Next.js development company, we build server-rendered marketing sites, client portals, and booking flows connected to your CRM, payments, and APIs.</p>
                <dl className="pw-trade">
                  <dt>Editor</dt><dd>Needs a CMS attached so non-developers can edit (see headless below)</dd>
                  <dt>Speed</dt><dd>The fastest option when built well, with pages rendered on the server</dd>
                  <dt>Cost to own</dt><dd>Hosting is often cheap, but layout changes need a developer</dd>
                  <dt>Ecosystem</dt><dd>The full React and npm ecosystem, so almost anything can be built</dd>
                  <dt>Lock-in</dt><dd>Low. It is your code in your repository, and it runs on many hosts</dd>
                </dl>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
              <a className="plat" role="listitem" href="/services/web-application-development">
                <span className="capid">PLT-05</span>
                <div className="plat-name"><h3>Custom &amp; Headless Builds</h3><p className="pw-fit"><span className="k">Best for</span>Large content sites, several brands or regions, or content shared with an app</p></div>
                <p className="pw-build"><span className="k">What we build</span>A Next.js or Astro front end on a headless CMS such as Sanity, Contentful, or headless WordPress. Editors get a clean content editor, and the site stays very fast.</p>
                <dl className="pw-trade">
                  <dt>Editor</dt><dd>Clean, structured editing. Live page preview takes extra setup</dd>
                  <dt>Speed</dt><dd>Very fast, since pages can be built ahead of time</dd>
                  <dt>Cost to own</dt><dd>The highest build cost here. Some headless CMS plans charge per seat or by usage</dd>
                  <dt>Ecosystem</dt><dd>Pick the best tool for each job and connect them</dd>
                  <dt>Lock-in</dt><dd>Low for the front end. Your content lives with the CMS you choose</dd>
                </dl>
                <span className="plat-go" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="pw-shop">
              <div className="pw-shop-label"><span className="k">If the site sells online</span><p>A store needs checkout, catalog, and payments built in. Our ecommerce team builds on these three.</p></div>
              <ul className="pw-shopgrid">
                <li><a href="/services/shopify-development"><span className="pw-shop-t">Shopify development</span><span className="pw-shop-l">The quickest way to launch a store, with a huge app store. You pay a monthly plan plus apps.</span></a></li>
                <li><a href="/services/woocommerce-development"><span className="pw-shop-t">WooCommerce development</span><span className="pw-shop-l">A store inside WordPress. No platform license fee and full control, but you own hosting and updates.</span></a></li>
                <li><a href="/bigcommerce-development"><span className="pw-shop-t">BigCommerce development</span><span className="pw-shop-l">Strong built-in catalog and B2B features on a hosted plan, for growing and B2B brands.</span></a></li>
              </ul>
            </div>
            <div className="plat-foot">
              <span>Not sure which fits? We&apos;ll tell you on a scoping call, including when your current platform is fine.</span>
              <a href="/">See the ecommerce development hub ↗</a>
            </div>
          </div>
        </section>

        <section className="section comparison pw-compare" id="choose-platform">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>How to Choose a Website Platform</h2>
              <p>WordPress vs Webflow vs Framer is the question we hear most. Start with who will edit the site and what it has to do, then pick the platform. Every option below can rank on Google.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>If this sounds like you</th><th>Choose</th><th>Why it fits</th><th>Watch out for</th></tr></thead>
                <tbody>
                  <tr><th>You publish a lot and need plugins for events, memberships, or languages</th><td><b>WordPress</b></td><td>Familiar editor, the biggest plugin library, low lock-in</td><td>Plugin upkeep and page-builder bloat</td></tr>
                  <tr><th>Your marketing team wants to change layouts without a developer</th><td><b>Webflow</b></td><td>Visual editor, with hosting and security handled for you</td><td>A monthly plan, and moving off later means a rebuild</td></tr>
                  <tr><th>You need a sharp launch or startup site in weeks</th><td><b>Framer</b></td><td>The quickest path from design to a live site</td><td>Harder to stretch into a large, complex site</td></tr>
                  <tr><th>You need top speed, logins, or deep integrations</th><td><b>Next.js</b></td><td>Server-rendered pages, and almost any feature is possible</td><td>Layout changes need a developer</td></tr>
                  <tr><th>You run a large content site or several brands</th><td><b>Headless</b><br /><span className="mono tableSubLabel">Next.js or Astro + Sanity, Contentful, or headless WP</span></td><td>Fast pages and content you can reuse anywhere</td><td>The highest build cost and more moving parts</td></tr>
                  <tr><th>You sell products online</th><td><b>Shopify, WooCommerce, or BigCommerce</b></td><td>Checkout, catalog, and payments built in</td><td>Choose by catalog size and B2B needs</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">On SEO, the platform matters less than the build. Keep the real content in the HTML, keep pages fast, and redirect every old URL. For JavaScript sites, Google says server-side or pre-rendering is still a great idea because not all bots can run JavaScript (<a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noopener nofollow">Google Search Central</a>). More detail in the <a href="#faq-platforms">platform FAQs</a>.</p>
          </div>
        </section>

        <section className="section agentdir" id="all-web-design">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Directory</div>
              <h2>Every Website Design Page, by Service and Industry</h2>
              <p>Each page covers what that kind of website needs, what we build, and how we build it.</p>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label"><h3>By service</h3><p>The type of website work you need.</p><span className="mono agentdir-count">5 services</span></div>
              <ul className="agentdir-grid">
                <li><a href="/services/website-redesign"><span className="agentdir-t">Website Redesign</span><span className="agentdir-l">Rebuild your current site without losing rankings</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/wordpress-development"><span className="agentdir-t">WordPress Development</span><span className="agentdir-l">Custom themes, plugins, and headless WordPress</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/web-application-development"><span className="agentdir-t">Web Application Development</span><span className="agentdir-l">Portals, dashboards, and booking engines</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/b2b-website-design"><span className="agentdir-t">B2B Website Design</span><span className="agentdir-l">Long sales cycles, RFQs, and buying committees</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/small-business-website-design"><span className="agentdir-t">Small Business Website Design</span><span className="agentdir-l">Fast, professional sites built to bring in calls</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
              </ul>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label"><h3>By industry</h3><p>Sites built around one industry&apos;s buyers and rules.</p><span className="mono agentdir-count">6 industries</span></div>
              <ul className="agentdir-grid">
                <li><a href="/services/manufacturing-website-design"><span className="agentdir-t">Manufacturing</span><span className="agentdir-l">Capabilities pages, spec sheets, and RFQ capture</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/saas-website-design"><span className="agentdir-t">SaaS</span><span className="agentdir-l">Product pages, pricing, and demo requests</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/law-firm-website-design"><span className="agentdir-t">Law Firms</span><span className="agentdir-l">Practice area pages and intake that routes cases</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/real-estate-website-design"><span className="agentdir-t">Real Estate</span><span className="agentdir-l">Listings, neighborhood pages, and lead capture</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/restaurant-website-design"><span className="agentdir-t">Restaurants</span><span className="agentdir-l">Menus, reservations, and online ordering</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
                <li><a href="/services/nonprofit-website-design"><span className="agentdir-t">Nonprofits</span><span className="agentdir-l">Accessible sites with donations and donor CRM sync</span><span className="agentdir-go" aria-hidden="true">↗</span></a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="photobreak" id="photobreak">
          <img width="1536" height="614" src="/images/web-design-hub/web-design-redesign-panorama.webp" alt="AI-generated model of an older web page connected through a checkpoint with an orange button to a new web page and phone layout" loading="lazy" decoding="async" />
          <div className="caption"><span className="dot"></span>FIELD REFERENCE · OLD SITE TO NEW, EVERY URL REDIRECTED</div>
        </section>

        <section className="section process" id="build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How We Build Your Website</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Discover</h3><p>Who your buyers are, what they ask, and what the site has to make them do.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Design</h3><p>Every page type in Figma, desktop and mobile. You approve before any code.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Build</h3><p>Clean code on the right platform, with a staging link you can test on your phone.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Launch</h3><p>Redirects, schema, sitemap, and a PageSpeed report checked before we switch over.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Support</h3><p>Support from the team that built it, then a monthly plan if you want one.</p></div>
            </div>
            <div className="timelineAction"><a className="btn btn-primary" href="#hero">Get a website audit</a></div>
          </div>
        </section>

        <section className="vlog" id="work">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Selected Work</div>
              <h2>Websites We&apos;ve Designed and Built</h2>
              <p>A few live sites from our portfolio. Open them, test them, and see more on our <a href="/portfolio">portfolio page</a>.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">CORPORATE · CONSULTING</span><h3>A corporate site for an advisory firm</h3><p>A professional corporate website for a consulting and strategic advisory firm, built to explain what the firm does and make it easy for the right clients to get in touch.</p><div className="client"><a href="https://formativeconcepts.com" target="_blank" rel="noopener">FORMATIVE CONCEPTS ↗</a></div></div>
              <div className="ventry"><span className="vtag">B2B · AI CONSULTING</span><h3>A modern presence for a data consultancy</h3><p>A website for an AI and data analytics consulting firm, with a clear, modern structure for a technical B2B audience.</p><div className="client"><a href="https://mindsource.com" target="_blank" rel="noopener">MINDSOURCE ↗</a></div></div>
              <div className="ventry"><span className="vtag">SAAS</span><h3>A product site for a fleet tracking platform</h3><p>A marketing website for a GPS tracking and fleet management SaaS platform serving UK businesses.</p><div className="client"><a href="https://gpsuk.co" target="_blank" rel="noopener">GPS UK ↗</a></div></div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">Questions Buyers Ask Before Hiring a Web Design Company</h2>
                <p>Real questions, direct answers. If yours isn&apos;t here, send us a short note.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {WEB_DESIGN_FAQ_CATEGORIES.map((category) => (
                    <a key={category.id} href={`#${category.id}`}>{category.label}</a>
                  ))}
                </nav>
              </div>
              <WebDesignFaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Related</div>
            <div className="refs">
              <a href={COST_GUIDE}>How much does a website cost in the US?</a>
              <a href={REDESIGN_COST_GUIDE}>Website redesign cost guide</a>
              <a href="/blog/custom-web-development-vs-wordpress-us-small-business-2026">Custom web development vs WordPress</a>
              <a href="/blog/will-ai-replace-web-designers">Will AI replace web designers?</a>
              <a href="/services/ai-seo">AI SEO services</a>
              <a href="/ai-visibility-checker">Free AI visibility check</a>
              <a href="/">Ecommerce development hub</a>
              <a href="/portfolio">Portfolio</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us What Your Website Has to Do</h2>
              <p>Send the site you have, or the one you need. As a web design and development company, we&apos;ll tell you what&apos;s holding it back, what we&apos;d build, and how long it takes. You get a fixed proposal before any work starts, and a team that&apos;s still here after launch.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Get a website audit</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
