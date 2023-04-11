import { NavLink } from "react-router-dom";

const NavBar = () => {
    const menu = [
        { text: "Inicio", to: "/" },
        { text: "Pantalones", to: "/pants" },
        { text: "Kimonos", to: "/kimonos" },
        { text: "Remeras", to: "/tshirts" },
        { text: "Camperas", to: "/jackets" },
    ]

    return (
        <nav className="lg:px-64 mb-12">
            <ul className="flex font-header gap-8 justify-center items-center border-y py-3 border-slate-300 text-center ">
                {menu.map((item, index) => <li  key={index}><NavLink to={item.to}>{item.text}</NavLink></li>)}
            </ul>
        </nav>
    );
}

export default NavBar;
