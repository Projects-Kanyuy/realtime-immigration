"use client";
import { useEffect, useState } from "react";

interface AboutProps {
  heading?: string;
  text1?: string;
  text2?: string;
  points?: string[];
  bottomNote?: string;
}

const About = ({ heading, text1, text2, points, bottomNote }: AboutProps) => {
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
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            About Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {heading || "Trusted Immigration & Travel Support in Zambia"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div
            className={`transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {text1 ||
                "REALTIME IMMIGRATION SOLUTIONS & LOGISTICS is a Zambia-based firm..."}
            </p>
            {text2 && (
              <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
                {text2}
              </p>
            )}
          </div>

          <div
            className={`bg-slate-50 border border-slate-200 rounded-xl p-8 transition-all duration-700 delay-300 hover:shadow-sm ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
              Why Clients Work With Us
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {/* Loop through the points from Sanity */}
              {points?.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-800 font-semibold">•</span>
                  {point}
                </li>
              )) || (
                <li className="text-slate-400">
                  Add trust points in Sanity...
                </li>
              )}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                {bottomNote ||
                  "From visa applications to logistics, we act as a single partner..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
