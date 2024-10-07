"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, techno, date, shortDescription, detailedDescription, image, link, inView, index, onImageClick }) => (
  <motion.div
    className="group bg-white w-full max-w-full mx-auto rounded-lg p-6 cursor-pointer flex justify-between items-center mb-6 transition-all duration-500 overflow-hidden transform"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{
      duration: 0.1,
      ease: "easeInOut",
    }}
    whileHover={{ scale: 1.05 }}  
    onClick={() => window.open(link, '_blank')}  // Redirection au clic sur la carte
  >
    {/* Section de gauche - Titre, Techno, Date, et descriptions */}
    <motion.div
      className="flex flex-col justify-start w-1/2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <h4 className="text-md font-semibold mb-2">{techno}</h4>
      <p className="italic text-sm mb-4">{date}</p>

      {/* Texte court affiché en haut */}
      <p>{shortDescription}</p>

      {/* Texte détaillé affiché en dessous en permanence */}
      <div className="mt-4">
        <p>{detailedDescription}</p>
      </div>
    </motion.div>

    {/* Image à droite, clique pour affichage plein écran */}
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
          e.stopPropagation();  // Empêche la redirection lors du clic sur l'image
          onImageClick(image);
        }}
      />
    </motion.div>
  </motion.div>
);

const Project = () => {
  const [inView, setInView] = useState(false);
  const [isDevTabOpen, setIsDevTabOpen] = useState(true);  // Dev Projects par défaut
  const [activeCategory, setActiveCategory] = useState('dev'); // État pour la catégorie active
  const [selectedImage, setSelectedImage] = useState(null);  // Pour gérer l'affichage de l'image plein écran
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

  const projects = {
    dev: [
      {
        title: "Générateur de tablature",
        techno: "Vue.js",
        date: "Septembre 2024",
        shortDescription: "Projet personnel d'un créateur de tablature (partitions) de guitare.",
        detailedDescription: `
          Dans le cadre d'un projet personnel, j'ai développé une application web dédiée à la création de tablatures (partitions) pour guitare, en utilisant VueJS pour une interface utilisateur fluide et réactive.
          Ce générateur permet aux musiciens de composer et d'éditer leurs propres tablatures en toute simplicité. L'application inclut également des fonctionnalités d'exportation.
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
          Ce portfolio a été conçu dans le cadre de ma formation en développement web. J'ai utilisé Next.js pour créer une expérience utilisateur fluide et rapide. Le site présente mes projets, mes compétences.
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
          J'ai développé ce site vitrine pour un restaurant en utilisant Next.js, en mettant l'accent sur le design et l'expérience utilisateur. Le site comprend un système de réservation en ligne.
        `,
        image: "/acacia.png",
        link: "https://www.acaciaenprovence.fr/",
      },
    ],
    graphisme: [
      {
        title: "Affiche de concert",
        techno: "Photoshop",
        date: "Mars 2024",
        shortDescription: "Création d'une affiche pour un événement musical.",
        detailedDescription: `
          Cette affiche a été conçue pour un concert de musique rock, en utilisant Photoshop pour créer un design attractif et impactant. 
        `,
        image: "/concert.jpg",
        link: "https://fakeconcertlink.com",  // Faux lien inventé
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
    setActiveCategory(category);
  };

  return (
    <div className="mt-64 text-black" id="projects" ref={ref}>
      {/* Boutons de catégorie */}
      <div className="text-center mb-8 sticky top-0 z-50 flex gap-4 justify-center">
        <motion.button
          className={`text-white px-4 py-2 rounded-lg ${activeCategory === 'dev' ? 'bg-blue-600' : 'bg-gray-400'}`}
          onClick={() => toggleCategory('dev')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Dev Projects
        </motion.button>
        <motion.button
          className={`text-white px-4 py-2 rounded-lg ${activeCategory === 'graphisme' ? 'bg-blue-600' : 'bg-gray-400'}`}
          onClick={() => toggleCategory('graphisme')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Graphisme
        </motion.button>
        <motion.button
          className={`text-white px-4 py-2 rounded-lg ${activeCategory === 'ui' ? 'bg-blue-600' : 'bg-gray-400'}`}
          onClick={() => toggleCategory('ui')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          UI Projects
        </motion.button>
      </div>

      {/* Affichage des projets */}
      <AnimatePresence>
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
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
              onImageClick={setSelectedImage}  // Affichage plein écran de l'image
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Affichage plein écran de l'image */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}  // Fermer l'image plein écran au clic
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
