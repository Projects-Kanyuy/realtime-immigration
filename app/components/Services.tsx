"use client";

import { useEffect, useState } from "react";

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="relative py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`
            max-w-2xl mb-14
            transition-all duration-700
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            End-to-end immigration, travel, and logistics support — delivered
            with clarity and compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Immigration */}
          <div
            className={`
              rounded-xl border border-slate-200 bg-slate-50 p-8
              transition-all duration-700 delay-150
              hover:shadow-md
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <h3 className="text-xl font-semibold text-slate-900">
              Immigration Services
            </h3>

            <p className="mt-3 text-slate-600">
              Professional assistance with immigration processes in full
              compliance with Zambian regulations.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Visa Applications
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Work, Investor & Diplomatic Permits
              </li>
            </ul>
          </div>

          {/* Travel & Logistics */}
          <div
            className={`
              rounded-xl border border-slate-200 bg-slate-50 p-8
              transition-all duration-700 delay-300
              hover:shadow-md
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <h3 className="text-xl font-semibold text-slate-900">
              Travel & Logistics
            </h3>

            <p className="mt-3 text-slate-600">
              Reliable travel coordination and logistical support for
              individuals and businesses.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Airport Pick-Up & Accommodation
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Car Hire Services
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Driver’s Licence Assistance
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Vehicle Importation, Registration & Insurance
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Company Registration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
