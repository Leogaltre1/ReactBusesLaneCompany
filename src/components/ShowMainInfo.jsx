// src/components/ShowMainInfo.jsx
import { useState } from "react";
import EditModal from "./EditModal";
// import "./../index.css"; // No es necesario si index.css ya está en main.jsx o App.jsx

function ShowMainInfo({ lanesData, onUpdateArrival, onDeleteArrival }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editInfo, setEditInfo] = useState(null); // { laneIndex, itemIndex, data }

    const openEditModal = (laneIndex, itemIndex, cellData) => {
        setEditInfo({
            laneIndex: laneIndex,
            itemIndex: itemIndex,
            data: {
                // Pasamos solo los datos editables
                unidad: cellData.unidad,
                ruta: cellData.ruta,
                hora: cellData.hora || "",
            },
        });
        setModalOpen(true);
    };

    const closeEditModal = () => {
        setModalOpen(false);
        setEditInfo(null);
    };

    const saveEdit = (updatedItemData) => {
        if (editInfo) {
            onUpdateArrival(
                editInfo.laneIndex,
                editInfo.itemIndex,
                updatedItemData
            );
        }
        closeEditModal();
    };

    // Determinar el número máximo de filas necesarias para la tabla
    const maxRows = Math.max(0, ...lanesData.map((lane) => lane.length));

    return (
        <div className="p-4 sm:p-6 max-w-full mx-auto bg-white shadow-xl rounded-lg">
            <div className="overflow-x-auto">
                {lanesData.every((lane) => lane.length === 0) ? (
                    <p className="text-center text-gray-500 py-8 text-lg">
                        La tabla está vacía. Agrega unidades desde el
                        formulario.
                    </p>
                ) : (
                    <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                {/* Encabezados de los carriles */}
                                {lanesData.map((_, laneIndex) => (
                                    <th
                                        key={laneIndex}
                                        className="px-3 py-3 border text-sm sm:text-base"
                                    >
                                        Carril {laneIndex + 1}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {/* Crear filas basadas en el máximo de unidades en cualquier carril */}
                            {Array.from({ length: maxRows }).map(
                                (_, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        {lanesData.map(
                                            (laneItems, laneIndex) => {
                                                const cellData =
                                                    laneItems[rowIndex]; // Obtener el item para esta celda (fila, carril)
                                                return (
                                                    <td
                                                        key={`${laneIndex}-${rowIndex}`}
                                                        className="px-3 py-3 border align-top text-xs sm:text-sm min-h-[80px] h-auto" // min-h para celdas vacías
                                                    >
                                                        {cellData ? (
                                                            <div className="flex flex-col justify-between h-full">
                                                                <div>
                                                                    <div className="mb-1">
                                                                        <strong className="block text-gray-800">
                                                                            {
                                                                                cellData.unidad
                                                                            }
                                                                        </strong>
                                                                        <span className="text-gray-600">
                                                                            {
                                                                                cellData.ruta
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <small className="block text-gray-500">
                                                                        Hora:{" "}
                                                                        {cellData.hora ||
                                                                            "No asignada"}
                                                                    </small>
                                                                </div>
                                                                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                                                                    <button
                                                                        className="text-blue-600 hover:underline text-xs px-2 py-1 rounded bg-blue-100 hover:bg-blue-200 transition-colors"
                                                                        onClick={() =>
                                                                            openEditModal(
                                                                                laneIndex,
                                                                                rowIndex,
                                                                                cellData
                                                                            )
                                                                        }
                                                                    >
                                                                        Editar
                                                                    </button>
                                                                    <button
                                                                        className="text-red-600 hover:underline text-xs px-2 py-1 rounded bg-red-100 hover:bg-red-200 transition-colors"
                                                                        onClick={() =>
                                                                            onDeleteArrival(
                                                                                laneIndex,
                                                                                rowIndex
                                                                            )
                                                                        }
                                                                    >
                                                                        Eliminar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <span className="text-gray-400 italic">
                                                                Vacío
                                                            </span>
                                                        )}
                                                    </td>
                                                );
                                            }
                                        )}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            {modalOpen && editInfo && (
                <EditModal
                    data={editInfo.data} // Pasamos solo los datos del item
                    onClose={closeEditModal}
                    onSave={saveEdit}
                />
            )}
        </div>
    );
}

export default ShowMainInfo;
