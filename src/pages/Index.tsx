import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsProgress from "@/components/SkillsProgress";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <SkillsProgress />
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Index;
