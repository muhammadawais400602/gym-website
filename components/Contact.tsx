"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="w-full py-20 lg:py-24 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div className="mb-12">
          <span className="font-label-sm text-label-sm uppercase text-primary-container">
            06 / Visit The Club
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase text-primary mt-space-xs">
            Contact &amp; Location
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-6 bg-surface-container p-space-xl rounded-xl shadow-lg">
            <form
              className="flex flex-col gap-space-md"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <div>
                <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-space-xs" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none"
                  placeholder="Alex Mercer"
                  required
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-space-xs" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none"
                    placeholder="alex@example.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-space-xs" htmlFor="contact-phone">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none"
                    placeholder="(512) 555-0194"
                    type="tel"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant mb-space-xs" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none resize-none"
                  placeholder="Tell us your training goals or book your free 7-day pass..."
                  required
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed font-label-lg text-label-lg uppercase py-space-md rounded-lg transition-all mt-space-xs"
              >
                Send Message
              </button>
              {sent && (
                <div className="font-body-sm text-body-sm text-primary-container text-center pt-space-xs">
                  Message received! Our coaching team will reach out within 2 hours.
                </div>
              )}
            </form>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <div
              className="w-full h-64 lg:h-72 bg-cover bg-center rounded-xl shadow-lg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbHKkILzR3eF6DI3198prMPOhnmYed-gKwgNK3-On03Cyb2YCA9vadaNnEQTkRRUIFOMnvfSQJoAAGOZ9WcFqO6fJN66MXwA4_cpoGeN1tVPJZyHxuz3RrBGbH1gFJwWYwPaQpFyfk6-VWLEZ4h3f9g8trpQaCfE8_I0ZS_KMfH1LJLUvNWUs3xW3ryfAa6Idpb2yv1VhOKqDC1ojZmlcQgcwPELz3pbx_fT25Xh8')",
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md bg-surface-container p-space-lg rounded-xl shadow-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase text-primary-container">Address</span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  412 Congress Ave
                  <br />
                  Austin, TX 78701
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase text-primary-container">Opening Hours</span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Members: 24/7
                  <br />
                  Staffed: 6AM – 9PM
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase text-primary-container">Phone</span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  (512) 555-0148
                  <br />
                  hello@apexathletics.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
