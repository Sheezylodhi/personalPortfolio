"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, Resend, EmailJS, etc.)
    // For now it opens the user's mail client pre-filled with the message.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            Roll Credits
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-paper sm:text-5xl lg:text-6xl">
            Let&apos;s make something worth watching
          </h2>
          <p className="mx-auto mt-6 max-w-md font-body text-base text-muted">
            Have a project in mind, or just want to talk shop? The inbox is
            always open.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-display text-2xl font-bold text-paper transition-colors hover:text-gold sm:text-3xl"
          >
            <Mail className="text-gold" size={26} />
            {profile.email}
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              size={22}
            />
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-5 text-left sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="font-body text-[11px] uppercase tracking-[0.2em] text-muted">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-line bg-ink-2 px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-muted/60 focus:border-gold"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="font-body text-[11px] uppercase tracking-[0.2em] text-muted">
                Email
              </label>
              <input
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-line bg-ink-2 px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-muted/60 focus:border-gold"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-body text-[11px] uppercase tracking-[0.2em] text-muted">
                Message
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-lg border border-line bg-ink-2 px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-muted/60 focus:border-gold"
              />
            </div>
            <div className="sm:col-span-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-ink"
              >
                <Send size={14} />
                {status === "sent" ? "Message Queued" : "Send Message"}
              </motion.button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
