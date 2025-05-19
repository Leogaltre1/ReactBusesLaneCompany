// src/components/ReceiveMainInfo.jsx
import { useState } from "react";
import EnterUnity from "./EnterUnity";
import EnterLane from "./EnterLane";
import EnterRoute from "./EnterRoute";
import EnterHour from "./EnterHour";
import Button from "./Button"; // Tu componente Button
//Quitamos ShowMainInfo de aquí
// import "./../index.css"; // No es necesario si index.css ya está en main.jsx o App.jsx

function ReceiveMainInfo({ onAddArrival, onResetTable }) {
    const [nameUnity, setNameUnity] = useState("");
    const [lane, setLane] = useState("");
    const [route, setRoute] = useState("");
    const [hour, setHour] = useState("");

    const resetForm = () => {
        setNameUnity("");
        setLane("");
        setRoute("");
        setHour("");
    };

    const handleSubmit = () => {
        if (
            !nameUnity.trim() ||
            !lane.trim() ||
            !route.trim() ||
            !hour.trim()
        ) {
            alert(
                "⚠️ Todos los campos son requeridos (Unidad, Carril, Ruta, Hora)."
            );
            return;
        }

        const carrilIndex = parseInt(lane.replace("Carril0", ""), 10) - 1;
        if (isNaN(carrilIndex) || carrilIndex < 0 || carrilIndex > 4) {
            alert("⚠️ Carril inválido. Seleccione un carril del 1 al 5.");
            return;
        }

        const newItem = {
            unidad: nameUnity,
            ruta: route,
            hora: hour,
            // El ID se agregará en App.jsx
        };

        try {
            const addedSuccessfully = onAddArrival(newItem, carrilIndex);
            if (addedSuccessfully) {
                // onAddArrival ahora puede devolver false o lanzar error si falla la validación de carril lleno
                resetForm();
            }
        } catch (error) {
            if (error.message === "LANE_FULL") {
                // El alert ya se muestra en App.jsx, aquí solo evitamos resetear el formulario
                console.warn(
                    "Intento de agregar a carril lleno, manejado en App.jsx"
                );
            } else {
                // Otro tipo de error
                alert("Ocurrió un error inesperado al agregar la unidad.");
                console.error(error);
            }
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-4 justify-center">
            <div className="w-full md:w-auto bg-white border border-gray-300 rounded-2xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                    Registrar Llegada de Unidad
                </h2>
                <div className="space-y-4">
                    <EnterUnity value={nameUnity} setValue={setNameUnity} />
                    <EnterLane value={lane} setValue={setLane} />
                    <EnterRoute value={route} setValue={setRoute} />
                    <EnterHour value={hour} setValue={setHour} />
                    <Button onClick={handleSubmit} />{" "}
                    {/* Tu componente Button */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={onResetTable}
                            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition-all duration-300"
                        >
                            Vaciar Tabla Completa
                        </button>
                    </div>
                </div>
            </div>
            {/* ShowMainInfo se renderiza ahora en App.jsx */}
        </div>
    );
}

export default ReceiveMainInfo;
