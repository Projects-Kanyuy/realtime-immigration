"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Bell, FileText, MessageSquare, Plane, Send } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    title: "Consultation & Assessment",
    description:
      "Detailed eligibility review. We don't just take files; we verify success probability before you pay.",
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Document Preparation",
    description:
      "Our proprietary checklist system ensures zero errors. We handle the bureaucracy, you provide the facts.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Application Submission",
    description:
      "Precision filing with relevant authorities. We bypass common clerical delays via optimized formatting.",
    icon: Send,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Follow-up & Updates",
    description:
      "Active monitoring. You get a status report every 72 hours—no chasing us for answers.",
    icon: Bell,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Completion & Support",
    description:
      "Final document handover and arrival logistics. Our job isn't done until you've successfully landed.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Process() {
  const containerRef = useRef(null);

  // Progress bar logic for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="py-24 bg-white text-slate-900 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            The Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Our Execution Framework
          </h2>
          <p className="text-lg text-slate-500 max-w-xl">
            Immigration is a legal minefield. We use a structured 5-phase
            approach to mitigate risk and maximize approval rates.
          </p>
        </motion.div>

        {/* Timeline Logic */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-100 hidden lg:block">
            <motion.div
              className="w-full bg-blue-600 origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative mb-32 last:mb-0">
                <div
                  className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-[45%] space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                      >
                        <step.icon size={24} />
                      </motion.div>
                      <span className="text-slate-400 font-mono font-bold">
                        Step 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-[45%] relative group"
                  >
                    <div className="absolute -inset-2 bg-blue-100 rounded-2xl transform group-hover:rotate-2 transition-transform duration-300 -z-10" />
                    <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl shadow-xl">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={step.image}
                        alt={step.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
