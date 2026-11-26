const plans = [
  {
    name: "Day Pass",
    price: 15,
    period: "/ day",
    desc: "Try us out with no commitment.",
    features: ["Full gym access", "One group class", "Locker & towel", "Guest Wi-Fi"],
    cta: "Buy a pass",
    highlight: false,
  },
  {
    name: "Strong",
    price: 69,
    period: "/ month",
    desc: "Our most popular plan — everything you need.",
    features: ["24/7 gym access", "Unlimited group classes", "Recovery zone access", "Nutrition starter kit", "Bring a friend 2x/mo"],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Elite",
    price: 139,
    period: "/ month",
    desc: "Everything in Strong, plus personal coaching.",
    features: ["Everything in Strong", "2 PT sessions / month", "Custom programming", "Monthly InBody scan", "Massage therapy credit"],
    cta: "Go elite",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section border-b border-white/10">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Membership</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Simple plans. No lock-ins.</h2>
          <p className="mt-4 text-neutral-400">Cancel anytime. First 7 days free on any monthly plan.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.highlight
                  ? "border-brand bg-gradient-to-b from-brand/10 to-transparent shadow-[0_0_60px_-20px_rgba(239,68,68,0.6)]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-neutral-400">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-black">${p.price}</span>
                <span className="text-neutral-400">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-brand">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-neutral-200">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 ${p.highlight ? "btn-primary" : "btn-outline"}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
