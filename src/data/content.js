// ────────────────────────────────────────────────────────────
// EDIT EVERYTHING ABOUT YOUR PORTFOLIO FROM RIGHT HERE.
// You almost never need to touch component files — just update
// the values below and the whole site updates.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Shahzaib Lodhi",
  initials: "MS",
  role: "Full Stack Web Developer",
  tagline: "Crafting high-performance, cinematic web experiences from the first line of code to the final deployment",
  location: "Karachi, Pakistan",
  email: "muhammadshahzaiblodhi@gmail.com",
  resumeUrl: "/projects/resume.pdf", // link to your PDF resume
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
  "I'm a Full Stack Web Developer who approaches every project like a production—from the first idea and UI design to scalable development and deployment. My goal is to build web experiences that are fast, modern, and memorable.",

  "I focus on the details that users often don't notice consciously—smooth animations, clean layouts, responsive design, accessibility, and performance optimization. Those small details are what transform a good website into an exceptional user experience.",

  "I primarily build full-stack applications using React.js, Next.js, Node.js, MongoDB, and Tailwind CSS. From business websites and admin dashboards to e-commerce platforms and custom web applications, I enjoy turning ideas into reliable, production-ready products.",
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
    title: "ZS Digitizing",
    year: "2026",
    genre: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/zs-digitizing.png",
     imageMobile: "/projects/zs-digitizingmobile.png",
    description:
      "Full-stack business platform with Admin & Client portals, authentication, REST APIs, Cloudinary integration, email automation, responsive UI, and production deployment.",
    liveUrl: "https://www.zsdigitizing.com",
    codeUrl: "https://github.com/yourusername/zs-digitizing",
  },

  {
    scene: "02",
    title: "Full Stack E-Commerce",
    year: "2026",
    genre: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
    image: "/projects/eccomerce.png",
     imageMobile: "/projects/eccomercemobile.png",
    description:
      "Production-ready e-commerce platform featuring secure authentication, Admin Dashboard, product management, Google OAuth, Cloudinary, payment integration, and order management.",
    liveUrl: "https://clotheccomercewebsite.vercel.app",
    codeUrl: "https://github.com/yourusername/ecommerce",
  },

  {
    scene: "03",
    title: "Luxury Restaurant",
    year: "2026",
    genre: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/food.png",
     imageMobile: "/projects/foodmobile.png",

    description:
      "Luxury restaurant website with cinematic animations, responsive layouts, reservation system, modern UI, SEO optimization, and smooth user experience.",
    liveUrl: "https://food-ordering-system-blush-zeta.vercel.app/",
    codeUrl: "https://github.com/yourusername/restaurant",
  },

  {
    scene: "04",
    title: "WebMashLabs Agency",
    year: "2026",
    genre: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/webmash.png",
     imageMobile: "/projects/webmashmobile.png",

    description:
      "Modern software agency website showcasing services, portfolio, contact system, responsive design, animations, SEO optimization, and high-performance architecture.",
    liveUrl: "https://webmashlabs.vercel.app",
    codeUrl: "https://github.com/yourusername/webmashlabs",
  },

  {
    scene: "05",
    title: "Gym Fitness Platform",
    year: "2025",
    genre: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/gym.png",
     imageMobile: "/projects/gymmobile.png",

    description:
      "Responsive fitness website with membership plans, trainer profiles, workout programs, contact forms, and modern interactive UI.",
    liveUrl: "https://gym-demo.vercel.app",
    codeUrl: "https://github.com/yourusername/gym",
  },

  {
    scene: "06",
    title: "Real Estate Platform",
    year: "2025",
    genre: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/estate.png",
     imageMobile: "/projects/estatemobile.png",

    description:
      "Real estate platform with property listings, advanced search, inquiry forms, responsive design, interactive UI, and optimized performance.",
    liveUrl: "https://real-estate-demo.vercel.app",
    codeUrl: "https://github.com/yourusername/real-estate",
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
  {
    title: "Production-Ready Development",
    description:
      "I build scalable, maintainable, and production-ready web applications using React.js, Next.js, Node.js, and MongoDB with clean architecture and best practices.",
  },

  {
    title: "Performance First",
    description:
      "Every project is optimized for fast loading, responsiveness, SEO, accessibility, and smooth user experience across all modern devices.",
  },

  {
    title: "Pixel-Perfect UI",
    description:
      "I transform Figma and design concepts into responsive, modern interfaces with attention to spacing, typography, animations, and overall user experience.",
  },

  {
    title: "Reliable Communication",
    description:
      "Clear communication, regular progress updates, and realistic timelines ensure projects move smoothly from planning to successful delivery.",
  },

  {
    title: "Problem Solver",
    description:
      "I focus on solving business problems instead of only writing code, delivering solutions that improve usability, efficiency, and long-term scalability.",
  },

  {
    title: "Long-Term Value",
    description:
      "My goal is to deliver clean, reusable, and easy-to-maintain code that allows future features and improvements without unnecessary complexity.",
  },
];

export const services = [
  {
    tag: "01",
    title: "Modern Business Websites",
    description:
      "Fast, responsive, and premium websites for startups, agencies, restaurants, gyms, and real estate businesses built with React and Next.js.",
  },
  {
    tag: "02",
    title: "Full-Stack Web Applications",
    description:
      "Scalable web applications with Next.js, Node.js, Express, MongoDB, secure authentication, dashboards, and REST APIs.",
  },
  {
    tag: "03",
    title: "Admin Dashboards",
    description:
      "Custom admin panels for managing products, users, orders, bookings, analytics, and business operations with role-based access.",
  },
  {
    tag: "04",
    title: "API & Third-Party Integration",
    description:
      "Integration of payment gateways, Google OAuth, Cloudinary, email automation, maps, and other third-party APIs.",
  },
  {
    tag: "05",
    title: "Performance & SEO Optimization",
    description:
      "Improve loading speed, Core Web Vitals, accessibility, SEO, and overall user experience for better business results.",
  },
  {
    tag: "06",
    title: "Deployment & Maintenance",
    description:
      "Deploy applications on Vercel, manage domains and DNS, fix bugs, add new features, and provide ongoing support.",
  },
];
