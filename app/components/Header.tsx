"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      submenu: [
        { name: "Visas & Permits", href: "/services/visas" },
        { name: "Travel & Logistics", href: "/services/logistics" },
        {
          name: "Company Registration",
          href: "/services/company-registration",
        },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl tracking-tight text-slate-900 shrink-0"
          >
            REALTIME{" "}
            <span className="text-blue-600 font-extrabold">IMMIGRATION</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href || "#"}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:0977205704"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Phone size={16} /> 0977 205 704
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div className="py-2">
                      <p className="px-3 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        {link.name}
                      </p>
                      <div className="space-y-1 bg-slate-50 rounded-xl p-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-3 text-base font-semibold text-slate-700 hover:text-blue-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-4 text-lg font-bold text-slate-900 border-b border-slate-50"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link
                  href="tel:0977205704"
                  className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg"
                >
                  <Phone size={20} /> Call Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
