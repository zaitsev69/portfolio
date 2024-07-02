import Image from "next/image";
import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import About from '../app/components/about';
import Skill from '../app/components/skill';
import Project from '../app/components/project';

export default function Home() {
  return (
    <main className="mx-48">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
    </main>
  );
}
