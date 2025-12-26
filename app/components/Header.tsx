"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-semibold text-blue-800 text-sm md:text-base"
        >
          REALTIME IMMIGRATION SOLUTIONS & LOGISTICS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="text-slate-600 hover:text-blue-800">
            Home
          </Link>

          <Link href="/about" className="text-slate-600 hover:text-blue-800">
            About
          </Link>

          <Link href="/process" className="text-slate-600 hover:text-blue-800">
            Process
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-slate-600 hover:text-blue-800 flex items-center gap-1">
              Services
              <span className="text-xs">▾</span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 mt-3 w-56 bg-white border border-slate-200 rounded shadow-lg overflow-hidden"
                >
                  <Link
                    href="/services/visas"
                    className="block px-4 py-3 hover:bg-slate-50 text-slate-700"
                  >
                    Visas & Permits
                  </Link>
                  <Link
                    href="/services/logistics"
                    className="block px-4 py-3 hover:bg-slate-50 text-slate-700"
                  >
                    Travel & Logistics
                  </Link>
                  <Link
                    href="/services/company-registration"
                    className="block px-4 py-3 hover:bg-slate-50 text-slate-700"
                  >
                    Company Registration
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className="ml-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-80 bg-white p-6 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/process" onClick={() => setOpen(false)}>
                Process
              </Link>

              <div className="border-t pt-4">
                <p className="text-xs text-slate-500 mb-2">Services</p>
                <Link href="/services/visas" onClick={() => setOpen(false)}>
                  Visas & Permits
                </Link>
                <Link href="/services/logistics" onClick={() => setOpen(false)}>
                  Travel & Logistics
                </Link>
                <Link
                  href="/services/company-registration"
                  onClick={() => setOpen(false)}
                >
                  Company Registration
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-auto bg-blue-800 text-white text-center py-3 rounded"
              >
                Contact
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
