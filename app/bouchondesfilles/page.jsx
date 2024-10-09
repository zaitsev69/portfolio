import Navbar from '../components/navbar';
import Image from "next/image";

const BouchonDesFilles = () => {
    return (
      <div>
        <Navbar />
        <div className="mx-24 2xl:mx-48 scroll-smooth flex justify-between items-center">
          {/* Section texte à gauche */}
          <div className="w-1/2 pr-8">
            <h1 className='text-white text-5xl bold mb-4'>Bouchon des Filles</h1>
            <p className='text-white'>
              Réalisation d&aposune charte graphique pour un restaurant lyonnais "Le bouchon des filles".
            </p>
          </div>
          
          {/* Section image à droite */}
          <div className="">
            <Image
              src="/affiche.png"
              width={5000}
              height={3477}
              alt="Picture of the author"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
};

export default BouchonDesFilles;
