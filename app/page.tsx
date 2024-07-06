import Image from "next/image";
import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import About from '../app/components/about';
import Project from '../app/components/project';
import Contact from '../app/components/contact';
import Footer from '../app/components/footer';
import Skilldeux from '../app/components/skilldeux';
import Mobile from '../app/components/mobile'

export default function Home() {
  return (
    <main className="mx-24 2xl:mx-48 scroll-smooth">
      <Mobile />
      <Navbar />
      <Hero />
      <About />
      <Skilldeux />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
