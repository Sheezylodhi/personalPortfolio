"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { profile } from "@/data/content";

const tech = ["React", "Next.js", "Node", "MongoDB", "ASP.NET", "Tailwind", "Framer Motion"];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const rotateX = useSpring(0, { stiffness: 80, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      rotateY.set(x);
      rotateX.set(-y);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 text-white">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{ x: [0, 120, -80, 0], y: [0, -60, 60, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/4 top-0 h-[700px] w-[700px] rounded-full bg-yellow-400/10 blur-[180px]" />
        <motion.div animate={{ x: [0, -120, 90, 0], y: [0, 80, -70, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 bottom-0 h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]" />

        <motion.div style={{ left: smoothX, top: smoothY }} className="pointer-events-none absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />
        
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(to right,#ffffff 1px,transparent 1px), linear-gradient(to bottom,#ffffff 1px,transparent 1px)`, backgroundSize: "80px 80px" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} />
        
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 0.03 }} transition={{ delay: 1 }} className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-black uppercase tracking-tight text-[18vw] select-none">
          FULL STACK
        </motion.h1>

        {/* Rotating Rings */}
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 70, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 120, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        {/* Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span key={i} className="absolute h-1 w-1 rounded-full bg-white/30" initial={{ x: Math.random() * 1600, y: Math.random() * 900, opacity: 0 }} animate={{ y: [Math.random() * 900, Math.random() * 900 - 200], opacity: [0, 1, 0] }} transition={{ duration: 5 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }} />
        ))}
        
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center,transparent 20%,rgba(0,0,0,.65) 100%)" }} />
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative z-20 flex flex-col items-center">
        <h1 className="text-[12vw] font-black uppercase leading-none tracking-tighter">{profile.name}</h1>
        <p className="mt-6 text-xl uppercase tracking-[0.5em] text-yellow-400">{profile.role}</p>

        {/* Premium CTA */}
        <div className="mt-10 flex gap-4">
           <a href="#work" className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold uppercase transition-all hover:bg-white/10">
             <motion.span animate={{ x: ["-100%", "250%"] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute inset-0 w-1/3 bg-white/20 blur-xl skew-x-[-25deg]" />
             View Work
           </a>
        </div>

        {/* Glass Card */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: 0.8 }} whileHover={{ scale: 1.04, y: -8 }} className="mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="flex items-center justify-between gap-10">
            <div>
              <p className="text-xs uppercase tracking-[.4em] text-yellow-400">CURRENT STACK</p>
              <h2 className="mt-3 font-semibold">React • Next • Node • MongoDB</h2>
            </div>
            <div className="h-16 w-px bg-white/10"/>
            <div>
              <p className="text-xs uppercase tracking-[.4em] text-yellow-400">STATUS</p>
              <h2 className="mt-3 text-green-400">Available For Work</h2>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Tech Pills */}
      <div className="pointer-events-none absolute inset-0">
        {tech.map((item, index) => (
          <motion.div key={item} animate={{ opacity: 0.5, y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 + index, delay: index }} className={`absolute rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 text-xs ${index===0&&"top-40 left-10"} ${index===1&&"top-72 right-16"} ${index===2&&"bottom-40 left-20"} ${index===3&&"bottom-52 right-24"} ${index===4&&"top-24 right-1/3"} ${index===5&&"bottom-28 left-1/2"} ${index===6&&"top-1/2 right-8"}`}>
            {item}
          </motion.div>
        ))}
      </div>

      {/* Light Sweep & Cursor Glow */}
      <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="pointer-events-none absolute inset-0 w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
      <motion.div style={{ left: smoothX, top: smoothY }} className="pointer-events-none absolute h-24 w-24 rounded-full bg-yellow-300/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}