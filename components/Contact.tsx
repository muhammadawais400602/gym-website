"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Book your free intro.</h2>
          <p className="mt-4 text-neutral-400">
            Tell us about your goals. One of our coaches will get back to you within 24 hours to schedule a free
            60-minute consultation and gym tour.
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-semibold text-neutral-300">Address</dt>
              <dd className="text-neutral-400">123 Steel Street, Metro City, 10001</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-300">Phone</dt>
              <dd className="text-neutral-400">+1 (555) 010-7788</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-300">Email</dt>
              <dd className="text-neutral-400">hello@ironforge.gym</dd>
            </div>
          </dl>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-neutral-300">First name</span>
              <input required className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none focus:border-brand" />
            </label>
            <label className="block">
              <span className="text-sm text-neutral-300">Last name</span>
              <input required className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none focus:border-brand" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-neutral-300">Email</span>
            <input type="email" required className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none focus:border-brand" />
          </label>
          <label className="block">
            <span className="text-sm text-neutral-300">Your goal</span>
            <select className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none focus:border-brand">
              <option>Build strength</option>
              <option>Lose weight</option>
              <option>Learn boxing</option>
              <option>Train for an event</option>
              <option>Just get moving</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm text-neutral-300">Message</span>
            <textarea rows={3} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none focus:border-brand" />
          </label>
          <button type="submit" className="btn-primary w-full">
            {sent ? "Thanks — we'll be in touch!" : "Request free intro"}
          </button>
        </form>
      </div>
    </section>
  );
}
