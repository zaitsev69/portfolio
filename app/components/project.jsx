import Image from 'next/image'

const Project = () => {
    return (
        <div className="mt-32">
            <h2 className="text-3xl font-bold mb-4 text-white">
                Mes projets
            </h2>
            <div className='grid grid-cols-3 gap-6'>
                <div className="bg-white w-80 h-80 rounded-lg p-3">
                    <div className='flex justify-between'>
                        <Image
                            src="/folder.svg"
                            width={60}
                            height={60} />
                        <Image
                            src="/github.svg"
                            width={60}
                            height={60} />
                    </div>
                    <div className='flex-col'>
                        <h3 className='text-xl font-bold'>Application reporting incident - Laravel</h3>
                        <p className='text-lg mt-4'>Entrée de données via formulaire, système de validation et d’édition via une interface administrateur sécurisé puis restitution en front.</p>
                    </div>
                </div>
                <div className="bg-white w-80 h-80 rounded-lg p-3">
                    <div className='flex justify-between'>
                        <Image
                            src="/folder.svg"
                            width={60}
                            height={60} />
                        <Image
                            src="/github.svg"
                            width={60}
                            height={60} />
                    </div>
                    <div className='flex-col'>
                        <h3 className='text-xl font-bold'>Site vitrine restaurant
                        -NextJS</h3>
                        <p className='text-lg mt-4'>Système de réservation en ligne via un formulaire, gestion des menus via un backoffice. Je me suis appuyer sur la bibliothèque React.</p>
                    </div>
                </div>
                <div className="bg-white w-80 h-80 rounded-lg p-3">
                    <div className='flex justify-between'>
                        <Image
                            src="/folder.svg"
                            width={60}
                            height={60} />
                        <Image
                            src="/github.svg"
                            width={60}
                            height={60} />
                    </div>
                    <div className='flex-col'>
                        <h3 className='text-xl font-bold'>Ce site - NextJs</h3>
                        <p className='text-lg mt-4'>Suite à mon ancien portfolio qui avait été créer en HTML/CSS/JS j'ai décider d'en faire un nouveau. J'ai d'abord réaliser une maquette sur figma avant de la développer en NextJs.</p>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default Project;