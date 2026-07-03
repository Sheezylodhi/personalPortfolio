import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import WhyHireMe from "@/components/WhyHireMe";
import Experience from "@/components/Experience";

import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SprocketRail from "@/components/SprocketRail";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <>
      <SprocketRail />
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <WhyHireMe />
        <Experience />

        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
