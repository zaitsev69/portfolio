import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="text-white justify-between items-center mt-64 hidden lg:flex">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-4">Qui suis-je ?</h2>
                <p className="mb-2 text-lg highlight-text">Actuellement en troisième année à MyDigitalSchool, je prépare un master en Web Design, alliant créativité et expertise technique. Mon parcours m&apos;a permis de développer des compétences solides en développement front-end, en graphisme et en web design. Je maîtrise des technologies modernes telles que HTML, CSS, Tailwind, ainsi que des frameworks comme Next.js, React, VueJs. </p>
                <p className="mb-2 text-lg highlight-text">En parallèle, je possède une expertise avancée sur des outils de design tels que Figma, Photoshop et Illustrator, ce qui me permet de créer des interfaces esthétiques et ergonomiques, ainsi que des contenus graphiques impactants. Mon sens du détail et ma vision créative me permettent de concevoir des expériences utilisateurs à la fois visuelles et fonctionnelles. </p>
                
            </div>

            <Image
                className="rounded-lg color w-2/5 2xl:w-fit   hover:grow"
                src="/large.JPEG"
                alt="Picture of the author"
                width={600}
                height={500}
            />
        </div>

    );
};
export default About;