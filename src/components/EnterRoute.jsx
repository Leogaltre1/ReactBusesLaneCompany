function EnterRoute({ value, setValue }) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const rutas = [
        "Huentitan",
        "Valle de los Molinos",
        "Zapopan Centro",
        "Atemajac",
        "Tala",
        "El Arenal",
        "Santa Cecilia",
        "Tequila",
        "Tesistan",
        "Ciudad Granja",
        "Nuevo Mexico",
        "Chapalita",
        "Tlaquepaque",
        "Tabachines",
        "Ameca",
        "Santa Lucia",
        "Valdepeñas",
        "Treboles",
        "Mezcala",
        "San Juan Bosco",
        "Tonala",
    ];

    return (
        <div className="w-64">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-2xl p-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition h-10">
                <input
                    type="text"
                    list="routes"
                    placeholder="  Ruta..."
                    value={value}
                    onChange={handleChange}
                    className="outline-none bg-transparent w-full h-full text-gray-700 placeholder-gray-400 focus:ring-0"
                />
            </div>
            <datalist id="routes">
                {rutas.map((ruta, i) => (
                    <option key={i} value={ruta} />
                ))}
            </datalist>
        </div>
    );
}

export default EnterRoute;
