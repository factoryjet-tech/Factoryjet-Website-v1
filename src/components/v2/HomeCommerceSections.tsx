/*
 * Homepage commerce sections (2026-10-04): the fragmented-commerce problem, the
 * unified layers, the stack-versus-system illustration, and the integration map.
 * Static server components. Styles: HomeExtraSections.css (imported by HomeSections).
 *
 * Every number in ProblemTax was read on the linked page on 2026-10-04:
 *   36% / 1.8 days / 470 respondents: ChannelEngine "automation or stagnation" post
 *   52% / six marketplaces: ChannelEngine "state of marketplace selling" post
 *   $1.7 trillion: IHL Group figure as reported by Total Retail (IHL's own site
 *   and Chain Store Age block automated fetches, so IHL's "6.5% of sales" share
 *   could not be read first-hand and is left out).
 * The old homepage's "59% of retailers" (Salesforce) figure could not be found
 * in the report it named, so it was not brought back.
 */

export function ProblemTax() {
  return (
    <section className="section taxsec" id="problem">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The Fragmented-Commerce Tax</div>
          <h2>Every Sales Channel You Add Comes With a Hidden Tax</h2>
          <p className="answer">Each marketplace, storefront, and B2B portal wants its own listings, its own stock feed, and its own order export. Run them as separate systems and the bill arrives as oversold stock, suppressed listings, and hours spent matching numbers by hand.</p>
        </div>
        <div className="taxgrid">
          <div className="taxcard big">
            <div>
              <div className="taxnum">1.8<small>days a week</small></div>
              <p>Marketplace sellers lose 36% of the working week to manual tasks: updating listings, fixing errors, and adjusting prices.</p>
              <div className="weekbar" aria-hidden="true">
                <span className="lost" data-day="MON"></span>
                <span className="lost part" data-day="TUE"></span>
                <span data-day="WED"></span>
                <span data-day="THU"></span>
                <span data-day="FRI"></span>
              </div>
            </div>
            <div className="srcline">Source: <a href="https://www.channelengine.com/en/blog/automation-or-stagnation-hidden-cost-of-manual-marketplace-work" target="_blank" rel="noopener nofollow">ChannelEngine, Marketplace Seller Trends Report 2025 ↗</a>, a survey of 470 marketplace decision makers in the US and Europe.</div>
          </div>
          <div className="taxcard">
            <div className="taxnum">52%</div>
            <p>of marketplace sellers still rely on spreadsheets or internal tools for listings and inventory, while selling on six marketplaces on average.</p>
            <div className="srcline">Source: <a href="https://www.channelengine.com/en/blog/state-of-marketplace-selling-channelengine-report" target="_blank" rel="noopener nofollow">ChannelEngine, same 2025 survey ↗</a></div>
          </div>
          <div className="taxcard">
            <div className="taxnum">$1.7T</div>
            <p>is lost across retail worldwide each year to out-of-stocks and overstocks, according to IHL Group.</p>
            <div className="srcline">Source: IHL Group, as reported by <a href="https://www.mytotalretail.com/article/how-retailers-can-overcome-the-1-7-trillion-inventory-distortion-problem/" target="_blank" rel="noopener nofollow">Total Retail, March 2025 ↗</a></div>
          </div>
        </div>
        <div className="taxbridge">
          <p>The cleaner shape is one catalog, one inventory, and one order engine, with agents keeping every channel in sync.</p>
          <a href="#layers">See what we build under every channel ↓</a>
        </div>
      </div>
    </section>
  );
}

