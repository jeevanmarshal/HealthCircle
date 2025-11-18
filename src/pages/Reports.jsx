import { useState } from "react";
import Header from '../components/Reports/Header'
import Upload from '../components/Reports/Upload'
import Report from '../components/Reports/Report'
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
        <div className="mt-8 w-[100%] p-3 flex lg:flex md:flex flex-col gap-2 text-sm lg:text-[16px] md:text-md">
            <Header />
            <Upload handleUpload={handleUpload} setFile={setFile} />
            <h2 className="text-xl font-semibold mb-4">Uploaded Reports</h2>
            <Report handleDelete={handleDelete} reports={reports} />

        </div>
    );
};

export default Reports;
