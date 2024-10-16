"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Carrouselprojet = ({ }) => {
  var settings = {
    mobileFirst: true,
    infinite: true,
    slidesToShow: 8, // Affiche une image à la fois pour les agrandir
    slidesToScroll: 1,
    autoplay: true,
    speed: 800, // Vitesse du slide (en ms)
    autoplaySpeed: 0, // Pause de 3 secondes sur chaque slide
    cssEase: 'ease', // Animation plus fluide
    arrows: true, // Garde les flèches
    dots: true, // Affiche les points de navigation
    pauseOnHover: false,
    draggable: true,
  };

  const skills = [
    { name: 'html', src: '/html.svg', description: 'Maîtrise 80%' },
    { name: 'css', src: '/css.svg', description: 'Maîtrise 70%' },
    { name: 'javascript', src: '/js.svg', description: 'Maîtrise 60%' },
    { name: 'react', src: '/react.svg', description: 'Maîtrise 60%' },
    { name: 'tailwind', src: '/tailwind.svg', description: 'Maîtrise 80%' },
    { name: 'nextjs', src: '/nextjs.svg', description: 'Maîtrise 70%' },
    { name: 'svelte', src: '/svelte.svg', description: 'Maîtrise 60%' },
    { name: 'wordpress', src: '/wordpress.svg', description: 'Maîtrise 90%' },
  ];

  const crea = [
    { name: 'Photoshop', src: '/photoshop.svg', description: 'Maîtrise 90%' },
    { name: 'Illustrator', src: '/illustrator.svg', description: 'Maîtrise 90%' },
    { name: 'Lightroom', src: '/lightroom.svg', description: 'Maîtrise 60%' },
    { name: 'Indesign', src: '/indesign.svg', description: 'Maîtrise 60%' },
    { name: 'Premiere Pro', src: '/premiere.svg', description: 'Maîtrise 70%' },
    { name: 'After Effects', src: '/after.svg', description: 'Maîtrise 60%' },
  ];

  const uiux = [
    { name: 'Figma', src: '/figma.svg', description: 'Maîtrise 90%' },
    { name: 'Adobe XD', src: '/adobexd.svg', description: 'Maîtrise 70%' },
    { name: 'SEO', src: '/seo.svg', description: 'Maîtrise 60%' },
  ];

  return (
    <div className="mt-64  text-black">
      <div className="text-center mb-8 bg-white">
        <Slider className="mt-4 mx-auto" {...settings}>
          {skills.concat(crea, uiux).map((item) => (
            <div className="px-4" key={item.name}>
              <Image src={item.src} alt={item.name} layout="responsive" width={1920} height={1080} className="rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
};

export default Carrouselprojet;
