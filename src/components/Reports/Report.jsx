import React from 'react'

function Report({reports, handleDelete}) {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => (
                <div
                    key={report.id}
                    className="p-4 bg-white rounded-xl shadow border border-pink-200 flex flex-col"
                >
                    <div className="text-2xl">📁</div>

                    <p className="font-semibold mt-2">{report.name}</p>
                    <p className="text-sm text-gray-500">
                        Date: {report.date}
                    </p>

                    <div className="flex gap-4 mt-4">
                        <button className="text-blue-600 font-medium hover:underline">
                            View
                        </button>
                        <button
                            onClick={() => handleDelete(report.id)}
                            className="text-red-500 font-medium hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Report
