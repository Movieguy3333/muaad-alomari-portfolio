import Navbar from "@/components/layout/Navbar";
import SectionRail from "@/components/layout/SectionRail";
import SmoothScroll from "@/components/layout/SmoothScroll";
import GeoTracker from "@/components/layout/GeoTracker";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Terminal from "@/components/sections/Terminal";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Reveal from "@/components/motion/Reveal";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-bg">
      <ScrollProgress />
      <Navbar />
      {/*   <SectionRail /> */}
      <SmoothScroll />

      <Hero />
      <Reveal>
        <Terminal />
      </Reveal>

      {/* These sections carry their own scroll-driven / staggered motion
          (draw-on-scroll timeline, staggered card reveals, parallax), so they
          are not wrapped in an outer Reveal. */}
      <Experience />
      <Skills />
      <Projects />
      <About />

      <Footer />
      <Analytics />
      <GeoTracker />
    </main>
  );
}
