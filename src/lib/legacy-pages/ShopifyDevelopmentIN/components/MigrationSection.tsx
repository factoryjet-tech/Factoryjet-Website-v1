'use client';

import React from 'react';

interface MigrationSectionProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function MigrationSection({ handleCta }: MigrationSectionProps) {
  return (
    <section className="sec sec--w" id="migration">
      <div className="ctr">
        <div className="sec-head reveal">
          <span className="eyebrow">Migration</span>
          <h2>Migrate to Shopify from Any E-Commerce Platform</h2>
          <p className="sub">FactoryJet handles complete e-commerce migrations with zero downtime and full data integrity.</p>
        </div>
        <div className="mig-g">
          <div className="mig-c reveal">
            <h3>WooCommerce to Shopify Migration</h3>
            <p>WooCommerce to Shopify is the most requested migration path. Businesses migrate because Shopify eliminates hosting management, provides automatic security updates, reduces checkout abandonment by up to 27 percent, and offers significantly faster page loads. FactoryJet migrates all products, customers, orders, blog content, reviews, and discount codes. We implement 301 redirects for every URL to preserve search rankings.</p>
            <span className="mig-price">₹4,15,000 – ₹41,50,000</span>
          </div>
          <div className="mig-c reveal reveal-d1">
            <h3>Magento to Shopify Plus Migration</h3>
            <p>Magento to Shopify Plus migrations target enterprise businesses seeking lower total cost of ownership, simpler operations, and faster performance. We migrate complex Magento product catalogs including configurable products, custom attributes, and multi-store configurations. We rebuild custom functionality using Shopify Plus features and apps, and integrate existing ERP and CRM connections.</p>
            <span className="mig-price">₹12,45,000 – ₹62,25,000</span>
          </div>
          <div className="mig-c reveal reveal-d2">
            <h3>Salesforce Commerce Cloud to Shopify Plus Migration</h3>
            <p>A growing number of luxury and fashion brands are migrating from Salesforce Commerce Cloud to Shopify Plus for its lower total cost of ownership, faster development cycles, and superior app ecosystem. FactoryJet has experience migrating complex SFCC implementations including multi-site architectures, custom cartridge functionality, and order management system integrations.</p>
          </div>
          <div className="mig-c reveal reveal-d3">
            <h3>BigCommerce, Wix, and Other Platforms to Shopify Migration</h3>
            <p>We also migrate stores from BigCommerce, Wix, Squarespace, PrestaShop, OpenCart, and custom legacy platforms. Every migration follows our structured process covering data audit, migration plan, test migration, go-live migration, and post-migration verification.</p>
          </div>
        </div>
        <div className="sec-cta reveal">
          <a href="#" className="btn btn-p" onClick={handleCta}>Planning a migration? Get a Free Migration Assessment <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
