import { useState } from "react";

const MedicinePage = () => {
    const [showModal, setShowModal] = useState(false);

    // Dummy data for now
    const medicines = [
        { id: 1, name: "Vitamin C", dosage: "500mg", time: "9:00 AM", days: "Daily" },
        { id: 2, name: "BP Tablet", dosage: "250mg", time: "7:00 PM", days: "Daily" },
    ];

    return (
        <div className="mt-8 w-[100%] lg:w-[75%] md:w-[70%] h-full p-3 flex lg:flex md:flex flex-col justify-center gap-2 text-sm lg:text-[16px] md:text-md">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                    💊 Your Medicine Schedule
                </h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
                >
                    + Add Medicine
                </button>
            </div>

            {/* Table */}
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
                        {medicines.map((m, index) => (
                            <tr key={m.id} className="hover:bg-pink-50">
                                <td className="p-3 border">{index + 1}</td>
                                <td className="p-3 border">{m.name}</td>
                                <td className="p-3 border">{m.dosage}</td>
                                <td className="p-3 border">{m.time}</td>
                                <td className="p-3 border">{m.days}</td>
                                <td className="p-3 border flex">
                                <button className="w-[50%]">
                                        ✏️
                                    </button>
                                    <button className="w-[50%]">
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-lg font-semibold mb-4">Add Medicine</h3>

                        <div className="space-y-3">
                            <input type="text" placeholder="Medicine Name" className="border p-2 w-full rounded" />
                            <input type="text" placeholder="Dosage" className="border p-2 w-full rounded" />
                            <input type="time" className="border p-2 w-full rounded" />
                            <input type="text" placeholder="Frequency (Daily, Weekly...)" className="border p-2 w-full rounded" />
                        </div>

                        <div className="flex justify-end gap-3 mt-5">
                            <button onClick={() => setShowModal(false)} className="px-4 py-1 border rounded">
                                Cancel
                            </button>
                            <button className="px-4 py-1 bg-pink-500 text-white rounded">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedicinePage;
