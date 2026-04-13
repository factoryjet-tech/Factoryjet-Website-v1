'use client';

import React from 'react';

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust indicators and client logos">

      <div className="ts-badges">

        <div className="ts-badge reveal">
          <div className="ts-badge-icon ts-badge-icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div className="ts-badge-body">
            <div className="ts-badge-val">120+</div>
            <div className="ts-badge-label">Shopify Stores Launched</div>
          </div>
        </div>

        <div className="ts-badge reveal reveal-d1">
          <div className="ts-badge-icon ts-badge-icon--gold">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 4.84L19.3 7.9l-3.65 3.56.86 5.03L12 14.14l-4.51 2.37.86-5.03L4.7 7.92l4.91-.72L12 2z"/></svg>
          </div>
          <div className="ts-badge-body">
            <div className="ts-badge-val" style={{display:"flex",alignItems:"center",gap:"6px"}}>
              98%
              <span className="ts-stars">
                <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
                <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
                <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
                <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
                <svg viewBox="0 0 20 20"><path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.03L10 13.14l-4.51 2.37.86-5.03L2.7 6.92l4.91-.72L10 1z"/></svg>
              </span>
            </div>
            <div className="ts-badge-label">Client Satisfaction Rate</div>
          </div>
        </div>

        <div className="ts-badge reveal reveal-d2">
          <div className="ts-badge-icon ts-badge-icon--green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <div className="ts-badge-body">
            <div className="ts-badge-val">9 Countries</div>
            <div className="ts-badge-label">Served Worldwide</div>
          </div>
        </div>

        <div className="ts-badge reveal reveal-d3">
          <div className="ts-badge-icon ts-badge-icon--orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          </div>
          <div className="ts-badge-body">
            <div className="ts-badge-val">40–60% Less</div>
            <div className="ts-badge-label">vs US/UK Agency Rates</div>
          </div>
        </div>
      </div>

      <div className="ts-ticker-wrap">
        <div className="ts-ticker" aria-hidden="true">

          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#96bf48"}}>S</div><span className="ts-logo-name">Shopify</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#635BFF"}}>S</div><span className="ts-logo-name">Stripe</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#003087"}}>P</div><span className="ts-logo-name">PayPal</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2684FF"}}>R</div><span className="ts-logo-name">Razorpay</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF6600"}}>H</div><span className="ts-logo-name">HubSpot</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#00B4E6"}}>SF</div><span className="ts-logo-name">Salesforce</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#7B68EE"}}>K</div><span className="ts-logo-name">Klaviyo</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF4F00"}}>Z</div><span className="ts-logo-name">Zoho</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2C8EBB"}}>SS</div><span className="ts-logo-name">ShipStation</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0F6FFF"}}>SR</div><span className="ts-logo-name">Shiprocket</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0B5ED7"}}>SAP</div><span className="ts-logo-name">SAP</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#C74634"}}>O</div><span className="ts-logo-name">Oracle</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2CA01C"}}>QB</div><span className="ts-logo-name">QuickBooks</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#13B5EA"}}>X</div><span className="ts-logo-name">Xero</span></div></div>

          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#96bf48"}}>S</div><span className="ts-logo-name">Shopify</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#635BFF"}}>S</div><span className="ts-logo-name">Stripe</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#003087"}}>P</div><span className="ts-logo-name">PayPal</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2684FF"}}>R</div><span className="ts-logo-name">Razorpay</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF6600"}}>H</div><span className="ts-logo-name">HubSpot</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#00B4E6"}}>SF</div><span className="ts-logo-name">Salesforce</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#7B68EE"}}>K</div><span className="ts-logo-name">Klaviyo</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#FF4F00"}}>Z</div><span className="ts-logo-name">Zoho</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2C8EBB"}}>SS</div><span className="ts-logo-name">ShipStation</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0F6FFF"}}>SR</div><span className="ts-logo-name">Shiprocket</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#0B5ED7"}}>SAP</div><span className="ts-logo-name">SAP</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#C74634"}}>O</div><span className="ts-logo-name">Oracle</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#2CA01C"}}>QB</div><span className="ts-logo-name">QuickBooks</span></div></div>
          <div className="ts-logo"><div className="ts-logo-inner"><div className="ts-logo-mark" style={{background:"#13B5EA"}}>X</div><span className="ts-logo-name">Xero</span></div></div>
        </div>
      </div>
    </section>
  );
}
