import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
    {
      q: 'Is SEO dead in 2026?',
      a: 'No. Google processes over 8.5 billion searches per day in 2026. Organic search drives more website traffic than social media, email, and paid advertising combined for most small businesses. SEO has changed, thin content performs worse, AI Overviews intercept some informational queries, but the channel itself is larger than ever.',
    },
    {
      q: 'Has AI killed SEO?',
      a: "AI has changed how search results are displayed, not whether people search. More importantly, AI search tools like ChatGPT and Perplexity pull answers from indexed web content, meaning strong SEO is the prerequisite for AI visibility. You cannot rank in AI answers if Google cannot index and trust your content.",
    },
    {
      q: 'What has changed about SEO in 2026?',
      a: "Three things have genuinely changed: (1) AI Overviews now appear for many informational queries, reducing clicks for 'how' and 'what' questions. (2) Content quality standards have risen, thin, generic pages no longer rank. (3) Structured content with clear authorship and schema markup now performs significantly better than before.",
    },
    {
      q: 'Are Google AI Overviews hurting website traffic?',
      a: 'For informational queries (how-to articles, definitions, general knowledge), AI Overviews have reduced CTR by 15–25% according to Search Engine Land analysis. However, commercial queries ("best web design agency in Austin"), local queries ("plumber near me"), and transactional queries remain largely unaffected because AI Overviews do not replace Map Pack results or service-specific searches.',
    },
    {
      q: 'What type of SEO content is being hurt most by AI?',
      a: "Content that provides pure information with no unique expertise, 'what is X' articles, generic listicles, dictionary-style definitions, is losing traffic to AI Overviews. Content that drives commercial decisions (service pages, case studies, comparison posts, local landing pages) is holding or growing.",
    },
    {
      q: 'Is local SEO still worth it in 2026?',
      a: 'Yes, local SEO is arguably stronger in 2026 than in any prior year. AI Overviews rarely appear for local queries, "near me" searches continue growing, and Google Business Profile signals directly influence both Map Pack rankings and AI-generated local recommendations.',
    },
    {
      q: 'Does ChatGPT use SEO to find answers?',
      a: 'ChatGPT with web browsing and ChatGPT Search index content from the web. Bing powers a significant portion of ChatGPT Search results. Pages that rank well in Bing organic results, and have clear structure, authorship, and schema, are far more likely to be cited in ChatGPT responses.',
    },
    {
      q: 'Does Perplexity use Google search results?',
      a: 'Perplexity uses its own web crawler plus Bing and other sources. Pages that are well-indexed, load quickly, and have structured content with clear factual claims are consistently cited in Perplexity answers. Good technical SEO directly improves Perplexity citation rates.',
    },
    {
      q: 'What is GEO and how does it relate to SEO?',
      a: "GEO (Generative Engine Optimization) is the practice of optimizing content to appear in AI-generated answers across ChatGPT, Perplexity, Claude, and Google AI Overviews. GEO is not separate from SEO, it builds on the same foundations: indexed pages, structured content, E-E-A-T signals, and schema markup.",
    },
    {
      q: 'Will Google be replaced by AI search?',
      a: "Not in 2026. Google's market share remains above 89% globally. AI search tools like Perplexity and ChatGPT are growing, but from a small base. Perplexity's CEO said the product handled 780 million queries across the whole of May 2025, while Google processes roughly 8.5 billion searches every single day. They are additive channels, not Google replacements.",
    },
    {
      q: 'What SEO strategies no longer work in 2026?',
      a: "Several tactics have lost effectiveness: keyword stuffing and exact-match repetition, thin content targeting high-volume head terms with no unique perspective, private blog network (PBN) link schemes, auto-generated content farms, and exact-match domain strategies. What still works: topical authority, original data and research, clear authorship, and technical SEO foundations.",
    },
    {
      q: 'What SEO strategies work best in 2026?',
      a: "The strategies producing the best results in 2026: topical cluster content (hub + supporting articles), original research and first-party data, FAQ schema and Article schema for AI extraction, building E-E-A-T signals (bylines, about pages, author credentials), local SEO with active Google Business Profile management, and core web vitals optimization.",
    },
    {
      q: 'Is content marketing still worth it for SEO?',
      a: "Yes, but the bar has risen. Content that earns rankings and AI citations in 2026 is genuinely expert, original, and structured for both human readers and AI extraction. Generic AI-written content at volume performs poorly. Fewer, higher-quality pieces consistently outperform volume-based content strategies.",
    },
    {
      q: 'How much traffic do AI Overviews send to websites?',
      a: "Early Semrush research (2024) found that AI Overviews include links in approximately 80% of appearances, but those links receive fewer clicks than traditional position-1 results. The net effect is lower CTR for informational queries, but being cited in an AI Overview still drives brand awareness and some referral traffic.",
    },
    {
      q: 'Should small businesses still invest in SEO in 2026?',
      a: "Yes. For most small businesses, especially service businesses, local businesses, and e-commerce. SEO remains the highest long-term ROI marketing channel. The businesses that abandoned SEO in 2023–2024 citing 'AI will replace search' have largely reversed course as organic traffic continued to grow.",
    },
    {
      q: 'How do you optimize for Google AI Overviews?',
      a: "Optimizing for AI Overviews follows the same principles as traditional SEO, with added emphasis on: answer-first content structure (direct answer in the first paragraph), FAQ sections with clear question-and-answer pairs, FAQPage schema markup, short paragraph length (2–3 sentences), and citing verifiable sources and statistics.",
    },
    {
      q: 'Is link building still important for SEO in 2026?',
      a: "Yes. Links remain one of Google's strongest ranking signals. What has changed is quality weighting, a handful of genuine editorial links from relevant industry sites outperforms hundreds of low-quality directory links. AI content farms have made authentic link acquisition a stronger differentiator than it was three years ago.",
    },
    {
      q: 'What is zero-click search and how does it affect SEO?',
      a: "Zero-click search refers to queries where Google displays the answer directly in the SERP, in a featured snippet, AI Overview, or knowledge panel, and the user does not click through. Zero-click rates have grown with AI Overviews, particularly for informational queries. The SEO response is to target commercial and transactional queries where zero-click is less common.",
    },
    {
      q: 'Can you rank in AI search results without traditional SEO?',
      a: "No. AI search tools rely on indexed, trusted web content to generate answers. A page that does not rank in traditional search, because it is not indexed, has poor technical SEO, or lacks authority signals, is also unlikely to appear in AI-generated answers. Traditional SEO is the foundation, not an alternative.",
    },
    {
      q: 'Is voice search killing traditional SEO?',
      a: "Voice search adoption plateaued in 2022–2023 and has not meaningfully displaced text search. Voice queries tend to match conversational, question-based content, which is exactly what good SEO content should target anyway. Voice search has influenced best practices (natural language, question H2s) but has not displaced the channel.",
    },
    {
      q: 'How does FactoryJet build websites for SEO in 2026?',
      a: "Every FactoryJet website ships with technical SEO built in from day one: Article and FAQPage schema, Core Web Vitals optimization, clean URL structure, proper internal linking, and mobile-first performance. This means clients start the SEO clock from launch rather than spending the first 6–8 weeks on technical remediation.",
    },
    {
      q: 'What is the biggest SEO mistake small businesses make in 2026?',
      a: "The most common mistake: abandoning SEO because AI search is growing, then watching competitors capture organic traffic that keeps compounding. The second most common: continuing to publish thin, generic content that AI Overviews simply absorb, rather than shifting to expert, conversion-focused content that AI cannot replace.",
    },
  ];

