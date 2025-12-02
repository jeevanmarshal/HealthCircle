export default function Table({
  medicines,
  setSelectedData,
  setEditModal,
  deleteMedicine,
  fetchMedicines,
}) {
  const handleEdit = (row) => {
    setSelectedData(row);
    setEditModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMedicine(id);
      fetchMedicines();
    } catch {
      console.log("Delete failed");
    }
  };


    if (!medicines || medicines.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
        No medicines found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-pink-100 text-center">
            <th className="p-3 border">No</th>
            <th className="p-3 border">Medicine</th>
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
              <td className="p-3 border flex justify-center gap-3">
                <button onClick={() => handleEdit(m)}>✏️</button>
                <button onClick={() => handleDelete(m.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
