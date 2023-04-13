import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

const NavBar = () => {
    const menu = [
        { text: "Inicio", to: "/" },
        { text: "Pantalones", to: "/pantalones" },
        { text: "Kimonos", to: "/kimonos" },
        { text: "Remeras", to: "/remeras" },
        { text: "Camperas", to: "/camperas" },
    ]

    const [open, setOpen] = useState(false);

    return (
        <nav className="lg:px-64 mb-12">
            <ul className="hidden md:flex font-header gap-8 justify-center items-center border-y py-3 border-slate-300 text-center">
                {menu.map((item, index) => <li key={index}><NavLink className="hover-underline" to={item.to}>{item.text}</NavLink></li>)}
            </ul>
            <div className="block md:hidden ">
                <div className="fixed top-6 start-6 text-2xl bg-red-600 w-10 h-10 rounded-full flex justify-center items-center text-white z-40 " onClick={() => setOpen(!open)}>
                    {open ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}
                </div>
                <ul className={`${open ? "left-0" : "left-[-100%]"} flex duration-1000 transition-all text-white flex-col font-header gap-2 py-3 pt-28 text-2xl text-center bg-black/60 backdrop-blur-md h-screen w-full fixed top-0 z-30`}>
                    {menu.map((item, index) => <li key={index}><NavLink className="hover-underline" to={item.to} onClick={() => setOpen(false)}>{item.text}</NavLink></li>)}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