export const post: BlogPost = {
  id: '222',
  slug: 'is-seo-dead-2026-ai-search-data',
  title: 'Is SEO Dead in 2026? What the AI Search Data Actually Says',
  excerpt:
    'Every year someone declares SEO dead. In 2026, they have a better argument than ever. AI Overviews, ChatGPT search, and Perplexity are reshaping how people find businesses. Here is what the data actually shows.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 7, 2026',
  readTime: '10 min read',
  imageUrl: '/blog-images/is-seo-dead-2026-ai-search-data.webp',
  meta: {
    title: 'Is SEO Dead in 2026? What the AI Search Data Actually Says',
    description:
      "Is SEO dead in 2026? The short answer: no, but it has changed significantly. Here's what the real traffic data from AI Overviews, ChatGPT, and Perplexity shows about organic search in 2026.",
  },
  keyTakeaways: [
    'SEO is not dead. Google processes over 8.5 billion searches per day in 2026, and organic search drives more traffic than any other digital channel for most small businesses.',
    'AI Overviews have reduced click-through rates for informational queries by 15–25%, but commercial and local queries are largely unaffected.',
    'The businesses being hurt most are those that built their SEO strategy around thin, informational content, not those with service pages, local SEO, and conversion-focused content.',
    'AI search tools (ChatGPT, Perplexity, Claude) pull answers from indexed web content, meaning strong SEO is now the prerequisite for AI visibility, not an alternative to it.',
    'The shift is not from SEO to AI, it is from keyword-stuffed content to genuinely useful, structured, expert-authored content. That transition rewards good SEO practitioners.',
    'Local SEO is more alive than ever: AI Overviews rarely replace local pack results, and "near me" searches continue growing year-over-year.',
  ],
  faqs,
  content: (
    <article>
      {/* ── SCHEMA ─────────────────────────────────────────────────────── */}
      {/* Article, BreadcrumbList and FAQPage schema are emitted once by the blog route (src/app/blog/[slug]/page.tsx). The literal copy that lived here duplicated all three types. */}

      {/* ── QUICK ANSWER ───────────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #fff7f0 0%, #fff3e8 100%)',
          border: '1.5px solid #FF6B0030',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: '#FF6B00',
            marginBottom: '8px',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Quick Answer
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          SEO is not dead. Google processes <strong>8.5 billion searches per day</strong> in 2026.
          What is dying is <em>lazy SEO</em>, thin content, keyword stuffing, and generic
          listicles. The businesses winning with organic search in 2026 shifted to expert,
          structured, conversion-focused content. That shift is an opportunity, not a threat.
        </p>
      </div>

      {/* ── INTRO ───────────────────────────────────────────────────────── */}
      <p>
        "SEO is dead" gets published every year. In 2026, the argument finally has some real
        ammunition: Google AI Overviews are intercepting informational queries, ChatGPT search is
        growing, Perplexity{' '}
        <a
          href="https://techcrunch.com/2025/06/05/perplexity-received-780-million-queries-last-month-ceo-says/"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          handled 780 million queries in May 2025
        </a>
        , and zero-click search rates have
        climbed. If you have been watching your informational blog traffic decline, you have
        first-hand evidence that something has changed.
      </p>
      <p>
        But declining traffic on one type of content is not the same as a dead channel. This post
        looks at what the data actually shows, where SEO is losing ground, where it is holding,
        and what the businesses outperforming their competitors in organic search in 2026 are doing
        differently.
      </p>

      {/* ── DATA TABLE ─────────────────────────────────────────────────── */}
      <h2>How AI Search Has Actually Affected Organic Traffic. By Query Type</h2>
      <p>
        The impact of AI Overviews and AI search tools is not uniform across all query types. The
        table below breaks down actual observed effects by query category, sourced from Search
        Engine Land (2024), Semrush (2025), and BrightEdge (2024) research.
      </p>
      <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '15px',
            lineHeight: '1.5',
          }}
        >
          <thead>
            <tr style={{ background: '#FF6B00', color: '#fff' }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', borderRadius: '8px 0 0 0' }}>
                Query Type
              </th>
              <th style={{ padding: '12px 16px', textAlign: 'center' }}>AI Overview Frequency</th>
              <th style={{ padding: '12px 16px', textAlign: 'center' }}>CTR Impact</th>
              <th style={{ padding: '12px 16px', textAlign: 'center', borderRadius: '0 8px 0 0' }}>
                Verdict
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Informational ("how to", "what is")', 'High (60–80%)', '−15 to −25%', '⚠ Declining'],
              ['Commercial ("best X for Y")', 'Moderate (30–40%)', '−5 to −10%', '→ Stable'],
              ['Transactional ("buy X", "X pricing")', 'Low (10–15%)', 'Minimal', '✓ Strong'],
              ['Local ("X near me", city service)', 'Very Low (<5%)', 'Minimal', '✓ Growing'],
              ['Navigational (brand names)', 'Rare', 'None', '✓ Unaffected'],
            ].map(([type, freq, ctr, verdict], i) => (
              <tr
                key={i}
                style={{
                  background: i % 2 === 0 ? '#fff' : '#fff8f4',
                  verticalAlign: 'top',
                }}
              >
                <td style={{ padding: '11px 16px', borderBottom: '1px solid #f0ede9', fontWeight: 500 }}>
                  {type}
                </td>
                <td style={{ padding: '11px 16px', borderBottom: '1px solid #f0ede9', textAlign: 'center' }}>
                  {freq}
                </td>
                <td
                  style={{
                    padding: '11px 16px',
                    borderBottom: '1px solid #f0ede9',
                    textAlign: 'center',
                    color: ctr.startsWith('−') ? '#dc2626' : '#16a34a',
                    fontWeight: 600,
                  }}
                >
                  {ctr}
                </td>
                <td
                  style={{
                    padding: '11px 16px',
                    borderBottom: '1px solid #f0ede9',
                    textAlign: 'center',
                    fontWeight: 600,
                    color: verdict.includes('Declining') ? '#dc2626' : verdict.includes('Stable') ? '#d97706' : '#16a34a',
                  }}
                >
                  {verdict}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
          Source: Search Engine Land AI Overview CTR Analysis (2024); Semrush State of Search
          (2025); BrightEdge AI Search Impact Report (2024). CTR figures represent median
          observations across tracked queries.
        </p>
      </div>

      {/* ── SECTION: THE REAL STORY ─────────────────────────────────────── */}
      <h2>The Real Story: Which Businesses Are Actually Losing SEO Traffic</h2>
      <p>
        The businesses experiencing the steepest organic traffic declines in 2024–2026 share a
        common profile: their content strategy was built almost entirely around informational,
        top-of-funnel articles, "what is X," "how does X work," "X vs Y explained", with little
        conversion-focused, local, or transactional content.
      </p>
      <p>
        These are exactly the query types where Google AI Overviews appear most frequently. When
        the answer to a user's question fits neatly into a two-paragraph AI Overview, many users do
        not click through to the source. The content model that worked well in 2019–2022, publish
        hundreds of informational articles, rank for head terms, drive volume, is significantly
        less effective in 2026.
      </p>
      <p>
        The businesses not experiencing these declines, and in many cases growing organic traffic
       , have content strategies weighted toward service pages, case studies, local landing pages,
        comparison posts with original data, and conversion-focused content where the user needs to
        visit the site to take an action. AI Overviews rarely displace this type of content.
      </p>

      {/* ── SECTION: AI SEARCH NEEDS SEO ───────────────────────────────── */}
      <h2>AI Search Does Not Replace SEO. It Requires It</h2>
      <p>
        Here is the part of the "SEO is dead" narrative that consistently gets ignored: AI search
        tools do not generate answers from nothing. They pull from indexed, trusted web content.
      </p>
      <p>
        ChatGPT Search relies heavily on Bing's index. Perplexity runs its own crawler and
        supplements with Bing. Google AI Overviews cite pages from Google's organic index.{' '}
        <a href="/blog/how-to-get-chatgpt-to-recommend-your-business-2026">
          Getting cited by ChatGPT
        </a>{' '}
        requires the same foundational work as ranking in traditional search: indexed pages, fast
        load times, clear content structure, authoritative signals, and schema markup.
      </p>
      <p>
        A page that does not rank organically is also, by definition, less likely to appear in
        AI-generated answers. The two channels are not in competition, they are stacked. You
        cannot skip traditional SEO and go straight to{' '}
        <a href="/blog/geo-cost-small-business-2026">
          GEO (Generative Engine Optimization)
        </a>
        . SEO is the foundation GEO is built on.
      </p>

      {/* ── SECTION: WHAT WORKS ─────────────────────────────────────────── */}
      <h2>What Actually Works for SEO in 2026</h2>
      <p>
        The practices driving the best organic results in 2026 are not dramatically different from
        what has always worked, they are just executed at a higher standard than was previously
        required to compete.
      </p>

      <h3>Topical Authority Over Keyword Volume</h3>
      <p>
        Google's Helpful Content system rewards sites that demonstrate deep expertise across a
        topic cluster, not those that target the highest search volume keywords with thin pages.
        Publishing 8–12 deeply interlinked articles that collectively cover a topic from every
        angle outperforms 50 shallow posts targeting scattered keywords.
      </p>

      <h3>Original Data and First-Party Research</h3>
      <p>
        Content containing original research, surveys, proprietary data, case study results,
        client outcomes, earns backlinks, AI citations, and rankings that generic content cannot.
        Semrush's 2024 analysis found pages with original statistics earn 2.5x more backlinks than
        purely derivative content. This is the single highest-leverage content investment in 2026.
      </p>

      <h3>Structured Content for AI Extraction</h3>
      <p>
        Pages optimized for{' '}
        <a href="/blog/how-to-show-up-in-google-ai-overviews-small-business">
          Google AI Overviews
        </a>{' '}
        and other AI surfaces share a consistent structure: a direct answer in the opening
        paragraph, question-phrased H2 headings, short paragraphs (2–3 sentences), FAQ sections
        with FAQPage schema, and Article schema with clear byline attribution. This structure
        simultaneously improves traditional rankings and AI citation rates.
      </p>

      <h3>E-E-A-T Signals That Are Verifiable</h3>
      <p>
        Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) has
        become more important as AI-generated content has flooded the web. The differentiator is
        verifiable signals: named authors with verifiable credentials, about pages with real bios,
        case studies with real client names, and citations to primary sources. These signals cannot
        be faked at scale, which is exactly why Google weights them heavily.
      </p>

      <h3>Technical SEO as a Competitive Moat</h3>
      <p>
        Core Web Vitals compliance, mobile-first design, clean crawl architecture, and proper
        schema implementation were once hygiene requirements. In 2026, they are competitive
        differentiators, because a large percentage of sites still fail them. A site that loads in
        under 2 seconds on mobile with green Core Web Vitals starts every ranking competition with
        a structural advantage.
      </p>

      {/* ── SECTION: LOCAL ─────────────────────────────────────────────── */}
      <h2>Local SEO Is More Alive Than Ever</h2>
      <p>
        If you are a local service business, a contractor, a restaurant, a dental practice, a web
        design agency serving a specific city, the "SEO is dead" narrative is almost entirely
        irrelevant to you. Google AI Overviews appear for fewer than 5% of local queries. Map Pack
        results dominate the SERP for "near me" searches, and those results are driven by Google
        Business Profile signals, local citations, and reviews.
      </p>
      <p>
        "Near me" searches grew 150% over the last five years and continue growing. The user
        behavior driving them, someone with immediate local intent searching on a mobile device ,
        is not being displaced by AI chat interfaces. Local SEO is the most durable segment of
        organic search in 2026.
      </p>

      {/* ── SECTION: WHAT TO DO ─────────────────────────────────────────── */}
      <h2>What Small Businesses Should Actually Do in 2026</h2>
      <p>
        If you have been watching organic traffic decline, the question is not whether to keep
        doing SEO, it is which part of your SEO strategy to pivot. Here is the practical
        framework:
      </p>
      <ul>
        <li>
          <strong>Audit your content by query type.</strong> Pull your GSC data and categorize
          your top pages. Which ones target informational queries that AI Overviews now intercept?
          Which target commercial, transactional, or local queries? Shift investment toward the
          second group.
        </li>
        <li>
          <strong>Add conversion weight to existing content.</strong> Informational posts that
          rank but generate no leads can be repurposed: add a service section, a case study
          reference, or a CTA that turns readers into prospects. This adds commercial value without
          abandoning the existing ranking.
        </li>
        <li>
          <strong>Build local SEO if you serve a geographic area.</strong> A complete Google
          Business Profile with regular posts, active review generation, and consistent NAP
          citations across the web is one of the highest-ROI SEO investments a local business can
          make in 2026.
        </li>
        <li>
          <strong>Add schema markup to every page.</strong> Article, FAQPage, LocalBusiness, and
          BreadcrumbList schema improve both traditional rankings and AI citation rates. It is a
          one-time implementation with compounding returns.
        </li>
        <li>
          <strong>Do not abandon SEO because of AI.</strong> The businesses that pulled back from
          SEO in 2023–2024 citing AI disruption largely found themselves watching competitors
          capture compounding organic traffic they gave up. The channel is evolving, not ending.
        </li>
      </ul>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          borderRadius: '16px',
          padding: '48px 40px',
          marginTop: '56px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: '#FF6B00',
            fontWeight: 700,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}
        >
          FactoryJet · Built for 2026 SEO
        </p>
        <h3
          style={{
            color: '#fff',
            fontSize: '26px',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '16px',
          }}
        >
          Want a website that works with AI search, not against it?
        </h3>
        <p
          style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '32px', lineHeight: 1.65 }}
        >
          Every FactoryJet site ships with Article schema, FAQPage schema, Core Web Vitals
          optimization, and local SEO structure built in, the exact foundations that determine
          both traditional rankings and AI citation rates in 2026.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#FF6B00',
            color: '#fff',
            fontWeight: 700,
            fontSize: '16px',
            padding: '14px 36px',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          Talk to the Founder. Free 30-min Call
        </a>
        <p style={{ color: '#475569', fontSize: '13px', marginTop: '16px' }}>
          Bring your site. We will show you exactly where you stand and what to fix first.
        </p>
      </div>

      {/* ── AUTHOR ──────────────────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start',
          marginTop: '56px',
          padding: '28px',
          background: '#f9fafb',
          borderRadius: '12px',
          border: '1px solid #f0ede9',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B00, #FFB347)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '20px',
          }}
        >
          B
        </div>
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: '16px',
              marginBottom: '4px',
              color: '#1a1a1a',
            }}
          >
            Bhavesh Barot
          </p>
          <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            Founder of FactoryJet. Returns on your time, 500+ websites delivered, 12+ years in
            web development and e-commerce. Obsessed with measurable results, not vanity metrics.
          </p>
        </div>
      </div>
    </article>
  ),
};

/*
AI IMAGE PROMPT. Blog #6 (unique concept: "the verdict"):
A clean, minimal flat-lay studio shot on a pure white background. Center of frame: a large
bold question mark made of solid matte orange, casting a soft shadow. On the left side of the
question mark, small symbolic icons of decline, a tiny downward arrow, a small faded newspaper ,
arranged neatly. On the right side, icons of growth, a tiny upward green chart line, a small
orange magnifying glass, a small search bar. The overall composition is balanced and symmetrical,
like a modern magazine editorial layout. Soft diffused lighting, no text, ultra-sharp product
photography style. 16:9.
*/
