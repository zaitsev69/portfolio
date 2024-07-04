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
        { name: 'javascript', src: '/js.svg', description: 'A programming language commonly used in web development.' },
        { name: 'php', src: '/php.svg', description: 'A server scripting language used to make web pages interactive.' },
        { name: 'react', src: '/react.svg', description: 'A JavaScript library for building user interfaces.' },
        { name: 'tailwind', src: '/tailwind.svg', description: 'A utility-first CSS framework for rapid UI development.' },
        { name: 'nextjs', src: '/nextjs.svg', description: 'A React framework for server-rendered or statically-exported React applications.' },
        { name: 'laravel', src: '/laravel.svg', description: 'A PHP framework for web artisans.' },
        { name: 'svelte', src: '/svelte.svg', description: 'A JavaScript framework for building user interfaces.' },
        { name: 'wordpress', src: '/wordpress.svg', description: 'A content management system (CMS) for building websites and blogs.' },
    ];

    return (
        <div className="mt-64">
            <h2 className="text-3xl font-bold mb-4 text-white">Skills</h2>
            <div className='grid grid-cols-5 gap-6'>
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className={`card-container bg-white flex w-64 h-36 justify-center items-center rounded-lg font-semibold relative ${flipped[index] ? 'flip' : ''}`}
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


