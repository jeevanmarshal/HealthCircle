export default function Header({setModalOpen}) {
    return (
        <>
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

        </>
    )
}