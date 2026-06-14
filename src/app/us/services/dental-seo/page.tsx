import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import './dental-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/dental-seo — production page
   Converted from mockup-us-services-dental-seo-v1.html 2026-06-14.
   Layout: custom inline JSX, scoped under .dseo CSS wrapper.
   No pricing anywhere (no-pricing rule 2026-06-11).
   All CTAs: https://calendly.com/bhavesh-factoryjet/30min
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Dental SEO Agency | Map Pack SEO for Dentists & Dental Practices | FactoryJet',
  description:
    'Dental SEO agency that gets practices into the Google Map Pack. We optimize GBP, build review velocity, and create clinical entity authority. 500+ businesses ranked. Free audit.',
  alternates: {
    canonical: 'https://factoryjet.com/us/services/dental-seo',
  },
  openGraph: {
    url: 'https://factoryjet.com/us/services/dental-seo',
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    title: 'Dental SEO Agency | Map Pack SEO for Dentists & Dental Practices | FactoryJet',
    description:
      'Dental SEO agency that gets practices into the Google Map Pack. We optimize GBP, build review velocity, and create clinical entity authority. 500+ businesses ranked. Free audit.',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/dental-seo/hero.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Dental SEO agency for US dental practices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental SEO Agency | Map Pack SEO for Dentists & Dental Practices | FactoryJet',
    description:
      'Dental SEO agency that gets practices into the Google Map Pack. GBP optimization, review velocity, clinical entity authority. 500+ businesses ranked. Free audit.',
    images: ['https://factoryjet.com/images/us/services/dental-seo/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD schemas
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dental SEO Agency — Map Pack SEO for Dentists and Dental Practices',
  url: 'https://factoryjet.com/us/services/dental-seo',
  description:
    'Dental SEO agency that gets practices into the Google Map Pack. GBP optimization, review velocity, clinical entity authority, and citation building for dental practices across the US.',
  inLanguage: 'en-US',
  dateModified: '2026-06-14',
  isPartOf: {
    '@type': 'WebSite',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/us/services' },
    { '@type': 'ListItem', position: 3, name: 'Dental SEO', item: 'https://factoryjet.com/us/services/dental-seo' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dental SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Dental SEO / Local SEO for Dentists',
  description:
    'Dental SEO services for US practices: Google Business Profile optimization, review velocity systems, NAP citation building, clinical entity authority content, and Map Pack ranking.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Map Pack and why does it matter for dental practices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Map Pack is the cluster of three local business listings Google shows at the top of results for location-based searches. For "dentist near me" and most other dental queries, it sits above the organic results and captures about 42% of all clicks. If your practice is not in those three spots, most searchers never see you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get into the Map Pack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most practices with a complete GBP and healthy citation profile see measurable movement within 8 to 12 weeks of starting a structured SEO program. Highly competitive markets with many established practices take longer. The foundation work we do in the first 30 days is what makes the timeline predictable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my practice already has a Google Business Profile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Great, that is the starting point. The question is whether every attribute on it is set correctly, whether it has consistent categories, whether photos are current, and whether the service list matches what your practice actually offers. We audit it against 40+ ranking factors in the first week and correct anything that is wrong or missing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my practice rank in multiple cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the Map Pack, Google uses your verified address as the geographic center. You can appear in searches from people in surrounding areas, but you cannot rank in a Map Pack for a city where your practice is not located. For organic search, geo-specific landing pages can target surrounding communities effectively.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my GBP category matter so much?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your primary category tells Google which searches to consider your practice for. A general dentist set to "Dentist" will miss specialty searches like "orthodontist near me" or "cosmetic dentist." Secondary categories let you capture those as well. Getting this wrong means being invisible for entire segments of your potential patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we get more Google reviews without sounding pushy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timing is everything. The best moment to ask is right after the appointment when the patient expresses satisfaction. A simple verbal ask from the front desk followed by a text with a direct link to your review page converts at far higher rates than email blasts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need separate landing pages for each dental service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A single "services" page that lists everything you do cannot rank for individual service searches. Separate pages with dedicated content, schema markup, and internal linking perform dramatically better than a combined page for either query.',
      },
    },
    {
      '@type': 'Question',
      name: 'What results should I expect in the first 90 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GBP visibility improvements are typically measurable within 30 to 60 days. You should see profile view increases, more direction requests, and more phone calls attributed to your profile before organic rankings shift. Organic keyword movements take longer but are often visible by month three.',
      },
    },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────────────────────── */

export default function DentalSEOPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <Script
        id="schema-dental-seo-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="schema-dental-seo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-dental-seo-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-dental-seo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-dental-seo-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <SiteHeader />
      <div className="dseo">

      {/* Cursor glow */}
      <div className="cursor-glow" id="dseo-cursor-glow" aria-hidden="true"></div>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="hero" aria-label="Hero">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <div className="eyebrow" data-reveal>
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Dental SEO Services
            </div>

            <h1 className="hero-h1" data-reveal data-reveal-delay="1">
              The Map Pack drives <span className="g-text">42%</span> of dental appointments.
            </h1>

            <div className="proof-chips" data-reveal data-reveal-delay="2">
              <span className="proof-chip">
                <span className="proof-chip-icon" aria-hidden="true">&#10003;</span>
                Map Pack: 42% of local search clicks (BrightLocal)
              </span>
              <span className="proof-chip">
                <span className="proof-chip-icon" aria-hidden="true">&#10003;</span>
                Reviews: 24% of your GBP ranking
              </span>
            </div>

            <p className="hero-sub" data-reveal data-reveal-delay="3">
              Every dentist in your zip code is fighting for those three spots. We put you in them and keep you there when new practices open nearby.
            </p>

            <div className="cta-row" data-reveal data-reveal-delay="4">
              <a href="https://calendly.com/bhavesh-factoryjet/30min" className="btn-primary">
                Get a Free Practice Audit
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#how-it-works" className="btn-ghost">
                How Map Pack Works
              </a>
            </div>

            <div className="hero-trust" data-reveal data-reveal-delay="5">
              <div className="hero-trust-avatars" aria-hidden="true">
                <div className="avatar">B</div>
                <div className="avatar">K</div>
                <div className="avatar">R</div>
                <div className="avatar">V</div>
              </div>
              <span className="trust-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>Trusted by 500+ US businesses</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" data-reveal data-reveal-delay="2">
            <div className="hero-img-wrap">
              <Image
                src="/images/us/services/dental-seo/hero.webp"
                alt="Modern bright dental clinic reception area with natural light"
                width={600}
                height={800}
                priority
              />
            </div>

            {/* Glassmorphism map card */}
            <div className="map-card-float" aria-label="Google Map Pack example" role="img">
              <div className="map-card-header">
                <div className="google-g" aria-hidden="true">G</div>
                <span className="map-search-text">Dentist near me</span>
              </div>
              <div className="map-result top">
                <div className="result-name">Bright Smile Family Dental</div>
                <div className="result-meta">
                  <span className="result-stars" aria-label="4.9 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span>4.9 (312)</span>
                  <span className="result-open">Open</span>
                </div>
              </div>
              <div className="map-result">
                <div className="result-name">Sunshine Pediatric Dentistry</div>
                <div className="result-meta">
                  <span className="result-stars" aria-label="4.6 stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                  <span>4.6 (89)</span>
                </div>
              </div>
              <div className="map-result">
                <div className="result-name">CitySmile Cosmetic</div>
                <div className="result-meta">
                  <span className="result-stars" aria-label="4.4 stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                  <span>4.4 (201)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <section className="stats-bar" aria-label="Key statistics" id="how-it-works">
        <div className="stats-inner">
          <div className="stat-card card" data-reveal>
            <div className="stat-num" data-counter="42" data-suffix="%">0%</div>
            <div className="stat-label">Map Pack click share on dental searches</div>
          </div>
          <div className="stat-card card" data-reveal data-reveal-delay="1">
            <div className="stat-num" data-counter="24" data-suffix="%">0%</div>
            <div className="stat-label">Reviews influence on Google Business Profile ranking</div>
          </div>
          <div className="stat-card card" data-reveal data-reveal-delay="2">
            <div className="stat-num" data-counter="3" data-suffix="x">0x</div>
            <div className="stat-label">More calls from Map Pack vs page 2 organic results</div>
          </div>
          <div className="stat-card card" data-reveal data-reveal-delay="3">
            <div className="stat-num" data-counter="8" data-suffix=" wks">0 wks</div>
            <div className="stat-label">Our average time to Map Pack entry for new clients</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SPECIALTY BENTO
      ═══════════════════════════════════════ */}
      <section className="specialty" aria-labelledby="specialty-h2">
        <div className="specialty-inner">
          <div className="section-label" data-reveal>By Service Type</div>
          <h2 className="section-h2" id="specialty-h2" data-reveal data-reveal-delay="1">
            Every dental specialty has different keywords. We know <em>all</em> of them.
          </h2>

          <div className="bento-grid">

            <div className="bento-tile tile-cream card span-tall" data-reveal>
              <div className="bento-tile-eyebrow">General Dentistry</div>
              <h3>The highest-volume keyword in dental SEO</h3>
              <p>&ldquo;Dentist near me&rdquo; pulls over 40,000 monthly searches in major US metros. It is the foundation every practice&rsquo;s local SEO strategy is built on. Getting this one right unlocks everything else.</p>
              <div className="bento-tile-stat">40K<span style={{ fontSize: '18px', fontWeight: 600 }}>/mo</span></div>
            </div>

            <div className="bento-tile tile-lav card" data-reveal data-reveal-delay="1">
              <div className="bento-tile-eyebrow">Cosmetic and Veneers</div>
              <h3>High-value cases start with a search</h3>
              <p>&ldquo;Dental veneers near me&rdquo; averages a $8K+ case value. Your content quality determines whether that searcher becomes a consultation or bounces to a competitor with a better page.</p>
              <div className="bento-tile-stat">$8K+</div>
            </div>

            <div className="bento-tile tile-dark card" data-reveal data-reveal-delay="2">
              <div className="bento-tile-eyebrow">Dental Implants</div>
              <h3>Your highest-revenue keyword needs schema</h3>
              <p>&ldquo;Dental implants near me&rdquo; drives 27,100 searches a month. Procedure schema markup and FAQ schema are non-negotiable for capturing featured snippets at the top of those results.</p>
              <div className="bento-tile-stat">27,100<span style={{ fontSize: '18px', fontWeight: 600 }}>/mo</span></div>
            </div>

            <div className="bento-tile tile-green card" data-reveal data-reveal-delay="1">
              <div className="bento-tile-eyebrow">Invisalign and Orthodontics</div>
              <h3>Two buyer journeys, two separate pages</h3>
              <p>&ldquo;Invisalign provider&rdquo; and &ldquo;clear aligners near me&rdquo; attract different searchers at different stages. One landing page tries to serve both and converts neither.</p>
            </div>

            <div className="bento-tile tile-peach card" data-reveal data-reveal-delay="2">
              <div className="bento-tile-eyebrow">Pediatric Dentistry</div>
              <h3>Seasonal peaks reward prepared practices</h3>
              <p>Search volume spikes every August as parents prep kids for back-to-school. A content strategy that runs year-round means you are visible when the spike hits, not scrambling to catch up.</p>
            </div>

            <div className="bento-tile tile-orange card span-full" data-reveal data-reveal-delay="3">
              <div className="tile-text">
                <div className="bento-tile-eyebrow">Emergency Dental</div>
                <h3>A 24/7 search pattern demands 24/7 visibility</h3>
                <p>&ldquo;Emergency dentist near me&rdquo; is searched at midnight on Sundays. Your GBP must clearly display hours and availability or Google will show the practice that does.</p>
              </div>
              <div className="tile-pull-stat" aria-label="Available 24 slash 7">24/7</div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEW VELOCITY
      ═══════════════════════════════════════ */}
      <section className="reviews" aria-labelledby="reviews-h2">
        <div className="reviews-inner">
          <div className="reviews-section-label" data-reveal>Google Business Profile Ranking</div>
          <div className="reviews-big-stat" data-reveal data-reveal-delay="1">24%</div>
          <p className="reviews-big-label" id="reviews-h2" data-reveal data-reveal-delay="2">
            of your Map Pack ranking is reviews.
          </p>

          <div className="reviews-cards">
            <div className="review-card card" data-reveal>
              <div className="review-card-icon" aria-hidden="true">&#11088;</div>
              <h3>Volume is the baseline</h3>
              <p>Practices with fewer than 50 reviews rarely appear in the Map Pack for competitive keywords. Volume signals that your practice is active and patients trust it enough to leave public feedback.</p>
            </div>
            <div className="review-card card" data-reveal data-reveal-delay="1">
              <div className="review-card-icon" aria-hidden="true">&#128337;</div>
              <h3>Recency beats old stars</h3>
              <p>A practice with 200 reviews from three years ago loses to a practice with 40 reviews from this month. Google weights recent activity heavily because it signals the business is still operating as described.</p>
            </div>
            <div className="review-card card" data-reveal data-reveal-delay="2">
              <div className="review-card-icon" aria-hidden="true">&#128172;</div>
              <h3>Every reply is a ranking signal</h3>
              <p>Owner responses to reviews are indexed by Google and contribute to your authority in local search. Responding to 100% of reviews, positive and negative, is one of the most overlooked local SEO levers.</p>
            </div>
          </div>

          <p className="reviews-closer" data-reveal>
            We build a <strong>repeatable review acquisition workflow</strong> that fits your front desk routine. Not a review widget your team sets up once and forgets.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GBP OPTIMIZATION
      ═══════════════════════════════════════ */}
      <section className="gbp" aria-labelledby="gbp-h2">
        <div className="gbp-inner">
          <div className="section-label" data-reveal>Google Business Profile</div>
          <div className="gbp-header">
            <h2 className="section-h2" id="gbp-h2" data-reveal data-reveal-delay="1">
              Your Google Business Profile is your strongest Map Pack signal.
            </h2>
          </div>
          <p className="gbp-intro" data-reveal data-reveal-delay="2">
            Most practices set it up once at launch and never touch it again. That is exactly how competitors move ahead of you. Four levers move the needle more than anything else.
          </p>
          <div className="gbp-grid">
            <div className="gbp-card card" data-reveal>
              <div className="gbp-card-num">01</div>
              <h3>Accepting New Patients toggle</h3>
              <p>This single attribute filters your practice in or out of &ldquo;accepting new patients&rdquo; searches, which represent a significant share of dental queries. Leaving it off by default is leaving appointments on the table.</p>
            </div>
            <div className="gbp-card card" data-reveal data-reveal-delay="1">
              <div className="gbp-card-num">02</div>
              <h3>Service category selection</h3>
              <p>Wrong primary and secondary categories make your practice invisible for specialty searches. Getting this right means Google knows to surface you for implants, orthodontics, and cosmetic procedures separately.</p>
            </div>
            <div className="gbp-card card" data-reveal data-reveal-delay="2">
              <div className="gbp-card-num">03</div>
              <h3>Photo cadence and quality</h3>
              <p>Practices that post four or more photos per month see 35% more direction requests than those with static profiles. We build and maintain a photo publishing calendar so this happens automatically.</p>
            </div>
            <div className="gbp-card card" data-reveal data-reveal-delay="3">
              <div className="gbp-card-num">04</div>
              <h3>Q&amp;A management</h3>
              <p>Anyone can post a question on your GBP, including competitors. Unmonitored Q&amp;As contain incorrect information that Google surfaces in search results. We audit and manage this monthly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════ */}
      <section className="process" aria-labelledby="process-h2" id="process">
        <div className="process-inner">
          <div className="section-label" data-reveal>How We Work</div>
          <h2 className="section-h2" id="process-h2" data-reveal data-reveal-delay="1">
            How we turn your practice into a new patient magnet.
          </h2>

          <div className="process-steps" role="list">
            <div className="process-connector" aria-hidden="true"></div>

            <div className="process-step" data-reveal role="listitem">
              <div className="step-dot" aria-hidden="true">1</div>
              <div className="step-title">Practice Audit</div>
              <div className="step-desc">Full diagnostic on your GBP, citation health, competitor Map Pack positions, and on-site technical signals.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="1" role="listitem">
              <div className="step-dot" aria-hidden="true">2</div>
              <div className="step-title">Keyword Strategy</div>
              <div className="step-desc">Map every dental keyword by specialty, intent, and zip code. No overlap, no wasted effort.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="2" role="listitem">
              <div className="step-dot" aria-hidden="true">3</div>
              <div className="step-title">GBP Rebuild</div>
              <div className="step-desc">Categories, services, photos, hours, Q&amp;A, posts. Every attribute set correctly from day one.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="3" role="listitem">
              <div className="step-dot" aria-hidden="true">4</div>
              <div className="step-title">Review System</div>
              <div className="step-desc">Front-desk workflow, timing triggers, response templates. A machine that generates reviews without you thinking about it.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="4" role="listitem">
              <div className="step-dot" aria-hidden="true">5</div>
              <div className="step-title">Monthly Growth</div>
              <div className="step-desc">Rank tracking, competitor monitoring, content updates, and a monthly call to walk through what changed and what is next.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENTITY AUTHORITY
      ═══════════════════════════════════════ */}
      <section className="entity" aria-labelledby="entity-h2">
        <div className="entity-inner">
          <div className="entity-label" data-reveal>2026 Algorithm Update</div>
          <h2 className="entity-h2" id="entity-h2" data-reveal data-reveal-delay="1">
            Google now understands dental terminology at a clinical level.
          </h2>
          <p className="entity-sub" data-reveal data-reveal-delay="2">
            Keyword stuffing was replaced by entity relationships years ago. What that actually means for a dental practice in 2026:
          </p>
          <div className="entity-cards">
            <div className="entity-card card" data-reveal>
              <div className="entity-card-chip">Procedure Entities</div>
              <h3>Procedure names, not just keywords</h3>
              <p>Google&rsquo;s Knowledge Graph links &ldquo;osseointegration&rdquo; to &ldquo;implant&rdquo; to &ldquo;oral surgeon&rdquo; to your practice, or a competitor&rsquo;s. We structure your content so the entity graph resolves to you for every procedure you offer.</p>
            </div>
            <div className="entity-card card" data-reveal data-reveal-delay="1">
              <div className="entity-card-chip">NAP Consistency</div>
              <h3>Your name, address, and phone must match exactly</h3>
              <p>Across Yelp, Healthgrades, ZocDoc, WebMD, and 40+ other directories, one character difference creates a conflicting entity signal. We audit and fix every citation so Google trusts your practice location data.</p>
            </div>
            <div className="entity-card card" data-reveal data-reveal-delay="2">
              <div className="entity-card-chip">Schema Markup</div>
              <h3>Structured data closes the loop</h3>
              <p>Dentist schema, MedicalProcedure markup, and LocalBusiness JSON-LD tell Google what you are, what you do, and where you are in machine-readable format. This is not optional for practices competing in 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM
      ═══════════════════════════════════════ */}
      <section className="team" aria-labelledby="team-h2">
        <div className="team-inner">
          <div className="team-img-wrap img-wrap" data-reveal>
            <Image
              src="/images/us/services/dental-seo/team.webp"
              alt="FactoryJet dental SEO team"
              width={600}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="team-right">
            <div className="section-label" data-reveal>The Team</div>
            <h2 className="section-h2" id="team-h2" data-reveal data-reveal-delay="1">
              Dental SEO specialists, not generalists.
            </h2>
            <div className="team-chips" data-reveal data-reveal-delay="2">
              <span className="trust-chip">500+ businesses served</span>
              <span className="trust-chip">Map Pack specialists</span>
              <span className="trust-chip">No long-term contracts</span>
              <span className="trust-chip">US-focused</span>
            </div>
            <div className="founder-card card" data-reveal data-reveal-delay="3">
              <div className="founder-name">Bhavesh Barot</div>
              <div className="founder-role">Founder, FactoryJet</div>
              <p className="founder-bio">
                Returns on your time. If we are not generating measurable new patient inquiries within 90 days, something is wrong and we fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="faq" aria-labelledby="faq-h2" id="faq">
        <div className="faq-inner">

          <div className="faq-sidebar">
            <div className="faq-sidebar-label" data-reveal>Questions</div>
            <h2 className="faq-sidebar-h2" id="faq-h2" data-reveal data-reveal-delay="1">
              Common questions about dental SEO
            </h2>
            <p className="faq-sidebar-sub" data-reveal data-reveal-delay="2">
              Twenty questions across five categories. If yours is not here, ask on the call.
            </p>
            <a href="https://calendly.com/bhavesh-factoryjet/30min" className="faq-cta-pill" data-reveal data-reveal-delay="3">
              Book a Free Audit
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="faq-content" role="list">

            <div className="faq-category">Map Pack Basics</div>

            <details>
              <summary>
                What is the Map Pack and why does it matter for dental practices?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>The Map Pack is the cluster of three local business listings Google shows at the top of results for location-based searches. For &ldquo;dentist near me&rdquo; and most other dental queries, it sits above the organic results and captures about 42% of all clicks. If your practice is not in those three spots, most searchers never see you.</p>
            </details>

            <details>
              <summary>
                How long does it take to get into the Map Pack?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Most practices with a complete GBP and healthy citation profile see measurable movement within 8 to 12 weeks of starting a structured SEO program. Highly competitive markets with many established practices take longer. The foundation work we do in the first 30 days is what makes the timeline predictable.</p>
            </details>

            <details>
              <summary>
                What if my practice already has a Google Business Profile?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Great, that is the starting point. The question is whether every attribute on it is set correctly, whether it has consistent categories, whether photos are current, and whether the service list matches what your practice actually offers. We audit it against 40+ ranking factors in the first week and correct anything that is wrong or missing.</p>
            </details>

            <details>
              <summary>
                Can my practice rank in multiple cities?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>For the Map Pack, Google uses your verified address as the geographic center. You can appear in searches from people in surrounding areas, but you cannot rank in a Map Pack for a city where your practice is not located. For organic search, geo-specific landing pages can target surrounding communities effectively.</p>
            </details>

            <div className="faq-category">Google Business Profile</div>

            <details>
              <summary>
                Why does my GBP category matter so much?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Your primary category tells Google which searches to consider your practice for. A general dentist set to &ldquo;Dentist&rdquo; will miss specialty searches like &ldquo;orthodontist near me&rdquo; or &ldquo;cosmetic dentist.&rdquo; Secondary categories let you capture those as well. Getting this wrong means being invisible for entire segments of your potential patients.</p>
            </details>

            <details>
              <summary>
                How many photos should my GBP have?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Practices with more than 100 photos get significantly more profile views, but the cadence matters as much as volume. Four or more new photos per month signals to Google that your business is active. Interior shots, exterior shots, team photos, and equipment all contribute. Stock photos do not count and can actually hurt you.</p>
            </details>

            <details>
              <summary>
                Should I respond to negative reviews?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Yes, every time, within 48 hours. Negative reviews that go unanswered look worse to potential patients than the review itself. A professional, calm response demonstrates that you take feedback seriously. It is also indexed by Google, so your response language becomes part of your local relevance signal for patient-experience related searches.</p>
            </details>

            <details>
              <summary>
                What are GBP posts and do they help SEO?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>GBP posts let you publish updates, offers, events, and service highlights directly on your profile. They expire after seven days for most post types. Consistent posting signals activity and gives Google fresh content to associate with your practice. They appear in your knowledge panel and can increase profile engagement metrics that correlate with ranking.</p>
            </details>

            <div className="faq-category">Review Strategy</div>

            <details>
              <summary>
                How do we get more Google reviews without sounding pushy?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Timing is everything. The best moment to ask is right after the appointment when the patient expresses satisfaction. A simple verbal ask from the front desk followed by a text with a direct link to your review page converts at far higher rates than email blasts. We design the full workflow including the script, the SMS copy, and the timing so your team can use it without it feeling awkward.</p>
            </details>

            <details>
              <summary>
                Can I offer incentives for reviews?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>No. Google explicitly prohibits incentivized reviews and can remove your entire review count if it detects the pattern. Beyond the Google policy, HIPAA also creates complications around acknowledging that someone was your patient publicly. The right approach is making it easy to leave a review for patients who are already happy, not manufacturing reviews.</p>
            </details>

            <details>
              <summary>
                What review count do I need to be competitive?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>This depends entirely on your local market. In smaller markets, 40 reviews with a 4.8 average can dominate. In competitive urban markets, the top Map Pack positions often have 300 or more. We pull the actual counts for the practices currently in your Map Pack as part of your audit so you know exactly what target you are competing against.</p>
            </details>

            <details>
              <summary>
                How do I handle a fake negative review?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Report it to Google using the flag feature and document your reasoning. Google does remove reviews that violate policies, but the process takes time. While waiting, respond professionally to the review without admitting any connection to the reviewer, since there may not be one. We handle the reporting and response drafting as part of ongoing GBP management.</p>
            </details>

            <div className="faq-category">Technical and On-Site SEO</div>

            <details>
              <summary>
                Do I need separate landing pages for each dental service?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Yes. A single &ldquo;services&rdquo; page that lists everything you do cannot rank for individual service searches. Someone searching &ldquo;dental implants near me&rdquo; and someone searching &ldquo;Invisalign dentist near me&rdquo; have different intent. Separate pages with dedicated content, schema markup, and internal linking perform dramatically better than a combined page for either query.</p>
            </details>

            <details>
              <summary>
                What is schema markup and does my dental site need it?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Schema markup is structured data code you add to your site that tells Google exactly what your content means. For dental practices, this includes Dentist schema, MedicalProcedure schema, and LocalBusiness JSON-LD. Google uses it to show rich results in search, including your opening hours, star rating, and service categories directly in the search results page before anyone clicks.</p>
            </details>

            <details>
              <summary>
                How important is site speed for dental SEO?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Core Web Vitals are an official Google ranking factor. More practically, a slow site loses patients who are searching on a mobile phone and will not wait more than three seconds for a page to load. Mobile speed is especially critical for emergency dental searches where someone is in discomfort and needs to call immediately.</p>
            </details>

            <details>
              <summary>
                Should I build location pages for every city near my practice?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Pages targeting surrounding communities can capture organic traffic from people willing to travel to your location, but only if those pages have genuinely useful local content. Thin pages that swap city names into a template get filtered by Google and do not rank. When we build location pages, each one earns its own page with research specific to that community.</p>
            </details>

            <div className="faq-category">Results and Expectations</div>

            <details>
              <summary>
                What results should I expect in the first 90 days?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>GBP visibility improvements are typically measurable within 30 to 60 days. You should see profile view increases, more direction requests, and more phone calls attributed to your profile before organic rankings shift. Organic keyword movements take longer but are often visible by month three. We set up tracking before starting so you can see exactly what changed and when.</p>
            </details>

            <details>
              <summary>
                How do you measure success for a dental SEO campaign?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>New patient inquiries is the only metric that matters for your practice&rsquo;s bottom line. We track that along with the upstream signals: GBP calls, direction requests, website visits from local search, keyword rankings by specialty, and review velocity. You get a monthly report connecting all of those to actual business outcomes.</p>
            </details>

            <details>
              <summary>
                Can SEO replace my current patient referral program?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>They work differently and neither replaces the other. Referrals from existing patients convert at higher rates because there is already trust built in. SEO generates new patient volume from people who have no existing relationship with your practice, which expands your total patient base beyond your existing network. The strongest practices run both.</p>
            </details>

            <details>
              <summary>
                What happens if Google changes its algorithm while we are running a campaign?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Google updates its local search algorithm multiple times per year. Our approach focuses on signals that have been consistent across algorithm changes: citation accuracy, review velocity, GBP completeness, and on-site technical health. Practices that chased shortcuts or artificial signals take the hit. Practices built on clean fundamentals tend to hold or improve after updates.</p>
            </details>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="final-cta" aria-labelledby="final-cta-h2">
        <div className="final-cta-inner">
          <div className="final-cta-label" data-reveal>Free Practice Audit</div>
          <h2 id="final-cta-h2" data-reveal data-reveal-delay="1">
            How many new patients are you leaving on the table?
          </h2>
          <p className="final-cta-sub" data-reveal data-reveal-delay="2">
            We audit your GBP, your Map Pack position, your review velocity, and your top three competitors. No charge. No obligation. Just a clear picture of where you stand.
          </p>
          <div data-reveal data-reveal-delay="3">
            <a href="https://calendly.com/bhavesh-factoryjet/30min" className="btn-white">
              Book Your Free Audit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <p className="final-trust" data-reveal data-reveal-delay="4">30-minute call. No sales pitch. Audit delivered same day.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLIENT-SIDE ANIMATIONS
      ═══════════════════════════════════════ */}
      <Script id="dental-seo-animations" strategy="afterInteractive">{`
(function () {
  'use strict';

  /* Cursor glow */
  var glow = document.getElementById('dseo-cursor-glow');
  if (glow && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }, { passive: true });
  }

  /* IntersectionObserver stagger reveals */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.dseo [data-reveal]').forEach(function (el) {
    io.observe(el);
  });

  /* Counter animation */
  function countUp(el, to, suffix) {
    suffix = suffix || '';
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      var t0 = null;
      var duration = 1800;
      var decimals = 0;
      function tick(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / duration, 1);
        var ease = 1 - Math.pow(1 - p, 3);
        var val = ease * to;
        el.textContent = val.toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = to + suffix;
      }
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(el);
  }

  document.querySelectorAll('.dseo [data-counter]').forEach(function (el) {
    var to = parseInt(el.getAttribute('data-counter'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    el.textContent = '0' + suffix;
    countUp(el, to, suffix);
  });

  /* Smooth scroll for anchor links */
  document.querySelectorAll('.dseo a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* Bento tile pointer-tilt */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.dseo .bento-tile.card').forEach(function (tile) {
      tile.addEventListener('mousemove', function (e) {
        var rect = tile.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        tile.style.transform = 'translateY(-5px) rotateX(' + (-dy * 3) + 'deg) rotateY(' + (dx * 3) + 'deg)';
      });
      tile.addEventListener('mouseleave', function () {
        tile.style.transform = '';
      });
    });
  }

})();
`}</Script>

      </div>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
