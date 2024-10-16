"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"; 

const ProjectCard = ({ title, second, backgroundImage, link }) => (
  <Link href={link}> 
    <div id="project" className="relative w-full h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out filter blur-sm group-hover:blur-none"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 z-20">
        <h2 className="text-white text-4xl font-bold text-center">{title}</h2>
        <h2 className="text-white text-2xl font-bold text-center mt-2">{second}</h2>
      </div>

    </div>

  </Link>
);

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("dev");
  const projectRefs = useRef({});

  useEffect(() => {
    const devSection = projectRefs.current["dev"];
    if (devSection) {
      const rect = devSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setActiveCategory("dev");
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            category: entry.target.getAttribute("data-category"),
            intersectionRatio: entry.intersectionRatio,
          }));

        if (visibleSections.length > 0) {
          visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveCategory(visibleSections[0].category);
        }
      },
      { threshold: 0.5 }
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
    <div className="flex flex-col mt-12 text-black" id="projects">


      <div className="w-full flex flex-col p-6 overflow-y-auto">
        <div
          ref={(el) => (projectRefs.current["dev"] = el)}
          data-category="dev"
          className="min-auto"
        >
          <ProjectCard title="Générateur de tablature" second="VueJS" backgroundImage="/tablature.png" link="https://tabs-creator-six.vercel.app/" />
          <ProjectCard title="Site vitrine restaurant" second="NextJS / React" backgroundImage="/acacia.png" link="https://www.acaciaenprovence.fr/" />
          <ProjectCard title="Pentes en Scène" second="Wordpress" backgroundImage="/pente.png" link="https://ariella-lekogoyolla.mds-lyon.yt/" />
        </div>

        <div
          ref={(el) => (projectRefs.current["graphisme"] = el)}
          data-category="graphisme"
          className="min-auto"
        >
          <ProjectCard title="Bouchon des filles" second="Créa" backgroundImage="/verre.png" link="/bouchondesfilles" />
          <ProjectCard title="3D poster concept" second="Créa" backgroundImage="/borntorave.png" link="/poster" />
          <ProjectCard title="Cover Concept" second="Créa" backgroundImage="/laylow.png" link="/cover" />
        </div>


        <div
          ref={(el) => (projectRefs.current["ui"] = el)}
          data-category="ui"
          className="min-auto"
        >
          <ProjectCard title="Square Agency" second="UI/UX" backgroundImage="/webagency.png" link="/squareagency" />
        </div>
      </div>
    </div>
  );
};

export default Project;
