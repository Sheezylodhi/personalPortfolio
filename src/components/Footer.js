import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-frame border-t-0 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-body text-[11px] uppercase tracking-[0.2em] text-muted sm:flex-row lg:px-10">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="transition-colors hover:text-gold">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
