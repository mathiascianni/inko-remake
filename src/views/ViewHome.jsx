import { Helmet } from "react-helmet";
import { Banner, TitleWSub, Card, Container, Loader } from "../components";
import useFetch from "../hooks/useFetch";

const ViewHome = () => {
    const { data, error, isLoading } = useFetch("/db/products.json");

    return (
        <>
            <Helmet><title>Inicio | Inko</title></Helmet>
            <Container>
                <Banner src="video/asian-banner.mp4"><h1 className="text-2xl md:text-5xl font-bold uppercase">Asian Style</h1></Banner>
                <div className="text-center my-8">
                    <TitleWSub title="Lo más vendido" subtitle="Explorá lo que la gente más busca" />
                </div>
                <ul className="max-w-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
                    {isLoading ? <Loader /> : data.map(item => (item.featured ? <li key={item.id}><Card id={item.id} name={item.name} price={item.price} src={item.image !== "" ? item.image : "img/not-found.jpg"} /></li> : null))}
                </ul>
            </Container>
        </>
    );
}

export default ViewHome;
