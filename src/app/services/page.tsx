"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Zap,
  Cpu,
  Shield,
  Music2,
  Wifi,
  Tv2,
  ImageIcon,
  Video,
  KeyRound,
  Camera,
  Lightbulb,
  Thermometer,
  Bell,
  Globe,
  Smartphone,
  Car,
  RotateCcw,
  Play,
  Pause,
} from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { BUSINESS } from "@/lib/constants";

/* ─── TAB DATA ───────────────────────────────────────── */
const tabs = [
  { id: "electrical", label: "Electrical",       icon: Zap    },
  { id: "automation", label: "Home Automation",   icon: Cpu    },
  { id: "security",   label: "Security & Access", icon: Shield },
  { id: "audio",      label: "Multi-Room Audio",  icon: Music2 },
  { id: "networking", label: "Wi-Fi & Networking",icon: Wifi   },
  { id: "theatre",    label: "Home Theatre",      icon: Tv2    },
];

/* ─── SHARED COMPONENTS ──────────────────────────────── */
function PhotoPlaceholder({ label, aspect = "aspect-[4/3]" }: { label: string; aspect?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-slate-200 ${aspect} bg-slate-100 flex flex-col items-center justify-center gap-3`}>
      <ImageIcon size={40} className="text-slate-300" />
      <span className="text-slate-400 text-xs font-medium text-center px-4">
        {label}
      </span>
    </div>
  );
}

function CheckList({ items, small, twoCol }: { items: string[]; small?: boolean; twoCol?: boolean }) {
  return (
    <ul className={twoCol ? "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <CheckCircle2
            size={small ? 14 : 17}
            className="text-amber-500 shrink-0 mt-[3px]"
          />
          <span className={`text-slate-700 leading-snug ${small ? "text-xs" : "text-[15px]"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

const FLOOR_NODES = [
  { cx: 61,  cy: 68,  label: "LIGHTING"  },
  { cx: 209, cy: 68,  label: "AUDIO"     },
  { cx: 78,  cy: 148, label: "AV"        },
  { cx: 145, cy: 155, label: "NETWORK"   },
  { cx: 218, cy: 148, label: "SECURITY"  },
];

function PlanningGraphic() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setKey((k) => k + 1), 7200);
    return () => clearInterval(t);
  }, []);

  const ws   = "rgba(203,213,225,0.50)";
  const ds   = "rgba(148,163,184,0.32)";
  const door = "rgba(148,163,184,0.26)";
  const ease = [0.4, 0, 0.2, 1] as const;

  return (
    <div className="flex items-center justify-center select-none">
      <motion.svg
        key={key}
        viewBox="0 0 300 215"
        className="w-full h-auto scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* ── grid ── */}
        {Array.from({ length: 14 }, (_, i) => (
          <line key={`v${i}`} x1={22 + i * 18} y1={22} x2={22 + i * 18} y2={196}
            stroke="rgba(255,255,255,0.03)" strokeWidth={0.5} />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`h${i}`} x1={22} y1={22 + i * 18} x2={268} y2={22 + i * 18}
            stroke="rgba(255,255,255,0.03)" strokeWidth={0.5} />
        ))}

        {/* ── outer walls ── */}
        <motion.path d="M 22 30 L 268 30 L 268 194 L 22 194 Z"
          fill="none" stroke={ws} strokeWidth={1.5} strokeLinejoin="miter"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.2, duration: 1.8, ease }}
        />

        {/* ── vertical: bed1 | bath ── */}
        <motion.path d="M 100 30 L 100 108"
          fill="none" stroke={ws} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.55, ease }}
        />

        {/* ── vertical: bath | bed2 ── */}
        <motion.path d="M 150 30 L 150 108"
          fill="none" stroke={ws} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.45, duration: 0.55, ease }}
        />

        {/* ── horizontal wall segments (door gaps) ── */}
        <motion.path d="M 22 108 L 52 108"
          fill="none" stroke={ws} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.75, duration: 0.26, ease }}
        />
        <motion.path d="M 72 108 L 100 108"
          fill="none" stroke={ws} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.88, duration: 0.2, ease }}
        />
        <motion.path d="M 100 108 L 168 108"
          fill="none" stroke={ws} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.0, duration: 0.5, ease }}
        />
        <motion.path d="M 188 108 L 268 108"
          fill="none" stroke={ws} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.25, duration: 0.55, ease }}
        />

        {/* ── door arcs ── */}
        <motion.path d="M 52 108 L 52 88"
          fill="none" stroke={door} strokeWidth={0.8}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.9, duration: 0.18 }}
        />
        <motion.path d="M 52 108 A 20 20 0 0 1 72 88"
          fill="none" stroke={door} strokeWidth={0.8} strokeDasharray="2 2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.94, duration: 0.28 }}
        />
        <motion.path d="M 168 108 L 168 88"
          fill="none" stroke={door} strokeWidth={0.8}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.12, duration: 0.18 }}
        />
        <motion.path d="M 168 108 A 20 20 0 0 1 188 88"
          fill="none" stroke={door} strokeWidth={0.8} strokeDasharray="2 2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.16, duration: 0.28 }}
        />

        {/* ── dimension line — top ── */}
        <motion.path d="M 22 20 L 268 20"
          fill="none" stroke={ds} strokeWidth={0.7}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.55, duration: 0.5, ease }}
        />
        <motion.path d="M 22 16 L 22 24" fill="none" stroke={ds} strokeWidth={0.7}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.78 }} />
        <motion.path d="M 268 16 L 268 24" fill="none" stroke={ds} strokeWidth={0.7}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.78 }} />
        <motion.text x={145} y={17} textAnchor="middle" fontSize={5.5}
          fill="rgba(148,163,184,0.40)" fontFamily="ui-monospace,monospace" letterSpacing="0.05em"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.88 }}
        >14.6M</motion.text>

        {/* ── dimension line — right ── */}
        <motion.path d="M 277 30 L 277 194"
          fill="none" stroke={ds} strokeWidth={0.7}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 2.55, duration: 0.42, ease }}
        />
        <motion.path d="M 273 30 L 281 30" fill="none" stroke={ds} strokeWidth={0.7}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.78 }} />
        <motion.path d="M 273 194 L 281 194" fill="none" stroke={ds} strokeWidth={0.7}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.78 }} />


        {/* ── room labels ── */}
        {[
          { x: 61,  y: 85,  t: "BEDROOM 1"      },
          { x: 125, y: 72,  t: "BATH"            },
          { x: 209, y: 85,  t: "BEDROOM 2"       },
          { x: 145, y: 180, t: "LIVING & DINING" },
        ].map(({ x, y, t }) => (
          <motion.text key={t} x={x} y={y} textAnchor="middle"
            fontSize={5} fill="rgba(148,163,184,0.38)"
            fontFamily="ui-monospace,monospace" letterSpacing="0.1em"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 2.75, duration: 0.4 }}
          >{t}</motion.text>
        ))}

        {/* ── title block ── */}
        <motion.text x={22} y={208} fontSize={4.8}
          fill="rgba(245,158,11,0.38)" fontFamily="ui-monospace,monospace"
          letterSpacing="0.12em" fontWeight="bold"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.05, duration: 0.4 }}
        >GROUND FLOOR — SMART HOME SCOPE</motion.text>

        {/* ── automation nodes ── */}
        {FLOOR_NODES.map((n, i) => (
          <g key={i}>
            <motion.circle cx={n.cx} cy={n.cy} r={5.5}
              fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth={0.8}
              style={{ transformBox: "fill-box" as any, transformOrigin: "center" }}
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 3.2 + i * 0.13, type: "spring", stiffness: 360, damping: 18 }}
            />
            <motion.circle cx={n.cx} cy={n.cy} r={2.5}
              fill="rgb(245,158,11)"
              style={{ transformBox: "fill-box" as any, transformOrigin: "center" }}
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 3.2 + i * 0.13, type: "spring", stiffness: 360, damping: 18 }}
            />
            <motion.circle cx={n.cx} cy={n.cy} r={5.5}
              fill="none" stroke="rgb(245,158,11)" strokeWidth={0.8}
              style={{ transformBox: "fill-box" as any, transformOrigin: "center" }}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 4.5, opacity: 0 }}
              transition={{ delay: 3.4 + i * 0.13, duration: 0.9, ease: "easeOut" }}
            />
            <motion.circle cx={n.cx} cy={n.cy} r={5.5}
              fill="none" stroke="rgb(245,158,11)" strokeWidth={0.8}
              style={{ transformBox: "fill-box" as any, transformOrigin: "center" }}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 4.5, opacity: 0 }}
              transition={{ delay: 5.2 + i * 0.13, duration: 0.9, ease: "easeOut" }}
            />
            <motion.text x={n.cx} y={n.cy - 9} textAnchor="middle"
              fontSize={4.5} fill="rgba(245,158,11,0.7)"
              fontFamily="ui-monospace,monospace" letterSpacing="0.1em"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 3.38 + i * 0.13, duration: 0.3 }}
            >{n.label}</motion.text>
          </g>
        ))}
      </motion.svg>
    </div>
  );
}

