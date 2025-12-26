"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Car, HardHat, Home, Truck } from "lucide-react";

const logisticsServices = [
  {
    title: "Vehicle Importation",
    desc: "End-to-end handling of customs clearance, ZRA documentation, and registration for personal or fleet vehicles.",
    icon: Truck,
  },
  {
    title: "Airport Transfers",
    desc: "Professional meet-and-greet services at Kenneth Kaunda International Airport with secure transit to your residence.",
    icon: Car,
  },
  {
    title: "Relocation & Housing",
    desc: "Short-term and long-term accommodation sourcing that aligns with your permit type and budget.",
    icon: Home,
  },
  {
    title: "Company Registration",
    desc: "Liaising with PACRA for business incorporation, tax registration, and statutory compliance.",
    icon: Building2,
  },
  {
    title: "Work Site Logistics",
    desc: "Coordination for expatriate staff moving to mining or agricultural sites across the Copperbelt and beyond.",
    icon: HardHat,
  },
];

export default function LogisticsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-full object-cover"
            alt="Logistics background"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">
              Zambian Operations
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Beyond the Permit: <br />
              <span className="text-blue-500">Total Logistics.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              We handle the physical move so you can focus on your mission. From
              vehicle clearance to corporate setup, we are your local ground
              team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logisticsServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer">
                Inquire Now <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Compliance Link */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Logistics Integrated with Immigration
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Most delays in Zambia occur because logistics aren't aligned with
            statutory fees and entry controls. We ensure your vehicle imports
            and business registrations match your permit status perfectly,
            avoiding costly penalties.
          </p>
        </div>
      </section>
    </main>
  );
}
