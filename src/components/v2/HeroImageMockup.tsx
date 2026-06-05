import Image from 'next/image';

/**
 * HeroImageMockup — v2.3 hero right-slot visual.
 *
 * Uses the AI-generated browser mockup image (hero-us-mockup.webp) which
 * already contains baked-in floating badge chips (523+ businesses served,
 * at a fixed, published price, 7-day delivery) and an orange radial glow.
 *
 * No HTML badge overlays needed — the image is the complete visual.
 * Elevated box-shadow makes it "float" on the light cream hero background.
 *
 * Pure server component — no client JS.
 */

export default function HeroImageMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      <Image
        src="/images/hero-us-mockup.webp"
        alt="FactoryJet builds high-converting Shopify stores and websites for US small businesses — live in 7 days"
        width={2600}
        height={1451}
        className="w-full h-auto rounded-2xl"
        style={{
          /*
           * Elevated shadow — dark browser mockup floats on cream background.
           * Three-layer shadow: deep ambient + mid diffusion + tight base edge.
           * Same technique as Stripe / Linear hero visuals.
           */
          boxShadow: [
            '0 32px 64px -12px rgba(15,15,18,0.22)',
            '0 12px 24px -6px rgba(15,15,18,0.14)',
            '0 0 0 1px rgba(15,15,18,0.06)',
          ].join(', '),
        }}
        priority
        quality={90}
        sizes="(max-width: 1024px) 100vw, 45vw"
      />
    </div>
  );
}
