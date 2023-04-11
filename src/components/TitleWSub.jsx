const TitleWSub = ({ title, subtitle }) => {
    return (
        <>
            <h2 className="text-3xl uppercase font-bold font-header">{title}</h2>
            <p className="text-xl font-body">{subtitle}</p>
        </>
    );
}

export default TitleWSub;
