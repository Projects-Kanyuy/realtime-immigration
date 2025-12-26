"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck } from "lucide-react";

const evisas = [
  { title: "Single Entry", desc: "Valid for 90 days; enter Zambia once." },
  {
    title: "Double Entry",
    desc: "Valid for 90 days; enter and re-enter once.",
  },
  {
    title: "Multiple Entry",
    desc: "Issued by HQ; valid for 90 days (3 years for USA nationals).",
  },
  {
    title: "KAZA Univisa",
    desc: "Covers Zambia, Zimbabwe, and Botswana day-trips (30 days).",
  },
  { title: "Transit Visa", desc: "For transiting overland; valid for 7 days." },
  {
    title: "Day Tripper",
    desc: "Less than 24 hours; available at Victoria Falls/Kazungula.",
  },
];

const permits = [
  "Residence Permit",
  "Employment Permit",
  "Investor Permit",
  "Spouse Permit",
  "Study Permit",
  "Diplomatic Permit",
  "Temporary Employment",
  "Cross Border",
  "Asylum Seekers",
];

export default function VisasPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Visas & Immigration Permits
          </motion.h1>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            Official immigration pathways for visitors, professionals, and
            investors in Zambia.
          </p>
        </div>
      </section>

      {/* E-Visa Grid (Data from pic1.jpeg) */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <Globe className="text-blue-600" size={32} />
          <h2 className="text-3xl font-bold">Entry e-Visas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {evisas.map((visa, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-xl mb-2 text-blue-600">
                {visa.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {visa.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Permits List (Data from pic2.jpeg) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">Long-Term Permits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {permits.map((permit, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-100 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  {i + 1}
                </div>
                <span className="font-medium text-slate-700">{permit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Not sure which permit you need?
        </h2>
        <p className="text-slate-600 mb-8">
          Our agents provide full assessment and document preparation.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all">
          Start Assessment
        </button>
      </section>
    </main>
  );
}
