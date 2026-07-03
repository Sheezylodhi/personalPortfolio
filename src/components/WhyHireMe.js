"use client";

import {
  Target,
  CalendarCheck,
  Code2,
  Gauge,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { whyHireMe } from "@/data/content";
import Reveal from "@/components/Reveal";

const icons = [Target, CalendarCheck, Code2, Gauge, MessageSquare, Sparkles];

export default function WhyHireMe() {
  return (
    <section id="why-me" className="section-frame relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            Casting Notes
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
            Why hire me for the role
          </h2>
          <p className="mt-5 font-body text-base text-muted">
            Talent is common. What actually gets a production finished on
            time and looking right is this.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyHireMe.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={reason.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-8 transition-colors hover:border-gold/50">
                  <span className="absolute -right-4 -top-4 font-display text-7xl font-bold text-line/60 transition-colors group-hover:text-gold/10">
                    0{i + 1}
                  </span>

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ink-3 text-gold">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>

                  <h3 className="relative mt-6 font-display text-lg font-bold text-paper">
                    {reason.title}
                  </h3>
                  <p className="relative mt-3 font-body text-sm leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}