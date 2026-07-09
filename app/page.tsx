
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}