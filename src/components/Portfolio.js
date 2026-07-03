"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "@/components/Reveal";

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

const GAP = 24;

export default function Portfolio() {
  const trackRef = useRef(null);
  const dragState = useRef({ startX: 0, startScroll: 0 });

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.genre))).slice(0, 5),
  ];
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.genre.includes(filter));

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    setActiveIndex(0);
    setProgress(0);
  }, [filter]);

  function updateProgress() {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
    const card = el.querySelector("[data-card]");
    const cardWidth = (card?.offsetWidth || 380) + GAP;
    setActiveIndex(
      Math.min(filtered.length - 1, Math.round(el.scrollLeft / cardWidth))
    );
  }

  function scrollByCards(dir) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = (card?.offsetWidth || 380) + GAP;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  }

  function onPointerDown(e) {
    setIsGrabbing(true);
    dragState.current = {
      startX: e.pageX,
      startScroll: trackRef.current.scrollLeft,
    };
  }
  function onPointerMove(e) {
    if (!isGrabbing) return;
    const dx = e.pageX - dragState.current.startX;
    trackRef.current.scrollLeft = dragState.current.startScroll - dx;
  }
  function endDrag() {
    setIsGrabbing(false);
  }

  return (
    <section
      id="work"
      className="section-frame relative overflow-hidden py-28 lg:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
                Feature Presentation
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
                Selected scenes
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="timecode font-body text-xs text-muted">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(filtered.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollByCards(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-gold hover:text-gold"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollByCards(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-gold hover:text-gold"
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* genre filter tabs */}
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

      {/* horizontal filmstrip track */}
      <div className="relative mt-12">
        <div
          ref={trackRef}
          onScroll={updateProgress}
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          className={`flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-10 ${
            isGrabbing ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          <AnimatePresence initial={false}>
            {filtered.map((project, i) => (
              <motion.div
                key={project.scene}
                data-card
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative w-[82vw] shrink-0 snap-start sm:w-[380px]"
              >
                <div className="overflow-hidden rounded-2xl border border-line bg-ink-2/60 transition-colors group-hover:border-gold/40">
                  <SprocketRow />

                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-ink-3 via-ink-2 to-ink">
                    <span className="absolute inset-0 flex select-none items-center justify-center font-display text-[8rem] font-bold text-line/60 transition-colors duration-500 group-hover:text-gold/10">
                      {project.scene}
                    </span>

                    <span className="absolute left-4 top-4 rounded-full border border-gold/50 bg-ink/70 px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                      Scene {project.scene}
                    </span>

                    <div className="absolute inset-0 flex translate-y-3 flex-col justify-end bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="line-clamp-4 font-body text-sm leading-relaxed text-paper/90">
                        {project.description}
                      </p>
                      <div className="mt-4 flex gap-3">
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:scale-105"
  >
    Watch <ArrowUpRight size={13} />
  </a>

  <a
    href={project.codeUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center gap-1.5 rounded-full border border-paper/30 px-4 py-2 font-body text-[11px] uppercase tracking-[0.15em] text-paper transition-colors hover:border-gold hover:text-gold"
  >
    <Github size={13} /> Code
  </a>
</div>
</div> 
</div> 

                  <SprocketRow />

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-paper">
                        {project.title}
                      </h3>
                      <span className="rounded-full border border-line px-2.5 py-0.5 font-body text-[10px] uppercase tracking-[0.15em] text-muted">
                        {project.year}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.genre.slice(0, 3).map((g) => (
                        <span
                          key={g}
                          className="rounded-full bg-ink-3 px-3 py-1 font-body text-[10px] uppercase tracking-[0.1em] text-teal"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* filmstrip progress scrubber */}
        <div className="mx-auto mt-2 max-w-6xl px-6 lg:px-10">
          <div className="h-1 w-full overflow-hidden rounded-full bg-ink-3">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal to-gold"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-center font-body text-[11px] uppercase tracking-[0.2em] text-muted sm:hidden">
            Swipe to explore →
          </p>
        </div>
      </div>
    </section>
  );
}