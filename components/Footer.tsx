export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-black tracking-wider">
              <span className="grid h-8 w-8 place-items-center rounded bg-brand text-white">IF</span>
              <span>IRONFORGE</span>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              Forging stronger bodies and sharper minds since 2012.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#classes" className="hover:text-white">Classes</a></li>
              <li><a href="#trainers" className="hover:text-white">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Mon–Fri: 5am – 11pm</li>
              <li>Sat–Sun: 7am – 9pm</li>
              <li>Members: 24/7 access</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>123 Steel Street, Metro City</li>
              <li>+1 (555) 010-7788</li>
              <li>hello@ironforge.gym</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} IronForge Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
