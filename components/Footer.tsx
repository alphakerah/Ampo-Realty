export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b15]/95 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-gold/70">AMPO Realty</p>
          <h3 className="text-3xl font-semibold text-sand">A modern luxury property ecosystem built for aspiration and wealth.</h3>
          <p className="text-sm leading-7 text-sand/70">
            Designed for buyers, investors, and elite agents who expect cinematic presentation, guided discovery, and trusted market intelligence.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-sand">Platform</p>
            <ul className="mt-4 space-y-3 text-sm text-sand/60">
              <li>AI search</li>
              <li>Investment tools</li>
              <li>Agent CRM</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-sand">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-sand/60">
              <li>About us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-sand">Connect</p>
            <ul className="mt-4 space-y-3 text-sm text-sand/60">
              <li>support@amporealty.ph</li>
              <li>+63 917 123 4567</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
