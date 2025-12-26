"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  FileCheck,
  Landmark,
  PieChart,
  Scale,
} from "lucide-react";

const registrationSteps = [
  {
    title: "PACRA Incorporation",
    desc: "Name clearance and registration with the Patents and Companies Registration Agency. We handle the Articles of Association.",
    icon: Landmark,
  },
  {
    title: "ZRA Tax Compliance",
    desc: "Registration for TPIN and VAT (where applicable) to ensure your business is legally recognized by the Zambia Revenue Authority.",
    icon: Scale,
  },
  {
    title: "Investment License",
    desc: "Facilitating ZDA (Zambia Development Agency) certificates for qualifying investors to unlock tax incentives.",
    icon: PieChart,
  },
  {
    title: "Statutory Filings",
    desc: "Registration with NAPSA and Workers Compensation—critical for your future Employment Permit applications.",
    icon: FileCheck,
  },
];

export default function CompanyRegistrationPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Corporate Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Establish Your{" "}
              <span className="text-slate-500">Zambian Enterprise.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We provide comprehensive company formation services designed to
              meet the specific requirements of the Immigration Department for
              Investor Permits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">The Investor Pathway</h2>
            <p className="text-slate-600 text-lg">
              To qualify for an <strong>Investor's Permit</strong>, your company
              structure must comply with specific capital and shareholding
              regulations.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
              <p className="text-blue-900 font-medium italic">
                "Our team ensures your PACRA documentation is perfectly aligned
                with your Immigration goals from Day 1."
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
              className="w-full h-full object-cover"
              alt="Business handshake"
            />
          </div>
        </div>
      </section>

      {/* Service Steps */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Comprehensive Incorporation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-2">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6">
        <div className="max-w-2xl mx-auto bg-slate-50 p-12 rounded-3xl border border-slate-100">
          <Briefcase className="mx-auto text-blue-600 mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-4">Start Your Business Today</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Standard incorporation takes 3-5 working days. Contact us to clear
            your company name and begin the filing process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
              Download Checklist
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
