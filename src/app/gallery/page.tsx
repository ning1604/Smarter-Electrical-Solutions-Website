"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Expand,
} from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { BUSINESS } from "@/lib/constants";

/* ─── DATA ───────────────────────────────────────────── */
const CATEGORIES = [
  { id: "all",        label: "All Projects"      },
  { id: "electrical", label: "Electrical"         },
  { id: "automation", label: "Home Automation"    },
  { id: "security",   label: "Security & Access"  },
  { id: "audio",      label: "Multi-Room Audio"   },
  { id: "theatre",    label: "Home Theatre"       },
  { id: "networking", label: "Wi-Fi & Networking" },
];

const PROJECTS = [
  {
    id: 1,
    category: "automation",
    categoryLabel: "Home Automation",
    title: "Smart lighting and scene control",
    location: "Hawthorn",
    description:
      "Full Control4 integration with 14 lighting zones, automated arrival and departure scenes, and voice control throughout.",
    image: "/images/Smart-automated-louneroom1.jpg",
  },
  {
    id: 2,
    category: "electrical",
    categoryLabel: "Electrical",
    title: "New build electrical fit-out",
    location: "Canterbury",
    description:
      "Complete electrical installation for a 4-bedroom new build including all data points, TV outlets, and switchboard.",
    image: "/images/Modern-smart-home-automation1 (1).jpg",
  },
  {
    id: 3,
    category: "theatre",
    categoryLabel: "Home Theatre",
    title: "Dedicated Dolby Atmos cinema room",
    location: "Toorak",
    description:
      "11.2 Dolby Atmos system, 4K laser projector, motorised 120-inch screen, full acoustic treatment and tiered seating.",
    image: "/images/Hoem-Theatre-screen1.jpg",
  },
  {
    id: 4,
    category: "security",
    categoryLabel: "Security & Access",
    title: "CCTV, intercom and electric gate",
    location: "Camberwell",
    description:
      "6-camera CCTV system with night vision, flush-mounted video intercom and electrically operated driveway gate.",
    image: "/images/Smart-key-for-home1.jpg",
  },
  {
    id: 5,
    category: "audio",
    categoryLabel: "Multi-Room Audio",
    title: "Whole-home audio across 8 zones",
    location: "Kew",
    description:
      "In-ceiling Sonos speakers across 8 independent zones including outdoor entertaining area and pool terrace.",
    image: "/images/Sonos-pic.jpg",
  },
  {
    id: 6,
    category: "networking",
    categoryLabel: "Wi-Fi & Networking",
    title: "Structured cabling and mesh Wi-Fi",
    location: "Balwyn",
    description:
      "Cat6A cabling to 22 points, centralised network rack, and enterprise-grade access points for whole-home coverage.",
    image: "/images/smart-servers-11.jpg",
  },
  {
    id: 7,
    category: "automation",
    categoryLabel: "Home Automation",
    title: "Savant smart home, full integration",
    location: "Balwyn North",
    description:
      "Savant Pro system integrating lighting, climate, audio-visual, security and access across a double-storey home.",
    image: "/images/Home-with-home-automation-2.jpg",
  },
  {
    id: 8,
    category: "electrical",
    categoryLabel: "Electrical",
    title: "Switchboard upgrade and EV charger",
    location: "Box Hill",
    description:
      "Main switchboard replacement, safety switch upgrades, and Tesla Wall Connector installation with load management.",
    image: "/images/Smart-kitchen.jpg",
  },
  {
    id: 9,
    category: "theatre",
    categoryLabel: "Home Theatre",
    title: "Family media room with surround sound",
    location: "Doncaster",
    description:
      "7.1 surround sound, 4K OLED display, motorised blackout blinds and single-remote whole-room control.",
    image: "/images/smart-TV-on-wall-in-living-room1.jpg",
  },
  {
    id: 10,
    category: "security",
    categoryLabel: "Security & Access",
    title: "Flush intercom and keypad access",
    location: "Malvern",
    description:
      "Architectural flush video intercom, three-zone keypad entry and full alarm system integration.",
    image: "/images/Fence-with-intercom.jpg",
  },
  {
    id: 11,
    category: "audio",
    categoryLabel: "Multi-Room Audio",
    title: "In-ceiling audio with outdoor terrace",
    location: "Surrey Hills",
    description:
      "4-zone audio system with dedicated weatherproof outdoor speakers and subwoofer for the alfresco entertaining area.",
    image: "/images/Home-automation-on-iPad1.jpg",
  },
  {
    id: 12,
    category: "networking",
    categoryLabel: "Wi-Fi & Networking",
    title: "Full network overhaul, existing home",
    location: "Glen Waverley",
    description:
      "Existing cabling audit, rack consolidation, and 4-point access point installation for reliable whole-home coverage.",
    image: "/images/Iphone-with-smart-controls1.jpg",
  },
  {
    id: 13,
    category: "theatre",
    categoryLabel: "Home Theatre",
    title: "Luxury lounge AV and lighting integration",
    location: "South Yarra",
    description:
      "Wall-mounted 75-inch display, architectural sconce lighting, smart home panel and full scene control in a prestige lounge.",
    image: "/images/IMG_4940.jpg",
  },
  {
    id: 14,
    category: "automation",
    categoryLabel: "Home Automation",
    title: "Smart ensuite lighting and blind control",
    location: "Brighton",
    description:
      "Multi-zone lighting keypad with individual dimming for ensuite, vanity, and toilet zones plus motorised blind integration.",
    image: "/images/home-automation-photo31.jpg",
  },
  {
    id: 15,
    category: "automation",
    categoryLabel: "Home Automation",
    title: "Feature wall display and scene control",
    location: "Richmond",
    description:
      "Flush wall-mounted display with automated scene presets, integrated lighting control and whole-home AV distribution.",
    image: "/images/Smart-TV-on-wall1.jpg",
  },
];

