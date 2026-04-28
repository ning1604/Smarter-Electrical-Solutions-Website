"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  DollarSign,
  ThumbsUp,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { BUSINESS } from "@/lib/constants";

/* ───────── FAQ Accordion ───────── */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="text-[16px] font-semibold text-navy-900 pr-4 group-hover:text-amber-600 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: "How much does it cost?",
    answer: `It depends on the job, but we never start work without giving you an exact price first. The estimate is free and there's no obligation. Call us or fill out the form and we'll give you a number, not a range, not a "starting at."`,
  },
  {
    question: "How quickly can you come out?",
    answer:
      "We offer same-day service for most jobs. Emergency calls are dispatched immediately, 24/7. When you reach out, we'll find the earliest time that works for both of us.",
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes. We are fully licensed electricians operating to Australian Standards and all relevant Victorian regulations, carrying general liability insurance and workers' compensation coverage. We're happy to provide documentation on request.`,
  },
  {
    question: "Do you pull permits?",
    answer:
      "Yes, whenever the work requires one. We file the permit, coordinate the inspection, and make sure the work passes. That's included. We don't charge extra for doing things the right way.",
  },
  {
    question: "What if I'm not happy with the work?",
    answer:
      "Call us. We come back and make it right. That guarantee doesn't have a time limit.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we offer financing options for larger projects like panel upgrades, rewiring, and generator installations. Ask us for details when you request your estimate.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <FadeIn>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Get Your Free Estimate
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Tell us what you need and we&apos;ll follow up within a few hours
              during business hours. For something urgent, call{" "}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-amber-400 font-semibold hover:text-amber-300 transition-colors"
              >
                {BUSINESS.phonePretty}
              </a>{" "}
              and we answer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two-column: Form + Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT: Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                    <CheckCircle2
                      size={48}
                      className="text-green-600 mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-navy-900 mb-2">
                      Request Received
                    </h2>
                    <p className="text-slate-600">
                      We&apos;ll get back to you within a few hours. For faster
                      service, call{" "}
                      <a
                        href={`tel:${BUSINESS.phone}`}
                        className="text-amber-600 font-semibold"
                      >
                        {BUSINESS.phonePretty}
                      </a>{" "}
                      directly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 p-8 md:p-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label
                          htmlFor="fullname"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullname"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Phone Number{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-address"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Street Address or Zip Code{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-address"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                          placeholder="Address or zip code"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Service Needed{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="contact-service"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all bg-white"
                        >
                          <option value="">Select a service...</option>
                          <option>Panel Upgrade</option>
                          <option>Outlet/Switch Repair</option>
                          <option>Lighting</option>
                          <option>Ceiling Fan</option>
                          <option>Rewiring</option>
                          <option>EV Charger</option>
                          <option>Generator</option>
                          <option>Inspection</option>
                          <option>Emergency</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="contact-method"
                          className="block text-sm font-medium text-slate-700 mb-1.5"
                        >
                          Preferred Contact Method
                        </label>
                        <select
                          id="contact-method"
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all bg-white"
                        >
                          <option>No Preference</option>
                          <option>Phone</option>
                          <option>Email</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Tell Us About the Issue
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all resize-none"
                        placeholder="Describe the issue, what room it's in, when it started, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-navy-950 font-semibold py-4 rounded-xl transition-all duration-200 text-[16px] cursor-pointer"
                    >
                      Request My Free Estimate
                    </button>

                    <p className="text-center text-slate-400 text-sm mt-4">
                      No spam. No obligation. Your information stays with us.
                    </p>
                  </form>
                )}
              </FadeIn>
            </div>

            {/* RIGHT: Contact details + trust */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.15}>
                <div className="space-y-8">
                  {/* Contact info */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <h3 className="font-semibold text-navy-900 mb-5 text-lg">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className="text-navy-700 mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="font-medium text-navy-900 text-sm">
                            {BUSINESS.name}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {BUSINESS.address}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`tel:${BUSINESS.phone}`}
                        className="flex items-center gap-3 text-navy-900 hover:text-amber-600 transition-colors"
                      >
                        <Phone size={18} className="shrink-0" />
                        <span className="font-semibold text-sm">
                          {BUSINESS.phonePretty}
                        </span>
                      </a>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="flex items-center gap-3 text-navy-900 hover:text-amber-600 transition-colors"
                      >
                        <Mail size={18} className="shrink-0" />
                        <span className="text-sm">{BUSINESS.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <h3 className="font-semibold text-navy-900 mb-5 text-lg">
                      Business Hours
                    </h3>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Mon – Fri</span>
                        <span className="text-navy-900 font-medium">
                          7:30 AM – 5:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Saturday</span>
                        <span className="text-navy-900 font-medium">
                          7:30 AM – 5:00 PM
                        </span>
                      </div>
                      <div className="pt-2.5 mt-2.5 border-t border-slate-200">
                        <span className="text-slate-400 italic">By appointment only</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust signals */}
                  <div className="space-y-3">
                    {[
                      { icon: Star, text: `${BUSINESS.googleRating} Stars on Google` },
                      { icon: DollarSign, text: "Upfront, Flat-Rate Pricing" },
                      { icon: Clock, text: "Same-Day Appointments Available" },
                      { icon: Shield, text: "Licensed & Insured" },
                      { icon: ThumbsUp, text: "Satisfaction Guaranteed" },
                    ].map((signal) => (
                      <div
                        key={signal.text}
                        className="flex items-center gap-3 bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3"
                      >
                        <signal.icon
                          size={18}
                          className="text-amber-600 shrink-0"
                        />
                        <span className="text-navy-900 font-medium text-sm">
                          {signal.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] my-8">
            <iframe
              title="Smarter Electrical Solutions location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Common Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y-0 px-8">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
