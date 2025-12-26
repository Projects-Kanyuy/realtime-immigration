"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900"
          >
            About Realtime Immigration Solutions & Logistics
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl"
          >
            Your trusted partner for immigration and travel services in Zambia.
            We help individuals, professionals, and businesses navigate complex
            processes with clarity, compliance, and confidence.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
              Who We Are
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              REALTIME IMMIGRATION SOLUTIONS & LOGISTICS is a professional
              service firm based in Zambia, providing end-to-end immigration,
              travel, and logistics support. Whether relocating for work,
              investment, or travel, our team ensures every step is handled
              efficiently and in line with national regulations.
            </p>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="h-64 sm:h-80 rounded-lg bg-slate-200"
          >
            {/* Replace with next/image */}
          </motion.div>
        </div>
      </section>

      {/* Authority */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Image first on desktop */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-64 sm:h-80 rounded-lg bg-slate-200 order-last md:order-first"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                Certified & Authorized
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
                We are certified by the Immigration Department of Zambia under
                the Ministry of Home Affairs & Internal Security. Our processes
                follow approved procedures, statutory requirements, and official
                timelines—giving clients confidence and peace of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-semibold text-slate-900 mb-8"
        >
          What We Do
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
          {[
            {
              title: "Immigration Services",
              text: "Visa applications and immigration permits including work, investor, diplomatic, and residency-related services.",
            },
            {
              title: "Travel & Logistics",
              text: "Airport pick-ups, accommodation, vehicle importation, licensing, and company registration support.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-lg border border-slate-200 p-6"
            >
              <h3 className="font-medium text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-semibold mb-6"
          >
            Why Clients Choose Us
          </motion.h2>

          <ul className="space-y-3 text-slate-200 text-sm max-w-3xl">
            {[
              "Certified by the Immigration Department of Zambia",
              "Experienced, reliable, and customer-focused team",
              "Transparent processes and clear timelines",
              "Professional handling of sensitive documentation",
            ].map((item, idx) => (
              <motion.li
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                ✔ {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-16 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-semibold text-slate-900"
          >
            Speak With Our Team
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-slate-600"
          >
            Contact us today to discuss your immigration or travel needs.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg font-medium text-slate-900"
          >
            📞 0977 205 704 &nbsp; | &nbsp; 0958 205 700
          </motion.p>
        </div>
      </section>
    </main>
  );
}
