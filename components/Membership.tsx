"use client";

import { useState } from "react";

const plans = [
  {
    name: "Basic",
    tag: "Open Gym",
    price: 39,
    desc: "Essential 24/7 access to the main strength floor and cardio deck.",
    features: [
      { ok: true, text: "24/7 Biometric Club Access" },
      { ok: true, text: "Full Strength & Cardio Floor" },
      { ok: true, text: "Locker Room & Showers" },
      { ok: false, text: "Unlimited Group Classes" },
    ],
    priceColor: "text-primary",
    highlight: false,
  },
  {
    name: "Pro",
    tag: "Most Popular",
    price: 69,
    desc: "Unlimited group classes, recovery suite, and monthly body composition scans.",
    features: [
      { ok: true, text: "Everything in Basic" },
      { ok: true, text: "Unlimited HIIT, Boxing & Yoga" },
      { ok: true, text: "Infrared Sauna & Cold Plunge" },
      { ok: true, text: "Monthly InBody 3D Scan" },
    ],
    priceColor: "text-primary-container",
    highlight: true,
  },
  {
    name: "Elite",
    tag: "1-on-1 Coaching",
    price: 119,
    desc: "Complete athletic transformation with dedicated personal training and nutrition.",
    features: [
      { ok: true, text: "Everything in Pro" },
      { ok: true, text: "4x Personal Training Sessions/Mo" },
      { ok: true, text: "Custom Macro & Meal Protocol" },
      { ok: true, text: "2 Free Guest Passes Monthly" },
    ],
    priceColor: "text-primary",
    highlight: false,
  },
];

export default function Membership() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section className="w-full py-20 lg:py-28 bg-surface" id="membership">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-sm text-label-sm uppercase text-primary-container">
            02 / Membership Tiers
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase text-primary mt-space-xs">
            Invest In Your Output
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            No hidden initiation fees. Flexible month-to-month plans designed for every level of commitment.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                p.highlight
                  ? "relative bg-surface-container-high p-space-xl rounded-xl shadow-2xl flex flex-col justify-between gap-space-lg overflow-hidden"
                  : "bg-surface-container p-space-xl rounded-xl shadow-lg flex flex-col justify-between gap-space-lg"
              }
            >
              {p.highlight && <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container" />}
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm uppercase text-primary">{p.name}</h3>
                  {p.highlight ? (
                    <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase px-space-md py-space-xs rounded-full">
                      {p.tag}
                    </span>
                  ) : (
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{p.tag}</span>
                  )}
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className={`font-display-xl text-display-xl ${p.priceColor}`}>${p.price}</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/mo</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{p.desc}</p>
                <ul className="flex flex-col gap-space-sm pt-space-md">
                  {p.features.map((f) => (
                    <li
                      key={f.text}
                      className={
                        f.ok
                          ? "flex items-center gap-space-sm font-body-md text-body-md text-on-surface"
                          : "flex items-center gap-space-sm font-body-md text-body-md text-on-surface-variant"
                      }
                    >
                      <span
                        className={
                          f.ok
                            ? "material-symbols-outlined text-primary-container text-[20px]"
                            : "material-symbols-outlined text-on-surface-variant text-[20px]"
                        }
                      >
                        {f.ok ? "check_circle" : "remove"}
                      </span>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setSelected(`${p.name} ($${p.price}/mo)`)}
                className={
                  p.highlight
                    ? "w-full bg-primary-container hover:bg-primary-fixed text-on-primary-container hover:text-on-primary-fixed font-label-lg text-label-lg uppercase py-space-md rounded-lg shadow-lg transition-all"
                    : "w-full bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-lg text-label-lg uppercase py-space-md rounded-lg transition-all"
                }
                type="button"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
        {selected && (
          <div className="mt-space-lg text-center font-label-lg text-label-lg uppercase text-primary-container">
            Selected: {selected} — Scroll down to claim your first week free.
          </div>
        )}
      </div>
    </section>
  );
}