type Project = (typeof PROJECTS)[number];

/* ─── LIGHTBOX ───────────────────────────────────────── */
function Lightbox({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/88 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 w-full max-w-[92vw] xl:max-w-[1200px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Left: image ── */}
        <div className="relative md:w-[68%] bg-[#111111] flex items-center justify-center aspect-[4/3] md:aspect-auto md:min-h-[680px]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 68vw"
            />
          ) : (
            <>
              <ImageIcon size={48} className="text-white/20" />
              <span className="absolute text-white/30 text-xs font-medium">
                Project photo
              </span>
            </>
          )}

          {/* Prev */}
          <button
            onClick={onPrev}
            aria-label="Previous project"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 border border-white/15 flex items-center justify-center text-white transition-all duration-150 cursor-pointer backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            aria-label="Next project"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 border border-white/15 flex items-center justify-center text-white transition-all duration-150 cursor-pointer backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
            <span className="text-white/70 text-[11px] font-medium tabular-nums">
              {index + 1} / {total}
            </span>
          </div>
        </div>

        {/* ── Right: details ── */}
        <div className="md:w-[32%] flex flex-col p-7 md:p-10">
          {/* Close */}
          <div className="flex justify-end mb-6">
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all duration-150 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1">
            <p className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-3">
              {project.categoryLabel}
            </p>
            <h2 className="text-xl font-bold text-slate-900 leading-snug tracking-tight mb-4">
              {project.title}
            </h2>
            <div className="flex items-center gap-1.5 mb-5">
              <MapPin size={13} className="text-slate-400 shrink-0" />
              <span className="text-slate-500 text-sm">{project.location}, Melbourne</span>
            </div>

            <div className="h-px bg-slate-100 mb-5" />

            <p className="text-slate-600 text-[14px] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400 mb-3">Interested in a similar project?</p>
            <Link
              href="/contact"
              onClick={onClose}
              className="group w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/35 active:translate-y-0 text-slate-900 font-semibold px-5 py-3 rounded-lg transition-all duration-200 text-[14px] min-h-[44px] cursor-pointer"
            >
              Get a Free Quote
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── PROJECT CARD ───────────────────────────────────── */
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div className="group h-full rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Clickable image */}
      <button
        onClick={onClick}
        aria-label={`View ${project.title}`}
        className="relative aspect-[4/3] bg-slate-100 flex flex-col items-center justify-center gap-3 shrink-0 overflow-hidden cursor-pointer w-full"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <>
            <ImageIcon size={36} className="text-slate-300 transition-transform duration-300 group-hover:scale-90" />
            <span className="text-slate-400 text-xs font-medium">Project photo</span>
          </>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-slate-900 font-semibold text-[13px] px-4 py-2.5 rounded-full shadow-lg">
            <Expand size={14} />
            View Project
          </div>
        </div>
      </button>

      {/* Card body */}
      <div className="px-5 py-4 flex flex-col flex-1">
        <p className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-1.5">
          {project.categoryLabel}
        </p>
        <h3 className="text-slate-900 text-[15px] font-semibold leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-3">
          {project.description}
        </p>
        <p className="text-xs text-slate-400 font-medium">{project.location}, Melbourne</p>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const activeCategoryLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setLightboxIndex(null);
  };

  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111111]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
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
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Projects Across Melbourne
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Every job here was designed and installed by our team. Browse by
              category or scroll through the full portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER BAR ──────────────────────────────────── */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className="flex overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            aria-label="Project category filter"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`whitespace-nowrap px-4 py-3.5 text-sm font-medium border-b-2 transition-colors duration-150 cursor-pointer shrink-0 ${
                  activeCategory === cat.id
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── GRID ────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20 min-h-[560px]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-8">
            <p className="text-slate-400 text-sm">
              Showing{" "}
              <span className="font-semibold text-slate-700">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "project" : "projects"}
              {activeCategory !== "all" && (
                <>
                  {" "}in{" "}
                  <span className="font-semibold text-slate-700">
                    {activeCategoryLabel}
                  </span>
                </>
              )}
            </p>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <StaggerChildren
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                staggerDelay={0.07}
              >
                {filtered.map((project, i) => (
                  <StaggerItem key={project.id} className="h-full">
                    <ProjectCard
                      project={project}
                      onClick={() => setLightboxIndex(i)}
                    />
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── LIGHTBOX ────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <Lightbox
            project={filtered[lightboxIndex]}
            index={lightboxIndex}
            total={filtered.length}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>

      {/* ── CLOSING CTA ─────────────────────────────────── */}
      <section className="bg-[#111111] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/5 border border-white/15 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Start Your Project
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 max-w-xl mx-auto">
              Let&apos;s talk about your project.
            </h2>
            <p className="text-slate-400 text-[16px] leading-relaxed mb-8 max-w-lg mx-auto">
              Every project on this page started with a single phone call or
              message. Yours can too.
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
        </div>
      </section>
    </>
  );
}