export function UnifiedLayers() {
  return (
    <section className="section layers" id="layers">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What We Build</div>
          <h2>One Catalog, One Inventory, One Order Engine Under Every Channel</h2>
          <p className="answer">The fix is one source of truth that every channel reads, built on the platform you already run or the one that fits you better. We build it on Shopify, Adobe Commerce (Magento), BigCommerce, WooCommerce, or Commerceflo.</p>
        </div>
        <div className="layergrid">
          <article className="layer">
            <span className="layer-n">LAYER 01 · ONE CATALOG</span>
            <h3>Built Once, Shaped for Every Channel</h3>
            <p>Titles, images, variants, and attributes go to each channel in the exact shape it asks for. Nobody types the same product into five systems.</p>
            <div className="layer-viz" aria-hidden="true">
              <span className="chip core">1 product record</span><span className="viz-arrow">→</span>
              <span className="chip">Your store</span><span className="chip">Amazon</span><span className="chip">Walmart</span><span className="chip">TikTok Shop</span><span className="chip">B2B price list</span>
            </div>
          </article>
          <article className="layer">
            <span className="layer-n">LAYER 02 · ONE INVENTORY</span>
            <h3>Every Channel Reads One Live Count</h3>
            <p>Sell a unit anywhere and it counts down everywhere, so you stop canceling orders you can&apos;t fill.</p>
            <div className="layer-viz" aria-hidden="true">
              <span className="chip ok">Store · 12</span><span className="chip ok">Amazon · 12</span><span className="chip ok">B2B · 12</span>
            </div>
          </article>
          <article className="layer">
            <span className="layer-n">LAYER 03 · ONE ORDER ENGINE</span>
            <h3>Every Order in One Queue</h3>
            <p>Orders from each channel land in one place with one status model. Routing, fulfillment, and returns all read the same record.</p>
            <div className="layer-viz" aria-hidden="true">
              <span className="chip">5 channels</span><span className="viz-arrow">→</span><span className="chip core">1 order queue</span><span className="viz-arrow">→</span><span className="chip">Warehouse or 3PL</span>
            </div>
          </article>
          <article className="layer">
            <span className="layer-n">LAYER 04 · AGENTS ON TOP</span>
            <h3>AI Agents That Work on the Live Data</h3>
            <p>Agents list new products, fix suppressed listings, reprice inside your limits, and reconcile feeds. They act on the unified record, and they hand anything unusual to your team.</p>
            <div className="layer-viz" aria-hidden="true">
              <span className="chip core">Listing agent</span><span className="chip core">Pricing agent</span><span className="chip core">Inventory agent</span><span className="chip">Exceptions → your team</span>
            </div>
            <a className="more" href="#ai-agents">See the AI agents we build ↓</a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* Decorative: the comparison table below carries the same content in text. */
export function StackVsSystem() {
  return (
    <div className="stackvs" aria-hidden="true">
      <div className="svpanel chaos">
        <div className="svlabel">A stack of apps</div>
        <div className="svtools">
          <span className="chip">Listing tool</span><span className="chip">Repricer</span><span className="chip">Inventory app</span>
          <span className="chip">Spreadsheet</span><span className="chip">Channel exporter</span><span className="chip">Helpdesk</span>
        </div>
        <div className="svcounts">
          <span className="chip">Store · stock 12</span><span className="chip">Amazon · stock 7</span><span className="chip bad">Walmart · oversold</span>
        </div>
        <div className="svnote">Six tools, four logins, three different stock counts.</div>
      </div>
      <div className="svpanel calm">
        <div className="svlabel">One system</div>
        <div className="svhub">One catalog · one inventory · one order queue</div>
        <div className="svcounts">
          <span className="chip ok">Store · stock 12</span><span className="chip ok">Amazon · stock 12</span><span className="chip ok">Walmart · stock 12</span><span className="chip ok">B2B portal · stock 12</span>
        </div>
        <div className="svnote">Every channel reads the same number.</div>
      </div>
    </div>
  );
}

export function IntegrationMap() {
  return (
    <section className="section integrations" id="integrations">
      <div className="wrap">
        <div className="section-head splithead">
          <div>
            <div className="eyebrow">Integrations</div>
            <h2>Your Store, Your Books, and Your Warehouse as One Project</h2>
          </div>
          <p className="answer">Ecommerce integration connects your store to the systems behind it, so an order, a stock count, or a refund is entered once and shows up everywhere. We connect Shopify, Adobe Commerce, BigCommerce, and WooCommerce stores to accounting, ERP, fulfillment, and support tools, and we scope the store and its back office as one project with one owner.</p>
        </div>
        <div className="imap">
          <div className="imap-col">
            <div className="imap-k">Where you sell</div>
            <div className="imap-node">Your store<span>Shopify · Adobe Commerce · BigCommerce · WooCommerce</span></div>
            <div className="imap-node">Marketplaces<span>Amazon · Walmart · TikTok Shop</span></div>
            <div className="imap-node">B2B portal<span>Price lists · net terms · reorders</span></div>
          </div>
          <div className="imap-hub">
            <div className="imap-core">
              <span className="k">The layer we build</span>
              <strong>One order and inventory record</strong>
              <em>Entered once. Read by every system on both sides.</em>
            </div>
          </div>
          <div className="imap-col">
            <div className="imap-k">What runs the business</div>
            <div className="imap-node">Accounting<span>QuickBooks · Xero</span></div>
            <div className="imap-node">ERP<span>NetSuite · SAP Business One · Odoo · Microsoft Dynamics</span></div>
            <div className="imap-node">Fulfillment and point of sale<span>ShipStation · ShipBob · your 3PL · Shopify POS · Square</span></div>
            <div className="imap-node">Support and CRM<span>Zendesk · Gorgias · HubSpot · Salesforce</span></div>
          </div>
        </div>
        <div className="flows">
          <div className="flow"><div className="k">STORE → ACCOUNTING</div><p>Orders, customers, payments, and refunds post to QuickBooks or Xero without anyone re-keying them.</p></div>
          <div className="flow"><div className="k">ERP → EVERY CHANNEL</div><p>One stock count updates your store and each marketplace after every sale.</p></div>
          <div className="flow"><div className="k">STORE → FULFILLMENT</div><p>Paid orders go to ShipStation, ShipBob, or your 3PL with the right shipping rule attached.</p></div>
          <div className="flow"><div className="k">STORE → SUPPORT</div><p>Your support desk sees order status and tracking beside the ticket.</p></div>
        </div>
        <div className="sectionfoot">
          <span>Example: a store that is built but not ready to launch, and accounting software that should hold the one true inventory count. We scope that as one project in phases: launch first, then the integration.</span>
          <span className="linkrow">
            <a href="/services/ecommerce-development">Ecommerce development ↗</a>
            <a href="/services/ai-integration-services">Integration services ↗</a>
          </span>
        </div>
      </div>
    </section>
  );
}
