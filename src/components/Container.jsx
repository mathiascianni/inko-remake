const Container = ({ children }) => {
    return (
        <section className="md:container mx-auto px-2 sm:px-0 mb-8">
            {children}
        </section>
    );
}

export default Container;
