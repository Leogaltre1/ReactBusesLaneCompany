// src/components/ArrivalCard.jsx
function ArrivalCard({ arrival }) {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-lg font-bold text-blue-600 mb-1">
                {arrival.unidad}
            </h4>
            <p className="text-md text-gray-700 mb-1">
                <span className="font-semibold">Ruta:</span> {arrival.ruta}
            </p>
            <p className="text-md text-gray-700 mb-1">
                <span className="font-semibold">Carril:</span>{" "}
                {arrival.carrilNombre}
            </p>
            <p className="text-md text-gray-700">
                <span className="font-semibold">Hora de Llegada:</span>{" "}
                {arrival.hora}
            </p>
        </div>
    );
}

export default ArrivalCard;
