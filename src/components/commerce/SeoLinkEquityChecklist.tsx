'use client';

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Search, Globe, Link as LinkIcon, FileText, CheckSquare, Square } from 'lucide-react';

interface SeoLinkEquityChecklistProps {
  className?: string;
  sourcePlatform?: string;
}

const CHECKLIST_ITEMS = [
  {
    id: 'crawl',
    title: '1. Comprehensive 1-to-1 Legacy URL Inventory',
    desc: 'Deep crawl of 100% of historical URLs from Google Search Console, server access logs, and XML sitemaps to capture every ranking collection, product, and blog article.',
    metric: '100% URL Coverage',
  },
  {
    id: 'redirects',
    title: '2. Single-Hop 301 Redirect Architecture',
    desc: 'Mapping every legacy URL path directly to its exact new canonical destination. Zero multi-hop redirect chains, zero redirect loops, and zero 404 dead ends.',
    metric: 'Zero Equity Leakage',
  },
  {
    id: 'schema',
    title: '3. Server-Rendered JSON-LD Schema Parity',
    desc: 'Preserving full Schema.org structured data (Product, Offer, AggregateRating, Review, BreadcrumbList, Organization) rendered in static HTML for AI search crawlers.',
    metric: 'Rich Snippet Continuity',
  },
  {
    id: 'meta',
    title: '4. Title Tag, Meta Description & H1 Heading Continuity',
    desc: 'Maintaining high-ranking on-page SEO signals across all primary landing pages, category hubs, and top-converting product pages without accidental overwrites.',
    metric: 'Keyword Rank Defense',
  },
  {
    id: 'canonical',
    title: '5. Self-Referential Canonical Tag & XML Sitemap Audit',
    desc: 'Implementing clean canonical rules that prevent duplicate indexing from faceted filtering, variant parameters, or regional URLs, paired with multi-sitemap XML indexes.',
    metric: 'Duplicate Content Shield',
  },
  {
    id: 'monitoring',
    title: '6. Post-Cutover 404 Log Monitoring & IndexNow Submission',
    desc: 'Real-time server log inspection during launch week to catch edge-case 404s instantly, paired with automated submission to Google Indexing API and Bing IndexNow.',
    metric: 'Instant Re-Indexing',
  },
];

export default function SeoLinkEquityChecklist({ className = '', sourcePlatform }: SeoLinkEquityChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    crawl: true,
    redirects: true,
    schema: true,
    meta: true,
    canonical: true,
    monitoring: true,
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className={`seo-checklist-section ${className}`}
      style={{
        border: '1px solid var(--pp-line, #E5E0DA)',
        borderRadius: '24px',
        padding: 'clamp(24px, 4vw, 36px)',
        background: '#FFFFFF',
        boxShadow: '0 16px 40px -20px rgba(20, 17, 15, 0.1)',
      }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto 28px', textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--pp-mono, monospace)',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#B23E13',
            background: 'rgba(240, 90, 40, 0.1)',
            padding: '4px 12px',
            borderRadius: '999px',
            marginBottom: '12px',
          }}
        >
          <Search size={12} />
          SEO Rank Protection Protocol
        </span>
        <h3
          style={{
            fontFamily: 'var(--pp-display, var(--pp-disp, sans-serif))',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 800,
            color: 'var(--pp-ink, #14110F)',
            margin: '0 0 10px 0',
            letterSpacing: '-0.025em',
          }}
        >
          SEO Link Equity Preservation Checklist
        </h3>
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--pp-body, #292524)',
            margin: 0,
          }}
        >
          How FactoryJet prevents organic traffic drops during platform migration by enforcing strict single-hop redirects, schema parity, and canonical hygiene.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              style={{
                border: isChecked ? '1px solid #F05A28' : '1px solid var(--pp-line, #E5E0DA)',
                borderRadius: '14px',
                padding: '16px 20px',
                background: isChecked ? 'rgba(240, 90, 40, 0.03)' : '#FFFFFF',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ marginTop: '2px', color: isChecked ? '#F05A28' : '#A8A29E', flexShrink: 0 }}>
                {isChecked ? <CheckSquare size={20} /> : <Square size={20} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: 'var(--pp-ink, #14110F)' }}>
                    {item.title}
                  </h4>
                  <span
                    style={{
                      fontFamily: 'var(--pp-mono, monospace)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#16A34A',
                      background: '#DCFCE7',
                      padding: '2px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.55, color: 'var(--pp-body, #292524)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '14px 18px',
          background: '#FBF9F7',
          borderRadius: '12px',
          border: '1px solid var(--pp-line, #E5E0DA)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontFamily: 'var(--pp-mono, monospace)',
          fontSize: '11.5px',
          color: 'var(--pp-muted, #78716C)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} color="#F05A28" />
          <span>Every migration includes automated pre-launch staging crawls and post-launch indexation verification.</span>
        </div>
        <span style={{ fontWeight: 600, color: 'var(--pp-ink, #14110F)' }}>FactoryJet SEO Engineering Protocol</span>
      </div>
    </div>
  );
}
