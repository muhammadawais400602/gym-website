const classes = [
  {
    name: "HIIT",
    duration: "45 Min",
    desc: "Max-effort intervals alternating sleds, rowers, and plyometrics to torch fat.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM3Liiycewhi1cdtCDAEX7cNGBHgEb5EAUs3rc9r1e1XkUxBhi3DjNEoja3BuobMOd5FYipSQELaRWCEg3U-RrG83_eUWgXbBM9PEzMOFXATDIDRwLv4rSECFped4V4-zCuS8UBTF5yDNMQ7Yc3mTfqCUFGtP1L-bjN3WxOswr9EGhDYKnqAyAFEKhN1Rwke3xrN-ZytT0UmOIOFjTD4U5ESpEZBIYfmjY9JPVyrM",
  },
  {
    name: "CrossFit",
    duration: "60 Min",
    desc: "Functional movements at high intensity combining Olympic lifts and gymnastics.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDKqVOQJ4B5Yw_LxQUqMefFlbeKbMLEwAV8Xe4CG6ckFfsqTEWNujw5DtwQ63wqX5LLWwK360LRZnHHBATn4WQlEVLD9rgyNk5WHbhaT3woU16DRCxH_HZKZt1Yj3JPOXBbVXgcWLRTJ7fJaBl75Wq_iT-cqQBejm5k-lmwFDADcKgpPcnyrTVNQO5niPgBhJUVeawyKbLKETbyuwwl771YkD0X18kIjirAhiiVAg",
  },
  {
    name: "Yoga",
    duration: "50 Min",
    desc: "Active recovery, joint mobility, and breathwork built for strength athletes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc4rS9PZa9dI_oTHTnG4cnF777j_XvTc51UThH29xrNrkQqpk-UJIF_Jl1EqV9mtOiRZCSIBqVj6ulTG6iLR8ESpV6cHbw2DdtwUWq8ZDOSnDBI_K9uD8y3VzuXqqnddlnBQ91TWObxDGnQnGudcNSgunBRTXxbeq5LBpyzAuwwBQJOcIM0kwSTqkbWE8cKfYq098rmxWk9iG5CtOqeY7uIF7Dhyn4HuwRoGnnVeU",
  },
  {
    name: "Boxing",
    duration: "50 Min",
    desc: "Heavy bag combinations, footwork drills, and core conditioning for pure grit.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA3gpJHVcLTTTBBgYRjjCViuOvaYgy9hqALMLW9WI4xsNNHGC8Je0oFAn8EkrwmiMMMRLCM1BPOBLwPsk0EekT64sO-vAl2Wc6xoPRD5inOr5Gth45jH51EgmB7e7LcGosl3KJDlIw6ne1JhS_Z6DPwCBFlNzGqHUVnCrdDOCVJeAVtGtpLViC9R5NT2LrjNHk6UBOd3P-1lsohR5nH8PnVpoWxqPXBKKQ4g18dMY",
  },
  {
    name: "Strength Training",
    duration: "60 Min",
    desc: "Progressive overload focused on squat, bench, deadlift, and hypertrophy.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf_aevsEPFpqFpjN4ZtpQJhmf450TN-O6gmihxiaSy1VxjOuC8bMaFndcqqw9JLkgqHQ9zk9nsAWXMMjzWl5kgzwyFwRgVFgoz0J7Oc02zQYuuBWAXT7TFXdxBEfycan8CQrfat8OapUn9y0Ayr0dSX1W7rcXN9n9F_Qcb0fKFY5UaJKk9np6xqKAKo3SU15RBhRQ3t2EvrVQqD0yONlrwODS8jXBijCh9CIT1ymQ",
  },
];

export default function Classes() {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface-container-low" id="classes">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div>
            <span className="font-label-sm text-label-sm uppercase text-primary-container">
              03 / Signature Programs
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase text-primary mt-space-xs">
              Classes &amp; Training
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Five specialized disciplines designed to build explosive power, endurance, and mobility.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
          {classes.map((c) => (
            <div
              key={c.name}
              className="group bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={c.name}
                  src={c.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-space-sm left-space-sm bg-surface/85 backdrop-blur-md text-primary-container font-label-sm text-label-sm uppercase px-space-sm py-space-xs rounded-full">
                  {c.duration}
                </span>
              </div>
              <div className="p-space-lg flex flex-col gap-space-xs">
                <h3 className="font-headline-sm text-headline-sm uppercase text-primary">{c.name}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
