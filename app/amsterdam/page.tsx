"use client";
import { useState } from "react";
import Image from "next/image";
import CircleCursor from '../components/cursor';
import StickyButton from '../components/bouton';
import LinkPreview from "../components/LinkPreview";

const Amsterdam = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <CircleCursor />
            <StickyButton />
            <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
                <h1 className="text-4xl font-bold mb-8">Refonte de I ♥ Amsterdam</h1>
                <p className="text-lg text-gray-300 max-w-4xl text-center mb-8">
                    Ce projet vise à repenser la landing page du site <strong>I ❤️ Amsterdam</strong> afin d'optimiser son UX/UI, 
                    améliorer sa visibilité et offrir une meilleure expérience utilisateur. L'objectif est de moderniser le design 
                    tout en rendant la navigation plus intuitive et engageante.
                </p>
                
                <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center">
                    {/* Avant refonte */}
                    <div className="space-y-4 w-full">
                        <h2 className="text-2xl font-semibold">Avant Refonte</h2>
                        <h2 className="">Cliquez pour agrandir</h2>
                        
                        <div className="relative w-full h-[1000px] rounded-lg overflow-hidden" onClick={() => setIsModalOpen(true)}>
                            <Image 
                                src="/siteamsterdam.png" 
                                alt="Capture d'écran avant refonte" 
                                layout="fill" 
                                objectFit="cover" 
                            />
                        </div>
                    </div>

                    {/* Après refonte */}
                    <div className="space-y-4 w-full">
                        <h2 className="text-2xl font-semibold">Après Refonte</h2>
                        <div className="relative w-full bg-gray-300 rounded-lg overflow-hidden">
                            <LinkPreview url="https://www.figma.com/design/im87HTm7xgevNLIZCsj1rS/I-%3C3-Amsterdam?node-id=0-1&t=DeamahqzxWHeOzly-1" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal d'affichage en grand avec scroll vertical et contour visible agrandi */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-8" onClick={() => setIsModalOpen(false)}>
                    <div className="relative max-w-6xl w-full bg-gray-900 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[95vh]">
                        <div className="relative w-full">
                            <Image 
                                src="/siteamsterdam.png" 
                                alt="Capture d'écran avant refonte" 
                                width={1920} 
                                height={3000} 
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Amsterdam;
