"use client";
import Image from "next/image";
import CircleCursor from '../components/cursor';
import StickyButton from '../components/bouton';

const squareagency = () => {
  return (
    <div className="flex flex-col mx-32 items-center justify-center min-h-screen my-10">
      <CircleCursor />
      <StickyButton />
      <div className="text-center">
        <p className="text-white mb-10">Interface réalisé sur Figma pour une agence web spécialisé dans les sites de voyage</p>
        <Image
          src="/square.png"
          width={2000}
          height={2700}
          alt="Square agency"
          className="w-auto h-auto"
        />
      </div>
      <p className="text-white my-20">Deux autres page d'accueil que j'avais imaginer pour ce projet.</p>
      <Image
        src="/concept1.png"
        width={1920}
        height={1080}
        alt="Cover album Laylow"
        className="w-auto h-auto mb-10"
      />
      <Image
        src="/concept2.png"
        width={1920}
        height={1080}
        alt="Cover album Laylow"
        className="w-auto h-auto"
      />
    </div>
    
  );
};

export default squareagency;
