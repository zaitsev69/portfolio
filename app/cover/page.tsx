"use client";
import Image from "next/image";
import CircleCursor from '../components/cursor';
import StickyButton from '../components/bouton';

const Poster = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-10">
      <CircleCursor />
      <StickyButton />
      <div className="text-center">
        <p className="text-white">Cover fictive d'un album réalisé sur Photoshop.</p>
        <Image
          src="/cdlaylow.png"
          width={2000}
          height={2700}
          alt="Cover album fictif"
          className="w-auto h-auto"
        />
      </div>
      <Image
        src="/coverlaylow.png"
        width={2000}
        height={2700}
        alt="Cover album Laylow"
        className="w-auto h-auto"
      />
    </div>
  );
};

export default Poster;
