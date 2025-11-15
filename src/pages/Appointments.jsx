import React, { useState } from "react";

export default function AppointmentTracker() {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctor: "Dr. Ravi",
            date: "2025-11-15",
            time: "10:30 AM",
            hospital: "Apollo",
            notes: "Follow-up",
        },
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        doctor: "",
        date: "",
        time: "",
        hospital: "",
        notes: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const addAppointment = () => {
        setAppointments([
            ...appointments,
            { id: Date.now(), ...formData },
        ]);
        setModalOpen(false);
        setFormData({ doctor: "", date: "", time: "", hospital: "", notes: "" });
    };

    return (
        <div className="mt-8 w-[100%] lg:w-[75%] md:w-[70%] h-full p-3 flex lg:flex md:flex flex-col justify-center gap-2 text-sm lg:text-[16px] md:text-md">
            {/* MAIN CONTENT */}
            {/* <div className="flex-1 p-8 min-h-screen"> */}

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    🩺 Doctor Appointments
                </h1>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
                >
                    + Add Appointment
                </button>
            </div>

            {/* TABLE */}
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

            {/* MODAL */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
                        <h2 className="text-xl font-semibold mb-4">📘 Add Appointment</h2>

                        <div className="space-y-3">
                            <input
                                type="text"
                                name="doctor"
                                placeholder="Doctor Name"
                                value={formData.doctor}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="text"
                                name="hospital"
                                placeholder="Hospital"
                                value={formData.hospital}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="text"
                                name="notes"
                                placeholder="Notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={addAppointment}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                Save Appointment
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
        // </div>
    );
}
