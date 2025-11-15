export default function ReminderList() {
    return (
        <>
            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <h2 className="text-lg font-semibold mb-2">Upcoming Reminders</h2>
                <ul className="divide-y">
                    <li className="flex justify-between items-center py-2">
                        <span>💊 Vitamin C — 9:00 AM — Daily</span>
                        <div className="flex gap-2">
                            <button className="text-blue-500">Skip</button>
                            <button className="text-green-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </div>
                    </li>
                    <li className="flex justify-between items-center py-2">
                        <span>💊 BP Tablet — 7:00 PM — Daily</span>
                        <div className="flex gap-2">
                            <button className="text-blue-500">Skip</button>
                            <button className="text-green-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </div>
                    </li>
                </ul>
            </div></>
    );
}