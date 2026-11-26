const features = [
  { title: "24/7 Access", desc: "Train on your schedule — members get keycard access any hour, any day." },
  { title: "Expert Coaches", desc: "Certified trainers in strength, mobility, boxing, HIIT, and recovery." },
  { title: "Modern Equipment", desc: "Rogue racks, Eleiko bars, assault bikes, sled tracks, and more." },
  { title: "Recovery Zone", desc: "Infrared sauna, cold plunge, compression boots, and massage therapy." },
  { title: "Group Classes", desc: "120+ classes a week — from CrossFit to yoga to Olympic lifting." },
  { title: "Nutrition Coaching", desc: "1:1 macro plans and ongoing accountability from certified nutritionists." },
];

function Icon({ i }: { i: number }) {
  const paths = [
    "M12 2v20M2 12h20",
    "M3 12l3-3 3 6 3-9 3 6 3-3 3 3",
    "M6 3h12v4H6zM4 7h16v14H4z",
    "M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z",
    "M4 6h16M4 12h16M4 18h16",
    "M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z",
  ];
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[i % paths.length]} />
    </svg>
  );
}

export default function Features() {
  return (
    <section className="section border-b border-white/10">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Why IronForge</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Everything you need. Nothing you don&apos;t.</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-brand/50 hover:bg-white/[0.04]">
              <div className="mb-4 inline-flex rounded-lg bg-brand/10 p-3 text-brand">
                <Icon i={i} />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
