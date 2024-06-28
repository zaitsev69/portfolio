import Image from "next/image";

const About = () => {
    return (
        <div className="text-white flex justify-between items-center mt-32">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-4">Qui suis-je ?</h2>
                <p className="mb-2">Actuellement en deuxième année de formation en développement web à MyDigitalSchool, je suis passionné par le monde du développement 👨‍💻</p>
                <p className="mb-2">Mon parcours et mes projets personnels m'ont permis de me familiariser avec diverses technologies et frameworks modernes comme Next.js, React, Laravel et Svelte. En plus de mes compétences en développement front-end et back-end, je maîtrise les langages et technologies essentiels tels que HTML, CSS, Tailwind, PHP et MySQL. Ces compétences me permettent de créer et développer des applications web performantes et modernes.</p>
                <p className="mb-2">Pour ma troisième année d'études, je suis à la recherche d'une opportunité d'alternance en tant que développeur web.</p>
                <p className="mb-2">Si vous recherchez un alternant motivé, passionné et sympa, contactez-moi 👋</p>
            </div>

            <Image
                className="rounded-lg"
                src="/large.JPEG"
                alt="Picture of the author"
                width={600}
                height={500}
            />
        </div>

    );
};
export default About;