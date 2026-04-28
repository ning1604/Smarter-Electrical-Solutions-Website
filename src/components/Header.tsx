"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-process", label: "Our Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top bar — phone + hours */}
      <div className="bg-navy-950 text-white/80 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Serving {BUSINESS.city} &amp; {BUSINESS.region}</span>
          <div className="flex items-center gap-6">
            <span>Mon–Sat 7:30AM–5:00PM | By Appointment</span>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phonePretty}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg shadow-navy-950/5"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logos/smarter-elec-logo.png"
              alt="Smarter Electrical Solutions logo"
              width={48}
              height={60}
              style={{ height: "44px", width: "auto" }}
              priority
            />
            <Image
              src="/logos/logo-name.png"
              alt="Smarter Electrical Solutions"
              width={220}
              height={31}
              style={{ width: "220px", height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-navy-900"
                      : "text-slate-600 hover:text-navy-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-navy-950 font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 text-[15px]"
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Mobile phone + menu */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center w-10 h-10 bg-amber-500 rounded-lg text-navy-950"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-slate-100">
                <span className="font-bold text-navy-900">{BUSINESS.name}</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-slate-600" />
                </button>
              </div>
              <div className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-lg text-[16px] font-medium transition-colors ${
                        isActive
                          ? "bg-navy-50 text-navy-900"
                          : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="px-4 pb-8 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center justify-center gap-2 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-colors"
                >
                  <Phone size={18} />
                  {BUSINESS.phonePretty}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-3 bg-amber-500 text-navy-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
