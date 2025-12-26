"use client";

import { useEffect, useState } from "react";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`
            max-w-3xl mb-16
            transition-all duration-700
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            About Us
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Trusted Immigration & Travel Support in Zambia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Left: Narrative */}
          <div
            className={`
              transition-all duration-700 delay-150
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              REALTIME IMMIGRATION SOLUTIONS & LOGISTICS is a Zambia-based firm
              providing structured, compliant immigration and travel support for
              individuals and businesses.
            </p>

            <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
              Whether relocating for employment, investing in Zambia, or
              coordinating travel logistics, our team manages each step with
              precision — reducing delays, uncertainty, and administrative
              burden.
            </p>
          </div>

          {/* Right: Trust + Scope */}
          <div
            className={`
              bg-slate-50 border border-slate-200 rounded-xl p-8
              transition-all duration-700 delay-300
              hover:shadow-sm
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
              Why Clients Work With Us
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Certified by the Immigration Department of Zambia under the
                Ministry of Home Affairs & Internal Security
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Experienced, reliable, and client-focused service delivery
              </li>
              <li className="flex gap-3">
                <span className="text-blue-800 font-semibold">•</span>
                Transparent processes with clearly defined timelines
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                From visa applications and permits to logistics and company
                registration, we act as a single, accountable partner throughout
                your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
