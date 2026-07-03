"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { services } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
              Now Booking
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
              Services on the menu
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm text-muted">
            From a single landing page to a full production — pick a scene,
            or ask for a custom cut.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={service.tag} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm text-gold timecode">
                    {service.tag}
                  </span>

                  <span
                    className={`flex-1 font-display text-xl font-bold transition-colors sm:text-2xl ${
                      isOpen ? "text-gold" : "text-paper"
                    }`}
                  >
                    {service.title}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-paper"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 pl-0 font-body text-sm leading-relaxed text-muted sm:pl-14">
                    {service.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}