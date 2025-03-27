"use client"
import Image from "next/image";
import CircleCursor from '../components/cursor'
import StickyButton from '../components/bouton'
import LinkPreview from "../components/LinkPreview";
import Link from "next/link";
export default function LiveCulture() {
    return (

        <div className="min-h-screen text-white">
            <CircleCursor />
            <StickyButton />
            <div className="container mx-auto px-6 py-12">
                {/* Petite description */}
                <section className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">Live Culture</h1>
                    <p className="text-lg">
                        Live Culture est un site Wordpress qui mettra en avant des évènement musicaux et artistiques dans toute la France.
                    </p>
                </section>

                {/* Présentation de la maquette */}
                <section className="bg-white rounded-2xl shadow-md p-6 mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Consultez la maquette Figma</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                        <LinkPreview url="https://www.figma.com/design/yl6I78rryPgQtPoojMfcRg/Maquettes-Live-Culture?node-id=0-1&t=8OpfzAYRpcoObfr1-1" />
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg">
                                La maquette de Live Culture illustre une interface intuitive,
                                avec un design assez chargé et artistique pour correspondre à son contenu. Mais avec
                                une navigation fluide et une organisation claire des
                                contenus.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-center py-12 bg-gray-200 rounded-2xl">
                <p className="text-black mb-4">Le site utilise des champs ACF pour l'affichage des événements. Étant un projet fictif, toutes les pages n'ont pas été développées.</p>
                    <Link href="https://nathan-cadilhac.mds-lyon.yt/cmsmodule/" target="_blank">
      <div className="relative inline-flex items-center px-6 py-3 text-white bg-black border border-white rounded-full group hover:bg-white hover:text-black transition duration-300 ease-in-out">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r  to-black opacity-50 group-hover:opacity-0 transition duration-300"></span>
        <span className="relative z-10 font-semibold tracking-wide uppercase">
        Visiter Live Culture 🤘
        </span>
      </div>
    </Link>
                </section>
            </div>
        </div>
    );
}