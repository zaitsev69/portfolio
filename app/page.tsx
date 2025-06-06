import Image from "next/image";
import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import Project from '../app/components/project';
import Carrouselprojet from '../app/components/project2';
import Contact from '../app/components/contact';
import Footer from '../app/components/footer';
import Skilldeux from '../app/components/skilldeux';
import Mobile from '../app/components/mobile'
import CircleCursor from '../app/components/cursor'

export default function Home() {  
  return (
    <main className="mx-24 2xl:mx-48 scroll-smooth">
      <CircleCursor />
      <Mobile />
      <Navbar />
      <Hero />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
