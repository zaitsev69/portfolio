import Image from "next/image";
import CircleCursor from '../components/cursor'
import Navbar from '../components/navbar';
import HomeButton from '../components/homebouton';


export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8 font-helvetica">
      <CircleCursor />
      <HomeButton />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-6xl font-bold text-gray-300 mb-6">À propos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              Étudiant en 3ème année de web design, je conçois des projets où
              design et expérimentation se rencontrent. Je puise mon inspiration
              dans des environnements esthétiques variés, j’ai un goût prononcé
              pour les univers underground tels que le métal ou la techno qui
              nourrissent ma créativité. Dans mon travail, j’aime mettre en avant
              la texture, la lumière pour bâtir des visuels forts et évocateurs
              qui bousculent les conventions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Véritable couteau suisse, je peux m’adapter à tout type de projet,
              et mes compétences sont très larges : développement web, no code,
              conception d’interface, graphisme, vidéo, communication digitale...
              Je vois chaque projet comme une opportunité de repousser les
              limites, en mêlant créativité et expertise technique. Mon objectif :
              marquer les esprits avec des réalisations uniques et audacieuses.
            </p>
          </div>
          <div className="mt-6 text-gray-500 text-lg">
            <p>📧 nathan.cadilhacpro@gmail.com</p>
            <p>📍 Lyon</p>
            <a
              href="https://www.linkedin.com/in/nathan-cadilhac/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center pb-20">
          <div className="w-80 h-80 relative">
            <Image
              src="/photocv.png" // Remplace par l'URL de ton image
              alt="Nathan Cadilhac"
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}