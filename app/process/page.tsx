"use client";

import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Process() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      title: "Consultation & Assessment",
      description:
        "We start by understanding your needs, reviewing eligibility, and explaining all available options.",
    },
    {
      title: "Document Preparation",
      description:
        "Our team guides you to collect, organize, and review all necessary documents for your application.",
    },
    {
      title: "Application Submission",
      description:
        "We submit your application to the relevant authorities, ensuring accuracy and compliance with regulations.",
    },
    {
      title: "Follow-up & Updates",
      description:
        "We monitor your application progress, communicate with authorities, and provide real-time updates.",
    },
    {
      title: "Completion & Support",
      description:
        "Once approved, we provide the final documents and assist with travel logistics or other related services.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          How Our Process Works
        </h1>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          We make immigration and travel simple, transparent, and stress-free.
          Follow our step-by-step process to see how we guide you from start to
          finish.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`
                bg-white p-6 rounded-xl shadow-sm border
                transition-all duration-700
                ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-3 text-blue-800">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
