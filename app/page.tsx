import Image from "next/image";
import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import About from '../app/components/about';
import Skill from '../app/components/skill';
import Project from '../app/components/project';
import Contact from '../app/components/contact';
import Footer from '../app/components/footer';
import Skilldeux from '../app/components/skilldeux';

export default function Home() {
  return (
    <main className="lg:mx-48 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Skilldeux />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
