import { useState, useEffect } from "react";
// import { formatPostcssSourceMap } from "vite";

export default function Modal({ showModal, setShowModal, medicine, addMedicine, fetchMedicines }) {
    // useEffect(() => {
    //     fetchMedicines();
    // }, []);

    const [form, setForm] = useState({
        id: "",
        name: "",
        dosage: "",
        time: "",
        days: ""
    });

    //store inputs
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // store medicines
    const handleSave = async () => {
        let medicineData = {
            id: ++medicine.length,
            name: form.name,
            dosage: form.dosage,
            time: form.time,
            days: form.days
        }
        try {
            await addMedicine(medicineData);
            fetchMedicines(); // refresh list
            setShowModal(false)
        }

        catch (err) {
            setShowModal(false)
        }
        if (setShowModal)
            setForm({
                id: "",
                name: "",
                dosage: "",
                time: "",
                days: ""
            })
    }

    if (!showModal) return null;
    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                    <div className="bg-white mt-12 p-4 rounded-lg w-96 shadow-xl">
                        <h3 className="text-lg font-semibold mb-4"> <span className="mr-1">💊</span> Add Medicine</h3>
                        <div className="space-y-3">
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Medicine Name" className="border p-2 w-full rounded" />
                            <input type="text" name="dosage" value={form.dosage} onChange={handleChange} placeholder="Dosage" className="border p-2 w-full rounded" />
                            <input type="time" name="time" value={form.time} onChange={handleChange} className="border p-2 w-full rounded" />
                            <input type="text" name="days" value={form.days} onChange={handleChange} placeholder="Frequency" className="border p-2 w-full rounded" />
                        </div>

                        <div className="flex justify-end gap-3 mt-5">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Cancel
                            </button>
                            <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
