export default function Dashboard() {
    return (
        <>
            <div className="w-[100%] lg:w-[75%] md:w-[70%] h-full p-3 flex lg:flex md:flex flex-col justify-center gap-2 text-sm lg:text-[16px] md:text-md">
                <div>
                    <h1 className="text-2xl mt-4 lg:mt-8 md:mt-4 font-semibold text-gray-800">Dashboard</h1>
                    <p className="text-gray-600 text-center my-4 text-2xl">Hi Jeeva 👋 Welcome back to Health Circle!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-ne gap-4 my-6 text-center">
                    <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">💊</span> Medicines</div>
                    <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">📅</span> Appointments</div>
                    <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">📁</span> Reports</div>
                    <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">⚠️</span> Alerts</div>
                </div>

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
                </div>

                <div className="flex flex-wrap gap-3 my-4 justify-around" >
                    <button className="bg-pink-500 w-[50%] lg:w-[18%] md:w-[30%] text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                        + Add Medicine
                    </button>
                    <button className="bg-pink-500  w-[50%] lg:w-[18%] md:w-[30%] text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                        + Book Appointment
                    </button>
                </div>

            </div>
        </>
    )
}