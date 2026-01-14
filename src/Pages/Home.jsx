import About from "../Components/About";
import Contact from "../Components/Contacts";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";

import Hero from "./../Components/Hero";
import Skills from "./../Components/Skills";
import Education from "./../Components/Education";
import Achievement from "../Components/Achievement";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}
