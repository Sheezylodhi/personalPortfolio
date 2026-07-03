"use client";

import { motion } from "framer-motion";
import { Target, CalendarCheck, Code2, Gauge, MessageSquare, Sparkles } from "lucide-react";
import { whyHireMe } from "@/data/content";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const icons = [Target, CalendarCheck, Code2, Gauge, MessageSquare, Sparkles];

export default function WhyHireMe() {
  return (
    <section id="why-me" className="relative py-28 lg:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">Casting Notes</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-paper sm:text-5xl">Why Clients Choose Me</h2>
          <p className="mt-6 font-body text-base text-muted max-w-lg mx-auto">
            Building a successful product requires more than just code. It takes reliability, 
            clear communication, and a obsession with crafting memorable user experiences.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyHireMe.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={reason.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)]"
                >
                  {/* Gold Sweep Effect */}
                  <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-gold/5 to-transparent skew-x-[-20deg]" />

                  {/* Number Overlay */}
                  <span className="absolute -right-2 -top-2 font-display text-7xl font-bold text-white/5 group-hover:text-gold/10 transition-colors">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gold mb-8 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="relative font-display text-xl font-bold text-paper group-hover:text-gold transition-colors">
                    {reason.title}
                  </h3>
                  <p className="relative mt-4 font-body text-sm leading-relaxed text-muted">
                    {reason.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Details →
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.5}>
          <div className="mt-24 border-t border-white/10 pt-16 text-center">
            <h3 className="font-display text-2xl text-paper">Ready to work together?</h3>
            <p className="mt-4 text-muted font-body">Let's build something exceptional.</p>
            <Link href="/#contact"><button className="mt-8 rounded-full border border-gold px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all">
              Start a Project →
            </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}