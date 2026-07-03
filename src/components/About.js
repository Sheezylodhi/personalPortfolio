"use client";

import { motion } from "framer-motion";
import { Clapperboard } from "lucide-react";
import { about, profile } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="section-frame relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            {about.eyebrow}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* film-frame portrait */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-gold" />
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden border border-line bg-gradient-to-br from-ink-3 via-ink-2 to-ink">
                <span className="font-display text-8xl font-bold text-line">
                  {profile.initials}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between font-body text-[10px] uppercase tracking-[0.25em] text-muted">
                <span className="timecode">00:00:12:04</span>
                <span className="flex items-center gap-1">
                  <Clapperboard size={12} className="text-gold" /> Take 01
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl lg:text-5xl">
                {about.heading}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p className="font-body text-base leading-relaxed text-muted">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.08}>
                  <div className="border-l border-line pl-4">
                    <motion.p className="gold-gradient-text font-display text-3xl font-bold">
                      {stat.value}
                    </motion.p>
                    <p className="mt-1 font-body text-[11px] uppercase tracking-[0.15em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