function ServiceCTA({ text }: { text: string }) {
  return (
    <Link
      href="/contact"
      className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-[15px] min-h-[44px] cursor-pointer"
    >
      {text}
      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

function SectionIdentity({
  counter,
  headline,
  subHeadline,
}: {
  counter: string;
  headline: string;
  subHeadline: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
        {headline}
      </h2>
    </div>
  );
}

/* ─── SERVICE PANELS ─────────────────────────────────── */
function ElectricalPanel() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-10">
        <div>
          <SectionIdentity
            counter="01 · Electrical"
            headline="Electrical Installation"
            subHeadline="On time, in full, within budget. Every time."
          />
          <div className="space-y-4 text-slate-600 leading-relaxed mb-7">
            <p>
              Our senior techs bring over 40 years of combined experience to
              every build and renovation in Melbourne. Many companies will smash
              cables in. We will not. Respect for your home comes first.
            </p>
            <p>
              Through strong communication, scheduling and execution, we deliver
              on time, in full, within budget. Every time.
            </p>
            <p>
              Bringing electrical and technology under one company is more
              efficient and saves you money.
            </p>
          </div>

          <ServiceCTA text="Get an Electrical Quote" />
        </div>

        <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
          <Image
            src="/images/Modern-smart-home-automation1 (1).jpg"
            alt="Modern smart home electrical installation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
          What we install and service
        </h3>
        <CheckList
          twoCol
          items={[
            "Electrical fit outs for commercial and domestic installations",
            "Electrical alterations in existing buildings",
            "Repairs and upgrades to existing systems and appliances",
            "Main switchboard upgrades and alterations",
            "Energy and power monitoring and reporting for power reductions strategy",
            "Lighting design and architectural supply",
            "On site consultation for pre-builds electrical and Smart home requirements",
            "Roller Blind power installation and supply",
            "EV charger installation",
            "...and so much more",
          ]}
        />
      </div>
    </div>
  );
}

