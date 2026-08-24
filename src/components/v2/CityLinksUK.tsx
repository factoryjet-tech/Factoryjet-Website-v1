import React from 'react';
import Link from 'next/link';

export interface CityLinksUKProps {
  currentCity?: string;
  currentService?: string;
  className?: string;
}

const UK_CITIES = [
  { slug: 'london', label: 'London' },
  { slug: 'manchester', label: 'Manchester' },
  { slug: 'birmingham', label: 'Birmingham' },
  { slug: 'leeds', label: 'Leeds' },
  { slug: 'liverpool', label: 'Liverpool' },
  { slug: 'sheffield', label: 'Sheffield' },
  { slug: 'bristol', label: 'Bristol' },
  { slug: 'edinburgh', label: 'Edinburgh' },
  { slug: 'glasgow', label: 'Glasgow' },
  { slug: 'newcastle', label: 'Newcastle' },
  { slug: 'nottingham', label: 'Nottingham' },
  { slug: 'cardiff', label: 'Cardiff' },
  { slug: 'southampton', label: 'Southampton' },
  { slug: 'brighton', label: 'Brighton' },
  { slug: 'oxford', label: 'Oxford' },
  { slug: 'cambridge', label: 'Cambridge' },
  { slug: 'derby', label: 'Derby' },
  { slug: 'coventry', label: 'Coventry' },
  { slug: 'hull', label: 'Hull' },
  { slug: 'plymouth', label: 'Plymouth' },
  { slug: 'leicester', label: 'Leicester' },
] as const;

const UK_SERVICE_HUBS = [
  { slug: 'web-design', label: 'Web Design' },
  { slug: 'seo', label: 'SEO Agency' },
  { slug: 'local-seo', label: 'Local SEO' },
  { slug: 'ecommerce-development', label: 'E-Commerce Development' },
  { slug: 'shopify-development', label: 'Shopify Plus' },
  { slug: 'ai-agents', label: 'AI Agents' },
  { slug: 'ai-seo', label: 'AI Search & GEO' },
  { slug: 'ecommerce-seo', label: 'E-Commerce SEO' },
  { slug: 'shopify-seo', label: 'Shopify SEO' },
  { slug: 'seo-audit', label: 'SEO Technical Audit' },
] as const;

export default function CityLinksUK({
  currentCity = '',
  currentService = '',
  className = '',
}: CityLinksUKProps) {
  const filteredCities = UK_CITIES.filter((c) => c.slug !== currentCity.toLowerCase());
  const filteredServices = UK_SERVICE_HUBS.filter((s) => s.slug !== currentService.toLowerCase());

  return (
    <section
      className={`pp-sec ${className}`}
      style={{
        backgroundColor: '#FAFAF7',
        padding: 'clamp(48px, 6vh, 80px) 0',
        borderTop: '1px solid #E6E6EC',
      }}
    >
      <div className="pp-wrap" style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FF5622',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            United Kingdom Engineering Network
          </span>
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 800,
              color: '#141414',
              letterSpacing: '-0.02em',
              margin: '0 0 10px',
            }}
          >
            Digital Engineering &amp; AI Search Hubs Across Great Britain
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#6E6E80',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Explore regional commercial telemetry, high-performance Next.js architectures, and localized AI search optimization across all major UK metros.
          </p>
        </div>

        {/* UK Metro City Pills Grid */}
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#8E8E9F',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            Regional City Hubs
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {filteredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/uk/${city.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid #E6E6EC',
                  backgroundColor: '#FFFFFF',
                  color: '#141414',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#FF5622',
                    opacity: 0.7,
                  }}
                />
                {city.label}
              </Link>
            ))}
          </div>
        </div>

        {/* UK National Service Hubs */}
        <div
          style={{
            borderTop: '1px solid #E6E6EC',
            paddingTop: '24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#8E8E9F',
              marginBottom: '12px',
            }}
          >
            National Specialized Capabilities
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {filteredServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/uk/${svc.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: '#F0F0F5',
                  color: '#2E2E38',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
