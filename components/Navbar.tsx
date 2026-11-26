"use client";

import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#membership", label: "Membership" },
  { href: "#classes", label: "Classes" },
  { href: "#trainers", label: "Trainers" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin lg:px-space-xl flex items-center justify-between gap-gutter">
        <a href="#home" className="flex items-center gap-space-sm">
          <span className="grid h-8 w-8 place-items-center rounded bg-primary-container text-on-primary-container font-headline-sm text-[14px] font-bold">
            AX
          </span>
          <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
            APEX ATHLETICS
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-space-lg">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={
                i === 0
                  ? "uppercase transition-colors text-primary-container font-bold font-label-lg text-label-lg"
                  : "font-label-lg text-label-lg uppercase text-on-surface-variant hover:text-on-surface transition-colors"
              }
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            href="#membership"
            className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed font-label-lg text-label-lg uppercase px-space-lg py-space-sm rounded-lg transition-all"
          >
            Join Now
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-surface-container-high bg-surface">
          <div className="max-w-7xl mx-auto px-margin py-space-md flex flex-col gap-space-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-label-lg text-label-lg uppercase text-on-surface-variant py-space-xs"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#membership"
              onClick={() => setOpen(false)}
              className="mt-space-xs inline-flex items-center justify-center bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase px-space-lg py-space-sm rounded-lg"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
