import React from 'react'

function Appointments({appointments}) {
  return (
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <h1 className='text-center'>Appointments</h1>
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
                        {appointments.map((a, index) => (
                            <tr key={a.id} className="hover:bg-pink-50">
                                <td className="border p-3">{index + 1}</td>
                                <td className="border p-3">{a.doctor}</td>
                                <td className="border p-3">{a.date}</td>
                                <td className="border p-3">{a.time}</td>
                                <td className="border p-3">{a.hospital}</td>
                                <td className="border p-3">{a.notes}</td>
                                <td className="border p-3 flex justify-center">
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

export default Appointments
