"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="grid h-8 w-8 place-items-center rounded bg-primary-container text-on-primary-container font-headline-sm text-[14px] font-bold">
              AX
            </span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
              APEX ATHLETICS
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Engineered for peak performance, relentless discipline, and measurable athletic progress.
          </p>
          <div className="flex items-center gap-space-md">
            <a aria-label="Social Share" className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a aria-label="Community" className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a aria-label="Gallery" className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a aria-label="Video" className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-space-sm">
          <span className="font-label-lg text-label-lg uppercase text-on-surface mb-space-xs">Quick Links</span>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#home">Home</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#membership">Membership</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#classes">Classes</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#trainers">Trainers</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#contact">Contact</a>
        </div>
        <div className="md:col-span-4 flex flex-col gap-space-sm">
          <span className="font-label-lg text-label-lg uppercase text-on-surface mb-space-xs">Newsletter</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Get training protocols, class drops, and club updates.
          </p>
          <form
            className="flex items-center gap-space-sm mt-space-xs"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="w-full bg-surface-container-highest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed font-label-lg text-label-lg uppercase px-space-md py-space-sm rounded-lg transition-all shrink-0"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl mt-space-xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
        <span>© {new Date().getFullYear()} Apex Athletics. All rights reserved.</span>
        <span>24/7 Performance Club</span>
      </div>
    </footer>
  );
}
