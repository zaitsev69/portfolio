"use client"
import Image from "next/image";
import CircleCursor from '../components/cursor'
import StickyButton from '../components/bouton'
import LinkPreview from "../components/LinkPreview";

export default function Nasser() {
    return (

        <div className="min-h-screen text-white">
            <CircleCursor />
            <StickyButton />
            <div className="container mx-auto px-6 py-12">
                {/* Description */}
                <section className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">Refonte du site web de Nasser</h1>
                    <p className="text-lg text-gray-600">
                        Découvrez la refonte complète du site web de Nasser, pensée pour offrir
                        une expérience moderne, élégante et intuitive.
                    </p>
                </section>

                {/* Section Maquette */}
                <section className="bg-white rounded-2xl shadow-md p-6 mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Maquette</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <LinkPreview url="https://www.figma.com/design/ps8FbBBu2OAq6JeEXBkDQS/Maquette-Nasser?node-id=0-1&t=lpqjpskaz5XudWQ7-1" />
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg">
                                La nouvelle maquette offre un design épuré, moderne et parfaitement
                                adapté aux besoins de Nasser. L'accent est mis sur une navigation
                                fluide et un visuel attrayant pour améliorer l'expérience utilisateur.
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