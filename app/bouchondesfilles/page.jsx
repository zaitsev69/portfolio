"use client"
import Image from "next/image";
import CircleCursor from '../components/cursor'
import StickyButton from '../components/bouton'


const BouchonDesFilles = () => {
  return (
    <div>
      <CircleCursor />
      <StickyButton />
      <div className="mx-24 2xl:mx-48 scroll-smooth flex justify-between items-center mt-10">
        <div className="w-1/2 pr-8">
          <p className='text-white'>
            Réalisation du logo et de la charte graphique d&apos;un restaurant lyonnais, Le bouchon des filles.
            Accompagné de visuel de carte de visites, dessous de verres et affiche promotionnel.
          </p>
        </div>
        <div className="">
          <Image
            src="/logowhite.png"
            width={2728}
            height={972}
            alt="Picture of the author"
            className="w-auto h-80"
          />
        </div>
      </div>
      <div className="mt-24">
        <Image
          src="/cart.png"
          width={6000}
          height={5000}
          alt="Picture of the author"
          className="w-full h-auto"
        />
      </div>
      <p className='text-white mx-24 lg:mx-48 bg-guillemet bg-no-repeat bg-left bg-scroll bg-[length:50px] max-w-2xl pt-12 pl-24 pb-8 text-left'>
        J'ai conçu une identité visuelle audacieuse et énergique, inspirée par l'esthétique Acid Rave, emblématique de la scène techno, pour capturer l'esprit vibrant et avant-gardiste du lieu.
      </p>
      <div className="flex flex-col lg:flex-row h-screen mx-24">
        <Image
          src="/verre.png"
          width={5000}
          height={3334}
          alt="Picture of the author"
          className="w-full h-auto"
        />
        <div className="flex-1 flex items-center justify-center">
          <p className=" text-white mx-24">
            Erotica Alternate est la
            typographie principale.
            Elle dispose de fins
            empâtements qui lui
            confère une élégance
            unique.
          </p>
        </div>

      
      </div>
      <div className="mt-10 mx-auto text-center">
        <p className="text-white">Visuel clé</p>
        <Image
          src="/affiche.png"
          width={1100}
          height={1737}
          alt="Picture of the author"
          className="w-auto  mx-auto"
        />
      </div>

    </div>

  );
};

export default BouchonDesFilles;
