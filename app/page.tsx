import About from "@/components/About";
import Blog from "@/components/Blog";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <HeroSection />
      {/* <About /> */}
      <Services />
      <Skills />
      <Portfolio />
      <Blog />
      <Connect />
      <Contact />
    </div>
  );
}
