export default function Header({setShowModal}) {
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
                💊 Your Medicine Schedule
            </h2>
            <button
                onClick={() => setShowModal(true)}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
            >
                + Add Medicine
            </button>
        </div>

    )
}