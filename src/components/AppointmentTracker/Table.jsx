export default function Table({appointments}) {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
                <h2 className="text-lg font-semibold mb-3">Upcoming Appointments</h2>

                <table className="w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2 border">No</th>
                            <th className="p-2 border">Doctor</th>
                            <th className="p-2 border">Date</th>
                            <th className="p-2 border">Time</th>
                            <th className="p-2 border">Hospital</th>
                            <th className="p-2 border">Notes</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.map((a, index) => (
                            <tr key={a.id} className="text-center">
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{a.doctor}</td>
                                <td className="border p-2">{a.date}</td>
                                <td className="border p-2">{a.time}</td>
                                <td className="border p-2">{a.hospital}</td>
                                <td className="border p-2">{a.notes}</td>
                                <td className="border p-2 flex justify-center">
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

        </>
    )
}