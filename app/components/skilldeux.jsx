"use client"

import Image from 'next/image'
import { useState } from 'react'

const SkillDeux = () => {
    const [flipped, setFlipped] = useState(Array(10).fill(false));

    const handleFlip = (index) => {
        setFlipped(flipped.map((flip, i) => i === index ? !flip : flip));
    }

    const skills = [
        { name: 'html', src: '/html.svg', description: 'Maîtrise 80%' },
        { name: 'css', src: '/css.svg', description: 'Maîtrise 70%' },
        { name: 'javascript', src: '/js.svg', description: 'Maîtrise 60%' },
        { name: 'php', src: '/php.svg', description: 'Maîtrise 60%' },
        { name: 'react', src: '/react.svg', description: 'Maîtrise 60%' },
        { name: 'tailwind', src: '/tailwind.svg', description: 'Maîtrise 80%' },
        { name: 'nextjs', src: '/nextjs.svg', description: 'Maîtrise 70%' },
        { name: 'laravel', src: '/laravel.svg', description: 'Maîtrise 50%' },
        { name: 'svelte', src: '/svelte.svg', description: 'Maîtrise 60%' },
        { name: 'wordpress', src: '/wordpress.svg', description: 'Maîtrise 90%' },
    ];

    return (
        <div id="skills" className="mt-64 hidden lg:block">
            <h2 className="text-3xl font-bold mb-4 text-white">Skills</h2>
            <div className='grid grid-cols-3 gap-6 2xl:grid-cols-5 2xl:gap-6'>
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className={`card-container bg-white flex w-64 h-24 justify-center items-center rounded-lg font-semibold relative ${flipped[index] ? 'flip' : ''}`}
                        onMouseEnter={() => handleFlip(index)}
                        onMouseLeave={() => handleFlip(index)}
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
        </div>
    );
};

export default SkillDeux;


