"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">Now Booking</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
            Production Services
          </h2>
          <p className="mt-6 max-w-md font-body text-muted leading-relaxed">
            Crafting premium digital products. Pick a scene, or ask for a custom cut.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.tag} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.1)]"
              >
                {/* Gold Sweep Effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-gold/5 to-transparent skew-x-[-20deg]" 
                />

                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-display text-sm text-gold timecode">{service.tag}</span>
                    <motion.div 
                      whileHover={{ rotate: 45 }}
                      className="text-white/50 group-hover:text-gold transition-colors"
                    >
                      <ArrowUpRight size={24} />
                    </motion.div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-paper mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-body text-sm text-muted mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {["Next.js", "Motion", "SEO"].map((tech) => (
                      <span key={tech} className="text-[10px] uppercase tracking-widest text-white/40 border border-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Premium CTA */}
        <Reveal delay={0.4}>
          <div className="mt-20 text-center">
            <h3 className="font-display text-2xl text-paper">Ready to bring your idea to life?</h3>
            <Link href= "/#contact"><button className="mt-8 rounded-full border border-gold px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all">
              Start a Project →
            </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}