/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0D",          // near-black theater background
        "ink-2": "#111318",       // secondary surface
        "ink-3": "#181B22",       // card surface
        paper: "#F3EFE6",         // warm projector-screen white
        gold: "#D4AF37",          // award / spotlight gold
        "gold-2": "#F1D57A",
        teal: "#2FC6B0",          // reel / tech accent
        muted: "#8A8F98",
        line: "#26292F",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: 0.9 },
          "8%": { opacity: 0.75 },
          "20%": { opacity: 0.95 },
          "35%": { opacity: 0.8 },
          "60%": { opacity: 0.92 },
          "78%": { opacity: 0.7 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        flicker: "flicker 6s infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
