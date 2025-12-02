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
                    className="px-3 py-1 rounded bg-yellow-100"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="px-3 py-1 rounded bg-red-100"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
