import { Link } from "react-router-dom";
import { Container } from "../components";
import { Helmet } from "react-helmet";

const View404 = () => {
    return (
        <Container>
            <Helmet><title>Página no encontrada | Inko</title></Helmet>
            <div className="text-center">
                <h1 className="text-3xl uppercase font-bold font-header mb-4">Whoops, parece que la página no existe</h1>
                <div>
                    <Link to="/" className="bg-red-600 text-white p-4 text-center hover:bg-red-800 transition transition-color inline-block">Volver</Link>
                </div>
            </div>
        </Container>
    );
}

export default View404;
