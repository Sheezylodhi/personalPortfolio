"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Clapperboard, Briefcase, Code2, Users } from "lucide-react";
import { about, profile } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function About() {
  // Mouse tilt logic for Identity Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">{about.eyebrow}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          
          {/* LEFT: Premium Developer Identity Card */}
          <Reveal delay={0.1}>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { x.set(0); y.set(0); }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative mx-auto w-full max-w-sm perspective"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl overflow-hidden">
                {/* Animated Gold Border & Light Sweep */}
                <div className="absolute inset-0 border-[1px] border-gold/30 rounded-3xl" />
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }} 
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent skew-x-[-20deg]" 
                />
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-white/90">{profile.initials}</div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-[10px] text-green-400 border border-green-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    AVAILABLE FOR WORK
                  </div>
                  
                  <div className="mt-8 space-y-4 text-left">
                    <div className="flex justify-between border-b border-white/5 pb-2 text-xs text-muted">
                      <span>Experience</span> <span className="text-white">3+ Years</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2 text-xs text-muted">
                      <span>Projects</span> <span className="text-white">30+</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted">
                      <span>Clients</span> <span className="text-white">15+</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    {["React", "Next.js", "Tailwind"].map((tech) => (
                      <span key={tech} className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-gold border border-gold/10">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* RIGHT: Content Reveal */}
          <div>
            <Reveal>
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-paper">{about.heading}</h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p className="font-body text-base leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.08}>
                  <div className="border-l border-gold/30 pl-4">
                    <motion.p className="text-white font-display text-3xl font-bold">{stat.value}</motion.p>
                    <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <a href={profile.resumeUrl} className="rounded-full bg-gold px-8 py-3 text-ink font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">Download CV</a>
              <a href="#contact" className="rounded-full border border-line px-8 py-3 text-paper font-bold text-xs uppercase tracking-widest hover:border-gold transition-colors">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}