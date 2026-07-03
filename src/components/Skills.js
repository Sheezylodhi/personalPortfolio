"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            The Equipment Room
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
            Tools of the trade
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.12}>
              <div className="h-full rounded-2xl border border-line bg-ink-2/60 p-8">
                <h3 className="font-display text-lg uppercase tracking-[0.15em] text-gold">
                  {group.category}
                </h3>
                <div className="mt-7 space-y-6">
                  {group.items.map((item, ii) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-body text-sm text-paper">
                          {item.name}
                        </span>
                        <span className="font-body text-xs text-muted timecode">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: 1,
                            delay: 0.1 + ii * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-teal to-gold"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
