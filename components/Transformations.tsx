const stories = [
  {
    badge: "-24 lbs in 14 Weeks",
    quote:
      "The coaching accountability changed everything. I dropped 24 pounds of fat while adding 65 pounds to my deadlift.",
    name: "Jordan K.",
    tier: "Pro Member",
  },
  {
    badge: "+11 lbs Lean Mass",
    quote:
      "Having 24/7 access and structured strength programming helped me build real muscle and fix my lower back pain.",
    name: "Maya R.",
    tier: "Elite Member",
  },
  {
    badge: "-6% Body Fat",
    quote:
      "The 6 AM HIIT and Boxing crew keeps me locked in. Best equipment, zero ego, and unreal energy every morning.",
    name: "Carlos M.",
    tier: "Pro Member",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-space-xs text-primary-container">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[18px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Transformations() {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface-container-low" id="transformations">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div>
            <span className="font-label-sm text-label-sm uppercase text-primary-container">
              05 / Proven Outcomes
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase text-primary mt-space-xs">
              Member Transformations
            </h2>
          </div>
          <div className="flex items-center gap-space-md bg-surface-container px-space-lg py-space-sm rounded-xl">
            <svg className="w-16 h-8 text-primary-container" fill="none" viewBox="0 0 64 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 28L16 20L28 22L44 10L62 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
            <div>
              <span className="font-headline-sm text-headline-sm text-primary block">94%</span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                Hit 12-Week Goal
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {stories.map((s) => (
            <div
              key={s.name}
              className="bg-surface-container p-space-xl rounded-xl shadow-md flex flex-col justify-between gap-space-lg"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="bg-primary-container/15 text-primary-container font-label-sm text-label-sm uppercase px-space-sm py-space-xs rounded-full">
                    {s.badge}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface">&ldquo;{s.quote}&rdquo;</p>
              </div>
              <div className="flex items-center justify-between pt-space-md bg-surface-container-high/40 -mx-space-xl -mb-space-xl px-space-xl py-space-md rounded-b-xl">
                <span className="font-title-md text-title-md text-primary">{s.name}</span>
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{s.tier}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
