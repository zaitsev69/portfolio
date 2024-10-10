"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, techno, date, shortDescription, detailedDescription, image, link }) => (
  <div className="group bg-black w-full border-4 border-white max-w-full mx-auto rounded-lg p-6 mb-6 flex">
    {/* Section Texte à gauche */}
    <div className="w-1/2 pr-6 flex flex-col justify-start">
      <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
      <h4 className="text-md text-white font-semibold mb-2">{techno}</h4>
      <p className="italic text-white text-sm mb-4">{date}</p>
      <p className="italic text-white">{shortDescription}</p>
      <div className="mt-4">
        <p className="text-white">{detailedDescription}</p>
      </div>
    </div>

    {/* Section Image à droite */}
    <div className="w-1/2 overflow-hidden rounded-lg">
      <Image 
        src={image} 
        width={800} 
        height={600} 
        alt="Project image" 
        className="object-cover w-[150%] h-full transform translate-x-[-25%] rounded-lg"
      />
    </div>
  </div>
);

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('dev');
  const projectRefs = useRef({});  // Storing refs for each category

  const projects = {
    dev: [
      {
        title: "Générateur de tablature",
        techno: "Vue.js",
        date: "Septembre 2024",
        shortDescription: "Projet personnel d'un créateur de tablature (partitions) de guitare.",
        detailedDescription: `
          Dans le cadre d'un projet personnel, j'ai conçu une application web dédiée à la création de tablatures (partitions) pour guitare.
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
         Le site met en valeur mes projets et mes compétences, permettant ainsi de présenter efficacement mon travail et mes réalisations dans le domaine du web design, du graphisme et du développement front. 
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
J'ai réalisé la DA et développé le site vitrine du restaurant L'Acacia en Provence, mettant en valeur mes compétences en design et développement tout en respectant l'identité de l'établissement. 
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
          Dans le cadre d'un projet d'étude, nous avons créé l'indentité et un site WordPress fictif dédié à la présentation du festival pop "Pente en Scène", qui se tiendra à Lyon.  
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
      },
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

  useEffect(() => {
    // Vérifier si la section "dev" est visible au chargement de la page
    const devSection = projectRefs.current['dev'];
    if (devSection) {
      const rect = devSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setActiveCategory('dev');
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            category: entry.target.getAttribute('data-category'),
            intersectionRatio: entry.intersectionRatio
          }));

        if (visibleSections.length > 0) {
          // Trier les sections visibles par leur ratio de visibilité pour activer celle la plus visible
          visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveCategory(visibleSections[0].category);
        }
      },
      { threshold: 0.5 } // On active l'observateur dès qu'une petite partie de la section est visible
    );

    Object.keys(projectRefs.current).forEach((key) => {
      if (projectRefs.current[key]) {
        observer.observe(projectRefs.current[key]);
      }
    });

    return () => {
      Object.keys(projectRefs.current).forEach((key) => {
        if (projectRefs.current[key]) {
          observer.unobserve(projectRefs.current[key]);
        }
      });
    };
  }, []);

  return (
    <div className="flex mt-64 text-black" id="projects">
      {/* Menu Vertical à gauche */}
      <div className="w-1/4 sticky top-5 h-screen bg-black p-6">
        <div className="flex flex-col gap-4 text-white">
          <button 
            className={`${activeCategory === 'dev' ? 'bg-white text-black' : 'text-white'} py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`} 
            onClick={() => {
              setActiveCategory('dev');
              projectRefs.current['dev'].scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Dev Projects
          </button>
          <button 
            className={`${activeCategory === 'graphisme' ? 'bg-white text-black' : 'text-white'} py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`} 
            onClick={() => {
              setActiveCategory('graphisme');
              projectRefs.current['graphisme'].scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Graphisme
          </button>
          <button 
            className={`${activeCategory === 'ui' ? 'bg-white text-black' : 'text-white'} py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`} 
            onClick={() => {
              setActiveCategory('ui');
              projectRefs.current['ui'].scrollIntoView({ behavior: 'smooth' });
            }}
          >
            UI Projects
          </button>
        </div>
      </div>

      {/* Projets à droite */}
      <div className="w-11/12 flex flex-col  p-6 overflow-y-auto">
        <div 
          ref={(el) => (projectRefs.current['dev'] = el)} 
          data-category="dev" 
          className="min-auto"  // S'assurer que la section est assez grande pour l'observer
        >
          {projects.dev.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              onHover={() => setActiveCategory('dev')}  // Survoler un projet dev déclenche ceci
            />
          ))}
        </div>
        <div 
          ref={(el) => (projectRefs.current['graphisme'] = el)} 
          data-category="graphisme" 
          className=""  // S'assurer que la section est assez grande pour l'observer
        >
          {projects.graphisme.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              onHover={() => setActiveCategory('graphisme')}  // Survoler un projet graphisme
            />
          ))}
        </div>
        <div 
          ref={(el) => (projectRefs.current['ui'] = el)} 
          data-category="ui" 
          className=""  // S'assurer que la section est assez grande pour l'observer
        >
          {projects.ui.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              onHover={() => setActiveCategory('ui')}  // Survoler un projet UI
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
