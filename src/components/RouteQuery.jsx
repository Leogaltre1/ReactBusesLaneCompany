// src/components/RouteQuery.jsx
import { useState } from "react";
import ArrivalCard from "./ArrivalCard"; // Suponiendo que ArrivalCard está en el mismo directorio

function RouteQuery({ lanesData, onBack }) {
    const [searchRoute, setSearchRoute] = useState("");
    const [foundArrivals, setFoundArrivals] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchRoute.trim()) {
            setFoundArrivals([]);
            setHasSearched(true);
            return;
        }

        const results = [];
        lanesData.forEach((lane, laneIndex) => {
            lane.forEach((item) => {
                if (
                    item.ruta.toLowerCase().includes(searchRoute.toLowerCase())
                ) {
                    results.push({
                        ...item,
                        carrilNombre: `Carril ${laneIndex + 1}`, // Añadimos el nombre del carril
                        carrilIndex: laneIndex, // Podría ser útil para alguna acción futura
                    });
                }
            });
        });
        setFoundArrivals(results);
        setHasSearched(true);
    };

    return (
        <div className="p-6 bg-white shadow-xl rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-700">
                    Consultar Ruta
                </h2>
                <button
                    onClick={onBack}
                    className="px-4 py-2 bg-gray-500 text-black font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
                >
                    &larr; Volver al Registro
                </button>
            </div>
            <form
                onSubmit={handleSearch}
                className="mb-6 flex flex-col sm:flex-row gap-3"
            >
                <input
                    type="text"
                    value={searchRoute}
                    onChange={(e) => {
                        setSearchRoute(e.target.value);
                        setHasSearched(false); // Resetea la búsqueda si el input cambia
                    }}
                    placeholder="Escribe el nombre de la ruta..."
                    className="flex-grow border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    list="all-routes-query"
                />
                {/* Datalist para sugerencias de rutas existentes */}
                <datalist id="all-routes-query">
                    {[...new Set(lanesData.flat().map((item) => item.ruta))] // Obtiene rutas únicas de los datos actuales
                        .map((ruta) => (
                            <option key={ruta} value={ruta} />
                        ))}
                </datalist>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                >
                    Buscar Ruta
                </button>
            </form>

            {hasSearched && foundArrivals.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Resultados de la Búsqueda:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {foundArrivals.map((arrival) => (
                            <ArrivalCard key={arrival.id} arrival={arrival} />
                        ))}
                    </div>
                </div>
            )}

            {hasSearched && foundArrivals.length === 0 && (
                <p className="text-center text-gray-500 py-8 text-lg">
                    {searchRoute.trim()
                        ? `La ruta "${searchRoute}" no ha llegado o no se encontró.`
                        : "No se encontraron resultados para una búsqueda vacía."}
                </p>
            )}
            {!hasSearched && (
                <p className="text-center text-gray-400 py-8 text-md italic">
                    Ingresa una ruta y presiona "Buscar Ruta" para ver los
                    resultados.
                </p>
            )}
        </div>
    );
}

export default RouteQuery;
