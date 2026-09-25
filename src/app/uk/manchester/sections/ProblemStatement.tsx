import Image from "next/image";

const BODY_PARAGRAPHS = [
  "Walk through the Northern Quarter, Spinningfields or MediaCityUK and you will find businesses spending real money on fit-outs, branding and location. Then look at their websites. Slow WordPress themes last touched in 2021, mobile pages that feel like desktop afterthoughts, no schema, and nothing at all in AI search results.",
  "The city region has over 1,000 agencies, and crowded does not mean good. Most are template shops: a WordPress install, a premium theme, a contact form and no performance work. That produces sites scoring 40 to 60 on Lighthouse, taking four to six seconds on mobile, invisible when someone asks ChatGPT who builds websites near Deansgate.",
];

export default function ProblemStatement() {
  // 2026-09-26 (perf): the GSAP scroll entrance (fade/slide-in) was removed; this
  // section is a server component and paints in its final state.

  return (
    <section
      id="problem-statement"
      className="pt-16 md:pt-24"
      style={{
        background: "#FFFFFF",
        paddingBottom: "128px",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>

        {/* ── H2, architectural heading ───────────────────────────────── */}
        <h2
          className="font-clash"
          style={{
            fontSize: "clamp(2.5rem, 2rem + 2vw, 4rem)",
            lineHeight: 1.1,
            color: "#0a0f1c",
            maxWidth: "900px",
            marginBottom: "48px",
          }}
        >
          Most Manchester Websites Are Built to Exist. Yours Should Be Built to
          Convert.
        </h2>

        {/* ── Pull quote, full container width ────────────────────────── */}
        <blockquote
          style={{
            borderLeft: "4px solid #F05A28",
            paddingLeft: "32px",
            margin: "0 0 48px 0",
          }}
        >
          <p
            className="font-clash"
            style={{
              fontSize: "clamp(1.3rem, 1.1rem + 0.8vw, 1.8rem)",
              lineHeight: 1.35,
              color: "#F05A28",
              fontStyle: "italic",
            }}
          >
            &ldquo;Your customers are asking AI assistants for recommendations.
            If your website can&rsquo;t be cited by AI systems, you&rsquo;re
            invisible to a growing segment of your market.&rdquo;
          </p>
        </blockquote>

        {/* ── Body copy + sticky image, 60/40 split ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-12">

          {/* LEFT 60%: body paragraphs */}
          <div
            className="lg:col-span-3 space-y-6"
          >
            {BODY_PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                className="problem-para"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#374151",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* RIGHT 40%: photography, sticky on desktop, stacks below on mobile */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg sticky top-8">
              <Image
                src="/images/manchester/coworking-interior.webp"
                alt="Modern Manchester coworking space representing the city's thriving digital business scene"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
