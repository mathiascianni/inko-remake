import { ViewClothes, ViewHome, ViewProductDetails } from "./views";
import { Header, Cart } from "./components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {

    const [arrProducts, setArrProducts] = useState([]);

    return (
        <div>
            <Header />
            <Cart cartProducts={arrProducts} setArrProducts={setArrProducts}  />
            <Routes>
                <Route path="/" element={<ViewHome />} />
                <Route path="/pants" element={<ViewClothes type="Pants"/>} />
                <Route path="/kimonos" element={<ViewClothes type="Kimono"/>} />
                <Route path="/tshirts" element={<ViewClothes type="Tshirt"/>} />
                <Route path="/jackets" element={<ViewClothes type="Jacket"/>} />
                <Route path="/products/:id" element={<ViewProductDetails arrProducts={arrProducts} setArrProducts={setArrProducts} />} />
            </Routes>
        </div>
    );
}

export default App;
