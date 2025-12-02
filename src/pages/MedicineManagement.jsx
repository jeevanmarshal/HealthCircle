import { useState, useEffect } from "react";
import Header from "../components/MedicineManagement/Header";
import Table from "../components/MedicineManagement/Table";
import Modal from "../components/MedicineManagement/Modal";
import Editmodal from "../components/MedicineManagement/Editmodal";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

import {
  addMedicine,
  getMedicines,
  updateMedicine,
  deleteMedicine,
} from "../services/medicineService";

export default function MedicinePage() {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [medicines, setMedicines] = useState([]);

  const [selectedData, setSelectedData] = useState(null);

  // UI states
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    fetchMedicines();
  }, []);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 2500);
  };

  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const res = await getMedicines();
      setMedicines(res.data);
    } catch (error) {
      showAlert("error", "Failed to fetch medicines!");
    }
    setLoading(false);
  };

  return (
    <div className="mt-8 w-full p-3 flex flex-col gap-2">

      {loading && <Loader />}
      <Alert type={alert.type} message={alert.message} />

      <Header setShowModal={setShowModal} />

      <Table
        medicines={medicines}
        setSelectedData={setSelectedData}
        setEditModal={setEditModal}
        deleteMedicine={deleteMedicine}
        fetchMedicines={fetchMedicines}
      />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        addMedicine={addMedicine}
        fetchMedicines={fetchMedicines}
        showAlert={showAlert}
      />

      <Editmodal
        editModal={editModal}
        setEditModal={setEditModal}
        selectedData={selectedData}
        fetchMedicines={fetchMedicines}
        updateMedicine={updateMedicine}
        showAlert={showAlert}
      />
    </div>
  );
}
