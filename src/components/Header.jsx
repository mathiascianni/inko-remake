import { NavBar } from "./index";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full">
            <h1 className="sr-only">Inko</h1>
            <div className="w-max mx-auto py-10">
                <Link to="/"><img src="/img/inko-logo.svg" alt="Logo de Inko" /></Link>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;
