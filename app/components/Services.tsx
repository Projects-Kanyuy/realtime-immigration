"use client";

import { useEffect, useState } from "react";

interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

interface ServicesProps {
  heading?: string;
  subheading?: string;
  services?: ServiceItem[];
}

export default function Services({
  heading,
  subheading,
  services,
}: ServicesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="relative py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div
          className={`max-w-3xl mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-blue-700 font-bold tracking-wider text-sm uppercase">
            Our Expertise
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            {heading || "Our Services"}
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 rounded-full" />
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {subheading ||
              "Comprehensive immigration, travel, and logistics solutions tailored to your specific needs."}
          </p>
        </div>

        {/* Professional Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <div
              key={index}
              className={`
                group bg-white border border-slate-200 p-8 rounded-2xl
                transition-all duration-500 flex flex-col
                hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Subtle Icon/Number Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {service.items?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs font-semibold text-slate-700"
                  >
                    <svg
                      className="h-4 w-4 text-blue-600 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
