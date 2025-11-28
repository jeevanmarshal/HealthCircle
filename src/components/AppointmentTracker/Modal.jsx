export default function Modal({ addAppointment, formData, handleChange, setModalOpen, modalOpen }) {
    return (
        <>
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 mt-12 rounded-lg w-96 shadow-xl">
                        <h2 className="text-xl font-semibold mb-4"><span className="mr-1">📘</span> Add Appointment</h2>

                        <div className="space-y-3">
                            <input
                                type="text"
                                name="doctor"
                                placeholder="Doctor Name"
                                value={formData.doctor}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="text"
                                name="hospital"
                                placeholder="Hospital"
                                value={formData.hospital}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="text"
                                name="notes"
                                placeholder="Notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={addAppointment}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}</>
    )
}