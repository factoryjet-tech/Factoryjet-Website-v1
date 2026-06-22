'use client';

import React from 'react';

export default function TechnologySection() {
  return (
    <section className="sec sec--d" id="technology">
      <div className="sec-glow" style={{width:"400px",height:"400px",background:"rgba(0,82,204,.1)",top:"-100px",right:"-100px",filter:"blur(120px)"}}></div>
      <div className="ctr" style={{position:"relative",zIndex:"2"}}>
        <div className="sec-head reveal" style={{textAlign:"center"}}>
          <span className="eyebrow eyebrow--dark">Technology</span>
          <h2 style={{color:"#fff"}}>Advanced Shopify Technology We Work With</h2>
          <p className="sub sub--center" style={{color:"rgba(255,255,255,.5)"}}>FactoryJet stays at the forefront of Shopify's technology ecosystem. Here are the advanced capabilities we implement for our clients.</p>
        </div>

        <div className="lm-grid">


          <div className="lm lm--glass lm-7 reveal">
            <div className="lm-glow" style={{background:"rgba(0,82,204,.1)",top:"-20px",left:"-20px"}}></div>
            <div className="lm-visual">
              <div className="lm-diagram">
                <svg viewBox="0 0 280 90" fill="none">

                  <rect className="node" x="105" y="25" width="70" height="40" fill="rgba(0,82,204,.2)" stroke="rgba(0,82,204,.5)" strokeWidth="1.5"/>
                  <text x="140" y="49" textAnchor="middle" fill="rgba(255,255,255,.8)" fontSize="9" fontWeight="700">YOUR STORE</text>

                  <rect className="node" x="0" y="5" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                  <text x="28" y="23" textAnchor="middle" fontSize="7">🇺🇸 USD</text>
                  <rect className="node" x="0" y="57" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                  <text x="28" y="75" textAnchor="middle" fontSize="7">🇬🇧 GBP</text>
                  <rect className="node" x="224" y="5" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                  <text x="252" y="23" textAnchor="middle" fontSize="7">🇦🇪 AED</text>
                  <rect className="node" x="224" y="57" width="56" height="28" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                  <text x="252" y="75" textAnchor="middle" fontSize="7">🇮🇳 INR</text>

                  <line className="line line--active" x1="56" y1="19" x2="105" y2="38"/>
                  <line className="line line--active" x1="56" y1="71" x2="105" y2="52"/>
                  <line className="line line--active" x1="175" y1="38" x2="224" y2="19"/>
                  <line className="line line--active" x1="175" y1="52" x2="224" y2="71"/>

                  <circle className="dot" cx="80" cy="28" r="2.5"/><circle className="dot" cx="80" cy="62" r="2.5"/>
                  <circle className="dot" cx="200" cy="28" r="2.5"/><circle className="dot" cx="200" cy="62" r="2.5"/>
                </svg>
              </div>
            </div>
            <div className="lm-body">
              <div className="lm-head-row">
                <h3>Shopify Markets for International Selling</h3>
                <span className="lm-tag lm-tag--blue">Multi-Currency</span>
              </div>
              <p className="lm-sum">Sell across 50+ markets and 136 currencies from a single store — with localized checkout, auto tax, and market-specific pricing.</p>
              <div className="lm-chips">
                <div className="lm-chip">
                  <span className="lm-chip-val">97%</span><span className="lm-chip-label">boost</span>
                  <div className="lm-tip">97% boost in cross-border transactions for SMBs</div>
                </div>
                <div className="lm-chip">
                  <span className="lm-chip-val">92%</span><span className="lm-chip-label">prefer local</span>
                  <div className="lm-tip">92% of customers prefer seeing prices in local currency</div>
                </div>
                <div className="lm-chip">
                  <span className="lm-chip-val">−33%</span><span className="lm-chip-label">cart drop</span>
                  <div className="lm-tip">Local payment options reduce cart abandonment by 33%</div>
                </div>
              </div>
              <div className="lm-expand">
                <div className="lm-expand-inner">Shopify Markets enables selling across <span className="lm-hl">50 international markets</span> and <span className="lm-hl">136 currencies</span> from a single store. We configure multi-currency pricing, localized checkout experiences, automatic tax and duty calculation, and market-specific product availability. Shopify Markets has driven a <span className="lm-hl">97 percent boost in cross-border transactions</span> for SMBs. Research shows <span className="lm-hl">92 percent of customers</span> prefer seeing prices in their local currency, and local payment options reduce cart abandonment by <span className="lm-hl">33 percent</span>.</div>
              </div>
              <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
            </div>
          </div>


          <div className="lm lm--glass lm-5 reveal reveal-d1">
            <div className="lm-glow" style={{background:"rgba(255,107,53,.08)",top:"-20px",right:"-20px"}}></div>
            <div className="lm-visual">
              <div className="lm-diagram">
                <svg viewBox="0 0 200 90" fill="none">

                  <rect className="node" x="0" y="30" width="48" height="30" fill="rgba(255,107,53,.15)" stroke="rgba(255,107,53,.4)" strokeWidth="1.5"/>
                  <text x="24" y="48" textAnchor="middle" fontSize="7" fill="#FFB799">CART</text>
                  <rect className="node" x="76" y="30" width="48" height="30" fill="rgba(255,107,53,.2)" stroke="rgba(255,107,53,.5)" strokeWidth="1.5"/>
                  <text x="100" y="48" textAnchor="middle" fontSize="7" fill="#FFB799">CHECKOUT</text>
                  <rect className="node" x="152" y="30" width="48" height="30" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.4)" strokeWidth="1.5"/>
                  <text x="176" y="48" textAnchor="middle" fontSize="7" fill="#6EE7B7">CONFIRM</text>

                  <line className="line line--active" x1="48" y1="45" x2="76" y2="45" style={{stroke:"rgba(255,107,53,.5)"}}/>
                  <line className="line line--active" x1="124" y1="45" x2="152" y2="45" style={{stroke:"rgba(16,185,129,.5)"}}/>

                  <rect x="80" y="5" width="40" height="16" rx="4" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                  <text x="100" y="16" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.5)">UPSELL</text>
                  <line x1="100" y1="21" x2="100" y2="30" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="2 2"/>
                  <rect x="80" y="69" width="40" height="16" rx="4" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
                  <text x="100" y="80" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.5)">CUSTOM</text>
                  <line x1="100" y1="60" x2="100" y2="69" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="2 2"/>
                </svg>
              </div>
            </div>
            <div className="lm-body">
              <div className="lm-head-row">
                <h3>Shopify Checkout Extensibility</h3>
                <span className="lm-tag lm-tag--orange">Plus Only</span>
              </div>
              <p className="lm-sum">Custom checkout fields, conditional logic, branded UI, post-purchase upsells — replacing deprecated checkout.liquid.</p>
              <div className="lm-chips">
                <div className="lm-chip">
                  <span className="lm-chip-val">+15%</span><span className="lm-chip-label">conversion</span>
                  <div className="lm-tip">Shopify's checkout converts 15% better than competitors</div>
                </div>
                <div className="lm-chip">
                  <span className="lm-chip-val">Secure</span><span className="lm-chip-label">extensions</span>
                  <div className="lm-tip">Extension-based model replaces deprecated checkout.liquid</div>
                </div>
              </div>
              <div className="lm-expand">
                <div className="lm-expand-inner">Shopify's checkout converts <span className="lm-hl">15 percent better</span> than competing platforms. With Checkout Extensibility on Shopify Plus, we implement custom checkout fields, conditional display logic, post-purchase upsell offers, branded checkout UI elements, loyalty point redemption, and third-party app integration at checkout. This replaces the deprecated checkout.liquid with a more secure and performant extension-based model.</div>
              </div>
              <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
            </div>
          </div>


          <div className="lm lm--glass lm-5 reveal">
            <div className="lm-glow" style={{background:"rgba(16,185,129,.08)",top:"-20px",left:"-20px"}}></div>
            <div className="lm-visual">
              <div className="lm-diagram">
                <svg viewBox="0 0 200 80" fill="none">

                  <circle cx="100" cy="40" r="22" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.4)" strokeWidth="1.5"/>
                  <text x="100" y="37" textAnchor="middle" fontSize="12" fill="#6EE7B7">✦</text>
                  <text x="100" y="48" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.6)">MAGIC</text>

                  <circle cx="32" cy="18" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
                  <text x="32" y="21" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Desc.</text>
                  <circle cx="168" cy="18" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
                  <text x="168" y="21" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Images</text>
                  <circle cx="32" cy="62" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
                  <text x="32" y="65" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Translate</text>
                  <circle cx="168" cy="62" r="14" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
                  <text x="168" y="65" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.5)">Sidekick</text>

                  <line x1="46" y1="22" x2="78" y2="34" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
                  <line x1="154" y1="22" x2="122" y2="34" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
                  <line x1="46" y1="58" x2="78" y2="46" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
                  <line x1="154" y1="58" x2="122" y2="46" stroke="rgba(16,185,129,.2)" strokeWidth="1"/>
                </svg>
              </div>
            </div>
            <div className="lm-body">
              <div className="lm-head-row">
                <h3>Shopify Magic and AI-Powered Commerce</h3>
                <span className="lm-tag lm-tag--green">AI Built-In</span>
              </div>
              <p className="lm-sum">AI product descriptions, background removal, Sidekick admin assistant, Store Builder, and auto-translations — on all plans.</p>
              <div className="lm-chips">
                <div className="lm-chip">
                  <span className="lm-chip-val">All Plans</span><span className="lm-chip-label">included</span>
                  <div className="lm-tip">Shopify Magic is available on every Shopify plan</div>
                </div>
                <div className="lm-chip">
                  <span className="lm-chip-val">5 Tools</span><span className="lm-chip-label">in suite</span>
                  <div className="lm-tip">Descriptions · Images · Sidekick · Builder · Translate</div>
                </div>
              </div>
              <div className="lm-expand">
                <div className="lm-expand-inner">Shopify Magic is Shopify's built-in AI suite available on all plans. It includes <span className="lm-hl">AI-generated product descriptions</span>, image editing with background removal and replacement, <span className="lm-hl">Sidekick AI admin assistant</span> for store management, AI Store Builder that creates storefronts from text prompts, and auto-translations for international selling. FactoryJet integrates these AI capabilities into our store builds and trains clients on using them effectively.</div>
              </div>
              <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
            </div>
          </div>


          <div className="lm lm--glass lm-7 reveal reveal-d1">
            <div className="lm-glow" style={{background:"rgba(0,82,204,.08)",bottom:"-20px",right:"-20px"}}></div>
            <div className="lm-visual">
              <div className="lm-diagram">
                <svg viewBox="0 0 280 80" fill="none">

                  <rect className="node" x="0" y="22" width="60" height="36" fill="rgba(0,82,204,.15)" stroke="rgba(0,82,204,.4)" strokeWidth="1.5"/>
                  <text x="30" y="37" textAnchor="middle" fontSize="6.5" fill="var(--blue-200)">ONLINE</text>
                  <text x="30" y="48" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.35)">STORE</text>

                  <circle cx="140" cy="40" r="18" fill="rgba(0,82,204,.1)" stroke="rgba(0,82,204,.3)" strokeWidth="1.5"/>
                  <text x="140" y="38" textAnchor="middle" fontSize="8" fill="var(--blue-200)">⟳</text>
                  <text x="140" y="48" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,.4)">SYNC</text>

                  <rect className="node" x="220" y="22" width="60" height="36" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.35)" strokeWidth="1.5"/>
                  <text x="250" y="37" textAnchor="middle" fontSize="6.5" fill="#6EE7B7">IN-STORE</text>
                  <text x="250" y="48" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,.35)">POS</text>

                  <line className="line line--active" x1="60" y1="40" x2="122" y2="40"/>
                  <line className="line line--active" x1="158" y1="40" x2="220" y2="40"/>

                  <text x="70" y="74" fontSize="5" fill="rgba(255,255,255,.3)">Inventory · Customers · Loyalty</text>
                </svg>
              </div>
            </div>
            <div className="lm-body">
              <div className="lm-head-row">
                <h3>Shopify POS for Omnichannel Retail</h3>
                <span className="lm-tag lm-tag--blue">Omnichannel</span>
              </div>
              <p className="lm-sum">Unified online + in-store operations — inventory sync, customer profiles, BOPIS, and loyalty across all channels.</p>
              <div className="lm-chips">
                <div className="lm-chip">
                  <span className="lm-chip-val">20</span><span className="lm-chip-label">locations</span>
                  <div className="lm-tip">POS Pro included for up to 20 locations on Shopify Plus</div>
                </div>
                <div className="lm-chip">
                  <span className="lm-chip-val">Unified</span><span className="lm-chip-label">inventory</span>
                  <div className="lm-tip">Single inventory pool across online and all physical stores</div>
                </div>
              </div>
              <div className="lm-expand">
                <div className="lm-expand-inner">For brands with physical retail locations, FactoryJet configures Shopify POS to unify online and in-store operations. Shopify Plus includes <span className="lm-hl">POS Pro for up to 20 locations</span>, covering unified inventory, customer profiles, staff permissions, and hardware configuration. We build omnichannel experiences where customers can <span className="lm-hl">buy online and pick up in store</span>, return in-store purchases online, and access unified loyalty programs across all channels.</div>
              </div>
              <button className="lm-toggle" onClick={(e) => { const lm = e.currentTarget.closest(".lm"); if(lm) lm.classList.toggle("open"); }}><span className="lm-show">Learn more</span><span className="lm-hide">Show less</span> <span className="lm-chev">▼</span></button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
