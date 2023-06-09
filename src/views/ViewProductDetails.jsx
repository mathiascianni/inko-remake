import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Image, Alert } from "../components/index"
import useFetch from "../hooks/useFetch";

const ViewProductDetails = ({ arrProducts, setArrProducts }) => {
    const location = useLocation();
    const { id } = location.state;
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const { data, error, isLoading } = useFetch("/db/products.json");

    useEffect(() => {
        if (!isLoading) {
            setProduct(data.find(search => search.id === id));
        }

    }, [isLoading, data, id]);

    const handleArrProducts = (product) => {
        const newProduct = {
            ...product,
            quantity: parseInt(quantity)
        };

        let existingProductIndex = arrProducts.findIndex(p => p.id === newProduct.id);

        if (existingProductIndex !== -1) {
            const existingProduct = arrProducts[existingProductIndex];
            const updatedProduct = {
                ...existingProduct,
                quantity: parseInt(existingProduct.quantity) + parseInt(quantity)
            };
            const updatedArrProducts = [...arrProducts];
            updatedArrProducts[existingProductIndex] = updatedProduct;
            setArrProducts(updatedArrProducts);
        } else {
            setArrProducts([...arrProducts, newProduct]);
        }
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // ocultar la alerta después de 3 segundos
      }
    

    const handleAddToCart = (product) => {
        handleArrProducts(product);
        handleAlert();
    }

    return (
        <Container>
            {isLoading ? "Cargando..." : (
                <div className="flex justify-center gap-8 md:flex-row flex-col items-center md:items-start mb-8">
                    <figure className="max-w-[512px]">
                        <Image src={product.image} alt={product.name} />
                    </figure>
                    <div className="flex flex-col justify-between gap-4 font-body flex-1 md:px-4">
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-2xl font-header">{product.name}</h1>
                            <p>{product.description}</p>
                            <p className="font-bold text-red-600 text-lg"><span className="line-through font-normal text-gray-400 text-sm">${(product.price * 1.17).toFixed(1)}</span> ${product.price}</p>
                            <div className="flex flex-col">
                                <label htmlFor="size">Tamaño</label>
                                <select name="size" id="size" className="p-3 border">{product.available_sizes ? product.available_sizes.map((size, i) => <option key={i} value={size}>{size}</option>) : null}</select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="color">Color</label>
                                <select name="color" id="color" className="p-3 border">{product.available_colors ? product && product.available_colors.map((color, i) => <option key={i} value={color}>{color}</option>) : null}</select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="quantity">Cantidad</label>
                                <select name="quantity" id="quantity" className="p-3 border" onChange={handleQuantityChange}>
                                    {[...Array(10)].map((val, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                                </select>
                            </div>
                        </div>
                        <button onClick={() => handleAddToCart(product)} className="bg-red-600 text-white p-4 text-center hover:bg-red-800 transition transition-color">Añadir al carrito</button>
                    </div>

                    {showAlert && <Alert >¡Producto añadido al carro correctamente!</Alert>}
                </div>
            )}
        </Container>
    );
}

export default ViewProductDetails;
