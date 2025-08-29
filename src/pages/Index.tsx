import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import TechCarousel from "@/components/TechCarousel";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FeaturedProjects />
      <TechCarousel />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;