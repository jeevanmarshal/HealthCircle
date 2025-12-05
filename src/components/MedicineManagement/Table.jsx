import { useState } from "react";
import Editmodal from "./Editmodal";
import DeleteModal from "../DeleteModal";

export default function Table({
    medicines,
    getMedicines,
    deleteMedicine,
    fetchMedicines,
    setEditModal,
    EditModal
}) {
    const [preData, setPreData] = useState({
        name: "",
        dosage: "",
        time: "",
        days: "",
    });

    // DELETE MODAL STATE
    const [deleteModal, setDeleteModal] = useState({
        open: false,
        id: null,
    });

    // open delete confirmation modal
    const askDelete = (id) => {
        setDeleteModal({ open: true, id });
    };

    // CONFIRM DELETE
    const confirmDelete = async () => {
        try {
            await deleteMedicine(deleteModal.id);
        } catch (error) {
            console.log(error);
        }
        setDeleteModal({ open: false, id: null });
    };

    // CANCEL DELETE
    const cancelDelete = () => {
        setDeleteModal({ open: false, id: null });
    };

    // EDIT
    const handleEdit = (id) => {
        medicines.forEach((m) => {
            if (m.id == id) {
                setPreData({
                    name: m.name,
                    dosage: m.dosage,
                    time: m.time,
                    days: m.days,
                });
            }
        });

        setEditModal(true);
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-pink-100 text-center">
                        <th className="p-3 border">No</th>
                        <th className="p-3 border">Medicine Name</th>
                        <th className="p-3 border">Dosage</th>
                        <th className="p-3 border">Time</th>
                        <th className="p-3 border">Days</th>
                        <th className="p-3 border">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {medicines.map((m) => (
                        <tr key={m.id} className="hover:bg-pink-50">
                            <td className="p-3 border">{m.id}</td>
                            <td className="p-3 border">{m.name}</td>
                            <td className="p-3 border">{m.dosage}</td>
                            <td className="p-3 border">{m.time}</td>
                            <td className="p-3 border">{m.days}</td>

                            <td className="p-3 border flex">
                                <button
                                    className="w-[50%] mr-5"
                                    onClick={() => handleEdit(m.id)}
                                >
                                    ✏️
                                </button>

                                <button
                                    className="w-[50%]"
                                    onClick={() => askDelete(m.id)}
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                open={deleteModal.open}
                title="Delete Medicine?"
                message="Are you sure you want to delete this medicine?"
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />

            <Editmodal
                fetchMedicines={fetchMedicines}
                setEditModal={setEditModal}
                preData={preData}
                EditModal={EditModal}
                medicines={medicines}
            />
        </div>
    );
}
