"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ProjectCard = ({ title, backgroundImage }) => (
  <div className="relative w-full h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg group">
    {/* Image de fond avec flou par défaut et transition fluide */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out filter blur-sm group-hover:blur-none"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>

    {/* Titre centré qui n'est jamais affecté par le flou */}
    <div className="absolute inset-0  flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 z-20">
      <h2 className="text-white text-4xl font-bold text-center">{title}</h2>
    </div>
  </div>
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
      {/* Menu Horizontal en haut */}
      <div className="w-full bg-black p-6">
        <div className="flex gap-4 text-white justify-center">
          <button
            className={`${
              activeCategory === "dev" ? "bg-white text-black" : "text-white"
            } py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`}
            onClick={() => {
              setActiveCategory("dev");
              projectRefs.current["dev"].scrollIntoView({ behavior: "smooth" });
            }}
          >
            Dev Projects
          </button>
          <button
            className={`${
              activeCategory === "graphisme" ? "bg-white text-black" : "text-white"
            } py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`}
            onClick={() => {
              setActiveCategory("graphisme");
              projectRefs.current["graphisme"].scrollIntoView({ behavior: "smooth" });
            }}
          >
            Graphisme
          </button>
          <button
            className={`${
              activeCategory === "ui" ? "bg-white text-black" : "text-white"
            } py-4 px-6 text-xl font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black`}
            onClick={() => {
              setActiveCategory("ui");
              projectRefs.current["ui"].scrollIntoView({ behavior: "smooth" });
            }}
          >
            UI Projects
          </button>
        </div>
      </div>

      {/* Projets en dessous */}
      <div className="w-full flex flex-col p-6 overflow-y-auto">
        {/* Section Dev Projects */}
        <div
          ref={(el) => (projectRefs.current["dev"] = el)}
          data-category="dev"
          className="min-auto"
        >
          <ProjectCard title="Générateur de tablature" backgroundImage="/tablature.png" />
          <ProjectCard title="Site vitrine restaurant" backgroundImage="/acacia.png" />
          <ProjectCard title="Pentes en Scène" backgroundImage="/pente.png" />
        </div>

        {/* Section Graphisme */}
        <div
          ref={(el) => (projectRefs.current["graphisme"] = el)}
          data-category="graphisme"
          className="min-auto"
        >
          <ProjectCard title="Bouchon des filles" backgroundImage="/bouchon.png" />
          <ProjectCard title="3D poster concept" backgroundImage="/borntorave.png" />
          <ProjectCard title="Cover Concept" backgroundImage="/laylow.png" />
        </div>

        {/* Section UI Projects */}
        <div
          ref={(el) => (projectRefs.current["ui"] = el)}
          data-category="ui"
          className="min-auto"
        >
          <ProjectCard title="UI Kit pour une application mobile" backgroundImage="/ui-kit.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Project;
