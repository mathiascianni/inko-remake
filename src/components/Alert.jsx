import "../styles/Alert.css"

function Alert({ children }) {
    return (
        <div className="fade-in bg-green-500 text-white w-full lg:w-auto py-4 px-4 rounded fixed bottom-0 lg:bottom-[25px] left-1/2 -translate-x-1/2 ">
            {children}
        </div>
    );
}

export default Alert;