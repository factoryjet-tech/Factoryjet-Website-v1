'use client';
import React from 'react';

interface WhyFactoryJetProps {
  handleCta: (e?: React.MouseEvent) => void;
}

export default function WhyFactoryJet({ handleCta }: WhyFactoryJetProps) {
  return (
<section className="sec sec--f" id="why-factoryjet">
  <div className="ctr">
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow">Why FactoryJet</span>
      <h2>What Makes FactoryJet Different From Other Shopify Agencies</h2>
    </div>
    <div className="diff-g">
      <div className="diff reveal"><h3>AI-Optimized E-Commerce Architecture</h3><p>Every Shopify store we build is optimized for visibility across Google, AI Overviews, ChatGPT, Perplexity, Gemini, and Claude. We implement comprehensive JSON-LD schema, answer-first content structures, and entity-rich product descriptions that generative search engines can parse, cite, and recommend. This is not an add-on service. It is built into our development process from day one.</p></div>
      <div className="diff reveal reveal-d1"><h3>Enterprise Quality at Startup-Friendly Prices</h3><p>FactoryJet's India-based development team delivers the same caliber of Shopify Plus builds, headless commerce architectures, and integration work that agencies in New York, London, and Sydney charge two to three times more for. Our pricing makes enterprise-grade e-commerce accessible to growing brands that cannot justify $100,000 or more for a store build.</p></div>
      <div className="diff reveal reveal-d2"><h3>Full-Stack Shopify Expertise</h3><p>We handle every layer of your Shopify store: Liquid theme development, Hydrogen headless builds, Checkout Extensibility configuration, Shopify Flow automation, API integrations with ERP and CRM systems, and ongoing conversion rate optimization. You do not need separate agencies for design, development, integration, and marketing. FactoryJet is a single partner for the entire scope.</p><p style={{marginTop:"12px",fontWeight:"600"}}>Over 120 Shopify and Shopify Plus stores delivered across multiple industries including DTC, B2B, luxury, health, and enterprise commerce.</p></div>
      <div className="diff reveal reveal-d3"><h3>Structured Development Process</h3><p>Our six-phase process with weekly milestones, defined deliverables, and transparent timelines eliminates the guesswork and delays that plague agency-client relationships. You know exactly what is being built, when it will be delivered, and how much it will cost before the project begins.</p></div>
      <div className="diff diff-wide reveal reveal-d4"><h3>Global Delivery, Local Expertise</h3><p>We have built Shopify stores for businesses across nine countries and understand the regional nuances of payment gateways, tax compliance, shipping logistics, and consumer behavior in each market.</p></div>
    </div>
    <div className="reveal" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"24px",margin:"48px auto 32px",maxWidth:"900px",textAlign:"center"}}>
      <div><div style={{fontSize:"2rem",fontWeight:"700",color:"var(--navy)"}}>523</div><div style={{fontSize:".875rem",color:"var(--slate)"}}>websites delivered</div></div>
      <div><div style={{fontSize:"2rem",fontWeight:"700",color:"var(--navy)"}}>500+</div><div style={{fontSize:".875rem",color:"var(--slate)"}}>clients served</div></div>
      <div><div style={{fontSize:"2rem",fontWeight:"700",color:"var(--navy)"}}>4.9/5</div><div style={{fontSize:".875rem",color:"var(--slate)"}}>client rating</div></div>
      <div><div style={{fontSize:"2rem",fontWeight:"700",color:"var(--navy)"}}>$50M+</div><div style={{fontSize:".875rem",color:"var(--slate)"}}>revenue generated for clients</div></div>
    </div>
    <div className="sec-cta reveal">
      <a href="#" className="btn btn-p" onClick={handleCta}>Experience the FactoryJet difference — Book Your Free Consultation Today <span className="arr">→</span></a>
    </div>
  </div>
</section>
  );
}
