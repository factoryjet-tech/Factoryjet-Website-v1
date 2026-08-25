import { manchesterMetadata } from "./metadata";
import { ALL_FAQS } from "./sections/FAQ";
import { STEPS } from "./process-steps";
import { breadcrumbSchema, CANONICAL } from "./crumbs";

export const metadata = manchesterMetadata;

/*
 * Every schema block below is derived from the array the page actually renders.
 *
 *   BreadcrumbList <- crumbs.ts, the same array <Breadcrumbs> renders
 *   HowTo          <- STEPS, the same array ProcessTimeline renders
 *   FAQPage        <- ALL_FAQS, the same array the FAQ section renders
 *
 * Do not paste a second literal copy of any of these next to a script tag. That
 * is the drift bug this file is arranged to prevent: schema that says one thing
 * while the page shows another reads as cloaking, not as a typo.
 */

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How FactoryJet builds and optimises a Manchester website",
  description:
    "The five-step process FactoryJet uses to deliver a search-ready website for Manchester businesses.",
  step: STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: `${s.title} (${s.days.toLowerCase()})`,
    text: `${s.description} You get: ${s.deliverables.join(". ")}.`,
  })),
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#webpage`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2:first-of-type"],
  },
  url: CANONICAL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ManchesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="manchester-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="manchester-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="manchester-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="manchester-speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
