/*
 * StatsBar.
 *
 * Rewritten 2026-08-25. Was a client component running an IntersectionObserver
 * and a requestAnimationFrame count-up per figure. Count-up number animations
 * are banned by the brand anchor, and the numbers were only readable once the
 * animation finished, which is worse for anyone scrolling fast and useless to a
 * crawler. Now a static server component rendering a real list.
 */

const STATS = [
  {
    value: "10,000+",
    label: "Creative, digital and tech businesses in Greater Manchester",
  },
  {
    value: "£100B",
    label: "Greater Manchester GVA, largest UK city region outside London",
  },
  {
    value: "94%",
    label: "Gigabit broadband coverage across Greater Manchester",
  },
  {
    value: "#1",
    label: "UK's top destination for new tech business (SAS AI Cities Index)",
  },
];

export default function StatsBar() {
  return (
    <div className="border-b border-fj-neutral-200 bg-white py-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <p className="mb-1 font-fj-display text-3xl font-bold text-fj-ink">{stat.value}</p>
              <p className="font-fj-body text-sm leading-snug text-fj-neutral-600">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
