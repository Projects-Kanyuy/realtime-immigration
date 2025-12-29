"use client";
import { useEffect, useState } from "react";

interface TrustProps {
  heading?: string;
  description?: string;
  points?: string[];
  ctaText?: string;
}

export default function WhyChooseUs({
  heading,
  description,
  points,
  ctaText,
}: TrustProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="cta"
      className="relative py-28 bg-slate-900 text-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-800/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {heading || "Work With a Team You Can Trust"}
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            {description ||
              "Immigration and travel decisions require accuracy, compliance, and accountability."}
          </p>
        </div>

        {/* Dynamic Proof Points Loop */}
        <div
          className={`mt-10 flex flex-col md:flex-row justify-center gap-6 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {points?.map((point, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-slate-200"
            >
              {point}
            </div>
          )) || (
            <div className="text-slate-500 italic text-sm">
              No trust points added yet.
            </div>
          )}
        </div>

        {/* CTA */}
        <div
          className={`mt-14 flex flex-col sm:flex-row justify-center gap-6 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded font-medium shadow-md hover:bg-blue-800 transition"
          >
            {ctaText || "Request a Consultation"}
          </a>

          <p className="self-center text-sm text-slate-400">
            Speak directly with our team — no obligation
          </p>
        </div>
      </div>
    </section>
  );
}
