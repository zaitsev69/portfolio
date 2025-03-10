import { Archivo_Narrow } from 'next/font/google';

const archivo_narrow = Archivo_Narrow({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
  });


  const Navbar = () => {
    return (
        <div>
        <ul className="nav-bar font-helvetica text-white justify-around py-5 font-semibold hidden lg:flex">
            <li className="nav-item relative group">
                <a href="/about" className="relative px-4 py-2 transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                    A propos
                </a>
                <span className="absolute -inset-1 p-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-0 rounded-lg"></span>
            </li>
            <li className="nav-item relative group">
                <a href="#projects" className="relative px-4 py-2 transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                    Projets
                </a>
                <span className="absolute -inset-1 p-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-0 rounded-lg"></span>
            </li>
            <li className="nav-item relative group">
                <a href="#contact" className="relative px-4 py-2 transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                    Contact
                </a>
                <span className="absolute -inset-1 p-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-0 rounded-lg"></span>
            </li>
        </ul>
    </div>
    );
};

export default Navbar;
