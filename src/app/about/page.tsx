"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Shield,
  ClipboardList,
  MessageSquare,
} from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { BUSINESS } from "@/lib/constants";

const WHY_US = [
  {
    icon: Shield,
    text: "Your home is treated with the same respect we'd want for our own. Occupants, belongings, and yes, the furry ones too.",
  },
  {
    icon: Target,
    text: "We diagnose before we prescribe. Understanding the real problem first means you're not paying for parts you don't need.",
  },
  {
    icon: Users,
    text: "The right person for every job. Each team member carries specialist skills matched to your specific task.",
  },
  {
    icon: CheckCircle,
    text: "We leave every site exactly as we found it. Clean work is part of the job, not an afterthought.",
  },
  {
    icon: ClipboardList,
    text: "No hidden costs. No surprises. A clearly documented scope means you know exactly what you're getting before you commit.",
  },
  {
    icon: MessageSquare,
    text: "If something changes, you'll hear it from us first. We keep you informed at every step.",
  },
];

const STATS = [
  { value: `${BUSINESS.ownerExperience}+`, label: "Years experience" },
  { value: "40+", label: "Combined senior tech years" },
  { value: `${BUSINESS.googleRating}★`, label: "Google rating" },
  { value: "100%", label: "Clean-site guarantee" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                From the switchboard to the smart home,{" "}
                <br className="hidden sm:block" />we do it all.
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Whether it&apos;s general electrical needs or specialised
                technology, {BUSINESS.name} can provide you a solution. No
                hidden costs. No surprises at the end.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Founder Story ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeIn variant="slideLeft">
              <div>
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                  {BUSINESS.ownerExperience} years of experience behind every
                  job
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-[17px]">
                  <p>
                    With over {BUSINESS.ownerExperience} years electrical
                    experience, {BUSINESS.owner} and his team will guide you
                    through the options available and provide you the information
                    and communication to make a well informed decision to solve
                    your problem.
                  </p>
                  <p>
                    Having completed everything from new homes and alterations,
                    industrial fitouts and repairs, data network installations
                    and specialist home automation and technology installations,
                    we can most likely assist you to get your job done on time
                    and within budget.
                  </p>
                  <p className="font-medium text-slate-800">
                    Integrity, Trust, and commitment to a job of the highest
                    standard. We will provide you a service you will want to
                    recommend to your peers.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn variant="slideRight">
              <div className="grid grid-cols-2 gap-5">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-slate-900 mb-1">
                      {s.value}
                    </p>
                    <p className="text-sm text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Industry ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeIn variant="slideLeft">
              <div>
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  Industry
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                  Not all smart home integrators are the same
                </h2>
                <p className="text-slate-600 leading-relaxed text-[17px]">
                  If you are familiar with brands like Savant, Control4, Fibaro
                  or Cbus, you may already know that the integrator behind the
                  technology makes all the difference. {BUSINESS.name} is one of{" "}
                  {BUSINESS.city}&apos;s most advanced Electrical and Smart home
                  providers and designers.
                </p>
              </div>
            </FadeIn>

            <FadeIn variant="slideRight">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
                  Certified Integrators
                </p>
                <Image
                  src="/brands/smarthome-brands.jpg"
                  alt="C-Bus Approved Installer, Savant, Control4, Fibaro"
                  width={900}
                  height={120}
                  className="w-full h-auto object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Why We Create Smart Homes ─────────────────── */}
      <section className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-5">
              Why we do this
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
              Technology should make life better,{" "}
              <br />
              not harder
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
              Our team of qualified technicians get excited by great results.
              Ever-changing technology drives us to know more, do more, and be
              more when providing value to our clients. The stigma of technology
              being hard to use drives our passion to prove this wrong.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
                <div className="text-5xl text-amber-500/50 font-serif leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-white text-xl font-semibold leading-snug mb-3">
                  We diagnose before we prescribe.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Understanding the real problem first means you get the right
                  solution, not the most expensive one.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
                <div className="text-5xl text-amber-500/50 font-serif leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-white text-xl font-semibold leading-snug mb-3">
                  Respect for your home comes first.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your home is treated with the same care we would want for our
                  own. That standard does not change from job to job.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Us Above All Others ───────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What sets us apart
            </h2>
          </FadeIn>

          <StaggerChildren
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.07}
          >
            {WHY_US.map((item) => (
              <StaggerItem key={item.text}>
                <div className="group bg-white rounded-xl p-7 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 h-full flex flex-col">
                  <div className="w-11 h-11 bg-slate-100 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <item.icon size={22} className="text-slate-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Closing + Tagline + CTA ───────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>

            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Our promise to you
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              A professional, value-for-money solution
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Through great planning, communication and execution, we bring to{" "}
                {BUSINESS.city} smart home and technology offers that rival the
                best in the world. We work with existing systems that may be
                redundant or not working. The latest offerings from the four
                largest smarthome manufacturers give us the flexibility to create
                the perfect home automation system for you.
              </p>
              <p>
                {BUSINESS.name} will provide a neat, quality,
                well-communicated, on-time and in-scope project that will blow
                your mind.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-navy-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer"
              >
                Book a Consultation
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#1c1c1c] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 active:translate-y-0 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <Phone size={18} />
                {BUSINESS.phonePretty}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
