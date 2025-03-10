// components/Hero.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const typedElement = useRef(null);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const options = {
            strings: ["web designer", "graphiste", "développeur front"],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true,
        };
        const typed = new Typed(typedElement.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white text-5xl ">
            {/* Titre avec la police Archivo Narrow */}
            <div className="whitespace-nowrap font-bold font-helvetica">
                Nathan Cadilhac, <span ref={typedElement}></span>
            </div>

            {/* Bouton */}
            <button
    className={`mt-10 px-6 py-3 bg-black border-2 font-helvetica border-white text-white text-lg rounded-md 
        transition-all duration-500 ease-in-out 
        hover:bg-gray-200 hover:text-black
        ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    style={{ 
        transitionDelay: showButton ? '0s' : '1s',
        willChange: 'opacity, background-color, color'
    }}
    onClick={() => {
        const aboutSection = document.getElementById('project');
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
