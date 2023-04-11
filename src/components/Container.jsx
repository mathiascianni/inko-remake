const Container = ({ children }) => {
    return (
        <section className="md:container mx-auto px-2 sm:px-0">
            {children}
        </section>
    );
}

export default Container;
