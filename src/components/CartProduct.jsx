import { Image } from "./index";

const CartProduct = ({ name, price, img, quantity, cartProducts, id, setArrProducts }) => {

    const handleDelete = () => {
        const newCart = cartProducts.filter((value) => value.id !== id);
        setArrProducts(newCart);
    }

    return (
        <div className="w-full flex md:max-h-[100px] bg-white my-4 md:flex-row flex-col">
            <figure className="flex-auto md:max-w-[100px] md:me-2">
                <Image src={img} alt={name} classStyle="w-full" />
            </figure>
            <div className="flex-1 md:flex items-center text-black md:p-0 p-4">
                <p className="flex-1"><span className="md:hidden">Producto: </span>{name}</p>
                <p className="flex-1"><span className="md:hidden">Precio: </span> ${price}</p>
                <p className="flex-1"><span className="md:hidden">Cantidad: </span> x{quantity}</p>
                <p className="flex-1"><span className="md:hidden">Total: </span> ${price * quantity}</p>
                <p className="flex-1 text-red-600 hover:cursor-pointer hover:text-red-800 transition-all text-end md:text-center" onClick={handleDelete}><span className="text-2xl"><ion-icon name="trash-outline"></ion-icon></span><span className="sr-only">Eliminar del carrito</span></p>
            </div>
        </div>
    );
}

export default CartProduct;
