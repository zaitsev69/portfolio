// /components/Hero.js
"use client"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const typedElement = useRef(null); // Ref pour l'élément .texte

    useEffect(() => {
        const options = {
            strings: ["développeur front", "web designer", "graphiste"],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true,
        };

        // Initialise Typed.js
        const typed = new Typed(typedElement.current, options);

        // Nettoyage de l'animation lors de la désactivation du composant
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white font-bold text-5xl">
            {/* Empêcher le retour à la ligne avec whitespace-nowrap */}
            <div className="whitespace-nowrap">
                Nathan Cadilhac, <span ref={typedElement} className="texte"></span>
            </div>
            
            {/* Bouton avec une transition fluide */}
            <button
                className="mt-10 px-6 py-3 bg-black border-4 border-white text-white text-lg rounded hover:bg-white hover:text-black transition-colors duration-300"
                onClick={() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                Découvrir
            </button>
        </div>
    );
};

export default Hero;
