export default function Hero() {
  return (
    <section className="relative w-full -mt-20 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden" id="home">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDA6N-UfYwX58lVKzDQ1ePgp17O1_EnB2SGNVCfTuCtDeuGGI-uPtQWLcGLl4oNzuepMijG_hBiKUyZh73fzaEL5l8dCW2CKodNKxzWttPdnDAudaG5ZfpOciV8Zwmr7JDu18DEtfdSvOltQOw3C1MA1N2ajfsW0NOvvj9PmuwYnLpS8L-wMMRdgETGK6KCe7XHnGfuapmGzeYpz5eby3TUUAfRXDEhoBqbTm-AO_A')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            <div className="inline-flex items-center gap-space-sm self-start bg-surface-container-high/90 backdrop-blur-md px-space-md py-space-xs rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase text-primary-container">
                24/7 Performance Club
              </span>
            </div>
            <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl uppercase text-primary tracking-tight">
              Train Hard.
              <br />
              <span className="text-primary-container">Transform Faster.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Results-driven coaching, Olympic-grade strength equipment, and relentless community energy engineered
              to push you past every plateau.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-sm">
              <a
                className="inline-flex items-center justify-center gap-space-sm bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed font-label-lg text-label-lg uppercase px-space-xl py-space-md rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                href="#free-trial"
              >
                <span>Start Free Trial</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-sm bg-surface-container-high/90 backdrop-blur-md text-on-surface hover:bg-surface-bright font-label-lg text-label-lg uppercase px-space-xl py-space-md rounded-lg transition-all duration-300"
                href="#membership"
              >
                <span>View Plans</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-space-md pt-space-md">
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
              <span className="font-label-sm text-label-sm uppercase text-on-surface">
                Trusted by 5,000+ members
              </span>
              <span className="text-on-surface-variant">/</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">4.9 Average Club Rating</span>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-space-md bg-surface-container/90 backdrop-blur-xl p-space-lg rounded-xl shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                Facility Capacity
              </span>
              <span className="font-label-sm text-label-sm uppercase text-primary-container">Live</span>
            </div>
            <div className="flex items-baseline gap-space-sm">
              <span className="font-headline-lg text-headline-lg text-primary">15,000</span>
              <span className="font-label-lg text-label-lg uppercase text-on-surface-variant">
                Sq Ft Turf &amp; Iron
              </span>
            </div>
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-primary-container rounded-full" />
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Dedicated Olympic lifting platforms, recovery sauna, and biometric tracking zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
