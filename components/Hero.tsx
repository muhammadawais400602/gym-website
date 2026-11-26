export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(239,68,68,0.35), transparent 40%), radial-gradient(circle at 80% 60%, rgba(239,68,68,0.2), transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 -z-20 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-x py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="eyebrow">Strength · Conditioning · Community</p>
          <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Train Hard. <br />
            <span className="text-brand">Live Strong.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            State-of-the-art equipment, world-class coaches, and a community that pushes you to your next PR.
            Walk in average. Walk out unstoppable.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="btn-primary">Start 7-Day Free Trial</a>
            <a href="#classes" className="btn-outline">Explore Classes</a>
          </div>
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-sm text-neutral-400">Members</dt>
              <dd className="text-3xl font-bold">4,200+</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-400">Coaches</dt>
              <dd className="text-3xl font-bold">25</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-400">Classes / wk</dt>
              <dd className="text-3xl font-bold">120</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
