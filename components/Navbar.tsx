"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#classes", label: "Classes" },
  { href: "#trainers", label: "Trainers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-wider">
          <span className="grid h-8 w-8 place-items-center rounded bg-brand text-white">IF</span>
          <span>IRONFORGE</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-neutral-300 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="btn-primary !px-5 !py-2 text-sm">
            Join Now
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="rounded border border-white/10 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="container-x flex flex-col gap-3 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-300"
              >
                {l.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary !py-2 text-sm">
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
