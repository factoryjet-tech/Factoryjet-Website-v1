'use client';
import React from 'react';

interface WhyShopifyProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function WhyShopify({ handleCta }: WhyShopifyProps) {
  return (
    <section className="sec sec--w" id="why-shopify">
      <div className="ctr">
        <div className="sec-head reveal" style={{textAlign:"center"}}>
          <span className="eyebrow">Why Shopify</span>
          <h2>Why Shopify Is the World's Leading E-Commerce Platform</h2>
        </div>

        <div className="vp-bento">



          <div className="vp-card vp-hero vp-span-8 vp-icon--blue-glow reveal">
            <div className="vp-icon vp-icon--blue">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </div>
            <h3>The World's #1 E-Commerce Platform</h3>
            <p>Shopify is the most widely used e-commerce platform in the world. As of 2026, over <span className="vp-hl">2.85 million live stores</span> operate on Shopify across <span className="vp-hl">175 countries</span>, processing more than <span className="vp-hl">$378 billion in gross merchandise volume</span> annually. Shopify powers <span className="vp-hl">29 percent of all e-commerce websites globally</span> and holds the number one market share position in the United States, United Kingdom, Canada, Australia, and India.</p>
          </div>


          <aside className="vp-card vp-stats vp-span-4 reveal reveal-d1">
            <h3>Shopify by the Numbers</h3>
            <div className="vp-stat-row"><span className="vp-stat-val">2.85M+</span><span className="vp-stat-lbl">live stores worldwide</span></div>
            <div className="vp-stat-row"><span className="vp-stat-val">$378B+</span><span className="vp-stat-lbl">gross merchandise volume</span></div>
            <div className="vp-stat-row"><span className="vp-stat-val">29%</span><span className="vp-stat-lbl">global e-commerce market share</span></div>
            <div className="vp-stat-row"><span className="vp-stat-val">15%</span><span className="vp-stat-lbl">better checkout conversion</span></div>
            <div className="vp-stat-row"><span className="vp-stat-val">309ms</span><span className="vp-stat-lbl">average page load time</span></div>
            <div className="vp-stat-row"><span className="vp-stat-val">12,320</span><span className="vp-stat-lbl">apps in the Shopify App Store</span></div>
            <div className="vp-stat-row"><span className="vp-stat-val">136</span><span className="vp-stat-lbl">currencies supported</span></div>
            <div className="vp-stat-row"><span className="vp-stat-val">99.99%</span><span className="vp-stat-lbl">uptime guarantee</span></div>
          </aside>



          <div className="vp-card vp-metric vp-span-4 vp-icon--green-glow reveal">
            <div className="vp-icon vp-icon--green">
              <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            </div>
            <div className="vp-metric-num">15<span className="vp-unit">%</span></div>
            <h3>Better Checkout Conversion</h3>
            <p>Businesses choose Shopify because it combines <span className="vp-hl">enterprise-grade infrastructure</span> with operational simplicity. Shopify's checkout converts <span className="vp-hl">15 percent better</span> than competing platforms.</p>
          </div>


          <div className="vp-card vp-metric vp-span-4 vp-icon--orange-glow reveal reveal-d1">
            <div className="vp-icon vp-icon--orange">
              <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div className="vp-metric-num">309<span className="vp-unit">ms</span></div>
            <h3>Blazing Fast Load Times</h3>
            <p>Its average page load time of <span className="vp-hl">309 milliseconds</span> is more than twice as fast as WooCommerce's 776 milliseconds.</p>
          </div>


          <div className="vp-card vp-metric vp-span-4 vp-icon--purple-glow reveal reveal-d2">
            <div className="vp-icon vp-icon--purple">
              <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3"/></svg>
            </div>
            <div className="vp-metric-num">12,320</div>
            <h3>Apps &amp; Infinite Scale</h3>
            <p>With <span className="vp-hl">12,320 apps</span> in the Shopify App Store, <span className="vp-hl">99.99 percent uptime</span>, and native support for over <span className="vp-hl">136 currencies</span> through Shopify Markets, the platform scales from a single-product launch to a billion-dollar enterprise operation.</p>
          </div>


          <div className="vp-card vp-fj vp-span-12 reveal" style={{display:"grid",gap:"24px",alignItems:"center"}} id="vp-fj-row">
            <div>
              <div className="vp-icon vp-icon--navy" style={{boxShadow:"0 4px 12px rgba(0,0,0,.2)"}}>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#3387FF" stroke="none"/></svg>
              </div>
              <h3>Your Shopify Development Partner — FactoryJet</h3>
              <p>FactoryJet is a Shopify development agency that builds, migrates, and scales Shopify stores for brands across the <span className="vp-hl">United States, Canada, United Kingdom, Europe, Australia, Singapore, UAE, Saudi Arabia, and India</span>. We specialize in <span className="vp-hl">custom Shopify Plus development</span>, headless commerce with Hydrogen, platform migrations, B2B e-commerce, and end-to-end store optimization.</p>
            </div>
          </div>

        </div>

        <div className="sec-cta reveal" style={{marginTop:"48px",textAlign:"center"}}>
          <a href="#" className="btn btn-p" onClick={handleCta}>Ready to build on the platform trusted by millions? Get Your Free Shopify Consultation <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
