const Navbar = () => {
    return (
        <div>
            <ul className="text-white justify-around py-5 font-semibold hidden lg:flex" >
                <li><a href="#about">A propos</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

    );
};
export default Navbar;