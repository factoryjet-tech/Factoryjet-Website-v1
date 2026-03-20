'use client';
import React from 'react';

interface IndustriesSectionProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function IndustriesSection({ handleCta }: IndustriesSectionProps) {
  return (
<section className="sec sec--f" id="industries">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Industries</span>
      <h2>Shopify E-Commerce Development Across Every Industry</h2>
      <p className="sub sub--center">FactoryJet builds Shopify stores for specific industry requirements. Each vertical receives tailored product page structures, checkout flows, integration architectures, and conversion strategies.</p>
    </div>
    <div className="ind-grid">
      <div className="ind reveal"><span className="ind-emoji">👗</span><h3>Fashion and Apparel</h3><p>Fashion and apparel is the largest category on Shopify, representing 21.8 percent of all stores with over 527,000 merchants. FactoryJet builds fashion stores with size guides, color swatches, lookbook galleries, inventory sync across wholesale and DTC channels, and returns management integration. Notable Shopify Plus fashion brands include Gymshark, Allbirds, Fashion Nova, NOBULL, and KITH.</p></div>
      <div className="ind reveal reveal-d1"><span className="ind-emoji">💄</span><h3>Health and Beauty</h3><p>Health and beauty brands on Shopify benefit from subscription capabilities, ingredient transparency pages, before-and-after galleries, loyalty program integration, and compliance with regional cosmetics regulations. FactoryJet has built Shopify stores in this vertical that achieved 180 percent or higher sales growth within the first year.</p></div>
      <div className="ind reveal reveal-d2"><span className="ind-emoji">🍽️</span><h3>Food and Beverage</h3><p>Food and beverage e-commerce requires specialized handling for perishable goods, subscription box models, delivery zone configuration, cold chain logistics integration, and nutritional information display. We configure Shopify stores with delivery date pickers, minimum order thresholds, and dynamic shipping rates based on weight and zone.</p></div>
      <div className="ind reveal reveal-d3"><span className="ind-emoji">🏭</span><h3>B2B and Wholesale</h3><p>B2B e-commerce on Shopify Plus enables manufacturers, distributors, and wholesale operations to sell online with custom pricing per customer, volume discounts, purchase order workflows, and ERP-connected inventory. FactoryJet builds B2B Shopify solutions that integrate with SAP, Oracle, ERPNext, and industry-specific ERP platforms.</p></div>
      <div className="ind reveal reveal-d4"><span className="ind-emoji">🏡</span><h3>Home and Furniture</h3><p>Home and furniture stores require high-resolution product photography support, room visualization tools, complex variant handling for materials and dimensions, and white-glove delivery integration. We build Shopify furniture stores with AR product preview capabilities and sample ordering workflows.</p></div>
      <div className="ind reveal reveal-d5"><span className="ind-emoji">💎</span><h3>Jewelry and Luxury</h3><p>Jewelry and luxury e-commerce demands premium visual presentation, 360-degree product views, engraving and customization options, certificate of authenticity integration, and insurance-backed shipping. We build Shopify luxury stores with elevated design systems that reflect brand exclusivity.</p></div>
      <div className="ind reveal reveal-d6"><span className="ind-emoji">⚽</span><h3>Sports and Outdoor</h3><p>Sports brands on Shopify require team ordering capabilities, size recommendation engines, product comparison tools, and integration with athlete endorsement content. We build stores in this vertical with pre-order functionality for seasonal product drops and limited-edition releases.</p></div>
      <div className="ind reveal reveal-d7"><span className="ind-emoji">🔄</span><h3>Subscription-Based Businesses</h3><p>Subscription e-commerce on Shopify uses apps like Recharge, Bold Subscriptions, and Shopify's native subscription APIs. FactoryJet configures subscription stores with flexible billing cycles, skip and pause functionality, subscriber dashboards, and churn reduction automation.</p></div>
    </div>
    <div className="sec-cta reveal">
      <a href="#" className="btn btn-p" onClick={handleCta}>Building for a specific industry? Discuss Your Shopify Project <span className="arr">→</span></a>
    </div>
  </div>
</section>
  );
}
