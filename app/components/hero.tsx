"use client";
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const typedElement = useRef(null); // Ref pour l'élément .texte
    const [showButton, setShowButton] = useState(false); // État pour gérer la visibilité du bouton

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

    useEffect(() => {
        // Délai de 1 seconde avant d'afficher le bouton
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 2000);

        // Nettoyage du timer si le composant est démonté
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white font-bold text-5xl">
            {/* Empêcher le retour à la ligne avec whitespace-nowrap */}
            <div className="whitespace-nowrap">
                Nathan Cadilhac, <span ref={typedElement} className="texte"></span>
            </div>
            
            {/* Affichage conditionnel du bouton avec un délai et une transition d'opacité */}
            <button
                className={`mt-10 px-6 py-3 bg-black border-4 border-white text-white text-lg rounded hover:bg-white hover:text-black transition-colors duration-300 
                ${showButton ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
                style={{ transitionDelay: showButton ? '0s' : '1s' }} // Facultatif : Ajoute un délai supplémentaire si besoin
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
