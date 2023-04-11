const Banner = ({children, src}) => {
    return (
        <div className="w-full relative">
            <video src={src} className="h-[40vh] md:h-[65vh] max-h-[600px] w-full object-cover rounded-lg mx-auto brightness-75" autoPlay muted loop>
                Tu navegador no soporta videos HTML5.
            </video>
            <div className="text-white absolute top-0 h-full font-header w-full flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}

export default Banner;
