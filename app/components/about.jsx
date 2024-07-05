import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="text-white flex justify-between items-center mt-64 ">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-4">Qui suis-je ?</h2>
                <p className="mb-2 text-lg highlight-text">Actuellement en deuxième année de formation en développement web à MyDigitalSchool et passionné par le monde du développement 👨‍💻</p>
                <p className="mb-2 text-lg highlight-text">Mon parcours et mes projets personnels m&apos;ont permis de me familiariser avec diverses technologies et frameworks modernes comme Next.js, React, Laravel et Svelte. En plus de mes compétences en développement front-end et back-end, je maîtrise les langages et technologies essentiels tels que HTML, CSS, Tailwind, PHP et MySQL. J&apos;essaye de créer et de développer des applications web performantes et modernes.</p>
                <p className="mb-2 text-lg highlight-text">À côté de ça, je fais de la guitare électrique, de l&apos;escalade (le sport en général), et j&apos;aime aussi tout ce qui est lié à l&apos;image 🎥</p>
            </div>

            <Image
                className="rounded-lg color hover:grow"
                src="/large.JPEG"
                alt="Picture of the author"
                width={600}
                height={500}
            />
        </div>

    );
};
export default About;