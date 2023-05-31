import { ViewClothes, ViewHome, ViewProductDetails, View404 } from "./views";
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
                <Route path="/pantalones" element={<ViewClothes type="Pants"/>} />
                <Route path="/kimonos" element={<ViewClothes type="Kimono"/>} />
                <Route path="/remeras" element={<ViewClothes type="Tshirt"/>} />
                <Route path="/camperas" element={<ViewClothes type="Jacket"/>} />
                <Route path="/:type/:id" element={<ViewProductDetails arrProducts={arrProducts} setArrProducts={setArrProducts} />} />
                <Route path="*" element={<View404 />} />
            </Routes>
        </div>
    );
}

export default App;
