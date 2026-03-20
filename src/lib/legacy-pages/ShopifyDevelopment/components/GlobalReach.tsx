'use client';
import React from 'react';

interface GlobalReachProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function GlobalReach({ handleCta }: GlobalReachProps) {
  return (
    <section className="sec sec--f" id="global">
      <div className="ctr">
        <div className="sec-head reveal" style={{textAlign:"center"}}>
          <span className="eyebrow">Global Reach</span>
          <h2>Shopify Development for Businesses Worldwide</h2>
          <p className="sub sub--center">FactoryJet serves clients across nine countries, combining deep Shopify expertise with local market knowledge and competitive pricing.</p>
        </div>
        <div className="glo-g">
          <div className="glo-c reveal"><h3><span className="glo-flag">🇺🇸</span> Shopify Development for US Businesses</h3><p>The United States is the largest e-commerce market globally at approximately $1.2 trillion, with Shopify holding 30 percent platform market share. Over 55 percent of all Shopify Plus merchants are US-based. FactoryJet serves US businesses from startups to enterprise brands, offering Shopify Plus development, headless commerce builds, and full-service store optimization at 40 to 60 percent below comparable US agency rates.</p></div>
          <div className="glo-c reveal reveal-d1"><h3><span className="glo-flag">🇬🇧</span> Shopify Development for UK Businesses</h3><p>The United Kingdom is Europe's largest e-commerce market and third largest globally. Shopify holds 23 percent of the UK platform market with over 193,000 stores and approximately 3,200 Shopify Plus merchants. FactoryJet delivers to UK brands with expertise in GDPR compliance, VAT configuration, and UK-specific payment gateway integration.</p></div>
          <div className="glo-c reveal reveal-d2"><h3><span className="glo-flag">🇮🇳</span> Shopify Development for Indian Businesses</h3><p>India is the fastest-growing Shopify market globally, with 97 percent year-over-year growth in store adoption. Over 90,000 live Shopify stores now operate in India as the country's D2C market crosses $100 billion. FactoryJet builds Shopify stores for Indian brands with integration of Razorpay, PayU, and Cashfree payment gateways, Shiprocket and Delhivery logistics, and GST-compliant invoicing.</p></div>
          <div className="glo-c reveal reveal-d3"><h3><span className="glo-flag">🇦🇪</span> Shopify Development for UAE and Middle East Businesses</h3><p>The UAE e-commerce market reached $8.8 billion in 2024 and is projected to grow to $13.8 billion by 2029. FactoryJet builds Shopify stores for UAE and Saudi businesses with Arabic language support, Telr and PayTabs payment integration, and Middle East shipping provider configuration.</p></div>
          <div className="glo-c glo-wide reveal reveal-d4"><h3><span className="glo-flag">🌍</span> Additional Markets</h3><p>FactoryJet also serves businesses in Canada (Shopify's home country with 133,000+ stores), Australia (120,000+ stores and a mobile-first market), Singapore (the gateway to Southeast Asia's $8.9 billion e-commerce market), and Europe (France, Germany, Netherlands, and other EU markets) with GDPR compliance and multi-language capabilities.</p></div>
        </div>
        <div className="sec-cta reveal">
          <a href="#" className="btn btn-p" onClick={handleCta}>Where are your customers? Let's Build Your Global Shopify Store <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
