// src/components/EditModal.jsx
import { useState, useEffect } from "react";

function EditModal({ data, onClose, onSave }) {
    // Inicializa el estado del modal con los datos pasados.
    // Data debe ser un objeto { unidad, ruta, hora }
    const [unidad, setUnidad] = useState(data.unidad);
    const [ruta, setRuta] = useState(data.ruta);
    const [hora, setHora] = useState(data.hora);

    // Si los datos iniciales cambian (por ejemplo, si se abre el modal para otro item),
    // actualizamos el estado interno del modal.
    useEffect(() => {
        setUnidad(data.unidad);
        setRuta(data.ruta);
        setHora(data.hora);
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!unidad.trim() || !ruta.trim() || !hora.trim()) {
            // Hora también requerida
            alert("Unidad, Ruta y Hora son requeridos.");
            return;
        }
        // Llama a onSave con solo los datos que pueden ser editados
        onSave({ unidad, ruta, hora });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative transform transition-all duration-300 ease-out scale-95 animate-modalEnter">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl"
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                    Editar Información de Unidad
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Unidad:
                        </label>
                        <input
                            type="text"
                            value={unidad}
                            onChange={(e) => setUnidad(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            required
                            list="edit-units" // Datalist para edición
                        />
                        <datalist id="edit-units">
                            {Array.from(
                                { length: 20 },
                                (
                                    _,
                                    i // 20 unidades como mencionaste
                                ) => (
                                    <option
                                        key={i}
                                        value={`Unidad${String(i + 1).padStart(
                                            2,
                                            "0"
                                        )}`}
                                    />
                                )
                            )}
                        </datalist>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Ruta:
                        </label>
                        <input
                            type="text"
                            value={ruta}
                            onChange={(e) => setRuta(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            required
                            list="edit-routes" // Datalist para edición
                        />
                        <datalist id="edit-routes">
                            {[
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
                                "Tonala", // 21 rutas
                            ].map((r) => (
                                <option key={r} value={r}></option>
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Hora:
                        </label>
                        <input
                            type="time"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors shadow-md hover:shadow-lg"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
// Añadimos la animación para el modal en App.css o index.css
// @keyframes modalEnter {
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// }
// .animate-modalEnter { animation: modalEnter 0.3s ease-out forwards; }

export default EditModal;
