import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// FAQs are grounded in live US "People Also Ask" data on "small business web design"
// and "will AI replace web designers" (pulled Jul 2026). The FAQPage schema below is
// generated FROM this same array, so the visible FAQs and the structured data can
// never drift apart.
const faqs: FAQItem[] = [
  {
    q: 'Will AI replace web designers?',
    a: "No, and we say that as an agency that uses AI every single day. AI has already replaced a set of tasks inside web design: first drafts, layout variations, copy scaffolding, image generation, and code scaffolding. It has not replaced the judgement calls that make a website work for one specific business. Nielsen Norman Group tested the current generation of AI design tools in May 2025 and found the broad ones, including Figma First Draft, produced generic layouts with poor information and visual hierarchy, and concluded designers are not in danger of being replaced. What is genuinely at risk is the narrow role where someone else does the thinking and a person converts a brief into pixels.",
  },
  {
    q: 'Will AI replace web developers?',
    a: "Same answer, different shape. AI writes usable code quickly and it is now standard in professional workflows: 84% of developers in the Stack Overflow 2025 survey said they use or plan to use AI tools. But in that same survey 46% said they distrust the accuracy of AI output, and the single biggest frustration, cited by 66% of users, was AI solutions that are almost right but not quite. Almost right is the dangerous kind of wrong, and somebody has to know enough to spot it.",
  },
  {
    q: 'Is web design a dying career because of AI?',
    a: "No, but it is a changing one. The part of the job that involves producing pixels to a written brief is shrinking fast. The part that involves deciding what a business should say, what to cut, how to structure a page so it converts, and how to make it accessible and fast is becoming more valuable. If your entire skill is operating Figma, you are exposed. If your skill is judgement about businesses, you are in a stronger position than you were three years ago.",
  },
  {
    q: 'What can AI actually do well in web design right now?',
    a: "Five things, honestly. First drafts, so you start from something instead of a blank canvas. Layout variations, so you can see ten arrangements of the same content in the time it used to take to build one. Copy scaffolding, so you edit rather than write from zero. Image generation for abstract, textural, and background work. And code scaffolding: boilerplate components, config files, repetitive markup. All five are real time savers. All five produce starting points, not finished work.",
  },
  {
    q: 'What does AI still get wrong in web design?',
    a: "Six things, consistently: judgement about a specific business, brand distinctiveness, conversion decisions, accessibility, editing its own output, and knowing what to remove. Those failures share one root cause. AI optimizes for plausibility, which means it produces the most likely next thing. The most likely next thing is by definition average, and average is precisely what a small business competing against larger, better known brands cannot survive being.",
  },
  {
    q: 'Can AI build an entire website by itself?',
    a: "It can produce something that looks like an entire website in an afternoon. Whether that thing works is a separate question. It will almost always have a hero, three feature cards, a testimonial row, and a footer, because that is the shape of most of its training data. It will rarely include the one section your actual buyers need, because it has never met your buyers. Treat it as a very good first draft and a very poor final answer.",
  },
  {
    q: 'Are AI website builders good enough for a small business?',
    a: "As a placeholder while you get moving, yes. As the site that has to win against established competitors in Google and in AI answers, usually not. The trap is subtle: an AI builder makes the site look finished, which quietly removes the urgency to fix the parts that actually generate inquiries. Those parts are your offer, your proof, your page structure, your speed, and your accessibility, and none of them are visual.",
  },
  {
    q: 'What drives the scope of a small business website project?',
    a: "Scope is set by five things, and AI barely changes any of them. First, how many distinct page types you need, because a service page, a location page, and a case study are three different builds rather than three copies of one. Second, how complex your catalog or service list is. Third, what has to connect to what: bookings, payments, CRM, inventory, email. Fourth, how ready your content is, meaning real photographs, real copy, and real proof, or none of it. Fifth, what compliance you carry, whether that is accessibility, privacy, or industry rules. Two sites with an identical page count can be completely different projects once you answer those five.",
  },
  {
    q: "What are the 7 C's of website design?",
    a: "There is no single official list, and anyone who tells you there is has just picked their favorite version. The most widely used set is Content, Context, Clarity, Consistency, Credibility, Compatibility, and Conversion. In plain words: say something worth reading, say it in the right place for where the visitor is, say it so it is instantly understood, look and behave the same everywhere, prove you are real, work on every device and browser, and give people an obvious next step. Other versions swap in Customer, Community, or Convenience. The letters matter less than the check they force you to run.",
  },
  {
    q: 'Should I use an AI website builder or hire a designer?',
    a: "Ask what you are optimizing for. If you need something on the internet this week so you can point people at it, use the builder and get on with selling. If the website is how buyers decide whether to trust you, get a human involved, because trust is built from specifics and AI defaults to generalities. There is a sensible middle path that we use ourselves: let AI produce drafts and options quickly, then have a human make every decision that matters.",
  },
  {
    q: 'Can AI write my website copy?',
    a: "It can write the connective tissue: section intros, alt text, meta descriptions, the parts nobody reads closely. It cannot write your differentiator, because it does not know what it is. Every AI-written homepage says a version of the same three things: that you are trusted, innovative, and customer focused. The sentences that actually sell come from things only you know, like the objection you hear on every single call, the job you refuse to take, or the client you fired and why.",
  },
  {
    q: 'Does AI-generated design hurt SEO?',
    a: "Not directly. Google does not rank pages on whether a human or a model produced them, it ranks on whether the page is helpful and demonstrably credible. The indirect damage is real though. AI-generated pages tend to be generic, thin on first-hand specifics, and nearly identical to competitors covering the same topic. That is exactly the profile that fails to earn links, citations, and clicks, which is how the ranking damage actually arrives.",
  },
  {
    q: 'Will an AI-designed website get cited in ChatGPT and Google AI Overviews?',
    a: "Only if it says something worth citing. AI engines quote pages that give a clean, specific, checkable answer that the engine did not already have. A page assembled from the average of the internet gives the engine nothing new, so there is no reason to cite you rather than the source it already trusts. The irony is worth sitting with: the surest way to become invisible to AI search is to sound like AI.",
  },
  {
    q: 'Is AI-generated web design accessible?',
    a: "Usually not, and this is the failure with the clearest receipts. WebAIM tested the top one million home pages in 2026 and found 95.9% had detected WCAG 2 failures, averaging 56.1 errors per page. Low contrast text appeared on 83.9% of pages, missing image alt text on 53.1%, and unlabeled form inputs on 51%. AI trained on that web reproduces that web. It will cheerfully generate light gray text on a white background and an icon button with no label, because that is what most pages already do.",
  },
  {
    q: 'Can AI make my website convert better?',
    a: "It can help you produce variations faster. It cannot decide what to test. Conversion is a series of judgement calls about one specific audience: which objection to answer above the fold, whether to ask for a phone number or just an email, whether showing your process builds trust or invites haggling. AI has no way to know which of those is true for your business, so it defaults to the pattern it has seen most often, which is whatever everyone else is already doing.",
  },
  {
    q: 'What skills should a web designer learn to stay relevant?',
    a: "Three, in this order. Editing, meaning the ability to look at a generated draft and know exactly what to cut. Business literacy, meaning you can hold a real conversation about margin, sales cycle, and who the customer actually is. And accessibility plus performance, because both are objectively checkable, both carry legal weight, and models are demonstrably bad at them. Notice that none of the three are tool skills.",
  },
  {
    q: 'How do I tell if an agency is just running my project through AI?',
    a: "Ask three questions. Who made the decision to structure the homepage this way, and why that way? Which sections did you consider and then cut, and what was the reasoning? Show me the accessibility and performance results from a site you actually shipped. A team doing real work answers all three immediately and in specifics. A team passing your brief through a model answers the first two with adjectives and the third with a promise.",
  },
  {
    q: 'Does AI reduce the work in a website project?',
    a: "It moves the work rather than removing it. Production time goes down: drafts, variations, boilerplate, repetitive markup. Review time goes up: checking output that is almost right, fixing accessibility, cutting the filler, and rewriting the parts that sound like every other site in your category. Teams that treat the first draft as nearly finished end up doing the job twice, because they ship something average and then have to repair it in public.",
  },
  {
    q: 'Can AI generate images for my website?',
    a: "For abstract, textural, and background work, yes, and it is genuinely useful there. For people, no. AI-generated humans still read as fake to visitors and are actively harmful on a page whose entire job is to prove you are a real business with real staff. Use real photographs of your actual team and your actual work. It is the fastest credibility upgrade available to most small business websites, and it takes an afternoon.",
  },
  {
    q: 'Is it obvious when a website was designed by AI?',
    a: "To a designer, almost always. The tells are consistent: a hero with a vague benefit statement, three feature cards of exactly equal weight, an icon set that does not match the brand, stock imagery of people who do not exist, generous spacing disguising thin content, and no editorial point of view anywhere on the page. To a normal visitor it is less obvious, but the effect still lands. The site feels like it could belong to anyone, which means it does not feel like it belongs to you.",
  },
  {
    q: 'What is vibe coding, and can I build my business site that way?',
    a: "Vibe coding means describing what you want in plain language, letting a model write the code, and accepting the result without reading much of it. It is a legitimate way to prototype and a risky way to run a business website. The failure mode is not that the site breaks loudly. It is that it breaks quietly: a contact form that silently drops submissions, a checkout that fails on one browser, a page that Google cannot render properly. Nobody tells you. The inquiries just stop.",
  },
  {
    q: 'Do I still need a designer if I use Figma AI or Framer AI?',
    a: "Yes, and Nielsen Norman Group's May 2025 testing explains why. The narrow AI features that do one small job well, such as renaming layers, suggesting colors, and rewriting a line, were genuinely useful. The broad ones that try to generate a whole design produced generic output with poor hierarchy, and the wireframe and prototype generators failed because they could not balance all the competing requirements of a real design. The tools are good assistants and poor decision makers, and design is mostly decisions.",
  },
  {
    q: 'Will AI replace UX designers?',
    a: "Less likely than visual designers, because UX is mostly research and judgement and neither compresses well. AI can summarize interview transcripts and propose plausible flows. It cannot sit with a confused customer and notice the thing they did not say, or the moment their face changed. The part of UX that is deliverables production is exposed. The part that is understanding actual humans is not.",
  },
  {
    q: 'Which web design jobs are most at risk from AI?',
    a: "In rough order: template customization, design-to-HTML conversion work, basic landing page assembly, stock asset sourcing, and first-pass copywriting. What these all have in common is that the input is a fully specified brief and the output is judged purely on whether it matches that brief. Wherever somebody else has already done the thinking, a model can do the doing. The defense is to move upstream into the thinking.",
  },
  {
    q: 'What does an AI-native web design agency actually do differently?',
    a: "It uses AI where AI is strong, puts humans where AI is weak, does it deliberately, and tells you which is which. In practice that means models generate options and boilerplate, and people decide the structure, write the parts that carry the argument, check accessibility and performance against real thresholds, and delete roughly half of everything that was generated. If an agency claims AI does all of it, they are selling. If they claim they never touch it, they are slower than they need to be, and that shows up in your timeline.",
  },
  {
    q: 'How long until AI can fully replace a web designer?',
    a: "Nobody knows, and anyone giving you a date is guessing. What the evidence currently supports: as of the most recent independent testing, general design generation still produces generic layouts with weak hierarchy, and developer trust in AI output is falling rather than rising. Positive sentiment among developers dropped from over 70% in 2023 and 2024 to 60% in 2025 even as usage climbed to 84%. A tool becoming ubiquitous and a tool becoming trusted are not the same event.",
  },
  {
    q: 'Should I learn web design in 2026?',
    a: "Yes, if you learn the durable half of it. Learn typography, visual hierarchy, accessibility, how a business actually makes money, and how to interview a customer without leading them. Treat the specific tools as disposable, because they are. The people genuinely struggling right now are the ones whose entire value was speed of production, and speed of production is the one thing machines became very good at.",
  },
  {
    q: 'Does Google penalize AI-generated content?',
    a: "Google's stated position is that it rewards helpful content regardless of how it was produced, and acts against content created mainly to manipulate rankings. In practice the distinction that matters is not human versus machine. It is whether the page contains anything first-hand: your data, your photographs, your process, your opinion, your mistakes. Pages with none of that struggle to rank whether a person or a model wrote them.",
  },
];