/* ─── ARRIVAL SEQUENCE ───────────────────────────────── */
const ARRIVAL_STEPS = [
  {
    icon: Smartphone,
    label: "Arrival detected",
    headline: "Arrival detected",
    body: "Your phone registers on home Wi-Fi. All other phones are still away. The system knows you're the first one home.",
  },
  {
    icon: Car,
    label: "Garage opens",
    headline: "Garage opens",
    body: "Your garage door opens automatically as you pull into the driveway. No remote, no button pressed.",
  },
  {
    icon: Lightbulb,
    label: "Lights on at 50%",
    headline: "Lights on at 50%",
    body: "The hallway, kitchen, and family room lights come on at 50%. Soft enough to feel welcome, bright enough to move around.",
  },
  {
    icon: Thermometer,
    label: "Heater kicks in",
    headline: "Heater kicks in",
    body: "Under 20°? The heater turns on automatically so the house is already warm by the time you step inside.",
  },
  {
    icon: Tv2,
    label: "TV to the news",
    headline: "TV to the news",
    body: "Just before 6pm, the TV switches to the news and mutes the volume while you settle in.",
  },
  {
    icon: Music2,
    label: "Playlist starts",
    headline: "Playlist starts",
    body: "Your favourite playlist begins in the background at the right volume. The right ambience, without lifting a finger.",
  },
];

