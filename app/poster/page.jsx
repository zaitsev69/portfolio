"use client";
import Image from "next/image";
import CircleCursor from "../components/cursor";
import StickyButton from "../components/bouton";

const Borntorave = () => {
  return (
    <div className="mx-32 py-8">
      <CircleCursor />
      <StickyButton />
      
      {/* Flex container for video and text */}
      <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
        {/* Video on the left */}
        <div className="lg:w-2/5 w-full"> {/* Adjusted width to 40% */}
          <video className="w-full h-auto" controls>
            <source src="/rave.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Text on the right */}
        <div className="lg:w-3/5 w-full text-white"> {/* Text takes up 60% */}
          <p className="text-lg leading-relaxed bg-guillemet bg-no-repeat bg-left bg-scroll bg-[length:50px] p-20">
            Création d'une affiche de style festival sur Illustrator, avec pour objectif d'explorer la réalité augmentée. 
            J'ai donc intégré un effet de parallaxe en jouant avec les éléments visuels de l'affiche.
          </p>
        </div>
      </div>

      {/* Full-width image below */}
      <div className="w-full">
        <Image
          src="/born.png"
          width={2000}
          height={2700}
          alt="Picture of the author"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Borntorave;
