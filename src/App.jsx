// src/App.jsx
import { useState } from "react";
import ReceiveMainInfo from "./components/ReceiveMainInfo";
import ShowMainInfo from "./components/ShowMainInfo";
import RouteQuery from "./components/RouteQuery"; // Nuevo componente para consulta
import "./App.css";

function App() {
    // Estado para los datos de los carriles. Es un array de 5 arrays (uno por carril).
    // Cada sub-array contendrá objetos de las unidades.
    const [lanesData, setLanesData] = useState([[], [], [], [], []]);
    const [isQueryVisible, setIsQueryVisible] = useState(false);

    // Función para agregar una nueva llegada a un carril específico
    const handleAddArrival = (arrivalData, laneIndex) => {
        // Validaciones básicas
        if (laneIndex < 0 || laneIndex >= lanesData.length) {
            alert("⚠️ Carril inválido al intentar agregar.");
            return false;
        }

        const newLanesData = lanesData.map((lane, index) => {
            if (index === laneIndex) {
                // Limitar a 5 unidades por carril como en tu lógica original
                if (lane.length >= 5) {
                    alert(`⚠️ El Carril ${laneIndex + 1} ya está lleno.`);
                    // Devolvemos la lane sin modificar para evitar el return de handleAddArrival
                    throw new Error("LANE_FULL"); // Lanzamos un error específico
                }
                return [...lane, { ...arrivalData, id: Date.now() }]; // Agregamos un ID único
            }
            return lane;
        });
        setLanesData(newLanesData);
        return true; // Indica que se agregó correctamente
    };

    // Función para actualizar una llegada existente
    const handleUpdateArrival = (laneIndex, itemIndex, updatedItemData) => {
        const newLanesData = lanesData.map((lane, lIndex) => {
            if (lIndex === laneIndex) {
                return lane.map((item, iIndex) => {
                    if (iIndex === itemIndex) {
                        return { ...item, ...updatedItemData }; // Mantenemos el ID y actualizamos el resto
                    }
                    return item;
                });
            }
            return lane;
        });
        setLanesData(newLanesData);
    };

    // Función para eliminar una llegada
    const handleDeleteArrival = (laneIndex, itemIndex) => {
        if (
            window.confirm("¿Estás seguro de eliminar esta unidad del carril?")
        ) {
            const newLanesData = lanesData.map((lane, lIndex) => {
                if (lIndex === laneIndex) {
                    return lane.filter((_, iIndex) => iIndex !== itemIndex);
                }
                return lane;
            });
            setLanesData(newLanesData);
        }
    };

    // Función para vaciar toda la tabla
    const handleResetTable = () => {
        if (window.confirm("¿Estás seguro de vaciar toda la tabla?")) {
            setLanesData([[], [], [], [], []]);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-6 p-4 min-h-screen bg-gray-100">
            <div className="w-full max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 my-6">
                    Gestión de Unidades de Camiones
                </h1>

                {/* Formulario y Tabla de Llegadas */}
                {!isQueryVisible ? (
                    <>
                        <ReceiveMainInfo
                            onAddArrival={handleAddArrival}
                            onResetTable={handleResetTable} // Pasamos la función de reset
                        />
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
                                Tabla de Carriles de Camiones
                            </h2>
                            <ShowMainInfo
                                lanesData={lanesData}
                                onUpdateArrival={handleUpdateArrival}
                                onDeleteArrival={handleDeleteArrival}
                            />
                        </div>
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setIsQueryVisible(true)}
                                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                            >
                                Ir a Consultar Rutas
                            </button>
                        </div>
                    </>
                ) : (
                    // Sección de Consulta (se muestra condicionalmente)
                    <div className="w-full max-w-4xl mx-auto mt-8">
                        <RouteQuery
                            lanesData={lanesData}
                            onBack={() => setIsQueryVisible(false)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
