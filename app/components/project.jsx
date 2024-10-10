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
  const menuRef = useRef(null);

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
      },
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
        <div ref={menuRef} className="flex flex-col gap-4 text-white">
          <button 
            className={`${activeCategory === 'dev' ? 'bg-white text-black' : 'text-white'} py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`} 
            onClick={() => projectRefs.current['dev'].scrollIntoView({ behavior: 'smooth' })}
          >
            Dev Projects
          </button>
          <button 
            className={`${activeCategory === 'graphisme' ? 'bg-white text-black' : 'text-white'} py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`} 
            onClick={() => projectRefs.current['graphisme'].scrollIntoView({ behavior: 'smooth' })}
          >
            Graphisme
          </button>
          <button 
            className={`${activeCategory === 'ui' ? 'bg-white text-black' : 'text-white'} py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`} 
            onClick={() => projectRefs.current['ui'].scrollIntoView({ behavior: 'smooth' })}
          >
            UI Projects
          </button>
        </div>
      </div>

      {/* Projets à droite */}
      <div className="w-11/12 flex flex-col gap-8 p-6 overflow-y-auto">
        <div 
          ref={(el) => (projectRefs.current['dev'] = el)} 
          data-category="dev" 
          className="min-h-screen"  // S'assurer que la section est assez grande pour l'observer
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
          className="min-h-screen"  // S'assurer que la section est assez grande pour l'observer
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
          className="min-h-screen"  // S'assurer que la section est assez grande pour l'observer
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
