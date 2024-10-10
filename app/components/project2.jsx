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
    slidesToShow: 1, // Affiche une image à la fois pour les agrandir
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000, // Vitesse du slide (en ms)
    autoplaySpeed: 3000, // Pause de 3 secondes sur chaque slide
    cssEase: 'ease', // Animation plus fluide
    arrows: true, // Garde les flèches
    dots: true, // Affiche les points de navigation
    pauseOnHover: false,
    draggable: false,
  };

  return (
    <div className="mt-64 text-black">
      <div className="text-center mb-8">
        <h1>Bienvenue sur votre nouvelle page !</h1>
        <p>Ceci est un composant de base prêt à être développé.</p>
        <Slider className="mt-4 mx-auto background-white" {...settings}>
          <div className="px-4">
            <Image src="/tablature.png" alt="Acacia" layout="responsive" width={1920} height={1080} className="rounded-lg" />
          </div>
          <div className="px-4">
            <Image src="/tablature.png" alt="Affiche" layout="responsive" width={1920} height={1080} className="rounded-lg" />
          </div>
          <div className="px-4">
            <Image src="/tablature.png" alt="Portfolio" layout="responsive" width={1920} height={1080} className="rounded-lg" />
          </div>
          <div className="px-4">
            <Image src="/tablature.png" alt="Tablature" layout="responsive" width={1920} height={1080} className="rounded-lg" />
          </div>
          <div className="px-4">
            <Image src="/tablature.png" alt="Pente" layout="responsive" width={1920} height={1080} className="rounded-lg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carrouselprojet;
