const Button = ({ onClick }) => {
    return (
        <div className="flex justify-center">
            <button
                onClick={onClick}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            >
                Agregar
            </button>
        </div>
    );
};

export default Button;
