"use client"
import Image from "next/image";
import CircleCursor from '../components/cursor'
import StickyButton from '../components/bouton'
import LinkPreview from "../components/LinkPreview";

export default function mac() {
    return (

        <div className="min-h-screen text-white">
            <CircleCursor />
            <StickyButton />
            <div className="container mx-auto px-6 py-12 font-helvetica">
                {/* Description */}
                <section className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">Refonte MAC Lyon</h1>
                    <p className="text-lg text-white">
                        Dans le cadre d'un projet scolaire, j'ai réalisé la refonte du site du musée d'art contemporain de Lyon.
                    </p>
                </section>

                {/* Section Maquette */}
                <section className="bg-white rounded-2xl shadow-md p-6 mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Maquette</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <LinkPreview url="https://www.figma.com/design/Fykyw9lR0xYw9IyGHRiRuT/Untitled?node-id=0-1&t=akAlqKPXlw7ZZpiu-1" />
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg">
                            Ce travail est le fruit de la collaboration d'un web designer et d'un graphiste. Le graphiste à conçu une nouvelle DA accompagné d'un logo. Je me suis occupé de l'UX/UI ainsi que de l'animation du logo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section Comparaison */}
                <section className="bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Ancien site de Nasser</h2>
                    <div className="text-center">
                        <img
                            src="/sitenasser.png"
                            alt="Ancien site de Nasser"
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>
                    <p className="text-gray-600 text-center mt-6">
                        L'ancien site de Nasser nous montre l'évolution remarquable du design et
                        des fonctionnalités grâce à cette refonte complète.
                    </p>
                </section>
            </div>
        </div>
    );
}