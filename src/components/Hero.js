"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/content";

const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const name = profile.name.toUpperCase();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* ambient light leaks */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 flex items-center gap-3 rounded-full border border-line px-4 py-1.5 font-body text-[11px] uppercase tracking-[0.3em] text-muted"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
        Now Screening
      </motion.div>

      <h1 className="flex flex-wrap justify-center gap-x-4 text-center font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-paper sm:text-[9vw] lg:text-[7.5vw]">
        {name.split(" ").map((word, wi) => (
          <span key={wi} className="flex overflow-hidden">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                custom={wi * 4 + ci}
                variants={letterVariants}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold to-transparent sm:w-64"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="mt-6 max-w-xl text-center font-body text-sm uppercase tracking-[0.35em] text-gold"
      >
        {profile.role}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="mt-4 max-w-md text-center font-body text-base text-muted"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#work"
          className="rounded-full bg-gold px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
        >
          View The Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line px-7 py-3 font-body text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:border-gold hover:text-gold"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted"
        aria-label="Scroll to About section"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
