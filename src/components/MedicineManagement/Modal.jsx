import React, {useState, useEffect} from "react";

export default function Modal({
  showModal,
  setShowModal,
  addMedicine,
  fetchMedicines,
  showAlert,
}) {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    time: "",
    days: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      await addMedicine(form);
      fetchMedicines();
      showAlert("success", "Medicine added!");
    } catch {
      showAlert("error", "Failed to add medicine!");
    }
    setShowModal(false);
    setForm({ name: "", dosage: "", time: "", days: "" });
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-96 shadow-xl">
        <h3 className="text-lg font-semibold mb-4">💊 Add Medicine</h3>

        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Name" />
          <input name="dosage" value={form.dosage} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Dosage" />
          <input name="time" value={form.time} onChange={handleChange} type="time" className="border p-2 w-full rounded" />
          <input name="days" value={form.days} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Days" />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
