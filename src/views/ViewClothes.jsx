import { Container, Card, Loader } from "../components";
import useFetch from "../hooks/useFetch";

const ViewClothes = ({ type }) => {
    const { data, error, isLoading } = useFetch("/db/products.json");

    return (
        <Container>
            <h1>{type}</h1>
            <ul className="max-w-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
                {isLoading ? <Loader /> : data.map(item => (item.type === type.toLowerCase() ? <li key={item.id}><Card id={item.id} name={item.name} price={item.price} src={item.image} /></li> : null))}
            </ul>
        </Container>
    );
}

export default ViewClothes;
