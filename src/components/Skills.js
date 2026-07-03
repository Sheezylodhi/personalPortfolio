"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skillGroups } from "@/data/content";
import Reveal from "@/components/Reveal";

// Component for Individual Tech Chip
const TechChip = ({ name }) => (
  <motion.div
    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
    className="flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-paper backdrop-blur-md transition-colors hover:bg-gold/10"
  >
    <span className="mr-2 text-gold">◆</span>
    {name}
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            The Toolkit
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
            Tools of the trade
          </h2>
          <p className="mt-6 max-w-lg font-body text-muted leading-relaxed">
            Every great digital experience starts with the right combination of technology, performance, and attention to detail.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)]"
              >
                {/* Gold Sweep Effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-gold/5 to-transparent skew-x-[-20deg]"
                />
                
                <h3 className="font-display text-xl uppercase tracking-[0.2em] text-gold mb-8">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <TechChip key={item.name} name={item.name} />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Currently Exploring Section */}
        <Reveal delay={0.5}>
          <div className="mt-20 rounded-2xl border border-white/5 bg-white/5 p-8 text-center backdrop-blur-md">
            <h4 className="font-display text-lg uppercase tracking-[0.2em] text-paper">
              Currently Exploring
            </h4>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-gold/70">
              {["AI Integration", "Three.js", "GSAP", "Docker"].map((tech) => (
                <span key={tech} className="font-body text-sm tracking-widest uppercase italic">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}