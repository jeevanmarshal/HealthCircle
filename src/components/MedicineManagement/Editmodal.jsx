import React, {useState, useEffect} from "react";


export default function Editmodal({
  editModal,
  setEditModal,
  selectedData,
  updateMedicine
}) {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    time: "",
    days: "",
  });

  useEffect(() => {
    if (selectedData) {
      setForm(selectedData);
    }
  }, [selectedData]);

  const handleUpdate = async () => {
    await updateMedicine();
  };

  if (!editModal) return null;

  return (
    <div className="animate-fadeIn fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="animate-scaleIn bg-white p-4 rounded-lg w-96 shadow-xl">
        <h3 className="text-lg font-semibold mb-4">💊 Edit Medicine</h3>

        <div className="space-y-3">
          <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border p-2 w-full rounded" />
          <input name="dosage" value={form.dosage} onChange={(e) => setForm({ ...form, dosage: e.target.value })} className="border p-2 w-full rounded" />
          <input type="time" name="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="border p-2 w-full rounded" />
          <input name="days" value={form.days} onChange={(e) => setForm({ ...form, days: e.target.value })} className="border p-2 w-full rounded" />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={() => setEditModal(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleUpdate} className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        </div>
      </div>
            <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
