"use client";
import { useEffect, useState } from "react";

interface ContactProps {
  heading?: string;
  description?: string;
  phones?: string[];
}

export default function Contact({
  heading,
  description,
  phones,
}: ContactProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-50 border-t border-slate-200 overflow-hidden"
    >
      {/* Decorative Background */}
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
          {/* Left Side */}
          <div
            className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Contact
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              {heading || "Speak With Our Team"}
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              {description || "Have questions? Our team is ready to guide you."}
            </p>

            <div className="mt-8 space-y-3 text-slate-700">
              <p className="font-medium">📞 Phone</p>
              {phones?.map((phone, i) => <p key={i}>{phone}</p>) || (
                <p>No phone numbers provided.</p>
              )}
            </div>
          </div>

          {/* Form (Static Logic, Dynamic Style) */}
          <div
            className={`bg-white border border-slate-200 rounded-xl p-8 shadow-sm transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <form className="space-y-5">
              {/* Form fields stay hardcoded for stability */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded border border-slate-300 px-4 py-2.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded border border-slate-300 px-4 py-2.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full rounded border border-slate-300 px-4 py-2.5"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 rounded font-medium hover:bg-blue-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
