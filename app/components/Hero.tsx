"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base white */}
        <div className="absolute inset-0 bg-white" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Soft focus glow */}
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-28 md:py-32">
        {/* Badge */}
        <div
          className={`
            inline-flex items-center gap-2 mb-6
            bg-blue-100 text-blue-800
            px-4 py-2 rounded-full
            text-sm font-medium
            transition-all duration-700
            ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }
          `}
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 3l8 4v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V7l8-4z" />
          </svg>
          Trusted Immigration Partner
        </div>

        <div className="max-w-4xl">
          {/* Heading */}
          <h1
            className={`
              text-4xl md:text-5xl lg:text-6xl
              font-semibold tracking-tight leading-tight
              text-slate-900
              transition-all duration-700
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            Immigration & Travel Services
            <span className="block text-blue-800 font-medium mt-2">
              Built on Clarity, Compliance, and Trust
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`
              mt-6 text-lg text-slate-600 max-w-2xl
              transition-all duration-700 delay-150
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            We help professionals, investors, and travelers navigate immigration
            processes in Zambia with precision, transparency, and confidence.
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6
              transition-all duration-700 delay-300
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center
                bg-blue-800 text-white
                px-6 py-3.5 rounded-lg
                font-medium
                shadow-lg
                hover:bg-blue-900 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                transition
              "
            >
              Request Consultation
            </a>

            <a
              href="#services"
              className="
                inline-flex items-center justify-center
                text-slate-700
                font-medium
                hover:text-blue-800
                transition
              "
            >
              View Services →
            </a>
          </div>

          {/* Credibility cue */}
          <p className="mt-6 text-xs text-slate-500">
            Regulated processes • Transparent fees • Clear timelines
          </p>
        </div>
      </div>
    </section>
  );
}
