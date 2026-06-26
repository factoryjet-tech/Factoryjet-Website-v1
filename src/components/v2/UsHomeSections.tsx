/* UsHomeSections — static (server) sections of the /us homepage, ported
   faithfully from the approved mockup (research/mockup-us-problem-v1.html).
   All markup lives under a `.ushome` wrapper so the scoped styles in
   UsHomeSections.css apply without leaking the generic class names site-wide.
   Interactive sections (AI console, growth surfaces, final CTA) live in
   UsHomeInteractive.tsx. */

import './UsHomeSections.css';

export function ProblemSection() {
  return (
    <div className="ushome">
      <section className="problem" aria-labelledby="prob-h">
        <span className="reg tl" aria-hidden="true" />
        <span className="reg tr" aria-hidden="true" />
        <span className="reg br" aria-hidden="true" />
        <div className="wrap inner">
          <div className="head">
            <span className="lab">The fragmented-commerce tax</span>
            <h2 id="prob-h">Every channel you add comes with a <span className="hl">hidden tax</span>.</h2>
            <p className="lead">Each marketplace, storefront, and B2B portal wants its own listings, its own stock feed, its own order export. Run them as separate systems and the bill arrives as oversold stock, suppressed listings, and hours your team spends reconciling numbers by hand.</p>
          </div>

          <div className="cost" role="group" aria-label="What fragmentation costs">
            <div>
              <b>59%</b>
              <span className="desc">of retailers still run marketing, ecommerce, and service on separate systems.</span>
              <cite>Salesforce, Connected Shoppers Report, 2024</cite>
            </div>
            <div>
              <b>~2 days</b>
              <span className="desc">of the work week multichannel teams lose to manual listing, inventory, and price updates.</span>
              <cite>ChannelEngine, survey of 470 ecommerce leaders, 2025</cite>
            </div>
            <div>
              <b>~$1.7T</b>
              <span className="desc">lost across retail each year to inventory distortion, out-of-stocks and overstocks, about 6.5% of sales.</span>
              <cite>IHL Group, 2025</cite>
            </div>
          </div>

          <div className="bridge">
            <p>There is a cleaner shape for this. <span className="arrow">↓</span> One catalog, one inventory, one order engine, kept in sync by agents.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function SolutionSection() {
  return (
    <div className="ushome">
      <section className="solution" aria-labelledby="sol-h">
        <div className="wrap">
          <div className="sol-head">
            <span className="lab">The unified shape</span>
            <h2 id="sol-h">We build you one catalog, one inventory, one order engine, and the <span className="hl">agents</span> that keep them in sync.</h2>
            <p className="lead">The fix is not another tool you log into. We build one source of truth under every channel you sell through, and the agents that work on that live data.</p>
            <span className="pwr">Built on <b>Shopify, Magento, WooCommerce, or Commerceflo</b></span>
          </div>

          <div className="sol-bento">
            <article className="layer">
              <div className="lnum">// 01 · One catalog</div>
              <h3>We build it once, for every channel</h3>
              <p>Titles, images, variants, and attributes go to every channel in the exact shape it asks for: Amazon&apos;s, Walmart&apos;s, TikTok Shop&apos;s, your storefront&apos;s, your B2B price lists. Nothing gets re-keyed channel by channel.</p>
            </article>

            <article className="layer">
              <div className="lnum">// 02 · One inventory</div>
              <h3>We put every channel on one live stock count</h3>
              <p>Sell a unit anywhere and it counts down everywhere. You stop overselling, stop canceling orders you can&apos;t fill, and stop holding back stock just to feel safe.</p>
              <span className="chip"><b>~4.1%</b> of sales is what stockouts cost the average retailer <cite>IHL Group</cite></span>
            </article>

            <article className="layer">
              <div className="lnum">// 03 · One order engine</div>
              <h3>We put every order in one queue</h3>
              <p>Orders from each channel arrive in one place with one status model. Routing, fulfillment, returns, and the numbers your team reports all read from the same record, not four exports.</p>
            </article>

            <article className="layer wide">
              <div className="wtext">
                <div className="lnum">// 04 · One AI workforce</div>
                <h3>Agents we build and deploy</h3>
                <p>We build and deploy agents that list new products, fix suppressed listings, reprice, and reconcile feeds. They act on your unified data, not a stale spreadsheet, so the work your team did by hand keeps running without them.</p>
              </div>
              <div className="wchips">
                <span className="chip"><b>~2 days/wk</b> of manual ops handed back <cite>ChannelEngine, 2025</cite></span>
                <span className="chip"><b>up to ~65%</b> fewer stockout-driven lost sales with AI forecasting <cite>McKinsey</cite></span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PillarsSection() {
  return (
    <div className="ushome">
      <section className="pillars-sec" aria-labelledby="pill-h">
        <div className="wrap">
          <div className="ph-head">
            <span className="lab">Solutions</span>
            <h2 id="pill-h">Five ways we <span className="hl">build and scale</span> your commerce.</h2>
            <p className="lead">Whatever shape your commerce takes, we design, build, and implement it on one system, with agents keeping every channel in sync.</p>
          </div>

          <div className="zz">
            <article className="zrow">
              <div className="ztext">
                <div className="pk">Unified Commerce</div>
                <h3>We unify everything you sell</h3>
                <p>We design, build, and implement the system that ties your storefront, marketplaces, and B2B together, so every channel works from the same data instead of its own copy.</p>
                <div className="meta">one catalog · one inventory · one order engine · powered by Commerceflo</div>
                <div className="more">See how it works →</div>
              </div>
              <div className="zvis viz-hub" aria-hidden="true">
                <svg className="hub-svg" viewBox="0 0 280 175" preserveAspectRatio="xMidYMid meet">
                  <line x1="52" y1="40" x2="140" y2="88" /><line x1="228" y1="40" x2="140" y2="88" />
                  <line x1="52" y1="135" x2="140" y2="88" /><line x1="228" y1="135" x2="140" y2="88" />
                </svg>
                <span className="core">Unified<br />engine</span>
                <span className="vchip" style={{ top: '11%', left: '6%' }}>Store</span>
                <span className="vchip" style={{ top: '11%', right: '6%' }}>Amazon</span>
                <span className="vchip" style={{ bottom: '11%', left: '6%' }}>B2B portal</span>
                <span className="vchip" style={{ bottom: '11%', right: '6%' }}>TikTok Shop</span>
              </div>
            </article>

            <article className="zrow">
              <div className="ztext">
                <div className="pk">Marketplace Commerce</div>
                <h3>Win on the marketplaces</h3>
                <p>List, hold the Buy Box, and grow on the marketplaces that move your category.</p>
                <div className="meta">Amazon · Walmart · TikTok Shop · Etsy · eBay</div>
                <div className="more">Explore →</div>
              </div>
              <div className="zvis viz-list" aria-hidden="true">
                <div className="v-card">
                  <span className="thumb" />
                  <div><span className="t1">Best-seller SKU</span><span className="t2">$24.90</span></div>
                  <span className="vbadge">Buy Box won</span>
                </div>
                <div className="row-chips"><span className="vchip">Amazon</span><span className="vchip">Walmart</span><span className="vchip">TikTok Shop</span></div>
              </div>
            </article>

            <article className="zrow">
              <div className="ztext">
                <div className="pk">Omnichannel / DTC</div>
                <h3>Store, social, and retail in sync</h3>
                <p>Your online store, social shops, and retail floor reading the same stock and the same customer.</p>
                <div className="more">Explore →</div>
              </div>
              <div className="zvis viz-omni" aria-hidden="true">
                <div className="trio"><span className="vchip">Store</span><span className="vchip">Social</span><span className="vchip">Retail</span></div>
                <span className="arrow">↓</span>
                <span className="stock">In stock · <b>1,240</b> · everywhere</span>
              </div>
            </article>

            <article className="zrow">
              <div className="ztext">
                <div className="pk">B2B Commerce</div>
                <h3>Portals your buyers expect</h3>
                <p>Dealer and wholesale portals with tiered pricing, net terms, and fast reordering.</p>
                <div className="more">Explore →</div>
              </div>
              <div className="zvis viz-b2b" aria-hidden="true">
                <div className="table">
                  <div className="trow"><span>1–9 units</span><b>$20.00</b></div>
                  <div className="trow"><span>10–49 units</span><b>$18.00</b></div>
                  <div className="trow"><span>50+ units</span><b>$15.00</b></div>
                </div>
                <span className="vbadge">Net 30 terms</span>
              </div>
            </article>

            <article className="zrow accent">
              <div className="ztext">
                <div className="pk">Commerce AI Agents</div>
                <h3>Agents that act, not just suggest</h3>
                <p>Agents we build and deploy that list, sync, reprice, and fix issues across every channel, working on your live data.</p>
                <div className="more">Meet the agents →</div>
              </div>
              <div className="zvis viz-feed" aria-hidden="true">
                <div className="feed">
                  <div className="frow"><span className="sdot" /><span className="fa">Listing</span><span className="ft">fixed 3 suppressed listings</span><span className="fm">2s</span></div>
                  <div className="frow"><span className="sdot" /><span className="fa">Repricer</span><span className="ft">matched Buy Box · 12 SKUs</span><span className="fm">9s</span></div>
                  <div className="frow"><span className="sdot" /><span className="fa">Inventory</span><span className="ft">synced stock to 5 channels</span><span className="fm">31s</span></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ComparisonSection() {
  return (
    <div className="ushome">
      <section className="cmp-sec" aria-labelledby="cmp-h">
        <div className="wrap">
          <div className="cmp-head">
            <span className="lab">The difference</span>
            <h2 id="cmp-h">A pile of tools, or <span className="hl">a partner who builds and implements it</span>.</h2>
            <p className="lead">Most brands buy a tool for each job and babysit every one. FactoryJet is the omnichannel commerce solutions agency that consults, builds, implements, and scales one unified system on your platform, so DTC and B2B work together across every channel.</p>
          </div>

          <div className="cmp-split">
            <div className="cmp-panel cmp-bad">
              <div className="cmp-plabel">Do it yourself with a disconnected stack</div>
              <div className="cmp-chaos" aria-hidden="true">
                <span className="ctool r1">Listing tool</span>
                <span className="ctool r2">Repricer</span>
                <span className="ctool">Inventory app</span>
                <span className="ctool r3">Spreadsheet</span>
                <span className="ctool r1">Channel exporter</span>
                <span className="ctool">Helpdesk</span>
                <span className="cwarn">Stock: 12</span>
                <span className="cwarn">Stock: 7 ?</span>
                <span className="cwarn blink">✕ oversold</span>
              </div>
              <div className="cmp-pnote">6 tools · 4 logins · and it is all on you</div>
            </div>

            <div className="cmp-panel cmp-good">
              <div className="cmp-plabel good">Bring in FactoryJet, your commerce partner</div>
              <div className="cmp-calm" aria-hidden="true">
                <div className="cmp-core">Your<br />unified<br />system</div>
                <div className="agents">consult · build · implement · scale</div>
                <div className="cmp-plats">
                  <span className="cmp-plat">Shopify Plus</span>
                  <span className="cmp-plat">Adobe Commerce</span>
                  <span className="cmp-plat">WooCommerce</span>
                  <span className="cmp-plat">Magento</span>
                  <span className="cmp-plat flo">Commerceflo</span>
                </div>
              </div>
              <div className="cmp-pnote good">DTC + B2B, omnichannel, built and implemented on your platform</div>
            </div>
          </div>

          <div className="cmp-table">
            <div className="cmp-row cmp-hrow">
              <div className="cmp-dim">&nbsp;</div>
              <div className="cmp-bad-cell">A disconnected stack</div>
              <div className="cmp-good-cell">FactoryJet, your commerce partner</div>
            </div>
            <div className="cmp-row">
              <div className="cmp-dim">Who runs it</div>
              <div className="cmp-bad-cell"><span className="x">✕</span>You wire up the tools and babysit them</div>
              <div className="cmp-good-cell"><span className="c">✓</span>A partner who consults, builds, implements, and scales it</div>
            </div>
            <div className="cmp-row">
              <div className="cmp-dim">Your platform</div>
              <div className="cmp-bad-cell"><span className="x">✕</span>Locked into whatever each tool happens to support</div>
              <div className="cmp-good-cell"><span className="c">✓</span>Expert build on Shopify, Shopify Plus, Magento, WooCommerce, or Commerceflo</div>
            </div>
            <div className="cmp-row">
              <div className="cmp-dim">DTC and B2B</div>
              <div className="cmp-bad-cell"><span className="x">✕</span>Separate setups that never reconcile</div>
              <div className="cmp-good-cell"><span className="c">✓</span>DTC and B2B running on one unified system</div>
            </div>
            <div className="cmp-row">
              <div className="cmp-dim">Inventory across channels</div>
              <div className="cmp-bad-cell"><span className="x">✕</span>Each tool keeps its own count, so you oversell</div>
              <div className="cmp-good-cell"><span className="c">✓</span>One live count every channel reads</div>
            </div>
            <div className="cmp-row">
              <div className="cmp-dim">Listings &amp; pricing</div>
              <div className="cmp-bad-cell"><span className="x">✕</span>Re-keyed by hand, and you miss the Buy Box</div>
              <div className="cmp-good-cell"><span className="c">✓</span>Agents we build list and reprice for you</div>
            </div>
            <div className="cmp-row">
              <div className="cmp-dim">Your team&apos;s week</div>
              <div className="cmp-bad-cell"><span className="x">✕</span>Spent babysitting tools and spreadsheets</div>
              <div className="cmp-good-cell"><span className="c">✓</span>Spent on the business, not the busywork</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ProofSection() {
  return (
    <div className="ushome">
      <section className="pf-sec" aria-labelledby="pf-h">
        <div className="wrap">
          <div className="pf-head">
            <span className="lab">Select client work</span>
            <h2 id="pf-h">Brands we&apos;ve built and <span className="hl">run commerce</span> for.</h2>
            <p className="lead">A few of the DTC and B2B brands we have designed, built, and launched commerce for, drawing on a decade-plus of commerce work:</p>
          </div>

          <div className="pf-stack">
            <div className="pf-sub">
              <article className="pf-card">
                <div className="pf-kicker">Bombay Petals · B2B</div>
                <h3 className="pf-name">Wholesale ordering, online</h3>
                <p className="pf-built">A B2B commerce build for an artificial-plants and decor wholesaler, so trade buyers place and repeat orders online instead of over email and phone.</p>
                <div className="pf-tags"><span className="ptag">B2B / wholesale</span><span className="ptag">Trade reordering</span><span className="ptag">Tiered pricing</span><span className="ptag">Artificial plants &amp; decor</span></div>
                <div className="pf-facts">
                  <div className="pf-fact"><b>Online</b><span>trade reordering</span></div>
                  <div className="pf-fact"><b>Tiered</b><span>wholesale pricing</span></div>
                </div>
              </article>
              <article className="pf-card">
                <div className="pf-kicker">Belle Maison · DTC</div>
                <h3 className="pf-name">A DTC store built to convert and scale</h3>
                <p className="pf-built">A direct-to-consumer storefront for an artificial plants and flowers brand, built to convert shoppers and scale its catalog across channels.</p>
                <div className="pf-tags"><span className="ptag">DTC</span><span className="ptag">Storefront build</span><span className="ptag">Multi-channel ready</span><span className="ptag">Home &amp; decor</span></div>
                <div className="pf-facts">
                  <div className="pf-fact"><b>DTC</b><span>storefront build</span></div>
                  <div className="pf-fact"><b>Multi-channel</b><span>ready catalog</span></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
