export default function Modal({ showModal, setShowModal }) {
    return (
        <>
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
        </>
    );
}
