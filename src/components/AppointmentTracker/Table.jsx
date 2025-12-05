import React, {useState} from "react";
import DeleteModal from "../DeleteModal";

export default function Table({
  appointments = [],
  setSelectedAppointment,
  setEditmodal,
  deleteAppointment,
  fetchAppointments,
}) {
  const handleEdit = (appt) => {
    setSelectedAppointment(appt);
    setEditmodal(true);
  };
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    id: null,
  });
  const askDelete = (id) => {
    setDeleteModal({ open: true, id });
  };

  const confirmDelete = async () => {
    try {
      await deleteMedicine(deleteModal.id);
    } catch (error) {
      console.log(error);
    }
    setDeleteModal({ open: false, id: null });
  };

  const cancelDelete = () => {
    setDeleteModal({ open: false, id: null });
  };

  const handleDelete = async (id) => {
    // deleteAppointment is provided from parent (already handles loading & alerts)
    await deleteAppointment(id);
  };

  if (!appointments || appointments.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
        No appointments found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-pink-100 text-center">
            <th className="p-3 border">No</th>
            <th className="p-3 border">Doctor</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Hospital</th>
            <th className="p-3 border">Notes</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {appointments.map((a, idx) => (
            <tr key={a.id ?? idx} className="hover:bg-pink-50">
              <td className="border p-3">{idx + 1}</td>
              <td className="border p-3">{a.doctor}</td>
              <td className="border p-3">{a.date}</td>
              <td className="border p-3">{a.time}</td>
              <td className="border p-3">{a.hospital}</td>
              <td className="border p-3">{a.notes}</td>
              <td className="border p-3">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(a)}
                    className="mr-4 rounded"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => askDelete(a.id)}
                    className="px-3 py-1 rounded"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal
        open={deleteModal.open}
        title="Delete Appointment?"
        message="Are you sure you want to delete this Appointment?"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
