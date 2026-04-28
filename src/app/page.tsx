"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Shield,
  Zap,
  Wifi,
  Music,
  Tv,
  Cpu,
  Lock,
  MessageSquare,
  CheckCircle,
  Star,
  MapPin,
  ClipboardList,
  Wrench,
} from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { BUSINESS } from "@/lib/constants";


/* ─── HERO ──────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111111]">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Green glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Green glow top-right */}
      <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-0 md:pt-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 pb-16 md:pb-24">
          {/* Left: copy */}
          <div className="lg:w-1/2">
            {/* Google review badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-3 bg-white/8 border border-white/12 rounded-full px-5 py-2.5 mb-7"
            >
              {/* Google "G" */}
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < 4 ? "text-amber-400 fill-amber-400" : "text-amber-400 fill-amber-400 opacity-70"}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">4.7</span>
                <span className="text-sm text-slate-400">on Google</span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-5xl md:text-6xl lg:text-5xl xl:text-[4.25rem] font-bold text-white leading-[1.07] tracking-tight mb-6"
            >
              Everything Your Property Needs.{" "}
              <span className="text-amber-400">One Team.</span>{" "}
              Done&nbsp;Right.
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-lg text-slate-400 leading-relaxed mb-10"
            >
              Whether you need an electrician, a smart home, better security, or
              all of the above, we&apos;re the one team that handles everything.
              Proudly serving Melbourne&apos;s east for over 25 years.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-[15px] min-h-[52px] cursor-pointer"
              >
                Book a Free Consultation
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/[0.12] border border-white/15 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/8 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 text-[15px] min-h-[52px] cursor-pointer"
              >
                See Our Services ↓
              </Link>
            </motion.div>
          </div>

          {/* Right: YouTube video */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="lg:w-1/2"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/gVPaVuOa1mc?rel=0"
                title="Smarter Electrical Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/8 bg-white/4">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-x-6 gap-y-4"
          >
            {[
              { icon: Star, text: "25+ Years Experience" },
              { icon: MapPin, text: "Melbourne's Eastern Suburbs" },
              { icon: Shield, text: "Licensed & Fully Insured" },
              { icon: CheckCircle, text: "On Time, On Budget" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <item.icon size={18} className="text-amber-400 shrink-0" />
                <span className="font-medium leading-tight">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES GRID ─────────────────────────────────── */
function ServicesGrid() {
  const services = [
    {
      icon: Zap,
      name: "Electrical Installation",
      desc: "Keep your home safe, compliant, and future-ready. New builds, renovations, switchboard upgrades, EV chargers, and more.",
      href: "/services?tab=electrical",
    },
    {
      icon: Cpu,
      name: "Home Automation",
      desc: "Your home, working for you. Lighting, climate, access, and entertainment, all automated and controlled from one place.",
      href: "/services?tab=automation",
    },
    {
      icon: Lock,
      name: "Security & Access",
      desc: "Know who's at your door before you open it. Intercoms, electric locks, keypads, and professional CCTV systems.",
      href: "/services?tab=security",
    },
    {
      icon: Wifi,
      name: "Wi-Fi & Networking",
      desc: "Every smart device depends on a solid network. We design and install infrastructure that won't let you down.",
      href: "/services?tab=networking",
    },
    {
      icon: Music,
      name: "Multi-Room Audio",
      desc: "Music in every room, effortlessly. In-ceiling speakers, whole-home audio, and voice control, for any size home.",
      href: "/services?tab=audio",
    },
    {
      icon: Tv,
      name: "Home Theatre",
      desc: "Cinema quality in your own home. From a cosy family media room to a full Dolby Atmos theatre, for every budget.",
      href: "/services?tab=theatre",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            What We Can Do For You
          </h2>
        </FadeIn>
        <FadeIn delay={0.08} className="text-center mb-14">
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Electrical foundations to full smart home automation, all from one
            team.
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.07}
        >
          {services.map((svc) => (
            <StaggerItem key={svc.name}>
              <Link href={svc.href} className="group block h-full cursor-pointer">
                <div className="bg-white rounded-xl p-7 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 h-full flex flex-col">
                  <div className="w-11 h-11 bg-slate-100 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <svc.icon
                      size={22}
                      className="text-slate-600 group-hover:text-amber-600 transition-colors"
                    />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-[15px]">
                    {svc.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  <div className="mt-4 flex items-center text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={15} className="ml-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.28} className="text-center mt-12">
          <p className="text-slate-500 mb-5 text-[15px]">
            Not sure where to start? We'll help you figure it out.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-slate-900 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-[15px] min-h-[44px] cursor-pointer"
          >
            Book a Free Consultation
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── THE SMARTER DIFFERENCE ────────────────────────── */
function SmarterDifference() {
  const benefits = [
    {
      title: "No scheduling clashes",
      body: "One team on site. No conflicting trades, no delays waiting on someone else.",
    },
    {
      title: "Built as one system",
      body: "Cables, networks, and devices planned together from day one.",
    },
    {
      title: "One call, sorted",
      body: "Something needs attention? Call us. We know every part of your install.",
    },
    {
      title: "No double-ups",
      body: "One visit covers what three separate trades would each charge you for.",
    },
  ];



  return (
    <section className="py-16 md:py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column: copy left, benefits grid right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
          {/* Left: heading + copy */}
          <FadeIn className="lg:w-5/12 lg:pt-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
              One Team.{" "}
              <span className="text-amber-400">Zero Headaches.</span>
            </h2>
            <p className="text-slate-400 text-[16px] leading-relaxed">
              Most homeowners end up with a sparky, an AV guy, and someone for
              the network. Three separate schedules. Nobody talking to each other.
              We design and install all of it as one team, so everything actually works.
            </p>
          </FadeIn>

          {/* Right: 2×2 benefit cards */}
          <StaggerChildren
            className="lg:w-7/12 grid sm:grid-cols-2 gap-4 items-stretch"
            staggerDelay={0.09}
          >
            {benefits.map((b) => (
              <StaggerItem key={b.title} className="h-full">
                <div className="h-full bg-white/5 border border-white/10 rounded-xl p-5">
                  <CheckCircle
                    size={20}
                    className="text-amber-400 mb-3"
                  />
                  <p className="font-semibold text-white text-[15px] mb-1">
                    {b.title}
                  </p>
                  <p className="text-slate-400 text-[14px] leading-relaxed">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ──────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "1",
      icon: MessageSquare,
      title: "Consult",
      body: "We start with a free conversation. You tell us what you need (or what you're not sure about), and we listen. No pressure, no sales pitch.",
    },
    {
      num: "2",
      icon: ClipboardList,
      title: "Design & Quote",
      body: "We design your solution and give you a clear fixed-price quote. You know exactly what's happening and what it costs before we touch anything.",
    },
    {
      num: "3",
      icon: Wrench,
      title: "Install & Hand Over",
      body: "Our team does the work to the agreed scope, on time. We test everything, walk you through it, and hand you a system that actually works.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Simple From Start to Finish
          </h2>
        </FadeIn>

        <StaggerChildren
          className="grid md:grid-cols-3 gap-8 lg:gap-14"
          staggerDelay={0.13}
        >
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className="relative text-center">
                {/* Connector */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-7 left-[62%] w-[76%] h-px bg-amber-300" />
                )}
                <div className="relative inline-flex items-center justify-center w-14 h-14 bg-[#111111] rounded-xl mb-6 mx-auto">
                  <step.icon size={24} className="text-amber-400" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full text-xs font-bold text-slate-900 flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4} className="text-center mt-10">
          <Link
            href="/our-process"
            className="text-slate-500 hover:text-amber-600 text-sm font-medium transition-colors underline underline-offset-4 decoration-slate-300 hover:decoration-amber-400"
          >
            Want the full detail? See exactly how we run a project.
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ──────────────────────────────────── */
type Review = { text: string; name: string; suburb: string; service: string };

function ReviewCard({ review }: { review: Review }) {
  const long = review.text.length > 220;

  return (
    <div className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col h-full">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} size={15} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <div className="flex-1 mb-5">
        <div
          className={`pr-2 ${long ? "h-36 overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full" : ""}`}
        >
          <p className="text-slate-600 leading-relaxed text-[15px]">
            &ldquo;{review.text}&rdquo;
          </p>
        </div>
      </div>
      <div className="pt-5 border-t border-slate-100">
        <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
        <p className="text-slate-400 text-xs mt-0.5">{review.suburb} &middot; {review.service}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const reviews: Review[] = [
    {
      text: "Prompt, efficient and very professional. Highly recommend Sean and the team for any electrical jobs. I'm so pleased with our new lights and have already had so many compliments on the upgrade! Thank you for the extra tip on the best globes as it has made such a difference. Quality service at a very reasonable price. We will absolutely be contacting you again.",
      name: "Sarah M.",
      suburb: "Blackburn",
      service: "Lighting Installation",
    },
    {
      text: "Smarter Electrical helped us with installation of pendant lights, modifications to existing switches and also installation of a ceiling fan. An extremely professional experience from the initial quote from Sean to completion of the jobs by Andrew. They clearly explained the steps that would be required and performed the tasks with the minimum of mess; leaving us with two much improved rooms. We required an additional dimmer switch to be added and they were very accommodating with this. Overall, highly recommended.",
      name: "David & Karen R.",
      suburb: "Box Hill",
      service: "Electrical Installation",
    },
    {
      text: "Got a switchboard upgrade done by Sean and Andrew, both very professional and friendly. The work looks neat and they left the place tidy. Good communication and turned up on time. Would happily use these guys again for future work!",
      name: "James L.",
      suburb: "Mitcham",
      service: "Switchboard Upgrade",
    },
    {
      text: "Prompt, on time service and excellent communication from Sean, great to deal with as they understood what I was after and described what they were going to do in a manner that I could easily understand. Highly recommended.",
      name: "Tom B.",
      suburb: "Doncaster",
      service: "Electrical",
    },
    {
      text: "Sean and his team have been excellent. Couldn't recommend them highly enough. Sean listened to us and took my ideas about what I would like and made it reality. Their service is outstanding and responsive. Technology doesn't come easy to us but this system is simple and intuitive — we now feel we are in the 21st Century.",
      name: "Lisa & Mark P.",
      suburb: "Balwyn",
      service: "Home Automation",
    },
    {
      text: "We engaged Sean from Smarterelec to change our outdated lighting to modern downlights. You only needed to speak to Sean for a moment to be at ease as you'll know in an instant that you're in good hands. Sean showed incredible passion, professionalism and integrity when listening and capturing our needs. He made invaluable recommendations and kept us engaged and informed at every step of the process. We are very happy with the job Sean and his team has done for us and we will be going back to Sean for all of our future electrical needs. I highly recommend Sean and his team.",
      name: "Christine F.",
      suburb: "Camberwell",
      service: "Lighting Upgrade",
    },
    {
      text: "Excellent service!! Over the years I have engaged a lot of trades, including electricians and associated services. From all the trades I have encountered in the past, I can say confidently that Sean and his team have been one of the most professional, competent and friendly teams. Outstanding! Thank you, Sean.",
      name: "Robert M.",
      suburb: "Surrey Hills",
      service: "Electrical",
    },
    {
      text: "Sean from Smarter Electrical did my house automation a couple of years ago. He has a great eye for smart solutions and has been there with follow up if/when any issues needed to be sorted out. Great to see an outfit that does their work really well.",
      name: "Paul H.",
      suburb: "Ringwood",
      service: "Home Automation",
    },
  ];

  const total = reviews.length;
  const DURATION = 380;
  const GAP = 24; // gap-6 = 24 px

  const [idx, setIdx] = useState(0);
  // "rest" | "prev" | "next" drives all translateX values
  const [phase, setPhase] = useState<"rest" | "prev" | "next">("rest");
  const [busy, setBusy] = useState(false);
  const [cardW, setCardW] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure the overflow container so we know exact card width + slide amount.
  useEffect(() => {
    const measure = () => {
      if (trackRef.current)
        setCardW((trackRef.current.offsetWidth - GAP * 2) / 3);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const slideAmt = cardW + GAP;

  const navigate = (dir: "prev" | "next") => {
    if (busy || !cardW) return;
    setBusy(true);
    const newIdx = dir === "next" ? (idx + 1) % total : (idx - 1 + total) % total;
    setPhase(dir);
    setTimeout(() => {
      // Snap back to rest with new idx — no transition fires because phase→"rest"
      setPhase("rest");
      setIdx(newIdx);
      setBusy(false);
    }, DURATION);
  };

  const goTo = (i: number) => {
    if (busy || i === idx) return;
    setIdx(i);
  };

  // ── Desktop track ────────────────────────────────────────────────────────
  // 5 cards in flex row: [idx-1, idx, idx+1, idx+2, idx+3]
  //   rest  → translateX(-slideAmt)   → shows cards 1-3 (idx … idx+2)
  //   next  → translateX(-2·slideAmt) → shows cards 2-4 (idx+1 … idx+3)
  //   prev  → translateX(0)           → shows cards 0-2 (idx-1 … idx+1)
  const deskX =
    phase === "next" ? -(slideAmt * 2) : phase === "prev" ? 0 : -slideAmt;

  const deskTrackStyle = {
    display: "flex" as const,
    gap: `${GAP}px`,
    transform: `translateX(${deskX}px)`,
    transition:
      phase !== "rest"
        ? `transform ${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
        : "none",
  };
  const cardStyle = cardW > 0 ? { flexShrink: 0 as const, width: `${cardW}px` } : {};
  const deskCards = [-1, 0, 1, 2, 3].map((o) => reviews[(idx + o + total) % total]);

  // ── Mobile track ─────────────────────────────────────────────────────────
  // 3 full-width panels: [idx-1, idx, idx+1]
  // translateX is % of the 300%-wide track, so 33.333% = one panel = 100% of container
  const PANEL = 100 / 3;
  const mobX = phase === "next" ? -PANEL * 2 : phase === "prev" ? 0 : -PANEL;

  const mobTrackStyle = {
    display: "flex" as const,
    width: "300%",
    transform: `translateX(${mobX}%)`,
    transition:
      phase !== "rest"
        ? `transform ${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
        : "none",
  };

  const arrowCls =
    "flex-shrink-0 w-11 h-11 rounded-full border border-slate-200 bg-white " +
    "hover:border-amber-500 hover:text-amber-500 text-slate-500 " +
    "flex items-center justify-center transition-colors duration-200 cursor-pointer " +
    "disabled:opacity-40 disabled:cursor-not-allowed";

  const dotCls = (active: boolean) =>
    `w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer ${
      active ? "bg-amber-500" : "bg-slate-300 hover:bg-slate-400"
    }`;

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </FadeIn>

        {/* ── Desktop: 3 visible, 1 new card slides in per click ── */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => navigate("prev")} aria-label="Previous review" disabled={busy} className={arrowCls}>
            <ChevronLeft size={20} />
          </button>

          <div ref={trackRef} className="flex-1 overflow-hidden">
            <div style={deskTrackStyle}>
              {deskCards.map((review, i) => (
                <div key={i} style={cardStyle}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => navigate("next")} aria-label="Next review" disabled={busy} className={arrowCls}>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="hidden md:flex justify-center gap-2 mt-8" aria-label="Review navigation">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to review ${i + 1}`} className={dotCls(i === idx)} />
          ))}
        </div>

        {/* ── Mobile: 1 visible, slide 1 card per click ── */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div style={mobTrackStyle}>
              {[-1, 0, 1].map((o) => (
                <div key={o} style={{ width: "33.333%", flexShrink: 0 }}>
                  <ReviewCard review={reviews[(idx + o + total) % total]} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => navigate("prev")} aria-label="Previous review" disabled={busy} className={arrowCls}>
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2" aria-label="Review navigation">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Go to review ${i + 1}`} className={dotCls(i === idx)} />
              ))}
            </div>
            <button onClick={() => navigate("next")} aria-label="Next review" disabled={busy} className={arrowCls}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY PREVIEW ───────────────────────────────── */
function GalleryPreview() {
  const projects = [
    {
      label: "Home Automation",
      caption: "Smart automated lounge room with full scene control",
      src: "/images/Smart-automated-louneroom1.jpg",
      href: "/gallery",
    },
    {
      label: "Home Theatre",
      caption: "Dedicated home theatre with Dolby Atmos",
      src: "/images/Hoem-Theatre-screen1.jpg",
      href: "/gallery",
    },
    {
      label: "Security & Access",
      caption: "CCTV, intercoms, keypads and electric gate control",
      src: "/images/Smart-key-for-home1.jpg",
      href: "/gallery",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Recent Projects
          </h2>
        </FadeIn>
        <FadeIn delay={0.08} className="text-center mb-12">
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            The proof is in the work. Here&apos;s a look at what we&apos;ve been
            building across Melbourne.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.label}>
              <Link
                href={project.href}
                className="group block rounded-xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-colors duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 bg-amber-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight size={14} />
                  </div>
                </div>
                <div className="px-5 py-4 bg-white">
                  <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-1">
                    {project.label}
                  </p>
                  <p className="text-slate-700 text-sm font-medium group-hover:text-amber-600 transition-colors duration-200">
                    {project.caption}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.28} className="text-center mt-12">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 bg-[#111111] hover:bg-[#1c1c1c] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 active:translate-y-0 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-[15px] min-h-[44px] cursor-pointer"
          >
            View All Projects <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "Do you handle small jobs, or only large projects?",
      a: "Both. Whether it's a single circuit, a switchboard safety check, or a complete smart home build, we apply the same standard to everything. No job is too small.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. We are fully licensed electricians operating to Australian Standards and all relevant Victorian regulations. Fully insured. We're happy to provide documentation on request.",
    },
    {
      q: "How much does home automation cost?",
      a: "It varies depending on what's included. Entry-level systems start from a few thousand dollars. Full whole-home automation can range into the tens of thousands. We'll always give you an honest breakdown upfront and help you prioritise if you have a budget ceiling.",
    },
    {
      q: "Do you service all of Melbourne?",
      a: "Our primary service area is Melbourne's eastern suburbs. For the right project, we do work across greater Melbourne. Get in touch and we'll let you know if we can help.",
    },
    {
      q: "Can you work alongside my builder or architect?",
      a: "Yes, and we recommend it. Getting us involved early means electrical and technology is designed into your project from the start, not retrofitted later. We coordinate directly with your build team.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Common Questions
          </h2>
        </FadeIn>

        <div className="space-y-2">
          {questions.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                className={`bg-white rounded-xl border transition-colors duration-200 overflow-hidden ${
                  openIndex === i ? "border-amber-400/60" : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer min-h-[60px] group"
                  aria-expanded={openIndex === i}
                >
                  <span className={`font-semibold text-[15px] leading-snug transition-colors duration-200 ${openIndex === i ? "text-amber-500" : "text-slate-900 group-hover:text-slate-700"}`}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown size={18} className={`transition-colors duration-200 ${openIndex === i ? "text-amber-400" : "text-slate-400"}`} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-slate-600 leading-relaxed text-[15px]">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ──────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-[#111111] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="bg-white/5 border border-white/15 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 max-w-xl mx-auto">
              Start With a Conversation
            </h2>
            <p className="text-slate-400 text-[16px] leading-relaxed mb-8 max-w-lg mx-auto">
              Whether you know exactly what you want or you&apos;re just beginning
              to explore the possibilities, we&apos;d love to hear from you.
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
                className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/[0.15] border border-white/15 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/8 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-[15px] min-h-[52px] cursor-pointer"
              >
                <Phone size={17} />
                {BUSINESS.phonePretty}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── STICKY MOBILE CTA ──────────────────────────────── */
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-slate-200 bg-white shadow-lg px-4 py-3">
        <div className="flex gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#1c1c1c] hover:shadow-md hover:shadow-black/25 text-white font-semibold py-3 rounded-lg transition-all duration-200 text-sm min-h-[44px] cursor-pointer"
            aria-label={`Call ${BUSINESS.phonePretty}`}
          >
            <Phone size={16} />
            Call Us
          </a>
          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 hover:shadow-md hover:shadow-amber-500/35 text-slate-900 font-semibold py-3 rounded-lg transition-all duration-200 text-sm min-h-[44px] cursor-pointer"
          >
            Book Free Consult
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <SmarterDifference />
      <HowItWorks />
      <Testimonials />
      <GalleryPreview />
      <FAQ />
      <FinalCTA />
      <StickyMobileCTA />
    </>
  );
}
