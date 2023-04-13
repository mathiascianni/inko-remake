import { useState } from "react";
import { CartProduct } from "./index";

const Cart = ({ cartProducts, setArrProducts }) => {
    const [active, setActive] = useState(false);

    function calcTotalPrice(product) {
        console.log(product.quantity)
        return product.price * product.quantity;
    }

    const totalPrices = cartProducts.map(product => calcTotalPrice(product));
    const totalPrice = totalPrices.reduce((total, price) => total + price, 0);

    return (
        <div>
            <div className="fixed top-6 end-6 text-2xl bg-red-600 w-10 h-10 rounded-full flex justify-center items-center text-white z-20 hover:cursor-pointer hover:bg-red-800 transition transition-color" onClick={() => setActive(!active)}>
                {active ? <ion-icon name="close-outline"></ion-icon> : <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute text-base right-[-7px] top-[-7px] bg-red-400  w-6 h-6 flex items-cente justify-center rounded-full z-30">{cartProducts.length}</div>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>}

            </div>

            <div className={`fixed text-white w-full flex flex-col justify-between lg:w-[45vw]  bg-zinc-900/75 backdrop-blur-md h-screen top-0 transtion transition-all duration-1000 z-10 px-6 py-4 lg:px-8 pt-24 ` + (active ? "end-0" : "end-[-100%] lg:end-[-45vw]")}>

                <div className="md:flex border-y p-2 font-bold hidden">
                    <div className="w-[100px]"></div>
                    <p className="flex-1">Producto</p>
                    <p className="flex-1">Precio</p>
                    <p className="flex-1">Cantidad</p>
                    <p className="flex-1">Total</p>
                    <div className="flex-1"></div>
                </div>
                {
                    cartProducts.length > 0 ?
                        <>
                            <ul className="h-full overflow-y-scroll mb-4">
                                {cartProducts.map((product, i) => <li key={i}><CartProduct name={product.name} price={product.price} img={product.image} cartProducts={cartProducts} id={product.id} setArrProducts={setArrProducts} quantity={product.quantity} /></li>)}
                            </ul>
                            <div className="flex flex-col ms-auto mb-4 text-right gap-2">
                                <p>Subtotal: <span className="font-bold">${totalPrice}</span></p>
                                <p>Envío: <span className="font-bold">$250</span></p>
                                <p>Total: <span className="font-bold">${totalPrice + 250}</span></p>
                            </div>
                            <button className="bg-red-600 p-4 hover:bg-red-800 transition">Comprar</button>
                        </>
                        : <p className="mt-2 h-full">No hay productos en tu carrito</p>
                }

            </div>
        </div>
    );
}

export default Cart;