"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero / Header */}
      <section className="bg-slate-50 border-b border-slate-200 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Secure Your <span className="text-blue-600">Status.</span>
            </h1>
            <p className="text-xl text-slate-600">
              Consultations are by appointment. Reach out to our Lusaka office
              to verify your eligibility and begin your application.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-8">Case Assessment Request</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 outline-none transition-colors"
                    placeholder="+260..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Service Required
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 outline-none transition-colors bg-white">
                  <option>Employment Permit</option>
                  <option>Investor's Permit</option>
                  <option>Visiting/Tourist Visa</option>
                  <option>Logistics & Transport support</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 outline-none transition-colors"
                  placeholder="Briefly describe your situation..."
                />
              </div>

              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                <Send size={18} />
                Send Request
              </button>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <div className="space-y-12">
            {/* Direct Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-6">Direct Channels</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                        Call or WhatsApp
                      </p>
                      <p className="text-lg font-semibold">
                        0977 205 704 / 0958 205 700
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                        Email Address
                      </p>
                      <p className="text-lg font-semibold">
                        info@realtimeimmigration.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Office Location</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                      Lusaka Headquarters
                    </p>
                    <p className="text-lg font-semibold leading-relaxed">
                      Plot No. XXX, Great East Road,
                      <br />
                      Lusaka, Zambia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Availability Note */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-slate-900 text-white p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                <Clock size={20} />
                <span className="font-bold uppercase tracking-widest text-sm">
                  Working Hours
                </span>
              </div>
              <p className="text-slate-400 mb-6 italic">
                Our team monitors urgent immigration matters 24/7, but office
                visits are restricted to:
              </p>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold">08:00 - 17:00</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold">09:00 - 13:00</span>
                </li>
                <li className="flex justify-between text-slate-500">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 uppercase tracking-[0.2em] font-bold text-xs mb-8">
            What happens next?
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Review within 2 hours",
              "Expert case assignment",
              "Clear fee quotation",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200"
              >
                <CheckCircle2 className="text-green-500 shrink-0" />
                <span className="font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
