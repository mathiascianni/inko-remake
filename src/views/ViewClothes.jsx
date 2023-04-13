import { Helmet } from "react-helmet";
import { Container, Card, Loader } from "../components";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";

const ViewClothes = ({ type }) => {
    const { data, error, isLoading } = useFetch("/db/products.json");
    const [search, setSearch] = useState("");
    const [newData, setNewData] = useState([]);
    const [sort, setSort] = useState("alphabetic");

    let title = "";
    if (type === "Pants") title = "Pantalones";
    if (type === "Kimono") title = "Kimonos";
    if (type === "Tshirt") title = "Remeras";
    if (type === "Jacket") title = "Camperas";

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSort = (e) => {
        setSort(e.target.value)
    }

    useEffect(() => {
        if (data) {
            let newData = [...data];
            if (sort === "alphabetic") newData = (newData.sort((a, b) => a.name.localeCompare(b.name)));
            if (sort === "maxtomin") newData = (newData.sort((a, b) => b.price - a.price));
            if (sort === "mintomax") newData = (newData.sort((a, b) => a.price - b.price));

            setNewData(newData);
        }
    }, [sort, data]);

    return (
        <Container>
            <Helmet><title>{title} | Inko</title></Helmet>
            <div className="md:flex gap-8 ">
                <div className="bg-gray-200 p-6 font-body gap-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="search" >¿Qué buscas?</label>
                        <input type="text" id="search" className="p-3 block w-full" placeholder="Nombre del producto..." onChange={handleSearch} value={search} />
                    </div>

                    <div className="">
                        <p>Ordenar por:</p>
                        <select className="p-3 w-full" onChange={handleSort} value={sort} >
                            <option value="alphabetic">Alfabetico</option>
                            <option value="mintomax">Menor a mayor precio</option>
                            <option value="maxtomin">Mayor a menor precio</option>
                        </select>
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="font-header text-5xl font-bold uppercase mb-8">{title}</h1>
                    <ul className="max-w-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center font-body">
                        {isLoading ? <Loader /> : newData.map(item => ((item.type === type.toLowerCase() && item.name.toLowerCase().includes(search.toLowerCase())) ? <li key={item.id}><Card id={item.id} name={item.name} price={item.price} src={item.image} type={item.type} /></li> : null))}
                    </ul>
                </div>
            </div>
        </Container>
    );
}

export default ViewClothes;
