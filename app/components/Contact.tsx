"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-50 border-t border-slate-200 overflow-hidden"
    >
      {/* Decorative SVG motion (subtle) */}
      <svg
        className="absolute -top-40 right-0 w-[600px] h-[600px] text-blue-200/30 animate-pulse"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle
          cx="300"
          cy="300"
          r="280"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Left: Context */}
          <div
            className={`
              transition-all duration-700
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Contact
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Speak With Our Team
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Have questions about visas, permits, or travel logistics? Our team
              is ready to guide you with clear, compliant, and professional
              support.
            </p>

            <div className="mt-8 space-y-3 text-slate-700">
              <p className="font-medium">📞 Phone</p>
              <p>0977 205 704</p>
              <p>0958 205 700</p>
            </div>

            <p className="mt-8 text-sm text-slate-500 max-w-md">
              Initial consultations are confidential and obligation-free.
            </p>
          </div>

          {/* Right: Form */}
          <div
            className={`
              bg-white border border-slate-200 rounded-xl p-8 shadow-sm
              transition-all duration-700 delay-150
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded border border-slate-300 px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded border border-slate-300 px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full rounded border border-slate-300 px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="
                  w-full inline-flex justify-center
                  bg-blue-800 text-white
                  px-6 py-3 rounded
                  font-medium
                  hover:bg-blue-900
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  transition
                "
              >
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center">
                We typically respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
