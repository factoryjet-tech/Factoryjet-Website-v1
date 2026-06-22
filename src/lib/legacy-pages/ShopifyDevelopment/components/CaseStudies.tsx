'use client';
import React from 'react';

interface CaseStudiesProps {
  csScrollRef: React.RefObject<HTMLDivElement | null>;
  scrollCS: (dir: number) => void;
}

export default function CaseStudies({ csScrollRef, scrollCS }: CaseStudiesProps) {
  return (
<section className="sec cs-section" id="case-studies" aria-label="Case Studies">
  <div className="ctr" style={{position:"relative",zIndex:"2"}}>
    <div className="sec-head reveal" style={{textAlign:"center"}}>
      <span className="eyebrow eyebrow--dark">Results That Speak</span>
      <h2 style={{color:"#fff"}}>Real Shopify Stores, Real Growth</h2>
      <p style={{color:"rgba(255,255,255,.75)",fontWeight:"600",marginTop:"8px"}}>120+ Shopify builds across DTC, B2B, and enterprise brands</p>
      <p className="sub sub--center" style={{color:"rgba(255,255,255,.45)"}}>Every metric is from a live FactoryJet Shopify build. Hover to explore the full story.</p>
    </div>
  </div>

  <div className="cs-fade reveal">
    <div className="cs-scroll" id="csScroll" ref={csScrollRef}>


      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#0F172A,#334155)"}}>NV</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">NovéThread</div>
            <div className="cs-brand-type">DTC Fashion &amp; Apparel — United States</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(0,82,204,.15)",color:"var(--blue-200)"}}>Hydrogen Build</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">1.8%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">4.7%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="161" data-suffix="%">0%</div><div className="cs-met-label">Conv. Increase</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="0.9" data-suffix="s" data-decimals="1">0s</div><div className="cs-met-label">LCP Load Time</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="98" data-suffix="">0</div><div className="cs-met-label">Lighthouse Score</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,35 20,32 40,30 60,28 80,25 100,20 120,22 140,15 160,10 180,8 200,3" fill="none" stroke="url(#sparkBlue)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0052CC" stopOpacity=".3"/><stop offset="100%" stopColor="#3387FF"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Sluggish WooCommerce store with 4.2s load times and a 1.8% conversion rate — losing $40K/month in abandoned carts.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">Complete rebuild on Shopify Hydrogen with Oxygen hosting, custom checkout, and schema-rich product pages for AI visibility.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">161% conversion lift, sub-1s loads, 98 Lighthouse score — $1.2M additional revenue in Year 1.</span></div>
        </div>
      </div>


      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#059669,#34D399)"}}>BG</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">BotanicGlow</div>
            <div className="cs-brand-type">Health &amp; Beauty — United Kingdom</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(16,185,129,.15)",color:"#6EE7B7"}}>Shopify Plus</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">$22K</div>
            <div className="cs-ba-sub">Monthly Rev.</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">$62K</div>
            <div className="cs-ba-sub">Monthly Rev.</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="182" data-suffix="%">0%</div><div className="cs-met-label">Sales Growth</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="47" data-suffix="%">0%</div><div className="cs-met-label">Repeat Rate</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="3.4" data-suffix="x" data-decimals="1">0x</div><div className="cs-met-label">ROAS</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,38 20,36 40,34 60,30 80,28 100,22 120,18 140,14 160,10 180,6 200,2" fill="none" stroke="url(#sparkGreen)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkGreen" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#059669" stopOpacity=".3"/><stop offset="100%" stopColor="#34D399"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Squarespace site with no subscription engine, no schema, and zero AI search visibility — stagnant at $22K/month.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">Migrated to Shopify Plus with Recharge subscriptions, loyalty integration, ingredient transparency pages, and full AEO optimization.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">180%+ sales growth within Year 1, 47% subscriber repeat rate, featured in 3 AI search engines within 90 days.</span></div>
        </div>
      </div>


      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#7C3AED,#A78BFA)"}}>AF</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">AlphaForge Industrial</div>
            <div className="cs-brand-type">B2B Wholesale — United Arab Emirates</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(124,58,237,.15)",color:"#C4B5FD"}}>WooCommerce → Plus</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">Manual</div>
            <div className="cs-ba-sub">Order Process</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">Automated</div>
            <div className="cs-ba-sub">ERP-Synced</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="27" data-suffix="%">0%</div><div className="cs-met-label">Less Cart Drop</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="340" data-suffix="">0</div><div className="cs-met-label">B2B Accounts</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="0" data-suffix="" data-text="Zero">—</div><div className="cs-met-label">Downtime</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,30 20,28 40,32 60,26 80,22 100,20 120,16 140,12 160,9 180,5 200,3" fill="none" stroke="url(#sparkPurple)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkPurple" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7C3AED" stopOpacity=".3"/><stop offset="100%" stopColor="#A78BFA"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Outdated WooCommerce store with manual B2B orders, no price lists, and constant hosting crashes during peak traffic.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">Zero-downtime migration to Shopify Plus with B2B company profiles, custom price lists, net terms, SAP ERP integration, and Arabic language support.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">27% checkout abandonment reduction, 340 B2B accounts onboarded, zero downtime during migration — full ROI in 4 months.</span></div>
        </div>
      </div>


      <div className="cs-card">
        <div className="cs-head">
          <div className="cs-logo" style={{background:"linear-gradient(135deg,#FF6B35,#FFB799)"}}>VK</div>
          <div className="cs-brand-info">
            <div className="cs-brand-name">VeloKit Sports</div>
            <div className="cs-brand-type">Sports &amp; Outdoor — India</div>
          </div>
          <span className="cs-ind-pill" style={{background:"rgba(255,107,53,.15)",color:"#FFB799"}}>CRO Program</span>
        </div>
        <div className="cs-ba">
          <div className="cs-ba-col cs-ba-before">
            <div className="cs-ba-label">Before</div>
            <div className="cs-ba-val">2.1%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
          <div className="cs-ba-arrow">→</div>
          <div className="cs-ba-col cs-ba-after">
            <div className="cs-ba-label">After</div>
            <div className="cs-ba-val">5.3%</div>
            <div className="cs-ba-sub">Conv. Rate</div>
          </div>
        </div>
        <div className="cs-metrics">
          <div className="cs-met"><div className="cs-met-val" data-count="152" data-suffix="%">0%</div><div className="cs-met-label">Conv. Lift</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="1.8" data-suffix="s" data-decimals="1">0s</div><div className="cs-met-label">LCP After</div></div>
          <div className="cs-met"><div className="cs-met-val" data-count="41" data-suffix="%">0%</div><div className="cs-met-label">Cart Recovery</div></div>
        </div>
        <div className="cs-spark">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <polyline points="0,36 20,34 40,32 60,30 80,28 100,24 120,18 140,12 160,8 180,5 200,2" fill="none" stroke="url(#sparkOrange)" strokeWidth="2" strokeLinecap="round"/>
            <linearGradient id="sparkOrange" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FF6B35" stopOpacity=".3"/><stop offset="100%" stopColor="#FFB799"/></linearGradient>
          </svg>
        </div>
        <div className="cs-story">
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-problem">Problem</span><span className="cs-story-text">Existing Shopify store with slow mobile performance, no cart recovery, and a 2.1% conversion rate — well below industry average.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-solution">Solution</span><span className="cs-story-text">90-day CRO program: checkout flow optimization, A/B tested product pages, cart abandonment sequences, speed tuning to sub-2s LCP, and mobile UX overhaul.</span></div>
          <div className="cs-story-row"><span className="cs-story-tag cs-tag-outcome">Outcome</span><span className="cs-story-text">152% conversion rate lift within 90 days, 41% cart recovery rate, $380K additional annual revenue — zero platform migration needed.</span></div>
        </div>
      </div>

    </div>
  </div>


  <div className="ctr" style={{position:"relative",zIndex:"2"}}>
    <div className="cs-arrows reveal">
      <button className="cs-arrow" onClick={() => scrollCS(-1)} aria-label="Previous case study">←</button>
      <button className="cs-arrow" onClick={() => scrollCS(1)} aria-label="Next case study">→</button>
    </div>
    <div className="cs-dots reveal" id="csDots">
      <div className="cs-dot active"></div>
      <div className="cs-dot"></div>
      <div className="cs-dot"></div>
      <div className="cs-dot"></div>
    </div>
    <div className="sec-cta reveal" style={{marginTop:"32px",textAlign:"center"}}>
      <a href="/case" className="btn btn-ghost">View Full Portfolio <span className="arr">→</span></a>
    </div>
  </div>
</section>
  );
}
