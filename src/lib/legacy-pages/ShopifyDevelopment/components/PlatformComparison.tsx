'use client';
import React from 'react';

interface PlatformComparisonProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function PlatformComparison({ handleCta }: PlatformComparisonProps) {
  return (
    <section className="sec sec--w" id="comparison">
      <div className="ctr">
        <div className="sec-head reveal">
          <span className="eyebrow">Platform Comparison</span>
          <h2>Shopify vs Shopify Plus — A Complete Comparison</h2>
        </div>
        <div className="cmp-intro reveal">
          <p>Choosing between Shopify and Shopify Plus depends on your revenue, operational complexity, and growth trajectory. Here is a detailed comparison to guide your decision.</p>
        </div>

        <div className="cmp-visual reveal">

          <div className="cmp-table-card">
            <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
              <table className="tbl">
                <thead><tr><th>Feature</th><th>Shopify (Grow Plan)</th><th>Shopify Plus</th></tr></thead>
                <tbody>
                  <tr><td>Monthly Cost</td><td>$105/month</td><td>$2,300/month (3-year term) or $2,500/month (1-year term)</td></tr>
                  <tr><td>Variable Fees</td><td>Standard transaction fees</td><td>0.35% on monthly sales above approximately $800,000 (capped at $40,000/month)</td></tr>
                  <tr><td>Checkout Customization</td><td>Limited to standard options</td><td>Full Checkout Extensibility with custom fields, conditional logic, and branded UI</td></tr>
                  <tr><td>B2B Selling</td><td>Not available</td><td>Company profiles, custom price lists, net payment terms, quantity rules</td></tr>
                  <tr><td>Expansion Stores</td><td>Not available</td><td>Up to 10 additional stores included</td></tr>
                  <tr><td>Staff Accounts</td><td>Up to 15</td><td>Unlimited</td></tr>
                  <tr><td>API Call Limits</td><td>Standard</td><td>10x standard limits</td></tr>
                  <tr><td>Automation</td><td>Basic Shopify Flow</td><td>Advanced Shopify Flow, Launchpad for flash sales and product drops</td></tr>
                  <tr><td>POS Pro</td><td>$89/month per location</td><td>Included for up to 20 locations</td></tr>
                  <tr><td>Support</td><td>Standard support channels</td><td>Dedicated Merchant Success Manager with 24/7 priority support</td></tr>
                  <tr><td>Theme Storage</td><td>Up to 20 themes</td><td>Up to 100 themes</td></tr>
                  <tr><td>Custom Pixels</td><td>Limited</td><td>Full custom pixel support for advanced analytics</td></tr>
                </tbody>
              </table>
            </div>
          </div>


          <div className="cmp-upgrade-card reveal reveal-d1">
            <h3>When Should You Upgrade to Shopify Plus?</h3>
            <div className="cmp-signals">
              <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Monthly revenue consistently exceeds <strong>$80,000 to $100,000</strong></span></div>
              <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Need <strong>custom checkout experiences</strong> including branded checkout pages, conditional discounts, and post-purchase upsells</span></div>
              <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Business requires <strong>B2B and wholesale capabilities</strong> alongside DTC selling</span></div>
              <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Expanding internationally — <strong>multiple storefronts</strong> in different currencies and languages</span></div>
              <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>Need <strong>advanced automation</strong> for product launches, flash sales, and campaign scheduling</span></div>
              <div className="cmp-signal"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><span>API usage is <strong>hitting standard rate limits</strong> due to high integration volume</span></div>
            </div>
            <p className="cmp-upgrade-note">FactoryJet helps businesses evaluate whether Shopify Plus is the right investment and handles the full migration and setup process.</p>
            <a href="#" className="btn btn-p btn-sm" onClick={handleCta} style={{width:"100%",justifyContent:"center"}}>Book a Free Strategy Call <span className="arr">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