const STEP_DURATION = 5500;

function ArrivalSequence() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  const startCycle = useCallback((fromStep: number) => {
    clearTimers();
    setProgress(0);
    if (prefersReduced.current) return;

    const TICK = 40;
    let elapsed = 0;
    progressRef.current = setInterval(() => {
      elapsed += TICK;
      setProgress(Math.min((elapsed / STEP_DURATION) * 100, 100));
    }, TICK);

    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % ARRIVAL_STEPS.length;
        elapsed = 0;
        setProgress(0);
        if (next === 0) {
          clearTimers();
          setRunning(false);
        }
        return next;
      });
    }, STEP_DURATION);
  }, [clearTimers]);

  useEffect(() => {
    if (running) startCycle(active);
    return clearTimers;
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleStepClick = (i: number) => {
    clearTimers();
    setRunning(false);
    setProgress(0);
    setActive(i);
  };

  const handleReplay = () => {
    setActive(0);
    setProgress(0);
    setRunning(true);
  };

  const handlePausePlay = () => {
    setRunning((prev) => !prev);
  };

  const step = ARRIVAL_STEPS[active];
  const StepIcon = step.icon;

  return (
    <div className="mb-16">
      {/* Card — heading lives inside as the dark header */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">

        {/* Card header */}
        <div className="bg-[#111111] px-8 py-7">
          <p className="text-[11px] font-bold text-amber-500 uppercase tracking-[0.15em] mb-2">
            A Typical Evening
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug tracking-tight">
            What happens the moment you pull into your driveway
          </h3>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] bg-slate-200 relative">
          <div
            className="absolute left-0 top-0 h-full bg-amber-500 transition-none"
            style={{
              width: running
                ? `${((active / ARRIVAL_STEPS.length) * 100) + (progress / ARRIVAL_STEPS.length)}%`
                : `${((active + 1) / ARRIVAL_STEPS.length) * 100}%`,
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row">
          {/* Sidebar */}
          <div className="sm:w-52 md:w-60 shrink-0 bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200 flex flex-col">
            <ul className="py-3 flex-1">
              {ARRIVAL_STEPS.map((s, i) => {
                const Icon = s.icon;
                const isActive = active === i;
                const isDone = i < active || (!running && i < active);
                return (
                  <li key={s.label}>
                    <button
                      onClick={() => handleStepClick(i)}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 cursor-pointer relative ${
                        isActive
                          ? "bg-white text-slate-900"
                          : isDone
                          ? "text-slate-400 hover:text-slate-600"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-1 bottom-1 w-[3px] rounded-r transition-all duration-200 ${
                          isActive ? "bg-amber-500 opacity-100" : "opacity-0"
                        }`}
                      />
                      <Icon
                        size={14}
                        className={`shrink-0 transition-colors ${
                          isActive ? "text-amber-500" : "text-slate-300"
                        }`}
                      />
                      <span className={`text-[13px] leading-snug ${isActive ? "font-semibold" : "font-medium"}`}>
                        {s.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Controls */}
            <div className="px-5 pb-4 pt-3 border-t border-slate-200 flex items-center gap-3">
              <button
                onClick={handlePausePlay}
                className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                aria-label={running ? "Pause" : "Play"}
              >
                {running ? <Pause size={15} strokeWidth={3} /> : <Play size={15} strokeWidth={3} />}
              </button>
              <button
                onClick={handleReplay}
                className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                aria-label="Replay"
              >
                <RotateCcw size={15} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Right detail panel */}
          <div className="flex-1 bg-white flex flex-col min-h-[360px]">
            <div className="flex-1 p-8 md:p-10 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full"
                >
                  {/* Step number + icon row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center shrink-0">
                      <StepIcon size={30} className="text-amber-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                      Step {active + 1} of {ARRIVAL_STEPS.length}
                    </span>
                  </div>

                  <h4 className="text-[1.65rem] font-bold text-slate-900 mb-4 leading-snug tracking-tight">
                    {step.headline}
                  </h4>
                  <p className="text-slate-500 text-[15px] leading-[1.75] max-w-[38ch]">
                    {step.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer — dots + pull quote */}
            <div className="px-8 md:px-10 py-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                {ARRIVAL_STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      i === active
                        ? "bg-amber-500 w-6 h-[6px]"
                        : i < active
                        ? "bg-amber-300 w-[6px] h-[6px]"
                        : "bg-slate-200 w-[6px] h-[6px] hover:bg-slate-300"
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
              <p className="text-[13px] text-slate-400 italic">
                All of that from just driving into your driveway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationPanel() {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Lights that think",
      body: "Turn off automatically when rooms are empty. No switches, no wasted power.",
    },
    {
      icon: Thermometer,
      title: "Climate on arrival",
      body: "Your home is already at the right temperature before you walk through the door.",
    },
    {
      icon: Tv2,
      title: "Any screen, any room",
      body: "Watch any of your Foxtel boxes from any TV in the house. Have a box dedicated just to you for your own programs to record.",
    },
    {
      icon: Music2,
      title: "Music everywhere",
      body: "The same music throughout the whole home, or a different stream in each room. Your choice.",
    },
    {
      icon: Bell,
      title: "Kids home alert",
      body: "Get a notification the moment your children arrive home from school.",
    },
    {
      icon: KeyRound,
      title: "Guest access codes",
      body: "Different automated door access for guests, tradesmen or your cleaning crew.",
    },
    {
      icon: Globe,
      title: "Control from anywhere",
      body: "Remote control and monitoring of your home from your phone.",
    },
  ];

  return (
    <div>
      {/* ── Section intro ── */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          Your home, working smarter for you
        </h2>
        <p className="text-slate-600 text-[16px] leading-relaxed">
          Home automation is now affordable to most anybody. It is more than
          just turning your lights on from an app. A smart home makes decisions
          for you, so life at home is easier and more enjoyable.
        </p>
      </div>

      {/* ── Arrival sequence ── */}
      <ArrivalSequence />

      {/* ── Capabilities ── */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-8">
          What your home can do
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-amber-300 transition-colors cursor-default"
            >
              <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                <cap.icon size={22} className="text-amber-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-[14px] mb-2">
                {cap.title}
              </h4>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                {cap.body}
              </p>
            </div>
          ))}
        </div>

        {/* Platform trust strip */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Platforms we work with
          </h3>
          <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
            We recommend the right system for your home and budget, and
            explain the difference when we talk.
          </p>
          <Image
            src="/brands/smarthome-brands.jpg"
            alt="C-Bus Approved Installer, Savant, Control4, Fibaro"
            width={900}
            height={120}
            className="w-full max-w-2xl h-auto object-contain"
          />
        </div>

        <ServiceCTA text="Design My Smart Home" />
      </div>
    </div>
  );
}

function SecurityPanel() {
  const subCards = [
    {
      icon: Video,
      title: "Intercoms",
      intro:
        "Flush mounted intercoms give your home a sleek architectural finish and let you see who's at the door before they know you're there.",
      items: [
        "Video and audio conferencing to speak with guests and release the door remotely",
        "Auto-lock feature so you never have to wonder if you locked up",
        "Image and video storage so you know who visited, even when you're away",
        "Full remote access for cleaners, tradespeople, family and friends",
      ],
    },
    {
      icon: KeyRound,
      title: "Electric Locks and Access",
      intro:
        "Electrically operated doors and locks provide a quick, secure way in and out of your home or business.",
      items: [
        "Keypad, pushbutton and fob entry options",
        "Quick and easy exit and entry without fumbling for keys",
        "Full security alarm integration",
      ],
    },
    {
      icon: Camera,
      title: "CCTV and Cameras",
      intro:
        "A well designed security camera system is easy to use, fast, and captures every image you need.",
      items: [
        "Thieves are deterred simply by seeing cameras on site",
        "24 hour recording as well as motion recording so you never miss a beat",
        "6 megapixel cameras as our standard offer",
        "Camera placement designed specific to your site and requirements",
        "Optional second recorder for backup, so your footage stays safe",
      ],
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
        <div>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Intercoms, Electric Locks and Cameras
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Remotely monitor your home with one of our audio video intercoms or
            security cameras. See who is at the door before they know you are
            there, grant access from anywhere, and review footage of every
            visit. Real peace of mind comes from knowing your assets and family
            are safe.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Visible cameras deter thieves before anything happens. Every entry
            and exit is captured on 24 hour and motion recording, with cameras
            placed specifically around your site. Electrically operated locks,
            keypad and fob entry, and full alarm integration round out a
            complete system.
          </p>
          <div className="mt-7">
            <ServiceCTA text="Get a Security Quote" />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden aspect-[3/2] relative">
          <Image
            src="/images/Smart-key-for-home1.jpg"
            alt="Smart keypad access control installation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 items-stretch">
        {subCards.map((card) => (
          <div
            key={card.title}
            className="h-full bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-amber-300 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                <card.icon size={18} className="text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 text-[15px]">
                {card.title}
              </h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">
              {card.intro}
            </p>
            <CheckList items={card.items} small />
          </div>
        ))}
      </div>

      {/* Authorised brands strip */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1 max-w-xs">
          <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-1">
            Brands we&apos;re authorised to install
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Trusted by the manufacturers whose products we supply and fit.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:ml-auto shrink-0">
          <div className="h-20 px-6 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
            <Image
              src="/brands/2nI.png"
              alt="2N"
              width={72}
              height={52}
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="h-20 px-6 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
            <Image
              src="/brands/Dahua_Technology_logo.svg_-1.png"
              alt="Dahua Technology"
              width={160}
              height={52}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="h-20 px-6 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
            <Image
              src="/brands/doorbird-authorised-logo-1.png"
              alt="DoorBird — Authorised Distributor"
              width={190}
              height={52}
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

const AUDIO_BRANDS = [
  { src: "/audio-brands/sonos1.jpg",    alt: "Sonos",    w: 120 },
  { src: "/audio-brands/Den1.jpg",      alt: "Denon",    w: 130 },
  { src: "/audio-brands/Marantze1.jpg", alt: "Marantz",  w: 130 },
  { src: "/audio-brands/p.jpg",         alt: "Pioneer",  w: 140 },
  { src: "/audio-brands/integra1.jpg",  alt: "Integra",  w: 110 },
  { src: "/audio-brands/Triad1.jpg",    alt: "Triad",    w: 120 },
  { src: "/audio-brands/s.jpg",         alt: "Sony",     w: 90  },
];

function AudioPanel() {
  return (
    <div>
      {/* Intro + photo */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
        <div>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Music in every room.<br />Effortless every time.
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed mb-2">
            Music in your home can often feel like it&apos;s too hard, so it gets
            forgotten. The right system changes that completely.
          </p>
          <p className="text-slate-600 leading-relaxed mb-2">
            From a quiet sitting room to a full outdoor pool party, and everything
            in between, we have a solution that fits.
          </p>
          <p className="text-slate-600 leading-relaxed">
            From a simple voice command, a push of a button, or an automatically
            generated scene trigger, your home comes alive, your favourite songs
            play, and life is simply better.
          </p>
          <div className="mt-7">
            <ServiceCTA text="Plan My Audio Install" />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
          <Image
            src="/images/Sonos-pic.jpg"
            alt="Sonos amplifier — in-ceiling speakers & whole-home audio installation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Brands marquee */}
      <div className="mb-14">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] text-center mb-8">
          Leading brands we supply &amp; install
        </p>
        <div
          className="overflow-hidden group"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...AUDIO_BRANDS, ...AUDIO_BRANDS].map((brand, i) => (
              <div key={i} className="flex items-center justify-center px-8 shrink-0">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.w}
                  height={40}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What we offer + CTA */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-7">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
          What we offer
        </h3>
        <CheckList
          twoCol
          items={[
            "In-ceiling, in-wall, or surface-mounted speakers for any room or outdoor space",
            "Independent zones: different music in different rooms simultaneously",
            "Pre-set volume limits so last night's party doesn't wake the whole house at 6am because someone left it at full volume",
            '"Alexa, play something relaxing in the kitchen" with voice control built in',
            "Fully customisable playlists so you can define your own experience at home",
            "Solutions scaled from a single sitting room to a whole-property outdoor setup",
          ]}
        />
      </div>

    </div>
  );
}

function NetworkingPanel() {
  const steps = [
    {
      title: "Assess first",
      body: "We measure your internet connection on-site, evaluate your existing cabling and hardware, and document the current state before recommending anything.",
    },
    {
      title: "Design for your technology",
      body: "We spec wired and wireless products and cabling suited to how you actually use your home, built to last for new builds and existing homes alike.",
    },
    {
      title: "Install for the future",
      body: "Cat6 or better data cabling to all necessary points. Control cabling, security cabling and TV cabling all run at the same time, so you never have to open walls later. Wi-Fi access points strategically placed for full connectivity throughout.",
    },
    {
      title: "Centralised and flexible",
      body: "Our centralised model where everything comes back to one point allows complete flexibility into the future. One location to manage it all, now and as your needs change.",
    },
  ];

  return (
    <div>
      {/* Intro + photo */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
        <div>
          <SectionIdentity
            counter="05 · Wi-Fi & Networking"
            headline="The last thing we design. The first thing we think about."
            subHeadline="Your technology is only as good as the network beneath it."
          />
          <div className="space-y-4 text-slate-600 leading-relaxed mb-7">
            <p>
              Every piece of technology in your home depends on your data
              network. We assess it thoroughly before recommending anything, and
              design it properly before installing anything else.
            </p>
            <p>
              If you have ever pushed a button on a smart home app only to have
              it freeze, that is a network problem. We fix it before it happens.
            </p>
          </div>
          <ServiceCTA text="Quote My Network Install" />
        </div>

        <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
          <Image
            src="/images/Smart-automated-louneroom1.jpg"
            alt="Smart automated lounge room with integrated networking"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Full-width 4-step row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="bg-slate-50 border border-slate-200 rounded-xl p-5"
          >
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Step {i + 1}
            </span>
            <h3 className="font-semibold text-slate-900 mt-1 mb-2 text-[15px]">
              {step.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TheatrePanel() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-10">
        <div>
          <SectionIdentity
            counter="06 · Home Theatre"
            headline="A sanctuary you can't find anywhere else"
            subHeadline=""
          />
          <div className="space-y-4 text-slate-600 leading-relaxed mb-7">
            <p>
              Whether it&apos;s a family Saturday night in or a couple of hours
              to yourself with Netflix, a home theatre provides a sanctuary
              within your home unlike anything else. From a minimalist approach
              right through to full Dolby Atmos, acoustically treated cinema, we
              have the experience and know-how to execute your vision.
            </p>
            <p>
              Home theatre design works best when introduced at the planning
              stage. We offer full design solutions and can work directly with
              your architect or with you to get the best from your space. Budget,
              functionality and quality are the biggest discussions, and we do
              our best to tie all of these together to your preference.
            </p>
          </div>

          <ServiceCTA text="Design My Home Theatre" />
        </div>

        <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
          <Image
            src="/images/Hoem-Theatre-screen1.jpg"
            alt="Home theatre projection screen installation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
          Options include
        </h3>
        <CheckList
          twoCol
          items={[
            "4K resolution or better",
            "Fixed or motorised screens",
            "Fixed or motorised TV and projector brackets",
            "Automated control systems for simple use by the whole family",
            "Hard button remotes that take care of everything",
            "LED lighting features for a real cinema feel",
            "Illuminated movie posters",
            "Star ceilings and panelling",
            "Acoustic treatments",
            "Dedicated theatre seating, powered or otherwise",
          ]}
        />
      </div>
    </div>
  );
}

/* ─── PANEL MAP ──────────────────────────────────────── */
const panels: Record<string, React.ReactNode> = {
  electrical: <ElectricalPanel />,
  automation: <AutomationPanel />,
  security:   <SecurityPanel />,
  audio:      <AudioPanel />,
  networking: <NetworkingPanel />,
  theatre:    <TheatrePanel />,
};

/* ─── PAGE ───────────────────────────────────────────── */
function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabParam = searchParams.get("tab");
  const activeTab = tabParam && panels[tabParam] ? tabParam : "electrical";

  const handleTabChange = (id: string) => {
    router.replace(`/services?tab=${id}`, { scroll: false });
  };

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────── */}
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
              What We Do
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Services
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              From the switchboard to the smart home, we design and install
              every technology system your home needs. Residential specialists
              serving Melbourne&apos;s eastern suburbs for over 25 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TAB BAR ────────────────────────────────────── */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className="flex overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            aria-label="Services navigation"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-3.5 text-sm font-medium border-b-2 transition-colors duration-150 cursor-pointer shrink-0 ${
                  activeTab === tab.id
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                <tab.icon size={15} className="shrink-0" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── ANIMATED CONTENT PANEL ─────────────────────── */}
      <div className="bg-white min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
              {panels[activeTab]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── PLANNING CONSULTATION CALLOUT ──────────────── */}
      <section className="bg-[#111111] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/5 border border-white/15 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Content */}
              <div>
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-6">
                  Standalone Service
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                  Don&apos;t wing it. Plan your smart home before works begin.
                </h2>
                <p className="text-slate-400 text-[16px] leading-relaxed mb-4">
                  Good planning is what eliminates surprises at the end. Through
                  visual aids and focused conversations around smart home
                  technologies and their suitability to your needs, we help you
                  build a solid scope that can be priced and budgeted for. You
                  and your builder will know exactly what to expect in both value
                  and functionality.
                </p>
                <p className="text-slate-400 text-[16px] leading-relaxed mb-10">
                  Available as a completely standalone service for architects,
                  interior designers, builders, and home planners, to accommodate
                  and complement your building plans and scope.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-slate-900 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-[15px] min-h-[44px] cursor-pointer"
                >
                  Book a Consultation
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Graphic */}
              <div className="hidden md:block">
                <PlanningGraphic />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ────────────────────────────────── */}
      <section className="bg-white border-t border-slate-200 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5">
            Not Sure Where to Start?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-3 max-w-xl mx-auto">
            That&apos;s completely normal. Most of our best projects started
            with a client who just had a vague idea of what they wanted.
          </p>
          <p className="text-slate-500 text-[16px] leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re thinking. We&apos;ll ask the right
            questions, give you a straight cost estimate, and never throw
            components at a problem you don&apos;t have. No pressure. No jargon.
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
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  return (
    <Suspense>
      <ServicesContent />
    </Suspense>
  );
}
