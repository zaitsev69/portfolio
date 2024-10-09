"use client"

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const SkillDeux = () => {
    const [flippedSkills, setFlippedSkills] = useState(Array(8).fill(false));
    const [flippedCrea, setFlippedCrea] = useState(Array(6).fill(false));
    const [flippedUiux, setFlippedUiux] = useState(Array(3).fill(false));

    const [visibleTitleSkills, setVisibleTitleSkills] = useState(false);
    const [visibleTitleCrea, setVisibleTitleCrea] = useState(false);
    const [visibleTitleUiux, setVisibleTitleUiux] = useState(false);

    const [visibleSkills, setVisibleSkills] = useState(Array(8).fill(false));
    const [visibleCrea, setVisibleCrea] = useState(Array(6).fill(false));
    const [visibleUiux, setVisibleUiux] = useState(Array(3).fill(false));

    const skillRefs = useRef([]);
    const creaRefs = useRef([]);
    const uiuxRefs = useRef([]);
    const titleRefs = useRef([]);

    const handleFlipSkills = (index) => {
        setFlippedSkills(flippedSkills.map((flip, i) => i === index ? !flip : flip));
    };

    const handleFlipCrea = (index) => {
        setFlippedCrea(flippedCrea.map((flip, i) => i === index ? !flip : flip));
    };

    const handleFlipUiux = (index) => {
        setFlippedUiux(flippedUiux.map((flip, i) => i === index ? !flip : flip));
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = entry.target.getAttribute('data-index');
                    const category = entry.target.getAttribute('data-category');

                    if (category === 'skills') {
                        setVisibleSkills((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    } else if (category === 'crea') {
                        setVisibleCrea((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    } else if (category === 'uiux') {
                        setVisibleUiux((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    } else if (category === 'title-skills') {
                        setVisibleTitleSkills(true);
                    } else if (category === 'title-crea') {
                        setVisibleTitleCrea(true);
                    } else if (category === 'title-uiux') {
                        setVisibleTitleUiux(true);
                    }
                }
            });
        });

        // Observe titles
        titleRefs.current.forEach((ref) => observer.observe(ref));

        // Observe skill, crea, uiux cards
        skillRefs.current.forEach((ref) => observer.observe(ref));
        creaRefs.current.forEach((ref) => observer.observe(ref));
        uiuxRefs.current.forEach((ref) => observer.observe(ref));

        return () => {
            skillRefs.current.forEach((ref) => observer.unobserve(ref));
            creaRefs.current.forEach((ref) => observer.unobserve(ref));
            uiuxRefs.current.forEach((ref) => observer.unobserve(ref));
            titleRefs.current.forEach((ref) => observer.unobserve(ref));
        };
    }, []);

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
        <div id="skills" className="mt-64 hidden lg:block">
            <h2 className="text-4xl font-bold my-4 text-white">Skills</h2>
            <h2
                ref={el => titleRefs.current[0] = el}
                data-category="title-skills"
                className={`text-2xl font-bold mt-6 mb-4 text-white ${visibleTitleSkills ? 'animate-slide-in-delayed' : 'opacity-0'}`}
            >
                Développement front / Intégration Web
            </h2>
            <div className='grid grid-cols-3 gap-6 2xl:grid-cols-5 2xl:gap-6'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        data-index={index}
                        data-category="skills"
                        ref={el => skillRefs.current[index] = el}
                        className={`card-container bg-white flex w-64 h-24 justify-center items-center rounded-lg font-semibold relative 
                        ${flippedSkills[index] ? 'flip' : ''} 
                        ${visibleSkills[index] ? 'animate-slide-in-delayed' : 'opacity-0'}`}
                        onMouseEnter={() => handleFlipSkills(index)}
                        onMouseLeave={() => handleFlipSkills(index)}
                    >
                        <div className="front absolute w-full h-full flex justify-between items-center px-3 py-1 rounded-lg">
                            <p className='uppercase text'>{skill.name}</p>
                            <Image src={skill.src} width={60} height={60} />
                        </div>
                        <div className="back absolute w-full h-full flex justify-center items-center px-3 py-1 rounded-lg">
                            <p className='text-black'>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Titre pour Création graphique */}
            <h2
                ref={el => titleRefs.current[1] = el}
                data-category="title-crea"
                className={`text-2xl font-bold mt-6 mb-4 text-white ${visibleTitleCrea ? 'animate-slide-in-delayed' : 'opacity-0'}`}
            >
                Création graphique
            </h2>
            <div className='grid grid-cols-3 gap-6 2xl:grid-cols-5 2xl:gap-6'>
                {crea.map((crea, index) => (
                    <div
                        key={index}
                        data-index={index}
                        data-category="crea"
                        ref={el => creaRefs.current[index] = el}
                        className={`card-container bg-white flex w-64 h-24 justify-center items-center rounded-lg font-semibold relative 
                        ${flippedCrea[index] ? 'flip' : ''} 
                        ${visibleCrea[index] ? 'animate-slide-in-delayed' : 'opacity-0'}`}
                        onMouseEnter={() => handleFlipCrea(index)}
                        onMouseLeave={() => handleFlipCrea(index)}
                    >
                        <div className="front absolute w-full h-full flex justify-between items-center px-3 py-1 rounded-lg">
                            <p className='uppercase text'>{crea.name}</p>
                            <Image src={crea.src} width={60} height={60} />
                        </div>
                        <div className="back absolute w-full h-full flex justify-center items-center px-3 py-1 rounded-lg">
                            <p className='text-black'>{crea.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Titre pour UI/UX */}
            <h2
                ref={el => titleRefs.current[2] = el}
                data-category="title-uiux"
                className={`text-2xl font-bold mt-6 mb-4 text-white ${visibleTitleUiux ? 'animate-slide-in-delayed' : 'opacity-0'}`}
            >
                UI/UX
            </h2>
            <div className='grid grid-cols-3 gap-6 2xl:grid-cols-5 2xl:gap-6'>
                {uiux.map((uiux, index) => (
                    <div
                        key={index}
                        data-index={index}
                        data-category="uiux"
                        ref={el => uiuxRefs.current[index] = el}
                        className={`card-container bg-white flex w-64 h-24 justify-center items-center rounded-lg font-semibold relative 
                        ${flippedUiux[index] ? 'flip' : ''} 
                        ${visibleUiux[index] ? 'animate-slide-in-delayed' : 'opacity-0'}`}
                        onMouseEnter={() => handleFlipUiux(index)}
                        onMouseLeave={() => handleFlipUiux(index)}
                    >
                        <div className="front absolute w-full h-full flex justify-between items-center px-3 py-1 rounded-lg">
                            <p className='uppercase text'>{uiux.name}</p>
                            <Image src={uiux.src} width={60} height={60} />
                        </div>
                        <div className="back absolute w-full h-full flex justify-center items-center px-3 py-1 rounded-lg">
                            <p className='text-black'>{uiux.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillDeux;
