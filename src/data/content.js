// ────────────────────────────────────────────────────────────
// EDIT EVERYTHING ABOUT YOUR PORTFOLIO FROM RIGHT HERE.
// You almost never need to touch component files — just update
// the values below and the whole site updates.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  initials: "YN",
  role: "Web Developer",
  tagline: "I build fast, cinematic web experiences from script to screen.",
  location: "Karachi, Pakistan",
  email: "you@example.com",
  resumeUrl: "#", // link to your PDF resume
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "Twitter", href: "https://twitter.com/yourusername" },
    { label: "Instagram", href: "https://instagram.com/yourusername" },
  ],
};

export const about = {
  eyebrow: "The Director's Note",
  heading: "Behind the scenes of every pixel",
  paragraphs: [
    "I'm a web developer who treats every project like a production — a script (the idea), a set (the design), and a crew of clean code that brings it all to life on screen.",
    "I care about the details that most people never consciously notice: the 200ms of an easing curve, the weight of a heading, the silence before a hover state pays off. That's where a good site becomes a memorable one.",
    "When I'm not shipping interfaces, I'm reverse-engineering the animations on my favorite websites, sketching layouts, or hunting for the next stack that makes building feel effortless.",
  ],
  stats: [
    { value: "3+", label: "Years Behind the Scenes" },
    { value: "30+", label: "Productions Shipped" },
    { value: "12", label: "Tools In the Kit" },
    { value: "∞", label: "Cups of Coffee" },
  ],
};

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Vercel / Deployment", level: 88 },
      { name: "VS Code", level: 97 },
    ],
  },
];

export const projects = [
  {
    scene: "01",
    title: "Project One",
    year: "2025",
    genre: ["Next.js", "Tailwind", "Framer Motion"],
    description:
      "A short synopsis of the project — what problem it solved, who it was for, and what made it interesting to build.",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    scene: "02",
    title: "Project Two",
    year: "2024",
    genre: ["React", "Node.js", "MongoDB"],
    description:
      "A short synopsis of the project — what problem it solved, who it was for, and what made it interesting to build.",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    scene: "03",
    title: "Project Three",
    year: "2024",
    genre: ["Next.js", "REST API", "Auth"],
    description:
      "A short synopsis of the project — what problem it solved, who it was for, and what made it interesting to build.",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    scene: "04",
    title: "Project Four",
    year: "2023",
    genre: ["JavaScript", "UI/UX"],
    description:
      "A short synopsis of the project — what problem it solved, who it was for, and what made it interesting to build.",
    liveUrl: "#",
    codeUrl: "#",
  },
   {
    scene: "05",
    title: "Project Four",
    year: "2023",
    genre: ["JavaScript", "UI/UX"],
    description:
      "A short synopsis of the project — what problem it solved, who it was for, and what made it interesting to build.",
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

export const whyHireMe = [
  { title: "Pixel-Perfect Execution", description: "Every spacing, easing curve, and breakpoint is intentional — designs ship looking exactly like the mockup, on every screen size." },
  { title: "Ships On Schedule", description: "Clear timelines, honest estimates, and no vanishing acts. If a deadline moves, you hear about it before it happens, not after." },
  { title: "Clean, Scalable Code", description: "Readable components, sane folder structure, and no shortcuts that turn into next month's headache for whoever touches the codebase." },
  { title: "Built To Perform", description: "Fast load times and smooth interactions aren't an afterthought — they're part of the build from the first commit." },
  { title: "Actually Communicates", description: "Regular updates, screen recordings of progress, and straight answers when something isn't possible — no jargon, no disappearing." },
  { title: "Cares About The Details", description: "Hover states, empty states, error states — the parts most developers skip are usually the parts I enjoy most." },
];

export const services = [
  { tag: "01", title: "Landing Pages & Marketing Sites", description: "High-converting, animated one-page sites for products, startups, and personal brands — built to load fast and look sharp." },
  { tag: "02", title: "Full-Stack Web Applications", description: "End-to-end apps with React/Next.js on the front and Node.js/Express on the back, wired to a real database." },
  { tag: "03", title: "UI/UX To Code", description: "Figma or hand-drawn designs turned into pixel-accurate, responsive, production-ready interfaces." },
  { tag: "04", title: "Performance & SEO Audits", description: "Speed, accessibility, and search optimization passes that turn a sluggish site into a fast, discoverable one." },
  { tag: "05", title: "API Integration", description: "Payments, auth, CMS, third-party APIs — connected cleanly and documented so your team isn't guessing later." },
  { tag: "06", title: "Ongoing Maintenance", description: "Bug fixes, dependency updates, and small feature additions on a retainer, so the site keeps running smoothly after launch." },
];
