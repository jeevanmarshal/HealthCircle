import { useEffect, useState } from "react";

export default function Editdata({ editModal, setEditmodal, selectedAppointment, updateAppointment }) {
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
    hospital: "",
    notes: "",
  });

  useEffect(() => {
    if (selectedAppointment) {
      setForm({
        doctor: selectedAppointment.doctor || "",
        date: selectedAppointment.date || "",
        time: selectedAppointment.time || "",
        hospital: selectedAppointment.hospital || "",
        notes: selectedAppointment.notes || "",
      });
    }
  }, [selectedAppointment]);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSave = async (e) => {
    await updateAppointment();
  };

  if (!editModal) return null;

  return (
    <div className="animate-fadeIn fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="animate-scaleIn bg-white p-4 mt-12 rounded-lg w-96 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">📘 Edit Appointment</h2>

        <div className="space-y-3">
          <input name="doctor" value={form.doctor} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Doctor Name" />
          <input name="date" value={form.date} onChange={handleChange} type="date" className="w-full border p-2 rounded" />
          <input name="time" value={form.time} onChange={handleChange} type="time" className="w-full border p-2 rounded" />
          <input name="hospital" value={form.hospital} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Hospital" />
          <input name="notes" value={form.notes} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Notes" />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={() => setEditmodal(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
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
