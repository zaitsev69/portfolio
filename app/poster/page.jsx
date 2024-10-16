"use client"
import Image from "next/image";
import CircleCursor from '../components/cursor'
import StickyButton from '../components/bouton'


const Borntorave = () => {
  return (
    <div className="mx-24">
      <CircleCursor />
      <StickyButton />
      <div>
      <Image
            src="/born.png"
            width={2000}
            height={2700}
            alt="Picture of the author"
            className="w-auto h-auto"
          />
      </div>
      <div>
      <video width="1920" height="1080" controls>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>

  );
};

export default Borntorave;
