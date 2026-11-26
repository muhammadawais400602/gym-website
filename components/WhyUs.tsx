const features = [
  { icon: "schedule", title: "24/7 Access", desc: "Train on your schedule with biometric keycard entry every day of the year, day or night." },
  { icon: "verified", title: "Certified Trainers", desc: "Work with NSCA-certified coaches who build data-backed programs tailored to your goals." },
  { icon: "fitness_center", title: "Modern Equipment", desc: "Calibrated Eleiko plates, competition racks, turf lanes, and smart cardio consoles." },
  { icon: "groups", title: "Group Classes", desc: "High-energy HIIT, boxing, and strength sessions led by motivating coaches who push your pace." },
];

export default function WhyUs() {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface-container-low" id="why-us">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div>
            <span className="font-label-sm text-label-sm uppercase text-primary-container">
              01 / The Apex Standard
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase text-primary mt-space-xs">
              Built For Results
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Every square foot is engineered to eliminate excuses and accelerate your strength, conditioning, and
            recovery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-surface-container p-space-lg rounded-xl shadow-md hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1 flex flex-col gap-space-md"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined text-[28px]">{f.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-primary">{f.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
