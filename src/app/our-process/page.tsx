"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { BUSINESS } from "@/lib/constants";

const STAGES = [
  {
    num: "01",
    title: "Expectation",
    body: "Before anything else, we take you to the end game. We discuss what your ideal smart home looks and feels like, what functions it has, and what day-to-day life looks like inside it. Getting this picture right is what every other stage depends on.",
  },
  {
    num: "02",
    title: "Wants, Needs and Dreams",
    body: "We take everything discussed and sort it into priorities. What is essential, what is strongly wanted, and what would be the dream if budget allowed. This honest categorisation is what keeps the project grounded and on budget.",
  },
  {
    num: "03",
    title: "Budget",
    body: "With your priorities mapped, we can give you a rough budget range based on your decisions. We discuss how that fits your expectations and, if needed, what adjustments make sense without compromising what matters most to you.",
  },
  {
    num: "04",
    title: "Proposal",
    body: "We go away and design your system properly. Every piece of equipment, every function, every integration is documented into a clear, readable proposal. We offer two rounds of revisions at no charge to make sure the scope is exactly right before you commit.",
  },
  {
    num: "05",
    title: "Scope",
    body: "Once the proposal is finalised, it becomes a formal scope of works. This document is shared with your builder so they can factor it into timelines, trades scheduling, and cash flow planning. Everyone is working from the same information.",
  },
  {
    num: "06",
    title: "Site Revision",
    body: "We offer a walkthrough of your home once framing is complete. Standing inside the space with the scope in hand lets you see what the plan actually looks like and gives you a final opportunity to make changes before pre-wire begins.",
  },
  {
    num: "07",
    title: "Pre-wire and Construction",
    body: "Our team implements pre-wire, cut-out, and termination to the signed scope, coordinating with your builder and their trades throughout. Clean work, on schedule, respecting the site.",
  },
  {
    num: "08",
    title: "Commissioning",
    body: "We program your home technology to match the signed scope. Every integration is tested and signed off. At the end of commissioning, your home is fully functional across every system we have installed.",
  },
  {
    num: "09",
    title: "Documentation",
    body: "Every project closes with full internal documentation. Beyond that, we provide professionally marked-up drawings, system manuals, and access to our ongoing support service.",
  },
  {
    num: "10",
    title: "Handover",
    body: "This is the exciting part. We run handover in structured one-hour sessions, staged by importance so you are not overwhelmed at what is already a busy time. Three sessions cover: basic functions and scenes (lighting, climate, audio-visual, access); tweaks and advanced features; and final documentation, passwords, and site details.",
  },
];

const HANDOVER_SESSIONS = [
  {
    label: "Handover 1",
    desc: "Basic functions and scenes: lighting, climate, audio-visual, and access.",
  },
  {
    label: "Handover 2",
    desc: "Tweaks and advanced features.",
  },
  {
    label: "Handover 3",
    desc: "Final documentation, passwords, and site details.",
  },
];

function ProcessContent() {
  const [activeStage, setActiveStage] = useState("01");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    STAGES.forEach((stage) => {
      const el = document.getElementById(`stage-${stage.num}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStage(stage.num);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToStage = (num: string) => {
    const el = document.getElementById(`stage-${num}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-10 md:gap-12 lg:gap-16 mt-12 md:mt-16">

      <aside className="hidden md:block">
        <nav
          className="sticky top-[88px] max-h-[calc(100vh-120px)] overflow-y-auto pr-2"
          style={{ scrollbarWidth: "none" }}
        >
          {STAGES.map((stage) => {
            const isActive = activeStage === stage.num;
            return (
              <button
                key={stage.num}
                onClick={() => scrollToStage(stage.num)}
                className={`w-full flex items-start gap-2.5 py-2 pl-3 pr-2 rounded-lg text-left transition-all duration-150 cursor-pointer relative group mb-0.5 ${
                  isActive ? "bg-amber-50" : "hover:bg-slate-50"
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r-full transition-opacity duration-150 bg-amber-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  className={`shrink-0 text-[10px] font-bold font-mono mt-[3px] w-5 transition-colors ${
                    isActive
                      ? "text-amber-500"
                      : "text-slate-300 group-hover:text-slate-400"
                  }`}
                >
                  {stage.num}
                </span>
                <span
                  className={`text-[13px] leading-snug transition-colors ${
                    isActive
                      ? "text-slate-900 font-semibold"
                      : "text-slate-400 font-medium group-hover:text-slate-600"
                  }`}
                >
                  {stage.title}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div>
        <div className="space-y-0">
          {STAGES.map((stage) => (
            <div
              key={stage.num}
              id={`stage-${stage.num}`}
              className="pb-10 mb-2 border-b border-slate-100 last:border-0 last:mb-0"
            >
              <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-3 block">
                Stage {stage.num}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-3 leading-snug">
                {stage.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[16px] max-w-[65ch]">
                {stage.body}
              </p>
            </div>
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-10">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Handover
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Why we stage the handover.
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              At completion, there is only so much information you can absorb at once. We split handover into three sessions so you learn what you need when you need it, and nothing gets lost.
            </p>
            <ul className="space-y-4">
              {HANDOVER_SESSIONS.map((session) => (
                <li key={session.label} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 text-[15px]">
                      {session.label}:{" "}
                    </span>
                    <span className="text-slate-600 text-[15px]">{session.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

    </div>
  );
}

export default function OurProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-amber-500/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-3xl leading-tight">
              A project run properly, from the first call to the final handover.
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Every Smarter Electrical project follows the same structured process. No surprises. No scope creep. Just a clearly communicated job, done right.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Ten stages. Every project.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              This is how every project runs. The same structure gives architects, builders, and clients a clear picture of what to expect at every point.
            </p>
          </FadeIn>

          <ProcessContent />
        </div>
      </section>

      <section className="bg-[#111111] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/5 border border-white/15 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-6">
                Standalone Service
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                Not building yet? We offer planning and consultation as a standalone service.
              </h2>
              <p className="text-slate-400 text-[16px] leading-relaxed mb-10">
                For architects, interior designers, and builders. A documented scope and budget before works begin means no surprises for anyone.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-slate-900 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-[15px] min-h-[44px] cursor-pointer"
              >
                Book a Consultation
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-200 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5">
              Ready to start the conversation?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Most projects begin with a single call. Tell us what you are thinking and we will take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-[15px] min-h-[52px] cursor-pointer"
              >
                Book a Free Consultation
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#1c1c1c] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 active:translate-y-0 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-[15px] min-h-[52px] cursor-pointer"
              >
                <Phone size={17} />
                {BUSINESS.phonePretty}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
