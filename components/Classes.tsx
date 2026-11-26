const classes = [
  { name: "Strength & Power", tag: "Barbell", desc: "Squat, bench, deadlift, press. Build raw strength under expert coaching." },
  { name: "HIIT Burn", tag: "Cardio", desc: "40 minutes of intervals that torch calories and spike your conditioning." },
  { name: "Boxing", tag: "Combat", desc: "Footwork, combos, and bagwork — the sweet science made accessible." },
  { name: "Yoga & Mobility", tag: "Recovery", desc: "Restore range of motion and protect every lift you make." },
  { name: "CrossFit", tag: "Functional", desc: "Constantly varied, functional movement at high intensity. All levels welcome." },
  { name: "Olympic Lifting", tag: "Technique", desc: "Snatch and clean & jerk, taught progressively by certified USAW coaches." },
];

export default function Classes() {
  return (
    <section id="classes" className="section border-b border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900/50">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Programs</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Find your discipline.</h2>
            <p className="mt-4 text-neutral-400">
              From powerlifting to pilates, our 120 weekly classes have something for every level.
            </p>
          </div>
          <a href="#contact" className="btn-outline">See full schedule</a>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <article key={c.name} className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-brand/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-brand-dark opacity-0 transition group-hover:opacity-100" />
              <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-neutral-400">
                {c.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{c.name}</h3>
              <p className="mt-2 text-neutral-400">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
