"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const experiences =  [
  {
    duration: "2023 - Present",
    role: "Freelance Full Stack Web Developer",
    company: "Self-Employed",
    location: "Remote",
    description:
      "Developing full-stack business websites, secure admin/client portals, REST APIs, authentication systems, and deploying production-ready applications for clients.",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
      "JWT",
      "Vercel",
    ],
  },
  {
    duration: "Oct 2024 - Mar 2025",
    role: "Full Stack Developer Intern",
    company: "SuperSoft Technologies",
    location: "Karachi, Pakistan",
    description:
      "Worked on ERP applications and contributed to the development of a Car Maintenance Management System while fixing bugs, optimizing modules, and implementing new features.",
    tech: [
      "React.js",
      "ASP.NET",
      "C#",
      "SQL Server",
      "JavaScript",
    ],
  },
  {
    duration: "Jan 2024 - Sep 2024",
    role: "Full Stack Developer Intern",
    company: "IBM Software",
    location: "Karachi, Pakistan",
    description:
      "Developed responsive business websites, converted UI/UX designs into reusable React components, and improved performance and cross-browser compatibility.",
    tech: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const cardVariants = (index) => ({
  hidden: { 
    opacity: 0, 
    x: index % 2 === 0 ? 100 : -100, // Left/Right slide logic
    rotateY: index % 2 === 0 ? 20 : -20 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.8 } 
  }
});

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "center center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-center font-display text-5xl font-bold text-paper mb-20">The Career Path</h2>
        </Reveal>

        <div className="relative">
          {/* Animated Gold Timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10">
            <motion.div style={{ scaleY }} className="absolute top-0 w-full bg-gold origin-top shadow-[0_0_20px_rgba(255,215,0,0.4)]" />
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-24">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={cardVariants(i)} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-29px] md:left-[-7px] w-4 h-4 rounded-full border-2 border-gold bg-ink z-10 animate-pulse" />

                <div className="flex-1" />
                
                {/* VIP Card */}
                <div className="flex-1 group relative rounded-[32px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-2xl hover:border-gold/30 transition-all">
                  <div className="text-gold font-mono text-xs tracking-[0.2em] mb-4">{exp.duration}</div>
                  <h3 className="text-2xl font-bold text-paper">{exp.role}</h3>
                  <div className="text-gold font-medium mb-4">{exp.company} • {exp.location}</div>
                  <p className="text-muted text-sm leading-relaxed mb-6">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map(t => <span key={t} className="px-3 py-1 rounded-full border border-white/5 text-[10px] text-white/50">{t}</span>)}
                  </div>

                  <button className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                    Explore <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}