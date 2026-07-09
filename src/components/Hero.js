"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const tech = ["React", "Next.js", "Node", "MongoDB", "ASP.NET", "Tailwind", "Framer Motion"];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });
  const rotateX = useSpring(0, { stiffness: 80, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (isMobile) return;
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      rotateY.set((e.clientX / window.innerWidth - 0.5) * 10);
      rotateX.set(-(e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 text-white">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden">
        {!isMobile && (
          <>
            <motion.div animate={{ x: [0, 120, -80, 0], y: [0, -60, 60, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/4 top-0 h-[700px] w-[700px] rounded-full bg-yellow-400/10 blur-[180px]" />
            <motion.div animate={{ x: [0, -120, 90, 0], y: [0, 80, -70, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 bottom-0 h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]" />
            <motion.div style={{ left: smoothX, top: smoothY }} className="pointer-events-none absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 70, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 120, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.span key={i} className="absolute h-1 w-1 rounded-full bg-white/30" initial={{ x: Math.random() * 1600, y: Math.random() * 900, opacity: 0 }} animate={{ y: [Math.random() * 900, Math.random() * 900 - 200], opacity: [0, 1, 0] }} transition={{ duration: 5 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }} />
            ))}
          </>
        )}
        
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(to right,#ffffff 1px,transparent 1px), linear-gradient(to bottom,#ffffff 1px,transparent 1px)`, backgroundSize: "80px 80px" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center,transparent 20%,rgba(0,0,0,.65) 100%)" }} />
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div style={!isMobile ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}} className="relative z-20 flex flex-col items-center">
        <h1 className="text-[12vw] font-black uppercase leading-none tracking-tighter">{profile.name}</h1>
        <p className="mt-6 text-xl uppercase tracking-[0.5em] text-yellow-400">{profile.role}</p>

        <div className="mt-10 flex gap-4">
           <a href="#work" className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold uppercase transition-all hover:bg-white/10">View Work</a>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl max-w-sm">
          <div className="flex flex-col gap-6 text-center">
            <div><p className="text-xs uppercase tracking-[.4em] text-yellow-400">CURRENT STACK</p><h2 className="mt-3 font-semibold">React • Next • Node • MongoDB • Express • Wordpress </h2></div>
          </div>
        </motion.div>
      </motion.div>

      {/* --- TECH PILLS --- */}
      {!isMobile && (
        <div className="pointer-events-none absolute inset-0">
          {tech.map((item, index) => (
            <motion.div key={item} animate={{ opacity: 0.5, y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 + index, delay: index }} className={`absolute rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 text-xs ${index===0&&"top-40 left-10"} ${index===1&&"top-72 right-16"} ${index===2&&"bottom-40 left-20"} ${index===3&&"bottom-52 right-24"} ${index===4&&"top-24 right-1/3"} ${index===5&&"bottom-28 left-1/2"} ${index===6&&"top-1/2 right-8"}`}>
              {item}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}