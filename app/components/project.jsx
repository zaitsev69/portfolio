"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, date, description, url, inView }) => (
  <motion.div
    className="bg-white w-80 h-80 rounded-lg p-3 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    onClick={() => window.open(url, '_blank')}
  >
    <div className='flex justify-between'>
      <Image src="/folder.svg" width={60} height={60} alt="Folder Icon" />
      <Image src="/github.svg" width={60} height={60} alt="GitHub Icon" />
    </div>
    <div className='flex-col'>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='italic'>{date}</p>
      <p className='text-lg mt-4'>{description}</p>
    </div>
  </motion.div>
);

const Project = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Ce site - NextJs",
      date: "Juillet 2024",
      description: "Suite à mon ancien portfolio qui avait été créé en HTML/CSS/JS j'ai décidé d'en faire un nouveau. J'ai d'abord réaliser une maquette sur Figma avant de la développer en NextJs.",
      url: "https://github.com/zaitsev69/portfolio"
    },
    {
      title: "Site vitrine restaurant - NextJS",
      date: "Juin 2024",
      description: "Système de réservation en ligne via un formulaire, gestion des menus via un backoffice. Je me suis appuyé sur la bibliothèque React.",
      url: "https://github.com/zaitsev69/acacia"
    },
    {
      title: "Application reporting incident - Laravel",
      date: "Avril 2024",
      description: "Entrée de données sur un formulaire, système de validation et d’édition via une interface administrateur sécurisé puis restitution en front.",
      url: "https://github.com/zaitsev69/FFS"
    },
    {
      title: "Cookie Clicker - HTML/CSS/JS",
      date: "Avril 2023",
      description: "Réalisation d'un cookie clicker pour appréhender les concepts clé de JavaScript tel que les boucles, les objets, les fonctions...",
      url: "https://github.com/zaitsev69/cookieclicker"
    }
  ];

  return (
    <div className="mt-64 hidden lg:block" id="projects" ref={ref}>
      <h2 className="text-3xl font-bold mb-4 text-white">Mes projets</h2>
      <div className='grid grid-cols-4 items-center'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            url={project.url}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
