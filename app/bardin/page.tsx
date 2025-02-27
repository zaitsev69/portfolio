"use client";
import { useState } from "react";
import Image from "next/image";
import CircleCursor from '../components/cursor';
import StickyButton from '../components/bouton';

const Bardin = () => {
    return (
        <div className="p-8 font-helvetica text-white text-center mx-32 ">
            <CircleCursor />
            <StickyButton />

            {/* Titre et sous-titre */}
            <header className="text-center mb-16">
                <h1 className="text-5xl font-bold">Bardin Consulting</h1>
                <h2 className="text-xl mt-4">Refonte et création d'élèment graphique pour un organisme de formation en cyber sécurité dans le cadre d'un stage.</h2>
            </header>

            {/* Présentation entreprise et contexte */}
            <section className="mb-16">
                <h3 className="text-3xl font-semibold mb-4">Logo</h3>
                <p className="text-lg">
                    Création d'un nouveau logo pour la plateforme secondaire de l'entreprise dédiée à la formation.
                    Initialement, j'avais repris le thème du bouclier pour symboliser la cybersécurité. Cependant, après discussion avec mon responsable, il a été convenu d'orienter le visuel vers une représentation plus évocatrice de l'apprentissage. C'est ainsi que le logo en forme de livre a été choisi comme symbole principal de la plateforme.
                </p>
            </section>

            {/* Logos en 3 colonnes */}
            <section className="mb-16 grid grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <Image key={i} src={`/logos/logo${i}.png`} width={300} height={300} alt={`Logo ${i}`} className="w-full h-auto" />
                ))}
            </section>

            {/* Vidéo d'animation du logo */}
            <section className="mb-16">
                <p className="text-lg mb-4">Pour le logo de la plateforme principale, cette fois-ci, une animation réalisée sur After Effects m'a été demandée.
                    Elle sera utilisée en introduction des futures vidéos de l'entreprise. J'ai opté pour un design en néon afin d'évoquer le côté futuriste et digital de la cybersécurité.

                </p>
                <video controls className="w-full max-w-4xl mx-auto">
                    <source src="/videos/logo-animation.mp4" type="video/mp4" />
                </video>
            </section>


            {/* Grille 4x4 avec texte */}
            <section className="my-64">
                <h3 className="text-3xl font-semibold mb-4">Travaux d'illustration</h3>
                <p className="text-lg mb-4">Réalisation d'illustrations pour les logos des formations en informatique de Bardin Consulting.
                Je vous laisse associer chaque animal au logiciel correspondant ! Petit indice : le pingouin est pour Linux.

                </p>

                <div className="grid grid-cols-4 gap-4">
                    {[...Array(16)].map((_, i) => (
                        <Image key={i} src={`/grille/image${i + 1}.png`} width={200} height={200} alt={`Image ${i + 1}`} className="w-full h-auto" />
                    ))}
                </div>
            </section>

            {/* Posts Instagram */}
            <section className="mb-16">
                <h3 className="text-3xl font-semibold mb-4">Posts Instagram</h3>
                <p className="text-lg mb-4">Publications destinées aux réseaux sociaux de l'entreprise, visant à la fois à présenter les formations et à annoncer des événements particuliers. La direction artistique diffère de celle du site, car il a été décidé de conserver le template actuel sur Instagram.

                </p>
                <div className="grid grid-cols-3 gap-4">
                    {[...Array(12)].map((_, i) => (
                        <Image key={i} src={`/instagram/post${i + 1}.png`} width={300} height={300} alt={`Post ${i + 1}`} className="w-full h-auto" />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Bardin;
