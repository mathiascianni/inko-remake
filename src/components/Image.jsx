const Image = ({ src, alt="", classStyle="" }) => {
    return (
        <img src={src !== "" ? src : "/img/not-found.jpg"} alt={alt} className={classStyle} />
    );
}

export default Image;
