"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clapperboard } from "lucide-react";
import { nav, profile } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-sm tracking-[0.2em] text-paper"
        >
          <Clapperboard size={18} className="text-gold" strokeWidth={1.5} />
          {profile.initials}
          <span className="text-muted">/DEV</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative font-body text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-paper"
              >
                <span className="mr-1 text-gold/70">0{i + 1}</span>
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-gold/60 px-5 py-2 font-body text-xs uppercase tracking-[0.15em] text-gold transition-all hover:bg-gold hover:text-ink md:inline-block"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(true)}
          className="text-paper md:hidden"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex justify-end px-6 py-5">
              <button
                onClick={() => setOpen(false)}
                className="text-paper"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <motion.ul
              className="flex flex-col items-center justify-center gap-8 pt-12"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl uppercase tracking-widest text-paper"
                  >
                    <span className="mr-3 text-gold">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
