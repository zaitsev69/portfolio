import { Archivo_Narrow } from 'next/font/google';

const archivo_narrow = Archivo_Narrow({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
  });


const Navbar = () => {
    return (
        <div>
            <ul className={`nav-bar font-helvetica text-white justify-around py-5 font-semibold hidden lg:flex `}>
                <li className="nav-item delay-1"><a href="/about">A propos</a></li>
                <li className="nav-item delay-3"><a href="#projects">Projets</a></li>
                <li className="nav-item delay-4"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
