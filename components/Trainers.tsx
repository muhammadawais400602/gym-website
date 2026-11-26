const trainers = [
  {
    name: "Marcus Vance",
    role: "Strength & Conditioning",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMa2r7CKJWZjmP8vXimbKQ8qAMzePHxW8uMn0LMDNBnbIlcoknPHOtUe96dPek580vj_QbT2n0avQeTvYhd7nsKCbNmSN8Q6ft3ScYP9zDMDSX3OmEvxy41AnFi7rZe1biPI8TpnIHh4XbmGjQpRuzvkrQpmFxUIT_TxexRe2fq0Yxa9crGbw2TLuIOjFG7nTJQ87Z7f4b4xQn2aXSUw8mTG5HHncqYVBWT5kp_4g",
  },
  {
    name: "Elena Rostova",
    role: "HIIT & Mobility",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6VVpIjxKNAz5jIDVTtEUeWz6sXvC5E8d1FAv1eBnVjP-nImMjGZO6Rq7AgilELrNlZPcScOc6wpBYLetOIjCKtL4CcNtcchCOMBKge8NnzbuESl9W5ARC-BDLj0jkvG7AGQwZa-i1mUDlneaQ-yCcBYytgMCfaynunKgT48xSyRt2X1t48f-qxLuEQ7d2ywg19hROyT6132gBaPyngXiOZG4s1PvrAD_V6Kxe-SM",
  },
  {
    name: "Devon Brooks",
    role: "Boxing Coach",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzRmLKpq1b2PNZV6vzVo80g99WlaQEgNCFa_w75DnT383xPeeeOqVNaEMjM_91z4ySNWb3V11h75hODfrAYZfgvArbATW8MiarHwRdH9NkFQjQxeGENAirHy5hziHPKmVSZfG8Hd8FQ_SitFKUU7y5_9C1phnvVy-Fm5SKEF8TKVkwq7JZMhXlTGOtfhnDongSgXqvM_P9OihOS_ond-HfxnVGCIXVf2pgxaQ_asI",
  },
  {
    name: "Sora Takahashi",
    role: "Olympic Lifting",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOWoQ8BlCTzjpI7UMOoyy1_UDJUtwnDKREl0JVjJfodMmL8L_asc-lznKvvuvD55QlJcJIWncO9dxctBf7rdJxaw3-yvRbPIzrRzZLJ0Ufsv4Fjww9FTSt6OfYglzvHzFw4FVMBE3r6ZQ3wJXdU8OEqHVnN5xDp-NYE0-FeM3cTBrea3eYV2lT1Oj_85DCsMiC93HBbEZNpz0nfYGXvXoHCOn71mhNub0eZ3D7qRc",
  },
];

export default function Trainers() {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface" id="trainers">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div>
            <span className="font-label-sm text-label-sm uppercase text-primary-container">
              04 / Coaching Roster
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase text-primary mt-space-xs">
              Meet The Trainers
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Elite specialists dedicated to perfecting your form, programming your progression, and holding you
            accountable.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="group bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={t.name}
                  src={t.img}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-space-lg flex flex-col gap-space-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-primary">{t.name}</h3>
                  <span className="font-label-sm text-label-sm uppercase text-primary-container">{t.role}</span>
                </div>
                <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant">
                  <a aria-label="Instagram" className="hover:text-primary-container transition-colors" href="#contact">
                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  </a>
                  <a aria-label="Profile" className="hover:text-primary-container transition-colors" href="#contact">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
