"use client"
import Image from "next/image";
import CircleCursor from '../components/cursor'
import StickyButton from '../components/bouton'
import LinkPreview from "../components/LinkPreview";

const acacia = () => {
    return (
        <div>
            <CircleCursor />
            <StickyButton />
            <div className="mx-24 2xl:mx-48 scroll-smooth flex justify-between items-center mt-10 ">
                <div className="w-1/2 pr-8">
                    <p className='text-white text-3xl'>
                        Réalisation du logo, de la charte graphique ainsi que la conception et le développement d'un site pour un restaurant L&apos;acacia en provence.
                    </p>
                    <p className="text-cyan-400 underline text-2xl mt-4"><a href="" target="_blank">Consultez le site</a></p>
                    <p className='text-white text mt-2'>
                        Travaux réalisés dans le cadre d'un stage d&apos;une durée de 2 mois.
                    </p>
                </div>
                <div className="">
                    <Image
                        src="/logoacacia.png"
                        width={2728}
                        height={972}
                        alt="Picture of the author"
                        className="w-auto h-80"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row h-screen mx-24 mt-24 items-center">
                <Image
                    src="/acacia2.jpg"
                    width={6000}
                    height={5000}
                    alt="Picture of the author"
                    className="h-auto max-w-[60%] lg:max-w-[60%] w-full"
                />
                <p className="text-white lg:mx-16 flex items-center flex-1">
                    L’acacia en Provence est un restaurant semi-gastronomique situé à la Roque-Alric à proximité du mont Ventoux. Il existe depuis environ 20 ans.
                    Il propose de la nourriture de qualité façonnée à partir de produit bio et cuisinée par une cheffe d'origine Indonésienne Hollandaise. Elle propose un menu semi-gastronomique le week-end, et en semaine du snacking à la carte. Le restaurant fait aussi bar étant situé dans une zone très touristique, de nombreux cyclistes et promeneurs apprécient y prendre une boisson fraîche.
                </p>
            </div>

            <p className='text-white mx-24 lg:mx-48 bg-guillemet bg-no-repeat bg-left bg-scroll bg-[length:50px] max-w-2xl pt-12 pl-24 pb-8 text-left'>
                Lorsque que je suis arrivé au restaurant, il n’avait pas d’identité vraiment définie. Pas de logo, pas de couleurs précises ni de typographies. Par contre le restaurant en lui-même avait une atmosphère particulière plutôt chaleureuse et familiale, je m’en suis donc inspiré pour le branding du restaurant.
            </p>
            <div className="flex flex-col lg:flex-row h-screen mx-24">
                <div className="relative w-full max-w-full h-full">
                    <Image
                        src="/moodboard.png"
                        alt="Picture of the author"
                        width={5000}
                        height={3334}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                    />
                </div>
            </div>




            <div className="mt-24 mx-24 flex items-center justify-between">
                <div className="text-left w-1/2">
                    <p className="text-white text-2xl">Maquettes</p>
                    <p className="text-white mb-4">
                        J'ai créé deux maquettes afin dans un premier temps de valider le design par mes responsables et dans un second temps pour m'appuyer dessus durant le développement.
                    </p>
                    <p>Cliquez sur l'image de droite </p>
                </div>
                <div className="w-1/2">
                    <LinkPreview url="https://www.figma.com/design/kuigoW2qmnAdLYspej4XWX/Maquette-Acacia-en-Provence?node-id=0-1&p=f&t=SqUHaTPYzbyOH938-0" />
                </div>
            </div>


        </div>

    );
};

export default acacia;
