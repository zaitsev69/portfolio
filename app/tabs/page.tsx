"use client"
import Image from "next/image";
import CircleCursor from '../components/cursor'
import StickyButton from '../components/bouton'

export default function mac() {
    return (
        <div className="min-h-screen text-white font-helvetica flex justify-center">
            <CircleCursor />
            <StickyButton />

            <section className="py-20 px-10 text-center">
                <h1 className="text-4xl font-bold mb-4">Tabs Generator</h1>
                <p className="text-xl mb-6">Passionné par la guitare, j'ai développé un site appelé "Tabs Generator", un outil intuitif permettant de créer des tablatures de guitare facilement. Ce projet reflète mon amour pour la musique et ma volonté de rendre la composition et l'apprentissage de la guitare plus accessibles.</p>
                <p className="text-lg mb-6">Avec "Tabs Generator", les utilisateurs peuvent générer des tablatures de manière simple et rapide, en choisissant des notes et en les ajustant à leur convenance. Il est conçu pour les guitaristes de tous niveaux, qu'ils soient débutants ou confirmés, et offre une expérience fluide et agréable.</p>
                <p className="text-lg">Développé par mes soins en VueJS, je vous invite à découvrir le projet et commencez à créer vos propres tablatures directement sur le site !</p>
                {/* Call to action */}
                <a
                    href="https://tabs-creator-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all hover:bg-blue-700"
                >
                    Créez vos tablatures !
                </a>
                <div className="my-10">
                    <Image
                        src="/tablature2.jpg"
                        alt="Image de la tablature"
                        width={1920}
                        height={1080}
                        className="w-full object-contain"
                    />
                </div>


            </section>
        </div>
    );
}
