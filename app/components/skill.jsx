import Image from 'next/image'

const Skill = () => {
    return (
        <div className="mt-32">
            <h2 className="text-3xl font-bold mb-4 text-white">Skills</h2>
            <div className='grid grid-cols-5 gap-6'>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>html</p>
                    <Image 
                    src="/html.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>css</p>
                    <Image 
                    src="/css.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>javascript</p>
                    <Image 
                    src="/js.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>php</p>
                    <Image 
                    src="/php.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>react</p>
                    <Image 
                    src="/react.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>tailwind</p>
                    <Image 
                    src="/tailwind.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>nextjs</p>
                    <Image 
                    src="/nextjs.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>laravel</p>
                    <Image 
                    src="/laravel.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>svelte</p>
                    <Image 
                    src="/svelte.svg"
                    width={30}
                    height={30}/>
                </div>
                <div className='bg-white flex size-fit w-52 justify-between items-center px-3 py-1 rounded-lg font-semibold'>
                    <p className='uppercase'>worpress</p>
                    <Image 
                    src="/wordpress.svg"
                    width={30}
                    height={30}/>
                </div>

            </div>
        </div>
    );
};
export default Skill;