export const post: BlogPost = {
  id: '414',
  slug: 'will-ai-replace-web-designers',
  title: 'Will AI Replace Web Designers? An Honest 2026 Answer',
  excerpt:
    'We are an AI-native agency, so we have every reason to overhype this. Here is the honest version instead: exactly what AI does well in web design right now, the six things it reliably fails at, and what that means if you are hiring a designer or working as one.',
  category: 'Web Design & Strategy',
  author: 'Bhavesh Barot',
  date: 'Jul 26, 2026',
  readTime: '13 min read',
  imageUrl: '/blog-images/will-ai-replace-web-designers.webp',
  imageAlt:
    'A web design and development team working together at desks in a bright studio, reviewing code and layouts on screen',
  meta: {
    title: 'Will AI Replace Web Designers? An Honest 2026 Answer',
    description:
      'An AI-native agency answers honestly: what AI genuinely does well in web design, the six things it reliably fails at, and what the job turns into. With 28 real buyer questions answered.',
  },
  keyTakeaways: [
    'No. AI is replacing tasks inside web design, not web designers. The role that disappears is the one where somebody else does the thinking and a person produces the pixels.',
    'What AI genuinely does well now: first drafts, layout variations, copy scaffolding, image generation for abstract work, and code scaffolding. All five are starting points, not finished work.',
    'What it reliably fails at: judgement about a specific business, brand distinctiveness, conversion decisions, accessibility, editing its own output, and knowing what to remove.',
    'The accessibility evidence is blunt. WebAIM found 95.9% of the top one million home pages had detected WCAG 2 failures in 2026, averaging 56.1 errors per page. AI trained on that web reproduces that web.',
    'Developer trust is going the wrong way. 84% use or plan to use AI tools, but 46% distrust the accuracy of the output, and 66% name "almost right, but not quite" as their biggest frustration (Stack Overflow, 2025).',
    'Nielsen Norman Group tested the tools in May 2025: narrow features worked, broad design generation produced generic layouts with poor hierarchy, and designers are not in danger of being replaced.',
  ],
  faqs,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': 'https://factoryjet.com/blog/will-ai-replace-web-designers#webpage',
              url: 'https://factoryjet.com/blog/will-ai-replace-web-designers',
              name: 'Will AI Replace Web Designers? An Honest 2026 Answer',
              description:
                'An AI-native agency answers honestly: what AI genuinely does well in web design, the six things it reliably fails at, and what the job turns into.',
              inLanguage: 'en-US',
              datePublished: '2026-07-26',
              dateModified: '2026-07-26',
              author: { '@type': 'Person', name: 'Bhavesh Barot' },
              publisher: {
                '@type': 'Organization',
                '@id': 'https://factoryjet.com/#organization',
                name: 'FactoryJet',
                url: 'https://factoryjet.com',
              },
              primaryImageOfPage:
                'https://factoryjet.com/blog-images/will-ai-replace-web-designers.webp',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.answer-first'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Web Design Services for Small Business',
              name: 'FactoryJet Web Design',
              description:
                'Web design and development for small businesses: AI-assisted production with human decisions on structure, copy, conversion, accessibility, and performance.',
              provider: {
                '@type': 'Organization',
                '@id': 'https://factoryjet.com/#organization',
                name: 'FactoryJet',
                url: 'https://factoryjet.com',
              },
              areaServed: [
                { '@type': 'Country', name: 'United States' },
                { '@type': 'Country', name: 'United Kingdom' },
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Country', name: 'India' },
              ],
              url: 'https://factoryjet.com/services/web-design',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'What AI does well in web design versus what still needs a human',
              itemListOrder: 'https://schema.org/ItemListOrderAscending',
              numberOfItems: 10,
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'First drafts (AI is strong)' },
                { '@type': 'ListItem', position: 2, name: 'Layout variations (AI is strong)' },
                { '@type': 'ListItem', position: 3, name: 'Copy scaffolding (AI is strong)' },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Abstract image generation (AI is strong)',
                },
                { '@type': 'ListItem', position: 5, name: 'Code scaffolding (AI is strong)' },
                {
                  '@type': 'ListItem',
                  position: 6,
                  name: 'Judgement about a specific business (needs a human)',
                },
                { '@type': 'ListItem', position: 7, name: 'Brand distinctiveness (needs a human)' },
                { '@type': 'ListItem', position: 8, name: 'Conversion decisions (needs a human)' },
                { '@type': 'ListItem', position: 9, name: 'Accessibility (needs a human)' },
                { '@type': 'ListItem', position: 10, name: 'Knowing what to remove (needs a human)' },
              ],
            },
          ]),
        }}
      />
      {/* FAQPage and BreadcrumbList are emitted once by the blog route
          (src/app/blog/[slug]/page.tsx). The literal FAQPage array and the
          BreadcrumbSchema element that lived here were duplicates. */}

      {/* Answer-first block for AI Overviews / ChatGPT citation */}
      <div className="answer-first bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-900">
          No. AI is replacing tasks inside web design, not web designers. It is genuinely good at
          first drafts, layout variations, copy scaffolding, image generation, and code scaffolding.
          It is reliably bad at judgement about a specific business, brand distinctiveness,
          conversion decisions, accessibility, editing its own output, and knowing what to remove.
          The role that disappears is the one where somebody else does the thinking and a person
          produces the pixels. The role that grows is the one where a person decides what the site
          should say, what to cut, and what to prove.
        </p>
      </div>

      <p className="mb-4 text-gray-800">
        We build websites with AI in the loop every day. That gives us every commercial reason to
        tell you the machines have got this handled, and also the only vantage point from which the
        honest answer is worth anything. So here it is: the tools are further along than most
        designers admit and much further behind than most founders assume, and the gap between those
        two beliefs is where a lot of bad websites are currently being made.
      </p>
      <p className="mb-4 text-gray-800">
        This is not a defensive piece. Plenty of web design work has already been automated and is
        not coming back. It is also not a hype piece, because we have watched enough generated
        homepages fall over in the same six places to know exactly where the edges are. What follows
        is what we actually see, with sources you can check.
      </p>

      <h2 id="what-ai-does-well" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What AI genuinely does well in web design right now
      </h2>
      <p className="mb-4 text-gray-800">
        Start with the honest credit, because the people insisting nothing has changed are the ones
        most likely to get caught out. Five parts of the job are meaningfully different than they
        were in 2023.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-800">
        <li>
          <strong>First drafts.</strong> A blank canvas used to eat the first day of any project.
          Now you start from something, which changes the conversation from &quot;what should this
          look like&quot; to &quot;what is wrong with this&quot;. Reacting is faster than
          originating, and the second question is easier for a client to answer than the first.
        </li>
        <li>
          <strong>Layout variations.</strong> Producing ten arrangements of the same content used to
          be a week. It is now an afternoon. This is a real gain, because the quality of a design
          decision is bounded by the number of options you had time to see before making it.
        </li>
        <li>
          <strong>Copy scaffolding.</strong> Section headers, placeholder body copy, alt text drafts,
          meta descriptions. Editing beats writing from zero for most people, and the scaffold makes
          the structural problems visible early, while they are still easy to fix.
        </li>
        <li>
          <strong>Image generation, for the right subjects.</strong> Abstract backgrounds, textures,
          pattern work, and illustrative graphics are genuinely good now. People are not. We will
          come back to that.
        </li>
        <li>
          <strong>Code scaffolding.</strong> Boilerplate components, config, repetitive markup,
          responsive variants, and the tedious plumbing between them. 84% of developers now use or
          plan to use AI tools, and the ones who refuse are simply slower at the parts of the job
          nobody was ever proud of.
        </li>
      </ol>
      <p className="mb-4 text-gray-800">
        Notice what those five have in common. Every one of them is production. None of them is a
        decision. That distinction is the whole argument.
      </p>

      <h2 id="what-ai-fails-at" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        The six things AI reliably fails at
      </h2>
      <p className="mb-4 text-gray-800">
        These are not edge cases we cherry-picked. They are the failures we see on almost every
        generated site that lands on our desk for a rescue.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-800">
        <li>
          <strong>Judgement about a specific business.</strong> A model has never sat on your sales
          calls. It does not know that half your inquiries stall on the same objection, or that your
          best customers find you through one referral partner. It generates the average business,
          and you are not the average business.
        </li>
        <li>
          <strong>Brand distinctiveness.</strong> AI optimizes for the most likely next thing, which
          is a formal definition of average. Ask three competitors&apos; agencies to generate a
          homepage and you get three variations of the same page. If your market is crowded, looking
          like everyone else is the one outcome you cannot survive.
        </li>
        <li>
          <strong>Conversion decisions.</strong> Whether to ask for a phone number, whether to show
          your process or hold it back, which objection belongs above the fold, whether social proof
          goes before or after the offer. These are judgement calls with real trade-offs, and the
          model has no way to know which trade-off is right for you, so it copies the pattern it has
          seen most.
        </li>
        <li>
          <strong>Accessibility.</strong> The most measurable failure of the lot, and the one with
          receipts. More on this below.
        </li>
        <li>
          <strong>Editing itself.</strong> Ask a model to critique its own output and it will agree
          with you, whatever you say. It has no stable opinion to defend, which means it cannot tell
          you that your favorite idea is the weakest thing on the page. A good designer will, and
          that conversation is most of the value.
        </li>
        <li>
          <strong>Knowing what to remove.</strong> Generation is additive by nature. Ask for
          improvements and you get more sections, more features, more copy. Almost every website we
          have improved got better by deletion, and no model has ever volunteered that.
        </li>
      </ol>

      <h2 id="comparison" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        AI versus human: what each side is actually good at
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Part of the job</th>
              <th className="p-3 border text-left">AI in 2026</th>
              <th className="p-3 border text-left">Still needs a human</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border">First draft of a layout</td>
              <td className="p-3 border">Strong. Minutes instead of days.</td>
              <td className="p-3 border">Deciding which draft is worth developing</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Layout variations</td>
              <td className="p-3 border">Strong. Wide coverage of the obvious options.</td>
              <td className="p-3 border">Recognizing the non-obvious option nobody generated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Body copy and microcopy</td>
              <td className="p-3 border">Useful scaffold. Reads generic without edits.</td>
              <td className="p-3 border">The specific claims and proof that actually sell</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Imagery</td>
              <td className="p-3 border">Good for abstract and texture. Poor for people.</td>
              <td className="p-3 border">Real photographs of your team, work, and premises</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Code scaffolding</td>
              <td className="p-3 border">Strong for boilerplate and repetitive markup.</td>
              <td className="p-3 border">Reviewing output that is almost right but not quite</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Information architecture</td>
              <td className="p-3 border">Weak. Defaults to the most common structure.</td>
              <td className="p-3 border">Structuring around how your buyers actually decide</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Accessibility</td>
              <td className="p-3 border">Weak. Reproduces the errors in its training data.</td>
              <td className="p-3 border">Contrast, labels, focus order, keyboard paths, testing</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Conversion strategy</td>
              <td className="p-3 border">None. It has no model of your buyer.</td>
              <td className="p-3 border">Deciding what to ask for, when, and what to prove first</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Editing and cutting</td>
              <td className="p-3 border">None. Generation is additive by design.</td>
              <td className="p-3 border">Removing the half of the page that is not working</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Brand point of view</td>
              <td className="p-3 border">None. Averages towards the category norm.</td>
              <td className="p-3 border">Sounding like you and not like your competitors</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="accessibility-receipts" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        The accessibility failure, with receipts
      </h2>
      <p className="mb-4 text-gray-800">
        Most arguments about AI and design are opinion against opinion. This one is not. WebAIM
        tests the top one million home pages every year, and in 2026 it found{' '}
        <strong>95.9% had detected WCAG 2 failures</strong>, averaging 56.1 errors per page. That is
        a regression from 94.8% the year before. The six most common problems were low contrast text
        (83.9% of pages), missing image alt text (53.1%), unlabeled form inputs (51%), empty links
        (46.3%), empty buttons (30.6%), and missing document language (13.5%). Those six account for
        96% of every error detected.
      </p>
      <p className="mb-4 text-gray-800">
        Now think about what a model learns from that corpus. It learns that light gray text on
        white is normal, because on most pages it is. It learns that an icon button does not need a
        label, because usually there is not one. It is not being careless. It is faithfully
        reproducing the average of a web that is overwhelmingly inaccessible.
      </p>
      <p className="mb-4 text-gray-800">
        This matters commercially, not just ethically. Contrast failures and unlabeled inputs are
        exactly the things that make a form hard to complete on a phone in daylight, and a form
        nobody completes is a lead you never hear about. It is also the category of defect that
        turns into a legal letter. Fixing it is unglamorous, checkable work, which is precisely why
        it stays a human job.
      </p>

      <h2 id="what-to-remove" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        The skill nobody has automated: knowing what to remove
      </h2>
      <p className="mb-4 text-gray-800">
        Ask any model to improve a page and watch what happens. You get another section. A
        comparison block, a stats bar, a second testimonial row, a FAQ nobody asked for. Generation
        is additive because that is what generation means. It has no concept of a page being too
        full.
      </p>
      <p className="mb-4 text-gray-800">
        Almost every website we have meaningfully improved got better by subtraction. One offer
        instead of four. One call to action repeated, instead of six competing for the same click. A
        homepage that answers one question completely rather than eight questions partially. That
        work requires deciding what matters most, and deciding what matters most requires knowing
        the business. This is the load-bearing wall of the whole profession, and it is nowhere near
        being automated.
      </p>
      <p className="mb-4 text-gray-800">
        It is also the single most common reason a{' '}
        <a href="/services/website-redesign" className="text-orange-600 underline">
          website redesign
        </a>{' '}
        works. Most sites that stop generating inquiries did not get worse. They got fuller, one
        well-meaning addition at a time, until the point disappeared.
      </p>

      {/* Mid-page CTA */}
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl my-8">
        <p className="font-semibold text-gray-900 mb-2">
          Want to know whether your site has the AI-average problem?
        </p>
        <p className="text-gray-800 mb-4">
          There is a fast test. Ask ChatGPT, Perplexity, or Google AI Overviews for a recommendation
          in your category and see whether your business comes up at all. Sites built from the
          average of the internet give AI engines no reason to cite them. Our free AI Visibility
          Checker runs that lookup for you in about a minute, no call required.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/ai-visibility-checker"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Check your AI visibility free
          </a>
          <a
            href="/services/web-design"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-orange-100 transition-colors"
          >
            See how we build websites
          </a>
        </div>
      </div>

      <h2 id="what-the-job-becomes" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What the job actually turns into
      </h2>
      <p className="mb-4 text-gray-800">
        The useful framing is not replacement, it is reallocation. Production hours fall. Review
        hours rise. Anyone who assumed the first number falling meant the total falling is about to
        have an uncomfortable quarter.
      </p>
      <p className="mb-4 text-gray-800">
        The Stack Overflow 2025 developer survey puts real numbers on the second half of that trade.
        84% of developers use or plan to use AI tools, which is the adoption story everyone quotes.
        The part that gets quoted less: 46% distrust the accuracy of AI output against 33% who trust
        it, the top frustration is &quot;AI solutions that are almost right, but not quite&quot;
        (66% of users), and 45.2% say debugging AI-generated code takes more time, not less. Positive
        sentiment fell from over 70% in 2023 and 2024 to 60% in 2025 while usage went up.
      </p>
      <p className="mb-4 text-gray-800">
        Read that carefully, because it is the whole story in miniature. Usage rising and trust
        falling is not a contradiction. It is what happens when a tool becomes excellent at
        producing something that is 90% right. The last 10% is where all the difficulty concentrates,
        and the only person who can find it is someone who could have done the whole thing
        themselves.
      </p>
      <p className="mb-4 text-gray-800">
        Nielsen Norman Group reached the same conclusion from the design side. In their May 2025
        testing, narrow AI features that do one small job (renaming layers, suggesting colors,
        rewriting a line) were genuinely useful. The broad ones were not: Figma&apos;s First Draft
        produced generic designs with poor information and visual hierarchy, and wireframe and
        prototype generators failed because they lacked the sophistication to balance all the
        requirements of a real design. Their conclusion was blunt: design professionals are not in
        danger of being replaced.
      </p>

      <h2 id="seven-cs" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        The 7 C&apos;s of website design, and which ones AI can handle
      </h2>
      <p className="mb-4 text-gray-800">
        This question comes up constantly, so worth being straight about it: there is no single
        official list, and every source that presents one has quietly picked a favorite. The most
        commonly used version is Content, Context, Clarity, Consistency, Credibility, Compatibility,
        and Conversion. Others swap in Customer, Community, or Convenience. The letters matter less
        than the check they force, and the check is a neat way to see the split we have been
        describing.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">The C</th>
              <th className="p-3 border text-left">What it means in plain words</th>
              <th className="p-3 border text-left">Can AI handle it?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border">Content</td>
              <td className="p-3 border">Say something worth reading</td>
              <td className="p-3 border">Partly. It drafts. It does not know your specifics.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Context</td>
              <td className="p-3 border">Right message for where the visitor is in deciding</td>
              <td className="p-3 border">No. Requires knowing how your buyers decide.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Clarity</td>
              <td className="p-3 border">Understood in one read, no decoding</td>
              <td className="p-3 border">Partly. It writes clean sentences and vague claims.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Consistency</td>
              <td className="p-3 border">Same look and behavior everywhere</td>
              <td className="p-3 border">Yes. Rule-following is what it does best.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Credibility</td>
              <td className="p-3 border">Proof you are real and have done this before</td>
              <td className="p-3 border">No. Proof cannot be generated, only gathered.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Compatibility</td>
              <td className="p-3 border">Works on every device and browser</td>
              <td className="p-3 border">Mostly. Still needs real device testing.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Conversion</td>
              <td className="p-3 border">An obvious, low-friction next step</td>
              <td className="p-3 border">No. It is a judgement call about your audience.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-800">
        Three yes, two partly, three no, and the three no&apos;s are the ones that decide whether the
        site earns you anything.
      </p>

      <h2 id="scope-factors" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What actually drives the scope of a small business website
      </h2>
      <p className="mb-4 text-gray-800">
        People searching this question usually want a number, and a number given without knowing
        anything about the business is a guess dressed as advice. What is genuinely useful is
        knowing which factors make one project bigger than another, because those are the levers you
        control. There are five.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
        <li>
          <strong>Distinct page types, not page count.</strong> A service page, a location page, and
          a case study are three different builds. Twenty pages across three templates is a smaller
          project than eight pages across eight.
        </li>
        <li>
          <strong>Catalog or service complexity.</strong> Variants, options, bundles, tiers, and
          eligibility rules all multiply the states a page has to handle, and every state has to be
          designed and tested.
        </li>
        <li>
          <strong>Integrations.</strong> Bookings, payments, CRM, inventory, email, and reviews. Each
          connection is its own set of edge cases, and edge cases are where the hours actually go.
        </li>
        <li>
          <strong>Content readiness.</strong> Real photographs, real copy, real case studies, real
          testimonials, either ready or not. This is the factor small businesses most often
          underestimate and the one that most often decides the timeline.
        </li>
        <li>
          <strong>Compliance load.</strong> Accessibility standards, privacy requirements, and
          industry-specific rules. Regulated sectors carry more work in the same visual footprint.
        </li>
      </ul>
      <p className="mb-4 text-gray-800">
        AI compresses the production side of all five. It compresses none of the deciding. If you
        want a scoped answer for your own situation rather than a generic range, that is the
        conversation to have, and our{' '}
        <a href="/services/small-business-website-design" className="text-orange-600 underline">
          small business website design
        </a>{' '}
        page walks through how we run it.
      </p>

      <h2 id="agency-tells" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        How to tell whether an agency is just prompting on your behalf
      </h2>
      <p className="mb-4 text-gray-800">
        Using AI is not the problem. Hiding behind it is. Here is how to find out in one meeting.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
        <li>
          <strong>&quot;Why is the homepage structured this way?&quot;</strong> A real answer names
          your buyer and their decision sequence. A weak answer names a trend.
        </li>
        <li>
          <strong>&quot;What did you consider and cut?&quot;</strong> Anyone doing the work has a
          list. Anyone accepting the first generation does not.
        </li>
        <li>
          <strong>&quot;Show me accessibility and performance results from a site you
          shipped.&quot;</strong> These are objective and testable. Vagueness here is the most
          reliable tell there is.
        </li>
        <li>
          <strong>&quot;Which parts of my project will AI touch?&quot;</strong> A confident team
          answers precisely and without embarrassment. Evasion in either direction, claiming all of
          it or none of it, is a red flag.
        </li>
        <li>
          <strong>&quot;Who writes the copy on the pages that carry the argument?&quot;</strong> If
          nobody is going to interview you, nobody is going to learn anything a model does not
          already know.
        </li>
      </ol>

      <h2 id="for-designers" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        If you are a designer reading this
      </h2>
      <p className="mb-4 text-gray-800">
        The uncomfortable part first. If your advantage was speed of production, that advantage has shrunk
        and it is not coming back. Template customization, design-to-HTML conversion, basic landing
        page assembly, and first-pass copywriting are all jobs where somebody else does the thinking
        and the output is judged on whether it matches a brief. Those are exactly the conditions a
        model handles well.
      </p>
      <p className="mb-4 text-gray-800">
        The encouraging part is that the defense is learnable and it is not a tool. Learn to edit,
        which means looking at a generated draft and knowing what to remove. Learn enough about
        business to hold a real conversation about margin, sales cycle, and who the customer is.
        Learn accessibility and performance properly, because they are objectively checkable, they
        carry legal weight, and models are measurably bad at them. Designers who can do all three
        are not competing with AI at all. They are the people who decide what it produces.
      </p>

      <h2 id="our-position" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Our honest position, as a company that sells AI
      </h2>
      <p className="mb-4 text-gray-800">
        We use AI heavily. It generates our first drafts, our layout options, our boilerplate, and a
        good deal of our abstract imagery. It does not decide our structure, write the paragraphs
        that carry the argument, choose what we ask a visitor for, or sign off on accessibility. On
        a typical project we delete somewhere near half of what gets generated, and the deleting is
        the part that actually changes the outcome.
      </p>
      <p className="mb-4 text-gray-800">
        We could tell you AI does all of it. It would make us sound further ahead than we are, and
        it would be the kind of claim that falls apart the first time you look closely at a page we
        shipped. The version we would rather defend is the accurate one: AI made us faster at
        production and changed nothing about the part of the job that determines whether a website
        earns you anything.
      </p>
      <p className="mb-4 text-gray-800">
        So no, AI is not replacing web designers. It is replacing the pretense that producing a
        layout was ever the hard part.
      </p>

      <h2 id="sources" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Sources
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
        <li>
          <a
            href="https://webaim.org/projects/million/"
            className="text-orange-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WebAIM, &quot;The WebAIM Million&quot; (2026)
          </a>
          : 95.9% of the top one million home pages had detected WCAG 2 failures, averaging 56.1
          errors per page; low contrast text 83.9%, missing alt text 53.1%, unlabeled form inputs
          51%.
        </li>
        <li>
          <a
            href="https://survey.stackoverflow.co/2025/ai"
            className="text-orange-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow Developer Survey 2025, AI section
          </a>
          : 84% using or planning to use AI tools; 46% distrust accuracy against 33% who trust it;
          66% cite &quot;almost right, but not quite&quot; as the top frustration; 45.2% report
          debugging AI code takes more time.
        </li>
        <li>
          <a
            href="https://www.nngroup.com/articles/ai-design-tools-update-2/"
            className="text-orange-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nielsen Norman Group, &quot;AI Design Tools Are Marginally Better: Status Update&quot;
            (May 9, 2025)
          </a>
          : narrow AI features useful; Figma First Draft produced generic designs with poor
          hierarchy; wireframe and prototype generation broadly failed; designers not in danger of
          being replaced.
        </li>
      </ul>

      {/* End CTA */}
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-10 mb-4">
        <p className="font-semibold text-gray-900 mb-2">
          If your website currently reads like everyone else&apos;s
        </p>
        <p className="text-gray-800 mb-4">
          That is the most common thing we fix, and it is usually a deleting job before it is a
          building job. We will look at your site and tell you plainly which sections are earning
          their place, which are diluting the point, and what a visitor actually understands in the
          first five seconds. No obligation to work with us afterwards.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Get an honest read on your site
          </a>
          <a
            href="/services/web-design"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-amber-100 transition-colors"
          >
            See our web design work
          </a>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-2xl my-8">
        <p className="font-semibold text-orange-900 mb-2">Talk to a human about it</p>
        <p className="text-gray-800 mb-3">
          Bhavesh runs discovery calls himself. Thirty minutes, plain language, and a straight answer
          on what would move the needle on your site first. No deck, no jargon.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a 30-min call
        </a>
      </div>
    </>
  ),
};

export default post;
