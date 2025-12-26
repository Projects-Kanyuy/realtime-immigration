export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            REALTIME IMMIGRATION SOLUTIONS & LOGISTICS
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
            A Zambia-based immigration and travel support firm providing clear,
            compliant, and reliable services for individuals and businesses.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Visa Applications</li>
            <li>Work, Investor & Diplomatic Permits</li>
            <li>Travel & Logistics Support</li>
            <li>Vehicle & Company Registration</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Contact
          </h4>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>📞 0977 205 704</p>
            <p>📞 0958 205 700</p>
            <p className="pt-2 text-slate-500">
              Certified by the Immigration Department of Zambia
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        IMMIGRATION SOLUTION & LOGISTICS — Making Your Journey Smooth and
        Hassle-Free
      </div>
    </footer>
  );
}
