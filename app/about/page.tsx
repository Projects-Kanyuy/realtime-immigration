"use client";

import { motion } from "framer-motion";
import { Globe, Landmark, PhoneCall, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      {/* Hero: Authority Focus */}
      <section className="relative bg-slate-50 pt-20 pb-32 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="text-blue-600 font-bold tracking-widest uppercase text-sm"
            >
              Established & Certified
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold mt-4 leading-tight"
            >
              Navigating Zambian Immigration with{" "}
              <span className="text-slate-500">Precision.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-xl text-slate-600 leading-relaxed"
            >
              Realtime Immigration Solutions & Logistics is more than a
              consultancy. We are your strategic partner in Lusaka, ensuring
              every permit, visa, and logistics hurdle is cleared with 100%
              compliance.
            </motion.p>
          </motion.div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-20 hidden lg:block" />
      </section>

      {/* Who We Are: The Zambia Context */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative h-[500px] w-full group"
          >
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl -z-10 group-hover:bg-blue-100 transition-colors" />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Professional Building"
              className="object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6">
              Local Expertise, Global Standards
            </h2>
            <div className="space-y-6 text-slate-600 text-lg">
              <p>
                Based in the heart of Zambia, we bridge the gap between complex
                Ministry of Home Affairs regulations and your business
                objectives.
              </p>
              <p>
                Whether you are a multinational corporation relocating staff to
                the Copperbelt or an investor seeking residency, our team
                handles the bureaucracy so you can focus on your transition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Banner */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4">
              <Landmark size={20} />
              <span>OFFICIAL CERTIFICATION</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ministry Authorized Firm
            </h2>
            <p className="text-slate-400 text-lg">
              Fully certified by the Immigration Department of Zambia under the
              Ministry of Home Affairs & Internal Security. We operate within
              official statutory timelines—no shortcuts, no uncertainty.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest">
                Compliant
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest">
                Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Core Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Immigration Services",
              desc: "Investor permits, work visas, and residency applications managed via official Zambian portals.",
              icon: ShieldCheck,
            },
            {
              title: "Travel & Logistics",
              desc: "End-to-end relocation: Airport logistics, vehicle importation, and company registration.",
              icon: Globe,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <item.icon className="text-blue-600 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA: Strong and Direct */}
      <section className="py-24 bg-blue-600 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Ready to start your application?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Schedule a consultation with our certified agents today. We provide
            clear timelines and transparent fee structures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:0977205704"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
            >
              <PhoneCall size={20} />
              Call 0977 205 704
            </a>
            <div className="text-blue-200 flex flex-col justify-center">
              <span className="text-sm uppercase tracking-widest">
                Alternative
              </span>
              <span className="font-mono">0958 205 700</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
