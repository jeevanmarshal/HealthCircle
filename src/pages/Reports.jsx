import { useState, useEffect } from "react";
import Header from '../components/Reports/Header'
import Upload from '../components/Reports/Upload'
import Report from '../components/Reports/Report'
import Loader from "../components/Loader";
import Alert from "../components/Alert";

import { getReports, uploadReport, deleteReport } from "../services/reportService";

const Reports = () => {
  // keep the demo data as initial fallback
  const initialReports = [
    { id: 1, name: "Blood Test Report.pdf", date: "2025-11-01" },
    { id: 2, name: "ECG Report.jpg", date: "2025-11-03" },
  ];

  const [reports, setReports] = useState(initialReports);
  const [file, setFile] = useState(null);

  // UI states
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    fetchReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 2500);
  };

  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await getReports();
      // if backend returns array set it, otherwise keep fallback
      if (res?.data && Array.isArray(res.data))
        setReports(res.data);
      else
        showAlert("info", "No reports returned from server.");
    } catch (err) {
      // keep fallback data, show error toast
      showAlert("error", "Failed to fetch reports.");
    } finally {
      setLoading(false);
    }
  };

  // file upload handler
  const handleUpload = async () => {
    if (!file) {
      showAlert("warning", "Please choose a file first.");
      return;
    }

    setLoading(true);
    try {
      // prepare FormData (backend should accept multipart/form-data)
      const formData = new FormData();
      formData.append("file", file);

      // if backend expects additional fields, append them here
      // formData.append("title", file.name);

      await uploadReport(formData);

      showAlert("success", "Report uploaded successfully.");
      setFile(null);
      await fetchReports(); // refresh list
    } catch (err) {
      console.error("Upload error:", err);
      showAlert("error", err?.response?.data?.message || "Failed to upload report.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteReport(id);
      showAlert("success", "Report deleted.");
      // refresh list
      await fetchReports();
    } catch (err) {
      console.error("Delete error:", err);
      showAlert("error", "Failed to delete report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 w-[100%] p-3 flex lg:flex md:flex flex-col gap-2 text-sm lg:text-[16px] md:text-md">
      {loading && <Loader />}
      <Alert alert={alert} />

      <Header />

      {/* pass selector and upload handler */}
      <Upload setFile={setFile} handleUpload={handleUpload} file={file} />

      <h2 className="text-xl font-semibold mb-4">Uploaded Reports</h2>

      <Report reports={reports} handleDelete={handleDelete} />
    </div>
  );
};

export default Reports;
