const trainers = [
  { name: "Marcus Hale", role: "Head Strength Coach", bio: "USAW L2 · 10+ years coaching national-level athletes.", initial: "MH" },
  { name: "Sofia Rivera", role: "Conditioning & HIIT", bio: "NASM-CPT · Former D1 sprinter. Makes cardio fun. Almost.", initial: "SR" },
  { name: "Daniel Okafor", role: "Boxing Coach", bio: "Amateur national champion. Teaches technique first, pressure second.", initial: "DO" },
  { name: "Priya Shah", role: "Yoga & Mobility", bio: "500-hr RYT · Specializes in athlete recovery and injury prevention.", initial: "PS" },
];

export default function Trainers() {
  return (
    <section id="trainers" className="section border-b border-white/10">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Our Team</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Coaches who have been where you are.</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <div key={t.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <div className="grid aspect-square w-full place-items-center rounded-lg bg-gradient-to-br from-brand/30 to-brand-dark/20 text-5xl font-black text-white/90">
                {t.initial}
              </div>
              <h3 className="mt-5 text-xl font-bold">{t.name}</h3>
              <p className="text-sm text-brand">{t.role}</p>
              <p className="mt-2 text-sm text-neutral-400">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
