import { useState } from "react";

const Reports = () => {
    const [reports, setReports] = useState([
        {
            id: 1,
            name: "Blood Test Report.pdf",
            date: "2025-11-01",
        },
        {
            id: 2,
            name: "ECG Report.jpg",
            date: "2025-11-03",
        },
    ]);

    const [file, setFile] = useState(null);

    const handleDelete = (id) => {
        setReports(reports.filter((report) => report.id !== id));
    };

    const handleUpload = () => {
        if (!file) return;

        const newReport = {
            id: Date.now(),
            name: file.name,
            date: new Date().toISOString().split("T")[0],
        };

        setReports([...reports, newReport]);
        setFile(null);
    };

    return (
        <div className="mt-8 w-[100%] lg:w-[75%] md:w-[70%] h-full p-3 flex lg:flex md:flex flex-col justify-center gap-2 text-sm lg:text-[16px] md:text-md">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    📄 Health Reports
                </h1>

                <button className="bg-pink-500 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-pink-600">
                    + Upload Report
                </button>
            </div>

            {/* Upload Section */}
            <div className="bg-white p-6 rounded-xl shadow mb-8 border-dashed border-pink-200">
                <div className="text-center">
                    <p className="text-gray-600 mb-3">
                        📎 Drag & Drop your file or choose manually
                    </p>

                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="mb-4"
                    />

                    <button
                        onClick={handleUpload}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        Upload
                    </button>
                </div>
            </div>

            {/* Uploaded Reports Grid */}
            <h2 className="text-xl font-semibold mb-4">Uploaded Reports</h2>

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
        </div>
    );
};

export default Reports;
