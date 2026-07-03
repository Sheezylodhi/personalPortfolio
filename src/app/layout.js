import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";
import FilmGrain from "@/components/FilmGrain";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-paper antialiased vignette">
        <FilmGrain />
        {children}
      </body>
    </html>
  );
}
