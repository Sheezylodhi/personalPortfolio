"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clapperboard } from "lucide-react";
import { nav, profile } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-sm tracking-[0.2em] text-paper z-[101]"
        >
          <Clapperboard size={18} className="text-gold" strokeWidth={1.5} />
          {profile.initials}
          <span className="text-muted hidden sm:inline-block">/DEV</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative font-body text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-paper"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(true)}
          // Yahan change kiya hai: {open ? "hidden" : "block"}
          className={`text-paper md:hidden p-2 z-[101] ${open ? "hidden" : "block"}`}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex h-dvh w-full flex-col items-center justify-center bg-ink md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-paper p-2 z-[102]"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            
            <motion.ul
              className="flex flex-col items-center gap-8"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {nav.map((item) => (
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
                    className="font-display text-3xl uppercase tracking-widest text-paper hover:text-gold transition-colors"
                  >
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