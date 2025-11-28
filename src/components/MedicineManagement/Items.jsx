export default function Items({medicines}) {
  return (
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
  )
}