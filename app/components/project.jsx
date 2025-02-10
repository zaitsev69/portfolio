"use client";
import React, { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ title, second, backgroundImage, link }) => (
  <Link href={link}>
    <div
      id="project"
      className="relative w-full h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out filter blur-sm group-hover:blur-none"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute font-helvetica inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 z-20">
        <h2 className="text-white text-4xl font-bold text-center">{title}</h2>
        <h2 className="text-white text-2xl font-bold text-center mt-2">{second}</h2>
      </div>
    </div>
  </Link>
);

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Liste des projets avec leurs dates et catégories multiples ATTENTION FORMAT DATE AA/MM/JJ
  const projects = [
    {
      title: "Générateur de tablature",
      second: "VueJS",
      backgroundImage: "/tablature.png",
      link: "https://tabs-creator-six.vercel.app/",
      category: ["developpement"],
      date: "2024-11-02",
    },
    {
      title: "Site vitrine restaurant",
      second: "NextJS / React",
      backgroundImage: "/acacia.png",
      link: "/acaciaenprovence",
      category: ["developpement","ui ux"],
      date: "2024-08-10",
    },
    {
      title: "Pentes en Scène",
      second: "UI UX / Wordpress",
      backgroundImage: "/pente.png",
      link: "https://ariella-lekogoyolla.mds-lyon.yt/",
      category: ["developpement", "ui ux"],
      date: "2023-02-03",
    },
    {
      title: "Bouchon des filles",
      second: "Création graphique",
      backgroundImage: "/verre.png",
      link: "/bouchondesfilles",
      category: ["création graphique"],
      date: "2024-03-05",
    },
    {
      title: "3D poster concept",
      second: "Création graphique",
      backgroundImage: "/borntorave.png",
      link: "/poster",
      category: ["création graphique"],
      date: "2023-11-23",
    },
    {
      title: "Cover Concept",
      second: "Création graphique",
      backgroundImage: "/laylow.png",
      link: "/cover",
      category: ["création graphique"],
      date: "2022-09-01",
    },
    {
      title: "Square Agency",
      second: "UI UX",
      backgroundImage: "/webagency.png",
      link: "/squareagency",
      category: ["ui ux"],
      date: "2023-01-01",
    },
    {
      title: "Landing Page - I ♥ Amsterdam",
      second: "UI UX",
      backgroundImage: "/amsterdam.jpg",
      link: "/",
      category: ["ui ux"],
      date: "2024-11-13",
    },
    {
      title: "Live Culture",
      second: "UI UX / Wordpress",
      backgroundImage: "/liveculture.jpg",
      link: "/",
      category: ["ui ux","developpement"],
      date: "2025-02-10",
    },
    {
      title: "Refonte Mac Lyon",
      second: "UI UX",
      backgroundImage: "/mac.jpg",
      link: "/",
      category: ["ui ux"],
      date: "2024-10-22",
    },
    {
      title: "Landing page Nasser",
      second: "UI UX",
      backgroundImage: "/nasser.jpg",
      link: "/",
      category: ["ui ux"],
      date: "2025-01-08",
    },
    {
      title: "Bardin Consulting",
      second: "Création graphique",
      backgroundImage: "/bardin.png",
      link: "/",
      category: ["création graphique"],
      date: "2023-08-01",
    },
  ];

  // Trier les projets par date (plus récent en premier)
  const sortedProjects = projects.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filtrer les projets par catégorie active
  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <div className="flex flex-col mt-12 text-black" id="projects">
      {/* Boutons de filtre */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeCategory === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Tout
        </button>
        <button
          onClick={() => setActiveCategory("developpement")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeCategory === "developpement"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Développement
        </button>
        <button
          onClick={() => setActiveCategory("création graphique")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeCategory === "création graphique"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Création Graphique
        </button>
        <button
          onClick={() => setActiveCategory("ui ux")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeCategory === "ui ux"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          UI/UX
        </button>
      </div>

      {/* Liste des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            second={project.second}
            backgroundImage={project.backgroundImage}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
