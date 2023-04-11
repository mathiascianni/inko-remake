import { Image } from "./index";

const CartProduct = ({ name, price, img, quantity }) => {
    return (
        <div className="w-full flex max-h-[100px] bg-white my-4">
            <figure className="flex-auto max-w-[100px] me-2">
                <Image src={img} alt={name}/>
            </figure>
            <div className="flex-1 flex items-center text-black">
                <p className="flex-1">{name}</p>
                <p className="flex-1">${price}</p>
                <p className="flex-1">x{quantity}</p>
                <p className="flex-1">${price * quantity}</p>
            </div>
        </div>
    );
}

export default CartProduct;
