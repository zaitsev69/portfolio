"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ title, techno, date, shortDescription, detailedDescription, image, link, inView, index, onImageClick }) => (
  <motion.div
    className="group bg-black w-full border-4 border-white max-w-full mx-auto rounded-lg p-6 cursor-pointer flex justify-between items-center mb-6 transition-all duration-500 overflow-hidden transform"
    initial={{ opacity: 0, y: 50 }}  // Modifié à y: 50 pour une montée plus douce
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}  // Ajustement de y
    transition={{
      duration: 0.5,  // Durée plus longue pour la fluidité
      ease: "easeInOut",  // Utilisation d'une courbe d'accélération plus douce
    }}
    whileHover={{ scale: 1.05 }}  
    onClick={() => window.open(link, '_blank')}
  >
    <motion.div
      className="flex flex-col justify-start w-1/2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
    >
      <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
      <h4 className="text-md text-white font-semibold mb-2">{techno}</h4>
      <p className="italic text-white text-sm mb-4">{date}</p>
      <p className="italic text-white">{shortDescription}</p>
      <div className="mt-4">
        <p className="text-white">{detailedDescription}</p>
      </div>
    </motion.div>

    <motion.div
      className="w-1/2 h-auto"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
    >
      <Image 
        src={image} 
        width={800} 
        height={600} 
        alt="Project image" 
        className="object-cover w-full h-full rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
          onImageClick(image);
        }}
      />
    </motion.div>
  </motion.div>
);

