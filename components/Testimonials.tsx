const quotes = [
  { name: "Jordan K.", result: "-18 lbs in 4 months", quote: "The coaches actually know my name and my goals. I've never stuck with a gym this long." },
  { name: "Elena M.", result: "First pull-up at 42", quote: "I was intimidated walking in. Three months later I'm teaching new members the ropes." },
  { name: "Tyrone W.", result: "405 deadlift PR", quote: "Programming is next level. I added 70 lbs to my deadlift in six months of consistent work." },
];

export default function Testimonials() {
  return (
    <section className="section border-b border-white/10 bg-neutral-900/50">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Results</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Real members. Real progress.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-xl border border-white/10 bg-neutral-950 p-8">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand">
                <path d="M7 10h3V7c0-2 1-3 3-3V2C9 2 7 4 7 7v3zm7 0h3V7c0-2 1-3 3-3V2c-4 0-6 2-6 5v3z" />
              </svg>
              <blockquote className="mt-4 text-lg leading-relaxed text-neutral-200">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="font-semibold">{q.name}</div>
                <div className="text-sm text-brand">{q.result}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
