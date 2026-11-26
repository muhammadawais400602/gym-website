export default function FreeTrial() {
  return (
    <section className="w-full py-20 bg-surface-container-lowest relative overflow-hidden" id="free-trial">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-primary-container/5" />
      <div className="relative z-10 max-w-7xl mx-auto px-margin lg:px-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
        <div className="flex flex-col gap-space-sm text-center lg:text-left">
          <span className="font-label-sm text-label-sm uppercase text-primary-container">Limited-Time Pass</span>
          <h2 className="font-display-xl text-display-xl-mobile lg:text-display-xl uppercase text-primary">
            Get Your First Week Free
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Experience full 24/7 club access, unlimited group classes, and a complimentary 1-on-1 performance
            assessment.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 inline-flex items-center justify-center gap-space-sm bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed font-label-lg text-label-lg uppercase px-space-xl py-space-md rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <span>Claim Free Pass</span>
          <span className="material-symbols-outlined text-[20px]">bolt</span>
        </a>
      </div>
    </section>
  );
}
