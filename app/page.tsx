import Image from "next/image";
import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import About from '../app/components/about';

export default function Home() {
  return (
    <main className="mx-48">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