const Project = () => {
  const [inView, setInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
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
  }, [activeCategory]);


  const projects = {
    dev: [
      {
        title: "Générateur de tablature",
        techno: "Vue.js",
        date: "Septembre 2024",
        shortDescription: "Projet personnel d'un créateur de tablature (partitions) de guitare.",
        detailedDescription: `
          Dans le cadre d'un projet personnel, j'ai conçu une application web dédiée à la création de tablatures (partitions) pour guitare. J'ai choisi d'utiliser VueJS pour garantir une interface utilisateur fluide et réactive. Ce générateur innovant permet aux musiciens de composer et d'éditer leurs propres tablatures avec une grande simplicité et intuitivité. L'application offre offre également des fonctionnalités d'exportation, permettant aux utilisateurs de sauvegarder leurs créations au format PDF ou en texte, facilitant ainsi le partage et l'impression des partitions.


        `,
        image: "/tablature.png",
        link: "https://tabs-creator-six.vercel.app/",
      },
      {
        title: "Mon portfolio",
        techno: "Next.js",
        date: "Juillet 2024",
        shortDescription: "Mon portfolio personnel créé avec Next.js.",
        detailedDescription: `
          J’ai construit ce portfolio en m’appuyant sur une maquette précédemment réalisée sur Figma. J'ai utilisé Next.js pour offrir une expérience utilisateur fluide et rapide. Le site met en valeur mes projets et mes compétences, permettant ainsi de présenter efficacement mon travail et mes réalisations dans le domaine du web design, du graphisme et du développement front. 

 
        `,
        image: "/portfolio.png",
        link: "https://github.com/zaitsev69/portfolio",
      },
      {
        title: "Site vitrine restaurant",
        techno: "Next.js",
        date: "Juin 2024",
        shortDescription: "Site vitrine pour un restaurant avec un système de réservation.",
        detailedDescription: `
          J'ai eu l'opportunité de concevoir et développer entièrement le site vitrine du restaurant "L'Acacia en Provence", un établissement gastronomique niché au cœur de la Provence. Ce projet m'a permis d'explorer et de mettre en avant mes compétences aussi bien en design qu'en développement, tout en restant fidèle à l'identité unique de l'établissement. 

J'ai commencé par créer le logo du restaurant, en m'inspirant de l’ambiance du lieu. Ce logo incarne à la fois la simplicité et le raffinement, des valeurs qui se reflètent également dans l'expérience offerte par "L'Acacia en Provence". Ensuite, j'ai pris en charge l'intégralité de la conception de l'interface utilisateur (UI) et de l'expérience utilisateur (UX) du site, avec une attention particulière portée à la fluidité de la navigation et à l'esthétique. Mon objectif était de rendre la découverte du restaurant intuitive et agréable pour chaque visiteur, tout en intégrant des fonctionnalités essentielles telles que la consultation des menus et la réservation en ligne. 

En parallèle, j'ai assuré le développement du site en adoptant des technologies modernes pour garantir une navigation rapide, fluide et optimisée sur tous les appareils, avec un design responsive. Le site a été pensée pour refléter l’atmosphère chaleureuse du restaurant, tout en mettant en avant sa cuisine d’exception à travers des visuels immersifs et une mise en page soignée. 
        `,
        image: "/acacia.png",
        link: "https://www.acaciaenprovence.fr/",
      },
      {
        title: "Pentes en Scène",
        techno: "Wordpress",
        date: "Mai 2024",
        shortDescription: "Site vitrine pour un restaurant avec un système de réservation.",
        detailedDescription: `
          Dans le cadre d'un projet d'étude, nous avons créé un site WordPress fictif dédié à la présentation du festival pop "Pente en Scène", qui se tiendra à Lyon.  

Pour cette réalisation, j'ai conçu la page d'accueil du site, en mettant en avant l'identité visuelle du festival à travers un design dynamique et coloré. En parallèle, j'ai développé l'ensemble de la direction artistique, incluant logos, visuels des tickets, présentation des artistes afin d'assurer une cohérence esthétique et fonctionnelle sur l'ensemble du site. 

L'objectif de ce site est de transmettre l'esprit du festival, d'informer le public sur la programmation et de créer une communauté autour de cet événement culturel incontournable. 
  
        `,
        image: "/pente.png",
        link: "https://ariella-lekogoyolla.mds-lyon.yt/",
      },
    ],
    graphisme: [
      {
        title: "Bouchon des filles",
        techno: "Photoshop",
        date: "Mars 2024",
        shortDescription: "Bouchon des filles",
        detailedDescription: `
          Cette affiche a été conçue pour un concert de musique rock, en utilisant Photoshop pour créer un design attractif et impactant. 
        `,
        image: "/concert.jpg",
        link: "/bouchondesfilles", 
      }
    ],
    ui: [
      {
        title: "UI Kit pour une application mobile",
        techno: "Figma",
        date: "Mai 2024",
        shortDescription: "Kit d'interface utilisateur pour une application de gestion.",
        detailedDescription: `
          Développement d'un UI Kit complet pour une application mobile, incluant des composants interactifs et des éléments de navigation moderne.
        `,
        image: "/ui-kit.jpg",
        link: "https://fakeuikitlink.com",  // Faux lien inventé
      }
    ],
  };

  
  const toggleCategory = (category) => {
    setInView(false);  // Réinitialiser inView lors du changement de catégorie
    setActiveCategory(category);
  };

  return (
    <div className="mt-64 text-black" id="projects" ref={ref}>
      <div className="text-center mb-8 sticky top-5 z-50 flex gap-4 justify-center">
        <motion.button
          className={` px-4 py-2 rounded-lg ${activeCategory === 'dev' ? 'bg-black border-2 border-white text-white' : 'bg-white text-black'}`}
          onClick={() => toggleCategory('dev')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Dev Projects
        </motion.button>
        <motion.button
          className={`px-4 py-2 rounded-lg ${activeCategory === 'graphisme' ? 'bg-black border-2 border-white text-white' : 'bg-white text-black'}`}
          onClick={() => toggleCategory('graphisme')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Graphisme
        </motion.button>
        <motion.button
          className={`px-4 py-2 rounded-lg ${activeCategory === 'ui' ? 'bg-black border-2 border-white text-white' : 'bg-white text-black'}`}
          onClick={() => toggleCategory('ui')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          UI Projects
        </motion.button>
      </div>

      {activeCategory === null ? (
        <div className="text-center text-white">
          <p>Veuillez sélectionner une catégorie pour afficher les projets.</p>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            key={activeCategory}
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 50 }}  // Départ plus bas pour l'animation globale
            animate={{ opacity: 1, y: 0 }}  // Montée plus fluide
            exit={{ opacity: 0, y: 50 }}  // Retour en douceur
            transition={{ duration: 0.6, ease: "easeInOut" }}  // Transition plus longue et plus fluide
          >
            {projects[activeCategory].map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                techno={project.techno}
                date={project.date}
                shortDescription={project.shortDescription}
                detailedDescription={project.detailedDescription}
                image={project.image}
                link={project.link}
                inView={inView}
                index={index}
                onImageClick={setSelectedImage}  
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <Image 
            src={selectedImage} 
            width={1200} 
            height={900} 
            alt="Full screen image"
            className="object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Project;