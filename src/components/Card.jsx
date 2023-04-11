import { Link } from "react-router-dom";
import { Image } from "../components/index"

const Card = ({ id, name, src, price }) => {
    return (
        <div>
            <div className="relative group">
                <Link to={"/products/" + id} state={{ id: id}}>
                    <figure className="overflow-hidden">
                        <Image src={src} alt={name} classStyle="hover:scale-110 transition-transform" />
                    </figure>
                </Link>
                <p className="absolute top-0 pointer-events-none text-white opacity-0 group-hover:opacity-100 transition-all w-full h-full flex justify-center items-center bg-black/75 font-body">Ver Producto</p>
            </div>
            <div className="text-center">
                <h3>{name}</h3>
                <p className="font-bold text-red-600"><span className="line-through font-normal text-gray-400 text-sm">${(price * 1.17).toFixed(2)}</span> ${price}</p>
            </div>
        </div>
    );
}

export default Card;
