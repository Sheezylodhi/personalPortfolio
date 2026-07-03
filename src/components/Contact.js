"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target);
    
    // Yahan hum API call karenge
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) setStatus("sent");
  }

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Premium Spotlight Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-2xl px-6 relative">
        <Reveal>
          <h2 className="font-display text-5xl font-bold text-paper text-center">Let's craft your vision</h2>
          <p className="text-center text-muted mt-6 mb-16">The inbox is always open for exceptional ideas.</p>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input name="name" required placeholder="Name" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-paper placeholder:text-white/20 focus:border-gold outline-none transition-all" />
              <input name="email" required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-paper placeholder:text-white/20 focus:border-gold outline-none transition-all" />
            </div>
            <textarea name="message" required rows={5} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-paper placeholder:text-white/20 focus:border-gold outline-none transition-all" />
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="w-full bg-gold text-ink font-bold py-4 rounded-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              {status === "loading" ? "Sending..." : status === "sent" ? "Message Delivered" : "Send Inquiry"}
              {!status.includes("sent") && <Send size={14} />}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}