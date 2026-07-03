"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Play,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Monitor,
} from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "@/components/Reveal";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Shared film-strip chrome (unchanged from the original section)     */
/* ------------------------------------------------------------------ */

function SprocketRow() {
  return (
    <div
      className="flex justify-between px-4"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, #0a0a0d 3px, transparent 3.5px)",
        backgroundSize: "26px 100%",
      }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="block h-3 w-3 shrink-0 rounded-full bg-ink" />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data fallbacks — the component degrades gracefully if a project    */
/*  in data/content.js doesn't (yet) have the richer fields below.     */
/*  Add these optional keys per project to unlock each block:          */
/*    tagline, stack: [], timeline: { problem, solution, result },     */
/*    metrics: { performance, accessibility, seo, responsive },        */
/*    behindTheBuild, image                                            */
/* ------------------------------------------------------------------ */

function getTimeline(project) {
  if (project.timeline) return project.timeline;
  return {
    problem:
      project.problem ||
      "The brief called for something that hadn't been built at this fidelity before.",
    solution: project.description,
    result:
      project.result || "Shipped, live, and holding up under real traffic.",
  };
}

function getStack(project) {
  return project.stack?.length ? project.stack : project.genre || [];
}

/* ------------------------------------------------------------------ */
/*  3D tilt hook — subtle, capped, and cancelled on pointer leave      */
/* ------------------------------------------------------------------ */

function useTilt(maxTilt = 5) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform:
      "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)",
  });

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * maxTilt * 2;
    const ry = (px - 0.5) * maxTilt * 2;
    setStyle({
      transform: `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`,
    });
  }
  function onMouseLeave() {
    setStyle({
      transform:
        "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  }

  return { ref, style, onMouseMove, onMouseLeave };
}

/* ------------------------------------------------------------------ */
/*  One full "scene" — a cinematic case study for a single project     */
/* ------------------------------------------------------------------ */

function ProjectScene({ project, index }) {
  const sectionRef = useRef(null);
  const tilt = useTilt();
  const [showBehindTheBuild, setShowBehindTheBuild] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const beamY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const beamOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.15, 0.35, 0.15]
  );

  const { problem, solution, result } = getTimeline(project);
  const stack = getStack(project);
  const metrics = project.metrics;
  const flip = index % 2 === 1;

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-line/60 py-20 lg:py-28"
    >
      {/* ambient projector-beam parallax, purely decorative */}
      <motion.div
        aria-hidden="true"
        style={{ y: beamY, opacity: beamOpacity }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,theme(colors.gold/25%),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="timecode font-body text-xs text-gold">
              SCENE {String(project.scene).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-line" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted">
              {project.year}
            </span>
          </div>
        </Reveal>

        <div
          className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* -------- device mockup, with tilt -------- */}
          <Reveal>
            <div
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              style={{ transformStyle: "preserve-3d", ...tilt.style }}
              className="relative transition-transform duration-300 ease-out will-change-transform"
            >
              {/* browser frame */}
              <div className="overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 border-b border-line bg-ink-2 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
                  <span className="ml-3 flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-full bg-ink-3 px-3 py-1 font-body text-[10px] text-muted">
                    <Monitor size={10} className="shrink-0" />
                    <span className="truncate">
                      {(project.liveUrl || "").replace(/^https?:\/\//, "") ||
                        "live-preview"}
                    </span>
                  </span>
                </div>
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-ink-3 via-ink-2 to-ink">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} — desktop preview`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  ) : (
                    <span className="absolute inset-0 flex select-none items-center justify-center font-display text-[6rem] font-bold text-line/50">
                      {project.scene}
                    </span>
                  )}
                </div>
              </div>

              {/* mobile frame, overlapping */}
              <div
                className={`absolute -bottom-8 ${
                  flip ? "-left-6" : "-right-6"
                } w-[34%] min-w-[110px] overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-xl shadow-black/50`}
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="flex justify-center border-b border-line bg-ink-2 py-1.5">
                  <span className="h-1 w-8 rounded-full bg-line" />
                </div>
                <div className="relative aspect-[9/16] w-full bg-gradient-to-b from-ink-3 via-ink-2 to-ink">
                  {project.imageMobile || project.image ? (
                    <Image
                      src={project.imageMobile || project.image}
                      alt={`${project.title} — mobile preview`}
                      fill
                      sizes="200px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="absolute inset-0 flex select-none items-center justify-center font-display text-2xl font-bold text-line/50">
                      {project.scene}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* -------- copy + timeline + stack + metrics -------- */}
          <Reveal>
            <div className="pt-6 lg:pt-0">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">
                {project.tagline || project.genre?.[0]}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold text-paper sm:text-4xl">
                {project.title}
              </h3>

              {/* problem -> solution -> result */}
              <div className="mt-8 space-y-5 border-l border-line pl-5">
                {[
                  ["Problem", problem],
                  ["Solution", solution],
                  ["Result", result],
                ].map(([label, text]) => (
                  <div key={label} className="relative">
                    <span className="absolute -left-[26px] top-1.5 h-2 w-2 rounded-full bg-teal" />
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-teal">
                      {label}
                    </p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-paper/85">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* tech stack chips */}
              {stack.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-full border border-line bg-ink-3 px-3 py-1 font-body text-[10px] uppercase tracking-[0.1em] text-muted"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* metrics — only rendered when real numbers are supplied */}
              {metrics && (
                <div className="mt-7 grid grid-cols-4 gap-3 border-y border-line py-5">
                  {Object.entries(metrics).map(([label, value]) => (
                    <div key={label}>
                      <p className="font-display text-xl font-bold text-gold">
                        {value}
                      </p>
                      <p className="font-body text-[9px] uppercase tracking-[0.15em] text-muted">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* behind the build, optional expandable */}
              {project.behindTheBuild && (
                <div className="mt-6">
                  <button
                    onClick={() => setShowBehindTheBuild((v) => !v)}
                    className="flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-gold"
                  >
                    Behind the Build
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        showBehindTheBuild ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {showBehindTheBuild && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 overflow-hidden font-body text-sm leading-relaxed text-paper/70"
                      >
                        {project.behindTheBuild}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:scale-105"
                >
                  <Play size={13} /> Watch Live <ArrowUpRight size={13} />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-paper/30 px-5 py-2.5 font-body text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:border-gold hover:text-gold"
                >
                  <Github size={13} /> Source
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper — filter tabs + a vertical reel of scenes,         */
/*  with a slim scroll-progress "filmstrip" rail on the left           */
/* ------------------------------------------------------------------ */

const SWIPE_THRESHOLD = 60;

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const filters = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.genre))).slice(0, 5),
  ];
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.genre.includes(filter));

  // whenever the filter changes, the list is different — snap back to scene 1
  useEffect(() => {
    setActiveIndex(0);
    setDirection(1);
  }, [filter]);

  function goTo(nextIndex, dir) {
    if (filtered.length === 0) return;
    setDirection(dir);
    setActiveIndex(((nextIndex % filtered.length) + filtered.length) % filtered.length);
  }
  const goPrev = () => goTo(activeIndex - 1, -1);
  const goNext = () => goTo(activeIndex + 1, 1);

  function onDragEnd(_, info) {
    if (info.offset.x > SWIPE_THRESHOLD) goPrev();
    else if (info.offset.x < -SWIPE_THRESHOLD) goNext();
  }

  const activeProject = filtered[activeIndex];

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section id="work" className="section-frame relative">
      <div className="sticky top-0 z-10 bg-ink/90 backdrop-blur-sm">
        <SprocketRow />
        <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
                  Feature Presentation
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
                  Selected scenes
                </h2>
              </div>

              {/* prev / next navigation */}
              <div className="flex items-center gap-4">
                <span className="timecode font-body text-xs text-muted">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(filtered.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={goPrev}
                    disabled={filtered.length < 2}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={goNext}
                    disabled={filtered.length < 2}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30"
                    aria-label="Next project"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 font-body text-[11px] uppercase tracking-[0.15em] transition-colors ${
                    filter === f
                      ? "border-gold bg-gold text-ink"
                      : "border-line text-muted hover:border-gold/50 hover:text-paper"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
        <SprocketRow />
      </div>

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        {activeProject && (
          <motion.div
            key={`${filter}-${activeProject.scene}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <ProjectScene project={activeProject} index={activeIndex} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* scene dots — tap to jump directly, wraps cleanly on mobile */}
      {filtered.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 pb-10">
          {filtered.map((p, i) => (
            <button
              key={p.scene}
              onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
              aria-label={`Go to ${p.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}